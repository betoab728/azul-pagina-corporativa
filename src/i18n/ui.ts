/**
 * Diccionario de strings de UI para los tres locales soportados.
 * Mantener los tres locales en un único archivo permite detectar
 * de inmediato si falta una clave en algún locale.
 *
 * Convenciones de clave: dominio.subclave  (ej: 'nav.home', 'btn.quote')
 * Los strings de contenido rico (títulos de servicio, descripciones)
 * viven en src/data/*.ts, no aquí.
 */

const ui = {
  es: {
    // ── Navegación ──────────────────────────────────────────────
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.accreditations': 'Acreditaciones',
    'nav.sectors': 'Sectores',
    'nav.projects': 'Proyectos',
    'nav.about': 'Nosotros',
    'nav.resources': 'Recursos',
    'nav.contact': 'Contacto',
    'nav.cta': 'Cotiza tu proyecto',

    // ── Hero ─────────────────────────────────────────────────────
    'hero.badge': 'INGENIERÍA AMBIENTAL',
    'hero.cta.primary': 'Cotiza tu proyecto',
    'hero.cta.secondary': 'Diagnóstico ambiental gratuito',

    // ── Botones generales ────────────────────────────────────────
    'btn.more': 'Más información',
    'btn.view_more': 'Ver más',
    'btn.quote': 'Cotiza tu proyecto',
    'btn.contact': 'Contáctanos',
    'btn.request_quote': 'Solicitar Cotización',
    'btn.free_diagnosis': 'Diagnóstico gratuito',
    'btn.view_project': 'Ver proyecto',
    'btn.download': 'Descargar',
    'btn.open_pdf': 'Abrir PDF',
    'btn.send': 'Enviar',
    'btn.back': 'Volver',

    // ── Labels de sección ────────────────────────────────────────
    'section.services': 'NUESTROS SERVICIOS',
    'section.about': '¿QUIÉNES SOMOS?',
    'section.impact': 'NUESTRO IMPACTO',
    'section.sectors': 'SECTORES QUE ATENDEMOS',
    'section.projects': 'PROYECTOS DESTACADOS',
    'section.testimonials': 'LO QUE DICEN NUESTROS CLIENTES',
    'section.quote': 'COTIZACIÓN RÁPIDA',
    'section.partners': 'NUESTROS CLIENTES',
    'section.accreditations': 'NUESTRAS ACREDITACIONES',
    'section.why_us': '¿POR QUÉ ELEGIRNOS?',

    // ── Formulario de cotización ─────────────────────────────────
    'form.name': 'Nombre completo',
    'form.email': 'Correo electrónico',
    'form.phone': 'Teléfono',
    'form.company': 'Empresa',
    'form.service': 'Servicio de interés',
    'form.message': 'Mensaje',
    'form.submit': 'Enviar cotización',
    'form.required': 'Campo requerido',
    'form.select_service': 'Selecciona un servicio',

    // ── Footer ───────────────────────────────────────────────────
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.social': 'Redes Sociales',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.complaints': 'Libro de Reclamaciones',
    'footer.rights': 'Todos los derechos reservados',
    'footer.tagline': 'Azul Sostenible es una empresa peruana especializada en ingeniería ambiental y gestión integral de residuos sólidos, comprometida con la sostenibilidad, la innovación y el desarrollo responsable.',
    'footer.schedule': 'Lunes a Viernes',
    'footer.hours': '8:00 am - 6:00 pm',
    'footer.follow': 'Síguenos y conoce nuestras iniciativas en sostenibilidad y economía circular.',

    // ── Selector de idioma ───────────────────────────────────────
    'lang.label': 'Idioma',
    'lang.es': 'Español',
    'lang.en': 'English',
    'lang.pt': 'Português',

    // ── Accesibilidad / ARIA ─────────────────────────────────────
    'aria.open_menu': 'Abrir menú de navegación',
    'aria.close_menu': 'Cerrar menú de navegación',
    'aria.logo': 'Azul Sostenible — Ir al inicio',
    'aria.whatsapp': 'Contactar por WhatsApp',
    'aria.main_nav': 'Navegación principal',
    'aria.legal_nav': 'Enlaces legales',

    // ── Acreditaciones ───────────────────────────────────────────
    'accreditations.badge': 'COMPLIANCE & ACREDITACIONES',
    'accreditations.hero.title': 'Respaldados por la normativa, elegidos por la confianza',

    // ── Sectores ─────────────────────────────────────────────────
    'sectors.badge': 'COBERTURA SECTORIAL',
    'sectors.mining': 'Sector Minero',
    'sectors.industrial': 'Sector Industrial',
    'sectors.health': 'Sector Salud',
    'sectors.agro': 'Sector Agroindustrial',

    // ── Proyectos ────────────────────────────────────────────────
    'projects.badge': 'CASOS DE ÉXITO',
    'projects.sector_label': 'Sector',

    // ── Contacto ─────────────────────────────────────────────────
    'contact.badge': 'HABLEMOS',
    'contact.title': 'Estamos aquí para ayudarte',
    'contact.address': 'Dirección',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo electrónico',
    'contact.schedule': 'Horario de atención',

    // ── Nosotros ─────────────────────────────────────────────────
    'about.badge': '¿QUIÉNES SOMOS?',
    'about.mission': 'Misión',
    'about.vision': 'Visión',
    'about.values': 'Valores',
    'about.faq': 'Preguntas Frecuentes',

    // ── Recursos ─────────────────────────────────────────────────
    'resources.badge': 'CENTRO DE RECURSOS',
    'resources.guides': 'Guías Normativas',
    'resources.calculators': 'Calculadoras',
    'resources.blog': 'Blog',
    'resources.events': 'Capacitaciones',
    'resources.newsletter': 'Suscríbete a nuestro newsletter',

    // ── Secciones home ───────────────────────────────────────────
    'hero.title.pre': 'Transformamos',
    'hero.title.highlight': 'residuos',
    'hero.title.post': 'en impacto sostenible.',
    'hero.subtitle': 'Soluciones ambientales integrales que cumplen la normativa, reducen riesgos y generan valor sostenible.',
    'hero.feature.compliance': 'Cumplimiento normativo',
    'hero.feature.cost_reduction': 'Reducción de costos',
    'hero.feature.impact': 'Impacto medible',
    'services.tagline': 'Soluciones integrales para cada necesidad',
    'services.description': 'Diseñamos e implementamos soluciones ambientales efectivas y sostenibles.',
    'about.headline': '¡Somos Azul Sostenible!',
    'about.body': '¡Somos una empresa comprometida con el desarrollo sostenible. Brindamos servicios ambientales integrales con responsabilidad, innovación y respeto por nuestro entorno.',
    'about.img_alt': 'Equipo de Azul Sostenible trabajando en campo',
    'about.cta_discover': '¡Conócenos más!',
    'sectors.tagline': 'Acompañamos a empresas de distintos sectores',
    'sectors.description': 'Adaptamos nuestras soluciones a los desafíos ambientales de cada industria.',
    'impact.prompt': 'TÚ PODRÍAS SER EL PRÓXIMO',
    'impact.cta': 'SOLICITA UNA COTIZACIÓN',
    'projects.tagline': 'Conoce algunos de nuestros logros',
    'projects.why_title': '¿Por qué elegir Azul Sostenible?',
    'quote.tagline': 'Cotiza tu proyecto en 2 minutos',
    'quote.subtitle': 'Cuéntanos sobre tu proyecto y nuestro equipo de expertos te contactará con una propuesta personalizada.',
    'quote.feat1.title': 'Respuesta rápida',
    'quote.feat1.desc': 'Menos de 24 horas.',
    'quote.feat2.title': 'Asesoría experta',
    'quote.feat2.desc': 'Soluciones a medida.',
    'quote.feat3.title': 'Propuesta a medida',
    'quote.feat3.desc': 'Adaptada a tus necesidades.',
    'quote.feat4.title': 'Confidencialidad',
    'quote.feat4.desc': 'Información protegida.',
    'quote.help.title': '¿Necesitas ayuda personalizada?',
    'quote.help.desc': 'Habla con un asesor especializado',
    'partners.tagline': 'Cada empresa que ves aquí confió su gestión ambiental a nuestras manos',
    'testimonials.heading': 'Lo que dicen nuestros clientes',
  },

  en: {
    // ── Navigation ───────────────────────────────────────────────
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.accreditations': 'Accreditations',
    'nav.sectors': 'Sectors',
    'nav.projects': 'Projects',
    'nav.about': 'About Us',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a quote',

    // ── Hero ─────────────────────────────────────────────────────
    'hero.badge': 'ENVIRONMENTAL ENGINEERING',
    'hero.cta.primary': 'Get a quote',
    'hero.cta.secondary': 'Free environmental diagnosis',

    // ── Buttons ──────────────────────────────────────────────────
    'btn.more': 'Learn more',
    'btn.view_more': 'View more',
    'btn.quote': 'Get a quote',
    'btn.contact': 'Contact us',
    'btn.request_quote': 'Request a Quote',
    'btn.free_diagnosis': 'Free diagnosis',
    'btn.view_project': 'View project',
    'btn.download': 'Download',
    'btn.open_pdf': 'Open PDF',
    'btn.send': 'Send',
    'btn.back': 'Back',

    // ── Section labels ───────────────────────────────────────────
    'section.services': 'OUR SERVICES',
    'section.about': 'WHO WE ARE',
    'section.impact': 'OUR IMPACT',
    'section.sectors': 'SECTORS WE SERVE',
    'section.projects': 'FEATURED PROJECTS',
    'section.testimonials': 'WHAT OUR CLIENTS SAY',
    'section.quote': 'QUICK QUOTE',
    'section.partners': 'OUR CLIENTS',
    'section.accreditations': 'OUR ACCREDITATIONS',
    'section.why_us': 'WHY CHOOSE US?',

    // ── Quote form ───────────────────────────────────────────────
    'form.name': 'Full name',
    'form.email': 'Email address',
    'form.phone': 'Phone number',
    'form.company': 'Company',
    'form.service': 'Service of interest',
    'form.message': 'Message',
    'form.submit': 'Submit quote request',
    'form.required': 'Required field',
    'form.select_service': 'Select a service',

    // ── Footer ───────────────────────────────────────────────────
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.complaints': 'Complaints Book',
    'footer.rights': 'All rights reserved',
    'footer.tagline': 'Azul Sostenible is a Peruvian company specializing in environmental engineering and comprehensive solid waste management, committed to sustainability, innovation, and responsible development.',
    'footer.schedule': 'Monday to Friday',
    'footer.hours': '8:00 am - 6:00 pm',
    'footer.follow': 'Follow us and learn about our sustainability and circular economy initiatives.',

    // ── Language selector ────────────────────────────────────────
    'lang.label': 'Language',
    'lang.es': 'Español',
    'lang.en': 'English',
    'lang.pt': 'Português',

    // ── Accessibility / ARIA ─────────────────────────────────────
    'aria.open_menu': 'Open navigation menu',
    'aria.close_menu': 'Close navigation menu',
    'aria.logo': 'Azul Sostenible — Go to homepage',
    'aria.whatsapp': 'Contact via WhatsApp',
    'aria.main_nav': 'Main navigation',
    'aria.legal_nav': 'Legal links',

    // ── Accreditations ───────────────────────────────────────────
    'accreditations.badge': 'COMPLIANCE & ACCREDITATIONS',
    'accreditations.hero.title': 'Backed by regulations, chosen by trust',

    // ── Sectors ──────────────────────────────────────────────────
    'sectors.badge': 'SECTOR COVERAGE',
    'sectors.mining': 'Mining Sector',
    'sectors.industrial': 'Industrial Sector',
    'sectors.health': 'Healthcare Sector',
    'sectors.agro': 'Agro-industrial Sector',

    // ── Projects ─────────────────────────────────────────────────
    'projects.badge': 'SUCCESS STORIES',
    'projects.sector_label': 'Sector',

    // ── Contact ──────────────────────────────────────────────────
    'contact.badge': "LET'S TALK",
    'contact.title': "We're here to help you",
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.schedule': 'Business hours',

    // ── About ────────────────────────────────────────────────────
    'about.badge': 'WHO WE ARE',
    'about.mission': 'Mission',
    'about.vision': 'Vision',
    'about.values': 'Values',
    'about.faq': 'Frequently Asked Questions',

    // ── Resources ────────────────────────────────────────────────
    'resources.badge': 'RESOURCE CENTER',
    'resources.guides': 'Regulatory Guides',
    'resources.calculators': 'Calculators',
    'resources.blog': 'Blog',
    'resources.events': 'Training',
    'resources.newsletter': 'Subscribe to our newsletter',

    // ── Home sections ────────────────────────────────────────────
    'hero.title.pre': 'We turn',
    'hero.title.highlight': 'waste',
    'hero.title.post': 'into sustainable impact.',
    'hero.subtitle': 'Comprehensive environmental solutions that comply with regulations, reduce risks and generate sustainable value.',
    'hero.feature.compliance': 'Regulatory compliance',
    'hero.feature.cost_reduction': 'Cost reduction',
    'hero.feature.impact': 'Measurable impact',
    'services.tagline': 'Comprehensive solutions for every need',
    'services.description': 'We design and implement effective and sustainable environmental solutions.',
    'about.headline': 'We are Azul Sostenible!',
    'about.body': 'We are a company committed to sustainable development. We provide comprehensive environmental services with responsibility, innovation and respect for our environment.',
    'about.img_alt': 'Azul Sostenible team working in the field',
    'about.cta_discover': 'Learn more about us!',
    'sectors.tagline': 'We work with companies across different sectors',
    'sectors.description': 'We tailor our solutions to the environmental challenges of each industry.',
    'impact.prompt': 'YOU COULD BE NEXT',
    'impact.cta': 'REQUEST A QUOTE',
    'projects.tagline': 'Discover some of our achievements',
    'projects.why_title': 'Why choose Azul Sostenible?',
    'quote.tagline': 'Get a quote in 2 minutes',
    'quote.subtitle': 'Tell us about your project and our team of experts will contact you with a personalized proposal.',
    'quote.feat1.title': 'Fast response',
    'quote.feat1.desc': 'Under 24 hours.',
    'quote.feat2.title': 'Expert advice',
    'quote.feat2.desc': 'Tailored solutions.',
    'quote.feat3.title': 'Custom proposal',
    'quote.feat3.desc': 'Tailored to your needs.',
    'quote.feat4.title': 'Confidentiality',
    'quote.feat4.desc': 'Protected information.',
    'quote.help.title': 'Need personalized help?',
    'quote.help.desc': 'Speak with a specialized advisor',
    'partners.tagline': 'Every company here trusted us with their environmental management',
    'testimonials.heading': 'What our clients say',
  },

  pt: {
    // ── Navegação ────────────────────────────────────────────────
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.accreditations': 'Acreditações',
    'nav.sectors': 'Setores',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre nós',
    'nav.resources': 'Recursos',
    'nav.contact': 'Contato',
    'nav.cta': 'Solicitar cotação',

    // ── Hero ─────────────────────────────────────────────────────
    'hero.badge': 'ENGENHARIA AMBIENTAL',
    'hero.cta.primary': 'Solicitar cotação',
    'hero.cta.secondary': 'Diagnóstico ambiental gratuito',

    // ── Botões ───────────────────────────────────────────────────
    'btn.more': 'Saiba mais',
    'btn.view_more': 'Ver mais',
    'btn.quote': 'Solicitar cotação',
    'btn.contact': 'Entre em contato',
    'btn.request_quote': 'Solicitar Cotação',
    'btn.free_diagnosis': 'Diagnóstico gratuito',
    'btn.view_project': 'Ver projeto',
    'btn.download': 'Baixar',
    'btn.open_pdf': 'Abrir PDF',
    'btn.send': 'Enviar',
    'btn.back': 'Voltar',

    // ── Labels de seção ──────────────────────────────────────────
    'section.services': 'NOSSOS SERVIÇOS',
    'section.about': 'QUEM SOMOS',
    'section.impact': 'NOSSO IMPACTO',
    'section.sectors': 'SETORES QUE ATENDEMOS',
    'section.projects': 'PROJETOS DESTACADOS',
    'section.testimonials': 'O QUE NOSSOS CLIENTES DIZEM',
    'section.quote': 'COTAÇÃO RÁPIDA',
    'section.partners': 'NOSSOS CLIENTES',
    'section.accreditations': 'NOSSAS ACREDITAÇÕES',
    'section.why_us': 'POR QUE NOS ESCOLHER?',

    // ── Formulário ───────────────────────────────────────────────
    'form.name': 'Nome completo',
    'form.email': 'Endereço de e-mail',
    'form.phone': 'Telefone',
    'form.company': 'Empresa',
    'form.service': 'Serviço de interesse',
    'form.message': 'Mensagem',
    'form.submit': 'Enviar cotação',
    'form.required': 'Campo obrigatório',
    'form.select_service': 'Selecione um serviço',

    // ── Footer ───────────────────────────────────────────────────
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.social': 'Redes Sociais',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos e Condições',
    'footer.complaints': 'Livro de Reclamações',
    'footer.rights': 'Todos os direitos reservados',
    'footer.tagline': 'Azul Sostenible é uma empresa peruana especializada em engenharia ambiental e gestão integral de resíduos sólidos, comprometida com a sustentabilidade, inovação e desenvolvimento responsável.',
    'footer.schedule': 'Segunda a Sexta',
    'footer.hours': '8:00 - 18:00',
    'footer.follow': 'Siga-nos e conheça nossas iniciativas em sustentabilidade e economia circular.',

    // ── Seletor de idioma ────────────────────────────────────────
    'lang.label': 'Idioma',
    'lang.es': 'Español',
    'lang.en': 'English',
    'lang.pt': 'Português',

    // ── Acessibilidade / ARIA ────────────────────────────────────
    'aria.open_menu': 'Abrir menu de navegação',
    'aria.close_menu': 'Fechar menu de navegação',
    'aria.logo': 'Azul Sostenible — Ir para a página inicial',
    'aria.whatsapp': 'Contato via WhatsApp',
    'aria.main_nav': 'Navegação principal',
    'aria.legal_nav': 'Links legais',

    // ── Acreditações ─────────────────────────────────────────────
    'accreditations.badge': 'COMPLIANCE E ACREDITAÇÕES',
    'accreditations.hero.title': 'Respaldados pela regulamentação, escolhidos pela confiança',

    // ── Setores ──────────────────────────────────────────────────
    'sectors.badge': 'COBERTURA SETORIAL',
    'sectors.mining': 'Setor Mineração',
    'sectors.industrial': 'Setor Industrial',
    'sectors.health': 'Setor Saúde',
    'sectors.agro': 'Setor Agroindustrial',

    // ── Projetos ─────────────────────────────────────────────────
    'projects.badge': 'CASOS DE SUCESSO',
    'projects.sector_label': 'Setor',

    // ── Contato ──────────────────────────────────────────────────
    'contact.badge': 'VAMOS CONVERSAR',
    'contact.title': 'Estamos aqui para ajudá-lo',
    'contact.address': 'Endereço',
    'contact.phone': 'Telefone',
    'contact.email': 'E-mail',
    'contact.schedule': 'Horário de atendimento',

    // ── Sobre ────────────────────────────────────────────────────
    'about.badge': 'QUEM SOMOS',
    'about.mission': 'Missão',
    'about.vision': 'Visão',
    'about.values': 'Valores',
    'about.faq': 'Perguntas Frequentes',

    // ── Recursos ─────────────────────────────────────────────────
    'resources.badge': 'CENTRO DE RECURSOS',
    'resources.guides': 'Guias Regulatórios',
    'resources.calculators': 'Calculadoras',
    'resources.blog': 'Blog',
    'resources.events': 'Treinamentos',
    'resources.newsletter': 'Assine nossa newsletter',

    // ── Seções home ──────────────────────────────────────────────
    'hero.title.pre': 'Transformamos',
    'hero.title.highlight': 'resíduos',
    'hero.title.post': 'em impacto sustentável.',
    'hero.subtitle': 'Soluções ambientais integrais que cumprem a regulamentação, reduzem riscos e geram valor sustentável.',
    'hero.feature.compliance': 'Conformidade regulatória',
    'hero.feature.cost_reduction': 'Redução de custos',
    'hero.feature.impact': 'Impacto mensurável',
    'services.tagline': 'Soluções integrais para cada necessidade',
    'services.description': 'Projetamos e implementamos soluções ambientais eficazes e sustentáveis.',
    'about.headline': 'Somos a Azul Sostenible!',
    'about.body': 'Somos uma empresa comprometida com o desenvolvimento sustentável. Prestamos serviços ambientais integrais com responsabilidade, inovação e respeito pelo nosso entorno.',
    'about.img_alt': 'Equipe da Azul Sostenible trabalhando no campo',
    'about.cta_discover': 'Conheça-nos mais!',
    'sectors.tagline': 'Trabalhamos com empresas de diferentes setores',
    'sectors.description': 'Adaptamos nossas soluções aos desafios ambientais de cada indústria.',
    'impact.prompt': 'VOCÊ PODE SER O PRÓXIMO',
    'impact.cta': 'SOLICITE UMA COTAÇÃO',
    'projects.tagline': 'Conheça algumas das nossas conquistas',
    'projects.why_title': 'Por que escolher a Azul Sostenible?',
    'quote.tagline': 'Solicite uma cotação em 2 minutos',
    'quote.subtitle': 'Conte-nos sobre seu projeto e nossa equipe de especialistas entrará em contato com uma proposta personalizada.',
    'quote.feat1.title': 'Resposta rápida',
    'quote.feat1.desc': 'Em menos de 24 horas.',
    'quote.feat2.title': 'Assessoria especializada',
    'quote.feat2.desc': 'Soluções sob medida.',
    'quote.feat3.title': 'Proposta personalizada',
    'quote.feat3.desc': 'Adaptada às suas necessidades.',
    'quote.feat4.title': 'Confidencialidade',
    'quote.feat4.desc': 'Informações protegidas.',
    'quote.help.title': 'Precisa de ajuda personalizada?',
    'quote.help.desc': 'Fale com um consultor especializado',
    'partners.tagline': 'Cada empresa aqui confiou sua gestão ambiental às nossas mãos',
    'testimonials.heading': 'O que nossos clientes dizem',
  },
} as const

export default ui
