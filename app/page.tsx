import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Movilidad acuática, simplificada",
  description: "Solicitá viajes por agua desde una aplicación que conecta pasajeros y capitanes.",
  alternates: { canonical: "/" },
  openGraph: { title: "Lix Mobility | La nueva forma de moverte", description: "Movilidad acuática simple, conectada y segura.", type: "website", url: "/" },
  twitter: { card: "summary", title: "Lix Mobility", description: "La nueva forma de moverte." },
};

export default function Home() { return <HomePage />; }
