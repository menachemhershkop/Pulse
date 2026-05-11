
import "./globals.css";
import {Heebo,} from 'next/font/google'

const heebo =  Heebo({
  subsets:['hebrew'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      className={heebo.className}
    >
      <body>{children}</body>
    </html>
  );
}
