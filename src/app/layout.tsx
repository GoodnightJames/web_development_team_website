import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seaside Garage and Detailing",
    template: "%s | Seaside Garage and Detailing",
  },
  description:
    "Precision automotive service and high-end detailing on the coast. Laser alignment, wheel repair, mounting and balancing, and concours-grade detailing.",
  openGraph: {
    type: "website",
    siteName: "Seaside Garage and Detailing",
    url: siteUrl,
    title: "Seaside Garage and Detailing",
    description:
      "Precision automotive service and high-end detailing on the coast.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seaside Garage and Detailing",
    description:
      "Precision automotive service and high-end detailing on the coast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-ocean-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
