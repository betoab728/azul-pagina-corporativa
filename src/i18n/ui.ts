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
    'form.quote_title': 'Completa el formulario',
    'form.quote_subtitle': 'y recibe tu cotización gratuita',
    'form.company_org': 'Empresa / Organización',
    'form.name_placeholder': 'Ej: Juan Pérez',
    'form.company_placeholder': 'Ej: Minera ABC',
    'form.sector': 'Sector',
    'form.sector_placeholder': 'Selecciona tu sector',
    'form.sector_mining': 'Minería',
    'form.sector_industrial': 'Industrial',
    'form.sector_health': 'Salud',
    'form.sector_agro': 'Agroindustrial',
    'form.challenge': '¿Cuál es tu principal desafío ambiental?',
    'form.challenge_placeholder': 'Selecciona una opción',
    'form.challenge_waste': 'Gestión de residuos',
    'form.challenge_water': 'Tratamiento de aguas',
    'form.challenge_consulting': 'Consultoría ambiental',
    'form.challenge_other': 'Otros',
    'form.phone_whatsapp': 'Teléfono / WhatsApp',
    'form.phone_placeholder': 'Ej: 969 123 456',
    'form.quote_submit': 'Quiero una asesoría gratuita',
    'form.response_time': 'Respondemos en menos de 24 horas',

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

    'acreditaciones.hero.badge': 'Acreditaciones Oficiales',
    'acreditaciones.hero.title': 'Gestión Ambiental Avalada',
    'acreditaciones.hero.body': 'Todo lo que hacemos está respaldado por acreditaciones oficiales. Garantizamos que su infraestructura y procesos cumplan con los más altos estándares internacionales de sostenibilidad.',

    // ── Acreditaciones Compliance ─────────────────────────────────
    'acreditaciones.compliance.title': 'Cumplimiento Garantizado con la Normativa Ambiental Vigente',
    'acreditaciones.compliance.subtitle': 'Tu empresa opera sin riesgos, multas ni observaciones.',
    'acreditaciones.open_pdf': 'Abrir PDF',

    'acreditaciones.homologaciones.title': 'Homologaciones',
    'acreditaciones.homologaciones.badge': 'Certificaciones Sectoriales',

    'acreditaciones.logistica.title': 'Capacidad Logística y Operativa Certificada',

    // ── Acreditaciones Operaciones ────────────────────────────────
    'acreditaciones.operaciones.title': 'OPERACIONES AUTORIZADAS POR EL ESTADO PERUANO',
    'acreditaciones.operaciones.img_alt': 'Inspección técnica de sistemas de filtración industrial',
    'acreditaciones.operaciones.registro_title': 'Registro EO–RS Autorizado por MINAM',
    'acreditaciones.operaciones.registro_body': 'Autoriza la gestión de residuos peligrosos y no peligrosos. Te respalda legalmente frente a fiscalizaciones de OEFA y auditorías de sostenibilidad ESG corporativas.',
    'acreditaciones.operaciones.cta_alcance': 'ABRIR ALCANCE',
    'acreditaciones.operaciones.cta_registro': 'ABRIR REGISTRO AUTORITATIVO',

    'acreditaciones.cierre.title': 'Tu gestión ambiental no solo cumple la ley:<br />está blindada con autorizaciones verificables',
    'acreditaciones.cierre.title_1': 'Tu gestión ambiental no solo cumple la ley:',
    'acreditaciones.cierre.title_2': 'está blindada con autorizaciones verificables',
    'acreditaciones.cierre.cta': 'Solicitar acreditaciones completas',

    // ── Sectores ─────────────────────────────────────────────────
    'sectors.badge': 'COBERTURA SECTORIAL',
    'sectors.mining': 'Sector Minero',
    'sectors.industrial': 'Sector Industrial',
    'sectors.health': 'Sector Salud',
    'sectors.agro': 'Sector Agroindustrial',

    // ── Sectores Hero ────────────────────────────────────────────
    'sectores.hero.badge': 'Expertos Multidisciplinarios',
    'sectores.hero.title': 'Acompañamos a empresas de diversos sectores',
    'sectores.hero.subtitle': 'Soluciones de ingeniería ambiental diseñadas para la realidad técnica y normativa de cada industria en el Perú.',
    'sectores.hero.cta': 'Explorar Industrias',

    // ── Sectores Bento ───────────────────────────────────────────
    'sectores.bento.title': 'Nuestra Especialización por Sector',
    'sectores.bento.link': 'Ver más',
    'sectores.bento.industrial.title': 'Sector Industrial',
    'sectores.bento.industrial.body': 'Potenciamos la eficiencia operativa mediante la gestión técnica de recursos y el cumplimiento de estándares internacionales.',
    'sectores.bento.industrial.li1': 'Disposición de químicos',
    'sectores.bento.industrial.li2': 'Auditorías de procesos',
    'sectores.bento.industrial.li3': 'Huella de carbono',
    'sectores.bento.industrial.li4': 'Optimización hídrica',
    'sectores.bento.industrial.case': 'CASO DE ÉXITO: Reducción del 25% en vertimientos.',
    'sectores.bento.salud.title': 'Sector Salud',
    'sectores.bento.salud.badge': 'Alta Bioseguridad',
    'sectores.bento.salud.body': 'Gestión crítica de residuos biocontaminados y preparación integral para auditorías SUSALUD.',
    'sectores.bento.salud.footer': 'Cumplimiento del 100% en normativas de bioseguridad hospitalaria.',
    'sectores.bento.minero.title': 'Sector Minero',
    'sectores.bento.minero.body': 'Fortalecemos la licencia social y operamos la gestión técnica de residuos peligrosos y metálicos.',
    'sectores.bento.minero.tag1': 'Residuos Peligrosos',
    'sectores.bento.minero.tag2': 'Relaves',
    'sectores.bento.agro.title': 'Sector Agroindustrial',
    'sectores.bento.agro.body': 'Optimización de procesos agrícolas y cumplimiento de certificaciones internacionales para exportación.',
    'sectores.bento.agro.img_alt': 'Cultivo sostenible con sistema de riego optimizado',

    // ── Sectores Cierre ──────────────────────────────────────────
    'sectores.cierre.title': '¿Listo para elevar sus estándares ambientales?',
    'sectores.cierre.body': 'Agende una consultoría técnica con nuestros especialistas y descubra cómo podemos optimizar su gestión sectorial.',
    'sectores.cierre.cta_primary': 'Solicitar Auditoría',
    'sectores.cierre.cta_secondary': 'Hablar con un Experto',

    // ── Sectores Impacto ─────────────────────────────────────────
    'sectores.impacto.title': 'Impacto medible en cada operación',
    'sectores.impacto.body': 'No solo gestionamos residuos; transformamos la sostenibilidad en una ventaja competitiva real para su empresa.',
    'sectores.impacto.feature1_title': 'Cumplimiento Normativo Total',
    'sectores.impacto.feature1_desc': 'Mitigación absoluta de riesgos legales y sanciones ante la OEFA, ANA y Gobiernos Regionales.',
    'sectores.impacto.feature2_title': 'Continuidad Operativa',
    'sectores.impacto.feature2_desc': 'Gestión preventiva que evita paradas innecesarias por incidentes ambientales o sanitarios.',

    // ── Proyectos ────────────────────────────────────────────────
    'projects.badge': 'CASOS DE ÉXITO',
    'projects.sector_label': 'Sector',

    // ── Proyectos Hero ───────────────────────────────────────────
    'proyectos.hero.badge': 'Compromiso Ambiental',
    'proyectos.hero.title': 'Casos de éxito',
    'proyectos.hero.subtitle': 'Resultados que marcan la diferencia en la industria minera peruana a través de la gestión técnica y responsable.',

    'proyectos.stats.aria_label': 'Estadísticas de proyectos',

    // ── Contacto ─────────────────────────────────────────────────
    'contact.badge': 'HABLEMOS',
    'contact.title': 'Estamos aquí para ayudarte',
    'contact.address': 'Dirección',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo electrónico',
    'contact.schedule': 'Horario de atención',

    'contacto.hero.badge': 'Engineering for the future',
    'contacto.hero.title': 'Estamos listos para ayudarte',
    'contacto.hero.subtitle': 'Nuestra experiencia técnica en ingeniería ambiental garantiza que sus operaciones no solo cumplan con la normativa, sino que lideren el camino hacia la sostenibilidad activa.',

    'contacto.cierre.title': 'Optimice su desempeño ambiental hoy',
    'contacto.cierre.subtitle': 'Solicite una evaluación ambiental gratuita. Nuestros ingenieros analizarán sus procesos actuales para identificar oportunidades estratégicas de sostenibilidad y cumplimiento.',
    'contacto.cierre.btn': 'Solicitar Evaluación Gratuita',

    // ── Contacto Form ────────────────────────────────────────────
    'contacto.form.title': 'Envíenos un mensaje',
    'contacto.form.name_placeholder': 'Juan Pérez',
    'contacto.form.company_placeholder': 'Nombre de su organización',
    'contacto.form.sector': 'Sector',
    'contacto.form.sector_mining': 'Minería',
    'contacto.form.sector_energy': 'Energía',
    'contacto.form.sector_industry': 'Industria',
    'contacto.form.sector_government': 'Gobierno',
    'contacto.form.sector_other': 'Otro',
    'contacto.form.email_corp': 'Email Corporativo',
    'contacto.form.email_placeholder': 'juan@empresa.com',
    'contacto.form.message_placeholder': '¿Cómo podemos colaborar en su próximo proyecto ambiental?',
    'contacto.form.submit': 'Enviar Consulta',
    'contacto.form.direct_info': 'Información Directa',
    'contacto.form.whatsapp_label': 'WhatsApp Corporativo',
    'contacto.form.video_title': 'Video de Azul Sostenible',

    // ── Nosotros ─────────────────────────────────────────────────
    'about.badge': '¿QUIÉNES SOMOS?',
    'about.mission': 'Misión',
    'about.vision': 'Visión',
    'about.values': 'Valores',
    'about.faq': 'Preguntas Frecuentes',

    // ── Nosotros About ───────────────────────────────────────────
    'nosotros.about.title': '¿Qué hace Azul Sostenible y a quién ayuda?',
    'nosotros.about.body': 'Ayudamos a organizaciones del sector industrial, minero, salud y agroindustrial a cumplir la normativa ambiental, reducir riesgos legales y optimizar costos mediante una gestión técnica, trazable y sostenible de sus residuos.',
    'nosotros.about.img_alt': 'Personal técnico de Azul Sostenible',

    'nosotros.cierre.title': 'LAS EMPRESAS INTELIGENTES GESTIONAN RESIDUOS, LAS EMPRESAS LÍDERES GESTIONAN IMPACTO',

    'nosotros.compliance.title': '¿Cómo ayudamos a las empresas a cumplir la normativa ambiental?',
    'nosotros.compliance.body': 'Acompañamos a las empresas en el cumplimiento de la normativa ambiental, fiscalizaciones de OEFA y exigencias regulatorias, asegurando trazabilidad, documentación válida y reducción de riesgos legales.',

    'nosotros.hero.title': 'EMPRESA ESPECIALIZADA EN LA GESTIÓN DE RESIDUOS SÓLIDOS, PELIGROSOS E INDUSTRIALES PARA EMPRESAS EN PERÚ',
    'nosotros.hero.subtitle': 'Evolucionamos de una gestión tradicional a una gestión inteligente y circular de residuos, enfocada en reducir riesgos, evitar sanciones y mejorar la eficiencia operativa.',
    'nosotros.hero.cta': 'SOLICITA UNA ASESORÍA',

    'nosotros.mvv.mission_body': 'Buscar la innovación y promover un nuevo modelo empresarial en el sector residuos sólidos mediante la Gestión Racional y Manejo Sostenible de los Residuos Sólidos, líquidos y Saneamiento Ambiental a nivel nacional.',
    'nosotros.mvv.vision_body': 'Ser una empresa referente en gestión ambiental, sostenibilidad y economía circular en el Perú, impulsando empresas responsables y competitivas.',
    'nosotros.mvv.valores_title': 'Nuestros Valores',

    'nosotros.sectores.title': '¿Qué tipo de empresas atendemos?',

    'nosotros.servicios.title': '¿Qué servicios de gestión de residuos ofrece Azul Sostenible?',
    'nosotros.servicios.description': 'Azul Sostenible brinda servicios de gestión de residuos sólidos, peligrosos e industriales que incluyen caracterización, recolección, transporte autorizado, valorización y disposición final, conforme a la normativa ambiental vigente en Perú.',

    // ── Recursos ─────────────────────────────────────────────────
    'resources.badge': 'CENTRO DE RECURSOS',
    'resources.guides': 'Guías Normativas',
    'resources.calculators': 'Calculadoras',
    'resources.blog': 'Blog',
    'resources.events': 'Capacitaciones',
    'resources.newsletter': 'Suscríbete a nuestro newsletter',

    'recursos.newsletter.title': '¿Necesitas una herramienta personalizada?',
    'recursos.newsletter.subtitle': 'Desarrollamos calculadoras y tableros de control de métricas ambientales a medida para tu empresa.',
    'recursos.newsletter.placeholder': 'Tu correo electrónico profesional',
    'recursos.newsletter.cta': 'Solicitar Demo',

    'recursos.hero.badge': 'Centro de Conocimiento',
    'recursos.hero.title': 'Información y Herramientas Sostenibles',
    'recursos.hero.body': 'Accede a recursos técnicos, calculadoras de impacto y las últimas normativas ambientales para impulsar la eficiencia y sostenibilidad en tu organización.',
    'recursos.hero.img_alt': 'Espacio de trabajo moderno con ingenieros revisando planos',
    'recursos.hero.card_title': 'Software de Trazabilidad',
    'recursos.hero.card_body': 'Conoce nuestra plataforma',

    'recursos.aliados.title': 'Aliados Estratégicos',
    'recursos.aliados.subtitle': 'Trabajamos junto a organizaciones comprometidas con la innovación y la sostenibilidad ambiental.',
    'recursos.aliados.wastefy_title': 'Nuestra App - Wastefy',
    'recursos.aliados.wastefy_subtitle': 'Servicio Integral de recolección de Residuos Sólidos',
    'recursos.aliados.wastefy_body': 'Wastefy es una app que tiene como propósito la prestación de los servicios de recolección, movilización, deposición y/o comercialización de distintos tipos de residuos.',
    'recursos.aliados.wastefy_cta': 'Descargar',
    'recursos.aliados.andeslab_body': 'Es un centro de investigación en ingeniería ambiental en Lima, Perú. Especializados en análisis de residuos sólidos y líquidos, comprometidos con la innovación para un desarrollo sostenible, contamos con profesionales acreditados por RENACYT y colaboramos con universidades y organismos nacionales e internacionales.',
    'recursos.aliados.banco_body': 'Es el primer organismo en impulsar la inclusión financiera ambiental mediante la conversión de residuos como recursos en fuentes de energía y materias primas, mediante la implementación de centros de industrialización y transformación de los desechos hacia la valorización energética y de materiales.',

    'recursos.blog.title': 'Blog Azul',
    'recursos.blog.subtitle': 'Artículos técnicos sobre ingeniería ambiental, economía circular y tendencias de sostenibilidad industrial.',
    'recursos.blog.view_all': 'Ver todos los artículos',

    'recursos.capacitaciones.title': 'Calendario de Capacitaciones',
    'recursos.capacitaciones.subtitle': 'Participa en nuestras sesiones de formación técnica dictadas por especialistas con amplia trayectoria en el sector ambiental.',
    'recursos.capacitaciones.li1': 'Certificación oficial incluida',
    'recursos.capacitaciones.li2': 'Modalidades Presencial y Online',
    'recursos.capacitaciones.view_more': 'Ver más',

    'recursos.guias.title': 'Guías Normativas',
    'recursos.guias.subtitle': 'Repositorio completo de leyes y reglamentos ambientales vigentes en el Perú.',
    'recursos.guias.carbono_title': 'Huella de Carbono',
    'recursos.guias.carbono_body': 'Mide las emisiones de CO2 de tus operaciones industriales.',
    'recursos.guias.carbono_cta': 'Iniciar Cálculo',
    'recursos.guias.residuos_title': 'Generación de Residuos',
    'recursos.guias.residuos_body': 'Optimiza tu gestión calculando la segregación y pesaje proyectado.',
    'recursos.guias.residuos_cta': 'Abrir Herramienta',

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

    // ── Proyectos Cierre ─────────────────────────────────────────
    'proyectos.cierre.title': '¿Quieres ser nuestro próximo caso de éxito?',
    'proyectos.cierre.body': 'Optimiza tus procesos ambientales con el respaldo de un equipo técnico experto y soluciones diseñadas a la medida de tu industria.',
    'proyectos.cierre.cta': 'Solicitar Auditoría',

    // ── Proyectos Grid ───────────────────────────────────────────
    'proyectos.grid.title': 'Nuestra Trayectoria Técnica',
    'proyectos.grid.body': 'Desarrollamos soluciones de ingeniería y gestión de residuos para las operaciones mineras más exigentes del país, asegurando la trazabilidad y sostenibilidad en cada proceso.',
    'proyectos.grid.card_cta': 'Ver detalle del caso',
    'proyectos.grid.also_trusted_title': 'También confiaron en nosotros',
    'proyectos.grid.also_trusted_body': 'Otras unidades mineras que han implementado nuestros protocolos de gestión ambiental.',
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

    // ── Chungar (caso de éxito) ──────────────────────────────────
    'chungar.hero.badge': 'PROYECTO DE ÉXITO',
    'chungar.hero.title': 'UM. CHUNGAR - Casos de éxito',
    'chungar.hero.subtitle': 'Optimizando la gestión de residuos en la Unidad Minera Animón mediante ingeniería ambiental de alta precisión.',
    'chungar.que_hicimos.title': '¿Qué hicimos?',
    'chungar.que_hicimos.intro': 'Transformamos desafíos técnicos en soluciones de gestión ambiental eficiente. Presentamos este caso desarrollado para la Unidad Minera Animón de la Compañía Minera Chungar S.A.C., donde logramos optimizar la clasificación de residuos industriales bajo los más altos estándares de seguridad y normativa vigente.',
    'chungar.que_hicimos.card1.title': 'Análisis Técnico',
    'chungar.que_hicimos.card1.desc': 'Evaluación exhaustiva de peligrosidad en envases de cartón post-secundarios.',
    'chungar.que_hicimos.card2.title': 'Laboratorio',
    'chungar.que_hicimos.card2.desc': 'Inspecciones físicas y químicas para descartar riesgos de explosividad.',
    'chungar.que_hicimos.trazabilidad': 'Trazabilidad garantizada en todos los procesos.',
    'chungar.resolucion.title': 'Resolución del caso',
    'chungar.resolucion.quote': '"Mediante la aplicación de evidencias técnicas y el principio de consistencia administrativa, demostramos que estos residuos no presentan características de peligrosidad (explosividad, toxicidad o inflamabilidad)."',
    'chungar.resolucion.body': 'Basándonos en el Decreto Legislativo N° 1278, sustentamos que el cartón postconsumo puede ser gestionado como un residuo no peligroso, permitiendo una disposición final más ágil y coherente con la realidad operativa de la mina.',
    'chungar.resolucion.normativa.title': 'Respaldo Normativo',
    'chungar.resolucion.normativa.desc': 'Cumplimiento total con regulaciones del MINAM y protocolos mineros internacionales.',
    'chungar.resumen.title': 'Resumen de éxito',
    'chungar.resumen.subtitle': 'Un hito en la eficiencia operativa y ambiental para nuestro cliente.',
    'chungar.resumen.card1.title': 'Cumplimiento',
    'chungar.resumen.card1.desc': 'Aseguramos el cumplimiento estricto de la normativa del MINAM, eliminando riesgos legales y multas administrativas.',
    'chungar.resumen.card2.title': 'Optimización',
    'chungar.resumen.card2.desc': 'Reducción significativa en costos logísticos y optimización de los tiempos de almacenamiento temporal en mina.',
    'chungar.resumen.card3.title': 'Seguridad',
    'chungar.resumen.card3.desc': 'Garantizamos que el 100% de los residuos gestionados mantienen la seguridad absoluta del entorno y los colaboradores.',
    'chungar.resumen.trazabilidad': 'Trazabilidad Total',
    'chungar.resumen.trazabilidad.desc': 'Monitoreo digital desde el origen hasta la disposición final.',
    'chungar.resumen.cta': 'Solicitar Caso Detallado',
    'chungar.faq.q1': '¿Existe algún riesgo de que estas cajas contengan residuos de explosivos?',
    'chungar.faq.a1': 'No. El explosivo viaja siempre en un empaque primario sellado que evita cualquier contacto o filtración hacia el cartón exterior. Nuestras pruebas de laboratorio confirman la ausencia de trazas químicas.',
    'chungar.faq.q2': '¿Cómo se garantiza la seguridad durante su disposición final?',
    'chungar.faq.a2': 'Aunque se clasifiquen como no peligrosos, su traslado y disposición son realizados exclusivamente por una Empresa Operadora de Residuos Sólidos (EO-RS) debidamente autorizada por las autoridades competentes.',
    'chungar.faq.q3': '¿Esta nueva clasificación cuenta con respaldo legal?',
    'chungar.faq.a3': 'Sí, está plenamente respaldada por el Decreto Legislativo N° 1278 (Ley de Gestión Integral de Residuos Sólidos). La sustentación técnica permite una reclasificación basada en la realidad física del residuo.',

    // ── Iscaycruz (caso de éxito) ────────────────────────────────
    'iscaycruz.hero.badge': 'Casos de Éxito',
    'iscaycruz.hero.title': 'UM. ISCAYCRUZ: Ingeniería para la Sostenibilidad Minera',
    'iscaycruz.hero.subtitle': 'Evaluación técnica especializada para la reclasificación de residuos y optimización de procesos industriales.',
    'iscaycruz.bento.what_title': '¿Qué hicimos?',
    'iscaycruz.bento.what_desc': 'Desarrollamos un estudio técnico de alta precisión para evaluar la peligrosidad de los envases de cartón utilizados en operaciones mineras.',
    'iscaycruz.bento.step1_label': 'Paso 01',
    'iscaycruz.bento.step1_title': 'Análisis de Fichas de Seguridad',
    'iscaycruz.bento.step1_desc': 'Revisión profunda de componentes químicos y MSDS.',
    'iscaycruz.bento.step2_label': 'Paso 02',
    'iscaycruz.bento.step2_title': 'Recolección de Muestras',
    'iscaycruz.bento.step2_desc': 'Protocolo de muestreo in situ bajo normativas internacionales.',
    'iscaycruz.bento.step3_label': 'Paso 03',
    'iscaycruz.bento.step3_title': 'Análisis Normativo',
    'iscaycruz.bento.step3_desc': 'Comparativa técnica con la Ley de Gestión de Residuos.',
    'iscaycruz.bento.resolution_title': 'Resolución del Caso',
    'iscaycruz.bento.resolution_item1': 'Ausencia total de explosividad en los envases secundarios.',
    'iscaycruz.bento.resolution_item2': 'Composición celulósica con combustión controlada sin detonación.',
    'iscaycruz.bento.resolution_item3': 'Clasificación final: Residuo NO peligroso.',
    'iscaycruz.bento.summary_title': 'Resumen de Éxito',
    'iscaycruz.bento.stat1_label': 'Respaldo Técnico',
    'iscaycruz.bento.stat2_value': 'Optimizada',
    'iscaycruz.bento.stat2_label': 'Gestión de Residuos',
    'iscaycruz.bento.summary_desc': 'Se redujo drásticamente la incertidumbre regulatoria para UM. ISCAYCRUZ, permitiendo una gestión eficiente y sostenible de materiales que anteriormente se consideraban de alto riesgo.',
    'iscaycruz.bento.image_alt': 'Panel de control predictivo industrial',
    'iscaycruz.cta.title': 'Optimiza tu gestión ambiental hoy',
    'iscaycruz.cta.subtitle': 'Brindamos el respaldo técnico necesario para que tu empresa sea un referente en sostenibilidad industrial.',
    'iscaycruz.cta.btn': 'Iniciar consulta técnica',
    'iscaycruz.faq.title': 'Preguntas Frecuentes del Caso',
    'iscaycruz.faq.q1': '¿Por qué era necesario el estudio?',
    'iscaycruz.faq.a1': 'Para confirmar si los envases de cartón que no tenían contacto directo con material explosivo podían gestionarse de forma más eficiente y menos costosa, cumpliendo estrictamente con el marco legal peruano.',
    'iscaycruz.faq.q2': '¿Representan algún riesgo de seguridad?',
    'iscaycruz.faq.a2': 'Nuestras pruebas demostraron que los envases solo presentan riesgo de combustión bajo condiciones térmicas específicas y extremas, similar a cualquier material de celulosa estándar, pero sin riesgo de detonación o proyección.',
    'iscaycruz.faq.q3': '¿Cómo deben gestionarse actualmente?',
    'iscaycruz.faq.a3': 'Al ser reclasificados como residuos no peligrosos, pueden ser gestionados mediante EO-RS autorizadas para reciclaje o reaprovechamiento, reduciendo costos operativos y mejorando el perfil de sostenibilidad de la operación.',
    'iscaycruz.interes.title': 'Te Puede Interesar',
    'iscaycruz.interes.card1_title': 'Análisis Químico Avanzado',
    'iscaycruz.interes.card1_desc': 'Pruebas especializadas de lixiviación y caracterización de materiales industriales.',
    'iscaycruz.interes.card2_title': 'Cumplimiento Regulatorio',
    'iscaycruz.interes.card2_desc': 'Asesoría integral en normativas ambientales para el sector minero e industrial.',
    'iscaycruz.interes.card3_title': 'Economía Circular',
    'iscaycruz.interes.card3_desc': 'Estrategias para la reducción y valorización de residuos sólidos.',

    // ── Andaychagua FAQ ──────────────────────────────────────────
    'andaychagua.faq.q1': '¿Por qué la caja de cartón no se considera peligrosa?',
    'andaychagua.faq.a1': 'Debido a que funciona estrictamente como un empaque externo (secundario), no existe contacto físico directo entre el material explosivo y la estructura del cartón, manteniendo su integridad química.',
    'andaychagua.faq.q2': '¿Qué prueba confirmó que no había riesgo?',
    'andaychagua.faq.a2': 'Se realizó un ensayo de laboratorio acreditado bajo estándares internacionales que analizó la presencia de residuos químicos y características de peligrosidad, arrojando resultados negativos en todos los indicadores.',
    'andaychagua.faq.q3': '¿Qué se hace con estas cajas al final?',
    'andaychagua.faq.a3': 'Al ser reclasificadas, son manejadas como residuo común, lo que permite su disposición final en rellenos sanitarios ordinarios o su inserción en cadenas de reciclaje de papel y cartón.',

    // ── Andaychagua Hero ─────────────────────────────────────────
    'andaychagua.hero.badge': 'Caso de Éxito: Minería Sostenible',
    'andaychagua.hero.title': 'UM. ANDAYCHAGUA',
    'andaychagua.hero.description': 'Ingeniería ambiental aplicada para la optimización de residuos industriales en operaciones mineras de alta complejidad.',
    'andaychagua.hero.img_alt': 'Vista panorámica de la operación minera Andaychagua en paisaje altoandino',

    // ── Andaychagua Interés ──────────────────────────────────────
    'andaychagua.interes.title': 'Te Puede Interesar',
    'andaychagua.interes.card1_img_alt': 'Planta moderna de reciclaje y clasificación de residuos',
    'andaychagua.interes.card1_title': 'Gestión Integral de Residuos',
    'andaychagua.interes.card1_desc': 'Servicios especializados para la industria minera y energética.',
    'andaychagua.interes.card2_img_alt': 'Laboratorio ambiental de alta tecnología con equipos modernos',
    'andaychagua.interes.card2_title': 'Ensayos Acreditados',
    'andaychagua.interes.card2_desc': 'Pruebas químicas y físicas bajo normatividad vigente.',
    'andaychagua.interes.card3_img_alt': 'Entorno profesional con informes de sostenibilidad',
    'andaychagua.interes.card3_title': 'Consultoría Estratégica',
    'andaychagua.interes.card3_desc': 'Optimización de procesos ambientales y cumplimiento legal.',

    // ── Andaychagua Qué Hicimos ──────────────────────────────────
    'andaychagua.que_hicimos.title': '¿Qué hicimos?',
    'andaychagua.que_hicimos.body': 'Se desarrolló una opinión técnica especializada para definir la peligrosidad de los envases de cartón utilizados como empaque secundario para explosivos en la Unidad Operativa Andaychagua. El objetivo principal fue determinar científicamente si estos materiales debían clasificarse como residuos peligrosos o no peligrosos, desafiando las clasificaciones convencionales mediante evidencia técnica.',
    'andaychagua.que_hicimos.unit_label': 'Unidad Operativa',
    'andaychagua.que_hicimos.unit_name': 'Andaychagua, Complejo Metalúrgico',

    // ── Andaychagua Resolución ───────────────────────────────────
    'andaychagua.resolucion.title': 'Resolución del caso',
    'andaychagua.resolucion.body': 'La resolución se fundamentó en un proceso riguroso de tres etapas: revisión exhaustiva de documentos técnicos, inspección visual y física en sitio, y un ensayo en laboratorio acreditado.',
    'andaychagua.resolucion.quote': '"El informe técnico concluye categóricamente que las cajas analizadas no presentan características de explosividad, toxicidad, corrosividad ni reactividad química."',
    'andaychagua.resolucion.step_docs': 'Revisión Documentaria',
    'andaychagua.resolucion.step_visual': 'Inspección Visual',
    'andaychagua.resolucion.step_lab': 'Pruebas de Laboratorio',
    'andaychagua.resolucion.step_physical': 'Análisis Físico',

    // ── Andaychagua Resumen ──────────────────────────────────────
    'andaychagua.resumen.title': 'Resumen de éxito',
    'andaychagua.resumen.body': 'Logramos demostrar con evidencia técnica irrefutable que los contenedores de cartón pueden ser ',
    'andaychagua.resumen.body_highlight': 'reclasificados como residuos no peligrosos.',
    'andaychagua.resumen.benefit_1': 'Gestión más eficiente y segura al separar materiales sin contacto directo con explosivos.',
    'andaychagua.resumen.benefit_2': 'Reducción significativa de costos operativos en el manejo de residuos especiales.',

    // ── Americana FAQ ────────────────────────────────────────────
    'americana.faq.title': 'Preguntas que podrían surgir',
    'americana.faq.q1': '¿Por qué estas cajas no se consideran peligrosas?',
    'americana.faq.a1': 'Porque solo fueron usadas como empaque externo y no tuvieron contacto directo con el explosivo. El análisis técnico validó que no conservan propiedades intrínsecas del material que contenían originalmente.',
    'americana.faq.q2': '¿Qué prueba fue clave para la conclusión?',
    'americana.faq.a2': 'El ensayo de laboratorio acreditado fue fundamental, ya que confirmó mediante pruebas de reactividad y toxicidad que el residuo no era explosivo ni representaba un riesgo químico inmediato.',
    'americana.faq.q3': '¿Qué se hace con estas cajas al final?',
    'americana.faq.a3': 'Son dispuestas y gestionadas por una Empresa Operadora de Residuos Sólidos (EO-RS) debidamente autorizada por el MINAM, asegurando un ciclo de vida final responsable y legal.',

    'americana.hero.title': 'UM. AMERICANA',
    'americana.hero.subtitle': 'Determinación técnica para la reclasificación de envases y gestión de barriles de cianuro.',

    // ── Americana Qué Hicimos ────────────────────────────────────
    'americana.que_hicimos.title': '¿Qué hicimos?',
    'americana.que_hicimos.body': 'Presentamos un estudio de caracterización sobre el residuo denominado "envases de cartón usados como empaque de explosivos" generado por la empresa ALPAYANA S.A. durante el despacho de explosivos y accesorios de voladura en interior mina. El objetivo fue determinar si estas cajas debían ser clasificadas como residuos peligrosos o no peligrosos. Además se realizó la gestión y reclasificación de los barriles de cianuro.',
    'americana.que_hicimos.card1_title': 'Caracterización',
    'americana.que_hicimos.card1_desc': 'Análisis técnico de composición residual.',
    'americana.que_hicimos.card2_title': 'Gestión',
    'americana.que_hicimos.card2_desc': 'Logística de barriles de cianuro.',
    'americana.que_hicimos.img_alt': 'Ingeniero ambiental examinando materiales de embalaje en laboratorio',

    // ── Americana Resolución ─────────────────────────────────────
    'americana.resolucion.title': 'Resolución del caso',
    'americana.resolucion.quote': '"La resolución técnica concluyó que los envases de cartón y los barriles no presentan características de peligrosidad. El MINAM determinó que este residuo puede ser manejado como residuo no peligroso."',
    'americana.resolucion.warning_label': 'Nota importante:',
    'americana.resolucion.warning_body': 'Si el cartón llegara a contaminarse con el producto explosivo, debería manejarse como residuo peligroso.',
    'americana.resolucion.seal_title': 'Sello de Cumplimiento',
    'americana.resolucion.seal_subtitle': 'MINAM - Resolución Técnica',

    // ── Americana Resumen ────────────────────────────────────────
    'americana.resumen.title': 'Resumen de éxito',
    'americana.resumen.subtitle': 'Logramos una opinión técnica favorable que respalda la reclasificación, optimizando la cadena de residuos.',
    'americana.resumen.card1_title': 'Criterio Ambiental',
    'americana.resumen.card1_desc': 'Manejo adecuado, seguro y eficiente bajo normativas vigentes.',
    'americana.resumen.card2_title': 'Metodología Válida',
    'americana.resumen.card2_desc': 'Confirmación mediante riguroso análisis documental y ensayos.',
    'americana.resumen.card3_title': 'Ensayos Acreditados',
    'americana.resumen.card3_desc': 'Resultados de laboratorio que garantizan la no peligrosidad.',

    // ── Caracterización Hero ─────────────────────────────────────
    'caracterizacion.hero.title': 'Caracterización de residuos sólidos',
    'caracterizacion.hero.subtitle': 'Reducimos tu costo de disposición final entre 30% y 80% mediante reclasificación técnica con respaldo normativo.',
    'caracterizacion.hero.cta': 'Quiero mi caracterización',
    'caracterizacion.hero.badge': 'Respaldo Normativo',
    'caracterizacion.hero.img_alt': 'Planta industrial con equipamiento moderno de gestión de residuos',

    // ── Caracterización Incluye ──────────────────────────────────
    'caracterizacion.incluye.title': '¿Qué incluye?',
    'caracterizacion.incluye.subtitle': 'Nuestro proceso de caracterización es riguroso, repetible y orientado a resultados de auditoría.',

    // ── Caracterización Proceso ──────────────────────────────────
    'caracterizacion.proceso.label': 'Diagnóstico Técnico',
    'caracterizacion.proceso.title': '¿En qué consiste?',
    'caracterizacion.proceso.body1': 'El diagnóstico que revela exactamente qué residuos genera tu organización. Identificamos, medimos y clasificamos tus residuos para que tomes decisiones basadas en datos reales, no en estimaciones.',
    'caracterizacion.proceso.quote': 'LO QUE NO SE MIDE, NO SE GESTIONA.',
    'caracterizacion.proceso.body2': 'Nosotros te damos la información completa y precisa que tu operación necesita para una transición efectiva hacia la economía circular.',
    'caracterizacion.proceso.img_alt': 'Ingeniera ambiental realizando diagnóstico técnico con tablet industrial',

    // ── Reducción OPEX Hero ──────────────────────────────────────
    'reduccion_opex.hero.badge': 'Optimización de OPEX',
    'reduccion_opex.hero.title': 'Diagnóstico Estratégico de OPEX Ambiental',
    'reduccion_opex.hero.tagline': 'Identificamos dónde se pierde dinero y cómo recuperarlo.',
    'reduccion_opex.hero.subtitle': 'Una metodología especializada de Azul Sostenible para identificar y priorizar oportunidades de reducción de costos asociados a la gestión ambiental.',

    // ── Reducción OPEX Beneficios ────────────────────────────────
    'reduccion_opex.beneficios.title': 'Beneficios para la organización',

    // ── Reducción OPEX Cierre ────────────────────────────────────
    'reduccion_opex.cierre.title': 'Transforme su gestión ambiental en una ventaja competitiva',
    'reduccion_opex.cierre.subtitle': 'Lo que realmente obtiene es una estrategia integral para reducir costos operativos y fortalecer la competitividad de su organización en el mercado actual.',
    'reduccion_opex.cierre.cta_primary': 'Solicitar Diagnóstico',
    'reduccion_opex.cierre.cta_secondary': 'Hablar con un Experto',

    // ── Reducción OPEX Entregables ───────────────────────────────
    'reduccion_opex.entregables.title': 'Entregables (¿Qué recibe su empresa?)',

    // ── Reducción OPEX Metodología ───────────────────────────────
    'reduccion_opex.metodologia.title': '¿Qué hacemos? (Metodología)',
    'reduccion_opex.metodologia.subtitle': 'Realizamos una evaluación integral de la gestión ambiental y de residuos, analizando cada nodo de la cadena operativa.',

    // ── Reducción OPEX Por Qué ───────────────────────────────────
    'reduccion_opex.porque.title': '¿Por qué implementar este servicio?',
    'reduccion_opex.porque.model_title': 'El Modelo Tradicional Ineficiente',
    'reduccion_opex.porque.step1': 'Generar',
    'reduccion_opex.porque.step2': 'Almacenar',
    'reduccion_opex.porque.step3': 'Transportar',
    'reduccion_opex.porque.step4': 'Disponer',
    'reduccion_opex.porque.model_body': 'Este ciclo lineal genera "fugas" invisibles en cada etapa, convirtiendo su gestión ambiental en un centro de costo descontrolado.',
    'reduccion_opex.porque.conclusion': 'Conclusión: Su empresa gasta sin saber exactamente dónde ahorrar.',

    // ── Almacenes Beneficios ─────────────────────────────────────
    'almacenes.beneficios.title_1': 'Impacto Directo en su ',
    'almacenes.beneficios.title_highlight': 'Rentabilidad',

    // ── Almacenes Hero ───────────────────────────────────────────
    'almacenes.hero.title_1': 'Almacenes Inteligentes para la ',
    'almacenes.hero.title_highlight': 'Economía Circular',
    'almacenes.hero.subtitle': 'Transformamos espacios de almacenamiento en herramientas estratégicas de reducción de costos y generación de valor ambiental.',
    'almacenes.hero.cta': 'Solicitar Diagnóstico Integral',
    'almacenes.hero.card_title': 'Diagnóstico Rápido',
    'almacenes.hero.card_subtitle': 'Evaluamos su operación en 48h',
    'almacenes.hero.stat1_label': 'Optimización de Espacio',
    'almacenes.hero.stat2_label': 'Reducción de OPEX',

    // ── Almacenes Problema ───────────────────────────────────────
    'almacenes.problema.badge': '¿Por qué es importante?',
    'almacenes.problema.title_pre': 'Su almacén de residuos no es una obligación, es una ',
    'almacenes.problema.title_highlight': 'fuente de ingresos oculta',
    'almacenes.problema.body': 'Muchas empresas ven el almacenamiento de descartes como un costo hundido. En Azul Sostenible, identificamos los puntos de fuga financiera que impactan su rentabilidad diaria.',

    // ── Almacenes Soluciones ─────────────────────────────────────
    'almacenes.soluciones.title_1': 'Soluciones Técnicas de ',
    'almacenes.soluciones.title_highlight': 'Ingeniería',
    'almacenes.soluciones.subtitle': 'Aplicamos metodologías de clase mundial para redefinir su infraestructura de gestión de materiales.',
    'almacenes.soluciones.img_alt': 'Plano industrial con diseño de almacén optimizado',
    'almacenes.soluciones.item1': 'Segregación técnica',
    'almacenes.soluciones.item2': 'Control de derrames',
    'almacenes.soluciones.item3': 'Ventilación forzada',
    'almacenes.soluciones.link': 'Saber más',

    // ── Almacenes Valor ──────────────────────────────────────────
    'almacenes.valor.title_1': '¿Qué recibe su ',
    'almacenes.valor.title_highlight': 'empresa',
    'almacenes.valor.subtitle': 'Entregamos un ecosistema completo de gestión, no solo un espacio físico.',

    // ── Almacenes Cierre ─────────────────────────────────────────
    'almacenes.cierre.quote': 'Primero identificamos dónde se pierde dinero. Luego transformamos la operación para recuperarlo.',
    'almacenes.cierre.cta': 'Iniciar transformación del almacén',
    'almacenes.cierre.note': 'Sin compromiso. Evaluación técnica inicial disponible.',

    // ── Tarifa Plana ─────────────────────────────────────────────
    'tarifa_plana.hero.badge': 'Excelencia Operativa 12 Meses',
    'tarifa_plana.hero.title': 'Tarifa plana ambiental',
    'tarifa_plana.hero.subtitle': 'La manera más simple y segura de gestionar el ambiente en tu empresa: todo incluido en una tarifa fija anual para garantizar cumplimiento y sostenibilidad.',
    'tarifa_plana.hero.cta_primary': 'Empieza Ahora',
    'tarifa_plana.hero.cta_secondary': 'Ver Detalles Técnicos',
    'tarifa_plana.definicion.title': '¿QUÉ ES LA TARIFA PLANA AMBIENTAL?',
    'tarifa_plana.definicion.body_pre': 'Es un modelo de gestión ambiental integral diseñado para empresas que buscan previsibilidad y excelencia. Durante 12 meses, nos convertimos en su departamento ambiental externo bajo un pago único anual.',
    'tarifa_plana.definicion.body_highlight': '',
    'tarifa_plana.definicion.body_post': '',
    'tarifa_plana.definicion.advantages_label': 'Ventajas del modelo',
    'tarifa_plana.definicion.model_title': 'Modelo 360°',
    'tarifa_plana.definicion.model_body': 'Elimine la incertidumbre de costos variables. Con nuestra Tarifa Plana, usted proyecta su inversión ambiental con precisión quirúrgica, asegurando que cada residuo y cada trámite esté cubierto.',
    'tarifa_plana.definicion.stat1_label': 'Costos Ocultos',
    'tarifa_plana.definicion.stat2_label': 'Cumplimiento',
    'tarifa_plana.incluye.title': '¿QUÉ INCLUYE?',
    'tarifa_plana.incluye.subtitle': 'Tres pilares fundamentales que sostienen la operatividad y legalidad de su organización.',
    'tarifa_plana.beneficios.title': '¿QUÉ GANA TU EMPRESA?',
    'tarifa_plana.ingenieria.title': 'INGENIERÍA APLICADA A LA SOSTENIBILIDAD',
    'tarifa_plana.ingenieria.subtitle': 'Implementamos capas tecnológicas de control para asegurar que la Tarifa Plana no sea solo un servicio, sino un activo estratégico.',
    'tarifa_plana.ingenieria.card_title': 'CONTROL PREDICTIVO',
    'tarifa_plana.ingenieria.card_subtitle': 'Estado de Cumplimiento: 98.4%',
    'tarifa_plana.ingenieria.label1': 'OPERATIVIDAD',
    'tarifa_plana.ingenieria.label2': 'ÓPTIMA',
    'tarifa_plana.ingenieria.quote': 'La Tarifa Plana nos permite anticipar problemas antes de que se conviertan en pasivos.',
    'tarifa_plana.alcance.title': 'GESTIÓN INTEGRAL',
    'tarifa_plana.alcance.subtitle': 'Un alcance diseñado para cubrir todas las aristas técnicas de su operación industrial o comercial.',
    'tarifa_plana.alcance.list_label': 'LISTADO COMPLETO DE SERVICIOS',
    'tarifa_plana.cierre.title': 'Empieza tu año protegido',
    'tarifa_plana.cierre.subtitle': 'Una inversión recuperable que garantiza seguridad ambiental los 12 meses del año. Únase a las empresas que ya operan sin preocupaciones.',
    'tarifa_plana.cierre.cta': 'Quiero la Tarifa Plana',

    'software_trazabilidad.hero.badge': 'Innovación Digital',
    'software_trazabilidad.hero.title': 'Software de trazabilidad',
    'software_trazabilidad.hero.subtitle': 'La trazabilidad digital convierte tu gestión de residuos en información confiable y auditable.',
    'software_trazabilidad.hero.cta': 'Acceso al sistema',

    'software_trazabilidad.value.heading': 'Más control = menos riesgos y sanciones = más valor y reputación para tu empresa.',

    'software_trazabilidad.cierre.title': 'Convierte tus datos ambientales en control, decisiones inteligentes y ventaja competitiva.',
    'software_trazabilidad.cierre.cta_primary': 'Más Información',
    'software_trazabilidad.cierre.cta_secondary': 'Solicitar Demo',

    'software_trazabilidad.consiste.label': 'Metodología Azul',
    'software_trazabilidad.consiste.title': '¿EN QUÉ CONSISTE?',
    'software_trazabilidad.consiste.body': 'Nuestro software registra detalladamente cada movimiento de los residuos sólidos desde su origen hasta su destino final, garantizando una cadena de custodia inquebrantable.',
    'software_trazabilidad.consiste.quote': '"Automatizamos lo que hoy haces en papel o en Excel, centralizando fechas, fotos y reportes auditables para clientes y autoridades."',
    'software_trazabilidad.consiste.img_alt': 'Dashboard digital de trazabilidad ambiental con gráficos y certificaciones',

    'software_trazabilidad.gana.title': '¿QUÉ GANA TU EMPRESA?',
    'software_trazabilidad.gana.subtitle': 'Optimizamos tu operación ambiental mediante tecnología de vanguardia y procesos simplificados.',

    'carahuacra.faq.q1': '¿Es seguro reciclar estos envases secundarios?',
    'carahuacra.faq.a1': 'Sí, es totalmente seguro. Nuestro estudio técnico confirmó que el uso de polietileno como envase primario actúa como una barrera absoluta contra la migración química. Tras la validación de campo, estos materiales se clasifican como no peligrosos, permitiendo su reintegración a cadenas de valor circulares sin riesgos.',
    'carahuacra.faq.q2': '¿Qué base legal respalda este procedimiento?',
    'carahuacra.faq.a2': 'El procedimiento se sustenta estrictamente en los artículos 71, 72, 73 y 74 del Reglamento de la Ley de Gestión Integral de Residuos Sólidos (D.L. N° 1278). Estos artículos facultan la reclasificación técnica de residuos mediante estudios técnicos que demuestren la ausencia de características de peligrosidad.',

    'carahuacra.hero.badge': 'CASE STUDY',
    'carahuacra.hero.title': 'U.M. CARAHUACRA: Ingeniería para la Excelencia Ambiental',
    'carahuacra.hero.description': 'Estudio técnico y evaluación de campo para la reclasificación de envases secundarios, optimizando la cadena de valor circular en la minería moderna.',
    'carahuacra.hero.location': 'Yauli, Perú',
    'carahuacra.hero.status': 'Certificación Lograda',

    'carahuacra.interes.title': 'Te Puede Interesar',
    'carahuacra.interes.item1_title': 'Análisis Químico',
    'carahuacra.interes.item1_desc': 'Protocolos de laboratorio avanzados para la caracterización de efluentes y sólidos.',
    'carahuacra.interes.item2_title': 'Cumplimiento Regulatorio',
    'carahuacra.interes.item2_desc': 'Asesoría estratégica en normativa ambiental nacional e internacional.',
    'carahuacra.interes.item3_title': 'Economía Circular',
    'carahuacra.interes.item3_desc': 'Diseño de sistemas de flujo cerrado para optimizar recursos industriales.',

    'carahuacra.que_hicimos.title': '¿Qué hicimos?',
    'carahuacra.que_hicimos.intro': 'Ejecutamos una evaluación de campo rigurosa y multidimensional para determinar la integridad química de los envases secundarios en la Unidad Minera Carahuacra.',
    'carahuacra.que_hicimos.item1': 'Verificación de barreras físicas: Confirmación de que el envase primario de polietileno previene cualquier tipo de contaminación química al embalaje secundario.',
    'carahuacra.que_hicimos.item2': 'Muestreo técnico: Análisis de residuos remanentes y trazas químicas bajo protocolos de alta precisión.',
    'carahuacra.que_hicimos.item3': 'Auditoría de flujo: Mapeo del ciclo de vida del residuo desde su generación hasta su disposición temporal.',
    'carahuacra.que_hicimos.card_title': 'Evaluación Rigurosa',
    'carahuacra.que_hicimos.card_desc': 'Datos precisos que respaldan decisiones estratégicas de sostenibilidad.',
    'carahuacra.que_hicimos.img_alt': 'Ingeniera examinando datos técnicos en sala de control industrial',

    'carahuacra.resolucion.title': 'Resolución del Caso',
    'carahuacra.resolucion.description': 'Basándonos en los artículos 71 al 74 del Reglamento de la Ley de Gestión Integral de Residuos Sólidos, logramos demostrar la inocuidad de los envases secundarios.',
    'carahuacra.resolucion.status_title': 'Estado Final: Reclasificado',
    'carahuacra.resolucion.status_desc': 'Oficialmente categorizado como residuo \'no peligroso\'.',

    'carahuacra.resumen.title': 'Resumen de Éxito',
    'carahuacra.resumen.subtitle': 'Impacto medible en la eficiencia operativa y el compromiso ambiental.',
    'carahuacra.resumen.stat1_label': 'Cumplimiento Normativo',
    'carahuacra.resumen.stat1_desc': 'Alineación total con las regulaciones de gestión de residuos peruanas.',
    'carahuacra.resumen.stat2_label': 'Costos Logísticos',
    'carahuacra.resumen.stat2_desc': 'Reducción significativa en el transporte y disposición de residuos peligrosos.',
    'carahuacra.resumen.stat3_value': 'Circular',
    'carahuacra.resumen.stat3_label': 'Economía Verde',
    'carahuacra.resumen.stat3_desc': 'Los envases ahora ingresan a cadenas de reciclaje industrial directo.',

    'cristobal.faq.title': 'Preguntas que podrían surgir',
    'cristobal.faq.subtitle': 'Despejamos las dudas técnicas más comunes sobre el proceso de caracterización y seguridad operativa.',
    'cristobal.faq.q1': '¿Es totalmente seguro manipular estas cajas tras su reclasificación?',
    'cristobal.faq.a1': 'Absolutamente. La evaluación técnica confirmó la hermeticidad y ausencia de trazas peligrosas. El sustento técnico garantiza que no existe riesgo por contacto o manipulación estándar dentro de los protocolos de seguridad industrial vigentes.',
    'cristobal.faq.q2': '¿Cómo impacta esta medida en la operación de la empresa?',
    'cristobal.faq.a2': 'El impacto es doble: operativo y financiero. Operativamente, simplifica el flujo de residuos en almacenes. Financieramente, reduce drásticamente los costos asociados al transporte y disposición final en rellenos de seguridad de residuos peligrosos.',
    'cristobal.faq.q3': '¿Esta resolución cumple con los estándares legales actuales?',
    'cristobal.faq.a3': 'Sí, se rige estrictamente por la Ley de Gestión Integral de Residuos Sólidos (D.L. N° 1278) y su reglamento. Toda la documentación generada sirve como sustento técnico legal ante fiscalizaciones de entes reguladores.',

    'cristobal.hero.subtitle': 'Evaluación técnica integral para la caracterización y gestión sostenible de envases secundarios en operaciones mineras de alta complejidad.',
    'cristobal.hero.tag_compliance': 'Cumplimiento DL 1278',
    'cristobal.hero.tag_reclassification': 'Reclasificación Técnica',

    'cristobal.impacto.title': 'Impacto de la Operación',
    'cristobal.impacto.card1_badge': 'Optimización Logística',
    'cristobal.impacto.card1_title': 'Eficiencia en Almacenamiento',
    'cristobal.impacto.card1_desc': 'La reclasificación permitió una reorganización estratégica de los espacios de acopio, eliminando cuellos de botella en la disposición temporal de empaques secundarios de la Unidad Minera San Cristóbal.',
    'cristobal.impacto.card1_stat': 'Costos Operativos',
    'cristobal.impacto.card2_title': 'Cumplimiento Normativo',
    'cristobal.impacto.card2_desc': 'Garantía total bajo el marco del D.L. N° 1278 (Ley de Gestión Integral de Residuos Sólidos), asegurando operaciones libres de contingencias legales.',
    'cristobal.impacto.card3_title': 'Gestión de Recursos',
    'cristobal.impacto.card3_desc': 'Transición efectiva del concepto de \'Residuo\' a \'Recurso Valorizable\'.',

    'cristobal.interes.title': 'Te puede interesar',
    'cristobal.interes.card1_img_alt': 'Laboratorio con equipamiento científico avanzado',
    'cristobal.interes.card1_title': 'Análisis Técnico',
    'cristobal.interes.card1_desc': 'Laboratorios certificados para caracterización compleja.',
    'cristobal.interes.card2_img_alt': 'Espacio de trabajo con documentos de compliance ambiental',
    'cristobal.interes.card2_title': 'Compliance Ambiental',
    'cristobal.interes.card2_desc': 'Asesoría experta en marcos normativos nacionales.',
    'cristobal.interes.card3_img_alt': 'Representación de economía circular con arquitectura sostenible',
    'cristobal.interes.card3_title': 'Economía Circular',
    'cristobal.interes.card3_desc': 'Modelos de negocio regenerativos para la industria.',

    'cristobal.que_hicimos.title': '¿Qué hicimos?',
    'cristobal.que_hicimos.description': 'Llevamos a cabo una evaluación técnica integral para determinar la peligrosidad de los envases de cartón utilizados como empaque secundario en el transporte de explosivos.',
    'cristobal.que_hicimos.item1': 'Inspecciones visuales detalladas bajo estándares industriales.',
    'cristobal.que_hicimos.item2': 'Análisis exhaustivo de trazabilidad de uso y contacto.',
    'cristobal.que_hicimos.item3': 'Protocolos rigurosos de verificación de integridad estructural.',
    'cristobal.que_hicimos.img_alt': 'Ingeniero realizando inspección técnica con herramientas de precisión',
    'cristobal.que_hicimos.stat_label': 'Trazabilidad Técnica Garantizada',

    'cristobal.resolucion.title': 'Resolución Técnica',
    'cristobal.resolucion.subtitle': 'Sustento normativo basado en el Decreto Supremo N° 014-2017-MINAM para la reclasificación oficial.',
    'cristobal.resolucion.card1_title': 'No Reactivo',
    'cristobal.resolucion.card1_desc': 'Sin interacción química adversa con el entorno.',
    'cristobal.resolucion.card2_title': 'No Inflamable',
    'cristobal.resolucion.card2_desc': 'Evaluación de riesgo térmico superada satisfactoriamente.',
    'cristobal.resolucion.card3_title': 'No Tóxico',
    'cristobal.resolucion.card3_desc': 'Seguridad garantizada para la manipulación humana.',
    'cristobal.resolucion.card4_title': 'No Explosivo',
    'cristobal.resolucion.card4_desc': 'Empaque secundario libre de trazas de riesgo dinámico.',
    'cristobal.resolucion.cta_title': 'Reclasificación Oficial',
    'cristobal.resolucion.cta_desc': 'Determinación técnica de residuos sólidos no peligrosos, transformando la gestión de residuos en una gestión estratégica de recursos.',
    'cristobal.resolucion.cta_btn': 'Descargar Sustento Técnico',

    'morococha.cta.title': '¿Necesitas una evaluación técnica para tu empresa?',
    'morococha.cta.btn': 'Contactar Especialista',

    'morococha.hero.badge': 'Proyecto de Evaluación Técnica',
    'morococha.hero.title': 'UM. MOROCOCHA - Casos de éxito',
    'morococha.hero.subtitle': 'Ingeniería y sostenibilidad aplicadas a la gestión avanzada de residuos en la industria minera. Un enfoque técnico para la desclasificación de peligrosidad.',

    'morococha.que_hicimos.title': '¿Qué hicimos?',
    'morococha.que_hicimos.body': 'Llevamos a cabo un estudio integral para la Compañía Minera Argentum S.A.C., centrado en la evaluación técnica y normativa de los empaques de cartón utilizados para explosivos en sus operaciones mineras.',
    'morococha.que_hicimos.step1_title': 'Revisión de Fichas de Seguridad',
    'morococha.que_hicimos.step1_desc': 'Análisis exhaustivo de la composición química y reactividad declarada en las MSDS originales.',
    'morococha.que_hicimos.step2_title': 'Muestreo en Campo',
    'morococha.que_hicimos.step2_desc': 'Toma de muestras representativas en las áreas de almacenamiento temporal para asegurar la integridad de los datos.',
    'morococha.que_hicimos.step3_title': 'Inspección Visual',
    'morococha.que_hicimos.step3_desc': 'Verificación directa de trazas de material explosivo y condiciones físicas de degradación.',
    'morococha.que_hicimos.img_alt': 'Técnico en laboratorio realizando inspección de materiales de cartón industrial',

    // ── Morococha Resolución ─────────────────────────────────────
    'morococha.resolucion.title': 'Resolución del caso',
    'morococha.resolucion.subtitle': 'Basándonos en evidencia científica y cumplimiento normativo estricto.',
    'morococha.resolucion.lab_label': 'Análisis de Laboratorio',
    'morococha.resolucion.lab_title': 'Certificación Andeslab S.A.C.',
    'morococha.resolucion.lab_body': 'Tras un riguroso análisis de inflamabilidad y reactividad realizado por Andeslab S.A.C., se confirmó científicamente que el material residual no presenta propiedades explosivas. La evidencia técnica demostró que el cartón solo presenta combustión pero no detonación ante estímulos térmicos o mecánicos.',
    'morococha.resolucion.badge1': 'Prueba de Detonación: Negativo',
    'morococha.resolucion.badge2': 'Inflamabilidad: Bajo Control',
    'morococha.resolucion.legal_title': 'Marco Normativo',
    'morococha.resolucion.legal_body': 'Los residuos han sido clasificados como No Peligrosos, permitiendo su gestión final a través de una EO-RS debidamente autorizada por el MINAM.',
    'morococha.resolucion.compliance': 'Cumplimiento: 100% MINAM',
    'morococha.resolucion.summary_title': 'Resumen de éxito',
    'morococha.resolucion.summary_body': 'Este proyecto proporcionó el sustento técnico definitivo para una gestión ordenada, segura y ambientalmente responsable de los residuos. Logramos transformar una incertidumbre operativa en un proceso estandarizado que reduce costos y riesgos ambientales para Compañía Minera Argentum S.A.C.',
    'morococha.resolucion.success_label': 'Éxito Comprobado',

    'morococha.faq.q1': '¿Estos cartones siguen siendo peligrosos después de usarse?',
    'morococha.faq.a1': 'No, el estudio técnico demostró que no presentan explosividad ni características de peligrosidad remanente, permitiendo una gestión más eficiente.',
    'morococha.faq.q2': '¿Qué hizo posible esta conclusión?',
    'morococha.faq.a2': 'La combinación de una revisión exhaustiva de antecedentes, un muestreo riguroso en campo y ensayos analíticos en un laboratorio acreditado.',
    'morococha.faq.q3': '¿Cómo se deben manejar finalmente?',
    'morococha.faq.a3': 'Deben ser gestionados por una Empresa Operadora de Residuos Sólidos (EO-RS) autorizada por el MINAM, siguiendo los protocolos de residuos no peligrosos.',

    'yauliyacu.faq.q1': '¿Por qué se evaluaron estos envases?',
    'yauliyacu.faq.a1': 'Era imperativo confirmar el estatus de peligrosidad real después de su uso inicial con cianuro para determinar si el proceso de lavado interno era suficiente para una disposición segura.',
    'yauliyacu.faq.q2': '¿Qué mostró el análisis de laboratorio?',
    'yauliyacu.faq.a2': 'El análisis mostró concentraciones de cianuro por debajo de los límites cuantificables, lo que valida la efectividad del proceso de limpieza para convertir residuos peligrosos en materiales inertes.',
    'yauliyacu.faq.q3': '¿Cómo deben manejarse finalmente estos envases?',
    'yauliyacu.faq.a3': 'Deben ser gestionados a través de Empresas Operadoras de Residuos Sólidos (EO-RS) autorizadas, permitiendo su reaprovechamiento como chatarra metálica de alta pureza.',

    'yauliyacu.hero.title': 'U.M. YAULIYACU - Casos de éxito',
    'yauliyacu.hero.subtitle': 'Estudio de toxicidad y gestión de envases de cianuro: Un hito en ingeniería ambiental y sostenibilidad minera.',

    'yauliyacu.interes.title': 'Te puede interesar',
    'yauliyacu.interes.card1_title': 'Gestión Integral de Residuos',
    'yauliyacu.interes.card1_desc': 'Soluciones estratégicas para el manejo de residuos industriales y mineros de alta complejidad.',
    'yauliyacu.interes.card2_title': 'Ensayos Acreditados',
    'yauliyacu.interes.card2_desc': 'Pruebas fisicoquímicas y toxicológicas con certificación INACAL para cumplimiento legal.',
    'yauliyacu.interes.card3_title': 'Consultoría Estratégica',
    'yauliyacu.interes.card3_desc': 'Asesoría experta en regulaciones ambientales del MINAM y planes de sostenibilidad corporativa.',

    'yauliyacu.que_hicimos.phase_label': 'Fase de Intervención',
    'yauliyacu.que_hicimos.title': '¿Qué hicimos?',
    'yauliyacu.que_hicimos.step1_title': 'Evaluación de Envases',
    'yauliyacu.que_hicimos.step1_desc': 'Análisis exhaustivo de envases de cianuro de sodio post-consumo, determinando su estado físico y químico inicial.',
    'yauliyacu.que_hicimos.step2_title': 'Proceso de Limpieza',
    'yauliyacu.que_hicimos.step2_desc': 'Implementación y validación técnica del protocolo de triple lavado controlado para la remoción de trazas peligrosas.',
    'yauliyacu.que_hicimos.step3_title': 'Análisis Acreditado',
    'yauliyacu.que_hicimos.step3_desc': 'Pruebas rigurosas en laboratorios acreditados por INACAL para garantizar la precisión de los resultados químicos.',
    'yauliyacu.que_hicimos.ref_label': 'REFERENCIA TÉCNICA',
    'yauliyacu.que_hicimos.quote': '"La precisión analítica fue el pilar para la reclasificación de residuos en este proyecto minero."',
    'yauliyacu.que_hicimos.img_alt': 'Análisis técnico en laboratorio',

    'yauliyacu.resolucion.title': 'Resolución del caso',
    'yauliyacu.resolucion.body1': 'Los resultados analíticos demostraron que, tras el protocolo de lavado optimizado, los envases metálicos no presentaban concentraciones cuantificables de cianuro.',
    'yauliyacu.resolucion.classification': 'Clasificación final: Residuos no peligrosos.',
    'yauliyacu.resolucion.body2': 'Esta validación técnica permitió una gestión eficiente bajo las directrices del MINAM y el manejo final a través de empresas operadoras EO-RS debidamente autorizadas, garantizando el cumplimiento normativo total.',
    'yauliyacu.resolucion.efficiency_title': 'Gestión Eficiente',
    'yauliyacu.resolucion.efficiency_desc': 'Cumplimiento estricto de estándares internacionales de toxicidad y economía circular.',

    'yauliyacu.resumen.title': 'Resumen de éxito',
    'yauliyacu.resumen.card1_title': 'Logro Principal: Prueba Técnica',
    'yauliyacu.resumen.card1_desc': 'Confirmación fehaciente de la no-toxicidad después del lavado controlado, eliminando el riesgo ambiental y la carga de peligrosidad del material metálico.',
    'yauliyacu.resumen.metric1_label': 'Libre de residuos',
    'yauliyacu.resumen.card2_title': 'Eficiencia Operativa',
    'yauliyacu.resumen.card2_desc': 'Mejora sustancial en la logística de residuos y reducción de costos operativos asociados a la disposición final.',
    'yauliyacu.resumen.card3_title': 'Base para Valorización',
    'yauliyacu.resumen.card3_desc': 'El estudio técnico sirvió como fundamento legal y científico para la futura valorización de los metales, fomentando la economía circular en la unidad minera Yauliyacu.',
    'yauliyacu.resumen.stat1_label': 'Reducción Riesgo',
    'yauliyacu.resumen.stat2_label': 'Impacto',

    // ── Reclasificación ──────────────────────────────────────────
    'reclasificacion.hero.badge': 'Soluciones de Ingeniería Ambiental',
    'reclasificacion.hero.title': 'Reclasificación de residuos peligrosos',
    'reclasificacion.hero.subtitle': 'Reclasificación técnica para reducir costos y asegurar cumplimiento ambiental. Transformamos pasivos ambientales en eficiencia operativa sustentada.',
    'reclasificacion.hero.cta': 'Quiero reclasificar mis residuos',

    // ── Reclasificación Proceso ──────────────────────────────────
    'reclasificacion.proceso.title': 'La reclasificación convierte tus residuos peligrosos en ahorros',
    'reclasificacion.proceso.body': 'Analizamos tus residuos, comprobamos su verdadera categoría y preparamos todo el sustento técnico para actualizar su clasificación oficial ante el MINAM.',
    'reclasificacion.proceso.quote': 'Menos peligrosidad = Menos pagos = Más valor para tu empresa.',
    'reclasificacion.proceso.cta': 'Más Información',
    'reclasificacion.proceso.img_alt': 'Proceso de certificación y auditoría ambiental',
    'reclasificacion.proceso.badge_title': 'Certificación MINAM',
    'reclasificacion.proceso.badge_subtitle': 'Procesos 100% validados',

    // ── Reclasificación Incluye ──────────────────────────────────
    'reclasificacion.incluye.title': '¿Qué Incluye Nuestro Servicio?',

    // ── Reclasificación Beneficios ───────────────────────────────
    'reclasificacion.beneficios.title': '¿Qué gana tu empresa con nosotros?',

    // ── Reclasificación Casos de Éxito ───────────────────────────
    'reclasificacion.casos.title': 'Casos de Éxito - Resoluciones Obtenidas',
    'reclasificacion.casos.open_pdf': 'Abrir PDF',

    // ── Reclasificación Cierre ───────────────────────────────────
    'reclasificacion.cierre.title': 'UN RESIDUO BIEN CLASIFICADO TRANSFORMA TUS COSTOS, TU OPERACIÓN Y TU REPUTACIÓN',
    'reclasificacion.cierre.subtitle': 'Convierte la información técnica en poder ambiental y económico real. Empecemos hoy mismo el proceso de reclasificación técnica de tus residuos.',
    'reclasificacion.cierre.cta': 'Más Información',
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
    'form.quote_title': 'Fill out the form',
    'form.quote_subtitle': 'and receive your free quote',
    'form.company_org': 'Company / Organization',
    'form.name_placeholder': 'e.g. John Smith',
    'form.company_placeholder': 'e.g. ABC Mining',
    'form.sector': 'Sector',
    'form.sector_placeholder': 'Select your sector',
    'form.sector_mining': 'Mining',
    'form.sector_industrial': 'Industrial',
    'form.sector_health': 'Healthcare',
    'form.sector_agro': 'Agro-industrial',
    'form.challenge': 'What is your main environmental challenge?',
    'form.challenge_placeholder': 'Select an option',
    'form.challenge_waste': 'Waste management',
    'form.challenge_water': 'Water treatment',
    'form.challenge_consulting': 'Environmental consulting',
    'form.challenge_other': 'Other',
    'form.phone_whatsapp': 'Phone / WhatsApp',
    'form.phone_placeholder': 'e.g. +1 555 123 456',
    'form.quote_submit': 'I want a free consultation',
    'form.response_time': 'We respond within 24 hours',

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

    'acreditaciones.hero.badge': 'Official Accreditations',
    'acreditaciones.hero.title': 'Certified Environmental Management',
    'acreditaciones.hero.body': 'Everything we do is backed by official accreditations. We guarantee that your infrastructure and processes comply with the highest international sustainability standards.',

    // ── Acreditaciones Compliance ─────────────────────────────────
    'acreditaciones.compliance.title': 'Guaranteed Compliance with Current Environmental Regulations',
    'acreditaciones.compliance.subtitle': 'Your company operates without risks, fines or observations.',
    'acreditaciones.open_pdf': 'Open PDF',

    'acreditaciones.homologaciones.title': 'Homologations',
    'acreditaciones.homologaciones.badge': 'Sector Certifications',

    'acreditaciones.logistica.title': 'Certified Logistics and Operational Capacity',

    // ── Acreditaciones Operaciones ────────────────────────────────
    'acreditaciones.operaciones.title': 'OPERATIONS AUTHORIZED BY THE PERUVIAN STATE',
    'acreditaciones.operaciones.img_alt': 'Technical inspection of industrial filtration systems',
    'acreditaciones.operaciones.registro_title': 'EO–RS Registry Authorized by MINAM',
    'acreditaciones.operaciones.registro_body': 'Authorizes the management of hazardous and non-hazardous waste. Legally backs you against OEFA inspections and corporate ESG sustainability audits.',
    'acreditaciones.operaciones.cta_alcance': 'OPEN SCOPE',
    'acreditaciones.operaciones.cta_registro': 'OPEN AUTHORITATIVE REGISTRY',

    'acreditaciones.cierre.title': 'Your environmental management not only complies with the law:<br />it is shielded with verifiable authorizations',
    'acreditaciones.cierre.title_1': 'Your environmental management not only complies with the law:',
    'acreditaciones.cierre.title_2': 'it is shielded with verifiable authorizations',
    'acreditaciones.cierre.cta': 'Request full accreditations',

    // ── Sectors ──────────────────────────────────────────────────
    'sectors.badge': 'SECTOR COVERAGE',
    'sectors.mining': 'Mining Sector',
    'sectors.industrial': 'Industrial Sector',
    'sectors.health': 'Healthcare Sector',
    'sectors.agro': 'Agro-industrial Sector',

    // ── Sectores Hero ────────────────────────────────────────────
    'sectores.hero.badge': 'Multidisciplinary Experts',
    'sectores.hero.title': 'We support companies across diverse sectors',
    'sectores.hero.subtitle': 'Environmental engineering solutions designed for the technical and regulatory reality of each industry in Peru.',
    'sectores.hero.cta': 'Explore Industries',

    // ── Sectores Bento ───────────────────────────────────────────
    'sectores.bento.title': 'Our Specialization by Sector',
    'sectores.bento.link': 'See more',
    'sectores.bento.industrial.title': 'Industrial Sector',
    'sectores.bento.industrial.body': 'We enhance operational efficiency through technical resource management and compliance with international standards.',
    'sectores.bento.industrial.li1': 'Chemical disposal',
    'sectores.bento.industrial.li2': 'Process audits',
    'sectores.bento.industrial.li3': 'Carbon footprint',
    'sectores.bento.industrial.li4': 'Water optimization',
    'sectores.bento.industrial.case': 'SUCCESS CASE: 25% reduction in discharges.',
    'sectores.bento.salud.title': 'Healthcare Sector',
    'sectores.bento.salud.badge': 'High Biosafety',
    'sectores.bento.salud.body': 'Critical management of bio-contaminated waste and comprehensive preparation for SUSALUD audits.',
    'sectores.bento.salud.footer': '100% compliance with hospital biosafety regulations.',
    'sectores.bento.minero.title': 'Mining Sector',
    'sectores.bento.minero.body': 'We strengthen the social license and operate the technical management of hazardous and metallic waste.',
    'sectores.bento.minero.tag1': 'Hazardous Waste',
    'sectores.bento.minero.tag2': 'Tailings',
    'sectores.bento.agro.title': 'Agro-industrial Sector',
    'sectores.bento.agro.body': 'Optimization of agricultural processes and compliance with international certifications for export.',
    'sectores.bento.agro.img_alt': 'Sustainable cultivation with optimized irrigation system',

    // ── Sectores Cierre ──────────────────────────────────────────
    'sectores.cierre.title': 'Ready to raise your environmental standards?',
    'sectores.cierre.body': 'Schedule a technical consultation with our specialists and discover how we can optimize your sector management.',
    'sectores.cierre.cta_primary': 'Request Audit',
    'sectores.cierre.cta_secondary': 'Talk to an Expert',

    // ── Sectores Impacto ─────────────────────────────────────────
    'sectores.impacto.title': 'Measurable impact in every operation',
    'sectores.impacto.body': 'We don\'t just manage waste; we transform sustainability into a real competitive advantage for your company.',
    'sectores.impacto.feature1_title': 'Total Regulatory Compliance',
    'sectores.impacto.feature1_desc': 'Absolute mitigation of legal risks and sanctions before OEFA, ANA and Regional Governments.',
    'sectores.impacto.feature2_title': 'Operational Continuity',
    'sectores.impacto.feature2_desc': 'Preventive management that avoids unnecessary stoppages due to environmental or sanitary incidents.',

    // ── Projects ─────────────────────────────────────────────────
    'projects.badge': 'SUCCESS STORIES',
    'projects.sector_label': 'Sector',

    // ── Proyectos Hero ───────────────────────────────────────────
    'proyectos.hero.badge': 'Environmental Commitment',
    'proyectos.hero.title': 'Success stories',
    'proyectos.hero.subtitle': 'Results that make a difference in the Peruvian mining industry through technical and responsible management.',

    'proyectos.stats.aria_label': 'Project statistics',

    // ── Contact ──────────────────────────────────────────────────
    'contact.badge': "LET'S TALK",
    'contact.title': "We're here to help you",
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.schedule': 'Business hours',

    'contacto.hero.badge': 'Engineering for the future',
    'contacto.hero.title': 'We are ready to help you',
    'contacto.hero.subtitle': 'Our technical experience in environmental engineering guarantees that your operations not only comply with regulations, but lead the way towards active sustainability.',

    'contacto.cierre.title': 'Optimize your environmental performance today',
    'contacto.cierre.subtitle': 'Request a free environmental assessment. Our engineers will analyze your current processes to identify strategic opportunities for sustainability and compliance.',
    'contacto.cierre.btn': 'Request Free Assessment',

    // ── Contacto Form ────────────────────────────────────────────
    'contacto.form.title': 'Send us a message',
    'contacto.form.name_placeholder': 'John Smith',
    'contacto.form.company_placeholder': 'Your organization name',
    'contacto.form.sector': 'Sector',
    'contacto.form.sector_mining': 'Mining',
    'contacto.form.sector_energy': 'Energy',
    'contacto.form.sector_industry': 'Industry',
    'contacto.form.sector_government': 'Government',
    'contacto.form.sector_other': 'Other',
    'contacto.form.email_corp': 'Corporate Email',
    'contacto.form.email_placeholder': 'john@company.com',
    'contacto.form.message_placeholder': 'How can we collaborate on your next environmental project?',
    'contacto.form.submit': 'Send Inquiry',
    'contacto.form.direct_info': 'Direct Information',
    'contacto.form.whatsapp_label': 'Corporate WhatsApp',
    'contacto.form.video_title': 'Azul Sostenible Video',

    // ── About ────────────────────────────────────────────────────
    'about.badge': 'WHO WE ARE',
    'about.mission': 'Mission',
    'about.vision': 'Vision',
    'about.values': 'Values',
    'about.faq': 'Frequently Asked Questions',

    // ── Nosotros About ───────────────────────────────────────────
    'nosotros.about.title': 'What does Azul Sostenible do and who does it help?',
    'nosotros.about.body': 'We help organizations in the industrial, mining, healthcare and agro-industrial sectors to comply with environmental regulations, reduce legal risks and optimize costs through technical, traceable and sustainable waste management.',
    'nosotros.about.img_alt': 'Azul Sostenible technical staff',

    'nosotros.cierre.title': 'SMART COMPANIES MANAGE WASTE, LEADING COMPANIES MANAGE IMPACT',

    'nosotros.compliance.title': 'How do we help companies comply with environmental regulations?',
    'nosotros.compliance.body': 'We accompany companies in complying with environmental regulations, OEFA inspections and regulatory requirements, ensuring traceability, valid documentation and reduction of legal risks.',

    'nosotros.hero.title': 'COMPANY SPECIALIZED IN SOLID, HAZARDOUS AND INDUSTRIAL WASTE MANAGEMENT FOR BUSINESSES IN PERU',
    'nosotros.hero.subtitle': 'We evolve from traditional management to intelligent and circular waste management, focused on reducing risks, avoiding sanctions and improving operational efficiency.',
    'nosotros.hero.cta': 'REQUEST A CONSULTATION',

    'nosotros.mvv.mission_body': 'To pursue innovation and promote a new business model in the solid waste sector through Rational Management and Sustainable Handling of Solid and Liquid Waste and Environmental Sanitation nationwide.',
    'nosotros.mvv.vision_body': 'To be a leading company in environmental management, sustainability and circular economy in Peru, driving responsible and competitive companies.',
    'nosotros.mvv.valores_title': 'Our Values',

    'nosotros.sectores.title': 'What type of companies do we serve?',

    'nosotros.servicios.title': 'What waste management services does Azul Sostenible offer?',
    'nosotros.servicios.description': 'Azul Sostenible provides solid, hazardous and industrial waste management services including characterization, collection, authorized transport, valorization and final disposal, in accordance with current environmental regulations in Peru.',

    // ── Resources ────────────────────────────────────────────────
    'resources.badge': 'RESOURCE CENTER',
    'resources.guides': 'Regulatory Guides',
    'resources.calculators': 'Calculators',
    'resources.blog': 'Blog',
    'resources.events': 'Training',
    'resources.newsletter': 'Subscribe to our newsletter',

    'recursos.newsletter.title': 'Do you need a customized tool?',
    'recursos.newsletter.subtitle': 'We develop calculators and environmental metrics dashboards tailored to your company.',
    'recursos.newsletter.placeholder': 'Your professional email',
    'recursos.newsletter.cta': 'Request Demo',

    'recursos.hero.badge': 'Knowledge Center',
    'recursos.hero.title': 'Sustainable Information and Tools',
    'recursos.hero.body': 'Access technical resources, impact calculators and the latest environmental regulations to boost efficiency and sustainability in your organization.',
    'recursos.hero.img_alt': 'Modern workspace with engineers reviewing blueprints',
    'recursos.hero.card_title': 'Traceability Software',
    'recursos.hero.card_body': 'Discover our platform',

    'recursos.aliados.title': 'Strategic Allies',
    'recursos.aliados.subtitle': 'We work together with organizations committed to innovation and environmental sustainability.',
    'recursos.aliados.wastefy_title': 'Our App - Wastefy',
    'recursos.aliados.wastefy_subtitle': 'Comprehensive Solid Waste Collection Service',
    'recursos.aliados.wastefy_body': 'Wastefy is an app whose purpose is the provision of collection, transportation, disposal and/or commercialization services for different types of waste.',
    'recursos.aliados.wastefy_cta': 'Download',
    'recursos.aliados.andeslab_body': 'It is an environmental engineering research center in Lima, Peru. Specialized in solid and liquid waste analysis, committed to innovation for sustainable development, we have professionals accredited by RENACYT and collaborate with universities and national and international organizations.',
    'recursos.aliados.banco_body': 'It is the first organization to promote environmental financial inclusion through the conversion of waste as resources into energy sources and raw materials, through the implementation of industrialization and transformation centers for waste towards energy and material valorization.',

    'recursos.blog.title': 'Blue Blog',
    'recursos.blog.subtitle': 'Technical articles on environmental engineering, circular economy and industrial sustainability trends.',
    'recursos.blog.view_all': 'View all articles',

    'recursos.capacitaciones.title': 'Training Calendar',
    'recursos.capacitaciones.subtitle': 'Participate in our technical training sessions taught by specialists with extensive experience in the environmental sector.',
    'recursos.capacitaciones.li1': 'Official certification included',
    'recursos.capacitaciones.li2': 'In-Person and Online Modalities',
    'recursos.capacitaciones.view_more': 'View more',

    'recursos.guias.title': 'Regulatory Guides',
    'recursos.guias.subtitle': 'Complete repository of current environmental laws and regulations in Peru.',
    'recursos.guias.carbono_title': 'Carbon Footprint',
    'recursos.guias.carbono_body': 'Measure the CO2 emissions of your industrial operations.',
    'recursos.guias.carbono_cta': 'Start Calculation',
    'recursos.guias.residuos_title': 'Waste Generation',
    'recursos.guias.residuos_body': 'Optimize your management by calculating segregation and projected weighing.',
    'recursos.guias.residuos_cta': 'Open Tool',

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

    // ── Proyectos Cierre ─────────────────────────────────────────
    'proyectos.cierre.title': 'Do you want to be our next success story?',
    'proyectos.cierre.body': 'Optimize your environmental processes with the backing of an expert technical team and solutions tailored to your industry.',
    'proyectos.cierre.cta': 'Request Audit',

    // ── Proyectos Grid ───────────────────────────────────────────
    'proyectos.grid.title': 'Our Technical Track Record',
    'proyectos.grid.body': 'We develop engineering and waste management solutions for the most demanding mining operations in the country, ensuring traceability and sustainability in every process.',
    'proyectos.grid.card_cta': 'View case detail',
    'proyectos.grid.also_trusted_title': 'They also trusted us',
    'proyectos.grid.also_trusted_body': 'Other mining units that have implemented our environmental management protocols.',
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

    // ── Chungar (success case) ───────────────────────────────────
    'chungar.hero.badge': 'SUCCESS PROJECT',
    'chungar.hero.title': 'UM. CHUNGAR - Success Stories',
    'chungar.hero.subtitle': 'Optimizing waste management at the Animón Mining Unit through high-precision environmental engineering.',
    'chungar.que_hicimos.title': 'What did we do?',
    'chungar.que_hicimos.intro': 'We transform technical challenges into efficient environmental management solutions. We present this case developed for the Animón Mining Unit of Compañía Minera Chungar S.A.C., where we optimized the classification of industrial waste under the highest safety standards and current regulations.',
    'chungar.que_hicimos.card1.title': 'Technical Analysis',
    'chungar.que_hicimos.card1.desc': 'Comprehensive hazard assessment of post-secondary cardboard containers.',
    'chungar.que_hicimos.card2.title': 'Laboratory',
    'chungar.que_hicimos.card2.desc': 'Physical and chemical inspections to rule out explosivity risks.',
    'chungar.que_hicimos.trazabilidad': 'Guaranteed traceability across all processes.',
    'chungar.resolucion.title': 'Case Resolution',
    'chungar.resolucion.quote': '"Through the application of technical evidence and the principle of administrative consistency, we demonstrated that these wastes do not present hazardous characteristics (explosivity, toxicity or flammability)."',
    'chungar.resolucion.body': 'Based on Legislative Decree No. 1278, we supported that post-consumer cardboard can be managed as non-hazardous waste, enabling a more agile and consistent final disposal aligned with the mine\'s operational reality.',
    'chungar.resolucion.normativa.title': 'Regulatory Support',
    'chungar.resolucion.normativa.desc': 'Full compliance with MINAM regulations and international mining protocols.',
    'chungar.resumen.title': 'Success Summary',
    'chungar.resumen.subtitle': 'A milestone in operational and environmental efficiency for our client.',
    'chungar.resumen.card1.title': 'Compliance',
    'chungar.resumen.card1.desc': 'We ensure strict compliance with MINAM regulations, eliminating legal risks and administrative penalties.',
    'chungar.resumen.card2.title': 'Optimization',
    'chungar.resumen.card2.desc': 'Significant reduction in logistics costs and optimization of temporary storage times at the mine.',
    'chungar.resumen.card3.title': 'Safety',
    'chungar.resumen.card3.desc': 'We guarantee that 100% of managed waste maintains absolute safety for the environment and workers.',
    'chungar.resumen.trazabilidad': 'Full Traceability',
    'chungar.resumen.trazabilidad.desc': 'Digital monitoring from origin to final disposal.',
    'chungar.resumen.cta': 'Request Detailed Case',
    'chungar.faq.q1': 'Is there any risk that these boxes contain explosive residues?',
    'chungar.faq.a1': 'No. The explosive always travels in a sealed primary packaging that prevents any contact or leakage to the outer cardboard. Our laboratory tests confirm the absence of chemical traces.',
    'chungar.faq.q2': 'How is safety guaranteed during final disposal?',
    'chungar.faq.a2': 'Although classified as non-hazardous, their transport and disposal are carried out exclusively by a Solid Waste Operating Company (EO-RS) duly authorized by the competent authorities.',
    'chungar.faq.q3': 'Does this new classification have legal backing?',
    'chungar.faq.a3': 'Yes, it is fully backed by Legislative Decree No. 1278 (Comprehensive Solid Waste Management Law). The technical support allows reclassification based on the physical reality of the waste.',

    // ── Tarifa Plana ─────────────────────────────────────────────
    'tarifa_plana.hero.badge': 'Operational Excellence 12 Months',
    'tarifa_plana.hero.title': 'Environmental flat rate',
    'tarifa_plana.hero.subtitle': 'The simplest and safest way to manage the environment in your company: everything included in a fixed annual fee to guarantee compliance and sustainability.',
    'tarifa_plana.hero.cta_primary': 'Get Started',
    'tarifa_plana.hero.cta_secondary': 'View Technical Details',
    'tarifa_plana.definicion.title': 'What is the Environmental Flat Rate?',
    'tarifa_plana.definicion.body_pre': 'It is a comprehensive environmental management model designed for companies seeking predictability and excellence. For 12 months, we become your external environmental department under a single annual payment.',
    'tarifa_plana.definicion.body_highlight': '',
    'tarifa_plana.definicion.body_post': '',
    'tarifa_plana.definicion.advantages_label': 'Model advantages',
    'tarifa_plana.definicion.model_title': '360° Model',
    'tarifa_plana.definicion.model_body': 'Eliminate the uncertainty of variable costs. With our Flat Rate, you project your environmental investment with surgical precision, ensuring every waste and every procedure is covered.',
    'tarifa_plana.definicion.stat1_label': 'Hidden Costs',
    'tarifa_plana.definicion.stat2_label': 'Compliance',
    'tarifa_plana.incluye.title': 'WHAT DOES IT INCLUDE?',
    'tarifa_plana.incluye.subtitle': 'Three fundamental pillars that support your organization\'s operations and legality.',
    'tarifa_plana.beneficios.title': 'WHAT DOES YOUR COMPANY GAIN?',
    'tarifa_plana.ingenieria.title': 'ENGINEERING APPLIED TO SUSTAINABILITY',
    'tarifa_plana.ingenieria.subtitle': 'We implement technological control layers to ensure that the Flat Rate is not just a service, but a strategic asset.',
    'tarifa_plana.ingenieria.card_title': 'PREDICTIVE CONTROL',
    'tarifa_plana.ingenieria.card_subtitle': 'Compliance Status: 98.4%',
    'tarifa_plana.ingenieria.label1': 'OPERABILITY',
    'tarifa_plana.ingenieria.label2': 'OPTIMAL',
    'tarifa_plana.ingenieria.quote': 'The Flat Rate allows us to anticipate problems before they become liabilities.',
    'tarifa_plana.alcance.title': 'COMPREHENSIVE MANAGEMENT',
    'tarifa_plana.alcance.subtitle': 'A scope designed to cover all the technical aspects of your industrial or commercial operation.',
    'tarifa_plana.alcance.list_label': 'COMPLETE LIST OF SERVICES',
    'tarifa_plana.cierre.title': 'Start your year protected',
    'tarifa_plana.cierre.subtitle': 'A recoverable investment that guarantees environmental safety all 12 months of the year. Join the companies that already operate worry-free.',
    'tarifa_plana.cierre.cta': 'I want the Flat Rate',

    'software_trazabilidad.hero.badge': 'Digital Innovation',
    'software_trazabilidad.hero.title': 'Traceability Software',
    'software_trazabilidad.hero.subtitle': 'Digital traceability turns your waste management into reliable and auditable information.',
    'software_trazabilidad.hero.cta': 'System Access',

    'software_trazabilidad.value.heading': 'More control = fewer risks and sanctions = more value and reputation for your company.',

    'software_trazabilidad.cierre.title': 'Turn your environmental data into control, smart decisions and competitive advantage.',
    'software_trazabilidad.cierre.cta_primary': 'More Information',
    'software_trazabilidad.cierre.cta_secondary': 'Request Demo',

    'software_trazabilidad.consiste.label': 'Blue Methodology',
    'software_trazabilidad.consiste.title': 'WHAT DOES IT CONSIST OF?',
    'software_trazabilidad.consiste.body': 'Our software records in detail every movement of solid waste from its origin to its final destination, guaranteeing an unbreakable chain of custody.',
    'software_trazabilidad.consiste.quote': '"We automate what you currently do on paper or in Excel, centralizing dates, photos and auditable reports for clients and authorities."',
    'software_trazabilidad.consiste.img_alt': 'Digital environmental traceability dashboard with charts and certifications',

    'software_trazabilidad.gana.title': 'WHAT DOES YOUR COMPANY GAIN?',
    'software_trazabilidad.gana.subtitle': 'We optimize your environmental operation through cutting-edge technology and simplified processes.',

    'carahuacra.faq.q1': 'Is it safe to recycle these secondary containers?',
    'carahuacra.faq.a1': 'Yes, it is completely safe. Our technical study confirmed that the use of polyethylene as a primary container acts as an absolute barrier against chemical migration. After field validation, these materials are classified as non-hazardous, allowing their reintegration into circular value chains without risks.',
    'carahuacra.faq.q2': 'What legal basis supports this procedure?',
    'carahuacra.faq.a2': 'The procedure is strictly based on Articles 71, 72, 73 and 74 of the Regulation of the Comprehensive Solid Waste Management Law (D.L. No. 1278). These articles empower the technical reclassification of waste through technical studies demonstrating the absence of hazardous characteristics.',

    'carahuacra.hero.badge': 'CASE STUDY',
    'carahuacra.hero.title': 'U.M. CARAHUACRA: Engineering for Environmental Excellence',
    'carahuacra.hero.description': 'Technical study and field evaluation for the reclassification of secondary containers, optimizing the circular value chain in modern mining.',
    'carahuacra.hero.location': 'Yauli, Peru',
    'carahuacra.hero.status': 'Certification Achieved',

    'carahuacra.interes.title': 'You May Be Interested',
    'carahuacra.interes.item1_title': 'Chemical Analysis',
    'carahuacra.interes.item1_desc': 'Advanced laboratory protocols for the characterization of effluents and solids.',
    'carahuacra.interes.item2_title': 'Regulatory Compliance',
    'carahuacra.interes.item2_desc': 'Strategic advisory on national and international environmental regulations.',
    'carahuacra.interes.item3_title': 'Circular Economy',
    'carahuacra.interes.item3_desc': 'Design of closed-loop systems to optimize industrial resources.',

    'carahuacra.que_hicimos.title': 'What did we do?',
    'carahuacra.que_hicimos.intro': 'We conducted a rigorous and multidimensional field assessment to determine the chemical integrity of secondary containers at the Carahuacra Mining Unit.',
    'carahuacra.que_hicimos.item1': 'Physical barrier verification: Confirmation that the primary polyethylene container prevents any type of chemical contamination to the secondary packaging.',
    'carahuacra.que_hicimos.item2': 'Technical sampling: Analysis of residual waste and chemical traces under high-precision protocols.',
    'carahuacra.que_hicimos.item3': 'Flow audit: Mapping of the waste life cycle from generation to temporary disposal.',
    'carahuacra.que_hicimos.card_title': 'Rigorous Assessment',
    'carahuacra.que_hicimos.card_desc': 'Precise data supporting strategic sustainability decisions.',
    'carahuacra.que_hicimos.img_alt': 'Engineer examining technical data in an industrial control room',

    'carahuacra.resolucion.title': 'Case Resolution',
    'carahuacra.resolucion.description': 'Based on Articles 71 through 74 of the Regulation of the Comprehensive Solid Waste Management Law, we successfully demonstrated the harmlessness of the secondary containers.',
    'carahuacra.resolucion.status_title': 'Final Status: Reclassified',
    'carahuacra.resolucion.status_desc': 'Officially categorized as \'non-hazardous\' waste.',

    'carahuacra.resumen.title': 'Success Summary',
    'carahuacra.resumen.subtitle': 'Measurable impact on operational efficiency and environmental commitment.',
    'carahuacra.resumen.stat1_label': 'Regulatory Compliance',
    'carahuacra.resumen.stat1_desc': 'Full alignment with Peruvian waste management regulations.',
    'carahuacra.resumen.stat2_label': 'Logistics Costs',
    'carahuacra.resumen.stat2_desc': 'Significant reduction in the transport and disposal of hazardous waste.',
    'carahuacra.resumen.stat3_value': 'Circular',
    'carahuacra.resumen.stat3_label': 'Green Economy',
    'carahuacra.resumen.stat3_desc': 'The containers now enter direct industrial recycling chains.',

    'cristobal.faq.title': 'Questions that may arise',
    'cristobal.faq.subtitle': 'We clarify the most common technical doubts about the characterization process and operational safety.',
    'cristobal.faq.q1': 'Is it completely safe to handle these boxes after their reclassification?',
    'cristobal.faq.a1': 'Absolutely. The technical evaluation confirmed hermeticity and absence of hazardous traces. The technical support guarantees that there is no risk from contact or standard handling within current industrial safety protocols.',
    'cristobal.faq.q2': 'How does this measure impact the company\'s operation?',
    'cristobal.faq.a2': 'The impact is twofold: operational and financial. Operationally, it simplifies the waste flow in warehouses. Financially, it drastically reduces costs associated with transport and final disposal in hazardous waste security landfills.',
    'cristobal.faq.q3': 'Does this resolution comply with current legal standards?',
    'cristobal.faq.a3': 'Yes, it strictly follows the Comprehensive Solid Waste Management Law (D.L. No. 1278) and its regulations. All generated documentation serves as legal technical support before inspections by regulatory bodies.',

    'cristobal.hero.subtitle': 'Comprehensive technical evaluation for the characterization and sustainable management of secondary containers in high-complexity mining operations.',
    'cristobal.hero.tag_compliance': 'DL 1278 Compliance',
    'cristobal.hero.tag_reclassification': 'Technical Reclassification',

    'cristobal.impacto.title': 'Operation Impact',
    'cristobal.impacto.card1_badge': 'Logistics Optimization',
    'cristobal.impacto.card1_title': 'Storage Efficiency',
    'cristobal.impacto.card1_desc': 'The reclassification enabled a strategic reorganization of collection spaces, eliminating bottlenecks in the temporary disposal of secondary packaging at the San Cristóbal Mining Unit.',
    'cristobal.impacto.card1_stat': 'Operating Costs',
    'cristobal.impacto.card2_title': 'Regulatory Compliance',
    'cristobal.impacto.card2_desc': 'Total guarantee under the framework of D.L. No. 1278 (Comprehensive Solid Waste Management Law), ensuring operations free of legal contingencies.',
    'cristobal.impacto.card3_title': 'Resource Management',
    'cristobal.impacto.card3_desc': 'Effective transition from the concept of \'Waste\' to \'Valorizable Resource\'.',

    'cristobal.interes.title': 'You may be interested',
    'cristobal.interes.card1_img_alt': 'Laboratory with advanced scientific equipment',
    'cristobal.interes.card1_title': 'Technical Analysis',
    'cristobal.interes.card1_desc': 'Certified laboratories for complex characterization.',
    'cristobal.interes.card2_img_alt': 'Workspace with environmental compliance documents',
    'cristobal.interes.card2_title': 'Environmental Compliance',
    'cristobal.interes.card2_desc': 'Expert advisory on national regulatory frameworks.',
    'cristobal.interes.card3_img_alt': 'Circular economy representation with sustainable architecture',
    'cristobal.interes.card3_title': 'Circular Economy',
    'cristobal.interes.card3_desc': 'Regenerative business models for the industry.',

    'cristobal.que_hicimos.title': 'What did we do?',
    'cristobal.que_hicimos.description': 'We carried out a comprehensive technical evaluation to determine the hazardousness of cardboard containers used as secondary packaging in the transport of explosives.',
    'cristobal.que_hicimos.item1': 'Detailed visual inspections under industrial standards.',
    'cristobal.que_hicimos.item2': 'Comprehensive traceability analysis of use and contact.',
    'cristobal.que_hicimos.item3': 'Rigorous structural integrity verification protocols.',
    'cristobal.que_hicimos.img_alt': 'Engineer performing technical inspection with precision tools',
    'cristobal.que_hicimos.stat_label': 'Guaranteed Technical Traceability',

    'cristobal.resolucion.title': 'Technical Resolution',
    'cristobal.resolucion.subtitle': 'Regulatory support based on Supreme Decree No. 014-2017-MINAM for official reclassification.',
    'cristobal.resolucion.card1_title': 'Non-Reactive',
    'cristobal.resolucion.card1_desc': 'No adverse chemical interaction with the environment.',
    'cristobal.resolucion.card2_title': 'Non-Flammable',
    'cristobal.resolucion.card2_desc': 'Thermal risk assessment satisfactorily passed.',
    'cristobal.resolucion.card3_title': 'Non-Toxic',
    'cristobal.resolucion.card3_desc': 'Guaranteed safety for human handling.',
    'cristobal.resolucion.card4_title': 'Non-Explosive',
    'cristobal.resolucion.card4_desc': 'Secondary packaging free of dynamic risk traces.',
    'cristobal.resolucion.cta_title': 'Official Reclassification',
    'cristobal.resolucion.cta_desc': 'Technical determination of non-hazardous solid waste, transforming waste management into strategic resource management.',
    'cristobal.resolucion.cta_btn': 'Download Technical Support',

    // ── Iscaycruz Bento ─────────────────────────────────────────
    'iscaycruz.bento.what_title': 'What did we do?',
    'iscaycruz.bento.what_desc': 'We developed a high-precision technical study to evaluate the hazardousness of cardboard containers used in mining operations.',
    'iscaycruz.bento.step1_label': 'Step 01',
    'iscaycruz.bento.step1_title': 'Safety Data Sheet Analysis',
    'iscaycruz.bento.step1_desc': 'In-depth review of chemical components and MSDS.',
    'iscaycruz.bento.step2_label': 'Step 02',
    'iscaycruz.bento.step2_title': 'Sample Collection',
    'iscaycruz.bento.step2_desc': 'In-situ sampling protocol under international regulations.',
    'iscaycruz.bento.step3_label': 'Step 03',
    'iscaycruz.bento.step3_title': 'Regulatory Analysis',
    'iscaycruz.bento.step3_desc': 'Technical comparison with the Waste Management Law.',
    'iscaycruz.bento.resolution_title': 'Case Resolution',
    'iscaycruz.bento.resolution_item1': 'Complete absence of explosiveness in secondary containers.',
    'iscaycruz.bento.resolution_item2': 'Cellulosic composition with controlled combustion without detonation.',
    'iscaycruz.bento.resolution_item3': 'Final classification: NON-hazardous waste.',
    'iscaycruz.bento.summary_title': 'Success Summary',
    'iscaycruz.bento.stat1_label': 'Technical Support',
    'iscaycruz.bento.stat2_value': 'Optimized',
    'iscaycruz.bento.stat2_label': 'Waste Management',
    'iscaycruz.bento.summary_desc': 'Regulatory uncertainty was drastically reduced for UM. ISCAYCRUZ, enabling efficient and sustainable management of materials previously considered high-risk.',
    'iscaycruz.bento.image_alt': 'Industrial predictive control panel',

    'iscaycruz.cta.title': 'Optimize your environmental management today',
    'iscaycruz.cta.subtitle': 'We provide the necessary technical support so that your company becomes a benchmark in industrial sustainability.',
    'iscaycruz.cta.btn': 'Start technical consultation',

    'iscaycruz.hero.badge': 'Success Stories',
    'iscaycruz.hero.title': 'UM. ISCAYCRUZ: Engineering for Mining Sustainability',
    'iscaycruz.hero.subtitle': 'Specialized technical evaluation for waste reclassification and optimization of industrial processes.',

    'iscaycruz.faq.title': 'Frequently Asked Questions about the Case',
    'iscaycruz.faq.q1': 'Why was the study necessary?',
    'iscaycruz.faq.a1': 'To confirm whether cardboard containers that had no direct contact with explosive material could be managed more efficiently and at lower cost, strictly complying with the Peruvian legal framework.',
    'iscaycruz.faq.q2': 'Do they represent any safety risk?',
    'iscaycruz.faq.a2': 'Our tests demonstrated that the containers only present combustion risk under specific and extreme thermal conditions, similar to any standard cellulose material, but without risk of detonation or projection.',
    'iscaycruz.faq.q3': 'How should they currently be managed?',
    'iscaycruz.faq.a3': 'Once reclassified as non-hazardous waste, they can be managed through authorized EO-RS for recycling or reuse, reducing operational costs and improving the operation\'s sustainability profile.',

    'iscaycruz.interes.title': 'You May Be Interested',
    'iscaycruz.interes.card1_title': 'Advanced Chemical Analysis',
    'iscaycruz.interes.card1_desc': 'Specialized leaching tests and characterization of industrial materials.',
    'iscaycruz.interes.card2_title': 'Regulatory Compliance',
    'iscaycruz.interes.card2_desc': 'Comprehensive advisory on environmental regulations for the mining and industrial sector.',
    'iscaycruz.interes.card3_title': 'Circular Economy',
    'iscaycruz.interes.card3_desc': 'Strategies for the reduction and valorization of solid waste.',

    'morococha.cta.title': 'Do you need a technical evaluation for your company?',
    'morococha.cta.btn': 'Contact Specialist',

    'morococha.hero.badge': 'Technical Evaluation Project',
    'morococha.hero.title': 'UM. MOROCOCHA - Success Stories',
    'morococha.hero.subtitle': 'Engineering and sustainability applied to advanced waste management in the mining industry. A technical approach to hazardousness declassification.',

    'morococha.que_hicimos.title': 'What did we do?',
    'morococha.que_hicimos.body': 'We carried out a comprehensive study for Compañía Minera Argentum S.A.C., focused on the technical and regulatory evaluation of cardboard packaging used for explosives in its mining operations.',
    'morococha.que_hicimos.step1_title': 'Safety Data Sheet Review',
    'morococha.que_hicimos.step1_desc': 'Comprehensive analysis of chemical composition and reactivity declared in the original MSDS.',
    'morococha.que_hicimos.step2_title': 'Field Sampling',
    'morococha.que_hicimos.step2_desc': 'Collection of representative samples in temporary storage areas to ensure data integrity.',
    'morococha.que_hicimos.step3_title': 'Visual Inspection',
    'morococha.que_hicimos.step3_desc': 'Direct verification of explosive material traces and physical degradation conditions.',
    'morococha.que_hicimos.img_alt': 'Laboratory technician inspecting industrial cardboard materials',

    // ── Morococha Resolución ─────────────────────────────────────
    'morococha.resolucion.title': 'Case Resolution',
    'morococha.resolucion.subtitle': 'Based on scientific evidence and strict regulatory compliance.',
    'morococha.resolucion.lab_label': 'Laboratory Analysis',
    'morococha.resolucion.lab_title': 'Andeslab S.A.C. Certification',
    'morococha.resolucion.lab_body': 'After a rigorous flammability and reactivity analysis conducted by Andeslab S.A.C., it was scientifically confirmed that the residual material does not present explosive properties. The technical evidence demonstrated that the cardboard only presents combustion but not detonation under thermal or mechanical stimuli.',
    'morococha.resolucion.badge1': 'Detonation Test: Negative',
    'morococha.resolucion.badge2': 'Flammability: Under Control',
    'morococha.resolucion.legal_title': 'Regulatory Framework',
    'morococha.resolucion.legal_body': 'The waste has been classified as Non-Hazardous, allowing its final management through an EO-RS duly authorized by MINAM.',
    'morococha.resolucion.compliance': 'Compliance: 100% MINAM',
    'morococha.resolucion.summary_title': 'Success Summary',
    'morococha.resolucion.summary_body': 'This project provided the definitive technical support for an orderly, safe and environmentally responsible waste management. We managed to transform an operational uncertainty into a standardized process that reduces costs and environmental risks for Compañía Minera Argentum S.A.C.',
    'morococha.resolucion.success_label': 'Proven Success',

    'morococha.faq.q1': 'Are these cardboard containers still hazardous after use?',
    'morococha.faq.a1': 'No, the technical study demonstrated that they do not present explosiveness or remaining hazardous characteristics, allowing a more efficient management.',
    'morococha.faq.q2': 'What made this conclusion possible?',
    'morococha.faq.a2': 'The combination of a comprehensive background review, rigorous field sampling and analytical testing in an accredited laboratory.',
    'morococha.faq.q3': 'How should they be managed in the end?',
    'morococha.faq.a3': 'They must be managed by a Solid Waste Operating Company (EO-RS) authorized by MINAM, following non-hazardous waste protocols.',

    'yauliyacu.faq.q1': 'Why were these containers evaluated?',
    'yauliyacu.faq.a1': 'It was imperative to confirm the real hazardous status after their initial use with cyanide to determine whether the internal washing process was sufficient for safe disposal.',
    'yauliyacu.faq.q2': 'What did the laboratory analysis show?',
    'yauliyacu.faq.a2': 'The analysis showed cyanide concentrations below quantifiable limits, validating the effectiveness of the cleaning process to convert hazardous waste into inert materials.',
    'yauliyacu.faq.q3': 'How should these containers be managed in the end?',
    'yauliyacu.faq.a3': 'They must be managed through authorized Solid Waste Operating Companies (EO-RS), allowing their reuse as high-purity metal scrap.',

    'yauliyacu.hero.title': 'U.M. YAULIYACU - Success Stories',
    'yauliyacu.hero.subtitle': 'Toxicity study and cyanide container management: A milestone in environmental engineering and mining sustainability.',

    'yauliyacu.interes.title': 'You may be interested',
    'yauliyacu.interes.card1_title': 'Comprehensive Waste Management',
    'yauliyacu.interes.card1_desc': 'Strategic solutions for the management of high-complexity industrial and mining waste.',
    'yauliyacu.interes.card2_title': 'Accredited Testing',
    'yauliyacu.interes.card2_desc': 'Physicochemical and toxicological testing with INACAL certification for legal compliance.',
    'yauliyacu.interes.card3_title': 'Strategic Consulting',
    'yauliyacu.interes.card3_desc': 'Expert advisory on MINAM environmental regulations and corporate sustainability plans.',

    'yauliyacu.que_hicimos.phase_label': 'Intervention Phase',
    'yauliyacu.que_hicimos.title': 'What did we do?',
    'yauliyacu.que_hicimos.step1_title': 'Container Assessment',
    'yauliyacu.que_hicimos.step1_desc': 'Comprehensive analysis of post-consumer sodium cyanide containers, determining their initial physical and chemical state.',
    'yauliyacu.que_hicimos.step2_title': 'Cleaning Process',
    'yauliyacu.que_hicimos.step2_desc': 'Implementation and technical validation of the controlled triple-wash protocol for the removal of hazardous traces.',
    'yauliyacu.que_hicimos.step3_title': 'Accredited Analysis',
    'yauliyacu.que_hicimos.step3_desc': 'Rigorous testing in laboratories accredited by INACAL to guarantee the accuracy of chemical results.',
    'yauliyacu.que_hicimos.ref_label': 'TECHNICAL REFERENCE',
    'yauliyacu.que_hicimos.quote': '"Analytical precision was the cornerstone for the waste reclassification in this mining project."',
    'yauliyacu.que_hicimos.img_alt': 'Technical analysis in laboratory',

    'yauliyacu.resolucion.title': 'Case Resolution',
    'yauliyacu.resolucion.body1': 'The analytical results demonstrated that, after the optimized washing protocol, the metal containers did not present quantifiable concentrations of cyanide.',
    'yauliyacu.resolucion.classification': 'Final classification: Non-hazardous waste.',
    'yauliyacu.resolucion.body2': 'This technical validation enabled efficient management under MINAM guidelines and final handling through duly authorized EO-RS operating companies, guaranteeing total regulatory compliance.',
    'yauliyacu.resolucion.efficiency_title': 'Efficient Management',
    'yauliyacu.resolucion.efficiency_desc': 'Strict compliance with international toxicity standards and circular economy.',

    'yauliyacu.resumen.title': 'Success Summary',
    'yauliyacu.resumen.card1_title': 'Main Achievement: Technical Test',
    'yauliyacu.resumen.card1_desc': 'Conclusive confirmation of non-toxicity after controlled washing, eliminating environmental risk and the hazardous burden of the metallic material.',
    'yauliyacu.resumen.metric1_label': 'Residue-Free',
    'yauliyacu.resumen.card2_title': 'Operational Efficiency',
    'yauliyacu.resumen.card2_desc': 'Substantial improvement in waste logistics and reduction of operational costs associated with final disposal.',
    'yauliyacu.resumen.card3_title': 'Basis for Valorization',
    'yauliyacu.resumen.card3_desc': 'The technical study served as legal and scientific foundation for the future valorization of metals, promoting the circular economy at the Yauliyacu mining unit.',
    'yauliyacu.resumen.stat1_label': 'Risk Reduction',
    'yauliyacu.resumen.stat2_label': 'Impact',

    // ── Andaychagua FAQ ──────────────────────────────────────────
    'andaychagua.faq.q1': 'Why is the cardboard box not considered hazardous?',
    'andaychagua.faq.a1': 'Because it functions strictly as an external (secondary) packaging, there is no direct physical contact between the explosive material and the cardboard structure, maintaining its chemical integrity.',
    'andaychagua.faq.q2': 'What test confirmed there was no risk?',
    'andaychagua.faq.a2': 'An accredited laboratory test was performed under international standards that analyzed the presence of chemical residues and hazardous characteristics, yielding negative results in all indicators.',
    'andaychagua.faq.q3': 'What is done with these boxes in the end?',
    'andaychagua.faq.a3': 'Once reclassified, they are managed as common waste, allowing their final disposal in ordinary sanitary landfills or their insertion into paper and cardboard recycling chains.',

    // ── Andaychagua Hero ─────────────────────────────────────────
    'andaychagua.hero.badge': 'Success Case: Sustainable Mining',
    'andaychagua.hero.title': 'UM. ANDAYCHAGUA',
    'andaychagua.hero.description': 'Environmental engineering applied to the optimization of industrial waste in high-complexity mining operations.',
    'andaychagua.hero.img_alt': 'Panoramic view of the Andaychagua mining operation in the high Andean landscape',

    // ── Andaychagua Interés ──────────────────────────────────────
    'andaychagua.interes.title': 'You May Be Interested',
    'andaychagua.interes.card1_img_alt': 'Modern recycling and waste sorting plant',
    'andaychagua.interes.card1_title': 'Comprehensive Waste Management',
    'andaychagua.interes.card1_desc': 'Specialized services for the mining and energy industry.',
    'andaychagua.interes.card2_img_alt': 'High-tech environmental laboratory with modern equipment',
    'andaychagua.interes.card2_title': 'Accredited Testing',
    'andaychagua.interes.card2_desc': 'Chemical and physical tests under current regulations.',
    'andaychagua.interes.card3_img_alt': 'Professional environment with sustainability reports',
    'andaychagua.interes.card3_title': 'Strategic Consulting',
    'andaychagua.interes.card3_desc': 'Optimization of environmental processes and legal compliance.',

    // ── Andaychagua Qué Hicimos ──────────────────────────────────
    'andaychagua.que_hicimos.title': 'What did we do?',
    'andaychagua.que_hicimos.body': 'A specialized technical opinion was developed to define the hazardousness of cardboard containers used as secondary packaging for explosives at the Andaychagua Operating Unit. The main objective was to scientifically determine whether these materials should be classified as hazardous or non-hazardous waste, challenging conventional classifications through technical evidence.',
    'andaychagua.que_hicimos.unit_label': 'Operating Unit',
    'andaychagua.que_hicimos.unit_name': 'Andaychagua, Metallurgical Complex',

    // ── Andaychagua Resolución ───────────────────────────────────
    'andaychagua.resolucion.title': 'Case Resolution',
    'andaychagua.resolucion.body': 'The resolution was based on a rigorous three-stage process: comprehensive review of technical documents, on-site visual and physical inspection, and an accredited laboratory test.',
    'andaychagua.resolucion.quote': '"The technical report categorically concludes that the analyzed boxes do not present characteristics of explosiveness, toxicity, corrosiveness or chemical reactivity."',
    'andaychagua.resolucion.step_docs': 'Document Review',
    'andaychagua.resolucion.step_visual': 'Visual Inspection',
    'andaychagua.resolucion.step_lab': 'Laboratory Tests',
    'andaychagua.resolucion.step_physical': 'Physical Analysis',

    // ── Andaychagua Resumen ──────────────────────────────────────
    'andaychagua.resumen.title': 'Success Summary',
    'andaychagua.resumen.body': 'We successfully demonstrated with irrefutable technical evidence that cardboard containers can be ',
    'andaychagua.resumen.body_highlight': 'reclassified as non-hazardous waste.',
    'andaychagua.resumen.benefit_1': 'More efficient and safe management by separating materials without direct contact with explosives.',
    'andaychagua.resumen.benefit_2': 'Significant reduction in operational costs in the handling of special waste.',

    // ── Americana FAQ ────────────────────────────────────────────
    'americana.faq.title': 'Questions that may arise',
    'americana.faq.q1': 'Why are these boxes not considered hazardous?',
    'americana.faq.a1': 'Because they were only used as external packaging and did not have direct contact with the explosive. The technical analysis validated that they do not retain intrinsic properties of the material they originally contained.',
    'americana.faq.q2': 'What test was key to the conclusion?',
    'americana.faq.a2': 'The accredited laboratory test was fundamental, as it confirmed through reactivity and toxicity tests that the waste was not explosive nor posed an immediate chemical risk.',
    'americana.faq.q3': 'What is done with these boxes in the end?',
    'americana.faq.a3': 'They are disposed and managed by a Solid Waste Operating Company (EO-RS) duly authorized by MINAM, ensuring a responsible and legal final life cycle.',

    'americana.hero.title': 'UM. AMERICANA',
    'americana.hero.subtitle': 'Technical determination for the reclassification of containers and management of cyanide drums.',

    // ── Americana Qué Hicimos ────────────────────────────────────
    'americana.que_hicimos.title': 'What did we do?',
    'americana.que_hicimos.body': 'We presented a characterization study on the waste called "cardboard containers used as explosive packaging" generated by the company ALPAYANA S.A. during the dispatch of explosives and blasting accessories inside the mine. The objective was to determine whether these boxes should be classified as hazardous or non-hazardous waste. Additionally, the management and reclassification of cyanide drums was carried out.',
    'americana.que_hicimos.card1_title': 'Characterization',
    'americana.que_hicimos.card1_desc': 'Technical analysis of residual composition.',
    'americana.que_hicimos.card2_title': 'Management',
    'americana.que_hicimos.card2_desc': 'Cyanide drum logistics.',
    'americana.que_hicimos.img_alt': 'Environmental engineer examining packaging materials in laboratory',

    // ── Americana Resolución ─────────────────────────────────────
    'americana.resolucion.title': 'Case Resolution',
    'americana.resolucion.quote': '"The technical resolution concluded that the cardboard containers and drums do not present hazardous characteristics. MINAM determined that this waste can be managed as non-hazardous waste."',
    'americana.resolucion.warning_label': 'Important note:',
    'americana.resolucion.warning_body': 'If the cardboard were to become contaminated with the explosive product, it should be managed as hazardous waste.',
    'americana.resolucion.seal_title': 'Compliance Seal',
    'americana.resolucion.seal_subtitle': 'MINAM - Technical Resolution',

    // ── Americana Resumen ────────────────────────────────────────
    'americana.resumen.title': 'Success Summary',
    'americana.resumen.subtitle': 'We achieved a favorable technical opinion that supports the reclassification, optimizing the waste chain.',
    'americana.resumen.card1_title': 'Environmental Criterion',
    'americana.resumen.card1_desc': 'Adequate, safe and efficient management under current regulations.',
    'americana.resumen.card2_title': 'Valid Methodology',
    'americana.resumen.card2_desc': 'Confirmation through rigorous documentary analysis and testing.',
    'americana.resumen.card3_title': 'Accredited Testing',
    'americana.resumen.card3_desc': 'Laboratory results that guarantee non-hazardousness.',

    // ── Caracterización Hero ─────────────────────────────────────
    'caracterizacion.hero.title': 'Solid Waste Characterization',
    'caracterizacion.hero.subtitle': 'We reduce your final disposal cost by 30% to 80% through technical reclassification with regulatory backing.',
    'caracterizacion.hero.cta': 'I want my characterization',
    'caracterizacion.hero.badge': 'Regulatory Support',
    'caracterizacion.hero.img_alt': 'Industrial plant with modern waste management equipment',

    // ── Caracterización Incluye ──────────────────────────────────
    'caracterizacion.incluye.title': 'What does it include?',
    'caracterizacion.incluye.subtitle': 'Our characterization process is rigorous, repeatable and oriented to audit results.',

    // ── Caracterización Proceso ──────────────────────────────────
    'caracterizacion.proceso.label': 'Technical Diagnosis',
    'caracterizacion.proceso.title': 'What does it consist of?',
    'caracterizacion.proceso.body1': 'The diagnosis that reveals exactly what waste your organization generates. We identify, measure and classify your waste so you can make decisions based on real data, not estimates.',
    'caracterizacion.proceso.quote': 'WHAT IS NOT MEASURED, IS NOT MANAGED.',
    'caracterizacion.proceso.body2': 'We provide you with the complete and accurate information your operation needs for an effective transition towards the circular economy.',
    'caracterizacion.proceso.img_alt': 'Environmental engineer performing technical diagnosis with industrial tablet',

    // ── Reducción OPEX Hero ──────────────────────────────────────
    'reduccion_opex.hero.badge': 'OPEX Optimization',
    'reduccion_opex.hero.title': 'Strategic Environmental OPEX Diagnosis',
    'reduccion_opex.hero.tagline': 'We identify where money is being lost and how to recover it.',
    'reduccion_opex.hero.subtitle': 'A specialized methodology by Azul Sostenible to identify and prioritize cost reduction opportunities associated with environmental management.',

    // ── Reducción OPEX Beneficios ────────────────────────────────
    'reduccion_opex.beneficios.title': 'Benefits for the organization',

    // ── Reducción OPEX Cierre ────────────────────────────────────
    'reduccion_opex.cierre.title': 'Turn your environmental management into a competitive advantage',
    'reduccion_opex.cierre.subtitle': 'What you really get is a comprehensive strategy to reduce operational costs and strengthen your organization\'s competitiveness in the current market.',
    'reduccion_opex.cierre.cta_primary': 'Request Diagnosis',
    'reduccion_opex.cierre.cta_secondary': 'Talk to an Expert',

    // ── Reducción OPEX Entregables ───────────────────────────────
    'reduccion_opex.entregables.title': 'Deliverables (What does your company receive?)',

    // ── Reducción OPEX Metodología ───────────────────────────────
    'reduccion_opex.metodologia.title': 'What do we do? (Methodology)',
    'reduccion_opex.metodologia.subtitle': 'We carry out a comprehensive evaluation of environmental and waste management, analyzing each node of the operational chain.',

    // ── Reducción OPEX Por Qué ───────────────────────────────────
    'reduccion_opex.porque.title': 'Why implement this service?',
    'reduccion_opex.porque.model_title': 'The Traditional Inefficient Model',
    'reduccion_opex.porque.step1': 'Generate',
    'reduccion_opex.porque.step2': 'Store',
    'reduccion_opex.porque.step3': 'Transport',
    'reduccion_opex.porque.step4': 'Dispose',
    'reduccion_opex.porque.model_body': 'This linear cycle generates invisible "leaks" at each stage, turning your environmental management into an uncontrolled cost center.',
    'reduccion_opex.porque.conclusion': 'Conclusion: Your company spends without knowing exactly where to save.',

    // ── Almacenes Beneficios ─────────────────────────────────────
    'almacenes.beneficios.title_1': 'Direct Impact on your ',
    'almacenes.beneficios.title_highlight': 'Profitability',

    // ── Almacenes Hero ───────────────────────────────────────────
    'almacenes.hero.title_1': 'Smart Warehouses for the ',
    'almacenes.hero.title_highlight': 'Circular Economy',
    'almacenes.hero.subtitle': 'We transform storage spaces into strategic tools for cost reduction and environmental value generation.',
    'almacenes.hero.cta': 'Request Comprehensive Diagnosis',
    'almacenes.hero.card_title': 'Quick Diagnosis',
    'almacenes.hero.card_subtitle': 'We assess your operation in 48h',
    'almacenes.hero.stat1_label': 'Space Optimization',
    'almacenes.hero.stat2_label': 'OPEX Reduction',

    // ── Almacenes Problema ───────────────────────────────────────
    'almacenes.problema.badge': 'Why is it important?',
    'almacenes.problema.title_pre': 'Your waste warehouse is not an obligation, it is a ',
    'almacenes.problema.title_highlight': 'hidden source of income',
    'almacenes.problema.body': 'Many companies view waste storage as a sunk cost. At Azul Sostenible, we identify the financial leakage points impacting your daily profitability.',

    // ── Almacenes Soluciones ─────────────────────────────────────
    'almacenes.soluciones.title_1': 'Technical ',
    'almacenes.soluciones.title_highlight': 'Engineering Solutions',
    'almacenes.soluciones.subtitle': 'We apply world-class methodologies to redefine your material management infrastructure.',
    'almacenes.soluciones.img_alt': 'Industrial blueprint with optimized warehouse design',
    'almacenes.soluciones.item1': 'Technical segregation',
    'almacenes.soluciones.item2': 'Spill control',
    'almacenes.soluciones.item3': 'Forced ventilation',
    'almacenes.soluciones.link': 'Learn more',

    // ── Almacenes Valor ──────────────────────────────────────────
    'almacenes.valor.title_1': 'What does your ',
    'almacenes.valor.title_highlight': 'company',
    'almacenes.valor.subtitle': 'We deliver a complete management ecosystem, not just a physical space.',

    // ── Almacenes Cierre ─────────────────────────────────────────
    'almacenes.cierre.quote': 'First we identify where money is lost. Then we transform the operation to recover it.',
    'almacenes.cierre.cta': 'Start warehouse transformation',
    'almacenes.cierre.note': 'No commitment. Initial technical assessment available.',

    // ── Reclasificación ──────────────────────────────────────────
    'reclasificacion.hero.badge': 'Environmental Engineering Solutions',
    'reclasificacion.hero.title': 'Hazardous Waste Reclassification',
    'reclasificacion.hero.subtitle': 'Technical reclassification to reduce costs and ensure environmental compliance. We transform environmental liabilities into sustained operational efficiency.',
    'reclasificacion.hero.cta': 'I want to reclassify my waste',

    // ── Reclasificación Proceso ──────────────────────────────────
    'reclasificacion.proceso.title': 'Reclassification turns your hazardous waste into savings',
    'reclasificacion.proceso.body': 'We analyze your waste, verify its true category, and prepare all the technical support to update its official classification before MINAM.',
    'reclasificacion.proceso.quote': 'Less hazardous = Less costs = More value for your company.',
    'reclasificacion.proceso.cta': 'More Information',
    'reclasificacion.proceso.img_alt': 'Environmental certification and audit process',
    'reclasificacion.proceso.badge_title': 'MINAM Certification',
    'reclasificacion.proceso.badge_subtitle': '100% validated processes',

    // ── Reclasificación Incluye ──────────────────────────────────
    'reclasificacion.incluye.title': 'What Does Our Service Include?',

    // ── Reclasificación Beneficios ───────────────────────────────
    'reclasificacion.beneficios.title': 'What does your company gain with us?',

    // ── Reclasificación Casos de Éxito ───────────────────────────
    'reclasificacion.casos.title': 'Success Stories - Resolutions Obtained',
    'reclasificacion.casos.open_pdf': 'Open PDF',

    // ── Reclasificación Cierre ───────────────────────────────────
    'reclasificacion.cierre.title': 'A PROPERLY CLASSIFIED WASTE TRANSFORMS YOUR COSTS, OPERATION AND REPUTATION',
    'reclasificacion.cierre.subtitle': 'Turn technical information into real environmental and economic power. Let\'s start the technical waste reclassification process today.',
    'reclasificacion.cierre.cta': 'More Information',
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
    'form.quote_title': 'Preencha o formulário',
    'form.quote_subtitle': 'e receba sua cotação gratuita',
    'form.company_org': 'Empresa / Organização',
    'form.name_placeholder': 'Ex: João Silva',
    'form.company_placeholder': 'Ex: Mineradora ABC',
    'form.sector': 'Setor',
    'form.sector_placeholder': 'Selecione seu setor',
    'form.sector_mining': 'Mineração',
    'form.sector_industrial': 'Industrial',
    'form.sector_health': 'Saúde',
    'form.sector_agro': 'Agroindustrial',
    'form.challenge': 'Qual é o seu principal desafio ambiental?',
    'form.challenge_placeholder': 'Selecione uma opção',
    'form.challenge_waste': 'Gestão de resíduos',
    'form.challenge_water': 'Tratamento de águas',
    'form.challenge_consulting': 'Consultoria ambiental',
    'form.challenge_other': 'Outros',
    'form.phone_whatsapp': 'Telefone / WhatsApp',
    'form.phone_placeholder': 'Ex: +55 11 98765-4321',
    'form.quote_submit': 'Quero uma assessoria gratuita',
    'form.response_time': 'Respondemos em menos de 24 horas',

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

    'acreditaciones.hero.badge': 'Acreditações Oficiais',
    'acreditaciones.hero.title': 'Gestão Ambiental Certificada',
    'acreditaciones.hero.body': 'Tudo o que fazemos é respaldado por acreditações oficiais. Garantimos que sua infraestrutura e processos cumpram com os mais altos padrões internacionais de sustentabilidade.',

    // ── Acreditaciones Compliance ─────────────────────────────────
    'acreditaciones.compliance.title': 'Conformidade Garantida com a Legislação Ambiental Vigente',
    'acreditaciones.compliance.subtitle': 'Sua empresa opera sem riscos, multas ou observações.',
    'acreditaciones.open_pdf': 'Abrir PDF',

    'acreditaciones.homologaciones.title': 'Homologações',
    'acreditaciones.homologaciones.badge': 'Certificações Setoriais',

    'acreditaciones.logistica.title': 'Capacidade Logística e Operacional Certificada',

    // ── Acreditaciones Operaciones ────────────────────────────────
    'acreditaciones.operaciones.title': 'OPERAÇÕES AUTORIZADAS PELO ESTADO PERUANO',
    'acreditaciones.operaciones.img_alt': 'Inspeção técnica de sistemas de filtragem industrial',
    'acreditaciones.operaciones.registro_title': 'Registro EO–RS Autorizado pelo MINAM',
    'acreditaciones.operaciones.registro_body': 'Autoriza a gestão de resíduos perigosos e não perigosos. Oferece respaldo legal contra fiscalizações da OEFA e auditorias de sustentabilidade ESG corporativas.',
    'acreditaciones.operaciones.cta_alcance': 'ABRIR ESCOPO',
    'acreditaciones.operaciones.cta_registro': 'ABRIR REGISTRO AUTORITATIVO',

    'acreditaciones.cierre.title': 'Sua gestão ambiental não apenas cumpre a lei:<br />está blindada com autorizações verificáveis',
    'acreditaciones.cierre.title_1': 'Sua gestão ambiental não apenas cumpre a lei:',
    'acreditaciones.cierre.title_2': 'está blindada com autorizações verificáveis',
    'acreditaciones.cierre.cta': 'Solicitar acreditações completas',

    // ── Setores ──────────────────────────────────────────────────
    'sectors.badge': 'COBERTURA SETORIAL',
    'sectors.mining': 'Setor Mineração',
    'sectors.industrial': 'Setor Industrial',
    'sectors.health': 'Setor Saúde',
    'sectors.agro': 'Setor Agroindustrial',

    // ── Sectores Hero ────────────────────────────────────────────
    'sectores.hero.badge': 'Especialistas Multidisciplinares',
    'sectores.hero.title': 'Acompanhamos empresas de diversos setores',
    'sectores.hero.subtitle': 'Soluções de engenharia ambiental projetadas para a realidade técnica e normativa de cada indústria no Peru.',
    'sectores.hero.cta': 'Explorar Indústrias',

    // ── Sectores Bento ───────────────────────────────────────────
    'sectores.bento.title': 'Nossa Especialização por Setor',
    'sectores.bento.link': 'Ver mais',
    'sectores.bento.industrial.title': 'Setor Industrial',
    'sectores.bento.industrial.body': 'Potencializamos a eficiência operacional mediante a gestão técnica de recursos e o cumprimento de padrões internacionais.',
    'sectores.bento.industrial.li1': 'Descarte de químicos',
    'sectores.bento.industrial.li2': 'Auditorias de processos',
    'sectores.bento.industrial.li3': 'Pegada de carbono',
    'sectores.bento.industrial.li4': 'Otimização hídrica',
    'sectores.bento.industrial.case': 'CASO DE SUCESSO: Redução de 25% em despejos.',
    'sectores.bento.salud.title': 'Setor Saúde',
    'sectores.bento.salud.badge': 'Alta Biossegurança',
    'sectores.bento.salud.body': 'Gestão crítica de resíduos biocontaminados e preparação integral para auditorias SUSALUD.',
    'sectores.bento.salud.footer': 'Cumprimento de 100% nas normativas de biossegurança hospitalar.',
    'sectores.bento.minero.title': 'Setor Mineração',
    'sectores.bento.minero.body': 'Fortalecendo a licença social e operando a gestão técnica de resíduos perigosos e metálicos.',
    'sectores.bento.minero.tag1': 'Resíduos Perigosos',
    'sectores.bento.minero.tag2': 'Rejeitos',
    'sectores.bento.agro.title': 'Setor Agroindustrial',
    'sectores.bento.agro.body': 'Otimização de processos agrícolas e cumprimento de certificações internacionais para exportação.',
    'sectores.bento.agro.img_alt': 'Cultivo sustentável com sistema de irrigação otimizado',

    // ── Sectores Cierre ──────────────────────────────────────────
    'sectores.cierre.title': 'Pronto para elevar seus padrões ambientais?',
    'sectores.cierre.body': 'Agende uma consultoria técnica com nossos especialistas e descubra como podemos otimizar sua gestão setorial.',
    'sectores.cierre.cta_primary': 'Solicitar Auditoria',
    'sectores.cierre.cta_secondary': 'Falar com um Especialista',

    // ── Sectores Impacto ─────────────────────────────────────────
    'sectores.impacto.title': 'Impacto mensurável em cada operação',
    'sectores.impacto.body': 'Não apenas gerenciamos resíduos; transformamos a sustentabilidade em uma vantagem competitiva real para sua empresa.',
    'sectores.impacto.feature1_title': 'Conformidade Normativa Total',
    'sectores.impacto.feature1_desc': 'Mitigação absoluta de riscos legais e sanções perante a OEFA, ANA e Governos Regionais.',
    'sectores.impacto.feature2_title': 'Continuidade Operacional',
    'sectores.impacto.feature2_desc': 'Gestão preventiva que evita paradas desnecessárias por incidentes ambientais ou sanitários.',

    // ── Projetos ─────────────────────────────────────────────────
    'projects.badge': 'CASOS DE SUCESSO',
    'projects.sector_label': 'Setor',

    // ── Proyectos Hero ───────────────────────────────────────────
    'proyectos.hero.badge': 'Compromisso Ambiental',
    'proyectos.hero.title': 'Casos de sucesso',
    'proyectos.hero.subtitle': 'Resultados que fazem a diferença na indústria mineradora peruana através da gestão técnica e responsável.',

    'proyectos.stats.aria_label': 'Estatísticas de projetos',

    // ── Contato ──────────────────────────────────────────────────
    'contact.badge': 'VAMOS CONVERSAR',
    'contact.title': 'Estamos aqui para ajudá-lo',
    'contact.address': 'Endereço',
    'contact.phone': 'Telefone',
    'contact.email': 'E-mail',
    'contact.schedule': 'Horário de atendimento',

    'contacto.hero.badge': 'Engineering for the future',
    'contacto.hero.title': 'Estamos prontos para ajudá-lo',
    'contacto.hero.subtitle': 'Nossa experiência técnica em engenharia ambiental garante que suas operações não apenas cumpram com a legislação, mas liderem o caminho rumo à sustentabilidade ativa.',

    'contacto.cierre.title': 'Otimize seu desempenho ambiental hoje',
    'contacto.cierre.subtitle': 'Solicite uma avaliação ambiental gratuita. Nossos engenheiros analisarão seus processos atuais para identificar oportunidades estratégicas de sustentabilidade e cumprimento.',
    'contacto.cierre.btn': 'Solicitar Avaliação Gratuita',

    // ── Contacto Form ────────────────────────────────────────────
    'contacto.form.title': 'Envie-nos uma mensagem',
    'contacto.form.name_placeholder': 'João Silva',
    'contacto.form.company_placeholder': 'Nome da sua organização',
    'contacto.form.sector': 'Setor',
    'contacto.form.sector_mining': 'Mineração',
    'contacto.form.sector_energy': 'Energia',
    'contacto.form.sector_industry': 'Indústria',
    'contacto.form.sector_government': 'Governo',
    'contacto.form.sector_other': 'Outro',
    'contacto.form.email_corp': 'E-mail Corporativo',
    'contacto.form.email_placeholder': 'joao@empresa.com',
    'contacto.form.message_placeholder': 'Como podemos colaborar no seu próximo projeto ambiental?',
    'contacto.form.submit': 'Enviar Consulta',
    'contacto.form.direct_info': 'Informação Direta',
    'contacto.form.whatsapp_label': 'WhatsApp Corporativo',
    'contacto.form.video_title': 'Vídeo da Azul Sostenible',

    // ── Sobre ────────────────────────────────────────────────────
    'about.badge': 'QUEM SOMOS',
    'about.mission': 'Missão',
    'about.vision': 'Visão',
    'about.values': 'Valores',
    'about.faq': 'Perguntas Frequentes',

    // ── Nosotros About ───────────────────────────────────────────
    'nosotros.about.title': 'O que a Azul Sostenible faz e a quem ajuda?',
    'nosotros.about.body': 'Ajudamos organizações do setor industrial, minerador, saúde e agroindustrial a cumprir a normativa ambiental, reduzir riscos legais e otimizar custos mediante uma gestão técnica, rastreável e sustentável dos seus resíduos.',
    'nosotros.about.img_alt': 'Equipe técnica da Azul Sostenible',

    'nosotros.cierre.title': 'EMPRESAS INTELIGENTES GERENCIAM RESÍDUOS, EMPRESAS LÍDERES GERENCIAM IMPACTO',

    'nosotros.compliance.title': 'Como ajudamos as empresas a cumprir a legislação ambiental?',
    'nosotros.compliance.body': 'Acompanhamos as empresas no cumprimento da legislação ambiental, fiscalizações da OEFA e exigências regulatórias, assegurando rastreabilidade, documentação válida e redução de riscos legais.',

    'nosotros.hero.title': 'EMPRESA ESPECIALIZADA NA GESTÃO DE RESÍDUOS SÓLIDOS, PERIGOSOS E INDUSTRIAIS PARA EMPRESAS NO PERU',
    'nosotros.hero.subtitle': 'Evoluímos de uma gestão tradicional para uma gestão inteligente e circular de resíduos, focada em reduzir riscos, evitar sanções e melhorar a eficiência operacional.',
    'nosotros.hero.cta': 'SOLICITE UMA ASSESSORIA',

    'nosotros.mvv.mission_body': 'Buscar a inovação e promover um novo modelo empresarial no setor de resíduos sólidos mediante a Gestão Racional e Manejo Sustentável dos Resíduos Sólidos, líquidos e Saneamento Ambiental a nível nacional.',
    'nosotros.mvv.vision_body': 'Ser uma empresa referência em gestão ambiental, sustentabilidade e economia circular no Peru, impulsionando empresas responsáveis e competitivas.',
    'nosotros.mvv.valores_title': 'Nossos Valores',

    'nosotros.sectores.title': 'Que tipo de empresas atendemos?',

    'nosotros.servicios.title': 'Quais serviços de gestão de resíduos a Azul Sostenible oferece?',
    'nosotros.servicios.description': 'A Azul Sostenible oferece serviços de gestão de resíduos sólidos, perigosos e industriais que incluem caracterização, coleta, transporte autorizado, valorização e disposição final, conforme a legislação ambiental vigente no Peru.',

    // ── Recursos ─────────────────────────────────────────────────
    'resources.badge': 'CENTRO DE RECURSOS',
    'resources.guides': 'Guias Regulatórios',
    'resources.calculators': 'Calculadoras',
    'resources.blog': 'Blog',
    'resources.events': 'Treinamentos',
    'resources.newsletter': 'Assine nossa newsletter',

    'recursos.newsletter.title': 'Você precisa de uma ferramenta personalizada?',
    'recursos.newsletter.subtitle': 'Desenvolvemos calculadoras e painéis de controle de métricas ambientais sob medida para sua empresa.',
    'recursos.newsletter.placeholder': 'Seu e-mail profissional',
    'recursos.newsletter.cta': 'Solicitar Demo',

    'recursos.hero.badge': 'Centro de Conhecimento',
    'recursos.hero.title': 'Informação e Ferramentas Sustentáveis',
    'recursos.hero.body': 'Acesse recursos técnicos, calculadoras de impacto e as últimas regulamentações ambientais para impulsionar a eficiência e sustentabilidade na sua organização.',
    'recursos.hero.img_alt': 'Espaço de trabalho moderno com engenheiros revisando plantas',
    'recursos.hero.card_title': 'Software de Rastreabilidade',
    'recursos.hero.card_body': 'Conheça nossa plataforma',

    'recursos.aliados.title': 'Aliados Estratégicos',
    'recursos.aliados.subtitle': 'Trabalhamos junto a organizações comprometidas com a inovação e a sustentabilidade ambiental.',
    'recursos.aliados.wastefy_title': 'Nosso App - Wastefy',
    'recursos.aliados.wastefy_subtitle': 'Serviço Integral de coleta de Resíduos Sólidos',
    'recursos.aliados.wastefy_body': 'Wastefy é um app que tem como propósito a prestação dos serviços de coleta, transporte, deposição e/ou comercialização de diferentes tipos de resíduos.',
    'recursos.aliados.wastefy_cta': 'Baixar',
    'recursos.aliados.andeslab_body': 'É um centro de pesquisa em engenharia ambiental em Lima, Peru. Especializados em análise de resíduos sólidos e líquidos, comprometidos com a inovação para um desenvolvimento sustentável, contamos com profissionais acreditados pela RENACYT e colaboramos com universidades e organismos nacionais e internacionais.',
    'recursos.aliados.banco_body': 'É o primeiro organismo a impulsionar a inclusão financeira ambiental mediante a conversão de resíduos como recursos em fontes de energia e matérias-primas, através da implementação de centros de industrialização e transformação de resíduos para a valorização energética e de materiais.',

    'recursos.blog.title': 'Blog Azul',
    'recursos.blog.subtitle': 'Artigos técnicos sobre engenharia ambiental, economia circular e tendências de sustentabilidade industrial.',
    'recursos.blog.view_all': 'Ver todos os artigos',

    'recursos.capacitaciones.title': 'Calendário de Capacitações',
    'recursos.capacitaciones.subtitle': 'Participe de nossas sessões de formação técnica ministradas por especialistas com ampla trajetória no setor ambiental.',
    'recursos.capacitaciones.li1': 'Certificação oficial incluída',
    'recursos.capacitaciones.li2': 'Modalidades Presencial e Online',
    'recursos.capacitaciones.view_more': 'Ver mais',

    'recursos.guias.title': 'Guias Regulatórios',
    'recursos.guias.subtitle': 'Repositório completo de leis e regulamentos ambientais vigentes no Peru.',
    'recursos.guias.carbono_title': 'Pegada de Carbono',
    'recursos.guias.carbono_body': 'Meça as emissões de CO2 das suas operações industriais.',
    'recursos.guias.carbono_cta': 'Iniciar Cálculo',
    'recursos.guias.residuos_title': 'Geração de Resíduos',
    'recursos.guias.residuos_body': 'Otimize sua gestão calculando a segregação e pesagem projetada.',
    'recursos.guias.residuos_cta': 'Abrir Ferramenta',

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

    // ── Proyectos Cierre ─────────────────────────────────────────
    'proyectos.cierre.title': 'Quer ser nosso próximo caso de sucesso?',
    'proyectos.cierre.body': 'Otimize seus processos ambientais com o respaldo de uma equipe técnica especializada e soluções projetadas sob medida para sua indústria.',
    'proyectos.cierre.cta': 'Solicitar Auditoria',

    // ── Proyectos Grid ───────────────────────────────────────────
    'proyectos.grid.title': 'Nossa Trajetória Técnica',
    'proyectos.grid.body': 'Desenvolvemos soluções de engenharia e gestão de resíduos para as operações mineradoras mais exigentes do país, garantindo a rastreabilidade e sustentabilidade em cada processo.',
    'proyectos.grid.card_cta': 'Ver detalhe do caso',
    'proyectos.grid.also_trusted_title': 'Também confiaram em nós',
    'proyectos.grid.also_trusted_body': 'Outras unidades mineradoras que implementaram nossos protocolos de gestão ambiental.',
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

    // ── Chungar (caso de sucesso) ────────────────────────────────
    'chungar.hero.badge': 'PROJETO DE SUCESSO',
    'chungar.hero.title': 'UM. CHUNGAR - Casos de Sucesso',
    'chungar.hero.subtitle': 'Otimizando a gestão de resíduos na Unidade Mineira Animón por meio de engenharia ambiental de alta precisão.',
    'chungar.que_hicimos.title': 'O que fizemos?',
    'chungar.que_hicimos.intro': 'Transformamos desafios técnicos em soluções de gestão ambiental eficiente. Apresentamos este caso desenvolvido para a Unidade Mineira Animón da Companhia Mineira Chungar S.A.C., onde otimizamos a classificação de resíduos industriais sob os mais altos padrões de segurança e regulamentação vigente.',
    'chungar.que_hicimos.card1.title': 'Análise Técnica',
    'chungar.que_hicimos.card1.desc': 'Avaliação exaustiva de periculosidade em embalagens de papelão pós-secundárias.',
    'chungar.que_hicimos.card2.title': 'Laboratório',
    'chungar.que_hicimos.card2.desc': 'Inspeções físicas e químicas para descartar riscos de explosividade.',
    'chungar.que_hicimos.trazabilidad': 'Rastreabilidade garantida em todos os processos.',
    'chungar.resolucion.title': 'Resolução do caso',
    'chungar.resolucion.quote': '"Por meio da aplicação de evidências técnicas e do princípio de consistência administrativa, demonstramos que esses resíduos não apresentam características de periculosidade (explosividade, toxicidade ou inflamabilidade)."',
    'chungar.resolucion.body': 'Com base no Decreto Legislativo N° 1278, sustentamos que o papelão pós-consumo pode ser gerenciado como resíduo não perigoso, permitindo uma disposição final mais ágil e coerente com a realidade operacional da mina.',
    'chungar.resolucion.normativa.title': 'Suporte Normativo',
    'chungar.resolucion.normativa.desc': 'Conformidade total com as regulamentações do MINAM e protocolos mineradores internacionais.',
    'chungar.resumen.title': 'Resumo de sucesso',
    'chungar.resumen.subtitle': 'Um marco na eficiência operacional e ambiental para o nosso cliente.',
    'chungar.resumen.card1.title': 'Conformidade',
    'chungar.resumen.card1.desc': 'Asseguramos o cumprimento estrito das regulamentações do MINAM, eliminando riscos legais e multas administrativas.',
    'chungar.resumen.card2.title': 'Otimização',
    'chungar.resumen.card2.desc': 'Redução significativa nos custos logísticos e otimização dos tempos de armazenamento temporário na mina.',
    'chungar.resumen.card3.title': 'Segurança',
    'chungar.resumen.card3.desc': 'Garantimos que 100% dos resíduos gerenciados mantêm a segurança absoluta do entorno e dos colaboradores.',
    'chungar.resumen.trazabilidad': 'Rastreabilidade Total',
    'chungar.resumen.trazabilidad.desc': 'Monitoramento digital desde a origem até a disposição final.',
    'chungar.resumen.cta': 'Solicitar Caso Detalhado',
    'chungar.faq.q1': 'Existe algum risco de que essas caixas contenham resíduos de explosivos?',
    'chungar.faq.a1': 'Não. O explosivo sempre viaja em uma embalagem primária selada que evita qualquer contato ou vazamento para o papelão externo. Nossos testes de laboratório confirmam a ausência de traços químicos.',
    'chungar.faq.q2': 'Como é garantida a segurança durante a disposição final?',
    'chungar.faq.a2': 'Embora classificados como não perigosos, seu transporte e disposição são realizados exclusivamente por uma Empresa Operadora de Resíduos Sólidos (EO-RS) devidamente autorizada pelas autoridades competentes.',
    'chungar.faq.q3': 'Esta nova classificação tem respaldo legal?',
    'chungar.faq.a3': 'Sim, está plenamente respaldada pelo Decreto Legislativo N° 1278 (Lei de Gestão Integral de Resíduos Sólidos). A fundamentação técnica permite uma reclassificação baseada na realidade física do resíduo.',

    // ── Tarifa Plana ─────────────────────────────────────────────
    'tarifa_plana.hero.badge': 'Excelência Operacional 12 Meses',
    'tarifa_plana.hero.title': 'Tarifa fixa ambiental',
    'tarifa_plana.hero.subtitle': 'A maneira mais simples e segura de gerenciar o meio ambiente na sua empresa: tudo incluído em uma tarifa fixa anual para garantir conformidade e sustentabilidade.',
    'tarifa_plana.hero.cta_primary': 'Comece Agora',
    'tarifa_plana.hero.cta_secondary': 'Ver Detalhes Técnicos',
    'tarifa_plana.definicion.title': 'O que é a Tarifa Fixa Ambiental?',
    'tarifa_plana.definicion.body_pre': 'É um modelo de gestão ambiental integral projetado para empresas que buscam previsibilidade e excelência. Durante 12 meses, nos tornamos seu departamento ambiental externo sob um único pagamento anual.',
    'tarifa_plana.definicion.body_highlight': '',
    'tarifa_plana.definicion.body_post': '',
    'tarifa_plana.definicion.advantages_label': 'Vantagens do modelo',
    'tarifa_plana.definicion.model_title': 'Modelo 360°',
    'tarifa_plana.definicion.model_body': 'Elimine a incerteza dos custos variáveis. Com nossa Tarifa Fixa, você projeta seu investimento ambiental com precisão cirúrgica, garantindo que cada resíduo e cada trâmite esteja coberto.',
    'tarifa_plana.definicion.stat1_label': 'Custos Ocultos',
    'tarifa_plana.definicion.stat2_label': 'Conformidade',
    'tarifa_plana.incluye.title': 'O QUE INCLUI?',
    'tarifa_plana.incluye.subtitle': 'Três pilares fundamentais que sustentam a operacionalidade e legalidade da sua organização.',
    'tarifa_plana.beneficios.title': 'O QUE SUA EMPRESA GANHA?',
    'tarifa_plana.ingenieria.title': 'ENGENHARIA APLICADA À SUSTENTABILIDADE',
    'tarifa_plana.ingenieria.subtitle': 'Implementamos camadas tecnológicas de controle para garantir que a Tarifa Fixa não seja apenas um serviço, mas um ativo estratégico.',
    'tarifa_plana.ingenieria.card_title': 'CONTROLE PREDITIVO',
    'tarifa_plana.ingenieria.card_subtitle': 'Status de Conformidade: 98.4%',
    'tarifa_plana.ingenieria.label1': 'OPERACIONALIDADE',
    'tarifa_plana.ingenieria.label2': 'ÓTIMA',
    'tarifa_plana.ingenieria.quote': 'A Tarifa Fixa nos permite antecipar problemas antes que se tornem passivos.',
    'tarifa_plana.alcance.title': 'GESTÃO INTEGRAL',
    'tarifa_plana.alcance.subtitle': 'Um escopo projetado para cobrir todas as arestas técnicas da sua operação industrial ou comercial.',
    'tarifa_plana.alcance.list_label': 'LISTA COMPLETA DE SERVIÇOS',
    'tarifa_plana.cierre.title': 'Comece seu ano protegido',
    'tarifa_plana.cierre.subtitle': 'Um investimento recuperável que garante segurança ambiental durante os 12 meses do ano. Junte-se às empresas que já operam sem preocupações.',
    'tarifa_plana.cierre.cta': 'Quero a Tarifa Fixa',

    'software_trazabilidad.hero.badge': 'Inovação Digital',
    'software_trazabilidad.hero.title': 'Software de rastreabilidade',
    'software_trazabilidad.hero.subtitle': 'A rastreabilidade digital transforma sua gestão de resíduos em informação confiável e auditável.',
    'software_trazabilidad.hero.cta': 'Acesso ao sistema',

    'software_trazabilidad.value.heading': 'Mais controle = menos riscos e sanções = mais valor e reputação para sua empresa.',

    'software_trazabilidad.cierre.title': 'Converta seus dados ambientais em controle, decisões inteligentes e vantagem competitiva.',
    'software_trazabilidad.cierre.cta_primary': 'Mais Informações',
    'software_trazabilidad.cierre.cta_secondary': 'Solicitar Demo',

    'software_trazabilidad.consiste.label': 'Metodologia Azul',
    'software_trazabilidad.consiste.title': 'EM QUE CONSISTE?',
    'software_trazabilidad.consiste.body': 'Nosso software registra detalhadamente cada movimento dos resíduos sólidos desde sua origem até seu destino final, garantindo uma cadeia de custódia inquebrável.',
    'software_trazabilidad.consiste.quote': '"Automatizamos o que você faz hoje no papel ou no Excel, centralizando datas, fotos e relatórios auditáveis para clientes e autoridades."',
    'software_trazabilidad.consiste.img_alt': 'Dashboard digital de rastreabilidade ambiental com gráficos e certificações',

    'software_trazabilidad.gana.title': 'O QUE SUA EMPRESA GANHA?',
    'software_trazabilidad.gana.subtitle': 'Otimizamos sua operação ambiental através de tecnologia de ponta e processos simplificados.',

    'carahuacra.faq.q1': 'É seguro reciclar essas embalagens secundárias?',
    'carahuacra.faq.a1': 'Sim, é totalmente seguro. Nosso estudo técnico confirmou que o uso de polietileno como embalagem primária atua como uma barreira absoluta contra a migração química. Após a validação de campo, esses materiais são classificados como não perigosos, permitindo sua reintegração a cadeias de valor circulares sem riscos.',
    'carahuacra.faq.q2': 'Qual base legal respalda este procedimento?',
    'carahuacra.faq.a2': 'O procedimento se baseia estritamente nos artigos 71, 72, 73 e 74 do Regulamento da Lei de Gestão Integral de Resíduos Sólidos (D.L. N° 1278). Esses artigos facultam a reclassificação técnica de resíduos mediante estudos técnicos que demonstrem a ausência de características de periculosidade.',

    'carahuacra.hero.badge': 'CASE STUDY',
    'carahuacra.hero.title': 'U.M. CARAHUACRA: Engenharia para a Excelência Ambiental',
    'carahuacra.hero.description': 'Estudo técnico e avaliação de campo para a reclassificação de embalagens secundárias, otimizando a cadeia de valor circular na mineração moderna.',
    'carahuacra.hero.location': 'Yauli, Peru',
    'carahuacra.hero.status': 'Certificação Alcançada',

    'carahuacra.interes.title': 'Pode lhe Interessar',
    'carahuacra.interes.item1_title': 'Análise Química',
    'carahuacra.interes.item1_desc': 'Protocolos de laboratório avançados para a caracterização de efluentes e sólidos.',
    'carahuacra.interes.item2_title': 'Cumprimento Regulatório',
    'carahuacra.interes.item2_desc': 'Assessoria estratégica em normativa ambiental nacional e internacional.',
    'carahuacra.interes.item3_title': 'Economia Circular',
    'carahuacra.interes.item3_desc': 'Projeto de sistemas de fluxo fechado para otimizar recursos industriais.',

    'carahuacra.que_hicimos.title': 'O que fizemos?',
    'carahuacra.que_hicimos.intro': 'Executamos uma avaliação de campo rigorosa e multidimensional para determinar a integridade química das embalagens secundárias na Unidade Mineradora Carahuacra.',
    'carahuacra.que_hicimos.item1': 'Verificação de barreiras físicas: Confirmação de que a embalagem primária de polietileno previne qualquer tipo de contaminação química na embalagem secundária.',
    'carahuacra.que_hicimos.item2': 'Amostragem técnica: Análise de resíduos remanescentes e traços químicos sob protocolos de alta precisão.',
    'carahuacra.que_hicimos.item3': 'Auditoria de fluxo: Mapeamento do ciclo de vida do resíduo desde sua geração até sua disposição temporária.',
    'carahuacra.que_hicimos.card_title': 'Avaliação Rigorosa',
    'carahuacra.que_hicimos.card_desc': 'Dados precisos que respaldam decisões estratégicas de sustentabilidade.',
    'carahuacra.que_hicimos.img_alt': 'Engenheira examinando dados técnicos em sala de controle industrial',

    'carahuacra.resolucion.title': 'Resolução do Caso',
    'carahuacra.resolucion.description': 'Baseando-nos nos artigos 71 a 74 do Regulamento da Lei de Gestão Integral de Resíduos Sólidos, conseguimos demonstrar a inocuidade das embalagens secundárias.',
    'carahuacra.resolucion.status_title': 'Estado Final: Reclassificado',
    'carahuacra.resolucion.status_desc': 'Oficialmente categorizado como resíduo \'não perigoso\'.',

    'carahuacra.resumen.title': 'Resumo de Sucesso',
    'carahuacra.resumen.subtitle': 'Impacto mensurável na eficiência operacional e no compromisso ambiental.',
    'carahuacra.resumen.stat1_label': 'Conformidade Normativa',
    'carahuacra.resumen.stat1_desc': 'Alinhamento total com as regulamentações de gestão de resíduos peruanas.',
    'carahuacra.resumen.stat2_label': 'Custos Logísticos',
    'carahuacra.resumen.stat2_desc': 'Redução significativa no transporte e disposição de resíduos perigosos.',
    'carahuacra.resumen.stat3_value': 'Circular',
    'carahuacra.resumen.stat3_label': 'Economia Verde',
    'carahuacra.resumen.stat3_desc': 'As embalagens agora entram em cadeias de reciclagem industrial direta.',

    'cristobal.faq.title': 'Perguntas que podem surgir',
    'cristobal.faq.subtitle': 'Esclarecemos as dúvidas técnicas mais comuns sobre o processo de caracterização e segurança operacional.',
    'cristobal.faq.q1': 'É totalmente seguro manusear essas caixas após sua reclassificação?',
    'cristobal.faq.a1': 'Absolutamente. A avaliação técnica confirmou a hermeticidade e ausência de traços perigosos. O suporte técnico garante que não existe risco por contato ou manuseio padrão dentro dos protocolos de segurança industrial vigentes.',
    'cristobal.faq.q2': 'Como esta medida impacta a operação da empresa?',
    'cristobal.faq.a2': 'O impacto é duplo: operacional e financeiro. Operacionalmente, simplifica o fluxo de resíduos nos armazéns. Financeiramente, reduz drasticamente os custos associados ao transporte e disposição final em aterros de segurança de resíduos perigosos.',
    'cristobal.faq.q3': 'Esta resolução cumpre com os padrões legais atuais?',
    'cristobal.faq.a3': 'Sim, segue estritamente a Lei de Gestão Integral de Resíduos Sólidos (D.L. N° 1278) e seu regulamento. Toda a documentação gerada serve como suporte técnico legal perante fiscalizações de órgãos reguladores.',

    'cristobal.hero.subtitle': 'Avaliação técnica integral para a caracterização e gestão sustentável de embalagens secundárias em operações mineradoras de alta complexidade.',
    'cristobal.hero.tag_compliance': 'Cumprimento DL 1278',
    'cristobal.hero.tag_reclassification': 'Reclassificação Técnica',

    'cristobal.impacto.title': 'Impacto da Operação',
    'cristobal.impacto.card1_badge': 'Otimização Logística',
    'cristobal.impacto.card1_title': 'Eficiência no Armazenamento',
    'cristobal.impacto.card1_desc': 'A reclassificação permitiu uma reorganização estratégica dos espaços de armazenamento, eliminando gargalos na disposição temporária de embalagens secundárias da Unidade Mineradora San Cristóbal.',
    'cristobal.impacto.card1_stat': 'Custos Operacionais',
    'cristobal.impacto.card2_title': 'Conformidade Normativa',
    'cristobal.impacto.card2_desc': 'Garantia total sob o marco do D.L. N° 1278 (Lei de Gestão Integral de Resíduos Sólidos), assegurando operações livres de contingências legais.',
    'cristobal.impacto.card3_title': 'Gestão de Recursos',
    'cristobal.impacto.card3_desc': 'Transição efetiva do conceito de \'Resíduo\' para \'Recurso Valorizável\'.',

    'cristobal.interes.title': 'Pode lhe interessar',
    'cristobal.interes.card1_img_alt': 'Laboratório com equipamento científico avançado',
    'cristobal.interes.card1_title': 'Análise Técnica',
    'cristobal.interes.card1_desc': 'Laboratórios certificados para caracterização complexa.',
    'cristobal.interes.card2_img_alt': 'Espaço de trabalho com documentos de compliance ambiental',
    'cristobal.interes.card2_title': 'Compliance Ambiental',
    'cristobal.interes.card2_desc': 'Assessoria especializada em marcos normativos nacionais.',
    'cristobal.interes.card3_img_alt': 'Representação de economia circular com arquitetura sustentável',
    'cristobal.interes.card3_title': 'Economia Circular',
    'cristobal.interes.card3_desc': 'Modelos de negócio regenerativos para a indústria.',

    'cristobal.que_hicimos.title': 'O que fizemos?',
    'cristobal.que_hicimos.description': 'Realizamos uma avaliação técnica integral para determinar a periculosidade das embalagens de papelão utilizadas como embalagem secundária no transporte de explosivos.',
    'cristobal.que_hicimos.item1': 'Inspeções visuais detalhadas sob padrões industriais.',
    'cristobal.que_hicimos.item2': 'Análise exaustiva de rastreabilidade de uso e contato.',
    'cristobal.que_hicimos.item3': 'Protocolos rigorosos de verificação de integridade estrutural.',
    'cristobal.que_hicimos.img_alt': 'Engenheiro realizando inspeção técnica com ferramentas de precisão',
    'cristobal.que_hicimos.stat_label': 'Rastreabilidade Técnica Garantida',

    'cristobal.resolucion.title': 'Resolução Técnica',
    'cristobal.resolucion.subtitle': 'Suporte normativo baseado no Decreto Supremo N° 014-2017-MINAM para a reclassificação oficial.',
    'cristobal.resolucion.card1_title': 'Não Reativo',
    'cristobal.resolucion.card1_desc': 'Sem interação química adversa com o entorno.',
    'cristobal.resolucion.card2_title': 'Não Inflamável',
    'cristobal.resolucion.card2_desc': 'Avaliação de risco térmico superada satisfatoriamente.',
    'cristobal.resolucion.card3_title': 'Não Tóxico',
    'cristobal.resolucion.card3_desc': 'Segurança garantida para o manuseio humano.',
    'cristobal.resolucion.card4_title': 'Não Explosivo',
    'cristobal.resolucion.card4_desc': 'Embalagem secundária livre de traços de risco dinâmico.',
    'cristobal.resolucion.cta_title': 'Reclassificação Oficial',
    'cristobal.resolucion.cta_desc': 'Determinação técnica de resíduos sólidos não perigosos, transformando a gestão de resíduos em gestão estratégica de recursos.',
    'cristobal.resolucion.cta_btn': 'Baixar Suporte Técnico',

    // ── Iscaycruz Bento ─────────────────────────────────────────
    'iscaycruz.bento.what_title': 'O que fizemos?',
    'iscaycruz.bento.what_desc': 'Desenvolvemos um estudo técnico de alta precisão para avaliar a periculosidade das embalagens de papelão utilizadas em operações mineradoras.',
    'iscaycruz.bento.step1_label': 'Passo 01',
    'iscaycruz.bento.step1_title': 'Análise de Fichas de Segurança',
    'iscaycruz.bento.step1_desc': 'Revisão aprofundada de componentes químicos e MSDS.',
    'iscaycruz.bento.step2_label': 'Passo 02',
    'iscaycruz.bento.step2_title': 'Coleta de Amostras',
    'iscaycruz.bento.step2_desc': 'Protocolo de amostragem in situ sob normas internacionais.',
    'iscaycruz.bento.step3_label': 'Passo 03',
    'iscaycruz.bento.step3_title': 'Análise Normativa',
    'iscaycruz.bento.step3_desc': 'Comparativa técnica com a Lei de Gestão de Resíduos.',
    'iscaycruz.bento.resolution_title': 'Resolução do Caso',
    'iscaycruz.bento.resolution_item1': 'Ausência total de explosividade nas embalagens secundárias.',
    'iscaycruz.bento.resolution_item2': 'Composição celulósica com combustão controlada sem detonação.',
    'iscaycruz.bento.resolution_item3': 'Classificação final: Resíduo NÃO perigoso.',
    'iscaycruz.bento.summary_title': 'Resumo de Sucesso',
    'iscaycruz.bento.stat1_label': 'Suporte Técnico',
    'iscaycruz.bento.stat2_value': 'Otimizada',
    'iscaycruz.bento.stat2_label': 'Gestão de Resíduos',
    'iscaycruz.bento.summary_desc': 'A incerteza regulatória foi drasticamente reduzida para UM. ISCAYCRUZ, permitindo uma gestão eficiente e sustentável de materiais anteriormente considerados de alto risco.',
    'iscaycruz.bento.image_alt': 'Painel de controle preditivo industrial',

    'iscaycruz.hero.badge': 'Casos de Sucesso',
    'iscaycruz.hero.title': 'UM. ISCAYCRUZ: Engenharia para a Sustentabilidade Mineradora',
    'iscaycruz.hero.subtitle': 'Avaliação técnica especializada para a reclassificação de resíduos e otimização de processos industriais.',

    'iscaycruz.cta.title': 'Otimize sua gestão ambiental hoje',
    'iscaycruz.cta.subtitle': 'Fornecemos o suporte técnico necessário para que sua empresa seja referência em sustentabilidade industrial.',
    'iscaycruz.cta.btn': 'Iniciar consulta técnica',

    'iscaycruz.faq.title': 'Perguntas Frequentes do Caso',
    'iscaycruz.faq.q1': 'Por que o estudo era necessário?',
    'iscaycruz.faq.a1': 'Para confirmar se as embalagens de papelão que não tinham contato direto com material explosivo podiam ser gerenciadas de forma mais eficiente e menos custosa, cumprindo estritamente o marco legal peruano.',
    'iscaycruz.faq.q2': 'Representam algum risco de segurança?',
    'iscaycruz.faq.a2': 'Nossos testes demonstraram que as embalagens só apresentam risco de combustão sob condições térmicas específicas e extremas, similar a qualquer material de celulose padrão, mas sem risco de detonação ou projeção.',
    'iscaycruz.faq.q3': 'Como devem ser gerenciadas atualmente?',
    'iscaycruz.faq.a3': 'Ao serem reclassificadas como resíduos não perigosos, podem ser gerenciadas através de EO-RS autorizadas para reciclagem ou reaproveitamento, reduzindo custos operacionais e melhorando o perfil de sustentabilidade da operação.',

    'iscaycruz.interes.title': 'Pode lhe Interessar',
    'iscaycruz.interes.card1_title': 'Análise Química Avançada',
    'iscaycruz.interes.card1_desc': 'Testes especializados de lixiviação e caracterização de materiais industriais.',
    'iscaycruz.interes.card2_title': 'Cumprimento Regulatório',
    'iscaycruz.interes.card2_desc': 'Assessoria integral em normativas ambientais para o setor minerador e industrial.',
    'iscaycruz.interes.card3_title': 'Economia Circular',
    'iscaycruz.interes.card3_desc': 'Estratégias para a redução e valorização de resíduos sólidos.',

    'morococha.cta.title': 'Você precisa de uma avaliação técnica para sua empresa?',
    'morococha.cta.btn': 'Contatar Especialista',

    'morococha.hero.badge': 'Projeto de Avaliação Técnica',
    'morococha.hero.title': 'UM. MOROCOCHA - Casos de sucesso',
    'morococha.hero.subtitle': 'Engenharia e sustentabilidade aplicadas à gestão avançada de resíduos na indústria mineradora. Uma abordagem técnica para a desclassificação de periculosidade.',

    'morococha.que_hicimos.title': 'O que fizemos?',
    'morococha.que_hicimos.body': 'Realizamos um estudo integral para a Companhia Mineira Argentum S.A.C., focado na avaliação técnica e normativa das embalagens de papelão utilizadas para explosivos em suas operações mineradoras.',
    'morococha.que_hicimos.step1_title': 'Revisão de Fichas de Segurança',
    'morococha.que_hicimos.step1_desc': 'Análise exaustiva da composição química e reatividade declarada nas MSDS originais.',
    'morococha.que_hicimos.step2_title': 'Amostragem em Campo',
    'morococha.que_hicimos.step2_desc': 'Coleta de amostras representativas nas áreas de armazenamento temporário para garantir a integridade dos dados.',
    'morococha.que_hicimos.step3_title': 'Inspeção Visual',
    'morococha.que_hicimos.step3_desc': 'Verificação direta de traços de material explosivo e condições físicas de degradação.',
    'morococha.que_hicimos.img_alt': 'Técnico de laboratório realizando inspeção de materiais de papelão industrial',

    // ── Morococha Resolución ─────────────────────────────────────
    'morococha.resolucion.title': 'Resolução do caso',
    'morococha.resolucion.subtitle': 'Baseando-nos em evidência científica e cumprimento normativo estrito.',
    'morococha.resolucion.lab_label': 'Análise de Laboratório',
    'morococha.resolucion.lab_title': 'Certificação Andeslab S.A.C.',
    'morococha.resolucion.lab_body': 'Após uma rigorosa análise de inflamabilidade e reatividade realizada pela Andeslab S.A.C., confirmou-se cientificamente que o material residual não apresenta propriedades explosivas. A evidência técnica demonstrou que o papelão apenas apresenta combustão, mas não detonação, sob estímulos térmicos ou mecânicos.',
    'morococha.resolucion.badge1': 'Teste de Detonação: Negativo',
    'morococha.resolucion.badge2': 'Inflamabilidade: Sob Controle',
    'morococha.resolucion.legal_title': 'Marco Normativo',
    'morococha.resolucion.legal_body': 'Os resíduos foram classificados como Não Perigosos, permitindo sua gestão final através de uma EO-RS devidamente autorizada pelo MINAM.',
    'morococha.resolucion.compliance': 'Conformidade: 100% MINAM',
    'morococha.resolucion.summary_title': 'Resumo de sucesso',
    'morococha.resolucion.summary_body': 'Este projeto proporcionou o suporte técnico definitivo para uma gestão ordenada, segura e ambientalmente responsável dos resíduos. Conseguimos transformar uma incerteza operacional em um processo padronizado que reduz custos e riscos ambientais para a Companhia Mineira Argentum S.A.C.',
    'morococha.resolucion.success_label': 'Sucesso Comprovado',

    'morococha.faq.q1': 'Esses papelões continuam sendo perigosos após o uso?',
    'morococha.faq.a1': 'Não, o estudo técnico demonstrou que não apresentam explosividade nem características de periculosidade remanescente, permitindo uma gestão mais eficiente.',
    'morococha.faq.q2': 'O que tornou possível esta conclusão?',
    'morococha.faq.a2': 'A combinação de uma revisão exaustiva de antecedentes, uma amostragem rigorosa em campo e ensaios analíticos em um laboratório acreditado.',
    'morococha.faq.q3': 'Como devem ser manejados ao final?',
    'morococha.faq.a3': 'Devem ser gerenciados por uma Empresa Operadora de Resíduos Sólidos (EO-RS) autorizada pelo MINAM, seguindo os protocolos de resíduos não perigosos.',

    'yauliyacu.faq.q1': 'Por que esses recipientes foram avaliados?',
    'yauliyacu.faq.a1': 'Era imperativo confirmar o status de periculosidade real após seu uso inicial com cianeto para determinar se o processo de lavagem interna era suficiente para uma disposição segura.',
    'yauliyacu.faq.q2': 'O que a análise de laboratório mostrou?',
    'yauliyacu.faq.a2': 'A análise mostrou concentrações de cianeto abaixo dos limites quantificáveis, o que valida a efetividade do processo de limpeza para converter resíduos perigosos em materiais inertes.',
    'yauliyacu.faq.q3': 'Como esses recipientes devem ser manejados ao final?',
    'yauliyacu.faq.a3': 'Devem ser gerenciados através de Empresas Operadoras de Resíduos Sólidos (EO-RS) autorizadas, permitindo seu reaproveitamento como sucata metálica de alta pureza.',

    'yauliyacu.hero.title': 'U.M. YAULIYACU - Casos de sucesso',
    'yauliyacu.hero.subtitle': 'Estudo de toxicidade e gestão de recipientes de cianeto: Um marco em engenharia ambiental e sustentabilidade mineradora.',

    'yauliyacu.interes.title': 'Pode lhe interessar',
    'yauliyacu.interes.card1_title': 'Gestão Integral de Resíduos',
    'yauliyacu.interes.card1_desc': 'Soluções estratégicas para o manejo de resíduos industriais e mineradores de alta complexidade.',
    'yauliyacu.interes.card2_title': 'Ensaios Acreditados',
    'yauliyacu.interes.card2_desc': 'Testes fisicoquímicos e toxicológicos com certificação INACAL para cumprimento legal.',
    'yauliyacu.interes.card3_title': 'Consultoria Estratégica',
    'yauliyacu.interes.card3_desc': 'Assessoria especializada em regulamentações ambientais do MINAM e planos de sustentabilidade corporativa.',

    'yauliyacu.que_hicimos.phase_label': 'Fase de Intervenção',
    'yauliyacu.que_hicimos.title': 'O que fizemos?',
    'yauliyacu.que_hicimos.step1_title': 'Avaliação de Recipientes',
    'yauliyacu.que_hicimos.step1_desc': 'Análise exaustiva de recipientes de cianeto de sódio pós-consumo, determinando seu estado físico e químico inicial.',
    'yauliyacu.que_hicimos.step2_title': 'Processo de Limpeza',
    'yauliyacu.que_hicimos.step2_desc': 'Implementação e validação técnica do protocolo de tripla lavagem controlada para a remoção de traços perigosos.',
    'yauliyacu.que_hicimos.step3_title': 'Análise Acreditada',
    'yauliyacu.que_hicimos.step3_desc': 'Testes rigorosos em laboratórios acreditados pelo INACAL para garantir a precisão dos resultados químicos.',
    'yauliyacu.que_hicimos.ref_label': 'REFERÊNCIA TÉCNICA',
    'yauliyacu.que_hicimos.quote': '"A precisão analítica foi o pilar para a reclassificação de resíduos neste projeto minerador."',
    'yauliyacu.que_hicimos.img_alt': 'Análise técnica em laboratório',

    'yauliyacu.resolucion.title': 'Resolução do caso',
    'yauliyacu.resolucion.body1': 'Os resultados analíticos demonstraram que, após o protocolo de lavagem otimizado, os recipientes metálicos não apresentavam concentrações quantificáveis de cianeto.',
    'yauliyacu.resolucion.classification': 'Classificação final: Resíduos não perigosos.',
    'yauliyacu.resolucion.body2': 'Esta validação técnica permitiu uma gestão eficiente sob as diretrizes do MINAM e o manejo final através de empresas operadoras EO-RS devidamente autorizadas, garantindo o cumprimento normativo total.',
    'yauliyacu.resolucion.efficiency_title': 'Gestão Eficiente',
    'yauliyacu.resolucion.efficiency_desc': 'Cumprimento estrito de padrões internacionais de toxicidade e economia circular.',

    'yauliyacu.resumen.title': 'Resumo de sucesso',
    'yauliyacu.resumen.card1_title': 'Principal Conquista: Teste Técnico',
    'yauliyacu.resumen.card1_desc': 'Confirmação incontestável da não-toxicidade após a lavagem controlada, eliminando o risco ambiental e a carga de periculosidade do material metálico.',
    'yauliyacu.resumen.metric1_label': 'Livre de resíduos',
    'yauliyacu.resumen.card2_title': 'Eficiência Operacional',
    'yauliyacu.resumen.card2_desc': 'Melhoria substancial na logística de resíduos e redução de custos operacionais associados à disposição final.',
    'yauliyacu.resumen.card3_title': 'Base para Valorização',
    'yauliyacu.resumen.card3_desc': 'O estudo técnico serviu como fundamento legal e científico para a futura valorização dos metais, fomentando a economia circular na unidade mineradora Yauliyacu.',
    'yauliyacu.resumen.stat1_label': 'Redução de Risco',
    'yauliyacu.resumen.stat2_label': 'Impacto',

    // ── Andaychagua FAQ ──────────────────────────────────────────
    'andaychagua.faq.q1': 'Por que a caixa de papelão não é considerada perigosa?',
    'andaychagua.faq.a1': 'Devido ao fato de funcionar estritamente como uma embalagem externa (secundária), não existe contato físico direto entre o material explosivo e a estrutura do papelão, mantendo sua integridade química.',
    'andaychagua.faq.q2': 'Qual teste confirmou que não havia risco?',
    'andaychagua.faq.a2': 'Foi realizado um ensaio de laboratório acreditado sob padrões internacionais que analisou a presença de resíduos químicos e características de periculosidade, obtendo resultados negativos em todos os indicadores.',
    'andaychagua.faq.q3': 'O que é feito com essas caixas ao final?',
    'andaychagua.faq.a3': 'Ao serem reclassificadas, são gerenciadas como resíduo comum, o que permite sua disposição final em aterros sanitários comuns ou sua inserção em cadeias de reciclagem de papel e papelão.',

    // ── Andaychagua Hero ─────────────────────────────────────────
    'andaychagua.hero.badge': 'Caso de Sucesso: Mineração Sustentável',
    'andaychagua.hero.title': 'UM. ANDAYCHAGUA',
    'andaychagua.hero.description': 'Engenharia ambiental aplicada para a otimização de resíduos industriais em operações mineradoras de alta complexidade.',
    'andaychagua.hero.img_alt': 'Vista panorâmica da operação mineradora Andaychagua na paisagem alto-andina',

    // ── Andaychagua Interés ──────────────────────────────────────
    'andaychagua.interes.title': 'Pode lhe Interessar',
    'andaychagua.interes.card1_img_alt': 'Planta moderna de reciclagem e classificação de resíduos',
    'andaychagua.interes.card1_title': 'Gestão Integral de Resíduos',
    'andaychagua.interes.card1_desc': 'Serviços especializados para a indústria mineradora e energética.',
    'andaychagua.interes.card2_img_alt': 'Laboratório ambiental de alta tecnologia com equipamentos modernos',
    'andaychagua.interes.card2_title': 'Ensaios Acreditados',
    'andaychagua.interes.card2_desc': 'Testes químicos e físicos sob a normativa vigente.',
    'andaychagua.interes.card3_img_alt': 'Ambiente profissional com relatórios de sustentabilidade',
    'andaychagua.interes.card3_title': 'Consultoria Estratégica',
    'andaychagua.interes.card3_desc': 'Otimização de processos ambientais e cumprimento legal.',

    // ── Andaychagua Qué Hicimos ──────────────────────────────────
    'andaychagua.que_hicimos.title': 'O que fizemos?',
    'andaychagua.que_hicimos.body': 'Foi desenvolvida uma opinião técnica especializada para definir a periculosidade das embalagens de papelão utilizadas como embalagem secundária para explosivos na Unidade Operacional Andaychagua. O objetivo principal foi determinar cientificamente se esses materiais deveriam ser classificados como resíduos perigosos ou não perigosos, desafiando as classificações convencionais mediante evidência técnica.',
    'andaychagua.que_hicimos.unit_label': 'Unidade Operacional',
    'andaychagua.que_hicimos.unit_name': 'Andaychagua, Complexo Metalúrgico',

    // ── Andaychagua Resolución ───────────────────────────────────
    'andaychagua.resolucion.title': 'Resolução do caso',
    'andaychagua.resolucion.body': 'A resolução se fundamentou em um processo rigoroso de três etapas: revisão exaustiva de documentos técnicos, inspeção visual e física no local, e um ensaio em laboratório acreditado.',
    'andaychagua.resolucion.quote': '"O relatório técnico conclui categoricamente que as caixas analisadas não apresentam características de explosividade, toxicidade, corrosividade ou reatividade química."',
    'andaychagua.resolucion.step_docs': 'Revisão Documental',
    'andaychagua.resolucion.step_visual': 'Inspeção Visual',
    'andaychagua.resolucion.step_lab': 'Testes de Laboratório',
    'andaychagua.resolucion.step_physical': 'Análise Física',

    // ── Andaychagua Resumen ──────────────────────────────────────
    'andaychagua.resumen.title': 'Resumo de sucesso',
    'andaychagua.resumen.body': 'Conseguimos demonstrar com evidência técnica irrefutável que os contêineres de papelão podem ser ',
    'andaychagua.resumen.body_highlight': 'reclassificados como resíduos não perigosos.',
    'andaychagua.resumen.benefit_1': 'Gestão mais eficiente e segura ao separar materiais sem contato direto com explosivos.',
    'andaychagua.resumen.benefit_2': 'Redução significativa de custos operacionais no manuseio de resíduos especiais.',

    // ── Americana FAQ ────────────────────────────────────────────
    'americana.faq.title': 'Perguntas que podem surgir',
    'americana.faq.q1': 'Por que essas caixas não são consideradas perigosas?',
    'americana.faq.a1': 'Porque foram usadas apenas como embalagem externa e não tiveram contato direto com o explosivo. A análise técnica validou que não conservam propriedades intrínsecas do material que continham originalmente.',
    'americana.faq.q2': 'Qual teste foi fundamental para a conclusão?',
    'americana.faq.a2': 'O ensaio de laboratório acreditado foi fundamental, pois confirmou mediante testes de reatividade e toxicidade que o resíduo não era explosivo nem representava um risco químico imediato.',
    'americana.faq.q3': 'O que é feito com essas caixas ao final?',
    'americana.faq.a3': 'São dispostas e gerenciadas por uma Empresa Operadora de Resíduos Sólidos (EO-RS) devidamente autorizada pelo MINAM, assegurando um ciclo de vida final responsável e legal.',

    'americana.hero.title': 'UM. AMERICANA',
    'americana.hero.subtitle': 'Determinação técnica para a reclassificação de embalagens e gestão de barris de cianeto.',

    // ── Americana Qué Hicimos ────────────────────────────────────
    'americana.que_hicimos.title': 'O que fizemos?',
    'americana.que_hicimos.body': 'Apresentamos um estudo de caracterização sobre o resíduo denominado "embalagens de papelão usadas como embalagem de explosivos" gerado pela empresa ALPAYANA S.A. durante o despacho de explosivos e acessórios de detonação no interior da mina. O objetivo foi determinar se essas caixas deveriam ser classificadas como resíduos perigosos ou não perigosos. Além disso, foi realizada a gestão e reclassificação dos barris de cianeto.',
    'americana.que_hicimos.card1_title': 'Caracterização',
    'americana.que_hicimos.card1_desc': 'Análise técnica de composição residual.',
    'americana.que_hicimos.card2_title': 'Gestão',
    'americana.que_hicimos.card2_desc': 'Logística de barris de cianeto.',
    'americana.que_hicimos.img_alt': 'Engenheiro ambiental examinando materiais de embalagem em laboratório',

    // ── Americana Resolución ─────────────────────────────────────
    'americana.resolucion.title': 'Resolução do caso',
    'americana.resolucion.quote': '"A resolução técnica concluiu que as embalagens de papelão e os barris não apresentam características de periculosidade. O MINAM determinou que este resíduo pode ser gerenciado como resíduo não perigoso."',
    'americana.resolucion.warning_label': 'Nota importante:',
    'americana.resolucion.warning_body': 'Se o papelão vier a se contaminar com o produto explosivo, deverá ser manejado como resíduo perigoso.',
    'americana.resolucion.seal_title': 'Selo de Conformidade',
    'americana.resolucion.seal_subtitle': 'MINAM - Resolução Técnica',

    // ── Americana Resumen ────────────────────────────────────────
    'americana.resumen.title': 'Resumo de sucesso',
    'americana.resumen.subtitle': 'Conseguimos uma opinião técnica favorável que respalda a reclassificação, otimizando a cadeia de resíduos.',
    'americana.resumen.card1_title': 'Critério Ambiental',
    'americana.resumen.card1_desc': 'Manejo adequado, seguro e eficiente sob as normativas vigentes.',
    'americana.resumen.card2_title': 'Metodologia Válida',
    'americana.resumen.card2_desc': 'Confirmação mediante rigorosa análise documental e ensaios.',
    'americana.resumen.card3_title': 'Ensaios Acreditados',
    'americana.resumen.card3_desc': 'Resultados de laboratório que garantem a não periculosidade.',

    // ── Caracterización Hero ─────────────────────────────────────
    'caracterizacion.hero.title': 'Caracterização de resíduos sólidos',
    'caracterizacion.hero.subtitle': 'Reduzimos seu custo de disposição final entre 30% e 80% mediante reclassificação técnica com respaldo normativo.',
    'caracterizacion.hero.cta': 'Quero minha caracterização',
    'caracterizacion.hero.badge': 'Respaldo Normativo',
    'caracterizacion.hero.img_alt': 'Planta industrial com equipamento moderno de gestão de resíduos',

    // ── Caracterización Incluye ──────────────────────────────────
    'caracterizacion.incluye.title': 'O que inclui?',
    'caracterizacion.incluye.subtitle': 'Nosso processo de caracterização é rigoroso, repetível e orientado a resultados de auditoria.',

    // ── Caracterización Proceso ──────────────────────────────────
    'caracterizacion.proceso.label': 'Diagnóstico Técnico',
    'caracterizacion.proceso.title': 'Em que consiste?',
    'caracterizacion.proceso.body1': 'O diagnóstico que revela exatamente quais resíduos sua organização gera. Identificamos, medimos e classificamos seus resíduos para que você tome decisões baseadas em dados reais, não em estimativas.',
    'caracterizacion.proceso.quote': 'O QUE NÃO SE MEDE, NÃO SE GERENCIA.',
    'caracterizacion.proceso.body2': 'Fornecemos a informação completa e precisa que sua operação precisa para uma transição efetiva rumo à economia circular.',
    'caracterizacion.proceso.img_alt': 'Engenheira ambiental realizando diagnóstico técnico com tablet industrial',

    // ── Reducción OPEX Hero ──────────────────────────────────────
    'reduccion_opex.hero.badge': 'Otimização de OPEX',
    'reduccion_opex.hero.title': 'Diagnóstico Estratégico de OPEX Ambiental',
    'reduccion_opex.hero.tagline': 'Identificamos onde se perde dinheiro e como recuperá-lo.',
    'reduccion_opex.hero.subtitle': 'Uma metodologia especializada da Azul Sostenible para identificar e priorizar oportunidades de redução de custos associados à gestão ambiental.',

    // ── Reducción OPEX Beneficios ────────────────────────────────
    'reduccion_opex.beneficios.title': 'Benefícios para a organização',

    // ── Reducción OPEX Cierre ────────────────────────────────────
    'reduccion_opex.cierre.title': 'Transforme sua gestão ambiental em uma vantagem competitiva',
    'reduccion_opex.cierre.subtitle': 'O que você realmente obtém é uma estratégia integral para reduzir custos operacionais e fortalecer a competitividade da sua organização no mercado atual.',
    'reduccion_opex.cierre.cta_primary': 'Solicitar Diagnóstico',
    'reduccion_opex.cierre.cta_secondary': 'Falar com um Especialista',

    // ── Reducción OPEX Entregables ───────────────────────────────
    'reduccion_opex.entregables.title': 'Entregáveis (O que sua empresa recebe?)',

    // ── Reducción OPEX Metodología ───────────────────────────────
    'reduccion_opex.metodologia.title': 'O que fazemos? (Metodologia)',
    'reduccion_opex.metodologia.subtitle': 'Realizamos uma avaliação integral da gestão ambiental e de resíduos, analisando cada nó da cadeia operacional.',

    // ── Reducción OPEX Por Qué ───────────────────────────────────
    'reduccion_opex.porque.title': 'Por que implementar este serviço?',
    'reduccion_opex.porque.model_title': 'O Modelo Tradicional Ineficiente',
    'reduccion_opex.porque.step1': 'Gerar',
    'reduccion_opex.porque.step2': 'Armazenar',
    'reduccion_opex.porque.step3': 'Transportar',
    'reduccion_opex.porque.step4': 'Descartar',
    'reduccion_opex.porque.model_body': 'Este ciclo linear gera "vazamentos" invisíveis em cada etapa, transformando sua gestão ambiental em um centro de custo descontrolado.',
    'reduccion_opex.porque.conclusion': 'Conclusão: Sua empresa gasta sem saber exatamente onde economizar.',

    // ── Almacenes Beneficios ─────────────────────────────────────
    'almacenes.beneficios.title_1': 'Impacto Direto na sua ',
    'almacenes.beneficios.title_highlight': 'Rentabilidade',

    // ── Almacenes Hero ───────────────────────────────────────────
    'almacenes.hero.title_1': 'Armazéns Inteligentes para a ',
    'almacenes.hero.title_highlight': 'Economia Circular',
    'almacenes.hero.subtitle': 'Transformamos espaços de armazenamento em ferramentas estratégicas de redução de custos e geração de valor ambiental.',
    'almacenes.hero.cta': 'Solicitar Diagnóstico Integral',
    'almacenes.hero.card_title': 'Diagnóstico Rápido',
    'almacenes.hero.card_subtitle': 'Avaliamos sua operação em 48h',
    'almacenes.hero.stat1_label': 'Otimização de Espaço',
    'almacenes.hero.stat2_label': 'Redução de OPEX',

    // ── Almacenes Problema ───────────────────────────────────────
    'almacenes.problema.badge': 'Por que é importante?',
    'almacenes.problema.title_pre': 'Seu armazém de resíduos não é uma obrigação, é uma ',
    'almacenes.problema.title_highlight': 'fonte de receita oculta',
    'almacenes.problema.body': 'Muitas empresas veem o armazenamento de descartes como um custo afundado. Na Azul Sostenible, identificamos os pontos de vazamento financeiro que impactam sua rentabilidade diária.',

    // ── Almacenes Soluciones ─────────────────────────────────────
    'almacenes.soluciones.title_1': 'Soluções Técnicas de ',
    'almacenes.soluciones.title_highlight': 'Engenharia',
    'almacenes.soluciones.subtitle': 'Aplicamos metodologias de classe mundial para redefinir sua infraestrutura de gestão de materiais.',
    'almacenes.soluciones.img_alt': 'Planta industrial com projeto de armazém otimizado',
    'almacenes.soluciones.item1': 'Segregação técnica',
    'almacenes.soluciones.item2': 'Controle de derramamentos',
    'almacenes.soluciones.item3': 'Ventilação forçada',
    'almacenes.soluciones.link': 'Saiba mais',

    // ── Almacenes Valor ──────────────────────────────────────────
    'almacenes.valor.title_1': 'O que sua ',
    'almacenes.valor.title_highlight': 'empresa',
    'almacenes.valor.subtitle': 'Entregamos um ecossistema completo de gestão, não apenas um espaço físico.',

    // ── Almacenes Cierre ─────────────────────────────────────────
    'almacenes.cierre.quote': 'Primeiro identificamos onde se perde dinheiro. Depois transformamos a operação para recuperá-lo.',
    'almacenes.cierre.cta': 'Iniciar transformação do armazém',
    'almacenes.cierre.note': 'Sem compromisso. Avaliação técnica inicial disponível.',

    // ── Reclasificación ──────────────────────────────────────────
    'reclasificacion.hero.badge': 'Soluções de Engenharia Ambiental',
    'reclasificacion.hero.title': 'Reclassificação de resíduos perigosos',
    'reclasificacion.hero.subtitle': 'Reclassificação técnica para reduzir custos e garantir conformidade ambiental. Transformamos passivos ambientais em eficiência operacional sustentada.',
    'reclasificacion.hero.cta': 'Quero reclassificar meus resíduos',

    // ── Reclasificación Proceso ──────────────────────────────────
    'reclasificacion.proceso.title': 'A reclassificação transforma seus resíduos perigosos em economia',
    'reclasificacion.proceso.body': 'Analisamos seus resíduos, verificamos sua verdadeira categoria e preparamos todo o suporte técnico para atualizar sua classificação oficial junto ao MINAM.',
    'reclasificacion.proceso.quote': 'Menos periculosidade = Menos custos = Mais valor para sua empresa.',
    'reclasificacion.proceso.cta': 'Mais Informações',
    'reclasificacion.proceso.img_alt': 'Processo de certificação e auditoria ambiental',
    'reclasificacion.proceso.badge_title': 'Certificação MINAM',
    'reclasificacion.proceso.badge_subtitle': 'Processos 100% validados',

    // ── Reclasificación Incluye ──────────────────────────────────
    'reclasificacion.incluye.title': 'O Que Nosso Serviço Inclui?',

    // ── Reclasificación Beneficios ───────────────────────────────
    'reclasificacion.beneficios.title': 'O que sua empresa ganha conosco?',

    // ── Reclasificación Casos de Éxito ───────────────────────────
    'reclasificacion.casos.title': 'Casos de Sucesso - Resoluções Obtidas',
    'reclasificacion.casos.open_pdf': 'Abrir PDF',

    // ── Reclasificación Cierre ───────────────────────────────────
    'reclasificacion.cierre.title': 'UM RESÍDUO BEM CLASSIFICADO TRANSFORMA SEUS CUSTOS, SUA OPERAÇÃO E SUA REPUTAÇÃO',
    'reclasificacion.cierre.subtitle': 'Transforme a informação técnica em poder ambiental e econômico real. Vamos começar hoje mesmo o processo de reclassificação técnica dos seus resíduos.',
    'reclasificacion.cierre.cta': 'Mais Informações',
  },
} as const

export default ui
