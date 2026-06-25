import type { SupportedLocale } from '../i18n/utils'

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

const problemasByLocale: Record<SupportedLocale, ProblemItem[]> = {
  es: [
    { icon: 'money_off', title: 'Costos innecesarios', description: 'Gastos ocultos en gestión reactiva.' },
    { icon: 'layers_clear', title: 'Saturación de espacios', description: 'Mala disposición que frena la operación.' },
    { icon: 'local_shipping', title: 'Costos logísticos', description: 'Incremento por ineficiencia en traslados.' },
    { icon: 'warning', title: 'Riesgos operativos', description: 'Falta de estándares de seguridad.' },
  ],
  en: [
    { icon: 'money_off', title: 'Unnecessary costs', description: 'Hidden expenses in reactive management.' },
    { icon: 'layers_clear', title: 'Space saturation', description: 'Poor layout that hinders operations.' },
    { icon: 'local_shipping', title: 'Logistics costs', description: 'Increase due to transport inefficiency.' },
    { icon: 'warning', title: 'Operational risks', description: 'Lack of safety standards.' },
  ],
  pt: [
    { icon: 'money_off', title: 'Custos desnecessários', description: 'Gastos ocultos na gestão reativa.' },
    { icon: 'layers_clear', title: 'Saturação de espaços', description: 'Disposição ruim que freia a operação.' },
    { icon: 'local_shipping', title: 'Custos logísticos', description: 'Aumento por ineficiência nos transportes.' },
    { icon: 'warning', title: 'Riscos operacionais', description: 'Falta de padrões de segurança.' },
  ],
}

const bentoItemsByLocale: Record<SupportedLocale, BentoItem[]> = {
  es: [
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
  ],
  en: [
    { icon: 'architecture', iconStyle: 'primary-container', title: 'We Design Smart Infrastructures', description: 'We create optimized plans and layouts that comply with international regulations and facilitate the circular flow of materials.', variant: 'large' },
    { icon: 'inventory_2', iconStyle: 'primary', title: 'We Optimize Warehouses', description: 'Specialized management for hazardous and non-hazardous waste under strict safety protocols.', variant: 'dark' },
    { icon: 'precision_manufacturing', iconStyle: 'primary', title: 'Conditioning Areas', description: 'We implement compaction, shredding and packaging stations to maximize logistics.', variant: 'simple' },
    { icon: 'rule', iconStyle: 'secondary', title: 'We Standardize Processes', description: 'Development of SOPs (Standard Operating Procedures) and key performance indicators (KPIs).', variant: 'simple' },
    { icon: 'accessibility', iconStyle: 'primary', title: 'Traceability Tools', description: 'Integration of software for real-time tracking of the waste life cycle.', variant: 'simple' },
  ],
  pt: [
    { icon: 'architecture', iconStyle: 'primary-container', title: 'Projetamos Infraestruturas Inteligentes', description: 'Criamos planos e layouts otimizados que cumprem com normas internacionais e facilitam o fluxo circular de materiais.', variant: 'large' },
    { icon: 'inventory_2', iconStyle: 'primary', title: 'Otimizamos Armazéns', description: 'Gestão especializada para resíduos perigosos e não perigosos sob rigorosos protocolos de segurança.', variant: 'dark' },
    { icon: 'precision_manufacturing', iconStyle: 'primary', title: 'Áreas de Acondicionamento', description: 'Implementamos estações de compactação, trituração e embalagem para maximizar a logística.', variant: 'simple' },
    { icon: 'rule', iconStyle: 'secondary', title: 'Padronizamos Processos', description: 'Desenvolvimento de POPs (Procedimentos Operacionais Padrão) e indicadores chave de desempenho (KPIs).', variant: 'simple' },
    { icon: 'accessibility', iconStyle: 'primary', title: 'Ferramentas de Rastreabilidade', description: 'Integração de software para o monitoramento em tempo real do ciclo de vida do resíduo.', variant: 'simple' },
  ],
}

