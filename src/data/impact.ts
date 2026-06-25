import type { SupportedLocale } from '../i18n/utils'

export interface ImpactStat {
  icon: string
  iconColor: 'primary' | 'secondary'
  value: string
  label: string
}

const impactStatsByLocale: Record<SupportedLocale, ImpactStat[]> = {
  es: [
    { icon: 'groups', iconColor: 'secondary', value: '+5', label: 'Años de experiencia' },
    { icon: 'work_history', iconColor: 'primary', value: '+10,000', label: 'toneladas gestionadas' },
    { icon: 'corporate_fare', iconColor: 'secondary', value: '+30', label: 'empresas atendidas' },
    { icon: 'map', iconColor: 'primary', value: '+24', label: 'Regiones del Perú' },
  ],
  en: [
    { icon: 'groups', iconColor: 'secondary', value: '+5', label: 'Years of experience' },
    { icon: 'work_history', iconColor: 'primary', value: '+10,000', label: 'tonnes managed' },
    { icon: 'corporate_fare', iconColor: 'secondary', value: '+30', label: 'companies served' },
    { icon: 'map', iconColor: 'primary', value: '+24', label: 'Regions of Peru' },
  ],
  pt: [
    { icon: 'groups', iconColor: 'secondary', value: '+5', label: 'Anos de experiência' },
    { icon: 'work_history', iconColor: 'primary', value: '+10,000', label: 'toneladas gerenciadas' },
    { icon: 'corporate_fare', iconColor: 'secondary', value: '+30', label: 'empresas atendidas' },
    { icon: 'map', iconColor: 'primary', value: '+24', label: 'Regiões do Peru' },
  ],
}

export const getImpactStats = (locale: SupportedLocale): ImpactStat[] =>
  impactStatsByLocale[locale].length > 0 ? impactStatsByLocale[locale] : impactStatsByLocale.es

// Backward-compat — remove after Phase 3
export const impactStats = impactStatsByLocale.es
