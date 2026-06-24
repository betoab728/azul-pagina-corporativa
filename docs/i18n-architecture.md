# Arquitectura i18n — Azul Sostenible

Estrategia de internacionalización para soporte de tres idiomas: Español (default), Inglés y Portugués.

---

## Estado actual del proyecto

| Eje | Estado |
|-----|--------|
| Páginas | 21 archivos `.astro` en `/`, `/servicios/`, `/proyectos/` + 8 páginas de sección |
| Capa de datos | 18 archivos `src/data/*.ts` con todo el contenido como strings TypeScript |
| Texto inline | ~50 archivos de sección con texto español hardcodeado |
| Layout | `BaseLayout.astro` con `lang="es"` fijo, un solo set de meta tags, un JSON-LD |
| Navegación | `navigation.ts` con labels en español; script MobileMenu inline en `Header.astro` |
| Routing | Estructura plana sin prefijo de locale en ninguna URL |
| Islands | 1 island: script MobileMenu inline en `Header.astro` (ver DD-002) |

---

## 1. Motor de i18n

### Astro built-in i18n (cero dependencias externas)

Astro 4+ incluye un sistema de routing i18n nativo. No se necesita ninguna librería adicional.

```js
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      prefixDefaultLocale: false, // Español mantiene /acreditaciones (no /es/acreditaciones)
    },
    fallback: {
      en: 'es', // Fallback durante build EN antes de tener traducción completa
      pt: 'es', // Fallback durante build PT antes de tener traducción completa
    },
  },
})
```

**Por qué `prefixDefaultLocale: false`:**
- Las URLs españolas existentes no se rompen (sin redirects, sin daño SEO).
- El deployment español actual queda idéntico.
- El `hreflang` puede expresar `x-default` correctamente.

### Separación en capas

```
i18n separado en 3 capas:

┌─────────────────────────────────────────────────────┐
│  CAPA DE ROUTING                                    │
│  Astro i18n config + src/pages/en/ + src/pages/pt/  │
├─────────────────────────────────────────────────────┤
│  CAPA DE TRADUCCIÓN                                 │
│  src/i18n/ui.ts   (strings de UI)                   │
│  src/data/*.ts    (contenido rico, keyed por locale) │
├─────────────────────────────────────────────────────┤
│  CAPA DE COMPONENTES                                │
│  Astro.currentLocale + useTranslations(lang)        │
│  Sin cambios en la estructura de componentes        │
└─────────────────────────────────────────────────────┘
```

---

## 2. Estructura de archivos de traducción

### 2a. Strings de UI — `src/i18n/`

```
src/i18n/
├── ui.ts       # Diccionario completo de strings UI para los 3 locales
└── utils.ts    # Helper useTranslations() + tipo Locale
```

**`src/i18n/utils.ts`:**

```ts
import ui from './ui'

export type SupportedLocale = 'es' | 'en' | 'pt'
export const defaultLocale: SupportedLocale = 'es'
export const supportedLocales: SupportedLocale[] = ['es', 'en', 'pt']

export function getLang(locale: string | undefined): SupportedLocale {
  if (locale === 'en' || locale === 'pt') return locale
  return 'es'
}

export function useTranslations(lang: SupportedLocale) {
  return function t(key: keyof typeof ui['es']): string {
    return ui[lang][key] ?? ui['es'][key]
  }
}
```

**`src/i18n/ui.ts`** — diccionario plano clave/valor con los 3 locales:

