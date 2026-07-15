# Diagnóstico — Crash de `/blog` en producción (Vercel)

> Estado: **causa raíz confirmada empíricamente y fix aplicado en `main`**. Fecha: 2026-07-15.
> Síntoma: `/blog` funciona perfectamente en `localhost` (dev) pero en producción (Vercel) devuelve `500 FUNCTION_INVOCATION_FAILED`.

---

## 1. Síntoma exacto

```
This Serverless Function has crashed.
500: INTERNAL_SERVER_ERROR
Code: FUNCTION_INVOCATION_FAILED
```

Log de Vercel:
```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/var/task/dist/server/entry.mjs'
    imported from /opt/rust/nodejs.js
```

Confirmado como no relacionado al backend: los endpoints `GET /blog/publicados` y `GET /blog/publicados/{slug}` en Railway responden correctamente; el crash ocurre en la resolución de módulos de Node **antes** de que el código de la página llegue a ejecutar cualquier `fetch()`.

---

## 2. Causa raíz (confirmada, no especulativa)

### 2.1 Primer intento de diagnóstico (descartado)

La primera hipótesis fue una incompatibilidad de versión entre `@astrojs/vercel@10.0.8` y `astro@6.4.4`, con la recomendación de subir a la línea 11.x del adapter. **Esta hipótesis quedó descartada al verificar los `peerDependencies` reales en el registro de npm**:

```
@astrojs/vercel@11.0.0  → peerDependencies.astro: "^7.0.0-alpha.0"
@astrojs/vercel@11.0.1  → peerDependencies.astro: "^7.0.0"
@astrojs/vercel@11.0.2  → peerDependencies.astro: "^7.0.0"
@astrojs/vercel@11.0.3  → peerDependencies.astro: "^7.0.0"
```

Toda la línea 11.x exige **Astro 7**, no Astro 6. `10.0.8` (la instalada) es, de hecho, **la última versión del adapter compatible con Astro 6** — no hay upgrade posible sin migrar todo el proyecto a Astro 7 (fuera de alcance de este bug).

### 2.2 Prueba empírica que reveló la causa real

Para aislar si el problema era el adapter o algo en el repo, se hizo lo siguiente:
1. `rm -rf .vercel/output dist`
2. `npm run build` (build 100% limpio, sin ningún artefacto previo)
3. Inspección directa del resultado

**Resultado: el build limpio genera un bundle correcto y completo.**
```
.vercel/output/functions/_render.func/
├── .vc-config.json          → { "handler": "dist/server/entry.mjs", ... }
├── dist/server/entry.mjs    ← SÍ EXISTE
├── dist/server/chunks/...
├── node_modules/sharp/...   ← dependencias nativas incluidas
├── node_modules/cookie/...
├── node_modules/zod/...
└── src/pages/...
```

Es decir: **`@astrojs/vercel@10.0.8` + `astro@6.4.4` construyen el bundle correctamente.** El adapter nunca estuvo roto.

### 2.3 La causa raíz real: `.gitignore` rompe el bundle commiteado

El repositorio tenía commiteado `.vercel/output` completo (decisión cuestionable en sí misma — ver §2.4), y el `.gitignore` del proyecto contenía:

```gitignore
dist/
node_modules/
```

Estos patrones **sin `/` inicial se aplican a cualquier profundidad**, no solo a la raíz del proyecto. Confirmado con `git check-ignore -v`:

```
$ git check-ignore -v ".vercel/output/functions/_render.func/dist/server/entry.mjs"
.gitignore:2:dist/    .vercel/output/functions/_render.func/dist/server/entry.mjs

$ git check-ignore -v ".vercel/output/functions/_render.func/node_modules/sharp/package.json"
.gitignore:7:node_modules/    .vercel/output/functions/_render.func/node_modules/sharp/package.json
```

**Cada vez que se commiteaba `.vercel/output`, git descartaba silenciosamente `_render.func/dist/` y `_render.func/node_modules/`** — exactamente `dist/server/entry.mjs` y las dependencias nativas (`sharp`, etc.) que la función necesita para arrancar. Lo que quedaba commiteado era un esqueleto: `.vc-config.json` (que sí referencia el handler correcto) + `package.json` + los `.astro` fuente, pero **sin el código compilado real**. Esto reproduce el error de Vercel de forma exacta y mecánica: `Cannot find module '/var/task/dist/server/entry.mjs'`.

### 2.4 Por qué esto llegó a producción

