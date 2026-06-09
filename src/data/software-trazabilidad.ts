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

export const fases: FaseItem[] = [
  { icon: 'sensors', title: 'Generación', description: 'Registro inicial preciso.' },
  { icon: 'inventory_2', title: 'Almacenamiento', description: 'Control de stocks temporales.' },
  { icon: 'local_shipping', title: 'Transporte', description: 'Monitoreo de rutas y tiempos.' },
  { icon: 'recycling', title: 'Valorización', description: 'Transformación sostenible.' },
]

export const beneficios: BeneficioItem[] = [
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
]
