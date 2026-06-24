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
  en: [],
  pt: [],
}

const whyChooseUsByLocale: Record<SupportedLocale, string[]> = {
  es: [
    'Experiencia local con visión global',
    'Compromiso real con el medio ambiente',
    'Soluciones innovadoras y efectivas',
    'Acompañamiento personalizado',
    'Resultados medibles y sostenibles',
  ],
  en: [],
  pt: [],
}

export const getProjects = (locale: SupportedLocale): Project[] =>
  projectsByLocale[locale].length > 0 ? projectsByLocale[locale] : projectsByLocale.es

export const getWhyChooseUs = (locale: SupportedLocale): string[] =>
  whyChooseUsByLocale[locale].length > 0 ? whyChooseUsByLocale[locale] : whyChooseUsByLocale.es

// Backward-compat — remove after Phase 3
export const projects = projectsByLocale.es
export const whyChooseUs = whyChooseUsByLocale.es
