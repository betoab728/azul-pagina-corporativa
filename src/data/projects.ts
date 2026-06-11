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
const placeholder = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0_x5R3n88746zC_YpS1gI8W0M4F3zI6kL8S2T9W4R7P5Q3M2L1K0O9I8H7G6F5E4D3C2B1A'

export const projects: Project[] = [
  {
    image: '/gestion.jpeg',
    imageAlt: 'Gestión integral de residuos peligrosos en sector minero',
    sector: 'Sector minero',
    sectorColor: 'primary',
    title: 'Gestión integral de residuos peligrosos',
    description: 'Reducimos en 30% la generación de residuos peligrosos.',
    href: '#',
  },
  {
    image: '/industrial.jpeg',
    imageAlt: 'Planta de tratamiento de aguas residuales industrial',
    sector: 'Industrial',
    sectorColor: 'secondary',
    title: 'PTAR y reúso de agua industrial',
    description: 'Implementación de sistema con 90% de eficiencia.',
    href: '#',
  },
  {
    image: '/salud.jpeg',
    imageAlt: 'Manejo de residuos biocontaminados en sector salud',
    sector: 'Salud',
    sectorColor: 'primary',
    title: 'Manejo de residuos biocontaminados',
    description: 'Trazabilidad 100% segura y cumplimiento normativo.',
    href: '#',
  },
]

export const whyChooseUs = [
  'Experiencia local con visión global',
  'Compromiso real con el medio ambiente',
  'Soluciones innovadoras y efectivas',
  'Acompañamiento personalizado',
  'Resultados medibles y sostenibles',
]
