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
      { label: 'Tarifa Plana Ambiental', href: '#tarifa-plana-detalle' },
      { label: 'Reclasificación de Residuos Peligrosos', href: '#' },
      { label: 'Caracterización de Residuos Sólidos', href: '#' },
      { label: 'Reducción del OPEX', href: '#opex-detalle' },
      { label: 'Almacenes Inteligentes', href: '#almacenes-detalle' },
    ],
  },
  { label: 'Acreditaciones', href: '#acreditaciones' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Recursos', href: '#' },
  { label: 'Contacto', href: '#cotizacion' },
]
