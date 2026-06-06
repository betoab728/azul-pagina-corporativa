export interface Sector {
  icon: string
  iconColor: 'primary' | 'secondary'
  name: string
  href: string
}

export const sectors: Sector[] = [
  { icon: 'mining', iconColor: 'primary', name: 'Sector minero', href: '#' },
  { icon: 'factory', iconColor: 'secondary', name: 'Industrial', href: '#' },
  { icon: 'medical_services', iconColor: 'primary', name: 'Salud', href: '#' },
  { icon: 'eco', iconColor: 'secondary', name: 'Agroindustrial', href: '#' },
]
