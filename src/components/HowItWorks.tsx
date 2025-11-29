import { Card, CardContent } from "@/components/ui/card";
import { IllustrationNisab } from "@/components/illustrations/IllustrationNisab";
import { IllustrationCalculator } from "@/components/illustrations/IllustrationCalculator";
import { IllustrationPay } from "@/components/illustrations/IllustrationPay";

export function HowItWorks() {
    const steps = [
        {
            illustration: <IllustrationNisab className="w-full h-full" />,
            title: "Cek Nisab",
            description: "Lihat nilai nisab hari ini berdasarkan harga emas terkini yang akurat."
        },
        {
            illustration: <IllustrationCalculator className="w-full h-full" />,
            title: "Hitung Harta",
            description: "Masukkan total harta bersih Anda atau gunakan kalkulator rinci kami."
        },
        {
            illustration: <IllustrationPay className="w-full h-full" />,
            title: "Tunaikan Zakat",
            description: "Jika wajib, salurkan 2.5% harta Anda kepada yang berhak."
        }
    ];

    return (
        <section className="py-12 md:py-24" id="how-it-works">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-foreground">Cara Kerja</h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground text-base sm:text-lg">
                        Proses perhitungan zakat yang transparan dan mudah dipahami dalam 3 langkah sederhana.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3 md:gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 hover:-translate-y-1">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-8 flex justify-center">
                                <div className="w-40 h-40 p-4 bg-muted/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    {step.illustration}
                                </div>
                            </div>

                            <div className="text-center space-y-3">
                                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
