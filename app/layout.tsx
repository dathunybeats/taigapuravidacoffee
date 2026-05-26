import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Taïga Pura Vida Coffee",
  description: "Specialty coffee rooted in Costa Rican heritage. Small-batch, ethically sourced, brewed with love.",
  icons: {
    icon: "/logo-square-brown.png",
    apple: "/logo-square-brown.png",
  },
  openGraph: {
    title: "Taïga Pura Vida Coffee",
    description: "Specialty coffee rooted in Costa Rican heritage. Small-batch, ethically sourced, brewed with love.",
    images: [{ url: "/logo-square-brown.png", width: 1080, height: 1080, alt: "Taïga Pura Vida Coffee" }],
  },
  twitter: {
    card: "summary",
    title: "Taïga Pura Vida Coffee",
    description: "Specialty coffee rooted in Costa Rican heritage. Small-batch, ethically sourced, brewed with love.",
    images: ["/logo-square-brown.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
