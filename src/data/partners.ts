import type { SupportedLocale } from '../i18n/utils'

export interface Partner {
  name: string
  logo: string
}

// Logos y nombres de clientes: igual en todos los idiomas
const partnersByLocale: Record<SupportedLocale, Partner[]> = {
  es: [
    { name: 'Cliente 01', logo: '/cliente-01.png' },
    { name: 'Cliente 02', logo: '/cliente-02.png' },
    { name: 'Cliente 03', logo: '/cliente-03.png' },

    { name: 'Cliente 05', logo: '/cliente-05.png' },
    { name: 'Cliente 06', logo: '/cliente-06.png' },

    { name: 'Cliente 09', logo: '/cliente-09.png' },
    { name: 'Cliente 10', logo: '/cliente-10.png' },

    { name: 'Cliente 12', logo: '/cliente-12.png' },
    { name: 'Cliente 13', logo: '/cliente-13.png' },
    { name: 'Cliente 14', logo: '/cliente-14.png' },
    { name: 'Cliente 15', logo: '/cliente-15.png' },
    { name: 'Cliente 16', logo: '/cliente-16.png' },
    { name: 'Cliente 17', logo: '/cliente-17.png' },
    { name: 'Cliente 18', logo: '/cliente-18.png' },
    { name: 'Cliente 19', logo: '/cliente-19.png' },
    { name: 'Cliente 20', logo: '/cliente-20.png' },
    { name: 'Cliente 21', logo: '/cliente-21.png' },
    { name: 'Cliente 22', logo: '/cliente-22.png' },
    { name: 'Cliente 23', logo: '/cliente-23.png' },
    { name: 'Cliente 24', logo: '/cliente-24.png' },
    { name: 'Cliente 25', logo: '/cliente-25.png' },
    { name: 'Cliente 26', logo: '/cliente-26.png' },
    { name: 'Cliente 27', logo: '/cliente-27.png' },
    { name: 'Cliente 28', logo: '/cliente-28.png' },
    { name: 'Cliente 29', logo: '/cliente-29.png' },
    { name: 'Cliente 30', logo: '/cliente-30.png' },
    { name: 'Cliente 31', logo: '/cliente-31.png' },
    { name: 'Cliente 32', logo: '/cliente-32.png' },
    { name: 'Cliente 33', logo: '/cliente-33.png' },
    { name: 'Cliente 34', logo: '/cliente-34.png' },
    { name: 'Cliente 35', logo: '/cliente-35.png' },
    { name: 'Cliente 36', logo: '/cliente-36.png' },
    { name: 'Cliente 37', logo: '/cliente-37.png' },
    { name: 'Cliente 38', logo: '/cliente-38.png' },
    { name: 'Cliente 39', logo: '/cliente-39.png' },
    { name: 'Cliente 40', logo: '/cliente-40.png' },
    { name: 'Cliente 41', logo: '/cliente-41.png' },
  ],
  en: [],
  pt: [],
}

export const getPartners = (locale: SupportedLocale): Partner[] =>
  partnersByLocale[locale].length > 0 ? partnersByLocale[locale] : partnersByLocale.es

// Backward-compat — remove after Phase 3
export const partners = partnersByLocale.es
