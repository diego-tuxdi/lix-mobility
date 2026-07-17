# 06-technical.md

# Implementación Técnica

Este documento define las reglas técnicas para el desarrollo de la web.

El objetivo es construir una landing moderna, rápida, mantenible y fácilmente escalable.

No deben tomarse decisiones técnicas que comprometan la simplicidad del proyecto.

---

# Stack

## Framework

Next.js

App Router.

React.

TypeScript.

---

## Estilos

TailwindCSS.

No utilizar CSS Modules.

No utilizar Styled Components.

No utilizar Bootstrap.

No utilizar Material UI.

Toda la interfaz debe construirse utilizando componentes propios.

---

## Componentes

Todos los componentes deben ser reutilizables.

Ejemplos

Button

Section

Container

Card

Accordion

Navbar

Footer

PhoneMockup

AppScreen

SectionTitle

CTA

No duplicar componentes.

---

# Arquitectura

/app

/components

/lib

/hooks

/public

/specs

Cada sección importante debe vivir en un componente independiente.

---

# Filosofía

Componentes pequeños.

Fácil lectura.

Poca lógica dentro del JSX.

Separar presentación de comportamiento.

---

# Responsive

Mobile First.

Breakpoints recomendados.

sm

md

lg

xl

2xl

No desarrollar versiones independientes para mobile.

Todo debe adaptarse utilizando el mismo layout.

---

# Navegación

Landing One Page.

Los links del menú deben utilizar scroll suave.

No cambiar de página.

La única excepción es:

Landing Capitanes.

---

# Animaciones

Utilizar únicamente cuando aporten valor.

Permitido

Framer Motion.

CSS Transitions.

Intersection Observer.

No utilizar GSAP.

No utilizar librerías pesadas.

---

# Rendimiento

Priorizar performance.

Utilizar:

next/image

next/font

lazy loading

dynamic imports cuando tenga sentido

Evitar JavaScript innecesario.

---

# SEO

Cada página debe incluir:

Title.

Description.

Open Graph.

Twitter Cards.

Canonical.

Favicons.

Manifest.

Robots.

Sitemap.

---

# Accesibilidad

Todos los botones deben ser accesibles.

Todos los formularios deben tener labels.

Las imágenes deben incluir alt.

Navegación mediante teclado.

Contraste suficiente.

---

# Imágenes

Utilizar next/image.

No utilizar imágenes gigantes.

Optimizar resolución.

Lazy loading cuando corresponda.

---

# Assets

Toda la información deberá obtenerse desde:

/public

No utilizar imágenes externas.

No utilizar placeholders.

Si un asset no existe deberá dejarse claramente indicado.

Nunca reemplazar assets oficiales por imágenes de stock.

---

# Iconografía

Lucide React.

Mantener un único estilo.

No mezclar packs.

---

# Tipografía

Utilizar una única familia tipográfica.

Preferentemente desde next/font.

Evitar múltiples pesos innecesarios.

---

# Colores

Centralizar en Tailwind.

No utilizar colores hardcodeados.

Todo deberá utilizar variables del tema.

---

# Código

TypeScript estricto.

Sin any.

Sin código muerto.

Sin comentarios innecesarios.

Componentes bien tipados.

---

# Formularios

React Hook Form.

Zod para validaciones si fueran necesarias.

Actualmente el MVP prácticamente no requiere formularios.

---

# Estado

No utilizar Redux.

No utilizar Zustand.

No utilizar Context innecesariamente.

La landing prácticamente no posee estado global.

---

# Analytics

Preparar estructura para:

Google Analytics.

Meta Pixel.

Hotjar.

No implementar si no existen credenciales.

Simplemente dejar preparada la arquitectura.

---

# Acciones

Los botones deberán aceptar configuración futura.

Ejemplo

Descargar App

iOS

Android

Formulario

Link externo

No hardcodear destinos.

---

# Contenido

El contenido deberá poder reemplazarse fácilmente.

Evitar textos dentro de componentes.

Centralizar strings cuando sea posible.

---

# Scroll

Scroll suave.

Navbar fija.

Al hacer scroll:

Fondo sólido.

Pequeña sombra.

Mantener altura.

No cambiar tamaño.

---

# FAQ

Accordion.

Una sola pregunta abierta.

Animación simple.

---

# Mockups

Los mockups deberán ser componentes reutilizables.

Permitir:

imagen

animación

rotación opcional

floating

cambio automático de pantalla

---

# Código Limpio

Preferir:

muchos componentes pequeños

antes que

componentes gigantes.

---

# Escalabilidad

Aunque el MVP contiene solamente:

Home

Landing Capitanes

la arquitectura deberá permitir agregar nuevas páginas fácilmente.

---

# Calidad

Antes de finalizar verificar:

✔ Responsive.

✔ Lighthouse.

✔ SEO.

✔ Accesibilidad.

✔ Performance.

✔ Links.

✔ Assets.

✔ Consistencia visual.

---

# Objetivo Final

El código debe sentirse como un producto profesional.

Debe ser fácil de mantener.

Fácil de extender.

Fácil de reutilizar.

La simplicidad tiene prioridad sobre la complejidad.