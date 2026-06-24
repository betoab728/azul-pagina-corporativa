import type { SupportedLocale } from '../i18n/utils'

export interface ComplianceItem {
  icon: string
  title: string
  description: string
  pdfUrl: string
}

export interface LogisticaItem {
  icon: string
  title: string
  description: string
  pdfUrl: string
}

export interface HomologacionItem {
  icon: string
  title: string
  pdfUrl: string
}

const complianceItemsByLocale: Record<SupportedLocale, ComplianceItem[]> = {
  es: [
    {
      icon: 'recycling',
      title: 'D.L. 1278 + Reglamentos 014-2017-MINAM y 001-2022-MINAM',
      description: 'Valida nuestra gestión de residuos municipales y no municipales con total transparencia técnica.',
      pdfUrl: '/docs/pdf/acreditaciones/1-D.L.-1278-Reglamento-N%C2%B0-014-2017-MINAM-y-Reglamento-N%C2%B0001-2022-MINAM.pdf',
    },
    {
      icon: 'medical_services',
      title: 'NTS 144 – MINSA – DIGESA (2018)',
      description: 'Garantiza gestión segura en establecimientos de salud y sectores médicos altamente regulados.',
      pdfUrl: '/docs/pdf/acreditaciones/2-NTS-144-MINSA-2018-DIGESA.pdf',
    },
    {
      icon: 'construction',
      title: 'D.S. 002-2022-VIVIENDA (RCD)',
      description: 'Respaldo legal integral para residuos de construcción y demolición en proyectos de infraestructura.',
      pdfUrl: '/docs/pdf/acreditaciones/3-D.S.-002-2022-VIVIENDA.pdf',
    },
    {
      icon: 'devices',
      title: 'D.S. 009-2019-MINAM (RAEE)',
      description: 'Permite manejo especializado de residuos eléctricos y electrónicos bajo estándares de economía circular.',
      pdfUrl: '/docs/pdf/acreditaciones/4-009-2019-minam.pdf',
    },
    {
      icon: 'agriculture',
      title: 'D.S. 016-2012-AG (Sector Agrario)',
      description: 'Cubre residuos generados en actividades agrícolas y agroindustriales con enfoque en bioseguridad.',
      pdfUrl: '/docs/pdf/acreditaciones/5-016-2012-ag.pdf',
    },
    {
      icon: 'water_drop',
      title: 'R.M. 128-2017-VIVIENDA (Lodos)',
      description: 'Marco técnico riguroso para el manejo y disposición final de lodos industriales y de saneamiento.',
      pdfUrl: '/docs/pdf/acreditaciones/6-RM_128-2017-VIVIENDA.pdf',
    },
  ],
  en: [],
  pt: [],
}

const logisticasByLocale: Record<SupportedLocale, LogisticaItem[]> = {
  es: [
    {
      icon: 'local_shipping',
      title: 'Autorización del MTC',
      description: 'Permite operaciones logísticas y traslados seguros vinculados a la gestión de residuos en territorio nacional.',
      pdfUrl: '/docs/pdf/licencias/1-mtc.pdf',
    },
    {
      icon: 'anchor',
      title: 'Licencia Portuaria – Callao / Chancay',
      description: 'Habilita operaciones especializadas en zona portuaria y rutas marítimas estratégicas.',
      pdfUrl: '/docs/pdf/licencias/2-003-2024-APN-GG-SRR.pdf',
    },
    {
      icon: 'directions_boat',
      title: 'Licencia Portuaria – Paita',
      description: 'Amplía nuestra cobertura logística integral en la región norte para servicios de exportación y gestión marítima.',
      pdfUrl: '/docs/pdf/licencias/3-005-2024-APN-GG-SRR.pdf',
    },
  ],
  en: [],
  pt: [],
}

const homologacionesByLocale: Record<SupportedLocale, HomologacionItem[]> = {
  es: [
    { icon: 'nearby', title: 'RESIDUOS SÓLIDOS PELIGROSOS Y NO PELIGROSOS', pdfUrl: '/docs/pdf/homologaciones/1-CERTIFICADO-HOMOLOGACION-2025-RESIDUOS-SOLIDOS-PELIGROSOS-Y-NO-PELIGROSOS.pdf' },
    { icon: 'assessment', title: 'SERVICIO DE CONSULTORIA AMBIENTAL', pdfUrl: '/docs/pdf/homologaciones/2-CERTIFICADO-HOMOLOGACION-2025-MINERO.pdf' },
    { icon: 'phishing', title: 'PESCA INDUSTRIAL, ARTESANAL Y DEPORTIVA', pdfUrl: '/docs/pdf/homologaciones/3-CERTIFICADO-HOMOLOGACION-2025-PESCA-INDUSTRIAL-ARTESANAL-Y-DEPORTIVA.pdf' },
  ],
  en: [],
  pt: [],
}

export const getComplianceItems = (locale: SupportedLocale): ComplianceItem[] =>
  complianceItemsByLocale[locale].length > 0 ? complianceItemsByLocale[locale] : complianceItemsByLocale.es

export const getLogisticas = (locale: SupportedLocale): LogisticaItem[] =>
  logisticasByLocale[locale].length > 0 ? logisticasByLocale[locale] : logisticasByLocale.es

export const getHomologaciones = (locale: SupportedLocale): HomologacionItem[] =>
  homologacionesByLocale[locale].length > 0 ? homologacionesByLocale[locale] : homologacionesByLocale.es

// Backward-compat — remove after Phase 3
export const complianceItems = complianceItemsByLocale.es
export const logisticas = logisticasByLocale.es
export const homologaciones = homologacionesByLocale.es
