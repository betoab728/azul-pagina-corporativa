import ui from './ui'

export type SupportedLocale = 'es' | 'en' | 'pt'

export const defaultLocale: SupportedLocale = 'es'
export const supportedLocales: SupportedLocale[] = ['es', 'en', 'pt']

export type TranslationKey = keyof typeof ui['es']

/**
 * Normaliza un valor de locale a SupportedLocale.
 * Cualquier valor no reconocido cae a 'es'.
 */
export function getLang(locale: string | undefined): SupportedLocale {
  if (locale === 'en' || locale === 'pt') return locale
  return 'es'
}

/**
 * Devuelve una función t(key) que resuelve la traducción
 * para el locale dado, con fallback automático a 'es'.
 */
export function useTranslations(lang: SupportedLocale) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as typeof ui['es'])[key] ?? ui['es'][key]
  }
}

/** Mapeo de SupportedLocale a etiqueta OG (og:locale). */
export const ogLocaleMap: Record<SupportedLocale, string> = {
  es: 'es_PE',
  en: 'en_US',
  pt: 'pt_BR',
}

/** Tipo para los links hreflang del <head>. */
export interface AlternateLink {
  hreflang: string
  href: string
}

const _siteUrl = 'https://azulsostenible.pe'

/**
 * Dado el "base path" de la página (sin prefijo de locale, ej. '/nosotros'),
 * devuelve los 4 AlternateLink necesarios para hreflang: x-default, es, en, pt.
 */
export function getAlternates(basePath: string): AlternateLink[] {
  const suffix = basePath === '/' ? '' : basePath
  const es = _siteUrl + suffix
  const en = `${_siteUrl}/en${suffix}`
  const pt = `${_siteUrl}/pt${suffix}`
  return [
    { hreflang: 'x-default', href: es },
    { hreflang: 'es',        href: es },
    { hreflang: 'en',        href: en },
    { hreflang: 'pt',        href: pt },
  ]
}

/**
 * Extrae el "base path" (sin prefijo de locale) de un pathname de Astro.
 * '/en/nosotros' → '/nosotros', '/pt/' → '/', '/nosotros' → '/nosotros'
 */
export function getBasePath(pathname: string): string {
  const clean = pathname.replace(/\/en(?=\/|$)/, '').replace(/\/pt(?=\/|$)/, '').replace(/\/$/, '')
  return clean || '/'
}
