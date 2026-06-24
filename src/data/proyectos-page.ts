import type { SupportedLocale } from '../i18n/utils'

export interface StatItem {
  value: string
  label: string
  color: 'primary' | 'secondary'
}

export interface ProjectItem {
  image: string
  imageAlt: string
  sector: string
  icon: string
  title: string
  slug: string
  items: string[]
}

export interface AlsoTrusted {
  name: string
  slug?: string
}

// TODO: Reemplazar imágenes placeholder con imágenes reales del cliente
const pImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuByBABRP03AXczJiRBbiY_TcINCXvCqX7SfD3B1w4qFjwreqYvMJXIxj5d_0gao46uf5cxsHJu_zebTZVDwx1xmEDhH7VK3gDtzz9iY-i2eMtE1YPVEenJAigeO1zV-NaA_tAd154m_8mlbY6Qw-b2KssyWFrf64YEvOeC3KD1tO0tsgkcBV8j_lbM0gOLbv6bjbbTocJKNP9RwpvnD8dyeixkbfm7_uEWap0iAkmoW5_8nVwJsUTkKW8Oq7SlsEdFPa1R7W2DMIOoF'
const pImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwN5bJN3-QN3mYrqqVcYvJ0wbMiok8ynIrJSZlF_bF_6EI-EhTDTkeaCXWrqUs0jK5MB5A4zAhReNa6_Iv81-rC3uYsHxugLC3baxLvNPBEKhLTaWd8Y8KYo4JwfwknctEhpBkRGvrSztk7VK6tCXyN8wDzl8C6Qe4xRHJWkp06745y3aoyrNTxur1mTh4D7MAGC5ssK2VKX3DwuZD_fT45rFvFBVnI99c_JxsmfG975x-Y2AVY03fV5I_lN-ilTiTeE3a7HVvxmN0'
const pImg3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-aU3E_sdD9v_kJc2CKl5OkyBZCA5716Llu1wKl6IKfFPNAm_VEVHNc3gfuRt0ms69d4ZeJQsRYuGiM0y7WjJKTgusiiMT5oiAFnk-XD27xM0FIMgVrenI2cXxdxmkW-xc6Sr0iOVxmoAx_3dJfFAaEZxSqd1cWyi-Tt9JcUc8F1Z-ttsZObko1oUTfrl5dMYcorJbRhbPgVjHKTWGvAOwyY0u3lm8FD2Btwod38cKN_ft1YX03JZTN6Hm6hcqcHwVTg0Zm8Xb-7OX'
const pImg4 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPafDrXT9Jn5dtjR5xYNsDT6HMn1-NgFyvyWDJwRfYV1yq4_r44zXuwjpT68hYE9Jx1xW1ba1FRhRSRTyvyrW56CNwK17DgZIV_y6fEvEtZFJYi1LBXuu-ZhQjR1J-w2vSqFGeTstuw-KtwJcIezisXU10WfA2JYiR6BQOQqGbgWVpp0RAgSCSBxwv5NYTElNc4gBONyoniYJ6355nfJQMaL4Pf0AQ0k7owh5uEjnuq3uhPLdLkVE1xiaa6zPTEYVJtxG6dufFoXzs'
const pImg5 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK9bqQij-IfSNomNFWCrTVtFcJv4wxpVXK4fQWLKj0FkQnhY9tRgBM-Hdi1aVIo7sF9gX9qkhcqWIQQn-8DkPQxiXt-UvOhSiaRNWKqOeZANOjn-FrZmuEJhk9oSeYBda_KdTgT3ncyGSAtnCUPlV-ylNfyxN24-rzfDNWgKukHGBukLspRG3OZQ-zObOmbuNuuLE0m_oRH7Dm_u0FRYBsKnqOL08sbLrkSP1dWI-Imk3wEf9Ob8HGuV3LkNFymQeUTNvUCS5c3R05'
const pImg6 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnO361ufQvnxUhU6Lyf4tTWuOkrfNpJoO9QR-i6WSzw4vPyfT1G6PypXmxk5Npe1itRxOQGeY09FLj_dkZJW25_xchxpKUBnA46bNYaWnIl9m3_gF1EgIy5idVxS2cSCmGcZJtrmiKCNY7Rq7dOsEKEP7rVw3WVDtTcuQkplsfTp88g8aplYeH28BIB9hkfLiyBRpyfyFNjdPv__EhPhYnYB4WSjwgFtdFURGSauQRw2ffwk2U7H9-njLUEBLR7hWsGXStMgjUWy7x'

