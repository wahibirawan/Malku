import { FAQPage } from "@/components/FAQPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pusat Bantuan & FAQ - Malku Zakat",
    description: "Temukan jawaban lengkap seputar Zakat Maal, perhitungan nisab, hukum zakat emas, dan panduan syariat lainnya di Pusat Bantuan Malku.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans antialiased selection:bg-primary/20">
            <Header />
            <main className="flex-1">
                <FAQPage />
            </main>
            <Footer />
        </div>
    );
}
