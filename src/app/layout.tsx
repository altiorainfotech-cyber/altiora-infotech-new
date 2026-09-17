import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { HomeHeader } from "@/components/homepage/HomeHeader";
import { HomeFooter } from "@/components/homepage/HomeFooter";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Digital Marketing & Growth Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Altiora Infotech is a digital growth partner delivering performance marketing, SEO, AEO & GEO, websites, and creative that turn strategy into measurable growth.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/altiora-logo.png",
    apple: "/altiora-logo.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Digital Marketing & Growth Agency`,
    description:
      "A digital growth partner delivering performance marketing, SEO, AEO & GEO, websites, and creative that turn strategy into measurable growth.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Digital Growth Partner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Digital Marketing & Growth Agency`,
    description:
      "A digital growth partner delivering performance marketing, SEO, AEO & GEO, websites, and creative that turn strategy into measurable growth.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <HomeHeader />
        <main className="flex-1">{children}</main>
        <HomeFooter />
      </body>
    </html>
  );
}
