# Decisiones de implementación — Azul Sostenible

Registro de decisiones relevantes tomadas durante la implementación de la Home v1.

---

## DD-001 — QuoteForm sin backend (2026-06-06)

**Contexto:** La sección de cotización requiere un backend para enviar los datos del formulario.

**Decisión:** El formulario se implementa como UI completa (HTML + validación nativa) pero sin `action` definida. El botón Submit no procesará datos.

**Razón:** El backend no está definido en esta fase. El usuario confirmó que se implementará en una fase posterior.

**Pendiente:** Definir proveedor (Formspree, Web3Forms, o API Route de Astro) y conectar `action`.

---

## DD-002 — MobileMenu inline en Header.astro (2026-06-06)

**Contexto:** La arquitectura propuesta separaba MobileMenu como componente `client:load`.

**Decisión:** El menú móvil se incluye directamente en `Header.astro` con un `<script>` inline.

**Razón:** El script es mínimo (~30 líneas), no comparte estado con otros componentes y no justifica un componente separado. Astro deduplica y bundlea los scripts automáticamente. Simplifica la arquitectura sin pérdida de funcionalidad.

---

## DD-003 — TestimonialsSection separada del QuoteSection (2026-06-06)

**Contexto:** En el diseño Stitch, los testimonios están dentro del `<section id="cotizacion">`.

**Decisión:** Se crea `TestimonialsSection.astro` como componente independiente con `bg-white` y `pt-16 pb-24` para mantener continuidad visual.

**Razón:** La separación es más limpia desde el punto de vista de la arquitectura de componentes. El resultado visual es idéntico porque ambas secciones tienen fondo blanco.

---

## DD-004 — Imágenes con URLs de Stitch como placeholders (2026-06-06)

**Contexto:** El prototipo Stitch usa URLs de Google Cloud Storage para todas las imágenes.

**Decisión:** Se usan las mismas URLs temporalmente en el código. Se añadieron comentarios `// TODO: Reemplazar con imagen real` en cada archivo que las usa.

**Razón:** El cliente no ha entregado imágenes reales aún. Las URLs de Stitch permiten verificar la composición visual. Se reemplazarán con `<Image>` de Astro cuando se dispongan los assets locales.

**Afecta:** `HeroSection.astro`, `AboutSection.astro`, `QuoteSection.astro`, `projects.ts`, `testimonials.ts`, `partners.ts`, `Header.astro`, `Footer.astro`.

---

## DD-005 — Dropdown de navegación con CSS puro (2026-06-06)

**Contexto:** El prototipo Stitch usaba CSS transitions en el dropdown sin JavaScript.

**Decisión:** Se mantiene la implementación CSS-only usando `.group:hover .dropdown-menu` definida en `global.css`.

**Razón:** Elimina la necesidad de un island de Astro, reduce el JS enviado al cliente y es accesible vía teclado en la mayoría de navegadores modernos.

**Limitación:** En móvil no aplica (`hidden lg:flex`). La navegación móvil usa el menú lateral con JavaScript.

---

## DD-006 — Clases de color con lookup objects en componentes (2026-06-06)

**Contexto:** Los componentes reciben props `iconColor: 'primary' | 'secondary'` y necesitan aplicar clases de Tailwind dinámicamente.

**Decisión:** Se usan lookup objects con strings de clases completas:
```astro
const iconBg = iconColor === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
```

**Razón:** Tailwind v4 escanea el código fuente buscando strings completas. Las clases construidas con interpolación (e.g., `bg-${iconColor}/10`) no son detectadas por el scanner y no se incluyen en el CSS final.

---

## DD-007 — `py-section-padding` con token Tailwind v4 (2026-06-06)

**Contexto:** El diseño Stitch usa `py-section-padding: 120px` y `px-margin-desktop: 80px` como tokens de espaciado.

