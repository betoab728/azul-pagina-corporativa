# Plan de Implementación — Azul Sostenible

Orden de trabajo para construir el sitio desde cero, partiendo del diseño Stitch. Cada fase es independiente y entregable.

---

## Resumen de fases

| Fase | Nombre | Descripción |
|------|--------|-------------|
| 1 | Setup del sistema de diseño | Tailwind v4, fuentes, tokens, layout base |
| 2 | Componentes UI (átomos) | Button, Badge, Icon, SectionLabel |
| 3 | Layouts | BaseLayout, PageLayout |
| 4 | Navegación | Header, NavDropdown, MobileMenu |
| 5 | Capa de datos | Archivos TypeScript con contenido de cada sección |
| 6 | Sections — parte estática | Hero, About, Impact, Services, Sectors |
| 7 | Sections — parte dinámica | Partners, Projects, Quote, Testimonials |
| 8 | Footer | Footer completo con links |
| 9 | Ensamblaje de página | index.astro integrando todas las secciones |
| 10 | SEO y accesibilidad | Meta tags, JSON-LD, ARIA, alt texts |
| 11 | Optimización de imágenes | `<Image>` de Astro, WebP, lazy loading |
| 12 | Revisión y ajustes | Responsive, cross-browser, performance audit |

---

## Fase 1 — Setup del sistema de diseño

**Archivos a crear/modificar:**

```
src/styles/global.css        # Tokens de diseño con @theme
public/robots.txt            # SEO básico
```

**Tareas:**
1. Definir todos los tokens de color en `src/styles/global.css` con la directiva `@theme` de Tailwind v4.
2. Añadir `@import` de Plus Jakarta Sans desde Google Fonts con `font-display: swap`.
3. Añadir `@import` de Material Symbols Outlined.
4. Definir la clase `.hero-gradient` con los gradientes del prototipo (desktop y mobile via `@media`).
5. Definir `.hide-scrollbar` para el carrusel de partners.
6. Definir estilos del dropdown (`.dropdown-menu`, `.chevron-icon`) en CSS puro para evitar JS.
7. Crear `public/robots.txt` básico.

**Validación:** `npm run dev` levanta sin errores, las clases `bg-primary`, `text-secondary`, `py-section-padding` funcionan.

---

## Fase 2 — Componentes UI (átomos)

**Archivos a crear:**

```
src/components/ui/Button.astro
src/components/ui/Badge.astro
src/components/ui/Icon.astro
src/components/ui/SectionLabel.astro
```

**Decisiones clave:**
- `Button.astro` renderiza `<a>` si recibe `href`, `<button>` si no. Nunca un `<div>` clickeable.
- `Icon.astro` siempre incluye `aria-hidden="true"` por defecto; solo se omite si el ícono es el único contenido del elemento interactivo.
- Todas las variantes de `Button` se implementan como clases CSS condicionales en el frontmatter, no como clases inline en el template.

---

## Fase 3 — Layouts

**Archivos a crear:**

```
src/layouts/BaseLayout.astro
src/layouts/PageLayout.astro
```

**`BaseLayout.astro` debe incluir:**
- `<html lang="es" class="scroll-smooth">`
- `<meta charset="utf-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>` dinámica desde props
- `<meta name="description">` desde props
- `<link rel="canonical">` generado por Astro
- Open Graph: `og:title`, `og:description`, `og:image`, `og:type`
- `<link rel="preconnect">` a fonts.googleapis.com y fonts.gstatic.com
- `<link>` a Plus Jakarta Sans con pesos 400, 600, 700, 800
- `<link>` a Material Symbols Outlined
- JSON-LD `LocalBusiness` con datos de Azul Sostenible
- `<slot />` para el contenido
- Import de `global.css`

**`PageLayout.astro`:**
- Importa `BaseLayout`, `Header`, y `Footer`.
- Envuelve el `<slot />` en `<main>`.

---

## Fase 4 — Navegación

**Archivos a crear:**

```
src/components/navigation/Header.astro
src/components/navigation/NavDropdown.astro
src/components/navigation/MobileMenu.astro
src/data/navigation.ts
```

