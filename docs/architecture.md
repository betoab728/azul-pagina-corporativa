# Arquitectura — Azul Sostenible

## Visión general

Sitio web corporativo para **Azul Sostenible**, empresa peruana de ingeniería y gestión ambiental. La página es una **single-page con scroll suave** (SPA-like navigation), construida con Astro 6 + Tailwind CSS 4. El diseño de origen proviene de Stitch y sigue Material Design 3 con paleta azul/verde.

---

## Decisiones arquitectónicas

### Por qué Astro
- **Cero JS por defecto**: el sitio es mayormente estático. Astro renderiza todo en build-time y solo hidrata los componentes que lo necesiten (islands architecture).
- **SEO óptimo**: HTML renderizado en el servidor, con control total del `<head>` por layout.
- **Tailwind v4 nativo**: el plugin `@tailwindcss/vite` evita postprocesado extra.
- **Escalabilidad**: si se necesitan páginas de servicios, proyectos o blog, se añaden routes sin cambiar la arquitectura.

### Enfoque de página única
El diseño de Stitch es una landing page con secciones ancladas (`#inicio`, `#nosotros`, `#cotizacion`). La arquitectura refleja esto: una sola ruta `index.astro` que importa todas las secciones. Los links `{{DATA:SCREEN:SCREEN_XX}}` del prototipo se resolverán como rutas propias cuando corresponda.

### Islands Architecture
Solo dos elementos necesitan JavaScript en el cliente:
- **MobileMenu**: toggle del menú hamburguesa.
- **PartnersCarousel**: scroll de logos de partners.

El resto del sitio es HTML estático puro — cero overhead en el cliente.

---

## Estructura de carpetas propuesta

```
src/
├── layouts/
│   ├── BaseLayout.astro       # HTML shell: <html>, <head>, SEO, fuentes
│   └── PageLayout.astro       # BaseLayout + Header + Footer
│
├── components/
│   ├── ui/                    # Átomos reutilizables
│   │   ├── Button.astro
│   │   ├── Badge.astro
│   │   ├── Icon.astro
│   │   └── SectionLabel.astro
│   │
│   ├── blocks/                # Bloques compuestos (combinan átomos)
│   │   ├── ServiceCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── TestimonialCard.astro
│   │   ├── SectorCard.astro
│   │   ├── FeatureCard.astro
│   │   └── ImpactCounter.astro
│   │
│   ├── navigation/            # Componentes de navegación
│   │   ├── Header.astro
│   │   ├── NavDropdown.astro
│   │   └── MobileMenu.astro   # island: client:load
│   │
│   └── forms/
│       ├── QuoteForm.astro
│       └── FormInput.astro
│
├── sections/                  # Secciones completas de página
│   ├── HeroSection.astro
│   ├── AboutSection.astro
│   ├── PartnersSection.astro  # island: client:visible
│   ├── ImpactSection.astro
│   ├── ServicesSection.astro
│   ├── SectorsSection.astro
│   ├── ProjectsSection.astro
│   ├── QuoteSection.astro
│   └── TestimonialsSection.astro
│
├── pages/
│   └── index.astro            # Ensamblador de secciones
│
├── data/                      # Datos estáticos tipados en TypeScript
│   ├── services.ts
│   ├── projects.ts
│   ├── sectors.ts
│   ├── testimonials.ts
│   └── navigation.ts
│
├── assets/
│   ├── images/                # Imágenes optimizadas con <Image /> de Astro
│   ├── icons/                 # SVGs locales si se necesitan
│   └── fonts/                 # Fuentes locales (si se auto-hostean)
│
└── styles/
    ├── global.css             # @import "tailwindcss" + tokens CSS
    └── tokens.css             # Variables CSS derivadas del design system
```

---

## Flujo de datos

```
data/*.ts  →  sections/*.astro  →  index.astro
                    ↓
            components/blocks/*
                    ↓
              components/ui/*
```

Los datos viajan **top-down en build time**. No hay estado global en runtime. Los arrays de servicios, proyectos y testimonios se importan en la sección correspondiente y se mapean a componentes.

---

## Estrategia SEO

| Elemento | Implementación |
|----------|---------------|
| Meta title / description | Props del BaseLayout, personalizables por página |
| Open Graph | Tags OG en BaseLayout |
| Schema.org | `LocalBusiness` JSON-LD en BaseLayout |
| `lang="es"` | Fijado en `<html>` |
| Sitemap | `@astrojs/sitemap` (integración a agregar) |
| Robots.txt | Archivo en `/public/robots.txt` |
| URLs canónicas | `<link rel="canonical">` generado por Astro |
| Imágenes | Componente `<Image>` de Astro genera `width`, `height`, `alt` y formatos WebP/AVIF |

---

## Estrategia de rendimiento

| Técnica | Detalle |
|---------|---------|
| Astro SSG | HTML pre-renderizado, sin JS en el servidor |
| `client:visible` | Los carouseles e interacciones se hidratan solo cuando entran al viewport |
| `<Image>` de Astro | Optimización automática, lazy loading, formatos modernos |
| Fuentes | Plus Jakarta Sans con `font-display: swap` y preload |
| CSS | Tailwind v4 purge automático en build (zero dead CSS) |
| Critical CSS | Astro inlinea el CSS crítico en `<head>` |
| Prefetch | `<link rel="prefetch">` para rutas internas (integración Astro) |

---

## Accesibilidad

- Todo el HTML semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`.
- Botones con `aria-label` donde el texto no es visible.
- `role="navigation"` y `aria-expanded` en el menú móvil.
- Contraste de colores revisado contra WCAG 2.1 AA.
- Iconos de Material Symbols con `aria-hidden="true"` cuando son decorativos.
- Formulario con `<label>` asociado a cada `<input>` mediante `for`/`id`.

---

## Escalabilidad futura

Si el proyecto crece, la arquitectura admite:
- **Colecciones Astro** (`src/content/`) para servicios y proyectos en Markdown/MDX.
- **Páginas de detalle**: `/servicios/[slug].astro`, `/proyectos/[slug].astro`.
- **Internacionalización** con `i18n` de Astro (rutas `/es/` y `/en/`).
- **CMS headless** (Contentful, Sanity, Notion) conectado vía API en build time.
