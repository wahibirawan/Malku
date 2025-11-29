import { NextResponse } from 'next/server';
import { getGoldPriceData } from '@/lib/gold-price';

export const revalidate = 3600; // Revalidate every 1 hour

export async function GET() {
    try {
        const data = await getGoldPriceData();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error calculating gold price:', error);
        return NextResponse.json(
            { error: 'Failed to calculate gold price' },
            { status: 500 }
        );
    }
}
