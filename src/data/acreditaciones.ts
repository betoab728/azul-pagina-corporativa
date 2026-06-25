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
  en: [
    { icon: 'recycling', title: 'D.L. 1278 + Regulations 014-2017-MINAM and 001-2022-MINAM', description: 'Validates our municipal and non-municipal waste management with full technical transparency.', pdfUrl: '/docs/pdf/acreditaciones/1-D.L.-1278-Reglamento-N%C2%B0-014-2017-MINAM-y-Reglamento-N%C2%B0001-2022-MINAM.pdf' },
    { icon: 'medical_services', title: 'NTS 144 – MINSA – DIGESA (2018)', description: 'Guarantees safe management in healthcare facilities and highly regulated medical sectors.', pdfUrl: '/docs/pdf/acreditaciones/2-NTS-144-MINSA-2018-DIGESA.pdf' },
    { icon: 'construction', title: 'D.S. 002-2022-VIVIENDA (RCD)', description: 'Comprehensive legal support for construction and demolition waste in infrastructure projects.', pdfUrl: '/docs/pdf/acreditaciones/3-D.S.-002-2022-VIVIENDA.pdf' },
    { icon: 'devices', title: 'D.S. 009-2019-MINAM (WEEE)', description: 'Enables specialized handling of electrical and electronic waste under circular economy standards.', pdfUrl: '/docs/pdf/acreditaciones/4-009-2019-minam.pdf' },
    { icon: 'agriculture', title: 'D.S. 016-2012-AG (Agricultural Sector)', description: 'Covers waste generated in agricultural and agro-industrial activities with a biosafety approach.', pdfUrl: '/docs/pdf/acreditaciones/5-016-2012-ag.pdf' },
    { icon: 'water_drop', title: 'R.M. 128-2017-VIVIENDA (Sludge)', description: 'Rigorous technical framework for the management and final disposal of industrial and sanitation sludge.', pdfUrl: '/docs/pdf/acreditaciones/6-RM_128-2017-VIVIENDA.pdf' },
  ],
  pt: [
    { icon: 'recycling', title: 'D.L. 1278 + Regulamentos 014-2017-MINAM e 001-2022-MINAM', description: 'Valida nossa gestão de resíduos municipais e não municipais com total transparência técnica.', pdfUrl: '/docs/pdf/acreditaciones/1-D.L.-1278-Reglamento-N%C2%B0-014-2017-MINAM-y-Reglamento-N%C2%B0001-2022-MINAM.pdf' },
    { icon: 'medical_services', title: 'NTS 144 – MINSA – DIGESA (2018)', description: 'Garante gestão segura em estabelecimentos de saúde e setores médicos altamente regulados.', pdfUrl: '/docs/pdf/acreditaciones/2-NTS-144-MINSA-2018-DIGESA.pdf' },
    { icon: 'construction', title: 'D.S. 002-2022-VIVIENDA (RCD)', description: 'Suporte legal integral para resíduos de construção e demolição em projetos de infraestrutura.', pdfUrl: '/docs/pdf/acreditaciones/3-D.S.-002-2022-VIVIENDA.pdf' },
    { icon: 'devices', title: 'D.S. 009-2019-MINAM (REEE)', description: 'Permite o manuseio especializado de resíduos elétricos e eletrônicos sob padrões de economia circular.', pdfUrl: '/docs/pdf/acreditaciones/4-009-2019-minam.pdf' },
    { icon: 'agriculture', title: 'D.S. 016-2012-AG (Setor Agrícola)', description: 'Abrange resíduos gerados em atividades agrícolas e agroindustriais com foco em biossegurança.', pdfUrl: '/docs/pdf/acreditaciones/5-016-2012-ag.pdf' },
    { icon: 'water_drop', title: 'R.M. 128-2017-VIVIENDA (Lodos)', description: 'Marco técnico rigoroso para o gerenciamento e disposição final de lodos industriais e de saneamento.', pdfUrl: '/docs/pdf/acreditaciones/6-RM_128-2017-VIVIENDA.pdf' },
  ],
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
  en: [
    { icon: 'local_shipping', title: 'MTC Authorization', description: 'Enables logistics operations and safe transport linked to waste management nationwide.', pdfUrl: '/docs/pdf/licencias/1-mtc.pdf' },
    { icon: 'anchor', title: 'Port License – Callao / Chancay', description: 'Enables specialized operations in port areas and strategic maritime routes.', pdfUrl: '/docs/pdf/licencias/2-003-2024-APN-GG-SRR.pdf' },
    { icon: 'directions_boat', title: 'Port License – Paita', description: 'Extends our comprehensive logistics coverage in the northern region for export and maritime management services.', pdfUrl: '/docs/pdf/licencias/3-005-2024-APN-GG-SRR.pdf' },
  ],
  pt: [
    { icon: 'local_shipping', title: 'Autorização do MTC', description: 'Permite operações logísticas e transportes seguros vinculados à gestão de resíduos no território nacional.', pdfUrl: '/docs/pdf/licencias/1-mtc.pdf' },
    { icon: 'anchor', title: 'Licença Portuária – Callao / Chancay', description: 'Habilita operações especializadas na zona portuária e rotas marítimas estratégicas.', pdfUrl: '/docs/pdf/licencias/2-003-2024-APN-GG-SRR.pdf' },
    { icon: 'directions_boat', title: 'Licença Portuária – Paita', description: 'Amplia nossa cobertura logística integral na região norte para serviços de exportação e gestão marítima.', pdfUrl: '/docs/pdf/licencias/3-005-2024-APN-GG-SRR.pdf' },
  ],
}