**Decisión:** Se definen en `global.css` con `@theme { --spacing-section-padding: 120px; --spacing-margin-desktop: 80px; }`.

**Razón:** Tailwind v4 mapea automáticamente `--spacing-{name}` a utilidades `py-{name}`, `px-{name}`, etc. No se requiere archivo `tailwind.config.js`.

---

## DD-008 — JSON-LD en BaseLayout (2026-06-06)

**Contexto:** Se requiere Schema.org para SEO local.

**Decisión:** Se incluye un `<script type="application/ld+json">` con datos `LocalBusiness` en `BaseLayout.astro`.

**Pendiente:** Actualizar con datos reales: URL del sitio, teléfono, dirección física, redes sociales. Actualmente usa valores placeholder.

---

## DD-009 — Página de servicio: Caracterización de Residuos Sólidos (2026-06-06)

**Contexto:** Se requiere una página dedicada para el servicio "Caracterización de Residuos Sólidos", accesible desde el dropdown de Servicios en la navegación.

**Decisión:** Se crea la ruta `/servicios/caracterizacion-de-residuos` con su propio `index.astro` que compone 6 secciones específicas. Las secciones se nombran con el prefijo `Caracterizacion` para evitar colisiones con las secciones de la Home (`CaracterizacionHeroSection`, `CaracterizacionProcesoSection`, etc.).

**Razón:** Cada servicio del menú tendrá su propia página siguiendo este patrón. Las secciones son específicas del servicio y no se reutilizan en la Home, por lo que se crean como componentes independientes en `src/sections/`. La página reutiliza `PageLayout` (Header + Footer) sin modificaciones.

**Patrón establecido para futuras páginas de servicio:**
1. Crear `src/data/{servicio}.ts` con datos tipados.
2. Crear secciones en `src/sections/` con prefijo descriptivo (ej: `CaracterizacionXxxSection`).
3. Crear página en `src/pages/servicios/{servicio-slug}.astro` usando `PageLayout`.
4. Actualizar link en `src/data/navigation.ts`.

**Componentes reutilizados:** `PageLayout` (con Header y Footer). No se crearon nuevos componentes reutilizables — las tarjetas del "¿Qué incluye?" se implementaron inline en la sección por ser específicas de esta página.

---

## DD-010 — Página de servicio: Tarifa Plana Ambiental (2026-06-06)

**Contexto:** Se requiere una página dedicada para el servicio "Tarifa Plana Ambiental", accesible desde el dropdown de Servicios.

**Decisión:** Se crea la ruta `/servicios/tarifa-plana` con 7 secciones específicas, siguiendo el mismo patrón establecido en DD-009. Las secciones se nombran con el prefijo `TarifaPlana` (`TarifaPlanaHeroSection`, `TarifaPlanaDefinicionSection`, etc.).

**Razón:** Consistencia con el patrón de DD-009. La página reutiliza `PageLayout` sin modificaciones. Los 3 pilares, 5 beneficios y 6 ítems del alcance se implementan inline en sus respectivas secciones por no ser reutilizables fuera de esta página.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-011 — Página de servicio: Reclasificación de Residuos Peligrosos (2026-06-06)

**Contexto:** Se requiere una página dedicada para el servicio "Reclasificación de Residuos Peligrosos", accesible desde el dropdown de Servicios.

**Decisión:** Se crea la ruta `/servicios/reclasificacion-de-residuos` con 6 secciones específicas, siguiendo el mismo patrón establecido en DD-009 y DD-010. Las secciones se nombran con el prefijo `Reclasificacion`.

**Razón:** Consistencia con el patrón de páginas de servicio. El diseño incluye una sección de "Casos de Éxito" con fondo tertiary que es única de esta página — no se extrae como componente reutilizable porque su estructura (listado de resoluciones PDF) es específica.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-012 — Página de servicio: Reducción del OPEX (2026-06-06)

**Contexto:** Se requiere una página dedicada para el servicio "Reducción del OPEX", accesible desde el dropdown de Servicios.

