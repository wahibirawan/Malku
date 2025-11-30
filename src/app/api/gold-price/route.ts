import { NextResponse, NextRequest } from 'next/server';
import { getGoldPriceData } from '@/lib/gold-price';

// In-memory cache configuration
const CACHE_DURATION = 3600 * 1000; // 1 hour in milliseconds

// Cache state
let cache = {
    data: null as any,
    timestamp: 0
};

// Promise cache to prevent "Cache Stampede" (multiple simultaneous requests triggering multiple scrapes)
let pendingFetch: Promise<any> | null = null;

export async function GET(request: NextRequest) {
    // 1. Security: Basic Origin/Referer Check
    // Prevent unauthorized cross-origin access from other websites
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const host = request.headers.get('host') || '';

    // Logic: 
    // - Allow if no origin/referer (direct access/server-side)
    // - Allow if origin/referer contains our host
    // - Block if origin/referer exists but doesn't match our host
    const isAllowed =
        (!origin && !referer) ||
        (origin && origin.includes(host)) ||
        (referer && referer.includes(host));

    if (!isAllowed) {
        return NextResponse.json(
            { error: 'Unauthorized access' },
            { status: 403 }
        );
    }

    try {
        const now = Date.now();
        const isCacheValid = cache.data && (now - cache.timestamp < CACHE_DURATION);

        // 2. Return cached data if valid
        if (isCacheValid) {
            return NextResponse.json(cache.data, {
                headers: {
                    'X-Cache': 'HIT',
                    'Cache-Control': 'public, max-age=3600'
                }
            });
        }

        // 3. Fetch new data (with Stampede Protection)
        // If a fetch is already in progress, reuse that promise
        if (!pendingFetch) {
            console.log('Cache expired or empty. Fetching new gold price data...');
            pendingFetch = getGoldPriceData()
                .then(data => {
                    cache.data = data;
                    cache.timestamp = Date.now();
                    return data;
                })
                .catch(err => {
                    console.error('Fetch failed:', err);
                    throw err;
                })
                .finally(() => {
                    pendingFetch = null; // Reset pending fetch
                });
        }

        const data = await pendingFetch;

        return NextResponse.json(data, {
            headers: {
                'X-Cache': 'MISS',
                'Cache-Control': 'public, max-age=3600'
            }
        });

    } catch (error) {
        console.error('Error in gold price API:', error);

        // Fallback: If fetch fails but we have stale data, return it
        if (cache.data) {
            console.warn('Returning stale cache due to fetch error');
            return NextResponse.json(cache.data, {
                headers: {
                    'X-Cache': 'STALE',
                    'Cache-Control': 'public, max-age=60'
                }
            });
        }

        return NextResponse.json(
            { error: 'Failed to retrieve gold price data' },
            { status: 500 }
        );
    }
}
