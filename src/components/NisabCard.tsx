import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition duration-500"></div>

            <Card className="relative w-full overflow-hidden border-white/50 shadow-md bg-white/80 backdrop-blur-md rounded-xl">
                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 190 190" fill="none" className="w-36 h-36 text-primary rotate-12">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.002 123.441L42.942 123.365L51.419 100.608L111.303 100.012L120.99 122.908L131.893 122.845L141.831 147.483L21.96 147.781L30.002 123.441ZM78.531 105.467L55.149 106.041L49.982 121.525L83.123 121.334L78.531 105.467ZM102.225 143.502L97.633 127.635L74.251 128.208L69.085 143.692L102.225 143.502ZM58.159 127.635L34.777 128.208L29.611 143.692L62.752 143.502L58.159 127.635ZM88.293 86.3671L97.804 72.5941L103.553 77.0051L92.565 89.4671L88.293 86.3671ZM70.65 80.2491L73.588 64.3891L80.839 65.8121L76.525 81.6321L70.65 80.2491ZM45.904 65.8891L52.597 63.8921L56.482 80.5561L51.101 81.6371L45.904 65.8891ZM22.359 81.9571L27.263 76.7071L38.711 88.4471L35.245 92.4831L22.359 81.9571ZM23.993 108.208L8.168 103.288L11.052 96.3101L25.559 103.211L23.993 108.208Z" fill="currentColor" />
                    </svg>
                </div>

                <CardHeader className="pb-2 pt-6 px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center pb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 190 190" fill="none" className="h-10 w-10 text-primary">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M30.002 123.441L42.942 123.365L51.419 100.608L111.303 100.012L120.99 122.908L131.893 122.845L141.831 147.483L21.96 147.781L30.002 123.441ZM78.531 105.467L55.149 106.041L49.982 121.525L83.123 121.334L78.531 105.467ZM102.225 143.502L97.633 127.635L74.251 128.208L69.085 143.692L102.225 143.502ZM58.159 127.635L34.777 128.208L29.611 143.692L62.752 143.502L58.159 127.635ZM88.293 86.3671L97.804 72.5941L103.553 77.0051L92.565 89.4671L88.293 86.3671ZM70.65 80.2491L73.588 64.3891L80.839 65.8121L76.525 81.6321L70.65 80.2491ZM45.904 65.8891L52.597 63.8921L56.482 80.5561L51.101 81.6371L45.904 65.8891ZM22.359 81.9571L27.263 76.7071L38.711 88.4471L35.245 92.4831L22.359 81.9571ZM23.993 108.208L8.168 103.288L11.052 96.3101L25.559 103.211L23.993 108.208Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div>
                                <CardTitle className="text-base font-bold text-foreground tracking-tight">Nisab Zakat Tahun Ini</CardTitle>
                                <p className="text-xs text-muted-foreground font-medium mt-0.5">Update Harian</p>
                            </div>
                        </div>
                        <Badge variant="outline" className="text-[10px] font-semibold px-2.5 py-0.5 h-6 bg-emerald-50/50 text-emerald-600 border-emerald-200/50 flex items-center gap-1 rounded-lg">
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
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button className="focus:outline-none" type="button">
                                            <HelpCircle className="h-4 w-4 text-muted-foreground/50 cursor-pointer hover:text-primary transition-colors" />
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent side="top" className="max-w-[200px] text-xs p-3">
                                        <p>Harga emas dari PT Aneka Logam (ANTAM).</p>
                                        <p className="mt-1 opacity-70">
                                            Update: {updatedAt ? new Date(updatedAt).toLocaleDateString("id-ID", {
                                                day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                                            }) : "-"}
                                        </p>
                                    </PopoverContent>
                                </Popover>
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

