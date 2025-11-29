"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-2xl transition-all duration-300 ${isScrolled && !isMobileMenuOpen
                    ? "bg-white/80 backdrop-blur-md border border-border/40 shadow-lg"
                    : "bg-transparent border-transparent shadow-none"
                    }`}
            >
                <div className="p-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                            {/* 3 Stacked Gold Bars Icon */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                                <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V9C20 10.1046 19.1046 11 18 11H6C4.89543 11 4 10.1046 4 9V7Z" fill="currentColor" fillOpacity="0.4" />
                                <path d="M4 12C4 10.8954 4.89543 10 6 10H18C19.1046 10 20 10.8954 20 12V14C20 15.1046 19.1046 16 18 16H6C4.89543 16 4 15.1046 4 14V12Z" fill="currentColor" fillOpacity="0.7" />
                                <path d="M4 17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V17Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">Malku</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Tentang
                        </Link>
                        <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Cara Hitung
                        </Link>
                        <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            FAQ
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="#calculator" className="hidden md:block">
                            <Button>Hitung Zakat</Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
                    <nav className="flex flex-col gap-6 text-center">
                        <Link
                            href="#about"
                            className="text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Tentang
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Cara Hitung
                        </Link>
                        <Link
                            href="#faq"
                            className="text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 w-full">
                            <Button className="w-full h-11 text-sm font-semibold rounded-xl shadow-md">
                                Hitung Zakat Sekarang
                            </Button>
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
