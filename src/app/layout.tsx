// import "./globals.css";
import '../styles/globals.css';
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"],
  weight: ['400', '500', '600', '700']
 });

export const metadata: Metadata = {
  title: "Clipboard Landing Page",
  description: "Project from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  );
}
