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
