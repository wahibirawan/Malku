import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Malku - Kalkulator Zakat Maal & Emas Terpercaya (Sesuai Syariat)",
  description: "Hitung kewajiban zakat maal, zakat penghasilan, dan zakat emas Anda dengan mudah. Menggunakan data harga emas 24K real-time dan nisab sesuai syariat Islam. Aman, akurat, dan transparan.",
  keywords: ["kalkulator zakat", "zakat maal", "zakat emas", "zakat penghasilan", "nisab zakat 2025", "hitung zakat", "aplikasi zakat", "harga emas", "hukum zakat maal", "hukum zakat emas", "hukum zakat penghasilan"],
  verification: {
    google: "NJXOwiQ-lEAmCsNVtpd1_rfSUvHfVWWzOhTQ0kO8CVc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geist.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
