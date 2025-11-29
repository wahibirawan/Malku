import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { TrendingUp, ArrowUpRight } from "lucide-react";

interface NisabCardProps {
    nisabRecommendedIDR: number;
    nisabMinIDR: number;
    nisabMaxIDR: number;
    recommendedGoldPricePerGramIDR: number;
    updatedAt: string;
}

export function NisabCard({
    nisabRecommendedIDR,
    nisabMinIDR,
    nisabMaxIDR,
    recommendedGoldPricePerGramIDR,
    updatedAt,
}: NisabCardProps) {
    return (
        <div className="relative w-full group">
            {/* Subtle Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition duration-500"></div>

            <Card className="relative w-full overflow-hidden border-white/50 shadow-md bg-white/80 backdrop-blur-md rounded-3xl">
                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <TrendingUp className="w-32 h-32 text-primary rotate-12" />
                </div>

                <CardHeader className="pb-2 pt-6 px-6 md:px-8 border-b border-border/30">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <TrendingUp className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-base font-bold text-foreground tracking-tight">Nisab Zakat Tahun Ini</CardTitle>
                                <p className="text-xs text-muted-foreground font-medium mt-0.5">Update Harian</p>
                            </div>
                        </div>
                        <Badge variant="outline" className="text-[10px] font-semibold px-2.5 py-0.5 h-6 bg-emerald-50/50 text-emerald-600 border-emerald-200/50 flex items-center gap-1">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                            Live Data
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="pt-8 pb-8 px-6 md:px-8 space-y-8">
                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Nilai Nisab (85g Emas)</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 ml-1">Rp.</span>
                            <span className="text-4xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                                {formatCurrency(nisabRecommendedIDR).replace("Rp", "").trim()}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border/40">
                        <div className="space-y-1.5">
                            <p className="text-xs font-medium text-muted-foreground">Harga Emas / gram</p>
                            <div className="flex items-center gap-2">
                                <p className="text-base font-bold text-foreground">{formatCurrency(recommendedGoldPricePerGramIDR)}</p>
                                <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                            </div>
                        </div>
                        <div className="space-y-1.5 text-right">
                            <p className="text-xs font-medium text-muted-foreground">Terakhir Diupdate</p>
                            <p className="text-base font-bold text-foreground">
                                {updatedAt ? new Date(updatedAt).toLocaleDateString("id-ID", {
                                    day: 'numeric', month: 'short', year: 'numeric'
                                }) : "-"}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
