import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar";
import CustomCursor from '@/components/CustomCursor'
import ScrollIndicator from "@/components/ScrollIndicator";

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
      <body className="cursor-none">
        <NavBar />
        <main className="relative overflow-hidden">
          <CustomCursor />
          {children}
          <ScrollIndicator />
        </main>
      </body>
    </html>
  );
}
