/**
 * Fetches the current USD to IDR exchange rate from Bank Indonesia (JISDOR).
 * Scrapes the BI website as there is no public JSON API.
 */
export async function fetchBIFxRate(): Promise<number> {
    try {
        const response = await fetch('https://www.bi.go.id/id/statistik/informasi-kurs/jisdor/default.aspx', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch BI page: ${response.status}`);
        }

        const text = await response.text();

        // Look for the JISDOR rate pattern: "16.661,00"
        // The page usually contains a table with the rate.
        // We look for a number pattern that looks like a currency exchange rate (15.xxx or 16.xxx)
        // specifically around the "JISDOR" text if possible, but a simple regex for the format might suffice
        // if we assume the first occurrence of this format in the relevant section is the rate.

        // However, to be safer, let's look for the specific JISDOR context if we can.
        // Based on the test script, we found "16.661,00".

        // Regex to match "16.661,00" or "15.850,00"
        // Matches: 1-3 digits, dot, 3 digits, comma, 2 digits
        const rateRegex = /([0-9]{1,3}\.[0-9]{3},[0-9]{2})/;

        // We can try to find "JISDOR" index and search near it, but the page might be complex.
        // Let's try to match the regex.
        const match = text.match(rateRegex);

        if (match && match[0]) {
            // Convert "16.661,00" -> 16661.00
            const rateStr = match[0].replace(/\./g, '').replace(',', '.');
            const rate = parseFloat(rateStr);

            if (!isNaN(rate) && rate > 10000 && rate < 20000) {
                return rate;
            }
        }

        console.warn("Could not extract valid BI rate from page, using fallback.");
        return 15850; // Fallback if parsing fails

    } catch (error) {
        console.error("Error fetching BI rate:", error);
        return 15850; // Fallback on error
    }
}
