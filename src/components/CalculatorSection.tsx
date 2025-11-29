"use client";

import { Calculator } from "@/components/Calculator";

interface CalculatorSectionProps {
    nisabRecommendedIDR: number;
    recommendedGoldPricePerGramIDR: number;
}

export function CalculatorSection({
    nisabRecommendedIDR,
    recommendedGoldPricePerGramIDR,
}: CalculatorSectionProps) {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 md:space-y-16 pb-8 md:pb-16" id="calculator">
            <div className="text-center space-y-4 md:space-y-6">
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">Kalkulator Zakat</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-xl leading-relaxed">
                    Hitung kewajiban zakat Anda dengan mudah dan akurat. <br className="hidden md:block" />
                    Transparan, sesuai syariat, dan terpercaya.
                </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-2xl shadow-primary/5 border border-white/50 overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10">
                    <Calculator
                        nisabRecommendedIDR={nisabRecommendedIDR}
                        recommendedGoldPricePerGramIDR={recommendedGoldPricePerGramIDR}
                    />
                </div>
            </div>
        </div>
    );
}
