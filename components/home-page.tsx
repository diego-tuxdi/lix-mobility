"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Accordion } from "./accordion";
import { Footer } from "./footer";
import { Navbar } from "./navigation";
import { Button, Container, PhoneMockup, Section, SectionHeading, AppStoreBadge, GooglePlayBadge, ScrollReveal } from "./ui";
import { Smartphone, Navigation as NavigateIcon, ShieldCheck, CreditCard, Receipt, Star } from "lucide-react";

const steps = [
  { title: "Elegí origen y destino.", copy: "Seleccioná desde dónde viajás y hacia dónde querés ir.", image: "/img/Destino.jpg" },
  { title: "Confirmá el viaje.", copy: "Revisá la información y enviá tu solicitud.", image: "/img/iPhone 13 & 14 - 36.jpg" },
  { title: "Un capitán acepta.", copy: "Recibí la confirmación y conocé quién realizará el viaje.", image: "/img/Resumen del viaje.jpg" },
  { title: "Disfrutá el recorrido.", copy: "Seguí el viaje en tiempo real hasta llegar a destino.", image: "/img/Resumen del viaje-1.jpg" },
] as const;

const benefits = [
  { title: "Movilidad simple", copy: "Solicitá viajes fácilmente desde la aplicación.", icon: Smartphone },
  { title: "Seguimiento en tiempo real", copy: "Conocé el estado de tu viaje en todo momento.", icon: NavigateIcon },
  { title: "Capitanes verificados", copy: "Operamos con procesos de validación para brindar mayor confianza.", icon: ShieldCheck },
  { title: "Pagos simples", copy: "Elegí el método de pago disponible para cada viaje.", icon: CreditCard },
  { title: "Tarifas transparentes", copy: "Conocé el costo antes de confirmar tu solicitud.", icon: Receipt },
  { title: "Experiencia confiable", copy: "Calificaciones y seguimiento para mejorar cada viaje.", icon: Star },
] as const;

const faqs = [
  {
    question: "¿Cómo solicito un viaje?",
    answer: "Abrí la aplicación LIX, ingresá tu punto de partida y tu destino en el mapa, y confirmá la solicitud. El sistema buscará al capitán disponible más cercano para realizar tu viaje."
  },
  {
    question: "¿Cómo se calcula el precio?",
    answer: "El precio se estima de forma transparente en la aplicación antes de confirmar el viaje, basándose en la distancia del trayecto, el tipo de embarcación solicitada y la demanda actual del servicio."
  },
  {
    question: "¿Qué métodos de pago acepta LIX?",
    answer: "LIX acepta Mercado Pago y dinero en efectivo."
  },
  {
    question: "¿Dónde está disponible?",
    answer: "Actualmente operamos en zonas estratégicas del Delta y norte de Buenos Aires, incluyendo Tigre Centro, Escobar, Nordelta y canales fluviales aledaños."
  },
  {
    question: "¿Cómo puedo convertirme en capitán?",
    answer: "Para convertirte en Capitán LIX, descargá la app LIX Capitán desde la tienda y registrate ingresando tus datos personales, la información de tu embarcación y la documentación correspondiente. Una vez enviado el formulario, tu cuenta quedará pendiente de aprobación. Cuando nuestro equipo valide los datos y apruebe tu perfil, ¡ya podés conectarte y empezar a realizar viajes!"
  },
  {
    question: "¿Qué sucede si cancelo un viaje?",
    answer: "Podés cancelar tu viaje en cualquier momento. Dependiendo del estado del viaje y del tiempo transcurrido desde la aceptación del capitán, podrían aplicar tarifas mínimas de cancelación para compensar el traslado."
  }
] as const;

