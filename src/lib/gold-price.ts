import { fetchBIFxRate } from "./bi-rate";
import * as cheerio from 'cheerio';

// Types
export type GoldPriceSource = {
    name: string;
    price: number;
    currency: string;
    unit: 'gram' | 'ounce';
    lastUpdated?: string;
};

export type GoldPriceData = {
    prices: {
        perGramIDR: {
            min: number;
            max: number;
            avg: number;
            recommended: number;
            recommendedRounded: number;
        };
    };
    nisab: {
        minIDR: number;
        maxIDR: number;
        recommendedIDR: number;
    };
    sources: {
        count: number;
        fxRateUsed: number;
        items: GoldPriceSource[];
    };
    updatedAt: string;
};

// Real Data Fetching Functions

async function getAnekaLogamPrice(): Promise<GoldPriceSource | null> {
    try {
        // Updated URL as per user request
        const response = await fetch('https://anekalogam.co.id/id/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Cache-Control': 'no-cache'
            },
            next: { revalidate: 3600 } // 1 hour
        });

        if (!response.ok) throw new Error(`Failed to fetch Aneka Logam: ${response.status}`);

        const html = await response.text();
        const $ = cheerio.load(html);

        let price = 0;

        // Strategy: Find "Harga LM Hari Ini" section -> class "buy-sell-rate" -> "Harga Jual" -> class "today-price"
        // We look for the container that likely holds this structure.

        // Find the "Harga Jual" text, then look for the price associated with it.
        // Based on user description:
        // <div class="buy-sell-rate"> ... terms "Harga Jual" ... <div class="today-price">...</div> ... </div>

        // Let's try to find the specific structure
        $('.buy-sell-rate').each((i, el) => {
            const text = $(el).text();
            if (text.includes('Harga Jual')) {
                // Found the block. Now find the price.
                const priceEl = $(el).find('.today-price');
                const priceText = priceEl.text().trim();

                // Extract number from "Rp 1.500.000" or similar
                const priceMatch = priceText.match(/([0-9]{1,3}\.[0-9]{3}\.[0-9]{3}|[0-9]{1,3}\.[0-9]{3})/);

                if (priceMatch) {
                    const priceStr = priceMatch[0].replace(/\./g, '');
                    const parsed = parseInt(priceStr);
                    if (parsed > 1000000) {
                        price = parsed;
                        return false; // Break loop
                    }
                }
            }
        });

        // Fallback: If the specific structure isn't found (maybe class names changed), try a broader search
        if (price === 0) {
            $('body').find('*').each((i, el) => {
                const text = $(el).text().trim();
                // Look for "Harga Jual" and "Rp" in close proximity or same block
                if (text.includes('Harga Jual') && text.includes('Rp')) {
                    const priceMatch = text.match(/Rp\s*([0-9]{1,3}\.[0-9]{3}\.[0-9]{3}|[0-9]{1,3}\.[0-9]{3})/);
                    if (priceMatch) {
                        const priceStr = priceMatch[1].replace(/\./g, '');
                        const parsed = parseInt(priceStr);
                        if (parsed > 1000000 && parsed < 5000000) {
                            price = parsed;
                            return false;
                        }
                    }
                }
            });
        }

        if (price > 0) {
            return {
                name: 'Aneka Logam (Antam)',
                price: price,
                currency: 'IDR',
                unit: 'gram',
                lastUpdated: new Date().toISOString()
            };
        }

        return null;

    } catch (error) {
        console.error('Error fetching Aneka Logam:', error);
        return null;
    }
}

async function getGlobalGoldPrice(): Promise<GoldPriceSource | null> {
    try {
        const response = await fetch('https://data-asg.goldprice.org/dbXRates/USD', {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Referer': 'https://goldprice.org/'
            },
            next: { revalidate: 3600 }
        });

        if (!response.ok) throw new Error(`Failed to fetch Global Gold Price: ${response.status}`);

        const data = await response.json();
        // data.items[0].xauPrice is price per ounce in USD
        if (data.items && data.items.length > 0) {
            const item = data.items[0];
            if (item.curr === 'USD' && item.xauPrice) {
                return {
                    name: 'Global Market (GoldPrice.org)',
                    price: item.xauPrice,
                    currency: 'USD',
                    unit: 'ounce',
                    lastUpdated: data.date
                };
            }
        }
        return null;
    } catch (error) {
        console.error('Error fetching Global Gold Price:', error);
        return null;
    }
}

function normalizePriceToIDRPerGram(
    source: GoldPriceSource,
    fxRate: number
): number {
    let pricePerGram = source.price;

    if (source.unit === 'ounce') {
        // 1 Troy Ounce = 31.1034768 Grams
        pricePerGram = source.price / 31.1034768;
    }

    if (source.currency === 'IDR') {
        return pricePerGram;
    }

    return pricePerGram * fxRate;
}

export async function getGoldPriceData(): Promise<GoldPriceData> {
    // 1. Fetch data in parallel
    const [anekaLogam, globalPrice, fxRate] = await Promise.all([
        getAnekaLogamPrice(),
        getGlobalGoldPrice(),
        fetchBIFxRate(),
    ]);

    const sources: GoldPriceSource[] = [];
    if (anekaLogam) sources.push(anekaLogam);
    if (globalPrice) sources.push(globalPrice);

    // 2. Normalize all to IDR per gram
    const validPrices = sources.map(s => normalizePriceToIDRPerGram(s, fxRate));

    // 3. Determine Recommended Price
    // Logic: Use Aneka Logam (Antam) as the PRIMARY source.
    // Global price is only used for range reference (min/max).

    let recommendedPrice = 0;

    if (anekaLogam) {
        recommendedPrice = anekaLogam.price;
    } else if (validPrices.length > 0) {
        // Fallback to average if Antam fails but Global exists
        recommendedPrice = validPrices.reduce((a, b) => a + b, 0) / validPrices.length;
        console.warn("Aneka Logam fetch failed, using fallback average.");
    } else {
        // Total failure fallback
        console.warn("All gold price sources failed. Using hardcoded fallback.");
        recommendedPrice = 1550000; // Updated fallback
        validPrices.push(recommendedPrice);
    }

    const recommendedPriceRounded = Math.round(recommendedPrice / 1000) * 1000;

    // 4. Calculate Statistics (Min/Max based on all available sources)
    const minPrice = Math.min(...validPrices);
    const maxPrice = Math.max(...validPrices);
    const avgPrice = validPrices.reduce((a, b) => a + b, 0) / validPrices.length;

    // 5. Calculate Nisab (85 grams)
    const NISAB_GRAMS = 85;
    const nisabMinIDR = minPrice * NISAB_GRAMS;
    const nisabMaxIDR = maxPrice * NISAB_GRAMS;
    const nisabRecommendedIDR = recommendedPriceRounded * NISAB_GRAMS;

    return {
        prices: {
            perGramIDR: {
                min: minPrice,
                max: maxPrice,
                avg: avgPrice,
                recommended: recommendedPrice,
                recommendedRounded: recommendedPriceRounded,
            },
        },
        nisab: {
            minIDR: nisabMinIDR,
            maxIDR: nisabMaxIDR,
            recommendedIDR: nisabRecommendedIDR,
        },
        sources: {
            count: sources.length,
            fxRateUsed: fxRate,
            items: sources
        },
        updatedAt: new Date().toISOString(),
    };
}
