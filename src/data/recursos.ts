export interface GuiaItem {
  title: string
}

export interface BlogArticle {
  image: string
  imageAlt: string
  category: string
  categoryColor: 'primary' | 'secondary' | 'tertiary'
  title: string
  description: string
}

export interface EventoItem {
  day: string
  month: string
  bgColor: 'primary' | 'secondary' | 'tertiary'
  title: string
  description: string
}

export const guias: GuiaItem[] = [
  { title: 'Ley General del Ambiente' },
  { title: 'Ley de Residuos Sólidos' },
  { title: 'Reglamento de Calidad de Aire' },
  { title: 'Normativa de Efluentes' },
]

// TODO: Reemplazar imágenes placeholder con imágenes reales del cliente
const blogImg1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYxAzcDupDqMWasnJ1HfRuHdb7pKPzUgn9uUcKjm8g4hUO0d2X_MWFJwy5DzvHW8POnzbywBp9KHiuOjVeismpeyb9NvBDvReWD1bhC80Lc73mRvCGXLa0ufZPblXwpQry8OIDIInYNjS4EBco0LgcN0uBJXgSKXlkVZ5Zc02P2XlgAUpDzSsgWC1RGkaJs2CaOoCyYYPTGJNK_BYQWhJ9aCAa3-8XB8btIPFYdYA2_tqvr8ePrzgXZAmCFlnud0BZCrl1cOhiq9Ks'
const blogImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYyNaFeNZyoRbx5FAOAvhGr6fRCfQSXI6aIab_OiTVMS6siqGMqCwb_Uqe8iCfm2binmWf8Lk6cobHEyoXTTRJrXi73qb_gBWG5ID94TohCQ8BBn4OCkcIUrI-Ju7WpsiQM-zffpCltdrw8MUanmWC8ABsMTXMfOZ8t7KAoK94oOeNOc_tjQdCwB8AYTqa-HJHyZpkFPbFrFjGMe9XHrqE-GMhNF2peknY0cQNeY-gDoA-47aHaEngzeFkAp1OsnoKGRyqOeXrZrnF'
const blogImg3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJrkIblqL1fh6tNqYV4UwZYZ6XtICJOZ9onWT_dEHLpSQsW7qekoTSuyXHOxWWrh_HgzURs2NynpP1y2Va9ihWrXNus5zrEzmpmOGTo_i7De2p93zw_Z5MxSviECV-aQBvx6sw1jZ82mHTPWd0uP25XlvQs4Vui8UVpElJfUKA9RSvviuIsI_pjJ4yeUaDF0df_1GRVjDjJV5XNAWAHnueTF688fSd2df90jUq8K_M1FP_ymVHLXBfFml1K6uDXFcJP6yrx8BaFf-m'

export const blogArticles: BlogArticle[] = [
  { image: blogImg1, imageAlt: 'Sistema de filtración biológica en instalación industrial', category: 'INGENIERÍA', categoryColor: 'primary', title: 'Implementación de Plantas de Tratamiento Compactas', description: 'Descubre cómo optimizar el espacio en plantas industriales mediante sistemas de filtración biológica avanzada.' },
  { image: blogImg2, imageAlt: 'Materiales reciclados organizados en grilla geométrica', category: 'ECONOMÍA CIRCULAR', categoryColor: 'secondary', title: 'Del Residuo al Recurso: El Futuro de la Industria', description: 'Guía estratégica para transformar el pasivo ambiental en una oportunidad de valor para la cadena de suministro.' },
  { image: blogImg3, imageAlt: 'Dashboard digital de monitoreo ambiental en tablet', category: 'MONITOREO', categoryColor: 'tertiary', title: 'Digitalización del Monitoreo Ambiental en Tiempo Real', description: 'Uso de sensores IoT y analítica de datos para el cumplimiento estricto de los estándares de calidad ambiental (ECA).' },
]

export const eventos: EventoItem[] = [
  { day: '15', month: 'OCT', bgColor: 'primary', title: 'Taller de Gestión de Residuos Peligrosos', description: 'Sesión práctica sobre normativa y almacenamiento seguro.' },
  { day: '22', month: 'OCT', bgColor: 'secondary', title: 'Estrategias de Descarbonización 2025', description: 'Webinar sobre transición energética para medianas empresas.' },
  { day: '04', month: 'NOV', bgColor: 'tertiary', title: 'Auditorías Ambientales de Cumplimiento', description: 'Preparación técnica para fiscalizaciones de OEFA.' },
]
