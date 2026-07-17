import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://lixmobility.com"),
  title: { default: "Lix Mobility", template: "%s | Lix Mobility" },
  description: "La nueva forma de moverte.",
  applicationName: "Lix Mobility",
  icons: { icon: "/img/Logo.svg" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b3553" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="scroll-smooth"><body className={`${inter.variable} font-sans antialiased`}>{children}</body></html>;
}

