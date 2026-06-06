export interface ImpactStat {
  icon: string
  iconColor: 'primary' | 'secondary'
  value: string
  label: string
}

export const impactStats: ImpactStat[] = [
  { icon: 'groups', iconColor: 'secondary', value: '+5', label: 'Años de experiencia' },
  { icon: 'work_history', iconColor: 'primary', value: '+10,000', label: 'toneladas gestionadas' },
  { icon: 'corporate_fare', iconColor: 'secondary', value: '+30', label: 'empresas atendidas' },
  { icon: 'map', iconColor: 'primary', value: '+24', label: 'Regiones del Perú' },
]
