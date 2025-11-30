import { NisabCard } from "@/components/NisabCard";
import { CalculatorSection } from "@/components/CalculatorSection";
import { FAQSection } from "@/components/FAQSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import { ZakatObligation } from "@/components/ZakatObligation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowDown, CheckCircle2 } from "lucide-react";
import { getGoldPriceData } from "@/lib/gold-price";
import Link from "next/link";

export const revalidate = 600;

export default async function Home() {
  let data = null;
  let error = null;

  try {
    data = await getGoldPriceData();
  } catch (e) {
    console.error("Failed to fetch gold price data", e);
    error = "Kami belum bisa memuat data harga emas. Coba muat ulang halaman beberapa saat lagi.";
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans antialiased selection:bg-primary/20">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-24 bg-background">
          {/* Subtle Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />

          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div className="space-y-8 text-center lg:text-left">

                <div className="space-y-6 md:space-y-8">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl lg:leading-[1.1]">
                    Tunaikan Zakat <br className="hidden lg:block" />
                    <span className="text-primary relative inline-block">
                      Sesuai Syariat
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                      </svg>
                    </span>
                  </h1>
                  <p className="mx-auto lg:mx-0 max-w-[540px] text-sm text-muted-foreground md:text-lg leading-relaxed">
                    Kalkulator zakat otomatis dengan acuan harga emas <span className="italic">real-time</span>. Cek nisab zakat terbaru dan hitung kewajiban <span className="font-bold">zakat harta (maal)</span> atau <span className="font-bold">zakat penghasilan</span> dengan akurat.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 md:pt-4 w-full sm:w-auto">
                  <Link href="#calculator" className="w-full sm:w-auto">
                    <Button size="default" className="w-full sm:w-auto md:h-11 md:px-8 text-sm md:text-base">
                      Hitung Zakat Sekarang
                    </Button>
                  </Link>
                  <Link href="#how-it-works" className="w-full sm:w-auto">
                    <Button variant="outline" size="default" className="w-full sm:w-auto md:h-11 md:px-8 text-sm md:text-base">
                      Pelajari Cara Kerja
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Content (Nisab Card + Illustration) */}
              <div className="relative mx-auto lg:mr-0 max-w-md lg:max-w-lg w-full perspective-1000">
                {/* Decorative blob behind card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-2xl -z-10" />

                {error ? (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                ) : data ? (
                  <div className="relative z-10 transform transition-transform hover:scale-[1.01] duration-500">
                    <NisabCard
                      nisabRecommendedIDR={data.nisab.recommendedIDR}
                      nisabMinIDR={data.nisab.minIDR}
                      nisabMaxIDR={data.nisab.maxIDR}
                      recommendedGoldPricePerGramIDR={data.prices.perGramIDR.recommendedRounded}
                      updatedAt={data.updatedAt}
                    />
                  </div>
                ) : (
                  <div className="h-64 w-full bg-muted/20 animate-pulse rounded-2xl" />
                )}
              </div>
            </div>

            {/* Trusted Institutions (Sponsor Style) */}
            <div className="mt-20 pt-10 border-t border-border/40">
              <p className="text-sm font-semibold text-muted-foreground text-center mb-8">
                Salurkan Zakat Maal ke lembaga terpercaya:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
                <div className="relative h-20 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <img src="/logos/lazismu.png" alt="Lazismu" className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-16 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <img src="/logos/nucare.png" alt="NU Care-Lazisnu" className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-20 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <img src="/logos/baznas.png" alt="Baznas" className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <img src="/logos/dompet-dhuafa.png" alt="Dompet Dhuafa" className="h-full w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Zakat Obligation Education */}
        <ZakatObligation />

        {/* Calculator Section */}
        <section className="py-12 md:py-20 relative scroll-mt-20" id="calculator">
          <div className="container px-4 mx-auto">
            {data && (
              <CalculatorSection
                nisabRecommendedIDR={data.nisab.recommendedIDR}
                recommendedGoldPricePerGramIDR={data.prices.perGramIDR.recommendedRounded}
              />
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 container px-4 mx-auto" id="faq">
          <FAQSection />
          <div className="text-center">
            <Link href="/faq">
              <Button variant="outline" size="lg" className="w-full sm:w-auto md:h-11 md:px-8 text-sm md:text-base">
                Lihat Semua Pertanyaan
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
