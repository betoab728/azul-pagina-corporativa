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
  },
} as const

export default ui
