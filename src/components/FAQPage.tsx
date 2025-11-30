"use client";

import { useState, useMemo } from "react";
import { faqData, FAQCategory } from "@/lib/faq-data";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Search,
    BookOpen,
    HelpCircle,
    Calculator,
    Gem,
    CalendarClock,
    HandHeart,
    MessageCircleQuestion,
    Sprout,
    LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Map category IDs to specific icons
const categoryIcons: Record<string, LucideIcon> = {
    "umum": HelpCircle,
    "dasar": BookOpen,
    "jenis-harta": Gem,
    "peternakan": Sprout,
    "perhitungan": Calculator,
    "waktu": CalendarClock,
    "penyaluran": HandHeart,
    "khusus": MessageCircleQuestion
};

export function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("all");

    // Filter data based on search query and active category
    const filteredData = useMemo(() => {
        let data = faqData;

        // 1. Filter by Category
        if (activeCategory !== "all") {
            data = faqData.filter(cat => cat.id === activeCategory);
        }

        // 2. Filter by Search Query
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            data = data.map(category => ({
                ...category,
                items: category.items.filter(item =>
                    item.question.toLowerCase().includes(lowerQuery) ||
                    item.answer.toLowerCase().includes(lowerQuery)
                )
            })).filter(category => category.items.length > 0);
        }

        return data;
    }, [searchQuery, activeCategory]);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header Section */}
            <div className="bg-primary/5 border-b border-primary/10 pt-28 pb-12 md:pt-40 md:pb-20">
                <div className="container px-4 mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
                    <div className="inline-flex items-center justify-center p-2.5 md:p-3 bg-white rounded-full mb-2">
                        <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-foreground">
                        Pusat Bantuan & FAQ
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Temukan jawaban lengkap seputar Zakat Maal, perhitungan nisab, dan panduan syariat lainnya.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto mt-6 md:mt-8">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                        </div>
                        <Input
                            type="text"
                            placeholder="Cari pertanyaan... (misal: emas, kripto)"
                            className="pl-10 md:pl-11 h-11 md:h-14 rounded-xl text-sm md:text-lg bg-white shadow-sm border-primary/20 focus-visible:ring-primary/30"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="container px-4 mx-auto max-w-6xl mt-8 md:mt-12">
                <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">

                    {/* Sidebar Navigation (Desktop) / Horizontal Scroll (Mobile) */}
                    <aside className="lg:sticky lg:top-24 space-y-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 flex lg:block gap-2 whitespace-nowrap lg:whitespace-normal no-scrollbar z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:bg-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
                        <p className="hidden lg:block text-sm font-semibold text-muted-foreground mb-4 px-2 uppercase tracking-wider">
                            Kategori
                        </p>

                        {/* 'Semua Pertanyaan' Button */}
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={cn(
                                "px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all text-left flex items-center gap-2 md:gap-3 flex-shrink-0",
                                activeCategory === "all"
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-muted/50 lg:bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground border lg:border-0 border-border/50"
                            )}
                        >
                            <div className={cn("p-1 rounded-md", activeCategory === "all" ? "bg-white/20" : "bg-muted")}>
                                <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </div>
                            Semua Pertanyaan
                        </button>

                        {faqData.map((category) => {
                            const Icon = categoryIcons[category.id] || BookOpen;
                            const isActive = activeCategory === category.id;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={cn(
                                        "px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all text-left flex items-center gap-2 md:gap-3 flex-shrink-0",
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "bg-muted/50 lg:bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground border lg:border-0 border-border/50"
                                    )}
                                >
                                    <div className={cn("p-1 rounded-md", isActive ? "bg-white/20" : "bg-muted")}>
                                        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                    </div>
                                    {category.title}
                                </button>
                            );
                        })}
                    </aside>

                    {/* Content Area */}
                    <div className="space-y-8 md:space-y-12 min-h-[500px]">
                        {filteredData.length > 0 ? (
                            filteredData.map((category) => {
                                const Icon = categoryIcons[category.id] || BookOpen;
                                return (
                                    <section key={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                                            <div className="p-2 bg-primary/5 rounded-xl">
                                                <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-bold text-foreground">{category.title}</h2>
                                        </div>
                                        <div className="bg-white/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden shadow-sm">
                                            <Accordion type="single" collapsible className="w-full">
                                                {category.items.map((item, index) => (
                                                    <AccordionItem key={index} value={`${category.id}-${index}`} className="border-b last:border-0 px-4 md:px-6">
                                                        <AccordionTrigger className="text-left text-sm md:text-lg font-medium py-4 md:py-5 hover:text-primary transition-colors leading-snug">
                                                            {item.question}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                                                            {item.answer}
                                                            {item.source && (
                                                                <div className="mt-4 pt-4 border-t border-border/40 flex gap-2 items-start">
                                                                    <div className="mt-0.5 min-w-[16px]">
                                                                        <BookOpen className="w-3.5 h-3.5 text-primary/60" />
                                                                    </div>
                                                                    <p className="text-xs md:text-sm font-medium text-primary/80">
                                                                        {item.source}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                        </div>
                                    </section>
                                );
                            })
                        ) : (
                            <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed border-border">
                                <Search className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/30 mx-auto mb-4" />
                                <h3 className="text-lg md:text-xl font-semibold text-foreground">Tidak ditemukan hasil</h3>
                                <p className="text-sm md:text-base text-muted-foreground mt-2">
                                    Coba gunakan kata kunci lain atau jelajahi kategori yang tersedia.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-6"
                                    onClick={() => setSearchQuery("")}
                                >
                                    Reset Pencarian
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="container px-4 mx-auto max-w-4xl mt-16 md:mt-24 text-center">
                <div className="bg-primary/3 rounded-2xl p-6 md:p-12 border border-black/2">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Masih bingung menghitung zakat?</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto">
                        Gunakan kalkulator otomatis kami untuk mendapatkan perhitungan yang akurat sesuai harga emas hari ini.
                    </p>
                    <Link href="/#calculator">
                        <Button size="lg" className="h-10 md:h-12 px-6 md:px-8 text-sm md:text-base">
                            Hitung Zakat Sekarang
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
