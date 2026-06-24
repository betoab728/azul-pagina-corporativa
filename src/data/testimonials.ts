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
  en: [
    {
      quote: 'Azul Sostenible helped us comply with regulations and optimize our environmental processes. Their team is highly professional and committed.',
      authorName: 'Sustainability Manager',
      authorRole: 'Sustainability Manager',
      authorCompany: 'Mining Company',
      authorImage: '/testimonio2.jpeg',
      rating: 5,
    },
    {
      quote: 'The flat rate has allowed us to have cost predictability and impeccable management of our industrial waste.',
      authorName: 'Environmental Manager',
      authorRole: 'Environmental Manager',
      authorCompany: 'Industrial Sector',
      authorImage: '/testimonio1.jpeg',
      rating: 5,
    },
    {
      quote: 'They are strategic allies in our environmental management. I highlight their quick response time and specialized technical knowledge.',
      authorName: 'Health, Safety & Environment Supervisor',
      authorRole: 'Health, Safety & Environment Supervisor',
      authorCompany: 'Mining Sector',
      authorImage: '/testimonio3.jpeg',
      rating: 5,
    },
  ],
  pt: [
    {
      quote: 'A Azul Sostenible nos ajudou a cumprir as regulamentações e otimizar nossos processos ambientais. Sua equipe é altamente profissional e comprometida.',
      authorName: 'Gerente de Sustentabilidade',
      authorRole: 'Gerente de Sustentabilidade',
      authorCompany: 'Empresa de Mineração',
      authorImage: '/testimonio2.jpeg',
      rating: 5,
    },
    {
      quote: 'A tarifa fixa nos permitiu ter previsibilidade de custos e uma gestão impecável dos nossos resíduos industriais.',
      authorName: 'Responsável pelo Meio Ambiente',
      authorRole: 'Responsável pelo Meio Ambiente',
      authorCompany: 'Setor Industrial',
      authorImage: '/testimonio1.jpeg',
      rating: 5,
    },
    {
      quote: 'São aliados estratégicos na nossa gestão ambiental. Destaco a rapidez no atendimento e o conhecimento técnico especializado.',
      authorName: 'Supervisor de Segurança e Meio Ambiente',
      authorRole: 'Supervisor de Segurança e Meio Ambiente',
      authorCompany: 'Setor de Mineração',
      authorImage: '/testimonio3.jpeg',
      rating: 5,
    },
  ],
}

export const getTestimonials = (locale: SupportedLocale): Testimonial[] =>
  testimonialsByLocale[locale].length > 0 ? testimonialsByLocale[locale] : testimonialsByLocale.es

// Backward-compat — remove after Phase 3
export const testimonials = testimonialsByLocale.es
