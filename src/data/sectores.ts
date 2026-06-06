export interface SectorAgroStat {
  value: string
  label: string
}

export interface ImpactStat {
  value: string
  label: string
  color: 'primary' | 'secondary'
}

export const agroStats: SectorAgroStat[] = [
  { value: '+15%', label: 'Eficiencia en riego' },
  { value: 'GLOBALG.A.P.', label: 'Asesoría normativa' },
]

export const impactStats: ImpactStat[] = [
  { value: '98%', label: 'Satisfacción en Auditorías', color: 'primary' },
  { value: '+200', label: 'Proyectos Ejecutados', color: 'secondary' },
  { value: '0', label: 'Sanciones en Clientes', color: 'primary' },
  { value: '24/7', label: 'Soporte Crítico', color: 'secondary' },
]