export function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <><Navbar /><main>
  <section id="inicio" className="hero-grid relative overflow-hidden bg-water pt-32 sm:pt-36 lg:min-h-[820px] lg:pt-44">
    <Container className="grid items-center gap-14 pb-20 lg:grid-cols-[1.1fr_.9fr] lg:pb-28">
      <div className="relative z-10">
        <ScrollReveal delay={100}><p className="mb-5 text-sm font-semibold uppercase tracking-[.2em] text-ink">LIX Mobility</p></ScrollReveal>
        <ScrollReveal delay={200}><h1 className="text-balance text-5xl font-semibold leading-[.98] tracking-[-.055em] text-ink-deep sm:text-6xl lg:text-7xl">La nueva forma de moverte.</h1></ScrollReveal>
        <ScrollReveal delay={300}><p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">Solicitá viajes de forma rápida, simple y segura desde una aplicación diseñada para conectar pasajeros y capitanes.</p></ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#descarga">Descargar App</Button>
            <Button href="/capitanes" variant="secondary">Quiero ser Capitán</Button>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={200} className="relative min-h-[560px]">
        <div aria-hidden className="absolute inset-8 rounded-full bg-white/45 blur-3xl" />
        <PhoneMockup
          src="/img/Bienvenida-1.jpg"
          alt="Pantalla de bienvenida de LIX Mobility"
          priority
          className="relative z-10"
          style={!isMobile ? { transform: `translateY(${scrollY * 0.08}px)` } : {}}
        />
      </ScrollReveal>
    </Container>
  </section>

  <Section id="que-es"><Container className="grid items-center gap-14 lg:grid-cols-2">
    <ScrollReveal delay={300} className="order-last lg:order-first relative flex h-[500px] w-full max-w-[420px] items-center justify-center py-6 lg:ml-0 lg:mr-auto mx-auto lg:mx-0">
      <div aria-hidden className="absolute inset-10 rounded-full bg-water/40 blur-3xl" />
      {/* Left phone: Bienvenida */}
      <div className="absolute left-4 top-6 z-10 w-[200px] sm:w-[220px]">
        <PhoneMockup
          src="/img/Bienvenida.jpg"
          alt="Pantalla de bienvenida"
          style={!isMobile ? { transform: `translateY(${(scrollY - 600) * 0.04}px)` } : {}}
        />
      </div>
      {/* Right phone: Map */}
      <div className="absolute right-4 top-16 z-20 w-[200px] sm:w-[220px]">
        <PhoneMockup
          src="/img/Resumen del viaje.jpg"
          alt="Pantalla de mapa y viaje"
          style={!isMobile ? { transform: `translateY(${(scrollY - 600) * 0.08}px)` } : {}}
        />
      </div>
    </ScrollReveal>
    <ScrollReveal delay={100} className="order-first lg:order-last">
      <SectionHeading eyebrow="¿Qué es LIX Mobility?" title="Movilidad acuática, simplificada." copy="LIX Mobility conecta pasajeros y embarcaciones mediante una plataforma digital que hace que trasladarse por el agua sea tan simple como solicitar un viaje desde una aplicación." />
      <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {[["Simple", "Solicitá un viaje en pocos pasos desde tu teléfono."], ["Conectado", "Seguí el recorrido de tu embarcación en tiempo real."], ["Seguro", "Capitanes verificados y una experiencia diseñada para generar confianza."]].map(([title, copy]) => <div key={title} className="border-t border-line pt-5"><h3 className="font-semibold text-ink-deep">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{copy}</p></div>)}
      </div>
    </ScrollReveal>
  </Container></Section>

  <Section id="como-funciona" className="bg-surface-soft"><Container>
    <ScrollReveal delay={100}>
      <SectionHeading eyebrow="Así funciona" title="Moverte nunca fue tan simple." copy="Solicitá un viaje en solo cuatro pasos." align="center" />
    </ScrollReveal>
    <ol className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 items-center">
      <ScrollReveal delay={200} className="flex flex-col gap-4">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <li
              key={step.title}
              onClick={() => setActiveStep(index)}
              className={`flex flex-col rounded-[1.8rem] border p-6 transition-all duration-300 cursor-pointer text-left ${
                isActive
                  ? "bg-white border-line card-shadow text-ink-deep"
                  : "bg-transparent border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-base font-semibold transition-colors ${
                    isActive ? "bg-ink text-white" : "bg-line text-ink-deep"
                  }`}
                >
                  {index + 1}
                </span>
                <h3 className={`text-xl font-semibold transition-colors ${isActive ? "text-ink-deep" : "text-muted"}`}>
                  {step.title}
                </h3>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isActive ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base leading-7 text-muted pl-14">{step.copy}</p>
                  <div className="mt-6 block lg:hidden pb-10 px-4">
                    <PhoneMockup src={step.image} alt={`Pantalla de LIX: ${step.title}`} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ScrollReveal>
      <ScrollReveal delay={300} className="hidden lg:block relative h-[560px] w-full max-w-[290px] mx-auto">
        <div aria-hidden className="absolute inset-8 rounded-full bg-white/45 blur-3xl" />
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              activeStep === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <PhoneMockup src={step.image} alt={`Pantalla de LIX: ${step.title}`} />
          </div>
        ))}
      </ScrollReveal>
    </ol>
  </Container></Section>

  <Section id="beneficios"><Container>
    <ScrollReveal delay={100}>
      <SectionHeading title="¿Por qué elegir LIX?" copy="Diseñamos una experiencia de movilidad pensada para ser simple, segura y completamente digital." />
    </ScrollReveal>
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, idx) => (
        <ScrollReveal key={benefit.title} delay={idx * 80}>
          <article className="group h-full overflow-hidden rounded-[2rem] border border-line bg-white p-8 transition hover:-translate-y-1 hover:card-shadow text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-water text-ink"><benefit.icon className="h-6 w-6" /></div>
            <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
            <p className="mt-3 leading-7 text-muted">{benefit.copy}</p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  </Container></Section>

  <Section className="relative overflow-hidden bg-ink-deep text-white">
    {/* Subtle background image */}
    <div className="absolute inset-0 z-0">
      <Image
        unoptimized
        src="/img/cobertura.png"
        alt=""
        fill
        className="object-cover opacity-15 brightness-50 contrast-125"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-ink-deep" />
    </div>
    
    <Container className="relative z-10">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <ScrollReveal delay={100}>
          <article className="h-full rounded-[2rem] bg-white/5 border border-white/10 p-8 sm:p-12 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-water-strong">Pasajeros</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em]">Viajá con LIX</h2>
            <p className="mt-5 leading-7 text-white/70">Descubrí una nueva forma de trasladarte utilizando una aplicación simple e intuitiva.</p>
            <div className="mt-8"><Button href="#descarga" variant="light">Descargar App</Button></div>
          </article>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <article className="h-full rounded-[2rem] bg-white/5 border border-white/10 p-8 sm:p-12 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20">
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-water-strong">Capitanes</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em]">Navegá con LIX</h2>
            <p className="mt-5 leading-7 text-white/70">Sumate a la plataforma y administrá tus viajes desde una aplicación diseñada para facilitar tu operación.</p>
            <div className="mt-8"><Button href="/capitanes" variant="light">Conocé más</Button></div>
          </article>
        </ScrollReveal>
      </div>
    </Container>
  </Section>

  <Section><Container className="grid gap-12 lg:grid-cols-2 items-center">
    <ScrollReveal delay={100}>
      <SectionHeading eyebrow="Cobertura" title="Disponible en zonas seleccionadas" copy="LIX Mobility comienza su operación en ubicaciones específicas y continuará incorporando nuevas zonas a medida que crezca la plataforma." />
      <div className="mt-8">
        <div className="flex flex-wrap gap-2.5">
          {["Tigre Centro", "Delta de Tigre"].map((city) => (
            <span key={city} className="inline-flex items-center rounded-full bg-water px-4 py-1.5 text-sm font-semibold text-ink-deep border border-water-strong/45">
              {city}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={300} className="relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-[2.5rem] border border-line">
      <Image unoptimized src="/img/cobertura.png" alt="Zonas de cobertura de LIX Mobility" fill className="object-cover" />
    </ScrollReveal>
  </Container></Section>

  <Section id="descarga" className="overflow-hidden bg-water"><Container className="grid items-center gap-12 lg:grid-cols-2">
    <ScrollReveal delay={100}>
      <SectionHeading title="Descargá la aplicación" copy="Empezá a disfrutar una nueva forma de moverte." />
      <p className="mt-8 font-semibold text-ink">Disponible para iOS y Android.</p>
      <div className="mt-6 flex flex-wrap gap-4"><AppStoreBadge href="#" /><GooglePlayBadge href="#" /></div>
    </ScrollReveal>
    <ScrollReveal delay={300} className="relative mx-auto flex h-[480px] w-full max-w-[380px] items-center justify-center py-6">
      <div aria-hidden className="absolute inset-8 rounded-full bg-white/50 blur-3xl" />
      {/* Left phone */}
      <div className="absolute left-2 top-6 z-10 w-[190px] sm:w-[210px]">
        <PhoneMockup
          src="/img/iPhone 13 & 14 - 34.jpg"
          alt="Pantalla principal de LIX"
          style={!isMobile ? { transform: `translateY(${(scrollY - 4500) * 0.05}px)` } : {}}
        />
      </div>
      {/* Right phone */}
      <div className="absolute right-2 top-16 z-20 w-[190px] sm:w-[210px]">
        <PhoneMockup
          src="/img/viaje finalizado.jpg"
          alt="Pantalla de viaje finalizado de LIX"
          style={!isMobile ? { transform: `translateY(${(scrollY - 2800) * -0.03}px)` } : {}}
        />
      </div>
    </ScrollReveal>
  </Container></Section>

  <Section id="faq"><Container className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
    <ScrollReveal delay={100}>
      <SectionHeading title="Preguntas frecuentes" />
    </ScrollReveal>
    <ScrollReveal delay={200}>
      <div><Accordion items={faqs} /></div>
    </ScrollReveal>
  </Container></Section>
  
  <section className="bg-surface-soft py-20"><Container className="text-center">
    <ScrollReveal delay={100}><h2 className="text-balance text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Todo comienza con un viaje.</h2></ScrollReveal>
    <ScrollReveal delay={200}><p className="mx-auto mt-5 max-w-xl text-lg text-muted">Descargá la aplicación y descubrí una nueva forma de moverte.</p></ScrollReveal>
    <ScrollReveal delay={300}>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href="#descarga">Descargar App</Button>
        <Button href="/capitanes" variant="secondary">Quiero ser Capitán</Button>
      </div>
    </ScrollReveal>
  </Container></section>
  </main><Footer /></>;
}
