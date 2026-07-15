# Auditoría — Sección Blog

> Alcance: `/blog`, `/blog/[slug]`, `RecursosBlogSection.astro` (bloque "Blog Azul" en `/recursos`) y sus fuentes de datos. Fecha de auditoría: 2026-07-15.

## Resumen

El sitio tiene **dos sistemas de "blog" completamente independientes y desconectados entre sí**:

1. **Blog real** (`src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`): SSR bajo demanda (`prerender = false`) que consume una API externa (`https://azul-backend-production.up.railway.app`).
2. **Preview estático** (`src/sections/RecursosBlogSection.astro`, renderizado en `/recursos`): usa datos hardcodeados en `src/data/recursos.ts` con imágenes placeholder de Google, sin relación alguna con los artículos reales.

Además, los dos últimos commits del repo (`bug blog`, `bug blog 2`) **solo modificaron artefactos compilados en `.vercel/output`**, no el código fuente — los bugs descritos abajo siguen presentes en `src/`.

---

## Hallazgos críticos (bugs funcionales activos)

### 1. Tarjetas de "Blog Azul" en /recursos no son clickeables
`src/sections/RecursosBlogSection.astro:32-46` — cada `<article class="group cursor-pointer">` simula ser un enlace (cursor de mano, hover scale) pero **no contiene ningún `<a>`** alrededor de la imagen o el título. El usuario no puede navegar a ningún artículo desde ahí.

### 2. "Ver todos los artículos" apunta a un enlace muerto
`src/sections/RecursosBlogSection.astro:24` — `<a href="#">` en vez de `<a href="/blog">`. Debería llevar al listado real del blog.

### 3. El color de categoría nunca se aplica (bug de interpolación)
`src/sections/RecursosBlogSection.astro:42`:
```astro
<div class="... text-xs font-bold ${categoryColorClasses[article.categoryColor]}">
```
Falta envolver el atributo en `{` `}` con backticks (patrón usado correctamente en el resto del código, ej. `SectoresImpactoSection.astro:43`, `ImpactSection.astro:43`). Al ser un string plano, Astro **no interpola** `${...}`; el texto literal `${categoryColorClasses...}` termina como un class-token inválido que el navegador ignora. Resultado: la etiqueta de categoría (INGENIERÍA / ECONOMÍA CIRCULAR / MONITOREO) nunca toma el color `text-primary`/`text-secondary`/`text-tertiary` definido.

**Fix:**
```astro
<div class={`absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold ${categoryColorClasses[article.categoryColor]}`}>
```

---

## Hallazgos altos (arquitectura y datos)

### 4. Contenido del preview y del blog real no coinciden
`data/recursos.ts` (`getBlogArticles`) contiene 3 artículos ficticios ("Implementación de Plantas de Tratamiento Compactas", etc.) con imágenes placeholder de `lh3.googleusercontent.com` (hay un `// TODO: Reemplazar imágenes placeholder con imágenes reales del cliente` explícito en el código, línea 25). Estos nunca coincidirán con lo publicado vía la API real. Si se corrige el bug #1/#2, el usuario llegaría a `/blog` esperando ver esos 3 artículos y no los encontraría.

### 5. Dependencia dura de un backend externo sin caché ni resiliencia
`src/pages/blog/index.astro` y `[slug].astro` tienen `export const prerender = false` y hacen `fetch()` a Railway en cada request:
- Sin `Cache-Control` / revalidación en la respuesta de Astro → cada visita a `/blog` golpea el backend, sin aprovechar CDN de Vercel.
- Sin timeout en el `fetch` → si el backend está lento, el TTFB de la página entera se ve afectado (Astro espera la respuesta antes de renderizar).
- Esto contradice la estrategia de rendimiento de `docs/architecture.md` ("Astro SSG, HTML pre-renderizado") — el blog es la única sección del sitio con SSR dinámico dependiente de un tercero.

