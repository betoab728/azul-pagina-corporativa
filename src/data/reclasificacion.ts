import type { SupportedLocale } from '../i18n/utils'

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

const pilaresByLocale: Record<SupportedLocale, PilarItem[]> = {
  es: [
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
  ],
  en: [
    {
      icon: 'biotech',
      title: 'TECHNICAL ANALYSIS AND SAMPLING',
      description: 'Scientific evaluation, accredited testing and real diagnosis of the waste to determine its exact composition.',
    },
    {
      icon: 'description',
      title: 'FILE PREPARATION + TECHNICAL REPORT',
      description: 'Complete documentation supported by current regulations for submission to MINAM.',
    },
    {
      icon: 'account_balance',
      title: 'FULL MINAM PROCEDURE MANAGEMENT',
      description: 'We handle everything: follow-up, responses to observations and obtaining the final resolution.',
    },
  ],
  pt: [
    {
      icon: 'biotech',
      title: 'ANÁLISE TÉCNICA E COLETA DE AMOSTRAS',
      description: 'Avaliação científica, ensaios acreditados e diagnóstico real do resíduo para determinar sua composição exata.',
    },
    {
      icon: 'description',
      title: 'ELABORAÇÃO DE DOSSIÊ + RELATÓRIO TÉCNICO',
      description: 'Documentação completa e fundamentada sob as normas vigentes para apresentação ao MINAM.',
    },
    {
      icon: 'account_balance',
      title: 'GESTÃO TOTAL DO TRÂMITE JUNTO AO MINAM',
      description: 'Cuidamos de tudo: acompanhamento, respostas a observações e obtenção da resolução final.',
    },
  ],
}

const beneficiosByLocale: Record<SupportedLocale, BeneficioItem[]> = {
  es: [
    { icon: 'check_circle', title: 'Control total', description: 'Gana control sobre la trazabilidad y disposición de sus residuos.' },
    { icon: 'check_circle', title: 'Transparencia', description: 'Gana transparencia y claridad técnica ante auditorías internas y externas.' },
    { icon: 'check_circle', title: 'Reputación ESG', description: 'Gana reputación ambiental real con un enfoque sólido en criterios ESG.' },
    { icon: 'check_circle', title: 'Eficiencia', description: 'Gana eficiencia operativa inmediata reduciendo costos logísticos.' },
    { icon: 'trending_up', title: 'Capacidad de Negociación', description: 'Gana capacidad de negociación con operadores de residuos y reguladores.', destacado: true },
  ],
  en: [
    { icon: 'check_circle', title: 'Total Control', description: 'Gain control over the traceability and disposal of your waste.' },
    { icon: 'check_circle', title: 'Transparency', description: 'Gain transparency and technical clarity for internal and external audits.' },
    { icon: 'check_circle', title: 'ESG Reputation', description: 'Gain real environmental reputation with a solid ESG criteria approach.' },
    { icon: 'check_circle', title: 'Efficiency', description: 'Gain immediate operational efficiency by reducing logistics costs.' },
    { icon: 'trending_up', title: 'Negotiation Capacity', description: 'Gain negotiation capacity with waste operators and regulators.', destacado: true },
  ],
  pt: [
    { icon: 'check_circle', title: 'Controle Total', description: 'Ganhe controle sobre a rastreabilidade e disposição dos seus resíduos.' },
    { icon: 'check_circle', title: 'Transparência', description: 'Ganhe transparência e clareza técnica perante auditorias internas e externas.' },
    { icon: 'check_circle', title: 'Reputação ESG', description: 'Ganhe reputação ambiental real com uma abordagem sólida em critérios ESG.' },
    { icon: 'check_circle', title: 'Eficiência', description: 'Ganhe eficiência operacional imediata reduzindo custos logísticos.' },
    { icon: 'trending_up', title: 'Capacidade de Negociação', description: 'Ganhe capacidade de negociação com operadores de resíduos e reguladores.', destacado: true },
  ],
}

