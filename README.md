# Plataforma de Capacitación IMN

Aplicación web de capacitación interna construida con React + TypeScript + Vite.

## Documentación principal

- Guía técnica completa del código: [docs/GUIA_CODIGO_IMN.md](docs/GUIA_CODIGO_IMN.md)

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

1. Instalar dependencias:

	npm install

2. Ejecutar en desarrollo:

	npm run dev

3. Abrir en navegador:

	http://localhost:5173/#/

## Login de prueba actual

- Usuario: admin
- Contraseña: admin123

## Scripts útiles

- Desarrollo: npm run dev
- Build: npm run build
- Preview: npm run preview
- Type check: npx tsc --noEmit

## Stack

- React 19
- TypeScript
- Vite
- React Router (HashRouter)

## Estado actual (Marzo 2026)

### Completado
- **Responsive CSS global** — 50+ archivos con tipografía clamp(), breakpoints móviles, sin overflow horizontal.
- **BUG-001 Dashboard** — Colisión de @keyframes resuelta (ver docs/GUIA_CODIGO_IMN.md sección 12).
- **KeyMomentsTimeline** (`/#/m1/key-moments`) — Rediseño interactivo: grid de tarjetas + modal con navegación.
- **BrandEvolutionTimeline** (`/#/m1/brand-evolution`) — Rediseño interactivo: carrusel de 3 eras con tabs, slides animados y grid de productos.
- **Documentación** — Guía técnica completa actualizada.

### Pendiente
- Rediseño visual de otras páginas de módulos (QuienesSomos, Organigrama, ProductosTimeline, etc.).
- Tests unitarios / E2E.
- Accesibilidad (aria-labels, focus trap).
- Migración a CSS Modules para eliminar riesgo de colisiones globales.

Ver detalles completos en [docs/GUIA_CODIGO_IMN.md](docs/GUIA_CODIGO_IMN.md) secciones 13-15.

## Nota

El proyecto usa persistencia local (localStorage) para sesión y progreso. No depende de backend en la implementación actual.
