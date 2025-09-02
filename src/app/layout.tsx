import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bawang Goreng Mb Dju",
  description: "Bawang Goreng Mb Dju - Renyah & Gurih",
  keywords: [
    "Bawang Goreng",
    "Bawang Goreng Mb Dju",
    "Cemilan Renyah",
    "Cemilan Gurih",
    "Makanan Khas Indonesia",
    "Oleh-oleh",
    "Snack Tradisional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
