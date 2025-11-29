import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FiqhExplanation() {
    return (
        <Card className="w-full max-w-3xl mx-auto mt-12 bg-muted/30 border-none shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">
                    Sekilas tentang perhitungan zakat maal
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>
                        Nisab zakat maal setara dengan nilai <strong>85 gram emas</strong>.
                    </li>
                    <li>
                        Tarif zakat maal adalah <strong>2,5 persen</strong> dari harta yang sudah mencapai nisab dan dimiliki penuh selama satu tahun hijriah (haul).
                    </li>
                    <li>
                        Perhitungan di halaman ini menggunakan rata-rata beberapa harga emas lokal dan global yang dikonversi ke rupiah, lalu dihitung nilai nisabnya per hari.
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}
