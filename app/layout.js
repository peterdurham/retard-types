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

export const metadata = {
  title: "Retard Types - Find Out What Kind of Retard You Truly Are",
  description:
    "Discover your unique retard type based on your birth date. Hilarious personality profiles that will have you laughing at yourself and others.",
  openGraph: {
    title: "Retard Types - Find Out What Kind of Retard You Truly Are",
    description:
      "Discover your unique retard type based on your birth date. Hilarious personality profiles that will have you laughing at yourself and others.",
    images: [
      {
        url: "/main_image.png",
        width: 1200,
        height: 630,
        alt: "Retard Types",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retard Types - Find Out What Kind of Retard You Truly Are",
    description:
      "Discover your unique retard type based on your birth date. Hilarious personality profiles that will have you laughing at yourself and others.",
    images: ["/main_image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
