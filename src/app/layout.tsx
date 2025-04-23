import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alice Eriksson | Portfolio",
  description: "Showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-background`}
      >
        {/* <Header /> */}
        <main className="flex-1 container mx-auto px-4">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