const homologacionesByLocale: Record<SupportedLocale, HomologacionItem[]> = {
  es: [
    { icon: 'nearby', title: 'RESIDUOS SÓLIDOS PELIGROSOS Y NO PELIGROSOS', pdfUrl: '/docs/pdf/homologaciones/1-CERTIFICADO-HOMOLOGACION-2025-RESIDUOS-SOLIDOS-PELIGROSOS-Y-NO-PELIGROSOS.pdf' },
    { icon: 'assessment', title: 'SERVICIO DE CONSULTORIA AMBIENTAL', pdfUrl: '/docs/pdf/homologaciones/2-CERTIFICADO-HOMOLOGACION-2025-MINERO.pdf' },
    { icon: 'phishing', title: 'PESCA INDUSTRIAL, ARTESANAL Y DEPORTIVA', pdfUrl: '/docs/pdf/homologaciones/3-CERTIFICADO-HOMOLOGACION-2025-PESCA-INDUSTRIAL-ARTESANAL-Y-DEPORTIVA.pdf' },
  ],
  en: [
    { icon: 'nearby', title: 'HAZARDOUS AND NON-HAZARDOUS SOLID WASTE', pdfUrl: '/docs/pdf/homologaciones/1-CERTIFICADO-HOMOLOGACION-2025-RESIDUOS-SOLIDOS-PELIGROSOS-Y-NO-PELIGROSOS.pdf' },
    { icon: 'assessment', title: 'ENVIRONMENTAL CONSULTING SERVICE', pdfUrl: '/docs/pdf/homologaciones/2-CERTIFICADO-HOMOLOGACION-2025-MINERO.pdf' },
    { icon: 'phishing', title: 'INDUSTRIAL, ARTISANAL AND SPORT FISHING', pdfUrl: '/docs/pdf/homologaciones/3-CERTIFICADO-HOMOLOGACION-2025-PESCA-INDUSTRIAL-ARTESANAL-Y-DEPORTIVA.pdf' },
  ],
  pt: [
    { icon: 'nearby', title: 'RESÍDUOS SÓLIDOS PERIGOSOS E NÃO PERIGOSOS', pdfUrl: '/docs/pdf/homologaciones/1-CERTIFICADO-HOMOLOGACION-2025-RESIDUOS-SOLIDOS-PELIGROSOS-Y-NO-PELIGROSOS.pdf' },
    { icon: 'assessment', title: 'SERVIÇO DE CONSULTORIA AMBIENTAL', pdfUrl: '/docs/pdf/homologaciones/2-CERTIFICADO-HOMOLOGACION-2025-MINERO.pdf' },
    { icon: 'phishing', title: 'PESCA INDUSTRIAL, ARTESANAL E ESPORTIVA', pdfUrl: '/docs/pdf/homologaciones/3-CERTIFICADO-HOMOLOGACION-2025-PESCA-INDUSTRIAL-ARTESANAL-Y-DEPORTIVA.pdf' },
  ],
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
