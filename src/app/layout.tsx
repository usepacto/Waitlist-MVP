import type { Metadata } from "next";
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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://vercel.com/font/geist-sans" />
      </head>
      <body className="font-geist">{children}</body>
    </html>
  );
}