**Decisión:** Se crea la ruta `/servicios/reduccion-del-opex` con 6 secciones específicas, siguiendo el mismo patrón establecido en DD-009/010/011. Las secciones se nombran con el prefijo `ReduccionOpex`.

**Razón:** Consistencia con el patrón de páginas de servicio. La sección de "Entregables" con tarjetas numeradas (01-06) y la sección de "Metodología" con 8 ítems son específicas y no se extraen como componentes reutilizables.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-013 — Página de servicio: Almacenes Inteligentes (2026-06-06)

**Contexto:** Se requiere una página dedicada para el servicio "Almacenes Inteligentes", accesible desde el dropdown de Servicios.

**Decisión:** Se crea la ruta `/servicios/almacenes-inteligentes` con 6 secciones específicas, siguiendo el mismo patrón DD-009/010/011/012. Las secciones se nombran con el prefijo `Almacenes`.

**Razón:** Consistencia con el patrón. La sección de "Soluciones" usa un bento grid (card grande col-span-2 con imagen + card dark primary + 3 cards simples) que es específica de esta página.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-014 — Página: Acreditaciones (2026-06-06)

**Contexto:** Se requiere una página dedicada para "Acreditaciones", accesible desde la navegación principal (no desde el dropdown de Servicios).

**Decisión:** Se crea la ruta `/acreditaciones` con 6 secciones específicas. Las secciones se nombran con el prefijo `Acreditaciones`.

**Razón:** "Acreditaciones" es un ítem de navegación principal. La página se coloca en `src/pages/acreditaciones.astro` (ruta directa, no bajo `/servicios/`). Incluye 6 cards de compliance, sección de operaciones autorizadas, 3 cards de logística y 3 rows de homologaciones.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-015 — Página: Sectores (2026-06-06)

**Contexto:** Se requiere una página dedicada para "Sectores", accesible desde la navegación principal.

**Decisión:** Se crea la ruta `/sectores` con 4 secciones específicas. Las secciones se nombran con el prefijo `Sectores`. El bento grid de sectores (12-col con 4 tarjetas: Industrial col-span-8, Salud col-span-4, Minero col-span-4, Agroindustrial col-span-8) se implementa inline en `SectoresBentoSection.astro`.

**Razón:** "Sectores" es un ítem de navegación principal. Las 4 tarjetas del bento grid tienen variantes visuales distintas (blanco, primary, tertiary, gris+imagen) que son específicas de esta página y no se extraen como componentes reutilizables.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-016 — Página: Proyectos (2026-06-06)

**Contexto:** Se requiere una página dedicada para "Proyectos" con casos de éxito, accesible desde la navegación principal.

**Decisión:** Se crea la ruta `/proyectos` con 4 secciones. Los datos se almacenan en `src/data/proyectos-page.ts` (separado de `projects.ts` que usa la Home). Incluye 6 cards de proyectos mineros con badge de sector, checklist y banner "También confiaron en nosotros".

**Razón:** "Proyectos" es un ítem de navegación principal. Los proyectos de esta página son diferentes a los 3 de la Home. El hero usa un gradiente 135deg primary→secondary específico que no reutiliza la clase `.hero-gradient` global.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-017 — Página: Nosotros (2026-06-06)

**Contexto:** Se requiere una página dedicada para "Nosotros", accesible desde la navegación principal.

**Decisión:** Se crea la ruta `/nosotros` con 8 secciones más un banner de WhatsApp. Es la página más extensa del sitio. Incluye hero centrado, about 2-column, servicios, compliance, sectores, misión/visión/valores, FAQ con `<details>` nativo, y CTA final.

**Razón:** "Nosotros" es un ítem de navegación principal. Las 8 secciones cubren la narrativa completa de la empresa. El FAQ usa el elemento HTML `<details>` nativo sin JavaScript. El banner de WhatsApp se incluye inline en la página.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-018 — Página: Recursos (2026-06-06)

