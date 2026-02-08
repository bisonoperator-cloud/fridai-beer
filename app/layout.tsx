import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fridAI.beer - Your Friday AI Beercast",
  description: "Every Friday, we crack open a beer and break down the week's AI news. Casual, approachable AI discussion without the hype.",
  keywords: ["AI", "podcast", "artificial intelligence", "tech", "beer", "friday"],
  metadataBase: new URL("https://fridai.beer"),
  openGraph: {
    title: "fridAI.beer - Your Friday AI Beercast",
    description: "Every Friday, we crack open a beer and break down the week's AI news.",
    url: "https://fridai.beer",
    siteName: "fridAI.beer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fridAI.beer - Your Friday AI Beercast",
    description: "Every Friday, we crack open a beer and break down the week's AI news.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