const valorItemsByLocale: Record<SupportedLocale, ValorItem[]> = {
  es: [
    { number: '01', title: 'Diagnóstico Integral', description: 'Radiografía completa de flujos, costos y brechas normativas.' },
    { number: '02', title: 'Diseño de Optimización', description: 'Propuesta técnica de ingeniería para el nuevo layout del almacén.' },
    { number: '03', title: 'Sistema de Indicadores', description: 'Dashboard para medir eficiencia, valorización y ahorros generados.' },
    { number: '04', title: 'Programa de Economía Circular', description: 'Estrategia para reinsertar materiales en la cadena de valor.' },
    { number: '05', title: 'Plan de Reducción de OPEX', description: 'Cronograma tangible de ahorros en costos operativos directos.' },
    { number: '06', title: 'Hoja de Ruta', description: 'Plan de implementación por fases para asegurar continuidad operativa.' },
  ],
  en: [
    { number: '01', title: 'Comprehensive Diagnosis', description: 'Complete x-ray of flows, costs and regulatory gaps.' },
    { number: '02', title: 'Optimization Design', description: 'Engineering technical proposal for the new warehouse layout.' },
    { number: '03', title: 'Indicator System', description: 'Dashboard to measure efficiency, valorization and generated savings.' },
    { number: '04', title: 'Circular Economy Program', description: 'Strategy to reintegrate materials into the value chain.' },
    { number: '05', title: 'OPEX Reduction Plan', description: 'Tangible schedule of savings in direct operational costs.' },
    { number: '06', title: 'Roadmap', description: 'Phased implementation plan to ensure operational continuity.' },
  ],
  pt: [
    { number: '01', title: 'Diagnóstico Integral', description: 'Radiografia completa de fluxos, custos e brechas normativas.' },
    { number: '02', title: 'Projeto de Otimização', description: 'Proposta técnica de engenharia para o novo layout do armazém.' },
    { number: '03', title: 'Sistema de Indicadores', description: 'Dashboard para medir eficiência, valorização e economias geradas.' },
    { number: '04', title: 'Programa de Economia Circular', description: 'Estratégia para reinserir materiais na cadeia de valor.' },
    { number: '05', title: 'Plano de Redução de OPEX', description: 'Cronograma tangível de economias em custos operacionais diretos.' },
    { number: '06', title: 'Roteiro', description: 'Plano de implementação por fases para garantir continuidade operacional.' },
  ],
}

const beneficiosAlmacenesByLocale: Record<SupportedLocale, BeneficioItem[]> = {
  es: [
    { icon: 'trending_down', title: 'Menos Costos' },
    { icon: 'aspect_ratio', title: 'Más Espacio' },
    { icon: 'eco', title: 'Más Valorización' },
    { icon: 'settings_suggest', title: 'Más Control' },
    { icon: 'verified', title: 'Más Cumplimiento' },
    { icon: 'payments', title: 'Más Rentabilidad' },
  ],
  en: [
    { icon: 'trending_down', title: 'Lower Costs' },
    { icon: 'aspect_ratio', title: 'More Space' },
    { icon: 'eco', title: 'More Valorization' },
    { icon: 'settings_suggest', title: 'More Control' },
    { icon: 'verified', title: 'More Compliance' },
    { icon: 'payments', title: 'More Profitability' },
  ],
  pt: [
    { icon: 'trending_down', title: 'Menos Custos' },
    { icon: 'aspect_ratio', title: 'Mais Espaço' },
    { icon: 'eco', title: 'Mais Valorização' },
    { icon: 'settings_suggest', title: 'Mais Controle' },
    { icon: 'verified', title: 'Mais Conformidade' },
    { icon: 'payments', title: 'Mais Rentabilidade' },
  ],

}

export const getProblemas = (locale: SupportedLocale): ProblemItem[] =>
  problemasByLocale[locale].length > 0 ? problemasByLocale[locale] : problemasByLocale.es

export const getBentoItems = (locale: SupportedLocale): BentoItem[] =>
  bentoItemsByLocale[locale].length > 0 ? bentoItemsByLocale[locale] : bentoItemsByLocale.es

export const getValorItems = (locale: SupportedLocale): ValorItem[] =>
  valorItemsByLocale[locale].length > 0 ? valorItemsByLocale[locale] : valorItemsByLocale.es

export const getBeneficiosAlmacenes = (locale: SupportedLocale): BeneficioItem[] =>
  beneficiosAlmacenesByLocale[locale].length > 0 ? beneficiosAlmacenesByLocale[locale] : beneficiosAlmacenesByLocale.es

// Backward-compat — remove after Phase 3
export const problemas = problemasByLocale.es
export const bentoItems = bentoItemsByLocale.es
export const valorItems = valorItemsByLocale.es
export const beneficiosAlmacenes = beneficiosAlmacenesByLocale.es
