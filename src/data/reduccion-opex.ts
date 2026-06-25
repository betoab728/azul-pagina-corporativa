import type { SupportedLocale } from '../i18n/utils'

export interface FugaItem {
  icon: string
  title: string
  description: string
}

export interface MetodologiaItem {
  icon: string
  title: string
  description: string
}

export interface EntregableItem {
  number: string
  title: string
  description: string
}

export interface BeneficioItem {
  icon: string
  title: string
  description: string
}

const fugasByLocale: Record<SupportedLocale, FugaItem[]> = {
  es: [
    { icon: 'warning', title: 'Fugas de Espacio', description: 'Espacios productivos ocupados por residuos innecesarios.' },
    { icon: 'inventory_2', title: 'Exceso de Almacenamiento', description: 'Costos operativos de mantenimiento y control de inventarios.' },
    { icon: 'local_shipping', title: 'Transporte Innecesario', description: 'Logística deficiente que infla el gasto mensual.' },
    { icon: 'payments', title: 'Costos Elevados', description: 'Tarifas de disposición final superiores a las de mercado.' },
  ],
  en: [
    { icon: 'warning', title: 'Space Leaks', description: 'Productive spaces occupied by unnecessary waste.' },
    { icon: 'inventory_2', title: 'Excess Storage', description: 'Operational costs of inventory maintenance and control.' },
    { icon: 'local_shipping', title: 'Unnecessary Transport', description: 'Inefficient logistics that inflate monthly expenses.' },
    { icon: 'payments', title: 'High Costs', description: 'Final disposal fees above market rates.' },
  ],
  pt: [
    { icon: 'warning', title: 'Vazamentos de Espaço', description: 'Espaços produtivos ocupados por resíduos desnecessários.' },
    { icon: 'inventory_2', title: 'Excesso de Armazenamento', description: 'Custos operacionais de manutenção e controle de inventários.' },
    { icon: 'local_shipping', title: 'Transporte Desnecessário', description: 'Logística ineficiente que infla o gasto mensal.' },
    { icon: 'payments', title: 'Custos Elevados', description: 'Tarifas de disposição final acima das de mercado.' },
  ],
}

const metodologiaItemsByLocale: Record<SupportedLocale, MetodologiaItem[]> = {
  es: [
    { icon: 'foundation', title: 'Infraestructura', description: 'Análisis de almacenes y estaciones de transferencia.' },
    { icon: 'sync_alt', title: 'Flujos Internos', description: 'Mapeo del movimiento de residuos desde el origen.' },
    { icon: 'schedule', title: 'Permanencia', description: 'Control de tiempos de almacenamiento y rotación.' },
    { icon: 'recycling', title: 'Valorización', description: 'Potencial de reciclaje y venta de subproductos.' },
    { icon: 'fact_check', title: 'Reclasificación', description: 'Optimización de tipos de residuos según normativa.' },
    { icon: 'insights', title: 'Indicadores', description: 'Métricas de desempeño y KPI de costos reales.' },
    { icon: 'report_problem', title: 'Riesgos', description: 'Identificación de pasivos y vulnerabilidades legales.' },
    { icon: 'analytics', title: 'Costos Asociados', description: 'Auditoría de facturación y gastos operativos.' },
  ],
  en: [
    { icon: 'foundation', title: 'Infrastructure', description: 'Analysis of warehouses and transfer stations.' },
    { icon: 'sync_alt', title: 'Internal Flows', description: 'Mapping of waste movement from the source.' },
    { icon: 'schedule', title: 'Permanence', description: 'Control of storage and rotation times.' },
    { icon: 'recycling', title: 'Valorization', description: 'Recycling potential and sale of by-products.' },
    { icon: 'fact_check', title: 'Reclassification', description: 'Optimization of waste types according to regulations.' },
    { icon: 'insights', title: 'Indicators', description: 'Performance metrics and real cost KPIs.' },
    { icon: 'report_problem', title: 'Risks', description: 'Identification of liabilities and legal vulnerabilities.' },
    { icon: 'analytics', title: 'Associated Costs', description: 'Audit of billing and operational expenses.' },
  ],
  pt: [
    { icon: 'foundation', title: 'Infraestrutura', description: 'Análise de armazéns e estações de transferência.' },
    { icon: 'sync_alt', title: 'Fluxos Internos', description: 'Mapeamento do movimento de resíduos desde a origem.' },
    { icon: 'schedule', title: 'Permanência', description: 'Controle de tempos de armazenamento e rotação.' },
    { icon: 'recycling', title: 'Valorização', description: 'Potencial de reciclagem e venda de subprodutos.' },
    { icon: 'fact_check', title: 'Reclassificação', description: 'Otimização de tipos de resíduos conforme normativa.' },
    { icon: 'insights', title: 'Indicadores', description: 'Métricas de desempenho e KPIs de custos reais.' },
    { icon: 'report_problem', title: 'Riscos', description: 'Identificação de passivos e vulnerabilidades legais.' },
    { icon: 'analytics', title: 'Custos Associados', description: 'Auditoria de faturamento e gastos operacionais.' },
  ],
}

