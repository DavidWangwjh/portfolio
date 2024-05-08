import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

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
        <NavBar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