**Contexto:** Se requiere una página dedicada para "Recursos", accesible desde la navegación principal.

**Decisión:** Se crea la ruta `/recursos` con 5 secciones. Incluye hero con gradiente claro 135deg, bento grid de guías normativas + calculadoras, blog con 3 artículos, calendario de capacitaciones con 3 eventos, y newsletter CTA con formulario.

**Razón:** "Recursos" es el último ítem de navegación principal pendiente. El hero usa un gradiente claro (surface→primary-fixed) diferente a todos los demás. El blog y el calendario son específicos de esta página.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-019 — Página: Contacto (2026-06-06)

**Contexto:** Se requiere una página dedicada para "Contacto", accesible desde la navegación principal.

**Decisión:** Se crea la ruta `/contacto` con 3 secciones: hero con gradiente claro + SVG decorativo, formulario de contacto 12-col (7 form + 5 info) con datos de sede/WhatsApp/imagen regional, y CTA banner. El formulario es UI-only sin backend (consistente con DD-001).

**Razón:** "Contacto" es el último ítem de navegación. La página centraliza todos los canales de contacto (formulario, WhatsApp, dirección, horarios) en un solo lugar.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-020 — Página de servicio: Software de Trazabilidad (2026-06-09)

**Contexto:** Se requiere una página dedicada para el servicio "Software de Trazabilidad", accesible desde el dropdown de Servicios en la navegación.

**Decisión:** Se crea la ruta `/servicios/software-trazabilidad` con 5 secciones específicas, siguiendo el mismo patrón establecido en DD-009/010/011/012/013. Las secciones se nombran con el prefijo `SoftwareTrazabilidad`.

**Razón:** Consistencia con el patrón de páginas de servicio. Incluye hero con gradiente primary, value strip, sección "¿En qué consiste?" con 4 fases (Generación, Almacenamiento, Transporte, Valorización), bento grid "¿Qué gana tu empresa?" con 5 beneficios de distintas variantes (white, dark, white-box, green-box), y CTA de cierre con botones duales.

**Componentes reutilizados:** `PageLayout`. Sin nuevos componentes reutilizables.

---

## DD-021 — Infraestructura i18n: Fase 1 (2026-06-24)

**Contexto:** El sitio debe soportar tres idiomas (ES, EN, PT). Se implementa la Fase 1 del plan de migración i18n: solo la capa de infraestructura, sin traducir contenido ni crear páginas EN/PT.

**Decisión:** Se establece la infraestructura completa con los siguientes componentes:

1. **Motor i18n:** Se usa el sistema de routing i18n nativo de Astro 6 (`i18n` en `astro.config.mjs`). Cero dependencias externas.
2. **`prefixDefaultLocale: false`:** Las URLs españolas existentes no se modifican (`/acreditaciones`, no `/es/acreditaciones`). El sitio español es totalmente backward-compatible.
3. **`site`:** Se añade `site: 'https://azulsostenible.pe'` al config para que los helpers `getAbsoluteLocaleUrl()` y el sitemap futuro funcionen con la URL correcta.
4. **Sin `fallback` en Fase 1:** El config `fallback` se omite porque no existen páginas EN/PT aún. Se añadirá en Fase 4 cuando se creen esas páginas.
5. **`src/i18n/utils.ts`:** Exporta `SupportedLocale`, `TranslationKey`, `defaultLocale`, `supportedLocales`, `getLang()`, `useTranslations()`, `ogLocaleMap`, `AlternateLink`.
6. **`src/i18n/ui.ts`:** Diccionario completo con los 3 locales populados desde el inicio (no solo ES). Se decidió poblar EN y PT ahora porque los strings ya estaban definidos en la arquitectura aprobada y añadirlos después sería un paso adicional innecesario.
7. **`BaseLayout.astro`:** Acepta `lang?: SupportedLocale` (default `'es'`) y `alternates?: AlternateLink[]` (default `[]`). El `<html lang>` y `og:locale` son ahora dinámicos. Los hreflang se renderizan solo si `alternates` tiene items. Las páginas existentes no se modifican — el default `'es'` garantiza comportamiento idéntico.
8. **`PageLayout.astro`:** Acepta y reenvía `lang` y `alternates` a `BaseLayout` vía el spread `{...props}` existente. Solo se añaden las declaraciones de tipo; sin cambio de comportamiento.

