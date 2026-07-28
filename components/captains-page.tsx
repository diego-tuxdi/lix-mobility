"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Accordion } from "./accordion";
import { Footer } from "./footer";
import { Navbar } from "./navigation";
import { Button, Container, PhoneMockup, Section, SectionHeading, ScrollReveal } from "./ui";
import { Calendar, MapPin, Smartphone, Navigation as NavigateIcon, Award, Shield, FileText, CheckCircle } from "lucide-react";

const benefits = [
  { title: "Administrá tu disponibilidad", copy: "Configurá tus horarios de navegación con total libertad.", icon: Calendar },
  { title: "Gestioná tus viajes", copy: "Recibí y aceptá solicitudes de viaje de forma simple y rápida.", icon: MapPin },
  { title: "Operación unificada", copy: "Toda tu facturación, recorridos y estadísticas en un solo lugar.", icon: Smartphone },
  { title: "Información en tiempo real", copy: "Mapas dinámicos y guiado asistido para cada trayecto en el delta.", icon: NavigateIcon },
  { title: "Comunidad exclusiva", copy: "Formá parte de una red de capitanes profesionales.", icon: Award },
] as const;

const process = [
  { title: "Registrate", copy: "Completá el formulario online con tus datos personales y los de tu embarcación.", image: "/img/Mi cuenta-1.jpg" },
  { title: "Validamos tu información", copy: "Revisamos que tu documentación y matrícula náutica estén al día.", image: "/img/De a una solicitud.jpg" },
  { title: "Activamos tu cuenta", copy: "Habilitamos tu acceso a la plataforma LIX Capitán.", image: "/img/Frame 1410127802.jpg" },
  { title: "Comenzá a navegar", copy: "Activá tu estado, aceptá solicitudes de viaje y generá ingresos.", image: "/img/iPhone 13 & 14 - 37.jpg" },
] as const;

const tools = [
  {
    title: "Panel de Viajes Disponibles",
    copy: "Visualizá y aceptá solicitudes de viaje en tu zona de forma instantánea. Controlá tu agenda de navegación en tiempo real.",
    icon: Smartphone
  },
  {
    title: "Navegación Asistida",
    copy: "Guiado interactivo por el delta con mapas optimizados específicamente para canales fluviales y ríos urbanos.",
    icon: NavigateIcon
  },
  {
    title: "Ganancias e Historial",
    copy: "Seguí de cerca tus ingresos diarios, estadísticas de desempeño e historial detallado de todos tus recorridos finalizados.",
    icon: CreditCardIcon
  },
  {
    title: "Perfil y Documentos",
    copy: "Gestioná tu documentación náutica, habilitación de la embarcación y estado de cuenta de forma 100% digital.",
    icon: Shield
  }
] as const;

const requirements = [
  { title: "Matrícula Náutica", copy: "Licencia de Conductor Náutico o Timonel vigente emitida por la Prefectura Naval Argentina.", icon: FileText },
  { title: "Habilitación al día", copy: "Embarcación registrada y equipada con los elementos de seguridad reglamentarios.", icon: Shield },
  { title: "Identificación oficial", copy: "Mayor de 18 años con Documento Nacional de Identidad (DNI) vigente.", icon: CheckCircle },
  { title: "Dispositivo móvil", copy: "Teléfono inteligente compatible con conexión a datos activa para operar la aplicación.", icon: Smartphone },
] as const;

const faqs = [
  {
    question: "¿Cómo me registro?",
    answer: "Podés completar el formulario de registro en la sección 'Quiero ser Capitán' en esta web o descargar la aplicación LIX Capitán y subir fotos de tu DNI, matrícula náutica y papeles de la embarcación."
  },
  {
    question: "¿Cuánto demora la validación?",
    answer: "Nuestro equipo de soporte revisa y valida la documentación cargada dentro de las 24 a 48 horas hábiles. Recibirás una notificación en tu correo o celular una vez habilitada la cuenta."
  },
  {
    question: "¿Puedo elegir cuándo navegar?",
    answer: "Sí, tenés absoluta libertad horaria. Solo debés abrir la aplicación LIX Capitán y cambiar tu estado a 'Disponible' cuando desees recibir solicitudes de viaje."
  },
  {
    question: "¿Qué documentación necesito?",
    answer: "Necesitás tu DNI (mayor de 18 años), carnet de habilitación náutica oficial vigente (Conductor Náutico o Timonel), matrícula de la embarcación al día, elementos de seguridad obligatorios por Prefectura."
  },
  {
    question: "¿Cómo recibo los pagos?",
    answer: "Los pagos de los viajes realizados se liquidan semanalmente de forma directa en la cuenta bancaria (CBU/CVU) que hayas registrado en tu perfil de capitán."
  },
  {
    question: "¿Necesito experiencia previa?",
    answer: "Es indispensable contar con la licencia náutica oficial que acredite tus conocimientos de navegación en el delta, además de cumplir con todas las medidas de seguridad exigidas por Prefectura."
  }
] as const;

