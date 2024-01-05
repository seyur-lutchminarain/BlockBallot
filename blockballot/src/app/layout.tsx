import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockBallot",
  description: "Vote for candidates using Blockchain technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const myStyle = {
    background: 'gray !important' 
  }

  return (
    <html lang="en">
      <body className={inter.className} style={myStyle}>{children}</body>
    </html>
  );
}
