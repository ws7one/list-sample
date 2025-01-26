"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLayout from "./AppLayout";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Providers from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <Providers>
            <AppLayout>{children}</AppLayout>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
