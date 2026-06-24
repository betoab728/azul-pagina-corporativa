import type { SupportedLocale } from '../i18n/utils'

export interface ChecklistItem {
  icon: string
  text: string
}

export interface ServiceCard {
  icon: string
  title: string
}

export interface SectorItem {
  icon: string
  title: string
  description: string
}

export interface ValorItem {
  icon: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
  open?: boolean
}

const checklistItemsByLocale: Record<SupportedLocale, ChecklistItem[]> = {
  es: [
    { icon: 'verified', text: 'Cumplimos, documentamos y demostramos cada servicio' },
    { icon: 'analytics', text: 'Trabajamos con procedimientos claros y trazabilidad' },
    { icon: 'engineering', text: 'Soluciones técnicas que sí funcionan en campo' },
  ],
  en: [],
  pt: [],
}

const serviceCardsByLocale: Record<SupportedLocale, ServiceCard[]> = {
  es: [
    { icon: 'payments', title: 'Tarifa plana ambiental' },
    { icon: 'category', title: 'Reclasificación de residuos' },
    { icon: 'biotech', title: 'Caracterización de residuos sólidos' },
  ],
  en: [],
  pt: [],
}

const sectoresNosotrosByLocale: Record<SupportedLocale, SectorItem[]> = {
  es: [
    { icon: 'factory', title: 'Sector Industrial', description: 'Optimizamos la eficiencia operativa al delegar la disposición final de desechos químicos y sólidos complejos, blindando a las empresas contra multas administrativas y mejorando su perfil de responsabilidad corporativa.' },
    { icon: '', title: 'Sector Minero', description: 'Gestionamos residuos peligrosos y metálicos, evitando sanciones de la OEFA y asegurando la continuidad de la licencia social para operar.' },
    { icon: 'medical_services', title: 'Sector Salud', description: 'Aseguramos el manejo riguroso de residuos biocontaminados y especiales bajo estrictas normas de bioseguridad, permitiendo que clínicas y hospitales superen con éxito las auditorías de SUSALUD y DIGESA.' },
    { icon: 'agriculture', title: 'Sector Agroindustrial', description: 'Optimizamos la eficiencia operativa al delegar la disposición final de desechos químicos y sólidos complejos, blindando a las empresas contra multas administrativas y mejorando su perfil de responsabilidad corporativa.' },
  ],
  en: [],
  pt: [],
}

const valoresByLocale: Record<SupportedLocale, ValorItem[]> = {
  es: [
    { icon: 'verified_user', title: 'Ética y Honestidad', description: 'Integridad en cada decisión' },
    { icon: 'handshake', title: 'Responsabilidad', description: 'Cumplimos lo que prometemos' },
    { icon: 'memory', title: 'Tecnología e innovación', description: 'Mejora constante' },
    { icon: 'eco', title: 'Sostenibilidad', description: 'Crecimiento responsable' },
    { icon: 'visibility', title: 'Transparencia', description: 'Comunicación directa' },
  ],
  en: [],
  pt: [],
}

const faqItemsByLocale: Record<SupportedLocale, FAQItem[]> = {
  es: [
    { question: '¿Cumplen con toda la normativa legal en Perú?', answer: 'Sí, estamos registrados y autorizados como Empresa Operadora de Residuos Sólidos (EO-RS), cumpliendo rigurosamente con la Ley de Gestión Integral de Residuos Sólidos y su Reglamento.', open: true },
    { question: '¿Qué tipo de residuos peligrosos pueden manejar?', answer: 'Manejamos una amplia gama: químicos, biocontaminados, industriales complejos, metales pesados y residuos de aparatos eléctricos y electrónicos (RAEE), siempre con los protocolos de seguridad correspondientes.' },
    { question: '¿Entregan certificados válidos para auditorías?', answer: 'Absolutamente. Emitimos el Manifiesto de Residuos Peligrosos y Certificados de Disposición Final, documentos esenciales para demostrar cumplimiento ante OEFA, SUSALUD, DIGESA y otras entidades.' },
    { question: '¿Tienen presencia en Piura y otras regiones?', answer: 'Nuestra sede operativa principal está en Piura, lo que nos permite dar una respuesta ágil a todo el norte del Perú, manteniendo la capacidad de operación a nivel nacional según el proyecto.' },
    { question: '¿Cómo reducen los riesgos para mi empresa?', answer: 'A través de una trazabilidad completa del residuo desde su origen hasta su disposición final, garantizando que el pasivo ambiental se gestione de forma legal, evitando multas que pueden ascender a miles de UITs.' },
  ],
  en: [],
  pt: [],
}

export const getChecklistItems = (locale: SupportedLocale): ChecklistItem[] =>
  checklistItemsByLocale[locale].length > 0 ? checklistItemsByLocale[locale] : checklistItemsByLocale.es

export const getServiceCards = (locale: SupportedLocale): ServiceCard[] =>
  serviceCardsByLocale[locale].length > 0 ? serviceCardsByLocale[locale] : serviceCardsByLocale.es

export const getSectoresNosotros = (locale: SupportedLocale): SectorItem[] =>
  sectoresNosotrosByLocale[locale].length > 0 ? sectoresNosotrosByLocale[locale] : sectoresNosotrosByLocale.es

export const getValores = (locale: SupportedLocale): ValorItem[] =>
  valoresByLocale[locale].length > 0 ? valoresByLocale[locale] : valoresByLocale.es

export const getFaqItems = (locale: SupportedLocale): FAQItem[] =>
  faqItemsByLocale[locale].length > 0 ? faqItemsByLocale[locale] : faqItemsByLocale.es

// Backward-compat — remove after Phase 3
export const checklistItems = checklistItemsByLocale.es
export const serviceCards = serviceCardsByLocale.es
export const sectoresNosotros = sectoresNosotrosByLocale.es
export const valores = valoresByLocale.es
export const faqItems = faqItemsByLocale.es