**`navigation.ts`** — estructura de datos del menú:
```typescript
export const mainNav = [
  { label: 'Inicio', href: '#inicio' },
  {
    label: 'Servicios',
    dropdown: [
      { label: 'Tarifa Plana Ambiental', href: '#tarifa-plana-detalle' },
      { label: 'Reclasificación de Residuos Peligrosos', href: '#' },
      { label: 'Caracterización de Residuos Sólidos', href: '#' },
      { label: 'Reducción del OPEX', href: '#opex-detalle' },
      { label: 'Almacenes Inteligentes', href: '#almacenes-detalle' },
    ]
  },
  { label: 'Acreditaciones', href: '#acreditaciones' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Recursos', href: '#' },
  { label: 'Contacto', href: '#cotizacion' },
]
```

**MobileMenu:** Único componente con script de cliente. Maneja:
- Toggle `aria-expanded` en el botón hamburguesa.
- Clase `overflow-hidden` en `<body>` cuando el menú está abierto.
- Cierre al hacer click en un link interno.

---

## Fase 5 — Capa de datos

**Archivos a crear:**

```
src/data/services.ts
src/data/projects.ts
src/data/sectors.ts
src/data/testimonials.ts
src/data/impact.ts
src/data/partners.ts
```

Cada archivo exporta un array tipado con la información de cada sección. Ejemplo:

```typescript
// src/data/services.ts
export interface Service {
  icon: string
  iconColor: 'primary' | 'secondary'
  title: string
  description: string
  href: string
}

export const services: Service[] = [
  {
    icon: 'payments',
    iconColor: 'secondary',
    title: 'Tarifa plana ambiental',
    description: 'Solución integral con costos fijos mensuales para el cumplimiento ambiental de tu empresa.',
    href: '#tarifa-plana-detalle',
  },
  // ...
]
```

**Ventaja:** Separar datos de presentación permite cambiar contenido sin tocar componentes.

---

## Fase 6 — Sections estáticas

**Orden de implementación:**

1. `HeroSection.astro` — sección más visible, valida el sistema de diseño completo.
2. `AboutSection.astro` — layout de dos columnas simple.
3. `ImpactSection.astro` — 4 contadores, fácil de mapear desde `impact.ts`.
4. `ServicesSection.astro` — grid de ServiceCards.
5. `SectorsSection.astro` — grid de SectorCards.

**Criterio:** Primero las secciones que no necesitan JavaScript, para establecer la base visual completa.

---

## Fase 7 — Sections con interacción

1. **`PartnersSection.astro`** — Carrusel CSS con `overflow-x-auto` y `.hide-scrollbar`. Los botones de navegación pueden usar un pequeño script inline o `client:load`.
2. **`ProjectsSection.astro`** — Grid estático + sidebar "¿Por qué elegirnos?".
3. **`QuoteSection.astro`** — Incluye `QuoteForm.astro`.
4. **`TestimonialsSection.astro`** — Grid de testimonios. La navegación anterior/siguiente es opcional (puede ser un carousel CSS).

**`QuoteForm.astro`:** El formulario del prototipo necesita destino de envío. Opciones:
- **Formspree / Web3Forms** (sin servidor): añadir `action` al `<form>`.
- **API Route de Astro** (`src/pages/api/contact.ts`): para lógica personalizada.
- **Placeholder inicial**: form con `action="#"` y validación HTML5 nativa.

> Decisión a confirmar con el cliente antes de implementar.

---

## Fase 8 — Footer

**Archivo:** `src/components/Footer.astro`

Contenido mínimo del diseño:
- Logo blanco (invertido con `brightness-0 invert`)
- Links: Privacidad, Términos, Soporte
- Copyright dinámico: `© {new Date().getFullYear()} Azul Sostenible`

---

## Fase 9 — Ensamblaje de página

**`src/pages/index.astro`** importa en orden:

```astro
---
import PageLayout from '../layouts/PageLayout.astro'
import HeroSection from '../sections/HeroSection.astro'
import AboutSection from '../sections/AboutSection.astro'
import PartnersSection from '../sections/PartnersSection.astro'
import ImpactSection from '../sections/ImpactSection.astro'
import ServicesSection from '../sections/ServicesSection.astro'
import SectorsSection from '../sections/SectorsSection.astro'
import ProjectsSection from '../sections/ProjectsSection.astro'
import QuoteSection from '../sections/QuoteSection.astro'
import TestimonialsSection from '../sections/TestimonialsSection.astro'
---
<PageLayout title="Azul Sostenible | Ingeniería y Gestión Ambiental" description="Soluciones ambientales integrales...">
  <HeroSection />
  <AboutSection />
  <PartnersSection />
  <ImpactSection />
  <ServicesSection />
  <SectorsSection />
  <ProjectsSection />
  <QuoteSection />
  <TestimonialsSection />
</PageLayout>
```

