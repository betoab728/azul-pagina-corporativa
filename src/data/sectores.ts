import type { SupportedLocale } from '../i18n/utils'

export interface SectorAgroStat {
  value: string
  label: string
}

export interface ImpactStat {
  value: string
  label: string
  color: 'primary' | 'secondary'
}

const agroStatsByLocale: Record<SupportedLocale, SectorAgroStat[]> = {
  es: [
    { value: '+15%', label: 'Eficiencia en riego' },
    { value: 'GLOBALG.A.P.', label: 'Asesoría normativa' },
  ],
  en: [],
  pt: [],
}

const impactStatsByLocale: Record<SupportedLocale, ImpactStat[]> = {
  es: [
    { value: '98%', label: 'Satisfacción en Auditorías', color: 'primary' },
    { value: '+200', label: 'Proyectos Ejecutados', color: 'secondary' },
    { value: '0', label: 'Sanciones en Clientes', color: 'primary' },
    { value: '24/7', label: 'Soporte Crítico', color: 'secondary' },
  ],
  en: [],
  pt: [],
}

export const getAgroStats = (locale: SupportedLocale): SectorAgroStat[] =>
  agroStatsByLocale[locale].length > 0 ? agroStatsByLocale[locale] : agroStatsByLocale.es

export const getSectoresImpactStats = (locale: SupportedLocale): ImpactStat[] =>
  impactStatsByLocale[locale].length > 0 ? impactStatsByLocale[locale] : impactStatsByLocale.es

// Backward-compat — remove after Phase 3
export const agroStats = agroStatsByLocale.es
export const impactStats = impactStatsByLocale.es
