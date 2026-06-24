import type { SupportedLocale } from '../i18n/utils'

export interface FaseItem {
  icon: string
  title: string
  description: string
}

export interface BeneficioItem {
  icon: string
  title: string
  description: string
  variant: 'white' | 'dark' | 'white-box' | 'green-box'
  span: string
}

const fasesByLocale: Record<SupportedLocale, FaseItem[]> = {
  es: [
    { icon: 'sensors', title: 'Generación', description: 'Registro inicial preciso.' },
    { icon: 'inventory_2', title: 'Almacenamiento', description: 'Control de stocks temporales.' },
    { icon: 'local_shipping', title: 'Transporte', description: 'Monitoreo de rutas y tiempos.' },
    { icon: 'recycling', title: 'Valorización', description: 'Transformación sostenible.' },
  ],
  en: [],
  pt: [],
}

const beneficiosByLocale: Record<SupportedLocale, BeneficioItem[]> = {
  es: [
    {
      icon: 'visibility',
      title: 'Transparencia y trazabilidad real',
      description: 'Acceso a información técnica verídica en tiempo real, sin demoras ni intermediarios.',
      variant: 'white',
      span: 'md:col-span-3 lg:col-span-4',
    },
    {
      icon: 'workspace_premium',
      title: 'Reputación ambiental verificable',
      description: 'Evidencia digital sólida que supera cualquier reporte en papel tradicional.',
      variant: 'white',
      span: 'md:col-span-3 lg:col-span-4',
    },
    {
      icon: 'bolt',
      title: 'Eficiencia operativa inmediata',
      description: 'Reducción drástica del papeleo y eliminación de procesos manuales que generan errores.',
      variant: 'dark',
      span: 'md:col-span-6 lg:col-span-4',
    },
    {
      icon: 'query_stats',
      title: 'Control sobre sus residuos',
      description: 'Visibilidad total sobre el qué, cuánto, dónde y el costo exacto de su gestión de residuos.',
      variant: 'white-box',
      span: 'md:col-span-3 lg:col-span-6',
    },
    {
      icon: 'assignment_turned_in',
      title: 'Cumplimiento ambiental',
      description: 'Información lista para reportar a SIGERSOL y otras autoridades competentes sin esfuerzo adicional.',
      variant: 'green-box',
      span: 'md:col-span-3 lg:col-span-6',
    },
  ],
  en: [],
  pt: [],
}

export const getFases = (locale: SupportedLocale): FaseItem[] =>
  fasesByLocale[locale].length > 0 ? fasesByLocale[locale] : fasesByLocale.es

export const getBeneficios = (locale: SupportedLocale): BeneficioItem[] =>
  beneficiosByLocale[locale].length > 0 ? beneficiosByLocale[locale] : beneficiosByLocale.es

// Backward-compat — remove after Phase 3
export const fases = fasesByLocale.es
export const beneficios = beneficiosByLocale.es
