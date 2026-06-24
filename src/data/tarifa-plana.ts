import type { SupportedLocale } from '../i18n/utils'

export interface PilarItem {
  icon: string
  iconColor: 'secondary-container' | 'primary-container' | 'tertiary-container'
  title: string
  description: string
}

export interface BeneficioItem {
  icon: string
  label: string
}

export interface AlcanceItem {
  icon: string
  title: string
  description: string
}

export interface TechItem {
  label: string
  description: string
}

export interface DefinicionBullet {
  icon: string
  text: string
}

const definicionBulletsByLocale: Record<SupportedLocale, DefinicionBullet[]> = {
  es: [
    { icon: 'shield', text: 'Protección blindada contra multas y sanciones administrativas.' },
    { icon: 'analytics', text: 'Mitigación proactiva de riesgos ambientales operativos.' },
    { icon: 'engineering', text: 'Cumplimiento técnico riguroso con normativas locales e internacionales.' },
  ],
  en: [],
  pt: [],
}

const pilaresByLocale: Record<SupportedLocale, PilarItem[]> = {
  es: [
    {
      icon: 'local_shipping',
      iconColor: 'secondary-container',
      title: 'RECOLECCIÓN Y TRANSPORTE AUTORIZADO',
      description: 'Logística programada y on-demand durante todo el año, sin interrupciones ni recargos por volumen excedente dentro del plan.',
    },
    {
      icon: 'sanitizer',
      iconColor: 'primary-container',
      title: 'SANEAMIENTO AMBIENTAL INTEGRAL',
      description: 'Mantenga sus instalaciones limpias, seguras y libres de riesgos biológicos o químicos con protocolos de alta eficiencia.',
    },
    {
      icon: 'school',
      iconColor: 'tertiary-container',
      title: 'CAPACITACIÓN Y CONSULTORÍA AMBIENTAL',
      description: 'Equipo preparado y empresa conforme. Sesiones técnicas y asesoría legal continua para su personal clave.',
    },
  ],
  en: [],
  pt: [],
}

const beneficiosByLocale: Record<SupportedLocale, BeneficioItem[]> = {
  es: [
    { icon: 'payments', label: 'Ahorro tangible' },
    { icon: 'sentiment_very_satisfied', label: 'Tranquilidad total' },
    { icon: 'rebase_edit', label: 'Continuidad operativa' },
    { icon: 'task_alt', label: 'Cero estrés normativo' },
    { icon: 'support_agent', label: 'Respaldo técnico' },
  ],
  en: [],
  pt: [],
}

const techItemsByLocale: Record<SupportedLocale, TechItem[]> = {
  es: [
    { label: 'Reducción de Riesgo', description: 'Matrices de riesgo dinámicas actualizadas mensualmente.' },
    { label: 'Inteligencia de Residuos', description: 'Data analytics para optimizar la generación en origen.' },
    { label: 'Optimización de OPEX', description: 'Conversión de costos variables en una inversión fija predecible.' },
    { label: 'Trazabilidad Total', description: 'Control digital punto a punto de cada gramo gestionado.' },
  ],
  en: [],
  pt: [],
}

const alcanceItemsByLocale: Record<SupportedLocale, AlcanceItem[]> = {
  es: [
    { icon: 'gavel', title: 'Consultoría Legal', description: 'Asesoramiento permanente en trámites, permisos y auditorías gubernamentales.' },
    { icon: 'water_drop', title: 'Limpieza de Pozos', description: 'Mantenimiento preventivo y correctivo de sistemas de alcantarillado y trampas de grasa.' },
    { icon: 'delete_outline', title: 'Residuos no Peligrosos', description: 'Recolección eficiente de cartón, plástico, metales y materiales reciclables.' },
    { icon: 'compost', title: 'Residuos Orgánicos', description: 'Gestión biosegura de desechos orgánicos con potencial de aprovechamiento.' },
    { icon: 'groups_3', title: 'Capacitación', description: 'Programas de formación en manejo de residuos y seguridad ambiental.' },
    { icon: 'warning', title: 'Residuos Peligrosos', description: 'Manejo especializado y disposición final bajo los más estrictos estándares.' },
  ],
  en: [],
  pt: [],
}

export const getDefinicionBullets = (locale: SupportedLocale): DefinicionBullet[] =>
  definicionBulletsByLocale[locale].length > 0 ? definicionBulletsByLocale[locale] : definicionBulletsByLocale.es

export const getPilares = (locale: SupportedLocale): PilarItem[] =>
  pilaresByLocale[locale].length > 0 ? pilaresByLocale[locale] : pilaresByLocale.es

export const getBeneficios = (locale: SupportedLocale): BeneficioItem[] =>
  beneficiosByLocale[locale].length > 0 ? beneficiosByLocale[locale] : beneficiosByLocale.es

export const getTechItems = (locale: SupportedLocale): TechItem[] =>
  techItemsByLocale[locale].length > 0 ? techItemsByLocale[locale] : techItemsByLocale.es

export const getAlcanceItems = (locale: SupportedLocale): AlcanceItem[] =>
  alcanceItemsByLocale[locale].length > 0 ? alcanceItemsByLocale[locale] : alcanceItemsByLocale.es

// Backward-compat — remove after Phase 3
export const definicionBullets = definicionBulletsByLocale.es
export const pilares = pilaresByLocale.es
export const beneficios = beneficiosByLocale.es
export const techItems = techItemsByLocale.es
export const alcanceItems = alcanceItemsByLocale.es