```ts
const ui = {
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.accreditations': 'Acreditaciones',
    'nav.sectors': 'Sectores',
    'nav.projects': 'Proyectos',
    'nav.about': 'Nosotros',
    'nav.resources': 'Recursos',
    'nav.contact': 'Contacto',
    'nav.cta': 'Cotiza tu proyecto',

    // Hero
    'hero.badge': 'INGENIERÍA AMBIENTAL',
    'hero.cta.primary': 'Cotiza tu proyecto',
    'hero.cta.secondary': 'Diagnóstico ambiental gratuito',

    // Botones
    'btn.more': 'Más información',
    'btn.view_more': 'Ver más',
    'btn.quote': 'Cotiza tu proyecto',
    'btn.contact': 'Contáctanos',

    // Labels de sección
    'section.services': 'NUESTROS SERVICIOS',
    'section.about': '¿QUIÉNES SOMOS?',
    'section.impact': 'NUESTRO IMPACTO',
    'section.sectors': 'SECTORES QUE ATENDEMOS',
    'section.projects': 'PROYECTOS DESTACADOS',
    'section.testimonials': 'LO QUE DICEN NUESTROS CLIENTES',
    'section.quote': 'COTIZACIÓN RÁPIDA',

    // Formulario
    'form.name': 'Nombre completo',
    'form.email': 'Correo electrónico',
    'form.phone': 'Teléfono',
    'form.company': 'Empresa',
    'form.service': 'Servicio de interés',
    'form.submit': 'Enviar cotización',

    // Footer
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.support': 'Soporte',
    'footer.rights': 'Todos los derechos reservados',

    // Selector de idioma
    'lang.es': 'Español',
    'lang.en': 'English',
    'lang.pt': 'Português',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.accreditations': 'Accreditations',
    'nav.sectors': 'Sectors',
    'nav.projects': 'Projects',
    'nav.about': 'About Us',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a quote',

    'hero.badge': 'ENVIRONMENTAL ENGINEERING',
    'hero.cta.primary': 'Get a quote',
    'hero.cta.secondary': 'Free environmental diagnosis',

    'btn.more': 'Learn more',
    'btn.view_more': 'View more',
    'btn.quote': 'Get a quote',
    'btn.contact': 'Contact us',

    'section.services': 'OUR SERVICES',
    'section.about': 'WHO WE ARE',
    'section.impact': 'OUR IMPACT',
    'section.sectors': 'SECTORS WE SERVE',
    'section.projects': 'FEATURED PROJECTS',
    'section.testimonials': 'WHAT OUR CLIENTS SAY',
    'section.quote': 'QUICK QUOTE',

    'form.name': 'Full name',
    'form.email': 'Email address',
    'form.phone': 'Phone number',
    'form.company': 'Company',
    'form.service': 'Service of interest',
    'form.submit': 'Submit quote request',

    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.support': 'Support',
    'footer.rights': 'All rights reserved',

    'lang.es': 'Español',
    'lang.en': 'English',
    'lang.pt': 'Português',
  },
  pt: {
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.accreditations': 'Acreditações',
    'nav.sectors': 'Setores',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre nós',
    'nav.resources': 'Recursos',
    'nav.contact': 'Contato',
    'nav.cta': 'Solicitar cotação',

    'hero.badge': 'ENGENHARIA AMBIENTAL',
    'hero.cta.primary': 'Solicitar cotação',
    'hero.cta.secondary': 'Diagnóstico ambiental gratuito',

    'btn.more': 'Saiba mais',
    'btn.view_more': 'Ver mais',
    'btn.quote': 'Solicitar cotação',
    'btn.contact': 'Entre em contato',

    'section.services': 'NOSSOS SERVIÇOS',
    'section.about': 'QUEM SOMOS',
    'section.impact': 'NOSSO IMPACTO',
    'section.sectors': 'SETORES QUE ATENDEMOS',
    'section.projects': 'PROJETOS DESTACADOS',
    'section.testimonials': 'O QUE NOSSOS CLIENTES DIZEM',
    'section.quote': 'COTAÇÃO RÁPIDA',

    'form.name': 'Nome completo',
    'form.email': 'Endereço de e-mail',
    'form.phone': 'Telefone',
    'form.company': 'Empresa',
    'form.service': 'Serviço de interesse',
    'form.submit': 'Enviar cotação',

    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.support': 'Suporte',
    'footer.rights': 'Todos os direitos reservados',

    'lang.es': 'Español',
    'lang.en': 'English',
    'lang.pt': 'Português',
  },
} as const

export default ui
```

