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
  en: [
    { icon: 'verified', text: 'We comply, document and demonstrate every service' },
    { icon: 'analytics', text: 'We work with clear procedures and traceability' },
    { icon: 'engineering', text: 'Technical solutions that actually work in the field' },
  ],
  pt: [
    { icon: 'verified', text: 'Cumprimos, documentamos e demonstramos cada serviço' },
    { icon: 'analytics', text: 'Trabalhamos com procedimentos claros e rastreabilidade' },
    { icon: 'engineering', text: 'Soluções técnicas que realmente funcionam no campo' },
  ],
}

const serviceCardsByLocale: Record<SupportedLocale, ServiceCard[]> = {
  es: [
    { icon: 'payments', title: 'Tarifa plana ambiental' },
    { icon: 'category', title: 'Reclasificación de residuos' },
    { icon: 'biotech', title: 'Caracterización de residuos sólidos' },
  ],
  en: [
    { icon: 'payments', title: 'Environmental flat rate' },
    { icon: 'category', title: 'Waste reclassification' },
    { icon: 'biotech', title: 'Solid waste characterization' },
  ],
  pt: [
    { icon: 'payments', title: 'Tarifa fixa ambiental' },
    { icon: 'category', title: 'Reclassificação de resíduos' },
    { icon: 'biotech', title: 'Caracterização de resíduos sólidos' },
  ],
}

const sectoresNosotrosByLocale: Record<SupportedLocale, SectorItem[]> = {
  es: [
    { icon: 'factory', title: 'Sector Industrial', description: 'Optimizamos la eficiencia operativa al delegar la disposición final de desechos químicos y sólidos complejos, blindando a las empresas contra multas administrativas y mejorando su perfil de responsabilidad corporativa.' },
    { icon: '', title: 'Sector Minero', description: 'Gestionamos residuos peligrosos y metálicos, evitando sanciones de la OEFA y asegurando la continuidad de la licencia social para operar.' },
    { icon: 'medical_services', title: 'Sector Salud', description: 'Aseguramos el manejo riguroso de residuos biocontaminados y especiales bajo estrictas normas de bioseguridad, permitiendo que clínicas y hospitales superen con éxito las auditorías de SUSALUD y DIGESA.' },
    { icon: 'agriculture', title: 'Sector Agroindustrial', description: 'Optimizamos la eficiencia operativa al delegar la disposición final de desechos químicos y sólidos complejos, blindando a las empresas contra multas administrativas y mejorando su perfil de responsabilidad corporativa.' },
  ],
  en: [
    { icon: 'factory', title: 'Industrial Sector', description: 'We optimize operational efficiency by delegating the final disposal of complex chemical and solid waste, shielding companies against administrative fines and improving their corporate responsibility profile.' },
    { icon: '', title: 'Mining Sector', description: 'We manage hazardous and metallic waste, avoiding OEFA sanctions and ensuring the continuity of the social license to operate.' },
    { icon: 'medical_services', title: 'Healthcare Sector', description: 'We ensure rigorous management of bio-contaminated and special waste under strict biosafety standards, allowing clinics and hospitals to successfully pass SUSALUD and DIGESA audits.' },
    { icon: 'agriculture', title: 'Agro-industrial Sector', description: 'We optimize operational efficiency by delegating the final disposal of complex chemical and solid waste, shielding companies against administrative fines and improving their corporate responsibility profile.' },
  ],
  pt: [
    { icon: 'factory', title: 'Setor Industrial', description: 'Otimizamos a eficiência operacional ao delegar a disposição final de resíduos químicos e sólidos complexos, blindando as empresas contra multas administrativas e melhorando seu perfil de responsabilidade corporativa.' },
    { icon: '', title: 'Setor Mineração', description: 'Gerenciamos resíduos perigosos e metálicos, evitando sanções da OEFA e assegurando a continuidade da licença social para operar.' },
    { icon: 'medical_services', title: 'Setor Saúde', description: 'Asseguramos o manejo rigoroso de resíduos biocontaminados e especiais sob rigorosas normas de biossegurança, permitindo que clínicas e hospitais superem com sucesso as auditorias da SUSALUD e DIGESA.' },
    { icon: 'agriculture', title: 'Setor Agroindustrial', description: 'Otimizamos a eficiência operacional ao delegar a disposição final de resíduos químicos e sólidos complexos, blindando as empresas contra multas administrativas e melhorando seu perfil de responsabilidade corporativa.' },
  ],
}