Esto explica el síntoma **solo si** el deploy de Vercel usa (total o parcialmente) el `.vercel/output` ya commiteado en el repo en lugar de generar uno 100% nuevo en su contenedor de build. Con un build fresco local todo funciona — así que la vía de contaminación más consistente con toda la evidencia es que el checkout de git (con el bundle incompleto ya presente) interfiere con el resultado final del build en Vercel.

> ⚠️ **Punto que no se puede verificar desde el repositorio**: si el proyecto en el dashboard de Vercel tiene el Framework Preset o el Build Command mal configurado (p. ej. "Other" con build command vacío, equivalente a un deploy tipo `--prebuilt`), Vercel podría estar tomando el `.vercel/output` del checkout directamente. **Esto requiere revisión manual en el dashboard de Vercel** (Project → Settings → Build & Development Settings) — no es algo que se pueda corregir desde el código.

### 2.5 Historial que es consistente con esta explicación

- El `.vc-config.json` roto se creó en el commit `f5dbb09` ("blog depl") y nunca cambió — porque el `handler` en sí siempre fue correcto (`dist/server/entry.mjs` es el path real que usa el adapter); lo que faltaba era el contenido, no la referencia.
- Los commits `bug blog` (`00c0eca`) y `bug blog 2` (`3edc366`) fueron rebuilds + recommit de `.vercel/output` sin tocar `.gitignore` — así que reprodujeron el mismo bundle incompleto cada vez, sin resolver nada.

---

## 3. Hipótesis — resultado final

| # | Hipótesis | Resultado |
|---|-----------|-----------|
| 1 | Incompatibilidad `@astrojs/vercel@10.0.8` ↔ `astro@6.4.4` | **Descartada** — verificado vía `peerDependencies` en npm; 10.0.8 es la última versión compatible con Astro 6, y un build limpio con esta versión funciona perfectamente |
| 2 | `.gitignore` (`dist/`, `node_modules/` sin anclar) elimina archivos esenciales del bundle commiteado en `.vercel/output/functions/_render.func/` | **Confirmada** — reproducido con `git check-ignore -v` |
| 3 | `.vercel/output` commiteado en git como vector de contaminación hacia el deploy de producción | **Altamente probable como mecanismo de entrega del bug**, pendiente de confirmar si Vercel efectivamente usa el checkout en lugar de rebuildear — requiere revisión del dashboard (fuera del alcance del repo) |
| 4 | Runtime de Node inconsistente en el dashboard de Vercel | Baja probabilidad, no descartada, no era la causa principal |
| 5 | Problema del backend FastAPI/Railway | Descartada — crash previo a cualquier `fetch()` |

---

## 4. Fix aplicado

- [x] `.gitignore`: se añadió `.vercel/` (además de `dist/` y `node_modules/` ya existentes).
- [x] `git rm -r --cached .vercel`: se destrackeó todo `.vercel/output` del repositorio.
- [x] Verificado con `npm run build` limpio que el bundle generado localmente es correcto y completo.
- [ ] **Pendiente de revisión manual (no accionable desde el código)**: confirmar en el dashboard de Vercel que el Build Command / Framework Preset del proyecto está en modo estándar de Astro (no "Other"/prebuilt), para asegurar que cada deploy corre `astro build` fresco en el contenedor de Vercel.
- [ ] Pendiente: hacer push a `main`, esperar el deploy automático de Vercel y validar `/blog` y `/blog/[slug]` en producción.
- [ ] Si el crash persistiera después de este fix, eso apuntaría directamente a la Hipótesis #3/§2.4 (dashboard mal configurado) como causa adicional a resolver manualmente en Vercel.

### Qué no se hizo (y por qué)
- **No se actualizó `@astrojs/vercel`** — no hay versión más nueva compatible con Astro 6; forzar la v11 rompería el proyecto (exige Astro 7).
- **No se tocó `astro.config.mjs`** — la configuración actual (`adapter: vercel()`, sin `output` explícito, `prerender = false` por página) ya es válida y genera el bundle correcto en un build limpio.

---

## 5. Relacionado

Esta sección de blog ya tenía hallazgos funcionales pendientes (enlaces rotos, bug de interpolación CSS, dos fuentes de datos desconectadas) documentados en [`blog-audit.md`](./blog-audit.md). Ese trabajo es independiente de este crash de infraestructura y puede abordarse por separado, una vez `/blog` esté sirviendo en producción.
