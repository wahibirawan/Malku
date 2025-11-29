import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Malku - Hitung Zakat Maal Sesuai Syariat",
  description: "Kalkulator zakat maal otomatis dengan data harga emas real-time dan konversi kurs BI.",
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
