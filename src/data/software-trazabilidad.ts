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
  en: [
    { icon: 'sensors', title: 'Generation', description: 'Accurate initial recording.' },
    { icon: 'inventory_2', title: 'Storage', description: 'Temporary stock control.' },
    { icon: 'local_shipping', title: 'Transport', description: 'Route and time monitoring.' },
    { icon: 'recycling', title: 'Valorization', description: 'Sustainable transformation.' },
  ],
  pt: [
    { icon: 'sensors', title: 'Geração', description: 'Registro inicial preciso.' },
    { icon: 'inventory_2', title: 'Armazenamento', description: 'Controle de estoques temporários.' },
    { icon: 'local_shipping', title: 'Transporte', description: 'Monitoramento de rotas e tempos.' },
    { icon: 'recycling', title: 'Valorização', description: 'Transformação sustentável.' },
  ],
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
  en: [
    { icon: 'visibility', title: 'Transparency and real traceability', description: 'Access to truthful technical information in real time, without delays or intermediaries.', variant: 'white', span: 'md:col-span-3 lg:col-span-4' },
    { icon: 'workspace_premium', title: 'Verifiable environmental reputation', description: 'Solid digital evidence that surpasses any traditional paper report.', variant: 'white', span: 'md:col-span-3 lg:col-span-4' },
    { icon: 'bolt', title: 'Immediate operational efficiency', description: 'Drastic reduction of paperwork and elimination of manual processes that generate errors.', variant: 'dark', span: 'md:col-span-6 lg:col-span-4' },
    { icon: 'query_stats', title: 'Control over your waste', description: 'Full visibility on the what, how much, where and the exact cost of your waste management.', variant: 'white-box', span: 'md:col-span-3 lg:col-span-6' },
    { icon: 'assignment_turned_in', title: 'Environmental compliance', description: 'Information ready to report to SIGERSOL and other competent authorities without additional effort.', variant: 'green-box', span: 'md:col-span-3 lg:col-span-6' },
  ],
  pt: [
    { icon: 'visibility', title: 'Transparência e rastreabilidade real', description: 'Acesso a informações técnicas verídicas em tempo real, sem atrasos ou intermediários.', variant: 'white', span: 'md:col-span-3 lg:col-span-4' },
    { icon: 'workspace_premium', title: 'Reputação ambiental verificável', description: 'Evidência digital sólida que supera qualquer relatório em papel tradicional.', variant: 'white', span: 'md:col-span-3 lg:col-span-4' },
    { icon: 'bolt', title: 'Eficiência operacional imediata', description: 'Redução drástica de papelada e eliminação de processos manuais que geram erros.', variant: 'dark', span: 'md:col-span-6 lg:col-span-4' },
    { icon: 'query_stats', title: 'Controle sobre seus resíduos', description: 'Visibilidade total sobre o quê, quanto, onde e o custo exato da sua gestão de resíduos.', variant: 'white-box', span: 'md:col-span-3 lg:col-span-6' },
    { icon: 'assignment_turned_in', title: 'Conformidade ambiental', description: 'Informação pronta para reportar ao SIGERSOL e outras autoridades competentes sem esforço adicional.', variant: 'green-box', span: 'md:col-span-3 lg:col-span-6' },
  ],

}

export const getFases = (locale: SupportedLocale): FaseItem[] =>
  fasesByLocale[locale].length > 0 ? fasesByLocale[locale] : fasesByLocale.es

export const getBeneficios = (locale: SupportedLocale): BeneficioItem[] =>
  beneficiosByLocale[locale].length > 0 ? beneficiosByLocale[locale] : beneficiosByLocale.es

// Backward-compat — remove after Phase 3
export const fases = fasesByLocale.es
export const beneficios = beneficiosByLocale.es
