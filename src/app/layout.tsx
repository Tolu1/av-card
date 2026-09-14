import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AV Card",
  description:
    "Create virtual naira cards that work anywhere, globally or locally without the dollar card drama.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
