import { c as createComponent } from './astro-component_C29GJRUS.mjs';
import 'piccolore';
import { o as renderComponent, k as renderTemplate, m as maybeRenderHead, p as Fragment, h as addAttribute, u as unescapeHTML } from './entrypoint_BH56XFav.mjs';
import { $ as $$PageLayout } from './PageLayout_Bd55YKHg.mjs';

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const API_BASE = "https://azul-backend-production.up.railway.app";
  const { slug } = Astro2.params;
  let article = null;
  let error = null;
  try {
    const res = await fetch(`${API_BASE}/blog/publicados/${slug}`, {
      headers: { "Accept": "application/json" }
    });
    if (!res.ok) throw new Error(`Artículo no encontrado (HTTP ${res.status})`);
    article = await res.json();
  } catch (e) {
    error = e.message || "Error al cargar el artículo.";
  }
  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" });
  }
  const canonicalUrl = `https://azulsostenible.pe/blog/${slug}`;
  const title = article ? `${article.titulo} | Blog Azul Sostenible` : "Artículo no encontrado | Azul Sostenible";
  const description = article?.resumen ?? "Artículo del blog de Azul Sostenible sobre gestión ambiental y sostenibilidad.";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "lang": "es", "title": title, "description": description, "canonical": canonicalUrl }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${error || !article ? renderTemplate`<section class="py-section-padding bg-surface"> <div class="max-w-3xl mx-auto px-6 md:px-margin-desktop text-center"> <span class="material-symbols-outlined text-primary/20 text-6xl mb-4 block" aria-hidden="true">article</span> <h1 class="font-headline text-3xl md:text-4xl text-primary font-extrabold mb-4">Artículo no encontrado</h1> <p class="text-on-surface-variant mb-8">${error ?? "El artículo que buscas no está disponible."}</p> <a href="/blog" class="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-all"> <span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>
Volver al Blog
</a> </div> </section>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`  <section class="relative" aria-labelledby="article-hero-heading"> <div class="h-64 md:h-96 overflow-hidden"> <img${addAttribute(article.imagen_portada, "src")}${addAttribute(article.titulo, "alt")} class="w-full h-full object-cover" loading="eager" width="1200" height="384"> </div> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0"> <div class="max-w-4xl mx-auto px-6 md:px-margin-desktop pb-8 md:pb-12"> <h1 id="article-hero-heading" class="font-headline text-2xl md:text-4xl lg:text-5xl text-white font-extrabold mb-3 leading-tight"> ${article.titulo} </h1> <div class="flex flex-wrap items-center gap-4 text-white/80 text-sm"> <span class="flex items-center gap-1"> <span class="material-symbols-outlined text-base" aria-hidden="true">person</span> ${article.autor} </span> <span class="flex items-center gap-1"> <span class="material-symbols-outlined text-base" aria-hidden="true">calendar_today</span> ${formatDate(article.fecha_publicacion)} </span> </div> </div> </div> </section>  <section class="py-section-padding bg-surface"> <div class="max-w-4xl mx-auto px-6 md:px-margin-desktop"> <div class="flex flex-col lg:flex-row gap-12"> <!-- Artículo --> <article class="flex-1 min-w-0"> <!-- Resumen destacado --> <div class="bg-surface-container-low border-l-4 border-primary rounded-r-xl p-5 mb-8"> <p class="text-on-surface-variant text-lg leading-relaxed">${article.resumen}</p> </div> <!-- Contenido HTML --> <div class="prose prose-lg max-w-none
                  prose-headings:font-headline prose-headings:text-primary prose-headings:font-extrabold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-on-surface-variant prose-p:leading-relaxed
                  prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-on-surface
                  prose-ul:text-on-surface-variant
                  prose-img:rounded-xl prose-img:shadow-md
                  prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-surface-container-low prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-4
                ">${unescapeHTML(article.contenido)}</div> <!-- Separador --> <hr class="my-12 border-outline-variant/30"> <!-- Volver --> <a href="/blog" class="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"> <span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>
Volver al Blog
</a> </article> <!-- Sidebar --> <aside class="lg:w-72 shrink-0"> <div class="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 sticky top-28 space-y-6"> <div> <h3 class="font-headline text-sm font-bold text-primary uppercase tracking-wider mb-3">Autor</h3> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center"> <span class="material-symbols-outlined" aria-hidden="true">person</span> </div> <span class="font-bold text-on-surface text-sm">${article.autor}</span> </div> </div> <div> <h3 class="font-headline text-sm font-bold text-primary uppercase tracking-wider mb-3">Publicado</h3> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center"> <span class="material-symbols-outlined" aria-hidden="true">calendar_today</span> </div> <span class="text-on-surface-variant text-sm">${formatDate(article.fecha_publicacion)}</span> </div> </div> <div> <h3 class="font-headline text-sm font-bold text-primary uppercase tracking-wider mb-3">Compartir</h3> <div class="flex gap-2"> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 border border-outline-variant/30 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-transparent transition-all" aria-label="Compartir en LinkedIn"> <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> </a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 border border-outline-variant/30 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all" aria-label="Compartir en Facebook"> <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg> </a> <a${addAttribute(`https://wa.me/?text=${encodeURIComponent(article.titulo + " " + canonicalUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 border border-outline-variant/30 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all" aria-label="Compartir en WhatsApp"> <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"></path></svg> </a> </div> </div> </div> </aside> </div> </div> </section> ` })}`} </main> ` })}`;
}, "C:/Users/USER/Documents/programacion/azul_corporativo/pagina_junio/app/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/USER/Documents/programacion/azul_corporativo/pagina_junio/app/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
