import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import TopLoader from "@/components/TopLoader";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Art of Memories",
  description: "Art of Memories is a platform that allows you to share your memories in a creative way.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Art For Memory" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <TopLoader />
            {children}
            <Footer />
          </main>
        </Suspense>
      </body>
    </html>
  );
}