export function CaptainsPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <><Navbar /><main>
  <section className="hero-grid overflow-hidden bg-blush pt-32 sm:pt-40"><Container className="grid min-h-[720px] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_.95fr]">
    <div>
      <ScrollReveal delay={100}><p className="text-sm font-semibold uppercase tracking-[.2em] text-ink">Capitanes LIX</p></ScrollReveal>
      <ScrollReveal delay={200}><h1 className="text-balance mt-5 text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">Convertite en Capitán de LIX.</h1></ScrollReveal>
      <ScrollReveal delay={300}><p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">Administrá tus viajes desde una aplicación moderna y formá parte de una nueva forma de movilidad.</p></ScrollReveal>
      <ScrollReveal delay={400}>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="#registro">Quiero ser Capitán</Button>
          <Button href="#requisitos" variant="secondary">Conocer requisitos</Button>
        </div>
      </ScrollReveal>
    </div>
    <ScrollReveal delay={200} className="relative">
      <PhoneMockup
        src="/img/Bienvenida-2.jpg"
        alt="Pantalla de acceso de LIX Mobility Capitan"
        priority
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
    </ScrollReveal>
  </Container></section>

  <Section><Container>
    <ScrollReveal delay={100}>
      <SectionHeading title="¿Por qué navegar con LIX?" copy="Ofrecemos una plataforma tecnológica para que operes tu embarcación con total comodidad y flexibilidad." />
    </ScrollReveal>
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      {benefits.map((benefit, index) => (
        <ScrollReveal key={benefit.title} delay={index * 80}>
          <article className="rounded-[1.7rem] border border-line bg-white p-6 card-shadow h-full text-left flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-water text-ink"><benefit.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-semibold leading-6 text-ink-deep">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{benefit.copy}</p>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  </Container></Section>

  <Section id="como-funciona" className="bg-surface-soft"><Container>
    <ScrollReveal delay={100}>
      <SectionHeading eyebrow="¿Cómo funciona?" title="Tu camino para empezar a navegar." copy="Convertirse en Capitán LIX es un proceso simple de cuatro pasos." align="center" />
    </ScrollReveal>
    <ol className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 items-center">
      <ScrollReveal delay={200} className="flex flex-col gap-4">
        {process.map((step, index) => {
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
                  <div className="mt-6 block lg:hidden">
                    <PhoneMockup src={step.image} alt={`Paso de Capitán LIX: ${step.title}`} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ScrollReveal>
      <ScrollReveal delay={300} className="hidden lg:block relative h-[560px] w-full max-w-[290px] mx-auto">
        <div aria-hidden className="absolute inset-8 rounded-full bg-white/45 blur-3xl" />
        {process.map((step, index) => (
          <div
            key={step.title}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              activeStep === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <PhoneMockup src={step.image} alt={`Paso de Capitán LIX: ${step.title}`} />
          </div>
        ))}
      </ScrollReveal>
    </ol>
  </Container></Section>

  <Section id="requisitos"><Container>
    <ScrollReveal delay={100}>
      <SectionHeading eyebrow="Requisitos" title="¿Qué necesitás para empezar?" copy="Revisá los requerimientos necesarios para habilitar tu cuenta como Capitán LIX." />
    </ScrollReveal>
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {requirements.map((req, idx) => (
        <ScrollReveal key={req.title} delay={idx * 80}>
          <article className="rounded-2xl border border-line bg-white p-6 card-shadow text-left h-full">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-water text-ink"><req.icon className="h-6 w-6" /></div>
            <h3 className="mt-5 text-xl font-semibold text-ink-deep">{req.title}</h3>
            <p className="mt-3 leading-7 text-muted">{req.copy}</p>
          </article>
        </ScrollReveal>
      ))}
    </div>
  </Container></Section>

  <Section className="overflow-hidden bg-ink-deep text-white"><Container>
    <ScrollReveal delay={100} className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[.18em] text-water-strong">Herramientas para Capitanes</p>
      <h2 className="text-balance mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Todo desde una sola aplicación</h2>
    </ScrollReveal>
    
    {/* Bento Grid without Mockups */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
      {tools.map((tool, idx) => (
        <ScrollReveal key={tool.title} delay={idx * 100}>
          <article className="group overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 sm:p-10 text-left h-full flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-water-strong"><tool.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-2xl font-semibold">{tool.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{tool.copy}</p>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  </Container></Section>

  <Section><Container className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
    <ScrollReveal delay={100}>
      <SectionHeading title="Preguntas frecuentes" />
    </ScrollReveal>
    <ScrollReveal delay={200}>
      <Accordion items={faqs} />
    </ScrollReveal>
  </Container></Section>

  <section id="registro" className="bg-water py-24 sm:py-32"><Container className="flex flex-col items-center text-center">
    <ScrollReveal delay={100}><h2 className="text-balance text-4xl font-semibold tracking-[-.04em] sm:text-6xl">¿Listo para navegar con LIX?</h2></ScrollReveal>
    <ScrollReveal delay={200} className="mt-6 max-w-xl"><p className="text-lg text-muted">Comenzá el proceso de registro y sumate a la plataforma.</p></ScrollReveal>
    <ScrollReveal delay={300} className="mt-10">
      <a
        href={`https://wa.me/5491123456789?text=${encodeURIComponent("Hola LIX Mobility! Quiero iniciar mi registro como capitán.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-8 text-sm font-semibold text-white transition hover:bg-ink-deep active:scale-[0.98] cursor-pointer"
      >
        Iniciar Registro por WhatsApp
      </a>
    </ScrollReveal>
  </Container></section>
  </main><Footer /></>; }

function CreditCardIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/>
      <line x1="2" x2="22" y1="10" y2="10"/>
    </svg>
  );
}
