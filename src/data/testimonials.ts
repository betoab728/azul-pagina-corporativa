export interface Testimonial {
  quote: string
  authorName: string
  authorRole: string
  authorCompany: string
  authorImage: string
  rating: number
}

// TODO: Reemplazar imágenes placeholder con fotos reales
const placeholderAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2_x5R3n88746zC_YpS1gI8W0M4F3zI6kL8S2T9W4R7P5Q3M2L1K0O9I8H7G6F5E4D3C2B1A'

export const testimonials: Testimonial[] = [
  {
    quote: 'Azul Sostenible nos ayudó a cumplir la normativa y a optimizar nuestros procesos ambientales. Su equipo es altamente profesional y comprometido.',
    authorName: 'Gerente de Sostenibilidad',
    authorRole: 'Gerente de Sostenibilidad',
    authorCompany: 'Empresa Minera',
    authorImage: placeholderAvatar,
    rating: 5,
  },
  {
    quote: 'La tarifa plana nos ha permitido tener previsibilidad de costos y una gestión impecable de nuestros residuos industriales.',
    authorName: 'Jefe de Operaciones',
    authorRole: 'Jefe de Operaciones',
    authorCompany: 'Sector Industrial',
    authorImage: placeholderAvatar,
    rating: 5,
  },
  {
    quote: 'Son aliados estratégicos en nuestra gestión ambiental. Destaco su rapidez de respuesta y conocimiento técnico especializado.',
    authorName: 'Director de Planta',
    authorRole: 'Director de Planta',
    authorCompany: 'Agroindustria',
    authorImage: placeholderAvatar,
    rating: 5,
  },
]
