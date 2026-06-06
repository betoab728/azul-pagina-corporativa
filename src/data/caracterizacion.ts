export interface ProcesoItem {
  icon: string
  iconColor: 'primary' | 'secondary'
  title: string
  description: string
}

export interface BeneficioItem {
  icon: string
  title: string
  description: string
}

export interface StatItem {
  value: string
  label: string
  highlight: boolean
}

export const procesoItems: ProcesoItem[] = [
  {
    icon: 'precision_manufacturing',
    iconColor: 'primary',
    title: 'Muestreo y medición en campo',
    description: 'Evaluamos volumen, tipo y composición real de tus residuos mediante metodologías certificadas.',
  },
  {
    icon: 'analytics',
    iconColor: 'secondary',
    title: 'Análisis técnico y clasificación',
    description: 'Determinamos categorías precisas y potencial de valorización para identificar ahorros inmediatos.',
  },
]

export const procesoItemDestacado = {
  icon: 'description',
  title: 'Informe profesional y mejoras',
  description: 'Resultados claros, visuales y listos para auditorías, fiscalización y planificación estratégica.',
  footerIcon: 'verified',
  footerText: 'Válido para fiscalización',
}

export const beneficios: BeneficioItem[] = [
  {
    icon: 'check_circle',
    title: 'Visión clara de tu generación',
    description: 'Sabes exactamente qué produces, cuánto y con qué frecuencia.',
  },
  {
    icon: 'trending_down',
    title: 'Identificación de fugas',
    description: 'Detectas puntos críticos que generan pérdidas invisibles en tu cadena operativa.',
  },
  {
    icon: 'recycling',
    title: 'Oportunidades reales de valorización',
    description: 'Descubres materiales que hoy cuestan, pero mañana pueden generar valor.',
  },
  {
    icon: 'fact_check',
    title: 'Auditorías sin estrés',
    description: 'Información técnica sólida para cumplir y demostrar ante cualquier entidad.',
  },
]

export const empresaStats: StatItem[] = [
  { value: '80%', label: 'Ahorro Máximo', highlight: true },
  { value: '100%', label: 'Data real', highlight: false },
  { value: '0', label: 'Estimaciones', highlight: false },
  { value: '24/7', label: 'Trazabilidad', highlight: true },
]
