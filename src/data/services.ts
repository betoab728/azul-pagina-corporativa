import type { SupportedLocale } from '../i18n/utils'

export interface Service {
  icon: string
  iconColor: 'primary' | 'secondary'
  title: string
  description: string
  href: string
}

const servicesByLocale: Record<SupportedLocale, Service[]> = {
  es: [
    {
      icon: 'payments',
      iconColor: 'secondary',
      title: 'Tarifa plana ambiental',
      description: 'Solución integral con costos fijos mensuales para el cumplimiento ambiental de tu empresa.',
      href: '/servicios/tarifa-plana',
    },
    {
      icon: 'delete_sweep',
      iconColor: 'primary',
      title: 'Reclasificación de residuos peligrosos',
      description: 'Gestionamos la reclasificación de residuos peligrosos conforme a la normativa vigente.',
      href: '/servicios/reclasificacion-de-residuos',
    },
    {
      icon: 'checklist',
      iconColor: 'secondary',
      title: 'Caracterización de residuos sólidos municipales y no municipales',
      description: 'Realizamos análisis y caracterización de residuos para una gestión adecuada y sostenible.',
      href: '/servicios/caracterizacion-de-residuos',
    },
    {
      icon: 'trending_down',
      iconColor: 'primary',
      title: 'Reducción del OPEX',
      description: 'Optimizamos su estructura de costos operativos mediante diagnósticos de eficiencia ambiental.',
      href: '/servicios/reduccion-del-opex',
    },
    {
      icon: 'warehouse',
      iconColor: 'secondary',
      title: 'Almacenes Inteligentes',
      description: 'Diseñamos infraestructuras circulares que convierten el almacenamiento de residuos en un activo rentable.',
      href: '/servicios/almacenes-inteligentes',
    },
  ],
  en: [],
  pt: [],
}

export const getServices = (locale: SupportedLocale): Service[] =>
  servicesByLocale[locale].length > 0 ? servicesByLocale[locale] : servicesByLocale.es

// Backward-compat — remove after Phase 3
export const services = servicesByLocale.es
