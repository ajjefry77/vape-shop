import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VAPEZONE | فروشگاه تخصصی ویپ و پاد",
  description:
    "فروشگاه تخصصی ویپ، پاد سیستم، سالت نیکوتین، جویس و لوازم جانبی با بهترین قیمت و ضمانت اصالت. ارسال سریع به سراسر کشور.",
  keywords: "ویپ, پاد, سالت نیکوتین, جویس, کویل, فروشگاه ویپ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay">
        {children}
      </body>
    </html>
  );
}
