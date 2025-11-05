import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MangoTreasure - Premium Mango Pudding with Nata de Coco",
  description: "Discover the Treasure of Tropics. Premium mango pudding made with 100% real mango, no preservatives. Experience the golden taste of authentic Asian dessert.",
  keywords: ["mango pudding", "nata de coco", "asian dessert", "premium dessert", "no preservatives", "gluten free"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
