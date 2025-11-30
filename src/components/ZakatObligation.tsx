import { IllustrationTime } from "./illustrations/IllustrationTime";

export function ZakatObligation() {
    return (
        <section className="py-12 md:py-20 w-full max-w-6xl mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 md:p-12 shadow-md border border-white/50 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="currentColor" className="text-primary" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#pattern-circles)" />
                    </svg>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className="inline-flex items-center rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                            Edukasi Zakat
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
                            Kapan Anda Wajib Membayar Zakat?
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                            <p>
                                Zakat maal (harta) wajib dikeluarkan apabila telah memenuhi dua syarat utama, yaitu <strong>Nisab</strong> dan <strong>Haul</strong>.
                            </p>

                            <ul className="space-y-4 mt-4">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Mencapai Nisab</h4>
                                        <p className="text-sm">Harta yang dimiliki telah mencapai batas minimal setara dengan <strong>85 gram emas murni</strong>.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Mencapai Haul</h4>
                                        <p className="text-sm">Harta tersebut telah tersimpan atau dimiliki selama <strong>satu tahun hijriyah (12 bulan)</strong>.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-primary mt-6">
                            <p className="italic text-muted-foreground text-sm">
                                "Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan mensucikan mereka..."
                            </p>
                            <p className="text-xs font-semibold text-primary mt-2">— QS. At-Taubah: 103</p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-full md:max-w-sm aspect-square flex items-center justify-center bg-gradient-to-tr from-primary/5 to-transparent rounded-full p-4 md:p-8">
                            <IllustrationTime className="w-full h-full drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
