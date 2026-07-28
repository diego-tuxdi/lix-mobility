import Image from "next/image";
import Link from "next/link";
import { Container, Logo } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink-deep py-14 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-8 w-auto text-white" variant="negative" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">La nueva forma de moverte.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">LIX</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/#como-funciona">Cómo funciona</Link>
              <Link href="/capitanes">Capitanes</Link>
              <Link href="/#faq">Preguntas frecuentes</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Legal</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/terminos">Términos y Condiciones</Link>
              <Link href="/privacidad">Política de Privacidad</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Seguinos</p>
            <div className="mt-4 flex items-center gap-4 text-white/65">
              <a href="https://instagram.com/lixmobility" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com/lixmobility" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/lixmobility" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="mt-14 border-t border-white/10 pt-7 text-xs text-white/50">© {new Date().getFullYear()} LIX Mobility. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}