const statsByLocale: Record<SupportedLocale, StatItem[]> = {
  es: [
    { value: '+50', label: 'Proyectos Ejecutados', color: 'primary' },
    { value: '100%', label: 'Cumplimiento Normativo', color: 'secondary' },
    { value: '8+', label: 'Unidades Mineras', color: 'primary' },
    { value: '0', label: 'Incidentes Críticos', color: 'secondary' },
  ],
  en: [],
  pt: [],
}

const projectsDataByLocale: Record<SupportedLocale, ProjectItem[]> = {
  es: [
    { image: '/proyecto-card1.jpeg', imageAlt: 'Barriles metálicos organizados en almacén industrial', sector: 'Minería', icon: 'precision_manufacturing', title: 'UM. ANDAYCHAGUA', slug: 'andaychagua', items: ['Barriles metálicos postconsumo empleados en el almacenamiento de cianuro.', 'Envases de cartón utilizados como empaque secundario de explosivos y accesorios.'] },
    { image: '/proyecto-card2.jpeg', imageAlt: 'Caracterización técnica de materiales industriales en laboratorio', sector: 'Caracterización', icon: 'biotech', title: 'UM. CHUNGAR', slug: 'chungar', items: ['Caracterización técnica y muestreo de envases de cartón postconsumo.'] },
    { image: '/proyecto-card3.jpeg', imageAlt: 'Procesamiento de contenedores metálicos en planta de reciclaje', sector: 'Minería', icon: 'factory', title: 'UM. AMERICANA', slug: 'americana', items: ['Barriles metálicos postconsumo empleados en el almacenamiento de cianuro.', 'Envases de cartón utilizados como empaque secundario de explosivos y accesorios.'] },
    { image: '/proyecto-card4.jpeg', imageAlt: 'Muestreo técnico de materiales con código QR en almacén', sector: 'Muestreo', icon: 'science', title: 'UM. MOROCOCHA', slug: 'morococha', items: ['Caracterización técnica y muestreo de envases de cartón postconsumo.'] },
    { image: '/proyecto-card5.jpeg', imageAlt: 'Laboratorio de ensayos de peligrosidad en materiales metálicos', sector: 'Peligrosidad', icon: 'warning', title: 'UM. YAULIYACU', slug: 'yauliyacu', items: ['Caracterización de envases de cartón postconsumo.', 'Ensayo de peligrosidad en envases metálicos que contuvieron cianuro.'] },
    { image: '/proyecto-card6.jpeg', imageAlt: 'Revisión de informe técnico en campo minero', sector: 'Informes', icon: 'description', title: 'UM. ISCAYCRUZ', slug: 'iscaycruz', items: ['Informe técnico de muestreo especializado.'] },
  ],
  en: [],
  pt: [],
}

const alsoTrustedByLocale: Record<SupportedLocale, AlsoTrusted[]> = {
  es: [
    { name: 'UM. CARAHUACRA', slug: 'carahuacra' },
    { name: 'UM. SAN CRISTÓBAL', slug: 'cristobal' },
  ],
  en: [],
  pt: [],
}

export const getStats = (locale: SupportedLocale): StatItem[] =>
  statsByLocale[locale].length > 0 ? statsByLocale[locale] : statsByLocale.es

export const getProjectsData = (locale: SupportedLocale): ProjectItem[] =>
  projectsDataByLocale[locale].length > 0 ? projectsDataByLocale[locale] : projectsDataByLocale.es

export const getAlsoTrusted = (locale: SupportedLocale): AlsoTrusted[] =>
  alsoTrustedByLocale[locale].length > 0 ? alsoTrustedByLocale[locale] : alsoTrustedByLocale.es

// Backward-compat — remove after Phase 3
export const stats = statsByLocale.es
export const projectsData = projectsDataByLocale.es
export const alsoTrusted = alsoTrustedByLocale.es
