"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Container, Logo } from "./ui";

const links = [{ href: "/#inicio", label: "Inicio" }, { href: "/#como-funciona", label: "Cómo funciona" }, { href: "/capitanes", label: "Capitanes" }, { href: "/#faq", label: "FAQ" }];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur-md">
    <Container className="flex h-20 items-center justify-between">
      <Link href="/" aria-label="Lix Mobility — Inicio" className="text-ink"><Logo className="h-8 w-auto" /></Link>
      <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-ink-deep transition hover:text-ink">{link.label}</Link>)}<Button href="/#descarga">Descargar App</Button></nav>
      <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"><span aria-hidden className="text-xl">{open ? "×" : "≡"}</span></button>
    </Container>
    {open && <nav aria-label="Navegación móvil" className="border-t border-line bg-white px-5 py-6 md:hidden"><div className="mx-auto flex max-w-[1200px] flex-col gap-5">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium">{link.label}</Link>)}<Button href="/#descarga">Descargar App</Button></div></nav>}
  </header>;
}
