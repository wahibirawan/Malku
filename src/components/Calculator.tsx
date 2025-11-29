"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { formatCurrency } from "@/lib/utils";
import { Calculator as CalculatorIcon, CheckCircle2, XCircle, RotateCcw, Info } from "lucide-react";

interface CalculatorProps {
    nisabRecommendedIDR: number;
    recommendedGoldPricePerGramIDR: number;
}

// Helper to format number with dots
const formatNumberInput = (value: string) => {
    // Remove non-digit characters
    const rawValue = value.replace(/\D/g, "");
    if (!rawValue) return "";
    // Format with dots
    return new Intl.NumberFormat("id-ID").format(Number(rawValue));
};

// Helper to parse formatted string back to number
const parseNumberInput = (value: string) => {
    return Number(value.replace(/\./g, "")) || 0;
};

export function Calculator({ nisabRecommendedIDR, recommendedGoldPricePerGramIDR }: CalculatorProps) {
    const [activeTab, setActiveTab] = useState("simple");
    const [result, setResult] = useState<{
        status: "wajib" | "belum";
        zakatAmount: number;
        netWorth: number;
        ratio: number;
    } | null>(null);

    // Simple Mode State
    const [simpleNetWorth, setSimpleNetWorth] = useState("");

    // Advanced Mode State
    const [cash, setCash] = useState("");
    const [goldGrams, setGoldGrams] = useState("");
    const [investments, setInvestments] = useState("");
    const [businessAssets, setBusinessAssets] = useState("");
    const [receivables, setReceivables] = useState("");
    const [debts, setDebts] = useState("");

    // Advanced Mode Computed Values
    const [advancedStats, setAdvancedStats] = useState({
        gross: 0,
        debts: 0,
        net: 0,
    });

    useEffect(() => {
        const cashVal = parseNumberInput(cash);
        const goldVal = (Number(goldGrams) || 0) * recommendedGoldPricePerGramIDR;
        const investVal = parseNumberInput(investments);
        const businessVal = parseNumberInput(businessAssets);
        const receivablesVal = parseNumberInput(receivables);
        const debtsVal = parseNumberInput(debts);

        const gross = cashVal + goldVal + investVal + businessVal + receivablesVal;
        const net = Math.max(0, gross - debtsVal);

        setAdvancedStats({ gross, debts: debtsVal, net });
    }, [cash, goldGrams, investments, businessAssets, receivables, debts, recommendedGoldPricePerGramIDR]);

    const handleCurrencyChange = (setter: (val: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(formatNumberInput(e.target.value));
    };

    const calculateSimple = () => {
        const net = parseNumberInput(simpleNetWorth);
        if (net < 0) return;

        const isWajib = net >= nisabRecommendedIDR;
        setResult({
            status: isWajib ? "wajib" : "belum",
            zakatAmount: isWajib ? net * 0.025 : 0,
            netWorth: net,
            ratio: net / nisabRecommendedIDR,
        });
    };

    const calculateAdvanced = () => {
        const net = advancedStats.net;
        const isWajib = net >= nisabRecommendedIDR;
        setResult({
            status: isWajib ? "wajib" : "belum",
            zakatAmount: isWajib ? net * 0.025 : 0,
            netWorth: net,
            ratio: net / nisabRecommendedIDR,
        });
    };

    const resetResult = () => setResult(null);

    return (
        <div className="p-6 md:p-12 space-y-10">
            <Tabs defaultValue="simple" className="w-full" onValueChange={(val) => { setActiveTab(val); resetResult(); }}>
                <div className="flex justify-center mb-10">
                    <TabsList className="grid w-full max-w-md grid-cols-2 h-14 rounded-full p-1.5 bg-muted/50 border border-border/50">
                        <TabsTrigger value="simple" className="rounded-full text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all">Mode Sederhana</TabsTrigger>
                        <TabsTrigger value="advanced" className="rounded-full text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all">Mode Rinci</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="simple" className="mt-0">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardHeader className="px-0 pt-0 text-center pb-8">
                            <CardTitle className="text-2xl font-bold text-foreground">Hitung Cepat</CardTitle>
                            <CardDescription className="text-lg">
                                Masukkan total harta bersih Anda jika sudah mengetahuinya.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 space-y-8 max-w-lg mx-auto">
                            <div className="space-y-3">
                                <Label htmlFor="simple-net-worth" className="text-base font-medium text-foreground">Total Harta Bersih (IDR)</Label>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium group-focus-within:text-primary transition-colors">Rp</span>
                                    <Input
                                        id="simple-net-worth"
                                        type="text"
                                        placeholder="0"
                                        value={simpleNetWorth}
                                        onChange={handleCurrencyChange(setSimpleNetWorth)}
                                        className="pl-12 h-14 text-xl font-semibold rounded-2xl border-border/60 bg-white shadow-sm focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
                                    />
                                </div>
                            </div>
                            <Button className="w-full h-14 text-lg font-semibold" onClick={calculateSimple} size="lg">
                                Hitung Zakat Sekarang
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="advanced" className="mt-0">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardHeader className="px-0 pt-0 text-center pb-10">
                            <CardTitle className="text-2xl font-bold text-foreground">Hitung Rinci</CardTitle>
                            <CardDescription className="text-lg max-w-2xl mx-auto">
                                Isi kolom yang relevan dengan harta Anda. <span className="text-primary font-medium">Kosongkan jika tidak ada.</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 space-y-10">
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                                {/* Kas & Tabungan */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-foreground">Kas dan Tabungan</Label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium group-focus-within:text-primary transition-colors">Rp</span>
                                        <Input type="text" value={cash} onChange={handleCurrencyChange(setCash)} placeholder="0" className="pl-12 h-12 rounded-xl border-border/60 bg-white shadow-sm focus-visible:ring-primary/20" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Saldo bank, e-wallet, uang tunai.</p>
                                </div>

                                {/* Emas */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-foreground">Emas & Logam Mulia</Label>
                                    <div className="relative group">
                                        <Input type="number" value={goldGrams} onChange={(e) => setGoldGrams(e.target.value)} placeholder="0" className="pr-16 h-12 rounded-xl border-border/60 bg-white shadow-sm focus-visible:ring-primary/20" />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">gram</span>
                                    </div>
                                    <p className="text-xs text-primary font-medium">
                                        Nilai: {formatCurrency((Number(goldGrams) || 0) * recommendedGoldPricePerGramIDR)}
                                    </p>
                                </div>

                                {/* Investasi */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-foreground">Investasi Likuid</Label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium group-focus-within:text-primary transition-colors">Rp</span>
                                        <Input type="text" value={investments} onChange={handleCurrencyChange(setInvestments)} placeholder="0" className="pl-12 h-12 rounded-xl border-border/60 bg-white shadow-sm focus-visible:ring-primary/20" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Saham, reksadana, sukuk cair.</p>
                                </div>

                                {/* Aset Usaha */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-foreground">Aset Usaha</Label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium group-focus-within:text-primary transition-colors">Rp</span>
                                        <Input type="text" value={businessAssets} onChange={handleCurrencyChange(setBusinessAssets)} placeholder="0" className="pl-12 h-12 rounded-xl border-border/60 bg-white shadow-sm focus-visible:ring-primary/20" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Stok barang & aset lancar.</p>
                                </div>

                                {/* Piutang */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-foreground">Piutang Lancar</Label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium group-focus-within:text-primary transition-colors">Rp</span>
                                        <Input type="text" value={receivables} onChange={handleCurrencyChange(setReceivables)} placeholder="0" className="pl-12 h-12 rounded-xl border-border/60 bg-white shadow-sm focus-visible:ring-primary/20" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Piutang yang akan dibayar.</p>
                                </div>

                                {/* Utang */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-destructive">Utang Jatuh Tempo</Label>
                                    <div className="relative group">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-destructive/60 font-medium group-focus-within:text-destructive transition-colors">Rp</span>
                                        <Input type="text" value={debts} onChange={handleCurrencyChange(setDebts)} placeholder="0" className="pl-12 h-12 rounded-xl border-destructive/30 bg-destructive/5 shadow-sm focus-visible:ring-destructive/20" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Mengurangi wajib zakat.</p>
                                </div>
                            </div>

                            {/* Summary Bar */}
                            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="text-center md:text-left">
                                    <p className="text-sm text-muted-foreground">Total Harta Bersih</p>
                                    <p className="text-2xl font-bold text-primary">{formatCurrency(advancedStats.net)}</p>
                                </div>
                                <Button className="w-full md:w-auto px-8 h-12 text-base font-semibold" onClick={calculateAdvanced} size="lg">
                                    Hitung Zakat
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {result && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className={`rounded-[2rem] p-6 md:p-12 text-center relative overflow-hidden shadow-md transition-colors duration-500 ${result.status === "wajib" ? "bg-primary text-primary-foreground" : "bg-white/60 backdrop-blur-md text-foreground border border-black/5"}`}>
                        {/* Background Pattern - Only for Wajib */}
                        {result.status === "wajib" && (
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                                <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                            </div>
                        )}

                        <div className="relative z-10">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 backdrop-blur-sm ${result.status === "wajib" ? "bg-white/20" : "bg-muted"}`}>
                                {result.status === "wajib" ? <CheckCircle2 className="w-8 h-8 text-white" /> : <Info className="w-8 h-8 text-muted-foreground" />}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                {result.status === "wajib" ? "Wajib Zakat" : "Belum Wajib Zakat"}
                            </h3>
                            <p className={`text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed ${result.status === "wajib" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                                Harta bersih Anda sebesar <span className={`font-bold ${result.status === "wajib" ? "text-white" : "text-foreground"}`}>{formatCurrency(result.netWorth)}</span> {result.status === "wajib" ? "telah mencapai" : "belum mencapai"} nisab ({formatCurrency(nisabRecommendedIDR)}).
                            </p>

                            {result.status === "wajib" && (
                                <div className="space-y-2 mb-10">
                                    <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary-foreground/70">Total Zakat Yang Harus Dikeluarkan</p>
                                    <p className="text-3xl md:text-4xl sm:text-3xl font-bold tracking-tight text-white break-words">
                                        {formatCurrency(result.zakatAmount)}
                                    </p>
                                    <p className="text-sm text-primary-foreground/80">2.5% dari total harta bersih</p>
                                </div>
                            )}
                            <Button
                                variant={result.status === "wajib" ? "secondary" : "default"}
                                onClick={resetResult}
                                className={`rounded-full px-8 h-12 ${result.status === "wajib" ? "bg-white text-primary hover:bg-white/90" : ""}`}
                            >
                                <RotateCcw className="mr-2 h-4 w-4" /> Hitung Ulang
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
