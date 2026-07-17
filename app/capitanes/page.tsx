import type { Metadata } from "next";
import { CaptainsPage } from "@/components/captains-page";

export const metadata: Metadata = {
  title: "Capitanes",
  description: "Administrá tus viajes desde una aplicación moderna y formá parte de una nueva forma de movilidad.",
  alternates: { canonical: "/capitanes" },
  openGraph: { title: "Convertite en Capitán de Lix", description: "Comenzá el proceso para navegar con Lix.", url: "/capitanes", type: "website" },
  twitter: { card: "summary", title: "Capitanes | Lix Mobility", description: "Navegá con Lix." },
};
export default function Captains() { return <CaptainsPage />; }
