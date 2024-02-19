import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { inter } from "../lib/fonts";

export const metadata: Metadata = {
  title: "Adriana Frusciante",
  description: "Adriana Frusciante - Celebrante de Casamentos",

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
