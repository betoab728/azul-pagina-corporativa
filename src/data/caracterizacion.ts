import type { SupportedLocale } from '../i18n/utils'

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

export interface ProcesoItemDestacado {
  icon: string
  title: string
  description: string
  footerIcon: string
  footerText: string
}

const procesoItemsByLocale: Record<SupportedLocale, ProcesoItem[]> = {
  es: [
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
  ],
  en: [],
  pt: [],
}

const procesoItemDestacadoByLocale: Record<SupportedLocale, ProcesoItemDestacado | null> = {
  es: {
    icon: 'description',
    title: 'Informe profesional y mejoras',
    description: 'Resultados claros, visuales y listos para auditorías, fiscalización y planificación estratégica.',
    footerIcon: 'verified',
    footerText: 'Válido para fiscalización',
  },
  en: {
    icon: 'description',
    title: 'Professional report and improvements',
    description: 'Clear, visual results ready for audits, inspections and strategic planning.',
    footerIcon: 'verified',
    footerText: 'Valid for inspection',
  },
  pt: {
    icon: 'description',
    title: 'Relatório profissional e melhorias',
    description: 'Resultados claros, visuais e prontos para auditorias, fiscalização e planejamento estratégico.',
    footerIcon: 'verified',
    footerText: 'Válido para fiscalização',
  },

}

const beneficiosByLocale: Record<SupportedLocale, BeneficioItem[]> = {
  es: [
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
  ],
  en: [
    {
      icon: 'check_circle',
      title: 'Clear view of your generation',
      description: 'You know exactly what you produce, how much and how often.',
    },
    {
      icon: 'trending_down',
      title: 'Leak identification',
      description: 'You detect critical points that generate invisible losses in your operational chain.',
    },
    {
      icon: 'recycling',
      title: 'Real valorization opportunities',
      description: 'You discover materials that cost money today, but can generate value tomorrow.',
    },
    {
      icon: 'fact_check',
      title: 'Stress-free audits',
      description: 'Solid technical information to comply and demonstrate before any entity.',
    },
  ],
  pt: [
    {
      icon: 'check_circle',
      title: 'Visão clara da sua geração',
      description: 'Você sabe exatamente o que produz, quanto e com que frequência.',
    },
    {
      icon: 'trending_down',
      title: 'Identificação de vazamentos',
      description: 'Você detecta pontos críticos que geram perdas invisíveis na sua cadeia operacional.',
    },
    {
      icon: 'recycling',
      title: 'Oportunidades reais de valorização',
      description: 'Você descobre materiais que hoje custam, mas amanhã podem gerar valor.',
    },
    {
      icon: 'fact_check',
      title: 'Auditorias sem estresse',
      description: 'Informação técnica sólida para cumprir e demonstrar perante qualquer entidade.',
    },
  ],
}

const empresaStatsByLocale: Record<SupportedLocale, StatItem[]> = {
  es: [
    { value: '80%', label: 'Ahorro Máximo', highlight: true },
    { value: '100%', label: 'Data real', highlight: false },
    { value: '0', label: 'Estimaciones', highlight: false },
    { value: '24/7', label: 'Trazabilidad', highlight: true },
  ],
  en: [
    { value: '80%', label: 'Maximum Savings', highlight: true },
    { value: '100%', label: 'Real Data', highlight: false },
    { value: '0', label: 'Estimates', highlight: false },
    { value: '24/7', label: 'Traceability', highlight: true },
  ],
  pt: [
    { value: '80%', label: 'Economia Máxima', highlight: true },
    { value: '100%', label: 'Dados Reais', highlight: false },
    { value: '0', label: 'Estimativas', highlight: false },
    { value: '24/7', label: 'Rastreabilidade', highlight: true },
  ],
}

export const getProcesoItems = (locale: SupportedLocale): ProcesoItem[] =>
  procesoItemsByLocale[locale].length > 0 ? procesoItemsByLocale[locale] : procesoItemsByLocale.es

export const getProcesoItemDestacado = (locale: SupportedLocale): ProcesoItemDestacado =>
  procesoItemDestacadoByLocale[locale] ?? procesoItemDestacadoByLocale.es!

export const getBeneficios = (locale: SupportedLocale): BeneficioItem[] =>
  beneficiosByLocale[locale].length > 0 ? beneficiosByLocale[locale] : beneficiosByLocale.es

export const getEmpresaStats = (locale: SupportedLocale): StatItem[] =>
  empresaStatsByLocale[locale].length > 0 ? empresaStatsByLocale[locale] : empresaStatsByLocale.es

// Backward-compat — remove after Phase 3
export const procesoItems = procesoItemsByLocale.es
export const procesoItemDestacado = procesoItemDestacadoByLocale.es!
export const beneficios = beneficiosByLocale.es
export const empresaStats = empresaStatsByLocale.es
