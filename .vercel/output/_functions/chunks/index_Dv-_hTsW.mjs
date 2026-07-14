import { c as createComponent } from './astro-component_DO_lknog.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BaCRcT__.mjs';
import { $ as $$PageLayout } from './PageLayout_D-PVSqoU.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const API_BASE = "https://azul-backend-production.up.railway.app";
  let articles = [];
  let error = null;
  try {
    const res = await fetch(`${API_BASE}/blog/publicados`, {
      headers: { "Accept": "application/json" }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const raw = Array.isArray(data) ? data : data.articles ?? data.results ?? [];
    articles = raw.sort(
      (a, b) => new Date(b.fecha_publicacion).getTime() - new Date(a.fecha_publicacion).getTime()
    );
  } catch (e) {
    error = e.message || "Error al cargar artículos del blog.";
  }
  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" });
  }
  const title = "Blog | Azul Sostenible";
  const description = "Artículos sobre gestión ambiental, economía circular, sostenibilidad industrial y normativa ambiental en el Perú.";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "lang": "es", "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Hero del Blog --> <section class="py-section-padding overflow-hidden relative" style="background: linear-gradient(135deg, rgba(0, 71, 145, 0.55) 0%, rgba(0, 0, 0, 0.45) 100%), url('/blog-fondo.jpg') center/cover no-repeat;" aria-labelledby="blog-hero-heading"> <div class="max-w-7xl mx-auto px-6 md:px-margin-desktop relative z-10"> <div class="max-w-3xl"> <span class="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">BLOG</span> <h1 id="blog-hero-heading" class="font-headline text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight">
Conocimiento en Sostenibilidad
</h1> <p class="font-body text-lg text-white/80 max-w-2xl leading-relaxed">
Artículos técnicos sobre gestión de residuos, economía circular, normativa ambiental y soluciones sostenibles para la industria peruana.
</p> </div> </div> </section> <!-- Listado de artículos --> <section class="py-section-padding bg-surface" aria-labelledby="blog-list-heading"> <div class="max-w-7xl mx-auto px-6 md:px-margin-desktop"> <h2 id="blog-list-heading" class="font-headline text-3xl md:text-4xl text-primary font-extrabold mb-2">Últimos Artículos</h2> <div class="w-20 h-1 bg-secondary rounded-full mb-12"></div> ${error ? renderTemplate`<div class="bg-error/5 border border-error/20 rounded-2xl p-8 text-center"> <span class="material-symbols-outlined text-error text-4xl mb-3 block" aria-hidden="true">cloud_off</span> <p class="font-bold text-on-surface">No se pudieron cargar los artículos</p> <p class="text-on-surface-variant text-sm mt-1">${error}</p> </div>` : articles.length === 0 ? renderTemplate`<div class="text-center py-16"> <span class="material-symbols-outlined text-primary/20 text-6xl mb-4 block" aria-hidden="true">article</span> <p class="text-on-surface-variant">No hay artículos publicados aún.</p> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${articles.map((article) => renderTemplate`<article class="group bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all flex flex-col"> <a${addAttribute(`/blog/${article.slug}`, "href")} class="overflow-hidden"> <img${addAttribute(article.imagen_portada, "src")}${addAttribute(article.titulo, "alt")} class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width="400" height="208"> </a> <div class="p-6 flex flex-col flex-grow"> <div class="flex items-center gap-3 text-xs text-on-surface-variant mb-3"> <span class="flex items-center gap-1"> <span class="material-symbols-outlined text-sm" aria-hidden="true">person</span> ${article.autor} </span> <span class="flex items-center gap-1"> <span class="material-symbols-outlined text-sm" aria-hidden="true">calendar_today</span> ${formatDate(article.fecha_publicacion)} </span> </div> <h3 class="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug"> <a${addAttribute(`/blog/${article.slug}`, "href")}>${article.titulo}</a> </h3> <p class="text-on-surface-variant text-sm leading-relaxed flex-grow mb-4">${article.resumen}</p> <a${addAttribute(`/blog/${article.slug}`, "href")} class="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all mt-auto">
Leer artículo
<span class="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span> </a> </div> </article>`)} </div>`} </div> </section> </main> ` })}`;
}, "C:/Users/USER/Documents/programacion/azul_corporativo/pagina_junio/app/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/USER/Documents/programacion/azul_corporativo/pagina_junio/app/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
