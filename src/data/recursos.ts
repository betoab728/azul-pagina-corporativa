import type { SupportedLocale } from '../i18n/utils'

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
  pdfUrl: string
}

// TODO: Reemplazar imágenes placeholder con imágenes reales del cliente
const blogImg1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYxAzcDupDqMWasnJ1HfRuHdb7pKPzUgn9uUcKjm8g4hUO0d2X_MWFJwy5DzvHW8POnzbywBp9KHiuOjVeismpeyb9NvBDvReWD1bhC80Lc73mRvCGXLa0ufZPblXwpQry8OIDIInYNjS4EBco0LgcN0uBJXgSKXlkVZ5Zc02P2XlgAUpDzSsgWC1RGkaJs2CaOoCyYYPTGJNK_BYQWhJ9aCAa3-8XB8btIPFYdYA2_tqvr8ePrzgXZAmCFlnud0BZCrl1cOhiq9Ks'
const blogImg2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYyNaFeNZyoRbx5FAOAvhGr6fRCfQSXI6aIab_OiTVMS6siqGMqCwb_Uqe8iCfm2binmWf8Lk6cobHEyoXTTRJrXi73qb_gBWG5ID94TohCQ8BBn4OCkcIUrI-Ju7WpsiQM-zffpCltdrw8MUanmWC8ABsMTXMfOZ8t7KAoK94oOeNOc_tjQdCwB8AYTqa-HJHyZpkFPbFrFjGMe9XHrqE-GMhNF2peknY0cQNeY-gDoA-47aHaEngzeFkAp1OsnoKGRyqOeXrZrnF'
const blogImg3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJrkIblqL1fh6tNqYV4UwZYZ6XtICJOZ9onWT_dEHLpSQsW7qekoTSuyXHOxWWrh_HgzURs2NynpP1y2Va9ihWrXNus5zrEzmpmOGTo_i7De2p93zw_Z5MxSviECV-aQBvx6sw1jZ82mHTPWd0uP25XlvQs4Vui8UVpElJfUKA9RSvviuIsI_pjJ4yeUaDF0df_1GRVjDjJV5XNAWAHnueTF688fSd2df90jUq8K_M1FP_ymVHLXBfFml1K6uDXFcJP6yrx8BaFf-m'

const guiasByLocale: Record<SupportedLocale, GuiaItem[]> = {
  es: [
    { title: 'Ley General del Ambiente' },
    { title: 'Ley de Residuos Sólidos' },
    { title: 'Reglamento de Calidad de Aire' },
    { title: 'Normativa de Efluentes' },
  ],
  en: [
    { title: 'General Environmental Law' },
    { title: 'Solid Waste Law' },
    { title: 'Air Quality Regulation' },
    { title: 'Effluent Regulation' },
  ],
  pt: [
    { title: 'Lei Geral do Meio Ambiente' },
    { title: 'Lei de Resíduos Sólidos' },
    { title: 'Regulamento de Qualidade do Ar' },
    { title: 'Normativa de Efluentes' },
  ],
}

const blogArticlesByLocale: Record<SupportedLocale, BlogArticle[]> = {
  es: [
    { image: blogImg1, imageAlt: 'Sistema de filtración biológica en instalación industrial', category: 'INGENIERÍA', categoryColor: 'primary', title: 'Implementación de Plantas de Tratamiento Compactas', description: 'Descubre cómo optimizar el espacio en plantas industriales mediante sistemas de filtración biológica avanzada.' },
    { image: blogImg2, imageAlt: 'Materiales reciclados organizados en grilla geométrica', category: 'ECONOMÍA CIRCULAR', categoryColor: 'secondary', title: 'Del Residuo al Recurso: El Futuro de la Industria', description: 'Guía estratégica para transformar el pasivo ambiental en una oportunidad de valor para la cadena de suministro.' },
    { image: blogImg3, imageAlt: 'Dashboard digital de monitoreo ambiental en tablet', category: 'MONITOREO', categoryColor: 'tertiary', title: 'Digitalización del Monitoreo Ambiental en Tiempo Real', description: 'Uso de sensores IoT y analítica de datos para el cumplimiento estricto de los estándares de calidad ambiental (ECA).' },
  ],
  en: [
    { image: blogImg1, imageAlt: 'Biological filtration system in industrial facility', category: 'ENGINEERING', categoryColor: 'primary', title: 'Implementation of Compact Treatment Plants', description: 'Discover how to optimize space in industrial plants through advanced biological filtration systems.' },
    { image: blogImg2, imageAlt: 'Recycled materials organized in geometric grid', category: 'CIRCULAR ECONOMY', categoryColor: 'secondary', title: 'From Waste to Resource: The Future of Industry', description: 'Strategic guide to transform environmental liability into a value opportunity for the supply chain.' },
    { image: blogImg3, imageAlt: 'Digital environmental monitoring dashboard on tablet', category: 'MONITORING', categoryColor: 'tertiary', title: 'Digitalization of Real-Time Environmental Monitoring', description: 'Use of IoT sensors and data analytics for strict compliance with environmental quality standards (EQS).' },
  ],
  pt: [
    { image: blogImg1, imageAlt: 'Sistema de filtragem biológica em instalação industrial', category: 'ENGENHARIA', categoryColor: 'primary', title: 'Implementação de Plantas de Tratamento Compactas', description: 'Descubra como otimizar o espaço em plantas industriais mediante sistemas de filtragem biológica avançada.' },
    { image: blogImg2, imageAlt: 'Materiais reciclados organizados em grade geométrica', category: 'ECONOMIA CIRCULAR', categoryColor: 'secondary', title: 'Do Resíduo ao Recurso: O Futuro da Indústria', description: 'Guia estratégico para transformar o passivo ambiental em uma oportunidade de valor para a cadeia de suprimentos.' },
    { image: blogImg3, imageAlt: 'Dashboard digital de monitoramento ambiental em tablet', category: 'MONITORAMENTO', categoryColor: 'tertiary', title: 'Digitalização do Monitoramento Ambiental em Tempo Real', description: 'Uso de sensores IoT e análise de dados para o cumprimento estrito dos padrões de qualidade ambiental (ECA).' },
  ],
}

