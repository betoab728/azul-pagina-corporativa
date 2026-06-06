# Componentes — Azul Sostenible

Inventario completo de componentes Astro derivados del diseño Stitch. Organizado en tres capas: **UI** (átomos), **Blocks** (moléculas) y **Sections** (organismos).

---

## Capa 1 — UI (Átomos)

Componentes sin estado, sin lógica de negocio. Solo reciben props y renderizan HTML.

### `Button.astro`

```
Props:
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  href?: string          # Si se provee, renderiza <a>, sino <button>
  icon?: string          # Nombre de Material Symbol
  iconPosition?: 'left' | 'right'
  class?: string
```

**Variantes identificadas en el diseño:**
- `primary` — fondo azul (`bg-primary`), texto blanco, pill-shaped. Usado en "Más información".
- `secondary` — fondo verde (`bg-secondary`), texto blanco, pill-shaped. Usado en "Cotiza tu proyecto" y el CTA principal.
- `outline` — borde azul, fondo transparente. Usado en "Diagnóstico ambiental gratuito".
- `ghost` — solo texto con flecha. Usado en "Ver más →".

---

### `Badge.astro`

Chip/etiqueta para categorías de proyectos y secciones.

```
Props:
  label: string
  color?: 'primary' | 'secondary' | 'neutral'
  size?: 'sm' | 'md'
```

Ejemplos: "NUESTROS SERVICIOS", "Sector minero", "Industrial", "COTIZACIÓN RÁPIDA".

---

### `Icon.astro`

Wrapper de Material Symbols Outlined.

```
Props:
  name: string           # Nombre del icono (ej: "rocket_launch")
  size?: 'sm' | 'md' | 'lg' | 'xl'
  class?: string
  ariaHidden?: boolean   # default: true
```

Centraliza la definición de `font-variation-settings` para consistencia.

---

### `SectionLabel.astro`

Etiqueta superior de sección (texto pequeño en mayúsculas con color de acento).

```
Props:
  text: string
  color?: 'secondary' | 'primary'  # default: 'secondary'
```

Ejemplo: `<SectionLabel text="¿QUIÉNES SOMOS?" />`.

---

## Capa 2 — Blocks (Moléculas)

Combinan átomos para formar unidades de contenido reutilizables.

### `ServiceCard.astro`

Tarjeta de servicio usada en la sección principal de servicios.

```
Props:
  icon: string           # Material Symbol name
  iconColor: 'primary' | 'secondary'
  title: string
  description: string
  href?: string
```

Comportamiento: hover eleva la sombra (`hover:shadow-xl`), el icono escala (`group-hover:scale-110`).

---

### `ProjectCard.astro`

Tarjeta de proyecto con imagen, badge de sector y enlace.

```
Props:
  image: ImageMetadata | string
  imageAlt: string
  sector: string
  sectorColor: 'primary' | 'secondary'
  title: string
  description: string
  href?: string
```

---

### `TestimonialCard.astro`

Tarjeta de testimonio con estrellas, cita y datos del autor.

```
Props:
  quote: string
  authorName: string
  authorRole: string
  authorCompany: string
  authorImage: ImageMetadata | string
  rating?: number        # default: 5
```

---

### `SectorCard.astro`

Tarjeta de sector con icono grande y nombre.

```
Props:
  icon: string           # Material Symbol name
  name: string
  href?: string
  color?: 'primary' | 'secondary'
```

Hover cambia el fondo del icono a color sólido (`group-hover:bg-primary group-hover:text-white`).

---

### `FeatureCard.astro`

Mini-tarjeta del hero con icono pequeño, texto y flecha.

```
Props:
  icon: string
  iconColor: 'primary' | 'secondary'
  text: string
  href?: string
```

---

### `ImpactCounter.astro`

Contador de impacto con icono y número grande.

```
Props:
  icon: string
  iconColor: 'primary' | 'secondary'
  value: string          # Ej: "+10,000"
  label: string          # Ej: "toneladas gestionadas"
```

---

### `FormInput.astro`

Campo de formulario con label, icono y estado de error.

```
Props:
  label: string
  name: string
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea'
  placeholder?: string
  icon?: string
  required?: boolean
  options?: { value: string; label: string }[]  # Solo para type="select"
```

---

## Capa 3 — Navigation

### `Header.astro`

Navegación fija con logo, links, dropdown de servicios y CTAs.

```
Props:
  currentPath: string    # Para marcar el link activo
```

**Slots internos:**
- Logo (`<img>`)
- `<NavDropdown>` para Servicios
- Links planos para las demás rutas
- Botón "Cotiza tu proyecto"
- Botón WhatsApp
- `<MobileMenu>` (island)

---

### `NavDropdown.astro`

Ítem de navegación con menú desplegable.

```
Props:
  label: string
  items: { label: string; href: string }[]
```

Animación CSS pura (no JS): `opacity + translateY` en `group:hover`.

---

### `MobileMenu.astro`

Menú lateral para móvil. Único componente que requiere hidratación (`client:load`).

```
Props:
  items: NavigationItem[]
```

Maneja `aria-expanded` y bloqueo de scroll del body cuando está abierto.

---

## Capa 4 — Sections (Organismos)

Cada sección es una `<section>` HTML completa. Importan sus propios datos de `src/data/`.

| Componente | ID / Ancla | Descripción |
|------------|-----------|-------------|
| `HeroSection.astro` | `#inicio` | Imagen de fondo, gradiente, headline, 3 feature cards, 2 CTAs |
| `AboutSection.astro` | `#nosotros` | Imagen del equipo + texto de empresa + botones |
| `PartnersSection.astro` | — | Carrusel de logos de clientes |
| `ImpactSection.astro` | — | 4 contadores de impacto |
| `ServicesSection.astro` | `#servicios` | Grid de 5 ServiceCards + subtítulo |
| `SectorsSection.astro` | `#sectores` | Grid de 4 SectorCards |
| `ProjectsSection.astro` | `#proyectos` | Grid de 3 ProjectCards + sidebar "¿Por qué elegirnos?" |
| `QuoteSection.astro` | `#cotizacion` | Info de contacto + QuoteForm |
| `TestimonialsSection.astro` | — | 3 TestimonialCards + navegación |

---

## Layouts

### `BaseLayout.astro`

```
Props:
  title: string
  description: string
  image?: string         # OG image URL
  canonical?: string
```

Responsabilidades:
- Estructura `<html lang="es">`, `<head>`, `<body>`
- Preload de fuentes (Plus Jakarta Sans)
- Link a Material Symbols (Google Fonts)
- Meta tags SEO: title, description, OG, Twitter Card
- JSON-LD `LocalBusiness`
- Import de `global.css`

### `PageLayout.astro`

```
Props: (hereda BaseLayout)
  showHeader?: boolean   # default: true
  showFooter?: boolean   # default: true
```

Envuelve el contenido con `<Header>` y `<Footer>`.

---

## Jerarquía de composición

```
PageLayout
├── Header
│   ├── NavDropdown
│   └── MobileMenu (island)
├── main
│   ├── HeroSection
│   │   └── FeatureCard × 3
│   ├── AboutSection
│   ├── PartnersSection (island)
│   ├── ImpactSection
│   │   └── ImpactCounter × 4
│   ├── ServicesSection
│   │   └── ServiceCard × 5
│   ├── SectorsSection
│   │   └── SectorCard × 4
│   ├── ProjectsSection
│   │   └── ProjectCard × 3
│   ├── QuoteSection
│   │   └── QuoteForm
│   │       └── FormInput × 5
│   └── TestimonialsSection
│       └── TestimonialCard × 3
└── Footer
```
