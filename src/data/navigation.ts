import type { SupportedLocale } from '../i18n/utils'

export interface DropdownItem {
  label: string
  href: string
}

export interface NavItem {
  key?: string
  label: string
  href: string
  dropdown?: DropdownItem[]
}

const mainNavByLocale: Record<SupportedLocale, NavItem[]> = {
  es: [
    { key: 'home', label: 'Inicio', href: '/' },
    {
      key: 'services',
      label: 'Servicios',
      href: '#servicios',
      dropdown: [
        { label: 'Tarifa Plana Ambiental', href: '/servicios/tarifa-plana' },
        { label: 'Reclasificación de Residuos Peligrosos', href: '/servicios/reclasificacion-de-residuos' },
        { label: 'Caracterización de Residuos Sólidos', href: '/servicios/caracterizacion-de-residuos' },
        { label: 'Reducción del OPEX', href: '/servicios/reduccion-del-opex' },
        { label: 'Almacenes Inteligentes', href: '/servicios/almacenes-inteligentes' },
      ],
    },
    { label: 'Acreditaciones', href: '/acreditaciones' },
    { label: 'Sectores', href: '/sectores' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Nosotros', href: '/nosotros' },
    {
      key: 'resources',
      label: 'Recursos',
      href: '/recursos',
      dropdown: [
        { label: 'Software de Trazabilidad', href: '/servicios/software-trazabilidad' },
      ],
    },
    { label: 'Contacto', href: '/contacto' },
  ],
  en: [],
  pt: [],
}

export const getMainNav = (locale: SupportedLocale): NavItem[] =>
  mainNavByLocale[locale].length > 0 ? mainNavByLocale[locale] : mainNavByLocale.es

// Backward-compat — remove after Phase 3
export const mainNav = mainNavByLocale.es