const entregablesByLocale: Record<SupportedLocale, EntregableItem[]> = {
  es: [
    { number: '01', title: 'Informe Ejecutivo de OPEX Ambiental', description: 'Visión macro de los costos actuales y el potencial de ahorro inmediato validado con datos reales.' },
    { number: '02', title: 'Mapa de Fugas Económicas', description: 'Visualización geográfica e industrial de dónde se está desperdiciando presupuesto operativo.' },
    { number: '03', title: 'Diagnóstico de Infraestructura', description: 'Evaluación técnica del estado y capacidad de sus almacenes de residuos peligrosos y no peligrosos.' },
    { number: '04', title: 'Mapa de Valorización', description: 'Identificación de flujos de residuos que pueden convertirse en ingresos mediante economía circular.' },
    { number: '05', title: 'Madurez Operacional', description: 'Calificación del equipo interno y procesos frente a las mejores prácticas de la industria.' },
    { number: '06', title: 'Roadmap de Optimización', description: 'Cronograma paso a paso de las acciones correctivas y preventivas para reducir el OPEX ambiental.' },
  ],
  en: [
    { number: '01', title: 'Environmental OPEX Executive Report', description: 'Macro view of current costs and immediate savings potential validated with real data.' },
    { number: '02', title: 'Economic Leakage Map', description: 'Geographic and industrial visualization of where operational budget is being wasted.' },
    { number: '03', title: 'Infrastructure Diagnosis', description: 'Technical assessment of the state and capacity of your hazardous and non-hazardous waste warehouses.' },
    { number: '04', title: 'Valorization Map', description: 'Identification of waste streams that can become revenue through circular economy.' },
    { number: '05', title: 'Operational Maturity', description: 'Rating of internal team and processes against industry best practices.' },
    { number: '06', title: 'Optimization Roadmap', description: 'Step-by-step schedule of corrective and preventive actions to reduce environmental OPEX.' },
  ],
  pt: [
    { number: '01', title: 'Relatório Executivo de OPEX Ambiental', description: 'Visão macro dos custos atuais e potencial de economia imediata validado com dados reais.' },
    { number: '02', title: 'Mapa de Vazamentos Econômicos', description: 'Visualização geográfica e industrial de onde o orçamento operacional está sendo desperdiçado.' },
    { number: '03', title: 'Diagnóstico de Infraestrutura', description: 'Avaliação técnica do estado e capacidade dos seus armazéns de resíduos perigosos e não perigosos.' },
    { number: '04', title: 'Mapa de Valorização', description: 'Identificação de fluxos de resíduos que podem se tornar receita através da economia circular.' },
    { number: '05', title: 'Maturidade Operacional', description: 'Classificação da equipe interna e processos em relação às melhores práticas da indústria.' },
    { number: '06', title: 'Roadmap de Otimização', description: 'Cronograma passo a passo das ações corretivas e preventivas para reduzir o OPEX ambiental.' },
  ],
}

const beneficiosOPEXByLocale: Record<SupportedLocale, BeneficioItem[]> = {
  es: [
    { icon: 'trending_down', title: 'Menor OPEX Ambiental', description: 'Reducción directa en gastos logísticos y operativos.' },
    { icon: 'show_chart', title: 'Rentabilidad Operativa', description: 'Impacto positivo inmediato en el margen de utilidad.' },
    { icon: 'straighten', title: 'Espacio Productivo', description: 'Liberación de áreas críticas para la producción.' },
    { icon: 'security', title: 'Menor Riesgo', description: 'Mitigación de multas y pasivos ambientales.' },
    { icon: 'balance', title: 'Toma de Decisiones', description: 'Gestión basada en datos y KPIs precisos.' },
    { icon: 'potted_plant', title: 'Economía Circular', description: 'Alineación con estándares ESG internacionales.' },
  ],
  en: [
    { icon: 'trending_down', title: 'Lower Environmental OPEX', description: 'Direct reduction in logistics and operational expenses.' },
    { icon: 'show_chart', title: 'Operational Profitability', description: 'Immediate positive impact on profit margin.' },
    { icon: 'straighten', title: 'Productive Space', description: 'Release of critical areas for production.' },
    { icon: 'security', title: 'Reduced Risk', description: 'Mitigation of fines and environmental liabilities.' },
    { icon: 'balance', title: 'Decision Making', description: 'Data-driven management and precise KPIs.' },
    { icon: 'potted_plant', title: 'Circular Economy', description: 'Alignment with international ESG standards.' },
  ],
  pt: [
    { icon: 'trending_down', title: 'Menor OPEX Ambiental', description: 'Redução direta nos gastos logísticos e operacionais.' },
    { icon: 'show_chart', title: 'Rentabilidade Operacional', description: 'Impacto positivo imediato na margem de lucro.' },
    { icon: 'straighten', title: 'Espaço Produtivo', description: 'Liberação de áreas críticas para a produção.' },
    { icon: 'security', title: 'Menor Risco', description: 'Mitigação de multas e passivos ambientais.' },
    { icon: 'balance', title: 'Tomada de Decisões', description: 'Gestão baseada em dados e KPIs precisos.' },
    { icon: 'potted_plant', title: 'Economia Circular', description: 'Alinhamento com padrões ESG internacionais.' },
  ],

}

export const getFugas = (locale: SupportedLocale): FugaItem[] =>
  fugasByLocale[locale].length > 0 ? fugasByLocale[locale] : fugasByLocale.es

export const getMetodologiaItems = (locale: SupportedLocale): MetodologiaItem[] =>
  metodologiaItemsByLocale[locale].length > 0 ? metodologiaItemsByLocale[locale] : metodologiaItemsByLocale.es

export const getEntregables = (locale: SupportedLocale): EntregableItem[] =>
  entregablesByLocale[locale].length > 0 ? entregablesByLocale[locale] : entregablesByLocale.es

export const getBeneficiosOPEX = (locale: SupportedLocale): BeneficioItem[] =>
  beneficiosOPEXByLocale[locale].length > 0 ? beneficiosOPEXByLocale[locale] : beneficiosOPEXByLocale.es

// Backward-compat — remove after Phase 3
export const fugas = fugasByLocale.es
export const metodologiaItems = metodologiaItemsByLocale.es
export const entregables = entregablesByLocale.es
export const beneficiosOPEX = beneficiosOPEXByLocale.es
