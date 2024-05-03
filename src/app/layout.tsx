import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sirius ERP",
  description: "Soft Clever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const tagManagerArgs: TagManagerArgs = {
      gtmId: 'GTM-N2XFZPPM',
      events: {
        'gtm.start': new Date().getTime(), event: 'gtm.js'
      }
    }
    TagManager.initialize(tagManagerArgs)

  }, [])
  return (
    <html lang="en" className="scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-scHover scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-corner-rounded-full">
      <body className={inter.className}>
        {children}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2XFZPPM" 
          height="0" 
          width="0" 
          style={{display:"none",visibility:"hidden"}}></iframe>
        </noscript>
      </body>
    </html>
  );
}
