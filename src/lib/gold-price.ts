import { fetchBIFxRate } from "./bi-rate";

// Types
export type GoldPriceSource = {
    name: string;
    price: number;
    currency: string;
    unit: 'gram' | 'ounce';
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
    };
    updatedAt: string;
};

// Mock Data & Helper Functions

async function getLocalGoldPricesIDR(): Promise<number[]> {
    // Mock local prices (IDR per gram)
    // Real implementation would fetch from APIs
    return [
        1350000, // Source A
        1345000, // Source B
        1355000, // Source C
    ];
}

async function getGlobalGoldPrices(): Promise<GoldPriceSource[]> {
    // Mock global prices
    return [
        { name: 'Global A', price: 2650, currency: 'USD', unit: 'ounce' }, // USD per troy ounce
        { name: 'Global B', price: 85.5, currency: 'USD', unit: 'gram' }, // USD per gram
    ];
}

function normalizePriceToIDRPerGram(
    value: number,
    currency: string,
    unit: 'gram' | 'ounce',
    fxRate: number
): number {
    let pricePerGram = value;
    if (unit === 'ounce') {
        pricePerGram = value / 31.1034768;
    }

    if (currency === 'IDR') {
        return pricePerGram;
    }

    return pricePerGram * fxRate;
}

function filterOutliers(prices: number[]): number[] {
    // Remove invalid
    let validPrices = prices.filter(p => !isNaN(p) && p > 0);

    if (validPrices.length === 0) return [];

    // Compute median
    validPrices.sort((a, b) => a - b);
    const mid = Math.floor(validPrices.length / 2);
    const median = validPrices.length % 2 !== 0
        ? validPrices[mid]
        : (validPrices[mid - 1] + validPrices[mid]) / 2;

    // Filter within 30% of median
    const lowerBound = median * 0.7;
    const upperBound = median * 1.3;
    const filteredPrices = validPrices.filter(p => p >= lowerBound && p <= upperBound);

    // If filtering removed all prices, return the original valid prices
    return filteredPrices.length > 0 ? filteredPrices : validPrices;
}

export async function getGoldPriceData(): Promise<GoldPriceData> {
    // 1. Fetch data in parallel
    const [globalPrices, localPricesIDR, fxRate] = await Promise.all([
        getGlobalGoldPrices(),
        getLocalGoldPricesIDR(),
        fetchBIFxRate(),
    ]);

    // 2. Normalize all to IDR per gram
    const globalPricesIDR = globalPrices.map((p) =>
        normalizePriceToIDRPerGram(p.price, p.currency, p.unit, fxRate)
    );

    const allPricesIDR = [...globalPricesIDR, ...localPricesIDR];

    // 3. Filter outliers
    const validPrices = filterOutliers(allPricesIDR);

    if (validPrices.length === 0) {
        throw new Error("No valid gold price data available");
    }

    // 4. Calculate statistics
    const minPrice = Math.min(...validPrices);
    const maxPrice = Math.max(...validPrices);
    const avgPrice = validPrices.reduce((a, b) => a + b, 0) / validPrices.length;

    // Recommended price: Average of valid prices, rounded to nearest 1000
    const recommendedPrice = avgPrice;
    const recommendedPriceRounded = Math.round(recommendedPrice / 1000) * 1000;

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
            count: validPrices.length,
            fxRateUsed: fxRate,
        },
        updatedAt: new Date().toISOString(),
    };
}
