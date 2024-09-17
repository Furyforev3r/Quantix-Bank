import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Quantix",
  description: "Quantix Bank!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
