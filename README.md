# Lix Mobility Web

Sitio institucional de Lix Mobility. Incluye la Home y la landing de Capitanes.

## Stack

- Next.js App Router
- React
- TypeScript
- TailwindCSS
- vinext para ejecución y despliegue

## Estructura

- `app/`: rutas, metadatos y estilos globales.
- `components/`: componentes y secciones reutilizables.
- `public/img/`: recursos gráficos oficiales.
- `specs/`: documentación y fuente de verdad del proyecto.
- `worker/` y `build/`: integración de ejecución con vinext.
- `tests/`: validaciones de renderizado de las dos rutas.

## Desarrollo

```bash
npm install
npm run dev
```

## Validación

```bash
npm run lint
npm run build
npm test
```

No se deben inventar contenidos ni reemplazar los assets oficiales. Antes de modificar el proyecto, consultar `AGENTS.md` y la documentación de `specs/`.
