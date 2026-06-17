export interface PilarItem {
  icon: string
  title: string
  description: string
}

export interface BeneficioItem {
  icon: string
  title: string
  description: string
  destacado?: boolean
}

export interface CasoExitoItem {
  pdfIcon: string
  title: string
  pdfUrl: string
}

export const pilares: PilarItem[] = [
  {
    icon: 'biotech',
    title: 'ANÁLISIS TÉCNICO Y TOMA DE MUESTRAS',
    description: 'Evaluación científica, ensayos acreditados y diagnóstico real del residuo para determinar su composición exacta.',
  },
  {
    icon: 'description',
    title: 'ELABORACIÓN DE EXPEDIENTE + MEMORIA',
    description: 'Documentación completa y sustentada bajo normativas vigentes para presentar ante el MINAM.',
  },
  {
    icon: 'account_balance',
    title: 'GESTIÓN TOTAL DEL TRÁMITE ANTE MINAM',
    description: 'Nos encargamos de todo: seguimiento, respuestas a observaciones y obtención de la resolución final.',
  },
]

export const beneficios: BeneficioItem[] = [
  {
    icon: 'check_circle',
    title: 'Control total',
    description: 'Gana control sobre la trazabilidad y disposición de sus residuos.',
  },
  {
    icon: 'check_circle',
    title: 'Transparencia',
    description: 'Gana transparencia y claridad técnica ante auditorías internas y externas.',
  },
  {
    icon: 'check_circle',
    title: 'Reputación ESG',
    description: 'Gana reputación ambiental real con un enfoque sólido en criterios ESG.',
  },
  {
    icon: 'check_circle',
    title: 'Eficiencia',
    description: 'Gana eficiencia operativa inmediata reduciendo costos logísticos.',
  },
  {
    icon: 'trending_up',
    title: 'Capacidad de Negociación',
    description: 'Gana capacidad de negociación con operadores de residuos y reguladores.',
    destacado: true,
  },
]

export const casosExito: CasoExitoItem[] = [
  { pdfIcon: 'picture_as_pdf', title: 'INFORME N° 00421-2025-MINAM/VMGA/DGCA/DCCSQ - UM. ANDAYCHAGUA', pdfUrl: '/docs/pdf/1-UNIDO%202025093329%20CARTA%20N%C2%BA%2000482-2025-MINAM-VMGA-DGCA.pdf' },
  { pdfIcon: 'picture_as_pdf', title: 'INFORME N° 00221-2025-MINAM/VMGA/DGCA/DCCSQ UM. CHUNGAR', pdfUrl: '/docs/pdf/2-2025039290-Informe-CHUNGAR.pdf' },
  { pdfIcon: 'picture_as_pdf', title: 'INFORME N° 00173-2023-MINAM/VMGA/DGCA/DCCSQ UM. AMERICANA', pdfUrl: '/docs/pdf/3-C-217-2023-DGCA-ALPAYANA-2023201962.pdf' },
  { pdfIcon: 'picture_as_pdf', title: 'INFORME-000086-2026-VMGA-DGCA-DCCSQ UM. LOS QUENUALES', pdfUrl: '/docs/pdf/4-INFORME-000086-2026-VMGA-DGCA-DCCSQ.pdf' },
]
