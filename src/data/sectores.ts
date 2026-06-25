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

export interface Sector {
  icon: string
  name: string
  href: string
  color: 'primary' | 'secondary'
}

const sectorsByLocale: Record<SupportedLocale, Sector[]> = {
  es: [
    { icon: 'mining', name: 'Sector Minero', href: '/proyectos', color: 'primary' },
    { icon: 'factory', name: 'Sector Industrial', href: '/proyectos', color: 'primary' },
    { icon: 'medical_services', name: 'Sector Salud', href: '/proyectos', color: 'primary' },
    { icon: 'agriculture', name: 'Sector Agroindustrial', href: '/proyectos', color: 'primary' },
  ],
  en: [
    { icon: 'mining', name: 'Mining Sector', href: '/en/proyectos', color: 'primary' },
    { icon: 'factory', name: 'Industrial Sector', href: '/en/proyectos', color: 'primary' },
    { icon: 'medical_services', name: 'Healthcare Sector', href: '/en/proyectos', color: 'primary' },
    { icon: 'agriculture', name: 'Agro-industrial Sector', href: '/en/proyectos', color: 'primary' },
  ],
  pt: [
    { icon: 'mining', name: 'Setor Mineração', href: '/pt/proyectos', color: 'primary' },
    { icon: 'factory', name: 'Setor Industrial', href: '/pt/proyectos', color: 'primary' },
    { icon: 'medical_services', name: 'Setor Saúde', href: '/pt/proyectos', color: 'primary' },
    { icon: 'agriculture', name: 'Setor Agroindustrial', href: '/pt/proyectos', color: 'primary' },
  ],
}

const agroStatsByLocale: Record<SupportedLocale, SectorAgroStat[]> = {
  es: [
    { value: '+15%', label: 'Eficiencia en riego' },
    { value: 'GLOBALG.A.P.', label: 'Asesoría normativa' },
  ],
  en: [
    { value: '+15%', label: 'Irrigation efficiency' },
    { value: 'GLOBALG.A.P.', label: 'Regulatory advisory' },
  ],
  pt: [
    { value: '+15%', label: 'Eficiência em irrigação' },
    { value: 'GLOBALG.A.P.', label: 'Assessoria normativa' },
  ],
}

const impactStatsByLocale: Record<SupportedLocale, ImpactStat[]> = {
  es: [
    { value: '98%', label: 'Satisfacción en Auditorías', color: 'primary' },
    { value: '+200', label: 'Proyectos Ejecutados', color: 'secondary' },
    { value: '0', label: 'Sanciones en Clientes', color: 'primary' },
    { value: '24/7', label: 'Soporte Crítico', color: 'secondary' },
  ],
  en: [
    { value: '98%', label: 'Audit Satisfaction', color: 'primary' },
    { value: '+200', label: 'Projects Completed', color: 'secondary' },
    { value: '0', label: 'Client Sanctions', color: 'primary' },
    { value: '24/7', label: 'Critical Support', color: 'secondary' },
  ],
  pt: [
    { value: '98%', label: 'Satisfação em Auditorias', color: 'primary' },
    { value: '+200', label: 'Projetos Executados', color: 'secondary' },
    { value: '0', label: 'Sanções em Clientes', color: 'primary' },
    { value: '24/7', label: 'Suporte Crítico', color: 'secondary' },
  ],

}

export const getSectors = (locale: SupportedLocale): Sector[] =>
  sectorsByLocale[locale].length > 0 ? sectorsByLocale[locale] : sectorsByLocale.es

export const getAgroStats = (locale: SupportedLocale): SectorAgroStat[] =>
  agroStatsByLocale[locale].length > 0 ? agroStatsByLocale[locale] : agroStatsByLocale.es

export const getSectoresImpactStats = (locale: SupportedLocale): ImpactStat[] =>
  impactStatsByLocale[locale].length > 0 ? impactStatsByLocale[locale] : impactStatsByLocale.es

// Backward-compat — remove after Phase 3
export const sectors = sectorsByLocale.es
export const agroStats = agroStatsByLocale.es
export const impactStats = impactStatsByLocale.es
