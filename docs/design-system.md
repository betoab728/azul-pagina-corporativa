# Design System — Azul Sostenible

Sistema de diseño basado en **Material Design 3** con personalidad "Ecological Professionalism". Extraído del archivo `DESIGN.md` del prototipo Stitch y adaptado para Tailwind CSS v4.

---

## Paleta de colores

La paleta tiene dos pilares: **Deep Water Blue** (azul institucional) y **Growth Green** (verde de conversión).

### Colores principales

| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#004791` | Acciones primarias, navegación, headings |
| `primary-container` | `#0d5eba` | Fondo de botón CTA del header |
| `secondary` | `#006e07` | CTAs de conversión, éxito, accentos verdes |
| `secondary-container` | `#92fb7f` | Fondos suaves verdes |
| `tertiary` | `#274879` | Fondos oscuros alternativos |
| `tertiary-container` | `#416093` | Fondo alternativo de secciones |

### Colores de superficie

| Token | Valor | Uso |
|-------|-------|-----|
| `background` / `surface` | `#f7f9fb` | Fondo base del sitio |
| `surface-container-lowest` | `#ffffff` | Tarjetas, header, fondos blancos puros |
| `surface-container-low` | `#f2f4f6` | Hover de inputs, fondos alternativos |
| `surface-container` | `#eceef0` | Fondos de iconos en formulario |
| `surface-container-high` | `#e6e8ea` | Divisores suaves |
| `surface-dim` | `#d8dadc` | Superficies atenuadas |

### Colores de texto

| Token | Valor | Uso |
|-------|-------|-----|
| `on-surface` | `#191c1e` | Texto principal |
| `on-surface-variant` | `#424752` | Texto secundario, placeholders activos |
| `outline` | `#727783` | Bordes de input |
| `outline-variant` | `#c2c6d4` | Bordes suaves de tarjetas |

### Colores funcionales

| Token | Valor | Uso |
|-------|-------|-----|
| `error` | `#ba1a1a` | Estados de error en formularios |
| `on-primary` | `#ffffff` | Texto sobre fondo primary |
| `on-secondary` | `#ffffff` | Texto sobre fondo secondary |

---

## Tipografía

Fuente única: **Plus Jakarta Sans** (Google Fonts). Pesos: 400, 600, 700, 800.

| Escala | Familia | Tamaño | Peso | Line-height | Letter-spacing | Uso |
|--------|---------|--------|------|-------------|----------------|-----|
| `headline-xl` | Plus Jakarta Sans | 48px / 62px desktop | 800 | 56px | -0.02em | H1 del hero |
| `headline-lg` | Plus Jakarta Sans | 36px | 700 | 44px | -0.01em | Títulos de sección |
| `headline-md` | Plus Jakarta Sans | 24px | 700 | 32px | — | Subtítulos de sección |
| `body-lg` | Plus Jakarta Sans | 18px | 400 | 28px | — | Párrafos principales |
| `body-md` | Plus Jakarta Sans | 16px | 400 | 24px | — | Texto general |
| `label-md` | Plus Jakarta Sans | 14px | 600 | 20px | — | Labels, nav items |
| `headline-xl-mobile` | Plus Jakarta Sans | 32px | 800 | 40px | — | H1 en móvil |

---

## Espaciado

Sistema basado en múltiplos de **4px**.

| Token | Valor | Uso |
|-------|-------|-----|
| `base` | 4px | Unidad mínima |
| `gutter-mobile` | 16px | Separación interna de columnas en móvil |
| `margin-mobile` | 20px | Márgenes horizontales en móvil |
| `gutter-desktop` | 24px | Separación interna de columnas en desktop |
| `margin-desktop` | 80px | Márgenes horizontales en desktop (`px-margin-desktop`) |
| `section-padding` | 120px | Padding vertical entre secciones (`py-section-padding`) |

---

## Bordes y radios

| Token | Valor | Uso |
|-------|-------|-----|
| `rounded-sm` | 4px | Chips pequeños |
| `rounded` (DEFAULT) | 8px | Cards, inputs, badges estándar |
| `rounded-md` | 12px | Tarjetas medianas |
| `rounded-lg` | 16px | Secciones internas |
| `rounded-xl` | 24px | Cards de proyectos, testimonios |
| `rounded-2xl` | Aprox. 32px | Formularios, cards grandes |
| `rounded-3xl` | Aprox. 40px | Hero cards, cards de servicios |
| `rounded-full` | 9999px | Botones pill, avatares, badges circulares |

---

## Sombras y elevación

Jerarquía por capas tonales (no sombras pesadas):

| Nivel | Descripción | CSS aproximado |
|-------|-------------|----------------|
| L0 — Base | Fondo del sitio | Sin sombra |
| L1 — Tarjetas | Fondo blanco + borde 1px | `border border-outline-variant/30` |
| L2 — Hover | Sombra suave azulada | `shadow-sm` → `shadow-xl` on hover |
| L3 — Modales / floatantes | Sombra pronunciada | `shadow-2xl` |
| L4 — Header fijo | Blur + fondo semitransparente | `bg-white/95 backdrop-blur-md` |