const valoresByLocale: Record<SupportedLocale, ValorItem[]> = {
  es: [
    { icon: 'verified_user', title: 'Ética y Honestidad', description: 'Integridad en cada decisión' },
    { icon: 'handshake', title: 'Responsabilidad', description: 'Cumplimos lo que prometemos' },
    { icon: 'memory', title: 'Tecnología e innovación', description: 'Mejora constante' },
    { icon: 'eco', title: 'Sostenibilidad', description: 'Crecimiento responsable' },
    { icon: 'visibility', title: 'Transparencia', description: 'Comunicación directa' },
  ],
  en: [
    { icon: 'verified_user', title: 'Ethics and Honesty', description: 'Integrity in every decision' },
    { icon: 'handshake', title: 'Responsibility', description: 'We deliver what we promise' },
    { icon: 'memory', title: 'Technology and Innovation', description: 'Constant improvement' },
    { icon: 'eco', title: 'Sustainability', description: 'Responsible growth' },
    { icon: 'visibility', title: 'Transparency', description: 'Direct communication' },
  ],
  pt: [
    { icon: 'verified_user', title: 'Ética e Honestidade', description: 'Integridade em cada decisão' },
    { icon: 'handshake', title: 'Responsabilidade', description: 'Cumprimos o que prometemos' },
    { icon: 'memory', title: 'Tecnologia e Inovação', description: 'Melhoria constante' },
    { icon: 'eco', title: 'Sustentabilidade', description: 'Crescimento responsável' },
    { icon: 'visibility', title: 'Transparência', description: 'Comunicação direta' },
  ],
}

const faqItemsByLocale: Record<SupportedLocale, FAQItem[]> = {
  es: [
    { question: '¿Cumplen con toda la normativa legal en Perú?', answer: 'Sí, estamos registrados y autorizados como Empresa Operadora de Residuos Sólidos (EO-RS), cumpliendo rigurosamente con la Ley de Gestión Integral de Residuos Sólidos y su Reglamento.', open: true },
    { question: '¿Qué tipo de residuos peligrosos pueden manejar?', answer: 'Manejamos una amplia gama: químicos, biocontaminados, industriales complejos, metales pesados y residuos de aparatos eléctricos y electrónicos (RAEE), siempre con los protocolos de seguridad correspondientes.' },
    { question: '¿Entregan certificados válidos para auditorías?', answer: 'Absolutamente. Emitimos el Manifiesto de Residuos Peligrosos y Certificados de Disposición Final, documentos esenciales para demostrar cumplimiento ante OEFA, SUSALUD, DIGESA y otras entidades.' },
    { question: '¿Tienen presencia en Piura y otras regiones?', answer: 'Nuestra sede operativa principal está en Piura, lo que nos permite dar una respuesta ágil a todo el norte del Perú, manteniendo la capacidad de operación a nivel nacional según el proyecto.' },
    { question: '¿Cómo reducen los riesgos para mi empresa?', answer: 'A través de una trazabilidad completa del residuo desde su origen hasta su disposición final, garantizando que el pasivo ambiental se gestione de forma legal, evitando multas que pueden ascender a miles de UITs.' },
  ],
  en: [
    { question: 'Do you comply with all legal regulations in Peru?', answer: 'Yes, we are registered and authorized as a Solid Waste Operating Company (EO-RS), strictly complying with the Comprehensive Solid Waste Management Law and its Regulation.', open: true },
    { question: 'What type of hazardous waste can you handle?', answer: 'We handle a wide range: chemical, bio-contaminated, complex industrial, heavy metals and waste electrical and electronic equipment (WEEE), always with the corresponding safety protocols.' },
    { question: 'Do you issue certificates valid for audits?', answer: 'Absolutely. We issue the Hazardous Waste Manifest and Final Disposal Certificates, essential documents to demonstrate compliance before OEFA, SUSALUD, DIGESA and other entities.' },
    { question: 'Do you have a presence in Piura and other regions?', answer: 'Our main operational headquarters is in Piura, which allows us to provide an agile response to all of northern Peru, maintaining operational capacity nationwide depending on the project.' },
    { question: 'How do you reduce risks for my company?', answer: 'Through complete traceability of the waste from its origin to its final disposal, guaranteeing that the environmental liability is managed legally, avoiding fines that can amount to thousands of UITs.' },
  ],
  pt: [
    { question: 'Vocês cumprem toda a legislação no Peru?', answer: 'Sim, estamos registrados e autorizados como Empresa Operadora de Resíduos Sólidos (EO-RS), cumprindo rigorosamente a Lei de Gestão Integral de Resíduos Sólidos e seu Regulamento.', open: true },
    { question: 'Que tipo de resíduos perigosos vocês podem manusear?', answer: 'Manuseamos uma ampla gama: químicos, biocontaminados, industriais complexos, metais pesados e resíduos de equipamentos elétricos e eletrônicos (REEE), sempre com os protocolos de segurança correspondentes.' },
    { question: 'Vocês entregam certificados válidos para auditorias?', answer: 'Absolutamente. Emitimos o Manifesto de Resíduos Perigosos e Certificados de Disposição Final, documentos essenciais para demonstrar conformidade perante OEFA, SUSALUD, DIGESA e outras entidades.' },
    { question: 'Vocês têm presença em Piura e outras regiões?', answer: 'Nossa sede operacional principal está em Piura, o que nos permite dar uma resposta ágil a todo o norte do Peru, mantendo a capacidade de operação a nível nacional conforme o projeto.' },
    { question: 'Como vocês reduzem os riscos para minha empresa?', answer: 'Através de uma rastreabilidade completa do resíduo desde sua origem até sua disposição final, garantindo que o passivo ambiental seja gerenciado de forma legal, evitando multas que podem chegar a milhares de UITs.' },
  ],

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
