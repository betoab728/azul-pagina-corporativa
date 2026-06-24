import type { SupportedLocale } from '../i18n/utils'

export interface Sector {
  icon: string
  iconColor: 'primary' | 'secondary'
  name: string
  href: string
}

const sectorsByLocale: Record<SupportedLocale, Sector[]> = {
  es: [
    { icon: 'engineering', iconColor: 'primary', name: 'Sector minero', href: '/sectores' },
    { icon: 'factory', iconColor: 'secondary', name: 'Industrial', href: '/sectores' },
    { icon: 'medical_services', iconColor: 'primary', name: 'Salud', href: '/sectores' },
    { icon: 'eco', iconColor: 'secondary', name: 'Agroindustrial', href: '/sectores' },
  ],
  en: [],
  pt: [],
}

export const getSectors = (locale: SupportedLocale): Sector[] =>
  sectorsByLocale[locale].length > 0 ? sectorsByLocale[locale] : sectorsByLocale.es

// Backward-compat — remove after Phase 3
export const sectors = sectorsByLocale.es
