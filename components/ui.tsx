"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>; }
export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) { return <section id={id} className={`scroll-mt-24 py-20 sm:py-28 lg:py-36 ${className}`}>{children}</section>; }
export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow?: string; title: string; copy?: string; align?: "left" | "center" }) { return <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>{eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[.18em] text-ink">{eyebrow}</p>}<h2 className="text-balance text-4xl font-semibold tracking-[-.04em] text-ink-deep sm:text-5xl lg:text-6xl">{title}</h2>{copy && <p className="mt-6 text-lg leading-8 text-muted">{copy}</p>}</div>; }
export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string }) { const styles = variant === "primary" ? "bg-ink text-white hover:bg-ink-deep" : variant === "light" ? "bg-white text-ink hover:bg-water" : "border border-ink/20 bg-white/5 text-ink hover:bg-ink hover:border-ink hover:text-white"; return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles} ${className}`}>{children}</Link>; }

export function PhoneMockup({ src, alt, priority = false, className = "", style = {} }: { src: string; alt: string; priority?: boolean; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative mx-auto aspect-[390/844] w-full max-w-[290px] ${className}`} style={style}>
      {/* Outer Metal Frame / Chassis */}
      <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-500 p-[1.5px] shadow-[0_20px_50px_rgba(6,37,59,0.22)]">
        {/* Buttons on the sides */}
        {/* Silent / Action Button */}
        <div className="absolute -left-[3px] top-[15%] h-6 w-[3px] rounded-l bg-neutral-400 border-r border-neutral-300" />
        {/* Volume Up */}
        <div className="absolute -left-[3px] top-[23%] h-11 w-[3px] rounded-l bg-neutral-400 border-r border-neutral-300" />
        {/* Volume Down */}
        <div className="absolute -left-[3px] top-[32%] h-11 w-[3px] rounded-l bg-neutral-400 border-r border-neutral-300" />
        {/* Power Button */}
        <div className="absolute -right-[3px] top-[27%] h-16 w-[3px] rounded-r bg-neutral-400 border-l border-neutral-300" />

        {/* Inner Black Bezel */}
        <div className="h-full w-full rounded-[2.7rem] bg-black p-[6px] relative overflow-hidden">
          {/* Inner Screen Container */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-neutral-900 select-none">
            {/* Screen Image */}
            <Image unoptimized src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 72vw, 290px" className="object-cover object-top" />
            {/* Screen Glass Glare Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-20" />
            {/* Screen border soft inset shadow */}
            <div className="absolute inset-0 rounded-[2.3rem] border border-black/20 pointer-events-none z-20" />
            {/* Dynamic Island (Simple Solid Black Pill) */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Pending({ children }: { children: ReactNode }) { return <p className="rounded-2xl border border-dashed border-ink/30 bg-surface-soft px-5 py-4 text-sm text-muted"><strong className="text-ink">TODO Lix:</strong> {children}</p>; }

export function AppStoreBadge({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block transition hover:scale-[1.03] active:scale-[0.98] ${className}`} aria-label="Descargar en App Store">
      <Image unoptimized src="/img/App Store.svg" alt="Descargar en App Store" width={196} height={64} className="h-14 w-auto" />
    </a>
  );
}

export function GooglePlayBadge({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block transition hover:scale-[1.03] active:scale-[0.98] ${className}`} aria-label="Disponible en Google Play">
      <Image unoptimized src="/img/Google Play.svg" alt="Disponible en Google Play" width={196} height={64} className="h-14 w-auto" />
    </a>
  );
}

export function Logo({ className = "", variant = "primary" }: { className?: string; variant?: "primary" | "negative" }) {
  const color = variant === "primary" ? "text-ink" : "text-white";
  return (
    <svg className={`${color} ${className}`} width="694" height="300" viewBox="0 0 694 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M502.742 148.041L389.493 298.771L430.693 298.706C456.956 298.664 466.834 277.366 480.709 258.871L547.787 169.46C561.82 150.756 559.106 141.56 547.041 125.582L482.483 40.0902C468.55 21.6396 458.603 0.37298 432.34 0.414655L391.14 0.480033L502.742 148.041Z" fill="currentColor"/>
      <path d="M69.9189 252.128L227.282 251.879L227.308 268.781C227.335 285.416 213.746 299.047 197.112 299.074L64.0742 299.285C29.1739 299.34 0.444017 280.909 0.35484 224.711L0.0599912 38.9032C0.0269957 18.1101 17.0122 1.0709 37.8053 1.03791L50.6177 1.01758L50.9862 233.256C51.0027 243.652 59.5233 252.145 69.9189 252.128Z" fill="currentColor"/>
      <path d="M335.558 0.568359L322.746 0.58869C301.953 0.621686 284.968 17.6609 285.001 38.454L285.414 298.937L336.032 298.856L335.558 0.568359Z" fill="currentColor"/>
      <path d="M588.654 159.33L558.095 200.002L602.407 258.679C616.34 277.129 626.287 298.396 652.549 298.354L693.75 298.289L588.654 159.33Z" fill="currentColor"/>
      <path d="M557.93 95.9046L588.617 136.481L691.157 0.00343556L649.957 0.0688144C623.694 0.110489 613.814 21.4085 599.94 39.9033L557.93 95.9046Z" fill="currentColor"/>
    </svg>
  );
}

export function ScrollReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
