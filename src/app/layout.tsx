import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Pacto",
  description: "Simplify your money management with Pacto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="icon" href="/pactotabpic.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
