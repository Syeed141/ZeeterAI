import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/ZeeterHeader";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Zeeter AI",
  description: "Zeeter AI App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={onest.variable}>
        <SiteHeader />

        <main className="pt-[76px] md:pt-14 lg:pt-20">{children}</main>
      </body>
    </html>
  );
}
