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

export const complianceItems: ComplianceItem[] = [
  {
    icon: 'recycling',
    title: 'D.L. 1278 + Reglamentos 014-2017-MINAM y 001-2022-MINAM',
    description: 'Valida nuestra gestión de residuos municipales y no municipales con total transparencia técnica.',
    pdfUrl: '#',
  },
  {
    icon: 'medical_services',
    title: 'NTS 144 – MINSA – DIGESA (2018)',
    description: 'Garantiza gestión segura en establecimientos de salud y sectores médicos altamente regulados.',
    pdfUrl: '#',
  },
  {
    icon: 'construction',
    title: 'D.S. 002-2022-VIVIENDA (RCD)',
    description: 'Respaldo legal integral para residuos de construcción y demolición en proyectos de infraestructura.',
    pdfUrl: '#',
  },
  {
    icon: 'devices',
    title: 'D.S. 009-2019-MINAM (RAEE)',
    description: 'Permite manejo especializado de residuos eléctricos y electrónicos bajo estándares de economía circular.',
    pdfUrl: '#',
  },
  {
    icon: 'agriculture',
    title: 'D.S. 016-2012-AG (Sector Agrario)',
    description: 'Cubre residuos generados en actividades agrícolas y agroindustriales con enfoque en bioseguridad.',
    pdfUrl: '#',
  },
  {
    icon: 'water_drop',
    title: 'R.M. 128-2017-VIVIENDA (Lodos)',
    description: 'Marco técnico riguroso para el manejo y disposición final de lodos industriales y de saneamiento.',
    pdfUrl: '#',
  },
]

export const logisticas: LogisticaItem[] = [
  {
    icon: 'local_shipping',
    title: 'Autorización del MTC',
    description: 'Permite operaciones logísticas y traslados seguros vinculados a la gestión de residuos en territorio nacional.',
    pdfUrl: '#',
  },
  {
    icon: 'anchor',
    title: 'Licencia Portuaria – Callao / Chancay',
    description: 'Habilita operaciones especializadas en zona portuaria y rutas marítimas estratégicas.',
    pdfUrl: '#',
  },
  {
    icon: 'directions_boat',
    title: 'Licencia Portuaria – Paita',
    description: 'Amplía nuestra cobertura logística integral en la región norte para servicios de exportación y gestión marítima.',
    pdfUrl: '#',
  },
]

export const homologaciones: HomologacionItem[] = [
  { icon: 'nearby', title: 'RESIDUOS SÓLIDOS PELIGROSOS Y NO PELIGROSOS', pdfUrl: '#' },
  { icon: 'assessment', title: 'SERVICIO DE CONSULTORIA AMBIENTAL', pdfUrl: '#' },
  { icon: 'phishing', title: 'PESCA INDUSTRIAL, ARTESANAL Y DEPORTIVA', pdfUrl: '#' },
]
