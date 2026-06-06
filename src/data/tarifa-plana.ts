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

export const definicionBullets = [
  {
    icon: 'shield',
    text: 'Protección blindada contra multas y sanciones administrativas.',
  },
  {
    icon: 'analytics',
    text: 'Mitigación proactiva de riesgos ambientales operativos.',
  },
  {
    icon: 'engineering',
    text: 'Cumplimiento técnico riguroso con normativas locales e internacionales.',
  },
]

export const pilares: PilarItem[] = [
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
]

export const beneficios: BeneficioItem[] = [
  { icon: 'payments', label: 'Ahorro tangible' },
  { icon: 'sentiment_very_satisfied', label: 'Tranquilidad total' },
  { icon: 'rebase_edit', label: 'Continuidad operativa' },
  { icon: 'task_alt', label: 'Cero estrés normativo' },
  { icon: 'support_agent', label: 'Respaldo técnico' },
]

export const techItems: TechItem[] = [
  { label: 'Reducción de Riesgo', description: 'Matrices de riesgo dinámicas actualizadas mensualmente.' },
  { label: 'Inteligencia de Residuos', description: 'Data analytics para optimizar la generación en origen.' },
  { label: 'Optimización de OPEX', description: 'Conversión de costos variables en una inversión fija predecible.' },
  { label: 'Trazabilidad Total', description: 'Control digital punto a punto de cada gramo gestionado.' },
]

export const alcanceItems: AlcanceItem[] = [
  { icon: 'gavel', title: 'Consultoría Legal', description: 'Asesoramiento permanente en trámites, permisos y auditorías gubernamentales.' },
  { icon: 'water_drop', title: 'Limpieza de Pozos', description: 'Mantenimiento preventivo y correctivo de sistemas de alcantarillado y trampas de grasa.' },
  { icon: 'delete_outline', title: 'Residuos no Peligrosos', description: 'Recolección eficiente de cartón, plástico, metales y materiales reciclables.' },
  { icon: 'compost', title: 'Residuos Orgánicos', description: 'Gestión biosegura de desechos orgánicos con potencial de aprovechamiento.' },
  { icon: 'groups_3', title: 'Capacitación', description: 'Programas de formación en manejo de residuos y seguridad ambiental.' },
  { icon: 'warning', title: 'Residuos Peligrosos', description: 'Manejo especializado y disposición final bajo los más estrictos estándares.' },
]
