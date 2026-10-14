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
  description: "David Wang — full-stack software engineer and AI developer. Explore projects in web and mobile development, machine learning, and volunteer management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-light dark:bg-dark'>
        <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen -z-[20]`}>
          {children}
        </main>
      </body>
    </html>
  );
}
