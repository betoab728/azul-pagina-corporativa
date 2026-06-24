import type { SupportedLocale } from '../i18n/utils'

export interface ContactInfo {
  icon: string
  label: string
  value: string
}

const contactInfoByLocale: Record<SupportedLocale, ContactInfo[]> = {
  es: [
    { icon: 'location_on', label: 'Oficina Comercial', value: 'Av. Tallanes Condominio Garden 360,<br />Departamento 405 Torre 6 - Piura - Piura' },
    { icon: 'mail', label: 'Correo Electrónico', value: 'azulsostenibleoficial@gmail.com' },
    { icon: 'schedule', label: 'Horario de Atención', value: 'Lunes - Viernes: 08:00am - 5:00pm' },
  ],
  en: [],
  pt: [],
}

export const getContactInfo = (locale: SupportedLocale): ContactInfo[] =>
  contactInfoByLocale[locale].length > 0 ? contactInfoByLocale[locale] : contactInfoByLocale.es

// Backward-compat — remove after Phase 3
export const contactInfo = contactInfoByLocale.es
