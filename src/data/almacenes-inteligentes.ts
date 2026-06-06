export interface ProblemItem {
  icon: string
  title: string
  description: string
}

export interface BentoItem {
  icon: string
  iconStyle: 'primary-container' | 'primary' | 'secondary'
  title: string
  description: string
  variant: 'large' | 'dark' | 'simple'
}

export interface ValorItem {
  number: string
  title: string
  description: string
}

export interface BeneficioItem {
  icon: string
  title: string
}

export const problemas: ProblemItem[] = [
  { icon: 'money_off', title: 'Costos innecesarios', description: 'Gastos ocultos en gestión reactiva.' },
  { icon: 'layers_clear', title: 'Saturación de espacios', description: 'Mala disposición que frena la operación.' },
  { icon: 'local_shipping', title: 'Costos logísticos', description: 'Incremento por ineficiencia en traslados.' },
  { icon: 'warning', title: 'Riesgos operativos', description: 'Falta de estándares de seguridad.' },
]

export const bentoItems: BentoItem[] = [
  {
    icon: 'architecture',
    iconStyle: 'primary-container',
    title: 'Diseñamos Infraestructuras Inteligentes',
    description: 'Creamos planos y layouts optimizados que cumplen con normativas internacionales y facilitan el flujo circular de materiales.',
    variant: 'large',
  },
  {
    icon: 'inventory_2',
    iconStyle: 'primary',
    title: 'Optimizamos Almacenes',
    description: 'Gestión especializada para residuos peligrosos y no peligrosos bajo estrictos protocolos de seguridad.',
    variant: 'dark',
  },
  {
    icon: 'precision_manufacturing',
    iconStyle: 'primary',
    title: 'Áreas de Acondicionamiento',
    description: 'Implementamos estaciones de compactación, trituración y embalaje para maximizar la logística.',
    variant: 'simple',
  },
  {
    icon: 'rule',
    iconStyle: 'secondary',
    title: 'Estandarizamos Procesos',
    description: 'Desarrollo de SOPs (Standard Operating Procedures) e indicadores clave de desempeño (KPIs).',
    variant: 'simple',
  },
  {
    icon: 'accessibility',
    iconStyle: 'primary',
    title: 'Herramientas de Trazabilidad',
    description: 'Integración de software para el seguimiento en tiempo real del ciclo de vida del residuo.',
    variant: 'simple',
  },
]

export const valorItems: ValorItem[] = [
  { number: '01', title: 'Diagnóstico Integral', description: 'Radiografía completa de flujos, costos y brechas normativas.' },
  { number: '02', title: 'Diseño de Optimización', description: 'Propuesta técnica de ingeniería para el nuevo layout del almacén.' },
  { number: '03', title: 'Sistema de Indicadores', description: 'Dashboard para medir eficiencia, valorización y ahorros generados.' },
  { number: '04', title: 'Programa de Economía Circular', description: 'Estrategia para reinsertar materiales en la cadena de valor.' },
  { number: '05', title: 'Plan de Reducción de OPEX', description: 'Cronograma tangible de ahorros en costos operativos directos.' },
  { number: '06', title: 'Hoja de Ruta', description: 'Plan de implementación por fases para asegurar continuidad operativa.' },
]

export const beneficiosAlmacenes: BeneficioItem[] = [
  { icon: 'trending_down', title: 'Menos Costos' },
  { icon: 'aspect_ratio', title: 'Más Espacio' },
  { icon: 'eco', title: 'Más Valorización' },
  { icon: 'settings_suggest', title: 'Más Control' },
  { icon: 'verified', title: 'Más Cumplimiento' },
  { icon: 'payments', title: 'Más Rentabilidad' },
]