### 6. Sin soporte real de i18n
`src/data/navigation.ts` define el link "Blog" para `es`, `en` y `pt` apuntando siempre a `/blog` (líneas 43, 72, 101) — no existen `/en/blog` ni `/pt/blog`. Un usuario navegando el sitio en inglés o portugués es enviado a una página 100% en español (`lang="es"` hardcodeado en ambas páginas), sin `alternates`/hreflang. Rompe la arquitectura i18n descrita en `docs/i18n-architecture.md`.

### 7. Artículo no encontrado devuelve HTTP 200
`src/pages/blog/[slug].astro:51-65` — cuando `error` o `!article`, se renderiza la vista "Artículo no encontrado" pero nunca se fija `Astro.response.status = 404`. Buscadores pueden indexar URLs inválidas como contenido válido.

---

## Hallazgos medios (SEO / código)

### 8. Imágenes sin optimizar
Ambas páginas usan `<img>` plano para `imagen_portada` en vez de `<Image />` de Astro, contradiciendo `docs/architecture.md` ("Imágenes optimizadas con `<Image />` de Astro"). No hay `image.domains`/`remotePatterns` configurado en `astro.config.mjs`, así que ni siquiera sería trivial migrarlas sin tocar la config.

### 9. Sin datos estructurados de artículo
`BaseLayout.astro` solo emite JSON-LD `LocalBusiness` para todo el sitio. Las páginas de blog no añaden `BlogPosting`/`Article` (autor, fecha de publicación, imagen) — se pierden rich snippets en resultados de búsqueda a pesar de tener toda la data necesaria (`autor`, `fecha_publicacion`, `imagen_portada`).

### 10. HTML crudo del backend sin sanitizar
`src/pages/blog/[slug].astro:122` — `set:html={article.contenido}` inyecta el HTML del backend directamente. Si el backend permite múltiples editores o contenido no confiable, es un vector de XSS almacenado. Verificar que el backend sanitice el HTML antes de guardarlo/servirlo.

### 11. Duplicación de código entre las dos páginas
`API_BASE`, la interfaz `Article` y `formatDate()` están duplicados en `index.astro` y `[slug].astro`. No existe un helper compartido (ej. `src/lib/blog.ts`).

### 12. Sin paginación
`/blog` trae **todos** los artículos publicados en una sola llamada (`/blog/publicados`). Escala mal si el backend acumula muchos artículos.

---

## Notas de proceso

- **`.vercel/output` está versionado en git.** Los commits `bug blog` (00c0eca) y `bug blog 2` (3edc366) solo tienen diffs dentro de `.vercel/output/_functions/**` — son commits de redeploy/rebuild, no arreglos de código. Esto explica por qué los bugs #1-#3 siguen presentes: nunca se tocó `src/`. Recomendado: añadir `.vercel/` al `.gitignore` para evitar confusión entre "cambios de código" y "artefactos de build".

---

## Recomendaciones priorizadas

| # | Acción | Esfuerzo |
|---|--------|----------|
| 1 | Envolver el link de cada tarjeta en `RecursosBlogSection` con `<a href={`/blog/${article.slug}`}>` — requiere que `getBlogArticles` devuelva un `slug` real, o mejor: reemplazar los datos hardcodeados por una llamada a la misma API del blog real (limitada a 3 más recientes) | Media |
| 2 | Corregir `href="#"` → `href="/blog"` en "Ver todos los artículos" | Baja |
| 3 | Corregir el bug de interpolación de `categoryColorClasses` (envolver en backticks) | Baja |
| 4 | Unificar la fuente de datos: que `/recursos` consuma la misma API que `/blog` en vez de `data/recursos.ts` | Alta |
| 5 | Agregar `Astro.response.status = 404` cuando el artículo no existe | Baja |
| 6 | Agregar `Cache-Control`/`s-maxage` a las respuestas SSR del blog para aliviar la dependencia del backend | Media |
| 7 | Añadir JSON-LD `BlogPosting` en `[slug].astro` | Baja |
| 8 | Definir estrategia i18n para el blog (traducir, o al menos marcar claramente que el contenido es solo en español) | Media |
| 9 | Extraer `API_BASE`, `Article` y `formatDate` a un módulo compartido (`src/lib/blog.ts`) | Baja |
| 10 | Añadir `.vercel/` a `.gitignore` | Baja |
