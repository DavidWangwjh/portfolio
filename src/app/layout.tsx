import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont'
})

export const metadata: Metadata = {
  title: "David Wang - Portfolio",
  description: "This is David's portfolio created using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen -z-[20]`}>
          {children}
          {/* <ScrollIndicator /> */}
        </main>
      </body>
    </html>
  );
}
