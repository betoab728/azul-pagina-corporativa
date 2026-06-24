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
  en: [
    {
      icon: 'payments',
      iconColor: 'secondary',
      title: 'Environmental Flat Rate',
      description: 'Comprehensive solution with fixed monthly costs for your company\'s environmental compliance.',
      href: '/en/servicios/tarifa-plana',
    },
    {
      icon: 'delete_sweep',
      iconColor: 'primary',
      title: 'Hazardous Waste Reclassification',
      description: 'We manage the reclassification of hazardous waste in accordance with current regulations.',
      href: '/en/servicios/reclasificacion-de-residuos',
    },
    {
      icon: 'checklist',
      iconColor: 'secondary',
      title: 'Solid Waste Characterization',
      description: 'We perform analysis and characterization of waste for proper and sustainable management.',
      href: '/en/servicios/caracterizacion-de-residuos',
    },
    {
      icon: 'trending_down',
      iconColor: 'primary',
      title: 'OPEX Reduction',
      description: 'We optimize your operational cost structure through environmental efficiency diagnostics.',
      href: '/en/servicios/reduccion-del-opex',
    },
    {
      icon: 'warehouse',
      iconColor: 'secondary',
      title: 'Smart Warehouses',
      description: 'We design circular infrastructures that turn waste storage into a profitable asset.',
      href: '/en/servicios/almacenes-inteligentes',
    },
  ],
  pt: [
    {
      icon: 'payments',
      iconColor: 'secondary',
      title: 'Tarifa Fixa Ambiental',
      description: 'Solução integral com custos mensais fixos para o cumprimento ambiental da sua empresa.',
      href: '/pt/servicios/tarifa-plana',
    },
    {
      icon: 'delete_sweep',
      iconColor: 'primary',
      title: 'Reclassificação de Resíduos Perigosos',
      description: 'Gerenciamos a reclassificação de resíduos perigosos conforme a regulamentação vigente.',
      href: '/pt/servicios/reclasificacion-de-residuos',
    },
    {
      icon: 'checklist',
      iconColor: 'secondary',
      title: 'Caracterização de Resíduos Sólidos',
      description: 'Realizamos análise e caracterização de resíduos para uma gestão adequada e sustentável.',
      href: '/pt/servicios/caracterizacion-de-residuos',
    },
    {
      icon: 'trending_down',
      iconColor: 'primary',
      title: 'Redução do OPEX',
      description: 'Otimizamos sua estrutura de custos operacionais por meio de diagnósticos de eficiência ambiental.',
      href: '/pt/servicios/reduccion-del-opex',
    },
    {
      icon: 'warehouse',
      iconColor: 'secondary',
      title: 'Armazéns Inteligentes',
      description: 'Projetamos infraestruturas circulares que transformam o armazenamento de resíduos em um ativo rentável.',
      href: '/pt/servicios/almacenes-inteligentes',
    },
  ],
}

export const getServices = (locale: SupportedLocale): Service[] =>
  servicesByLocale[locale].length > 0 ? servicesByLocale[locale] : servicesByLocale.es

// Backward-compat — remove after Phase 3
export const services = servicesByLocale.es
