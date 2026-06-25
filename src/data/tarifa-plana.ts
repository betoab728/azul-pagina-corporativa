import type { SupportedLocale } from '../i18n/utils'

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

export interface DefinicionBullet {
  icon: string
  text: string
}

const definicionBulletsByLocale: Record<SupportedLocale, DefinicionBullet[]> = {
  es: [
    { icon: 'shield', text: 'Protección blindada contra multas y sanciones administrativas.' },
    { icon: 'analytics', text: 'Mitigación proactiva de riesgos ambientales operativos.' },
    { icon: 'engineering', text: 'Cumplimiento técnico riguroso con normativas locales e internacionales.' },
  ],
  en: [
    { icon: 'shield', text: 'Ironclad protection against fines and administrative penalties.' },
    { icon: 'analytics', text: 'Proactive mitigation of operational environmental risks.' },
    { icon: 'engineering', text: 'Rigorous technical compliance with local and international regulations.' },
  ],
  pt: [
    { icon: 'shield', text: 'Proteção blindada contra multas e sanções administrativas.' },
    { icon: 'analytics', text: 'Mitigação proativa de riscos ambientais operacionais.' },
    { icon: 'engineering', text: 'Conformidade técnica rigorosa com normas locais e internacionais.' },
  ],
}

const pilaresByLocale: Record<SupportedLocale, PilarItem[]> = {
  es: [
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
  ],
  en: [
    {
      icon: 'local_shipping',
      iconColor: 'secondary-container',
      title: 'AUTHORIZED COLLECTION AND TRANSPORT',
      description: 'Scheduled and on-demand logistics year-round, without interruptions or surcharges for excess volume within the plan.',
    },
    {
      icon: 'sanitizer',
      iconColor: 'primary-container',
      title: 'COMPREHENSIVE ENVIRONMENTAL SANITATION',
      description: 'Keep your facilities clean, safe and free from biological or chemical hazards with high-efficiency protocols.',
    },
    {
      icon: 'school',
      iconColor: 'tertiary-container',
      title: 'ENVIRONMENTAL TRAINING AND CONSULTING',
      description: 'Prepared team and compliant company. Technical sessions and ongoing legal advisory for your key staff.',
    },
  ],
  pt: [
    {
      icon: 'local_shipping',
      iconColor: 'secondary-container',
      title: 'COLETA E TRANSPORTE AUTORIZADO',
      description: 'Logística programada e sob demanda durante todo o ano, sem interrupções ou cobranças extras por volume excedente.',
    },
    {
      icon: 'sanitizer',
      iconColor: 'primary-container',
      title: 'SANEAMENTO AMBIENTAL INTEGRAL',
      description: 'Mantenha suas instalações limpas, seguras e livres de riscos biológicos ou químicos com protocolos de alta eficiência.',
    },
    {
      icon: 'school',
      iconColor: 'tertiary-container',
      title: 'TREINAMENTO E CONSULTORIA AMBIENTAL',
      description: 'Equipe preparada e empresa em conformidade. Sessões técnicas e assessoria jurídica contínua para sua equipe-chave.',
    },
  ],
}

const beneficiosByLocale: Record<SupportedLocale, BeneficioItem[]> = {
  es: [
    { icon: 'payments', label: 'Ahorro tangible' },
    { icon: 'sentiment_very_satisfied', label: 'Tranquilidad total' },
    { icon: 'rebase_edit', label: 'Continuidad operativa' },
    { icon: 'task_alt', label: 'Cero estrés normativo' },
    { icon: 'support_agent', label: 'Respaldo técnico' },
  ],
  en: [
    { icon: 'payments', label: 'Tangible savings' },
    { icon: 'sentiment_very_satisfied', label: 'Total peace of mind' },
    { icon: 'rebase_edit', label: 'Operational continuity' },
    { icon: 'task_alt', label: 'Zero regulatory stress' },
    { icon: 'support_agent', label: 'Technical support' },
  ],
  pt: [
    { icon: 'payments', label: 'Economia tangível' },
    { icon: 'sentiment_very_satisfied', label: 'Tranquilidade total' },
    { icon: 'rebase_edit', label: 'Continuidade operacional' },
    { icon: 'task_alt', label: 'Zero estresse regulatório' },
    { icon: 'support_agent', label: 'Suporte técnico' },
  ],
}

