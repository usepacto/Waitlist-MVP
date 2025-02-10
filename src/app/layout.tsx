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
    <html
      lang="en"
      className={GeistSans.variable}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`
          min-h-screen
          text-[#303030]
          font-sans
          bg-white
          antialiased
          text-rendering-optimizeLegibility
        `}
      >
        {children}
      </body>
    </html>
  );
}
