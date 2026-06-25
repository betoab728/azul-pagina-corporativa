import type { SupportedLocale } from '../i18n/utils'

export interface Project {
  image: string
  imageAlt: string
  sector: string
  sectorColor: 'primary' | 'secondary'
  title: string
  description: string
  href: string
}

// TODO: Reemplazar imágenes placeholder con imágenes reales del cliente
const projectsByLocale: Record<SupportedLocale, Project[]> = {
  es: [
    {
      image: '/gestion.jpeg',
      imageAlt: 'Gestión integral de residuos peligrosos en sector minero',
      sector: 'Sector minero',
      sectorColor: 'primary',
      title: 'Gestión integral de residuos peligrosos',
      description: 'Reducimos en 30% la generación de residuos peligrosos.',
      href: '/proyectos',
    },
    {
      image: '/industrial.jpeg',
      imageAlt: 'Planta de tratamiento de aguas residuales industrial',
      sector: 'Industrial',
      sectorColor: 'secondary',
      title: 'PTAR y reúso de agua industrial',
      description: 'Implementación de sistema con 90% de eficiencia.',
      href: '/proyectos',
    },
    {
      image: '/salud.jpeg',
      imageAlt: 'Manejo de residuos biocontaminados en sector salud',
      sector: 'Salud',
      sectorColor: 'primary',
      title: 'Manejo de residuos biocontaminados',
      description: 'Trazabilidad 100% segura y cumplimiento normativo.',
      href: '/proyectos',
    },
  ],

  // ── EN ────────────────────────────────────────────────────────
  en: [
    {
      image: '/gestion.jpeg',
      imageAlt: 'Comprehensive hazardous waste management in the mining sector',
      sector: 'Mining sector',
      sectorColor: 'primary',
      title: 'Comprehensive hazardous waste management',
      description: 'We reduced hazardous waste generation by 30%.',
      href: '/en/proyectos',
    },
    {
      image: '/industrial.jpeg',
      imageAlt: 'Industrial wastewater treatment plant',
      sector: 'Industrial',
      sectorColor: 'secondary',
      title: 'WWTP and industrial water reuse',
      description: 'System implementation with 90% efficiency.',
      href: '/en/proyectos',
    },
    {
      image: '/salud.jpeg',
      imageAlt: 'Biocontaminated waste management in the healthcare sector',
      sector: 'Healthcare',
      sectorColor: 'primary',
      title: 'Biocontaminated waste management',
      description: '100% safe traceability and regulatory compliance.',
      href: '/en/proyectos',
    },
  ],
  pt: [
    {
      image: '/gestion.jpeg',
      imageAlt: 'Gestão integral de resíduos perigosos no setor de mineração',
      sector: 'Setor de mineração',
      sectorColor: 'primary',
      title: 'Gestão integral de resíduos perigosos',
      description: 'Reduzimos em 30% a geração de resíduos perigosos.',
      href: '/pt/proyectos',
    },
    {
      image: '/industrial.jpeg',
      imageAlt: 'Planta de tratamento de águas residuais industrial',
      sector: 'Industrial',
      sectorColor: 'secondary',
      title: 'ETE e reúso de água industrial',
      description: 'Implementação de sistema com 90% de eficiência.',
      href: '/pt/proyectos',
    },
    {
      image: '/salud.jpeg',
      imageAlt: 'Gestão de resíduos biocontaminados no setor de saúde',
      sector: 'Saúde',
      sectorColor: 'primary',
      title: 'Gestão de resíduos biocontaminados',
      description: 'Rastreabilidade 100% segura e conformidade regulatória.',
      href: '/pt/proyectos',
    },
  ],
}

const whyChooseUsByLocale: Record<SupportedLocale, string[]> = {
  es: [
    'Experiencia local con visión global',
    'Compromiso real con el medio ambiente',
    'Soluciones innovadoras y efectivas',
    'Acompañamiento personalizado',
    'Resultados medibles y sostenibles',
  ],
  en: [
    'Local expertise with a global vision',
    'Genuine commitment to the environment',
    'Innovative and effective solutions',
    'Personalized support',
    'Measurable and sustainable results',
  ],
  pt: [
    'Experiência local com visão global',
    'Compromisso real com o meio ambiente',
    'Soluções inovadoras e eficazes',
    'Acompanhamento personalizado',
    'Resultados mensuráveis e sustentáveis',
  ],
}

export const getProjects = (locale: SupportedLocale): Project[] =>
  projectsByLocale[locale].length > 0 ? projectsByLocale[locale] : projectsByLocale.es

export const getWhyChooseUs = (locale: SupportedLocale): string[] =>
  whyChooseUsByLocale[locale].length > 0 ? whyChooseUsByLocale[locale] : whyChooseUsByLocale.es

// Backward-compat — remove after Phase 3
export const projects = projectsByLocale.es
export const whyChooseUs = whyChooseUsByLocale.es