const casosExitoByLocale: Record<SupportedLocale, CasoExitoItem[]> = {
  es: [
    { pdfIcon: 'picture_as_pdf', title: 'INFORME N° 00421-2025-MINAM/VMGA/DGCA/DCCSQ - UM. ANDAYCHAGUA', pdfUrl: '/docs/pdf/1-UNIDO%202025093329%20CARTA%20N%C2%BA%2000482-2025-MINAM-VMGA-DGCA.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'INFORME N° 00221-2025-MINAM/VMGA/DGCA/DCCSQ UM. CHUNGAR', pdfUrl: '/docs/pdf/2-2025039290-Informe-CHUNGAR.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'INFORME N° 00173-2023-MINAM/VMGA/DGCA/DCCSQ UM. AMERICANA', pdfUrl: '/docs/pdf/3-C-217-2023-DGCA-ALPAYANA-2023201962.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'INFORME-000086-2026-VMGA-DGCA-DCCSQ UM. LOS QUENUALES', pdfUrl: '/docs/pdf/4-INFORME-000086-2026-VMGA-DGCA-DCCSQ.pdf' },
  ],
  en: [
    { pdfIcon: 'picture_as_pdf', title: 'REPORT No. 00421-2025-MINAM/VMGA/DGCA/DCCSQ - UM. ANDAYCHAGUA', pdfUrl: '/docs/pdf/1-UNIDO%202025093329%20CARTA%20N%C2%BA%2000482-2025-MINAM-VMGA-DGCA.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'REPORT No. 00221-2025-MINAM/VMGA/DGCA/DCCSQ - UM. CHUNGAR', pdfUrl: '/docs/pdf/2-2025039290-Informe-CHUNGAR.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'REPORT No. 00173-2023-MINAM/VMGA/DGCA/DCCSQ - UM. AMERICANA', pdfUrl: '/docs/pdf/3-C-217-2023-DGCA-ALPAYANA-2023201962.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'REPORT-000086-2026-VMGA-DGCA-DCCSQ - UM. LOS QUENUALES', pdfUrl: '/docs/pdf/4-INFORME-000086-2026-VMGA-DGCA-DCCSQ.pdf' },
  ],
  pt: [
    { pdfIcon: 'picture_as_pdf', title: 'RELATÓRIO N° 00421-2025-MINAM/VMGA/DGCA/DCCSQ - UM. ANDAYCHAGUA', pdfUrl: '/docs/pdf/1-UNIDO%202025093329%20CARTA%20N%C2%BA%2000482-2025-MINAM-VMGA-DGCA.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'RELATÓRIO N° 00221-2025-MINAM/VMGA/DGCA/DCCSQ - UM. CHUNGAR', pdfUrl: '/docs/pdf/2-2025039290-Informe-CHUNGAR.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'RELATÓRIO N° 00173-2023-MINAM/VMGA/DGCA/DCCSQ - UM. AMERICANA', pdfUrl: '/docs/pdf/3-C-217-2023-DGCA-ALPAYANA-2023201962.pdf' },
    { pdfIcon: 'picture_as_pdf', title: 'RELATÓRIO-000086-2026-VMGA-DGCA-DCCSQ - UM. LOS QUENUALES', pdfUrl: '/docs/pdf/4-INFORME-000086-2026-VMGA-DGCA-DCCSQ.pdf' },
  ],

}

export const getPilares = (locale: SupportedLocale): PilarItem[] =>
  pilaresByLocale[locale].length > 0 ? pilaresByLocale[locale] : pilaresByLocale.es

export const getBeneficios = (locale: SupportedLocale): BeneficioItem[] =>
  beneficiosByLocale[locale].length > 0 ? beneficiosByLocale[locale] : beneficiosByLocale.es

export const getCasosExito = (locale: SupportedLocale): CasoExitoItem[] =>
  casosExitoByLocale[locale].length > 0 ? casosExitoByLocale[locale] : casosExitoByLocale.es

// Backward-compat — remove after Phase 3
export const pilares = pilaresByLocale.es
export const beneficios = beneficiosByLocale.es
export const casosExito = casosExitoByLocale.es