> **Nota de mantenimiento:** Mantener los 3 locales en un solo archivo permite detectar de inmediato si falta una clave en algún locale — una comparación visual evita omisiones antes de producción.

### 2b. Contenido rico — archivos `src/data/*.ts`

Los archivos de datos actualmente exportan arrays con strings en español. La migración los convierte a **objetos keyed por locale**:

```ts
// src/data/services.ts — DESPUÉS de la migración
import type { SupportedLocale } from '../i18n/utils'

export interface Service {
  icon: string
  iconColor: 'primary' | 'secondary'
  title: string
  description: string
  href: string
}

const servicesByLocale: Record<SupportedLocale, Service[]> = {
  es: [
    {
      icon: 'payments',
      iconColor: 'secondary',
      title: 'Tarifa plana ambiental',
      description: 'Solución integral con costos fijos mensuales...',
      href: '/servicios/tarifa-plana',
    },
    // ...
  ],
  en: [
    {
      icon: 'payments',
      iconColor: 'secondary',
      title: 'Environmental flat rate',
      description: 'Comprehensive solution with fixed monthly costs...',
      href: '/en/services/flat-rate',
    },
    // ...
  ],
  pt: [
    // ...
  ],
}

// Accessor principal
export const getServices = (locale: SupportedLocale): Service[] =>
  servicesByLocale[locale]

// Export de compatibilidad hacia atrás — eliminar después de migrar todas las secciones
export const services = servicesByLocale.es
```

El export `services` mantiene las importaciones existentes funcionando durante la migración. Se elimina en el paso de limpieza final.

---

## 3. Estrategia de routing

### Estructura de URLs

| Idioma | URL de ejemplo | Nota |
|--------|---------------|------|
| Español (default) | `/servicios/tarifa-plana` | URLs actuales — **sin cambios** |
| Inglés | `/en/services/flat-rate` | Slugs traducidos (recomendado) |
| Portugués | `/pt/servicos/tarifa-plana` | Slugs traducidos (recomendado) |

**Alternativa simplificada** (si se prioriza velocidad de entrega):

| Idioma | URL de ejemplo |
|--------|---------------|
| Inglés | `/en/servicios/tarifa-plana` |
| Portugués | `/pt/servicios/tarifa-plana` |

> **Recomendación:** Empezar con **mismos slugs** (solo prefijo de locale). Los slugs traducidos se añaden como segunda fase. Esto desacopla el trabajo de infraestructura i18n del trabajo de traducción de URLs.

### Estructura de directorios de páginas

```
src/pages/
├── index.astro                           # ES: /
├── acreditaciones.astro                  # ES: /acreditaciones
├── sectores.astro                        # ES: /sectores
├── proyectos.astro                       # ES: /proyectos
├── nosotros.astro                        # ES: /nosotros
├── recursos.astro                        # ES: /recursos
├── contacto.astro                        # ES: /contacto
├── servicios/
│   ├── tarifa-plana.astro                # ES: /servicios/tarifa-plana
│   ├── caracterizacion-de-residuos.astro
│   ├── reclasificacion-de-residuos.astro
│   ├── reduccion-del-opex.astro
│   ├── almacenes-inteligentes.astro
│   └── software-trazabilidad.astro
├── proyectos/
│   └── [project].astro (×8)             # ES: /proyectos/:slug
│
├── en/                                   # NUEVO — Subárbol inglés
│   ├── index.astro                       # EN: /en/
│   ├── accreditations.astro              # EN: /en/accreditations
│   ├── sectors.astro
│   ├── projects.astro
│   ├── about.astro
│   ├── resources.astro
│   ├── contact.astro
│   ├── services/
│   │   ├── flat-rate.astro
│   │   ├── waste-characterization.astro
│   │   ├── hazardous-waste-reclassification.astro
│   │   ├── opex-reduction.astro
│   │   ├── smart-warehouses.astro
│   │   └── traceability-software.astro
│   └── projects/
│       └── [project].astro
│
└── pt/                                   # NUEVO — Subárbol portugués
    ├── index.astro                       # PT: /pt/
    └── ... (espejo de en/)
```

