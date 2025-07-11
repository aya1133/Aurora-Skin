import {Navbar} from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuroraSkin",
  description: "buy skin care products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
       <main className="flex-grow container mx-auto px-4 py-8"> 
        {children}
        </main>
       </body>
    </html>
  );
}
