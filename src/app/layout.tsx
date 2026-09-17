import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AV Card",
  description:
    "Create virtual naira cards that work anywhere, globally or locally without the dollar card drama.",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", montserrat.variable)}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
