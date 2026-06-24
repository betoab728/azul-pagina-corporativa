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
