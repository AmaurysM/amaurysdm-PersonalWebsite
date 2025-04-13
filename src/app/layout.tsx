import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata (Next.js will inject this into the head automatically)
export const metadata: Metadata = {
  title: "Amaurys De Los Santos",
  description: "Amaurys De Los Santos' personal website",
  authors: [{ name: "Amaurys De Los Santos Mendez" }],
  keywords: [
    "Amaurys De Los Santos Mendez",
    "Amaurys",
    "De Los Santos",
    "Mendez",
    "personal website",
  ],
  alternates: { canonical: "https://amaurysdelossantos.com/" },
  openGraph: {
    title: "Amaurys De Los Santos",
    description: "Discover my work and journey at Amaurys De Los Santos' personal website.",
    type: "website",
    url: "https://amaurysdelossantos.com/",
    images: [
      {
        url: "https://amaurysdelossantos.com/profilePicture.png",
        width: 1200,
        height: 630,
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
