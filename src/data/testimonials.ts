import type { SupportedLocale } from '../i18n/utils'

export interface Testimonial {
  quote: string
  authorName: string
  authorRole: string
  authorCompany: string
  authorImage: string
  rating: number
}

const testimonialsByLocale: Record<SupportedLocale, Testimonial[]> = {
  es: [
    {
      quote: 'Azul Sostenible nos ayudó a cumplir la normativa y a optimizar nuestros procesos ambientales. Su equipo es altamente profesional y comprometido.',
      authorName: 'Gerente de Sostenibilidad',
      authorRole: 'Gerente de Sostenibilidad',
      authorCompany: 'Empresa Minera',
      authorImage: '/testimonio2.jpeg',
      rating: 5,
    },
    {
      quote: 'La tarifa plana nos ha permitido tener previsibilidad de costos y una gestión impecable de nuestros residuos industriales.',
      authorName: 'Responsable de medio ambiente',
      authorRole: 'Responsable de medio ambiente',
      authorCompany: 'Sector Industrial',
      authorImage: '/testimonio1.jpeg',
      rating: 5,
    },
    {
      quote: 'Son aliados estratégicos en nuestra gestión ambiental. Destaco su rapidez de respuesta y conocimiento técnico especializado.',
      authorName: 'Supervisor de seguridad y medio ambiente',
      authorRole: 'Supervisor de seguridad y medio ambiente',
      authorCompany: 'Sector minero',
      authorImage: '/testimonio3.jpeg',
      rating: 5,
    },
  ],
  en: [],
  pt: [],
}

export const getTestimonials = (locale: SupportedLocale): Testimonial[] =>
  testimonialsByLocale[locale].length > 0 ? testimonialsByLocale[locale] : testimonialsByLocale.es

// Backward-compat — remove after Phase 3
export const testimonials = testimonialsByLocale.es