const techItemsByLocale: Record<SupportedLocale, TechItem[]> = {
  es: [
    { label: 'Reducción de Riesgo', description: 'Matrices de riesgo dinámicas actualizadas mensualmente.' },
    { label: 'Inteligencia de Residuos', description: 'Data analytics para optimizar la generación en origen.' },
    { label: 'Optimización de OPEX', description: 'Conversión de costos variables en una inversión fija predecible.' },
    { label: 'Trazabilidad Total', description: 'Control digital punto a punto de cada gramo gestionado.' },
  ],
  en: [
    { label: 'Risk Reduction', description: 'Dynamic risk matrices updated monthly.' },
    { label: 'Waste Intelligence', description: 'Data analytics to optimize generation at source.' },
    { label: 'OPEX Optimization', description: 'Converting variable costs into a predictable fixed investment.' },
    { label: 'Full Traceability', description: 'Digital point-to-point control of every gram managed.' },
  ],
  pt: [
    { label: 'Redução de Risco', description: 'Matrizes de risco dinâmicas atualizadas mensalmente.' },
    { label: 'Inteligência de Resíduos', description: 'Data analytics para otimizar a geração na origem.' },
    { label: 'Otimização de OPEX', description: 'Conversão de custos variáveis em um investimento fixo previsível.' },
    { label: 'Rastreabilidade Total', description: 'Controle digital ponto a ponto de cada grama gerenciada.' },
  ],
}

const alcanceItemsByLocale: Record<SupportedLocale, AlcanceItem[]> = {
  es: [
    { icon: 'gavel', title: 'Consultoría Legal', description: 'Asesoramiento permanente en trámites, permisos y auditorías gubernamentales.' },
    { icon: 'water_drop', title: 'Limpieza de Pozos', description: 'Mantenimiento preventivo y correctivo de sistemas de alcantarillado y trampas de grasa.' },
    { icon: 'delete_outline', title: 'Residuos no Peligrosos', description: 'Recolección eficiente de cartón, plástico, metales y materiales reciclables.' },
    { icon: 'compost', title: 'Residuos Orgánicos', description: 'Gestión biosegura de desechos orgánicos con potencial de aprovechamiento.' },
    { icon: 'groups_3', title: 'Capacitación', description: 'Programas de formación en manejo de residuos y seguridad ambiental.' },
    { icon: 'warning', title: 'Residuos Peligrosos', description: 'Manejo especializado y disposición final bajo los más estrictos estándares.' },
  ],
  en: [
    { icon: 'gavel', title: 'Legal Consulting', description: 'Permanent advisory on procedures, permits and government audits.' },
    { icon: 'water_drop', title: 'Well Cleaning', description: 'Preventive and corrective maintenance of sewage systems and grease traps.' },
    { icon: 'delete_outline', title: 'Non-Hazardous Waste', description: 'Efficient collection of cardboard, plastics, metals and recyclable materials.' },
    { icon: 'compost', title: 'Organic Waste', description: 'Biosecure management of organic waste with recovery potential.' },
    { icon: 'groups_3', title: 'Training', description: 'Training programs in waste management and environmental safety.' },
    { icon: 'warning', title: 'Hazardous Waste', description: 'Specialized handling and final disposal under the strictest standards.' },
  ],
  pt: [
    { icon: 'gavel', title: 'Consultoria Jurídica', description: 'Assessoria permanente em processos, licenças e auditorias governamentais.' },
    { icon: 'water_drop', title: 'Limpeza de Poços', description: 'Manutenção preventiva e corretiva de sistemas de esgoto e caixas de gordura.' },
    { icon: 'delete_outline', title: 'Resíduos Não Perigosos', description: 'Coleta eficiente de papelão, plásticos, metais e materiais recicláveis.' },
    { icon: 'compost', title: 'Resíduos Orgânicos', description: 'Gestão biossegura de resíduos orgânicos com potencial de aproveitamento.' },
    { icon: 'groups_3', title: 'Treinamento', description: 'Programas de formação em gestão de resíduos e segurança ambiental.' },
    { icon: 'warning', title: 'Resíduos Perigosos', description: 'Manuseio especializado e disposição final sob os mais rígidos padrões.' },
  ],
}

export const getDefinicionBullets = (locale: SupportedLocale): DefinicionBullet[] =>
  definicionBulletsByLocale[locale].length > 0 ? definicionBulletsByLocale[locale] : definicionBulletsByLocale.es

export const getPilares = (locale: SupportedLocale): PilarItem[] =>
  pilaresByLocale[locale].length > 0 ? pilaresByLocale[locale] : pilaresByLocale.es

export const getBeneficios = (locale: SupportedLocale): BeneficioItem[] =>
  beneficiosByLocale[locale].length > 0 ? beneficiosByLocale[locale] : beneficiosByLocale.es

export const getTechItems = (locale: SupportedLocale): TechItem[] =>
  techItemsByLocale[locale].length > 0 ? techItemsByLocale[locale] : techItemsByLocale.es

export const getAlcanceItems = (locale: SupportedLocale): AlcanceItem[] =>
  alcanceItemsByLocale[locale].length > 0 ? alcanceItemsByLocale[locale] : alcanceItemsByLocale.es

// Backward-compat — remove after Phase 3
export const definicionBullets = definicionBulletsByLocale.es
export const pilares = pilaresByLocale.es
export const beneficios = beneficiosByLocale.es
export const techItems = techItemsByLocale.es
export const alcanceItems = alcanceItemsByLocale.es
