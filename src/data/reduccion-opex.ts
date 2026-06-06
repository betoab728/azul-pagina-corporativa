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

export const fugas: FugaItem[] = [
  { icon: 'warning', title: 'Fugas de Espacio', description: 'Espacios productivos ocupados por residuos innecesarios.' },
  { icon: 'inventory_2', title: 'Exceso de Almacenamiento', description: 'Costos operativos de mantenimiento y control de inventarios.' },
  { icon: 'local_shipping', title: 'Transporte Innecesario', description: 'Logística deficiente que infla el gasto mensual.' },
  { icon: 'payments', title: 'Costos Elevados', description: 'Tarifas de disposición final superiores a las de mercado.' },
]

export const metodologiaItems: MetodologiaItem[] = [
  { icon: 'foundation', title: 'Infraestructura', description: 'Análisis de almacenes y estaciones de transferencia.' },
  { icon: 'sync_alt', title: 'Flujos Internos', description: 'Mapeo del movimiento de residuos desde el origen.' },
  { icon: 'schedule', title: 'Permanencia', description: 'Control de tiempos de almacenamiento y rotación.' },
  { icon: 'recycling', title: 'Valorización', description: 'Potencial de reciclaje y venta de subproductos.' },
  { icon: 'fact_check', title: 'Reclasificación', description: 'Optimización de tipos de residuos según normativa.' },
  { icon: 'insights', title: 'Indicadores', description: 'Métricas de desempeño y KPI de costos reales.' },
  { icon: 'report_problem', title: 'Riesgos', description: 'Identificación de pasivos y vulnerabilidades legales.' },
  { icon: 'analytics', title: 'Costos Asociados', description: 'Auditoría de facturación y gastos operativos.' },
]

export const entregables: EntregableItem[] = [
  { number: '01', title: 'Informe Ejecutivo de OPEX Ambiental', description: 'Visión macro de los costos actuales y el potencial de ahorro inmediato validado con datos reales.' },
  { number: '02', title: 'Mapa de Fugas Económicas', description: 'Visualización geográfica e industrial de dónde se está desperdiciando presupuesto operativo.' },
  { number: '03', title: 'Diagnóstico de Infraestructura', description: 'Evaluación técnica del estado y capacidad de sus almacenes de residuos peligrosos y no peligrosos.' },
  { number: '04', title: 'Mapa de Valorización', description: 'Identificación de flujos de residuos que pueden convertirse en ingresos mediante economía circular.' },
  { number: '05', title: 'Madurez Operacional', description: 'Calificación del equipo interno y procesos frente a las mejores prácticas de la industria.' },
  { number: '06', title: 'Roadmap de Optimización', description: 'Cronograma paso a paso de las acciones correctivas y preventivas para reducir el OPEX ambiental.' },
]

export const beneficiosOPEX: BeneficioItem[] = [
  { icon: 'trending_down', title: 'Menor OPEX Ambiental', description: 'Reducción directa en gastos logísticos y operativos.' },
  { icon: 'show_chart', title: 'Rentabilidad Operativa', description: 'Impacto positivo inmediato en el margen de utilidad.' },
  { icon: 'straighten', title: 'Espacio Productivo', description: 'Liberación de áreas críticas para la producción.' },
  { icon: 'security', title: 'Menor Riesgo', description: 'Mitigación de multas y pasivos ambientales.' },
  { icon: 'balance', title: 'Toma de Decisiones', description: 'Gestión basada en datos y KPIs precisos.' },
  { icon: 'potted_plant', title: 'Economía Circular', description: 'Alineación con estándares ESG internacionales.' },
]
