import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import NavBar from "@/components/sections/Header/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tera-Mebli",
  description: "Online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Banner />
        <main className="max-w-10xl mx-auto">
          <NavBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
