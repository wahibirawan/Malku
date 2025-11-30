export type FAQItem = {
    question: string;
    answer: string;
    source?: string; // Dalil or Reference
};

export type FAQCategory = {
    id: string;
    title: string;
    items: FAQItem[];
};

export const faqData: FAQCategory[] = [
    {
        id: "umum",
        title: "Pertanyaan Umum",
        items: [
            {
                question: "Apa itu Zakat Maal?",
                answer: "Zakat maal adalah zakat yang dikeluarkan atas kewajiban harta yang Anda miliki. Harta itu harus mencapai nisab, dimiliki penuh, bersifat berkembang, dan tersimpan satu haul.",
                source: "QS At Taubah 103, QS Al Baqarah 267, Riwayat Abu Dawud nomor 1573"
            },
            {
                question: "Apa itu Nisab dan Haul?",
                answer: "Nisab adalah batas minimal harta yang wajib dizakati (setara 85 gram emas untuk zakat maal). Haul adalah masa kepemilikan harta tersebut selama satu tahun hijriah (lunar year). Jika harta mencapai nisab dan sudah dimiliki selama satu haul, maka wajib dikeluarkan zakatnya.",
                source: "Hadits Riwayat Abu Dawud No. 1573 & Tirmidzi No. 626"
            },
            {
                question: "Kapan kita harus membayar zakat?",
                answer: "Zakat wajib dibayarkan SEGERA setelah harta mencapai haul (satu tahun kepemilikan) dan tetap di atas nisab. Tidak harus menunggu bulan Ramadhan. Namun, boleh juga dibayarkan lebih awal (Ta'jil) sebelum haul jika nisab sudah tercapai.",
                source: "Hadits Riwayat Ibnu Majah: 'Tidak ada zakat pada harta hingga berlalu satu haul'"
            },
            {
                question: "Apa perbedaan Zakat Maal dan Zakat Fitrah?",
                answer: "Zakat Fitrah adalah zakat jiwa yang wajib bagi setiap muslim di bulan Ramadhan (biasanya berupa makanan pokok). Sedangkan Zakat Maal adalah zakat harta yang wajib dikeluarkan jika harta mencapai nisab dan haul, tujuannya untuk membersihkan harta dan bisa dibayarkan kapan saja saat syaratnya terpenuhi.",
                source: "Hadits Riwayat Bukhari Muslim"
            },
            {
                question: "Apakah pajak bisa menggantikan kewajiban zakat?",
                answer: "Tidak. Zakat dan pajak adalah dua kewajiban yang berbeda. Zakat adalah kewajiban agama (hablum minallah) dengan aturan syariat yang baku, sedangkan pajak adalah kewajiban negara. Membayar pajak tidak menggugurkan kewajiban zakat, namun di Indonesia, bukti pembayaran zakat bisa menjadi pengurang penghasilan kena pajak (bukan pengurang pajak langsung).",
                source: "UU No. 23 Tahun 2011 tentang Pengelolaan Zakat"
            },
            {
                question: "Kenapa kita harus membayar zakat?",
                answer: "Zakat bukan sekadar kewajiban, tapi juga cara membersihkan harta dari hak orang lain, menyucikan jiwa dari sifat kikir, dan membantu sesama yang membutuhkan. Harta yang dizakati akan menjadi berkah dan tumbuh (secara makna maupun fisik).",
                source: "QS. At-Taubah: 103"
            },
            {
                question: "Apakah boleh membayar zakat via transfer bank/online?",
                answer: "Sangat boleh dan sah. Yang terpenting adalah niat saat mentransfer dana tersebut sebagai zakat maal. Akad ijab qabul tidak harus diucapkan secara lisan bertemu muka, bukti transfer sudah menjadi bukti transaksi yang sah secara syariat maupun hukum.",
                source: "Fatwa MUI tentang Zakat Online"
            },
            {
                question: "Apakah perhiasan yang dipakai sehari-hari wajib zakat?",
                answer: "Jumhur ulama berpendapat perhiasan yang dipakai wajar (tidak berlebihan) untuk berhias TIDAK wajib zakat. Namun jika diniatkan untuk tabungan/investasi, atau jumlahnya sangat banyak melampaui kewajaran (urf), maka wajib dizakati.",
                source: "Pendapat Madzhab Syafi'i & Maliki"
            }
        ]
    },
    {
        id: "dasar",
        title: "Dasar & Hukum Zakat",
        items: [
            {
                question: "Apakah Zakat Maal wajib?",
                answer: "Zakat Maal wajib bagi setiap Muslim yang memenuhi syarat mutlak. Ia adalah bagian tertentu dari harta yang wajib dikeluarkan oleh seorang Muslim apabila telah mencapai syarat yang ditetapkan agama. Ia adalah Rukun Islam ke-3 yang berfungsi membersihkan harta dan jiwa, serta bentuk kepedulian sosial.",
                source: "QS. At-Taubah: 103 ('Ambillah zakat dari sebagian harta mereka...') & QS. Adz-Dzariyat: 19"
            },
            {
                question: "Apa syarat mutlak seseorang wajib berzakat?",
                answer: "Seseorang wajib berzakat jika memenuhi syarat: 1) Muslim, 2) Merdeka, 3) Berakal & Baligh, 4) Memiliki harta secara sempurna (milik penuh), 5) Harta mencapai nisab, dan 6) Harta telah dimiliki selama satu tahun (haul) untuk jenis harta tertentu.",
                source: "Ijma' Ulama & Hadits Riwayat Bukhari Muslim"
            },
            {
                question: "Apa perbedaan Harta Wajib Zakat vs Harta Tidak Wajib Zakat?",
                answer: "Harta Wajib Zakat adalah harta yang berkembang (produktif) atau berpotensi berkembang, seperti emas, uang, saham, hewan ternak, dan barang dagangan. Harta Tidak Wajib Zakat adalah harta untuk keperluan pribadi (hajat asliyah) seperti rumah tinggal, kendaraan pribadi, pakaian, dan perabot rumah, kecuali jika diniatkan untuk diperjualbelikan.",
                source: "Hadits Riwayat Muslim: 'Tidak ada kewajiban zakat bagi seorang muslim atas budak dan kudanya (harta pakai)'"
            },
            {
                question: "Apakah anak kecil atau orang gila wajib zakat?",
                answer: "Menurut jumhur ulama (termasuk Syafi'i), harta milik anak kecil atau orang gila TETAP wajib dikeluarkan zakatnya oleh wali mereka jika harta tersebut mencapai nisab dan haul. Karena zakat maal berkaitan dengan hartanya, bukan status mukallaf pemiliknya.",
                source: "Pendapat Madzhab Syafi'i, Maliki, & Hanbali"
            }
        ]
    },
    {
        id: "jenis-harta",
        title: "Emas, Uang & Aset Modern",
        items: [
            {
                question: "Apakah tabungan pensiun atau asuransi wajib dizakati?",
                answer: "Jika dana tersebut bisa dicairkan kapan saja dan jumlahnya mencapai nisab, maka wajib dizakati. Namun jika dana tersebut tidak bisa diambil sebelum jatuh tempo (seperti BPJS Ketenagakerjaan sebelum pensiun), zakatnya dibayarkan saat dana tersebut cair (diterima).",
                source: "Keputusan Muktamar Asosiasi Ulama Zakat Internasional"
            },
            {
                question: "Apakah Saham, Reksadana, dan Obligasi kena zakat?",
                answer: "Ya, surat berharga wajib dizakati jika tujuannya untuk investasi (jual-beli). Nilainya dihitung berdasarkan nilai pasar saat haul. Jika tujuannya untuk dividen (jangka panjang), sebagian ulama berpendapat zakatnya diambil dari keuntungannya saja (seperti zakat pertanian) atau dari modal+untung (seperti zakat perdagangan).",
                source: "Fatwa MUI No. 3 Tahun 2003 tentang Zakat Penghasilan & Yusuf Qardhawi"
            },
            {
                question: "Bagaimana hukum zakat untuk Aset Kripto (Bitcoin, ETH, dll)?",
                answer: "Aset kripto yang diperlakukan sebagai komoditas investasi (digital asset) wajib dizakati jika nilainya mencapai nisab emas dan sudah haul. Perhitungannya diqiyaskan dengan zakat perdagangan (urudh at-tijarah) sebesar 2,5% dari nilai pasar.",
                source: "Hasil Ijtima' Ulama Komisi Fatwa MUI VII Tahun 2021"
            },
            {
                question: "Apakah Youtuber, Influencer, atau Freelancer wajib zakat?",
                answer: "Ya, ini masuk kategori Zakat Profesi/Penghasilan. Jika total pendapatan bersih setahun mencapai nisab (setara 85gr emas), maka wajib dikeluarkan zakatnya 2,5%. Bisa dibayarkan per bulan (saat terima penghasilan) atau diakumulasi di akhir tahun.",
                source: "Fatwa MUI No. 3 Tahun 2003 & Dr. Wahbah Az-Zuhaili (Fiqh Islam wa Adillatuhu)"
            },
            {
                question: "Apakah uang sewa (kontrakan/kos) kena zakat?",
                answer: "Properti yang disewakan (rumah/ruko) tidak kena zakat pada nilai aset bangunannya, melainkan pada HASIL SEWANYA. Jika hasil sewa setahun (setelah dikurangi biaya operasional) mencapai nisab, maka wajib zakat 2,5%, atau ada pendapat lain 5% (qiyas pertanian) atau 10%.",
                source: "Yusuf Qardhawi (Zakat Mustaghallat)"
            }
        ]
    },
    {
        id: "peternakan",
        title: "Zakat Peternakan (An'am)",
        items: [
            {
                question: "Berapa nisab zakat untuk Kambing atau Domba?",
                answer: "Nisab kambing/domba adalah 40 ekor. Jika Anda memiliki 40-120 ekor dan telah dimiliki satu tahun, zakatnya 1 ekor kambing. Syarat utamanya adalah hewan tersebut digembalakan di padang rumput umum (saaimah) dan tidak dicarikan pakan dengan biaya (ma'lufah).",
                source: "Hadits Riwayat Bukhari dari Anas bin Malik"
            },
            {
                question: "Berapa nisab zakat untuk Sapi atau Kerbau?",
                answer: "Nisab sapi adalah 30 ekor. Untuk 30-39 ekor, zakatnya 1 ekor tabi' (sapi jantan/betina umur 1 tahun). Untuk 40-59 ekor, zakatnya 1 ekor musinnah (sapi betina umur 2 tahun).",
                source: "Hadits Riwayat Abu Dawud & Tirmidzi"
            },
            {
                question: "Bagaimana jika hewan ternak tersebut diberi pakan (beli rumput/konsentrat)?",
                answer: "Menurut jumhur ulama (Syafi'i, Hanafi, Hanbali), hewan ternak yang dicarikan pakan (ma'lufah) TIDAK wajib zakat peternakan. Namun, jika hewan tersebut diperjualbelikan (bisnis penggemukan/trading), maka ia terkena Zakat Perdagangan (Tijarah) yang dihitung dari nilai asetnya, bukan jumlah ekornya.",
                source: "Pendapat Jumhur Ulama & Ibnu Qudamah dalam Al-Mughni"
            },
            {
                question: "Apakah ayam potong atau ikan lele kena zakat?",
                answer: "Ayam, bebek, ikan, dan hewan ternak selain unta/sapi/kambing TIDAK terkena zakat peternakan (ainiyah). Tapi mereka terkena Zakat Perdagangan (Tijarah). Jadi yang dihitung adalah nilai total aset niaga (hewan + uang kas) di akhir tahun, jika mencapai nisab emas, zakatnya 2,5%.",
                source: "Fatwa Ulama Kontemporer (Qiyas Tijarah)"
            }
        ]
    },
    {
        id: "perhitungan",
        title: "Perhitungan & Utang",
        items: [
            {
                question: "Apakah Cicilan KPR atau Kendaraan mengurangi wajib zakat?",
                answer: "Hutang yang jatuh tempo saat itu (cicilan bulan berjalan) boleh menjadi pengurang harta wajib zakat. Namun, total sisa hutang jangka panjang (misal sisa KPR 10 tahun) TIDAK mengurangi harta wajib zakat, karena akan menghabiskan nisab dan menggugurkan kewajiban zakat orang kaya.",
                source: "Rekomendasi Simposium Zakat Internasional (Kuwait) & Fatwa Yusuf Qardhawi"
            },
            {
                question: "Saya punya emas 50 gram dan uang 50 juta, apakah wajib zakat?",
                answer: "Ya, wajib. Karena emas dan uang adalah satu jenis harta (tsaman/alat tukar), maka nilainya digabung. Jika total nilai emas + uang melebihi harga 85 gram emas, maka terkena zakat 2,5% dari total keduanya.",
                source: "Pendapat Mayoritas Ulama (Jumhur) tentang penggabungan harta sejenis"
            },
            {
                question: "Bagaimana cara menghitung Zakat Perdagangan (Toko/Online Shop)?",
                answer: "Rumusnya: (Modal Putar + Keuntungan + Piutang Lancar) - (Hutang Jatuh Tempo). Aset tetap seperti bangunan toko, rak, komputer admin TIDAK dihitung. Hanya barang dagangan dan uang kas yang dihitung.",
                source: "Hadits Riwayat Abu Dawud dari Samurah bin Jundub"
            },
            {
                question: "Apakah pajak yang sudah dibayar mengurangi zakat?",
                answer: "Pajak tidak mengurangi kewajiban zakat secara langsung. Namun, pajak yang sudah dibayarkan bisa dianggap sebagai pengurang harta (biaya), sehingga yang dizakati adalah sisa harta setelah pajak.",
                source: "Keputusan Ijtima' Ulama Komisi Fatwa MUI"
            }
        ]
    },
    {
        id: "waktu",
        title: "Waktu & Teknis Bayar",
        items: [
            {
                question: "Bolehkah memberikan zakat ke saudara kandung atau orang tua?",
                answer: "Memberikan zakat ke Orang Tua (ke atas) atau Anak (ke bawah) hukumnya TIDAK BOLEH, karena mereka adalah tanggungan nafkah wajib. Namun, memberikan zakat ke saudara kandung, paman, atau kerabat lain yang miskin dan tidak dalam tanggungan nafkah kita, hukumnya BOLEH bahkan LEBIH UTAMA (dapat pahala zakat + silaturahmi).",
                source: "Hadits Riwayat Tirmidzi: 'Sedekah kepada orang miskin satu pahala, kepada kerabat dua pahala'"
            },
            {
                question: "Apakah boleh membayar zakat dengan cara dicicil?",
                answer: "Boleh (Ta'jil) jika dilakukan sebelum haul untuk meringankan. Namun jika sudah jatuh tempo (haul), zakat harus segera ditunaikan. Penundaan setelah haul hanya dibolehkan jika ada udzur syar'i atau menunggu kerabat miskin yang sedang dalam perjalanan.",
                source: "Pendapat Imam Nawawi dalam Al-Majmu'"
            },
            {
                question: "Bolehkah menyalurkan zakat dalam bentuk barang (Sembako)?",
                answer: "Madzhab Syafi'i mewajibkan zakat dibayar sesuai jenis hartanya (uang dengan uang). Namun Madzhab Hanafi dan sebagian ulama kontemporer MEMBOLEHKAN dalam bentuk barang (qimah) jika itu lebih bermanfaat bagi penerima (misal: sembako untuk fakir miskin yang kelaparan).",
                source: "Pendapat Madzhab Hanafi & Syaikhul Islam Ibnu Taimiyah"
            },
            {
                question: "Bolehkah zakat diberikan untuk pembangunan masjid?",
                answer: "Mayoritas ulama (Jumhur) berpendapat zakat TIDAK BOLEH untuk fisik bangunan masjid, karena masjid bukan termasuk 8 asnaf (bukan orang). Namun sebagian ulama membolehkan atas nama 'Fi Sabilillah' dalam arti luas, meski pendapat jumhur lebih kuat untuk kehati-hatian. Sebaiknya gunakan Infaq/Sedekah untuk masjid.",
                source: "Fatwa MUI & Pendapat Jumhur Ulama"
            }
        ]
    },
    {
        id: "khusus",
        title: "Pertanyaan Unik & Kasuistik",
        items: [
            {
                question: "Apakah hadiah undian atau doorprize wajib zakat?",
                answer: "Hadiah yang didapat tanpa usaha (seperti undian) disebut Rizqi Mubah. Sebagian ulama menyamakannya dengan Rikaz (harta temuan) dengan zakat 20% saat diterima. Sebagian lain memasukkannya ke Zakat Penghasilan (2,5%) jika mencapai nisab.",
                source: "Analogi (Qiyas) terhadap Rikaz atau Penghasilan"
            },
            {
                question: "Saya menemukan harta karun (emas kuno), bagaimana zakatnya?",
                answer: "Ini disebut Rikaz. Wajib dikeluarkan zakatnya sebesar 20% (seperlima) segera saat ditemukan, tanpa menunggu haul dan tanpa syarat nisab (menurut sebagian ulama, atau nisab emas menurut yang lain).",
                source: "Hadits Riwayat Bukhari Muslim: 'Dan pada rikaz (harta temuan) zakatnya seperlima (20%)'"
            },
            {
                question: "Apakah istri wajib bayar zakat sendiri atau ditanggung suami?",
                answer: "Zakat adalah kewajiban individu (fardhu 'ain) bagi pemilik harta. Jika istri memiliki harta sendiri (gaji, warisan, emas mahar) yang mencapai nisab, maka ISTRI WAJIB mengeluarkan zakatnya sendiri, kecuali jika suami sukarela membayarkannya atas nama istri.",
                source: "QS. Al-Baqarah: 286 ('Ia mendapat pahala dari kebajikan yang diusahakannya...')"
            },
            {
                question: "Bagaimana zakat uang pesangon PHK?",
                answer: "Uang pesangon wajib dizakati jika jumlahnya mencapai nisab. Zakatnya dikeluarkan saat uang tersebut diterima (cair) sebesar 2,5%. Ini diqiyaskan dengan zakat penghasilan atau harta kaget (rikaz) tergantung sifat perolehannya.",
                source: "Fatwa Ulama Kontemporer"
            }
        ]
    }
];
