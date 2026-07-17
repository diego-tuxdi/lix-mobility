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
      <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <rect width="135" height="40" rx="6" fill="black" stroke="#222" strokeWidth="0.8"/>
        <g transform="translate(10, 6) scale(1.05)">
          <path d="M15.22 10.95c-.03 2.14 1.74 3.16 1.82 3.21-.99 1.45-2.54 1.65-3.09 1.68-1.32.13-2.58-.79-3.25-.79-.67 0-1.72.78-2.82.8-1.45.02-2.79-.81-3.53-2.11-1.5-2.6-.38-6.44 1.06-8.53.7-1.03 1.53-2.17 2.65-2.13 1.08.04 1.49.71 2.72.71 1.22 0 1.6-.71 2.74-.68 1.14.02 1.87 1.02 2.57 2.04.81 1.18 1.14 2.32 1.16 2.38-.02.01-2.24.86-2.23 3.42zM13.33 4.57c.59-.72.99-1.73.88-2.74-.87.03-1.92.58-2.54 1.31-.54.64-.93 1.66-.81 2.64.97.07 1.95-.49 2.47-1.21z" fill="white"/>
        </g>
        <path d="M38.8 15.3c0-1.2.9-2 2.1-2 .7 0 1.2.3 1.5.7h.1v-.6h.9V18h-.9v-.6h-.1c-.3.4-.8.7-1.5.7-1.2 0-2.1-.8-2.1-2.1zm5 0c0-.8-.5-1.3-1.3-1.3s-1.3.5-1.3 1.3.5 1.3 1.3 1.3 1.3-.5 1.3-1.3zM46.8 18v-3.7h.8v.6c.3-.5.8-.7 1.4-.7.9 0 1.5.5 1.5 1.5V18h-.9v-2.1c0-.7-.4-1-1-1s-1 .4-1 1V18h-.8zM51.8 15.3c0-1.8 1.2-2.9 2.7-2.9.8 0 1.4.3 1.7.9v-3.3h.9v8h-.8v-.6c-.3.5-.9.8-1.7.8-1.5 0-2.8-1.1-2.8-2.9zm5.3 0c0-1.2-.7-2-1.8-2-1.1 0-1.7.8-1.7 2s.6 2 1.7 2 1.8-.8 1.8-2zM59.8 15.3c0-1.8 1.4-2.9 3.2-2.9s3.2 1.1 3.2 2.9c0 1.8-1.4 2.9-3.2 2.9s-3.2-1.1-3.2-2.9zm5.1 0c0-1.2-.8-1.9-1.9-1.9s-1.9.7-1.9 1.9c0 1.2.8 1.9 1.9 1.9s1.9-.7 1.9-.9zM69.8 18v-5.7h.9v5.7h-.9zM72.2 15.3c0-1.8 1.2-2.9 2.7-2.9.8 0 1.4.3 1.7.9v-.8h.9v5.5h-.9v-.6c-.3.5-.9.8-1.7.8-1.5 0-2.8-1.1-2.8-2.9zm5.3 0c0-1.2-.7-2-1.8-2-1.1 0-1.7.8-1.7 2s.6 2 1.7 2 1.8-.8 1.8-2zM79.2 18v-3.7h.8v.6c.3-.5.8-.7 1.4-.7.9 0 1.5.5 1.5 1.5V18h-.9v-2.1c0-.7-.4-1-1-1s-1 .4-1 1V18h-.8zM87.2 16.1h-3.6c.1.9.8 1.4 1.8 1.4.7 0 1.2-.2 1.5-.5h.9c-.4.7-1.3 1.2-2.4 1.2-1.7 0-2.7-1.1-2.7-2.9s1.1-2.9 2.6-2.9 2.6 1.1 2.6 2.8c0 .3 0 .7-.7.7zm-3.6-.7h2.8c0-.8-.6-1.3-1.3-1.3-.8 0-1.4.5-1.5 1.3z" fill="white"/>
        <path d="M38.8 28.5v-9.6h2.7l3.8 9.6h-1.3l-1.1-2.9H39l-1.1 2.9H38.8zm3.8-3.9l-1.5-4.2-1.5 4.2h3zM46.8 28.5v-7h1.1v1.1c.4-.9 1.1-1.3 2-1.3 1.5 0 2.2.9 2.2 2.6v4.6H51v-4.3c0-1.1-.4-1.6-1.2-1.6-.9 0-1.5.6-1.5 1.8v4.1H46.8zm8.2 0v-7h1.1v1.1c.4-.9 1.1-1.3 2-1.3 1.5 0 2.2.9 2.2 2.6v4.6H60v-4.3c0-1.1-.4-1.6-1.2-1.6-.9 0-1.5.6-1.5 1.8v4.1H55zm14.2 27.2c-.5.6-1.2.9-2.1.9-1.5 0-2.5-1.1-2.5-2.6 0-1.6 1.1-2.6 2.6-2.6.9 0 1.6.3 2.1.9v-5.2h1.1v8.8H74v-.8zm-.1-2.3c0-1-.7-1.7-1.6-1.7-1 0-1.6.8-1.6 1.7s.7 1.7 1.6 1.7c.9 0 1.6-.7 1.6-1.7z" fill="white"/>
        <path d="M78 24.8c0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2-2.3 5.2-5.2 5.2-5.2-2.3-5.2-5.2zm8.6 0c0-1.8-1.3-3.2-3.4-3.2s-3.4 1.4-3.4 3.2 1.3 3.2 3.4 3.2 3.4-1.4 3.4-3.2zM90.8 28.5V17.3h1.4v11.2h-1.4zM98 23.3c0-1.6-1.1-2.6-2.5-2.6-1.4 0-2.3 1-2.3 2.6h4.8zm-6 0c0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2c0 2.9-2.3 5.2-5.2 5.2-3 0-5.2-2.3-5.2-5.2z" fill="white"/>
      </svg>
    </a>
  );
}