**Razón:** La Fase 1 establece la base técnica sin cambios visibles. El sitio español funciona idéntico. Las páginas EN/PT podrán crearse en Fase 4 simplemente pasando `lang="en"` o `lang="pt"` a `PageLayout` y un array `alternates`.

**Decisión sobre slugs:** Se implementará con mismos slugs en Fase 4 (prefijo de locale únicamente: `/en/servicios/tarifa-plana`). Slugs traducidos (`/en/services/flat-rate`) se evalúan como tarea posterior si el cliente lo requiere.

**Archivos creados:** `src/i18n/utils.ts`, `src/i18n/ui.ts`
**Archivos modificados:** `astro.config.mjs`, `src/layouts/BaseLayout.astro`, `src/layouts/PageLayout.astro`

---

## DD-022 — Capa de datos i18n: Fase 2 (2026-06-24)

**Contexto:** Con la infraestructura i18n de Fase 1 lista, se migra la capa de datos (`src/data/*.ts`) al patrón locale-keyed para preparar las traducciones de contenido sin romper las secciones existentes.

**Decisión:** Los 19 archivos de datos se convierten al patrón `Record<SupportedLocale, T[]>` con los siguientes principios:

1. **Patrón para arrays:** `const xByLocale: Record<SupportedLocale, X[]>` con `es: [datos existentes]`, `en: []`, `pt: []`. Accessor `getX(locale)` con fallback a ES si el locale solicitado está vacío.
2. **Patrón para objetos singulares** (`procesoItemDestacado` en `caracterizacion.ts`): `Record<SupportedLocale, X | null>` con `es: objeto`, `en: null`, `pt: null`. Accessor `getX(locale)` con `?? .es!`.
3. **Backward-compat exports:** Cada archivo mantiene los exports nombrados originales apuntando a `xByLocale.es`. Las secciones no se tocan en esta fase — seguirán importando `import { x } from '...'` sin cambios.
4. **Colisión de nombres en `sectores.ts`:** El accessor se renombra `getSectoresImpactStats()` para evitar conflicto con el `impactStats` de `impact.ts` cuando ambos se importen juntos en Fase 3.
5. **Sin modificar secciones:** Las ~50 secciones se actualizarán en Fase 3 en un único paso coherente (añadir prop `lang`, usar `getX(lang)` en lugar del export compat, extraer strings con `t()`).

**Razón:** Separar la migración de datos de la migración de secciones reduce el riesgo de regresiones. Si Phase 3 introduce un bug, es localizable a las secciones sin involucrar los datos. El patrón de exports compat garantiza zero cambios de comportamiento hasta Fase 3.

**Archivos modificados (19):**
`services.ts`, `sectors.ts`, `testimonials.ts`, `impact.ts`, `partners.ts`, `contacto.ts`, `navigation.ts`, `projects.ts`, `sectores.ts`, `acreditaciones.ts`, `nosotros.ts`, `recursos.ts`, `caracterizacion.ts`, `tarifa-plana.ts`, `reduccion-opex.ts`, `reclasificacion.ts`, `almacenes-inteligentes.ts`, `software-trazabilidad.ts`, `proyectos-page.ts`

**Validación:** `npm run build` → 21 páginas, 0 errores nuevos.

---

## DD-023 — Cableado i18n Fase 3: lang prop en secciones y páginas (2026-06-24)

