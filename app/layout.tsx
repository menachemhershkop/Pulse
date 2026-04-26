import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
   
    >
      <div className="grid grid-flow-col grid-rows-2 gap-2 border 120px hover:bg-amber-50">
      <button className="bg-blue-50 border-width:1px"><Link href={'/missions'} >משימות</Link></button>
      <button><Link href={'/dashboard'}>משתמשים</Link></button>
      </div>
      <body>{children}</body>
    </html>
  );
}