**Total de archivos nuevos de página:** ~21 EN + ~21 PT = **42 wrappers delgados**.

Cada página de locale nueva es un wrapper delgado — no contiene markup propio. Importa los mismos componentes de sección y pasa el locale:

```astro
---
// src/pages/en/index.astro
import PageLayout from '../../layouts/PageLayout.astro'
import HeroSection from '../../sections/HeroSection.astro'
import AboutSection from '../../sections/AboutSection.astro'
// ... todas las secciones
const lang = 'en'
---
<PageLayout
  lang={lang}
  title="Azul Sostenible | Environmental Engineering"
  description="Comprehensive environmental solutions..."
  alternates={[
    { hreflang: 'es', href: 'https://azulsostenible.com/' },
    { hreflang: 'en', href: 'https://azulsostenible.com/en/' },
    { hreflang: 'pt', href: 'https://azulsostenible.com/pt/' },
    { hreflang: 'x-default', href: 'https://azulsostenible.com/' },
  ]}
>
  <HeroSection lang={lang} />
  <AboutSection lang={lang} />
  <!-- ... -->
</PageLayout>
```

---

## 4. Estrategia del selector de idioma

### Ubicación y comportamiento

El selector de idioma vive en `Header.astro`, como un dropdown compacto que mantiene la estética de navegación actual (CSS puro, sin JS extra):

```
Desktop nav:  [Inicio] [Servicios ▾] ... [Cotiza tu proyecto]  [ES | EN | PT]
Menú móvil:   ... mismos links ... / Idioma: [Español] [English] [Português]
```

### Implementación

`Header.astro` recibe el prop `lang` desde `PageLayout`. El switcher calcula las URLs alternas con el helper nativo de Astro:

```astro
---
// src/components/navigation/Header.astro
import { getRelativeLocaleUrl } from 'astro:i18n'

interface Props {
  lang: 'es' | 'en' | 'pt'
  currentPath: string
}
const { lang, currentPath } = Astro.props

// Elimina el prefijo de locale para obtener el path base:
// /en/accreditations → /accreditations
const basePath = currentPath
  .replace(/^\/(en|pt)\//, '/')
  .replace(/^\/(en|pt)$/, '/')

const esUrl = getRelativeLocaleUrl('es', basePath)
const enUrl = getRelativeLocaleUrl('en', basePath)
const ptUrl = getRelativeLocaleUrl('pt', basePath)
---
```

> Para routing con mismos slugs, `getRelativeLocaleUrl` lo maneja todo automáticamente. Para slugs traducidos se necesita una tabla `urlMap` pasada desde cada página.

---

## 5. Estrategia SEO

### Atributo `lang`

`BaseLayout.astro` actualmente tiene `<html lang="es">` hardcodeado. Pasa a ser dinámico:

```astro
---
interface Props {
  lang: 'es' | 'en' | 'pt'
  title: string
  description: string
  canonicalUrl?: string
  alternates?: { hreflang: string; href: string }[]
}
const { lang = 'es', title, description, alternates = [] } = Astro.props
---
<html lang={lang} class="scroll-smooth">
```

### Tags `hreflang`

Se añaden en el `<head>` de `BaseLayout.astro`. Cada página genera su propio array `alternates` y lo pasa a través de `PageLayout` → `BaseLayout`:

```html
<!-- Generado por BaseLayout para una página de servicio -->
<link rel="alternate" hreflang="es"        href="https://azulsostenible.com/servicios/tarifa-plana" />
<link rel="alternate" hreflang="en"        href="https://azulsostenible.com/en/services/flat-rate" />
<link rel="alternate" hreflang="pt"        href="https://azulsostenible.com/pt/servicos/tarifa-plana" />
<link rel="alternate" hreflang="x-default" href="https://azulsostenible.com/servicios/tarifa-plana" />
```

`x-default` siempre apunta a la URL en español (locale por defecto).

### URL canónica

Cada página de locale apunta a sí misma como canónica (no a la versión española). Esto es correcto — cada página de locale es su propia canónica.