**Contexto:** Con la capa de datos locale-keyed lista (Fase 2), se conecta el flujo de `lang` desde las páginas hasta cada sección para que el contenido respete el locale del visitante.

**Decisión:**

1. **Scaffold de secciones (120 archivos):** Todas las secciones reciben `interface Props { lang?: SupportedLocale }` + `const { lang = 'es' } = Astro.props`. Para las 54 que no tenían frontmatter, se añadió un bloque `---` completo.
2. **Migración de secciones data-backed (42 archivos):** Se reemplaza el import compat (`import { x }`) por el accessor (`import { getX }`), y se añade `const x = getX(lang)` inmediatamente después de la declaración de `lang`. El orden correcto (imports → interface → lang → accessor calls → cómputos derivados) se verificó caso a caso; única excepción: `ImpactSection` que tenía `const parsedStats = impactStats.map(...)` antes de la declaración — se reordenó manualmente.
3. **Páginas (21 archivos):** Se añade `import { getLang } from '../i18n/utils'` (o `../../` para subpáginas), `const lang = getLang(Astro.currentLocale)`, `lang={lang}` en `<PageLayout>`, y `lang={lang}` en todas las llamadas a secciones.
4. **Scaffolding de infraestructura** (previo a este DD): `ui.ts` recibió la clave `btn.open_pdf`; `PageLayout.astro`, `Header.astro` y `Footer.astro` ya tenían el patrón correcto desde sesión anterior.

**Razón:** Separar las tres capas (datos, secciones, páginas) facilita detectar en qué capa ocurre un bug de locale. El patrón `getLang(Astro.currentLocale)` en la capa de páginas garantiza que si Astro no puede determinar el locale (ruta sin prefijo), se usa 'es' por defecto.

**Archivos modificados:**
- 120 secciones en `src/sections/`
- 21 páginas en `src/pages/`

**Validación:** `npm run build` → 21 páginas, 0 errores.

---

## DD-024 — Rutas i18n Fases 4 y 5: páginas /en/* y /pt/* (2026-06-24)

**Contexto:** Con el flujo de `lang` completo (Fase 3), se crean las rutas estáticas para inglés y portugués bajo `/en/` y `/pt/` respectivamente.

**Decisión:**

1. **Espejado de páginas:** Cada una de las 21 páginas españolas tiene un mirror en `src/pages/en/` y `src/pages/pt/`, totalizando 63 páginas. Los mirrors son copias con:
   - Rutas de import ajustadas (un nivel extra de `../` por cada subdirectorio adicional)
   - `title` y `description` de `<PageLayout>` traducidos al inglés / portugués
2. **Profundidades de import:** La transformación `from '../` → `from '../../` funciona universalmente: aplica en cadena para páginas top-level (1 nivel) y para páginas anidadas (2 niveles), produciendo los prefijos correctos `../../` y `../../../` respectivamente.
3. **Contenido con fallback:** Las páginas `/en/*` y `/pt/*` muestran contenido en español por ahora (los arrays `en: [], pt: []` en los datos caen back a ES). Las traducciones de contenido se añadirán gradualmente llenando esos arrays — las rutas y el flujo de `lang` ya están listos.
4. **`getLang(Astro.currentLocale)`:** Astro inyecta el locale correcto ('en' / 'pt') para páginas bajo `/en/` y `/pt/`, por lo que los mirrors no necesitan hardcodear el lang — el mecanismo de Fase 3 funciona automáticamente.