const eventosByLocale: Record<SupportedLocale, EventoItem[]> = {
  es: [
    { day: '01', month: 'CURSO', bgColor: 'primary', title: 'Plan de Minimización y Manejo de Residuos Sólidos No Municipales', description: 'Capacitación especializada en la elaboración e implementación del PMMRS conforme a la normativa vigente.', pdfUrl: '/docs/pdf/cursos/1-curso-pmmrs-2026.pdf' },
    { day: '02', month: 'CURSO', bgColor: 'secondary', title: 'Estudio de Caracterización de Residuos Sólidos No Municipales', description: 'Metodología para la caracterización técnica de residuos en operaciones industriales y mineras.', pdfUrl: '/docs/pdf/cursos/2-curso-caracterizacion-residuos.pdf' },
    { day: '03', month: 'CURSO', bgColor: 'tertiary', title: 'Gestión Municipal de Residuos Sólidos: Normativa, Operación y Financiamiento del Servicio', description: 'Curso integral sobre el marco normativo, operación y modelos de financiamiento para la gestión municipal de residuos.', pdfUrl: '/docs/pdf/cursos/3-curso-gestion-municipal.pdf' },
  ],
  en: [
    { day: '01', month: 'COURSE', bgColor: 'primary', title: 'Minimization and Management Plan for Non-Municipal Solid Waste', description: 'Specialized training in the development and implementation of PMMRS in accordance with current regulations.', pdfUrl: '/docs/pdf/cursos/1-curso-pmmrs-2026.pdf' },
    { day: '02', month: 'COURSE', bgColor: 'secondary', title: 'Non-Municipal Solid Waste Characterization Study', description: 'Methodology for the technical characterization of waste in industrial and mining operations.', pdfUrl: '/docs/pdf/cursos/2-curso-caracterizacion-residuos.pdf' },
    { day: '03', month: 'COURSE', bgColor: 'tertiary', title: 'Municipal Solid Waste Management: Regulation, Operation and Service Financing', description: 'Comprehensive course on the regulatory framework, operation and financing models for municipal waste management.', pdfUrl: '/docs/pdf/cursos/3-curso-gestion-municipal.pdf' },
  ],
  pt: [
    { day: '01', month: 'CURSO', bgColor: 'primary', title: 'Plano de Minimização e Manejo de Resíduos Sólidos Não Municipais', description: 'Capacitação especializada na elaboração e implementação do PMMRS conforme a legislação vigente.', pdfUrl: '/docs/pdf/cursos/1-curso-pmmrs-2026.pdf' },
    { day: '02', month: 'CURSO', bgColor: 'secondary', title: 'Estudo de Caracterização de Resíduos Sólidos Não Municipais', description: 'Metodologia para a caracterização técnica de resíduos em operações industriais e mineradoras.', pdfUrl: '/docs/pdf/cursos/2-curso-caracterizacion-residuos.pdf' },
    { day: '03', month: 'CURSO', bgColor: 'tertiary', title: 'Gestão Municipal de Resíduos Sólidos: Normativa, Operação e Financiamento do Serviço', description: 'Curso integral sobre o marco normativo, operação e modelos de financiamento para a gestão municipal de resíduos.', pdfUrl: '/docs/pdf/cursos/3-curso-gestion-municipal.pdf' },
  ],

}

export const getGuias = (locale: SupportedLocale): GuiaItem[] =>
  guiasByLocale[locale].length > 0 ? guiasByLocale[locale] : guiasByLocale.es

export const getBlogArticles = (locale: SupportedLocale): BlogArticle[] =>
  blogArticlesByLocale[locale].length > 0 ? blogArticlesByLocale[locale] : blogArticlesByLocale.es

export const getEventos = (locale: SupportedLocale): EventoItem[] =>
  eventosByLocale[locale].length > 0 ? eventosByLocale[locale] : eventosByLocale.es

// Backward-compat — remove after Phase 3
export const guias = guiasByLocale.es
export const blogArticles = blogArticlesByLocale.es
export const eventos = eventosByLocale.es