---

## Iconografía

**Material Symbols Outlined** (Google Fonts variable). Configuración base:

```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
```

Iconos identificados en el diseño:

| Icono | Uso |
|-------|-----|
| `rocket_launch` | CTA principal, botón cotización |
| `eco` | Diagnóstico gratuito, badge de cotización |
| `assignment_turned_in` | Feature card "Cumplimiento normativo" |
| `savings` | Feature card "Reducción de costos" |
| `trending_up` | Feature card "Impacto medible" |
| `payments` | Servicio "Tarifa plana" |
| `delete_sweep` | Servicio "Reclasificación de residuos" |
| `checklist` | Servicio "Caracterización" |
| `trending_down` | Servicio "Reducción OPEX" |
| `warehouse` | Servicio "Almacenes inteligentes" |
| `mining`, `factory`, `medical_services` | Sectores |
| `groups`, `work_history`, `corporate_fare`, `map` | Contadores de impacto |
| `star` | Testimonios (rating) |
| `expand_more`, `chevron_left`, `chevron_right` | Navegación |
| `menu` | Botón hamburguesa móvil |
| `person`, `business`, `mail`, `call` | Inputs del formulario |

---

## Componentes de diseño — Guía de estilos

### Botones

```
Primary (azul):
  bg-primary text-white px-10 py-4 rounded-full font-bold
  hover: bg-primary/90 shadow-lg

Secondary (verde — conversión):
  bg-secondary text-white px-10 py-4 rounded-full font-bold
  hover: bg-secondary/90 shadow-lg active:scale-95

Outline:
  border-2 border-outline-variant/40 text-primary bg-white px-10 py-4 rounded-full
  hover: bg-surface-container-low

Ghost (solo texto + flecha):
  text-primary font-bold flex items-center gap-2
  hover: gap-4 (transición de gap)

CTA Header:
  bg-primary-container text-white px-6 py-3 rounded-full
  hover: bg-primary
```

### Cards de servicios

```
bg-white p-8 rounded-3xl border border-outline-variant/30 shadow-sm
hover: shadow-xl transition-all
Ícono: w-16 h-16 rounded-full bg-{color}/10 group-hover:scale-110
```

### Inputs del formulario

```
Base:
  w-full pl-12 pr-4 py-4 rounded-2xl bg-surface border border-outline-variant/30

Focus:
  focus:ring-2 focus:ring-primary/20 outline-none

Con ícono:
  ícono posicionado: absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50
```

### Gradiente del Hero

```css
/* Desktop */
background: linear-gradient(90deg, #ffffff 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%);

/* Mobile */
background: linear-gradient(0deg, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 100%);
```

---

## Configuración Tailwind v4

En Tailwind v4, los tokens se definen mediante CSS en `global.css` (sin `tailwind.config.js`):

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  /* Colores */
  --color-primary: #004791;
  --color-primary-container: #0d5eba;
  --color-secondary: #006e07;
  --color-secondary-container: #92fb7f;
  --color-tertiary: #274879;
  --color-tertiary-container: #416093;

  --color-background: #f7f9fb;
  --color-surface: #f7f9fb;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f2f4f6;
  --color-surface-container: #eceef0;
  --color-surface-container-high: #e6e8ea;
  --color-surface-dim: #d8dadc;
  --color-surface-bright: #f7f9fb;

  --color-on-surface: #191c1e;
  --color-on-surface-variant: #424752;
  --color-on-primary: #ffffff;
  --color-on-secondary: #ffffff;
  --color-on-primary-container: #cbdbff;
  --color-on-secondary-container: #007508;
  --color-outline: #727783;
  --color-outline-variant: #c2c6d4;
  --color-inverse-surface: #2d3133;
  --color-inverse-on-surface: #eff1f3;
  --color-surface-tint: #085cb8;
  --color-error: #ba1a1a;

  /* Tipografía */
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-headline: 'Plus Jakarta Sans', sans-serif;

  /* Espaciado */
  --spacing-section-padding: 120px;
  --spacing-gutter-mobile: 16px;
  --spacing-margin-mobile: 20px;
  --spacing-gutter-desktop: 24px;
  --spacing-margin-desktop: 80px;

  /* Radios */
  --radius-DEFAULT: 0.5rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
}
```

> Nota: Tailwind v4 mapea `--color-*` a clases `text-*`, `bg-*`, `border-*` automáticamente. Los nombres con guion medio (ej: `on-surface`) se usan como `text-on-surface`.

---

## Responsive Breakpoints

Los del diseño son los estándar de Tailwind:

| Breakpoint | Valor | Uso |
|------------|-------|-----|
| `sm` | 640px | Layout de formulario (grid 2 cols) |
| `md` | 768px | Grid de servicios (3 cols), botón CTA visible |
| `lg` | 1024px | Nav desktop visible, layout de dos columnas |

El menú hamburguesa se oculta en `lg:hidden`; la nav de escritorio en `hidden lg:flex`.
