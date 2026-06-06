export interface DropdownItem {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  {
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
  { label: 'Recursos', href: '#' },
  { label: 'Contacto', href: '#cotizacion' },
]