### Meta title y description

Cada página de locale pasa `title` y `description` traducidos a `PageLayout`:

```astro
<!-- src/pages/en/index.astro -->
<PageLayout
  lang="en"
  title="Azul Sostenible | Environmental Engineering & Management"
  description="Comprehensive environmental solutions for industrial, mining, and agricultural sectors in Peru."
  alternates={[...]}
>
```

### JSON-LD (Schema.org LocalBusiness)

El JSON-LD de `LocalBusiness` existente en `BaseLayout` se mantiene en español. Google no penaliza esto — el schema describe la entidad legal, no el idioma del visitante.

### Sitemap

Configurar `@astrojs/sitemap` para incluir todos los locales:

```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://azulsostenible.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-PE',
          en: 'en-US',
          pt: 'pt-BR',
        },
      },
    }),
  ],
})
```

Esto genera un sitemap con entradas `<xhtml:link rel="alternate" hreflang>` para cada página en cada locale.

---

## 6. Análisis de impacto

### Archivos que requieren modificación

| Archivo | Cambio requerido | Esfuerzo |
|---------|-----------------|---------|
| `astro.config.mjs` | Añadir bloque `i18n`, actualizar sitemap | Bajo |
| `src/layouts/BaseLayout.astro` | `lang` dinámico, tags `hreflang`, prop `alternates` | Medio |
| `src/layouts/PageLayout.astro` | Reenviar props `lang` + `alternates` a `BaseLayout`; pasar `lang` a `Header` | Bajo |
| `src/components/navigation/Header.astro` | Prop `lang`, UI del selector de idioma, calcular URLs alternas | Medio |
| `src/components/Footer.astro` | Prop `lang`, traducir labels de links | Bajo |
| Los 18 archivos `src/data/*.ts` | Convertir exports a objetos keyed por locale + accessor `getX(locale)` | **Alto** (trabajo de contenido) |
| Los ~50 archivos `src/sections/*.astro` | Prop `lang`, reemplazar texto inline con `t()`, llamar `getX(lang)` | **Alto** |
| Los 21 archivos `src/pages/*.astro` | Pasar `lang="es"` a `PageLayout` + array `alternates` | Medio |

### Archivos nuevos a crear

| Archivo | Propósito |
|---------|-----------|
| `src/i18n/ui.ts` | Diccionario completo de strings UI para ES/EN/PT |
| `src/i18n/utils.ts` | `useTranslations()`, `getLang()`, tipos |
| `src/pages/en/index.astro` | Home EN |
| `src/pages/en/accreditations.astro` | Acreditaciones EN |
| `src/pages/en/sectors.astro` | Sectores EN |
| `src/pages/en/projects.astro` | Proyectos EN |
| `src/pages/en/about.astro` | Nosotros EN |
| `src/pages/en/resources.astro` | Recursos EN |
| `src/pages/en/contact.astro` | Contacto EN |
| `src/pages/en/services/*.astro` ×6 | Páginas de servicio EN |
| `src/pages/en/projects/[project].astro` | Detalle de proyecto EN |
| `src/pages/pt/**` (espejo de en/) ×~21 | Páginas PT |
| *(Total: ~45 archivos nuevos, todos wrappers delgados)* | |

---

## 7. Plan de migración paso a paso

### Fase 0 — Preparación (sin código)

1. Auditar todo el texto español inline en los archivos de sección — catalogar cada string en una planilla.
2. Producir las traducciones al inglés y portugués para:
   - Todo el contenido de `src/data/*.ts`
   - Todos los strings de UI (nav, botones, labels, formulario, footer)
   - Todos los `<title>` y `<meta description>` de cada página
3. Decidir: **mismos slugs** o **slugs traducidos** (recomendado: mismos slugs para Fase 1, slugs traducidos como Fase 2).
4. Confirmar la estructura de dominio final (`azulsostenible.com/en/...`).
5. Registrar la decisión en `docs/decisions.md` como DD-021.

