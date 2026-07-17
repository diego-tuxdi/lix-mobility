# AGENTS.md

# Lix Mobility

Este archivo contiene las reglas permanentes del proyecto.

Antes de realizar cualquier modificación deberás leer completamente todos los archivos ubicados en `/specs`.

Los documentos de `/specs` representan la fuente de verdad del proyecto.

Si existe una contradicción entre el código y las especificaciones, siempre prevalecen las especificaciones.

---

# Objetivo

Construir la web institucional de Lix Mobility.

No se trata de una landing genérica.

Debe sentirse como una extensión natural de la aplicación móvil.

El objetivo principal es convertir visitantes en:

- pasajeros;
- futuros capitanes.

---

# Filosofía

Lix vende movilidad.

No vende embarcaciones.

No vende turismo.

No vende experiencias.

Todo el proyecto gira alrededor de una idea:

> La nueva forma de moverte por el agua.

---

# Antes de comenzar

Leer obligatoriamente:

specs/

00-project.md

01-design-principles.md

02-home.md

03-captains.md

04-assets.md

05-copy.md

06-technical.md

07-restrictions.md

08-ui-philosophy.md

---

# Stack

Utilizar exclusivamente:

- Next.js App Router
- React
- TypeScript
- TailwindCSS

No introducir librerías grandes sin una justificación técnica.

---

# Componentes

Construir componentes reutilizables.

Ejemplos

Navbar

Section

Container

Button

PhoneMockup

Card

Accordion

Footer

No duplicar componentes.

---

# Contenido

Todo el contenido proviene de:

05-copy.md

Nunca inventar:

- títulos;
- beneficios;
- estadísticas;
- testimonios;
- funcionalidades.

Si falta contenido,

detenerse y solicitarlo.

---

# Assets

Utilizar únicamente recursos oficiales.

Prioridad:

1.

Pantallas reales.

2.

Ilustraciones oficiales.

3.

Fotografías.

4.

Iconografía.

Nunca generar nuevas pantallas.

Nunca modificar mockups.

Nunca reemplazar assets oficiales por imágenes genéricas.

---

# Diseño

Inspiraciones:

Uber

Cabify

Stripe

Linear

Apple

Tomar únicamente criterios de calidad.

Nunca copiar layouts.

Nunca copiar identidad visual.

---

# Animaciones

Muy sutiles.

Utilizar únicamente:

Fade.

Slide.

Floating.

Hover.

Evitar:

Parallax.

Bounce.

Zoom.

Rotaciones.

Partículas.

---

# Performance

La performance tiene prioridad sobre los efectos visuales.

Optimizar:

Imágenes.

Fuentes.

Carga inicial.

Lighthouse.

---

# Responsive

Mobile First.

No crear versiones distintas.

La misma experiencia debe adaptarse correctamente a todos los tamaños.

---

# SEO

Cada página debe incluir:

title

description

Open Graph

Twitter Cards

robots

sitemap

canonical

---

# Accesibilidad

Todos los botones deben ser accesibles.

Todas las imágenes deben incluir alt.

Contraste suficiente.

Navegación mediante teclado.

---

# Calidad del código

Componentes pequeños.

Tipado estricto.

Sin any.

Sin código muerto.

Sin duplicación.

Separar lógica de presentación.

---

# Si existe una duda

Nunca asumir.

Detener la implementación.

Explicar claramente qué información falta.

Esperar confirmación.

---

# Definición de éxito

Una persona que nunca utilizó Lix debe comprender en menos de dos minutos:

- qué es;
- cómo funciona;
- por qué utilizarla;
- cómo descargar la aplicación;
- cómo convertirse en Capitán.

Si alguno de esos puntos no está claro,

la implementación todavía no está terminada.

---

# Regla más importante

La aplicación es el producto.

La web únicamente la presenta.

Siempre que exista la posibilidad de mostrar el producto en lugar de describirlo,

mostrar el producto.