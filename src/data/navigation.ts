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
    { label: 'Nosotros', href: '/nosotros' },
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
    {
      key: 'resources',
      label: 'Recursos',
      href: '/recursos',
      dropdown: [
        { label: 'Software de Trazabilidad', href: '/servicios/software-trazabilidad' },
      ],
    },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Blog', href: '/blog' },
  ],
  en: [
    { key: 'home', label: 'Home', href: '/en/' },
    { label: 'About Us', href: '/en/nosotros' },
    {
      key: 'services',
      label: 'Services',
      href: '#servicios',
      dropdown: [
        { label: 'Environmental Flat Rate', href: '/en/servicios/tarifa-plana' },
        { label: 'Hazardous Waste Reclassification', href: '/en/servicios/reclasificacion-de-residuos' },
        { label: 'Solid Waste Characterization', href: '/en/servicios/caracterizacion-de-residuos' },
        { label: 'OPEX Reduction', href: '/en/servicios/reduccion-del-opex' },
        { label: 'Smart Warehouses', href: '/en/servicios/almacenes-inteligentes' },
      ],
    },
    { label: 'Accreditations', href: '/en/acreditaciones' },
    { label: 'Sectors', href: '/en/sectores' },
    { label: 'Projects', href: '/en/proyectos' },
    {
      key: 'resources',
      label: 'Resources',
      href: '/en/recursos',
      dropdown: [
        { label: 'Traceability Software', href: '/en/servicios/software-trazabilidad' },
      ],
    },
    { label: 'Contact', href: '/en/contacto' },
    { label: 'Blog', href: '/blog' },
  ],
  pt: [
    { key: 'home', label: 'Início', href: '/pt/' },
    { label: 'Sobre nós', href: '/pt/nosotros' },
    {
      key: 'services',
      label: 'Serviços',
      href: '#servicios',
      dropdown: [
        { label: 'Tarifa Plana Ambiental', href: '/pt/servicios/tarifa-plana' },
        { label: 'Reclassificação de Resíduos Perigosos', href: '/pt/servicios/reclasificacion-de-residuos' },
        { label: 'Caracterização de Resíduos Sólidos', href: '/pt/servicios/caracterizacion-de-residuos' },
        { label: 'Redução do OPEX', href: '/pt/servicios/reduccion-del-opex' },
        { label: 'Armazéns Inteligentes', href: '/pt/servicios/almacenes-inteligentes' },
      ],
    },
    { label: 'Acreditações', href: '/pt/acreditaciones' },
    { label: 'Setores', href: '/pt/sectores' },
    { label: 'Projetos', href: '/pt/proyectos' },
    {
      key: 'resources',
      label: 'Recursos',
      href: '/pt/recursos',
      dropdown: [
        { label: 'Software de Rastreabilidade', href: '/pt/servicios/software-trazabilidad' },
      ],
    },
    { label: 'Contato', href: '/pt/contacto' },
    { label: 'Blog', href: '/blog' },
  ],
}

export const getMainNav = (locale: SupportedLocale): NavItem[] =>
  mainNavByLocale[locale].length > 0 ? mainNavByLocale[locale] : mainNavByLocale.es

// Backward-compat — remove after Phase 3
export const mainNav = mainNavByLocale.es
