import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOID Studio — Creative & Design Agency",
  description:
    "VOID is an independent creative studio specializing in brand identity, digital experiences, motion design, and art direction for companies that refuse to be ordinary.",
  keywords: [
    "creative agency",
    "brand identity",
    "web design",
    "motion design",
    "art direction",
    "packaging design",
  ],
  authors: [{ name: "VOID Studio" }],
  openGraph: {
    title: "VOID Studio — Creative & Design Agency",
    description:
      "Brand identities, digital experiences, and visual systems for companies that refuse to be ordinary.",
    url: "https://voidstudio.com",
    siteName: "VOID Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOID Studio — Creative & Design Agency",
    description:
      "Brand identities, digital experiences, and visual systems for companies that refuse to be ordinary.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}