---

## Fase 10 — SEO y accesibilidad

**SEO:**
- [ ] JSON-LD `LocalBusiness` con nombre, URL, teléfono, dirección.
- [ ] `og:image` con imagen de preview del sitio.
- [ ] `<meta name="robots" content="index, follow">`.
- [ ] `public/sitemap.xml` o integración `@astrojs/sitemap`.
- [ ] `public/robots.txt`.
- [ ] Verificar que todas las imágenes tienen `alt` descriptivo.

**Accesibilidad:**
- [ ] Todos los `<button>` tienen texto visible o `aria-label`.
- [ ] El formulario tiene `<label for>` vinculado a cada `<input id>`.
- [ ] El menú móvil tiene `role="dialog"` y `aria-modal="true"`.
- [ ] El carousel de partners tiene `role="region"` y `aria-label`.
- [ ] Navegación del teclado funcional (tab order, focus visible).
- [ ] Colores verificados contra WCAG 2.1 AA (contrast ratio ≥ 4.5:1 para texto normal).

---

## Fase 11 — Optimización de imágenes

**Imágenes del prototipo:** Las URLs de `lh3.googleusercontent.com` son temporales (del prototipo Stitch). En producción:

1. Reemplazar con imágenes propias del cliente en `src/assets/images/`.
2. Usar el componente `<Image>` de `astro:assets` para:
   - Generación automática de formatos WebP/AVIF.
   - Atributos `width` y `height` para evitar CLS.
   - `loading="lazy"` por defecto (excepto el hero que usa `loading="eager"`).
3. El logo en SVG debe servirse como `<img src="/logo.svg">` o como componente SVG inline.

```astro
---
import { Image } from 'astro:assets'
import heroImage from '../assets/images/hero-bg.jpg'
---
<Image src={heroImage} alt="..." width={1920} height={1080} loading="eager" />
```

---

## Fase 12 — Revisión final

**Checklist pre-lanzamiento:**

**Responsive:**
- [ ] Móvil (375px): hero, formulario, nav
- [ ] Tablet (768px): grid de servicios, layout de proyectos
- [ ] Desktop (1280px+): layout completo

**Performance (Lighthouse ≥ 90):**
- [ ] LCP < 2.5s (hero image optimizada y preloaded)
- [ ] CLS = 0 (dimensiones en todas las imágenes)
- [ ] FID / INP bajo (mínimo JS)

**Cross-browser:**
- [ ] Chrome, Firefox, Safari, Edge
- [ ] iOS Safari (menú móvil, formulario)

**Contenido:**
- [ ] Reemplazar placeholders `{{DATA:SCREEN:SCREEN_XX}}` con rutas reales
- [ ] Actualizar número de WhatsApp real
- [ ] Actualizar correo/teléfono de contacto
- [ ] Logos reales de partners (en lugar de placeholders)
- [ ] Fotos reales del equipo y proyectos

---

## Dependencias adicionales a evaluar

| Paquete | Propósito | Prioridad |
|---------|-----------|-----------|
| `@astrojs/sitemap` | Generación de sitemap.xml | Alta |
| `@astrojs/image` (ya incluido en Astro 4+) | Optimización de imágenes | Incluido |
| Formspree o Web3Forms | Backend del formulario de contacto | Alta |
| `sharp` | Procesador de imágenes (peer dep de Astro) | Recomendado |

---

## Tiempo estimado por fase

| Fase | Estimado |
|------|----------|
| 1 — Setup | 1h |
| 2 — UI átomos | 2h |
| 3 — Layouts | 1h |
| 4 — Navegación | 2h |
| 5 — Datos | 1h |
| 6 — Sections estáticas | 3h |
| 7 — Sections interactivas | 3h |
| 8 — Footer | 0.5h |
| 9 — Ensamblaje | 0.5h |
| 10 — SEO/A11y | 2h |
| 11 — Imágenes | 1h |
| 12 — Revisión | 2h |
| **Total** | **~19h** |