**Archivos creados:**
- 21 páginas en `src/pages/en/` (top-level + proyectos/* + servicios/*)
- 21 páginas en `src/pages/pt/` (ídem)

**Validación:** `npm run build` → 63 páginas, 0 errores.

---

## DD-025 — SEO i18n Fase 6: hreflang alternates en las 63 páginas (2026-06-24)

**Contexto:** Con 63 páginas construidas (21 ES + 21 EN + 21 PT), los motores de búsqueda necesitan señales hreflang para entender las relaciones lingüísticas entre ellas y evitar contenido duplicado.

**Decisión:**

1. **`getAlternates(basePath)` en `utils.ts`:** Función que recibe el path base de la página (sin prefijo de locale) y devuelve los 4 `AlternateLink` necesarios: `x-default` (apunta a ES), `es`, `en`, `pt`. Usa la constante `_siteUrl = 'https://azulsostenible.pe'`.
2. **`getBasePath(pathname)` en `utils.ts`:** Función que extrae el path base desde `Astro.url.pathname` eliminando los prefijos `/en` y `/pt` con regex. `/en/nosotros` → `/nosotros`, `/pt/` → `/`, `/nosotros` → `/nosotros`.
3. **Todas las 63 páginas actualizadas:** Se añade `import { getAlternates, getBasePath }`, `const alternates = getAlternates(getBasePath(Astro.url.pathname))`, y `alternates={alternates}` en `<PageLayout>`. La inyección se hace entre `lang={lang}` y `title=...` para mantener el orden semántico.
4. **`BaseLayout` ya renderizaba hreflang:** El layout ya tenía el mapeo `{alternates.map(...)}` desde Fase 1; solo faltaba que las páginas pasaran el valor. Cero cambios en layouts.
5. **`x-default` apunta a ES:** Convención estándar — la URL sin prefijo de locale es la canónica por defecto.

**Razón:** Hreflang es imprescindible para el SEO multilingüe. Sin estos tags, Google indexa las 3 versiones como contenido duplicado y puede desindexar las versiones EN/PT. La función `getBasePath` garantiza que las páginas en `/en/*` y `/pt/*` calculen el mismo path base que sus equivalentes españolas, generando links cruzados consistentes.

**Archivos modificados:**
- `src/i18n/utils.ts` (2 funciones añadidas)
- 63 páginas en `src/pages/` (ES, EN, PT)

**Validación:** HTML generado verificado en `dist/nosotros/index.html` (ES) y `dist/en/servicios/tarifa-plana/index.html` (EN) — ambos con los 4 hreflang correctos.

---

## DD-026 — Fix: Header nav lookup por key en lugar de label traducido (2026-06-24)

**Contexto:** Con `getMainNav('en')` cayendo a los datos ES (labels en español) y `t('nav.services')` devolviendo "Services" (EN), la búsqueda `mainNav.find(item => item.label === t('nav.services'))` no encontraba el item → dropdown de Servicios vacío en páginas EN/PT.

**Decisión:**

1. **`NavItem.key?: string` en `navigation.ts`:** Se añade un campo opcional `key` a la interfaz. Los ítems con rol especial en el Header reciben: `key: 'home'` (Inicio), `key: 'services'` (Servicios), `key: 'resources'` (Recursos). Los demás ítems planos no necesitan key.
2. **Header usa `item.key` para identificar ítems:** `mainNav.find(item => item.key === 'services')` funciona independientemente del idioma del label, porque el key es locale-neutral y se mantiene incluso cuando en el futuro se llenen los arrays `en: [...]` y `pt: [...]`.
3. **Labels de NavDropdown usan `t()`:** Los dos dropdowns del header desktop tenían labels hardcodeados en español (`label="Servicios"`, `label="Recursos"`). Se reemplazan por `label={t('nav.services')}` y `label={t('nav.resources')}` para que el botón del dropdown muestre el nombre en el idioma correcto.

**Razón:** Mezclar identidad (qué item es) con presentación (cómo se llama el item) crea acoplamiento frágil. El `key` desacopla ambas responsabilidades: la identidad es estable y locale-neutral; el label es dinámico y traducible.

**Archivos modificados:** `src/data/navigation.ts`, `src/components/navigation/Header.astro`

**Validación:** `npm run build` → 63 páginas, 0 errores.
