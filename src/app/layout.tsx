import "@/app/globals.scss";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import SessionWrapper from "./SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yayasan Padepokan Fatwa Kehidupan",
  description: "Website Resmi Yayasan Padepokan Fatwa Kehidupan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="emerald">
      <body className={inter.className + " text-slate-500 bg-slate-100"}>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