### Fase 1 — Infraestructura i18n (sin cambio visible para el usuario)

1. Añadir config `i18n` a `astro.config.mjs`.
2. Crear `src/i18n/utils.ts` con tipos y `useTranslations`.
3. Crear `src/i18n/ui.ts` con solo el locale ES populado (EN/PT como objetos vacíos — el `fallback` cubre los gaps).
4. Añadir prop `lang` a `BaseLayout.astro` — mantener `lang="es"` como default.
5. Encadenar prop `lang`: `PageLayout` → `Header`, `Footer`.
6. Todas las páginas españolas existentes pasan `lang="es"` explícitamente.
7. **Validar:** Build exitoso, sin cambio visible en el sitio español.

### Fase 2 — Migración de la capa de datos

1. Para cada archivo `src/data/*.ts`:
   - Envolver el array existente en `{ es: [...arrayExistente] }`
   - Añadir stubs vacíos `en: []` y `pt: []` (el fallback sirve ES durante el desarrollo)
   - Añadir función accessor `getX(locale)`
   - Mantener el export nombrado antiguo (`export const services = servicesByLocale.es`) para compatibilidad
2. Actualizar todos los archivos de sección para llamar `getServices(lang)` en lugar de `services` directamente.
3. **Validar:** Sitio español sin cambios. Contenido EN/PT hace fallback a ES.

### Fase 3 — Extracción de strings de UI

1. Recorrer sección por sección. Para cada string español inline en los templates `.astro`:
   - Añadir la clave a `ui.ts` bajo `es`
   - Reemplazar el string inline con `{t('clave.nombre')}`
2. Añadir prop `lang` a cada componente de sección.
3. Al inicio de cada sección: `const t = useTranslations(lang)`.
4. **Validar:** Sitio español visualmente idéntico. Confirmar que no quedó ningún string sin extraer.

### Fase 4 — Traducción al inglés

1. Poblar `ui.ts` → `en: { ... }` con todos los strings de UI en inglés.
2. Poblar `servicesByLocale.en`, `sectorsByLocale.en`, etc. en los archivos de datos.
3. Crear directorio `src/pages/en/` con todos los archivos wrapper de página.
4. Añadir arrays `alternates` a todas las páginas (ES y EN).
5. Renderizar `hreflang` en `BaseLayout.astro`.
6. Añadir UI del selector de idioma a `Header.astro`.
7. Actualizar config de `@astrojs/sitemap`.
8. **Validar:** Páginas `/en/` renderizan correctamente en inglés. Sitemap incluye ambos locales. Tags `hreflang` presentes en el HTML. El selector de idioma navega correctamente.

### Fase 5 — Traducción al portugués

1. Repetir Fase 4 para `pt`.
2. Crear directorio `src/pages/pt/`.
3. Poblar `ui.ts` → `pt: { ... }` y todos los archivos de datos con entradas `pt`.
4. **Validar:** Sitio completo con tres idiomas funcionando.

### Fase 6 — Auditoría SEO

1. Verificar que cada página tiene `<html lang>`, `<title>`, `<meta description>` correctos.
2. Verificar que los links alternos `hreflang` son consistentes y bidireccionales en cada página.
3. Verificar que `x-default` siempre apunta al español.
4. Enviar sitemap actualizado a Google Search Console.
5. Ejecutar Lighthouse en páginas representativas de cada locale.

---

## 8. Evaluación de complejidad y riesgos

### Complejidad: **Media-Alta**

| Dimensión | Evaluación |
|-----------|-----------|
| Infraestructura (config Astro, i18n utils) | Baja — bien documentado, battle-tested |
| Migración de archivos de datos | Media — mecánica pero cubre 18 archivos |
| Extracción de texto en secciones | **Alta** — ~50 archivos, fácil perder strings |
| Contenido de traducción (EN + PT) | **Alta** — es el trabajo real; puramente humano |
| Wrappers de páginas de locale | Baja — 42 archivos delgados, mayormente copy-paste |
| Plomería SEO (hreflang, sitemap) | Media — debe ser correcta o hay penalización |

### Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Strings sin traducir que permanecen en páginas EN/PT | Alta (durante desarrollo) | Media | El config `fallback` muestra ES como red de seguridad; una pasada de lint antes del lanzamiento |
| Mismatch de `hreflang` (inconsistente entre páginas) | Media | Alta (penalización SEO) | Generar alternates programáticamente desde un mapa de URLs central, no manualmente por página |
| Script MobileMenu pierde contexto de `lang` | Baja | Baja | El script es solo CSS-toggle (DD-002); no hay contenido traducible dentro |
| Clases dinámicas de Tailwind se rompen con strings de locale | Baja | Media | Ya resuelto por los lookup objects de DD-006; los strings traducidos no cambian los nombres de clase de Tailwind |
| Los `href` en bloques de locale necesitan prefijo de locale | Media | Media | Añadir helper `getPath(locale, path)` que antepone `/en/` o `/pt/` según corresponda |
| Textos `alt` de imágenes son traducibles pero están hardcodeados | Media | Media | Añadir `alt` al diccionario de traducción; auditar llamadas `<Image alt="...">` en archivos de sección |

---

## 9. Recomendaciones antes de implementar

**1. Decidir sobre traducción de slugs antes de escribir una sola línea de código.**
Es la decisión arquitectónica de mayor impacto. Mismos slugs (`/en/servicios/tarifa-plana`) son rápidos de implementar. Slugs traducidos (`/en/services/flat-rate`) son mejores para SEO pero requieren una tabla de mapeo de URLs que cada página, tag hreflang y selector de idioma debe referenciar. Documentar la decisión como DD-021.

**2. El contenido de traducción es el verdadero camino crítico.**
Todo el trabajo de código de las Fases 1–3 toma ~8–12 horas. Las traducciones reales al EN y PT de 18 archivos de datos + todos los strings de UI es el trabajo de mayor lead time. Iniciarlo en paralelo o antes del trabajo de código, no después.

**3. Usar `Astro.currentLocale` (no props) donde sea posible.**
Astro 4+ expone `Astro.currentLocale` automáticamente en todos los archivos `.astro` cuando i18n está configurado. Las secciones pueden leer el locale sin la cadena de props, reduciendo boilerplate. Reservar props `lang` solo para componentes que necesitan control explícito.

**4. No crear un island de traducción.**
Todo el contenido es estático y conocido en build time. No hay necesidad de carga de traducciones del lado del cliente (i18next, react-intl, etc.). El i18n de Astro en build time es la herramienta correcta y preserva la garantía de cero JS.

**5. Auditar `src/data/navigation.ts` con cuidado.**
Los labels de navegación son los strings de UI más visibles. Los valores `href` en la nav también contienen rutas internas que cambian por locale (ej: `#inicio` se mantiene, pero `/servicios/tarifa-plana` se convierte en `/en/services/flat-rate` en EN). La función `getNavigation(locale)` debe manejar tanto anchor links (language-agnostic) como links de página completa (con prefijo de locale).

**6. Verificar con Lighthouse antes de deployar cada locale.**
La implementación de `hreflang` es invisible para los usuarios pero crítica para SEO. Usar Google Rich Results Test y un verificador de hreflang para confirmar la correctitud antes de publicar las páginas EN y PT. Un `hreflang` incorrecto en una página que pasa desapercibido en QA puede confundir el indexado de Google para todas las páginas que lo referencian.

---

## Resumen de números clave

| Métrica | Valor |
|---------|-------|
| Archivos nuevos | ~45 (wrappers delgados de páginas de locale) |
| Archivos de datos a convertir | 18 |
| Archivos de sección a actualizar | ~50 |
| Archivos fuente nuevos de i18n | 2 (`ui.ts`, `utils.ts`) |
| Dependencias externas nuevas | 0 (Astro i18n es built-in desde v4) |
| Cambio en URLs españolas existentes | Ninguno |
| Cambio en design system / tokens | Ninguno |
| Cambio en interfaces de props de componentes | Solo añadir prop `lang` |