export function GooglePlayBadge({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block transition hover:scale-[1.03] active:scale-[0.98] ${className}`} aria-label="Disponible en Google Play">
      <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <rect width="135" height="40" rx="6" fill="black" stroke="#222" strokeWidth="0.8"/>
        <g transform="translate(8, 8) scale(1.05)">
          <path d="M1.67 0.44C1.29 0.81 1.06 1.42 1.06 2.21v19.58c0 .79.23 1.4 0.61 1.77l0.07.07 10.9-10.9v-.25L1.74 0.37l-.07.07z" fill="#00a0ff"/>
          <path d="M16.32 16.48l-3.68-3.68v-.25l3.68-3.68 0.08.05 4.36 2.48c1.24.7 1.24 1.86 0 2.57l-4.36 2.48-0.08.08z" fill="#ffe000"/>
          <path d="M12.72 12.55L1.74 1.57C1.4 1.23.95 1.06.49 1.13l12.23 11.42z" fill="#00f076"/>
          <path d="M12.72 12.55l-12.23 11.42c.46.07.91-.1 1.25-.44l10.98-10.98z" fill="#ff3a44"/>
        </g>
        <path d="M38.8 15.3c0-1.2.9-2 2.1-2 .7 0 1.2.3 1.5.7h.1v-.6h.9V18h-.9v-.6h-.1c-.3.4-.8.7-1.5.7-1.2 0-2.1-.8-2.1-2.1zm5 0c0-.8-.5-1.3-1.3-1.3s-1.3.5-1.3 1.3.5 1.3 1.3 1.3 1.3-.5 1.3-1.3zM46.8 18v-3.7h.8v.6c.3-.5.8-.7 1.4-.7.9 0 1.5.5 1.5 1.5V18h-.9v-2.1c0-.7-.4-1-1-1s-1 .4-1 1V18h-.8zM51.8 15.3c0-1.8 1.2-2.9 2.7-2.9.8 0 1.4.3 1.7.9v-3.3h.9v8h-.8v-.6c-.3.5-.9.8-1.7.8-1.5 0-2.8-1.1-2.8-2.9zm5.3 0c0-1.2-.7-2-1.8-2-1.1 0-1.7.8-1.7 2s.6 2 1.7 2 1.8-.8 1.8-2zM59.8 15.3c0-1.8 1.4-2.9 3.2-2.9s3.2 1.1 3.2 2.9c0 1.8-1.4 2.9-3.2 2.9s-3.2-1.1-3.2-2.9zm5.1 0c0-1.2-.8-1.9-1.9-1.9s-1.9.7-1.9 1.9c0 1.2.8 1.9 1.9 1.9s1.9-.7 1.9-.9z" fill="white"/>
        <path d="M38.8 28.5v-9.6h2.7l3.8 9.6h-1.3l-1.1-2.9H39l-1.1 2.9H38.8zm3.8-3.9l-1.5-4.2-1.5 4.2h3zM46.8 28.5v-7h1.1v1.1c.4-.9 1.1-1.3 2-1.3 1.5 0 2.2.9 2.2 2.6v4.6H51v-4.3c0-1.1-.4-1.6-1.2-1.6-.9 0-1.5.6-1.5 1.8v4.1H46.8zm8.2 0v-7h1.1v1.1c.4-.9 1.1-1.3 2-1.3 1.5 0 2.2.9 2.2 2.6v4.6H60v-4.3c0-1.1-.4-1.6-1.2-1.6-.9 0-1.5.6-1.5 1.8v4.1H55zm14.2 27.2c-.5.6-1.2.9-2.1.9-1.5 0-2.5-1.1-2.5-2.6 0-1.6 1.1-2.6 2.6-2.6.9 0 1.6.3 2.1.9v-5.2h1.1v8.8H74v-.8zm-.1-2.3c0-1-.7-1.7-1.6-1.7-1 0-1.6.8-1.6 1.7s.7 1.7 1.6 1.7c.9 0 1.6-.7 1.6-1.7z" fill="white"/>
        <path d="M78 24.8c0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2-2.3 5.2-5.2 5.2-5.2-2.3-5.2-5.2zm8.6 0c0-1.8-1.3-3.2-3.4-3.2s-3.4 1.4-3.4 3.2 1.3 3.2 3.4 3.2 3.4-1.4 3.4-3.2zM90.8 28.5V17.3h1.4v11.2h-1.4zM98 23.3c0-1.6-1.1-2.6-2.5-2.6-1.4 0-2.3 1-2.3 2.6h4.8zm-6 0c0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2c0 2.9-2.3 5.2-5.2 5.2-3 0-5.2-2.3-5.2-5.2z" fill="white"/>
      </svg>
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
