import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
    return (
        <section className="w-full max-w-3xl mx-auto py-8 md:py-12">
            <div className="text-center mb-8 md:mb-10">
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground pb-2 md:pb-4">Pertanyaan Umum</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                    Informasi seputar perhitungan zakat maal dan sumber data kami.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Apa itu Nisab Zakat Maal?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                        Nisab zakat maal adalah batas minimal harta yang wajib dikeluarkan zakatnya.
                        Untuk zakat emas, perak, dan uang, nisabnya setara dengan nilai <strong>85 gram emas murni</strong>.
                        Jika harta bersih Anda mencapai nilai ini dan sudah dimiliki selama satu tahun (haul), maka wajib dikeluarkan zakatnya sebesar 2,5%.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Bagaimana cara menghitung Zakat Maal?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                        Rumusnya sederhana: <strong>Total Harta Bersih x 2,5%</strong>.
                        Harta bersih dihitung dari total aset (uang tunai, tabungan, emas, investasi, aset usaha) dikurangi utang jatuh tempo.
                        Anda bisa menggunakan kalkulator di halaman ini untuk perhitungan yang lebih mudah dan rinci.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Dari mana sumber harga emas dan kurs yang digunakan?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                        Kami menggunakan harga jual emas 24K <strong>PT Aneka Logam Indonesia (ANTAM)</strong> sebagai acuan utama untuk menentukan nilai nisab. Angka ini mengikuti pembaruan harian dan mudah diverifikasi.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Apakah perhiasan emas juga dihitung?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                        Ya, jika perhiasan emas tersebut diniatkan untuk simpanan (investasi) dan bukan sekadar perhiasan yang dipakai sehari-hari dalam batas wajar.
                        Namun, pendapat ulama berbeda-beda mengenai perhiasan yang dipakai.
                        Untuk kehati-hatian, banyak yang menyarankan tetap menghitungnya jika jumlahnya signifikan.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Kapan waktu yang tepat membayar Zakat Maal?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                        Zakat Maal tidak harus dibayarkan saat bulan Ramadhan. Waktu wajibnya adalah ketika harta tersebut telah mencapai <strong>Haul</strong> (dimiliki selama satu tahun hijriah penuh) dan tetap mencapai Nisab.
                        Jadi, jika Anda memiliki emas mencapai nisab pada bulan Muharram, maka wajib zakatnya jatuh pada bulan Muharram tahun berikutnya.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>Apakah rumah dan kendaraan pribadi wajib dizakati?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                        <strong>Tidak.</strong> Rumah tempat tinggal, kendaraan pribadi, pakaian, dan perabot rumah tangga yang digunakan untuk keperluan sehari-hari (bukan untuk diperjualbelikan/investasi) tidak dikenakan zakat, berapapun nilainya.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger>Apa perbedaan Zakat Maal dan Zakat Fitrah?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                        <strong>Zakat Fitrah</strong> adalah zakat jiwa yang wajib bagi setiap muslim di bulan Ramadhan (biasanya berupa makanan pokok).
                        Sedangkan <strong>Zakat Maal</strong> adalah zakat harta yang wajib dikeluarkan jika harta mencapai nisab dan haul, tujuannya untuk membersihkan harta dan bisa dibayarkan kapan saja saat syaratnya terpenuhi.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger>Apakah hutang mengurangi kewajiban zakat?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                        Ya, hutang yang jatuh tempo dan harus segera dibayar dapat menjadi pengurang harta wajib zakat.
                        Rumus dasarnya adalah: <strong>(Total Harta - Hutang Jatuh Tempo)</strong>. Jika hasilnya masih di atas Nisab, maka wajib zakat. Jika kurang, maka tidak wajib.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}
