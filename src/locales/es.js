const actividadesEcopetrolDigital = [
  'Diseñar, implementar y mantener herramientas informáticas para la operación usando Python, SQL, Power BI y Power Automate.',
  'Automatizar procesos operativos con Robot JAVI, Robot CIEG y el Módulo de Abastecimiento de Combustible.',
  'Administrar y optimizar la Base de Datos SQL del Centro de Cadena para asegurar trazabilidad y disponibilidad de información.',
  'Brindar soporte transversal a la herramienta Programador Digital Prodigio en sus 5 módulos.',
  'Desarrollar tableros de control (Escenarios Refinados, Gestión GIP y Centro de Información de Energía y Gas) para seguimiento operativo y gerencial.',
]

export const es = {
  // Navegación
  nav: {
    nombre: 'Willy Corzo',
    items: [
      { label: 'Inicio', ruta: '/' },
      { label: 'Experiencia', ruta: '/experiencia' },
      { label: 'Estudios', ruta: '/estudios' },
      { label: 'Herramientas', ruta: '/herramientas' },
      { label: 'Proyectos', ruta: '/proyectos' },
    ],
    aria: {
      abrirMenu: 'Abrir menú',
      cerrarMenu: 'Cerrar menú',
      // Dicen la accion concreta, no una generica: asi un lector de pantalla
      // revela de paso en que tema e idioma esta la pagina ahora mismo.
      temaAOscuro: 'Cambiar a modo oscuro',
      temaAClaro: 'Cambiar a modo claro',
      cambiarIdiomaA: 'Cambiar idioma a inglés',
      navegacion: 'Navegación principal',
      saltarContenido: 'Saltar al contenido',
      cargando: 'Cargando',
    },
    // Se muestra en el idioma al que se va a cambiar, no en el actual
    cambiarIdiomaTitulo: 'Switch to English',
  },

  // Metadatos por ruta. Un SPA sirve el mismo index.html en las cinco rutas,
  // asi que sin esto las cinco declararian el canonical de la home y Google
  // las trataria como duplicados. Las claves son las rutas de nav.items.
  seo: {
    '/': {
      titulo: 'Willy Corzo | Ingeniero Químico & Desarrollador Web | Colombia',
      descripcion:
        'Portfolio de Willy Corzo Lubo, Ingeniero Químico con más de 15 años de experiencia en el sector de Hidrocarburos, Maestría en Gerencia de Proyectos, especialista ISO 17025 y Desarrollador Web Full Stack en Colombia.',
    },
    '/experiencia': {
      titulo: 'Experiencia Profesional | Willy Corzo',
      descripcion:
        'Quince años en el sector de Hidrocarburos: liderazgo de medición y transferencia en custodia en Applus+, Ecopetrol, SGS, Intertek, OTI y Bureau Veritas.',
    },
    '/estudios': {
      titulo: 'Formación Académica | Willy Corzo',
      descripcion:
        'Maestría en Gerencia de Proyectos (Universidad Isabel I), Ingeniería Química (Universidad del Atlántico) y especialización técnica en la norma ISO/IEC 17025.',
    },
    '/herramientas': {
      titulo: 'Herramientas y Tecnologías | Willy Corzo',
      descripcion:
        'Nivel de dominio en Excel y VBA, SQL, JavaScript, React, HTML, CSS, Git y Word, con los años de experiencia y las aplicaciones reales de cada herramienta.',
    },
    '/proyectos': {
      titulo: 'Proyectos | Willy Corzo',
      descripcion:
        'Desarrollo web y automatización: plataforma de inspecciones de hidrocarburos, herramienta Excel-VBA de cinco módulos y tablero de escenarios de refinación.',
    },
  },

  // Página de Inicio
  home: {
    saludo: 'Hola, mi nombre es',
    nombre: 'Willy Corzo Lubo',
    altFoto: 'Foto de Willy Corzo',
    roles: [
      'Maestría en Gerencia de Proyectos',
      'Ingeniero Químico',
      'Especialista NTC ISO 17025:2017',
      'Desarrollador Web Full Stack',
      'Desarrollador en Power BI',
      'Experto en Excel - VBA',
    ],
    bio: [
      'Ingeniero Químico con maestría en Gerencia de Proyectos y más de 15 años de experiencia en el sector de Hidrocarburos, especializado en Transferencia en Custodia, Medición y Análisis.',
      'Me apasiona transformar procesos complejos en soluciones automatizadas y eficientes. Orientado a resultados, trabajo con iniciativa, honestidad y compromiso, adaptándome con facilidad a nuevos retos y entornos.',
    ],
    cta: {
      experiencia: 'Ver experiencia',
      contactar: 'Contactar',
      // El boton de contacto abre WhatsApp en otra pestaña; se anuncia en el
      // nombre accesible para que no sorprenda a quien usa lector de pantalla.
      contactarAria: 'Contactar por WhatsApp (se abre en otra pestaña)',
    },
    habilidadesBlandas: [
      'Liderazgo',
      'Trabajo en equipo',
      'Comunicación efectiva',
      'Orientado a resultados',
      'Pensamiento crítico',
      'Adaptabilidad',
      'Iniciativa',
      'Honestidad',
    ],
  },

  // Página de Experiencia
  experienciaUI: {
    titulo: 'Experiencia Profesional',
    labels: {
      contratante: 'Empresa contratante',
      servicioPara: 'Servicio para',
      logoCliente: 'Logo del cliente',
    },
  },
  experiencia: [
    {
      imageLight: 'Applus.W.png',
      imageDark: 'Applus.B.png',
      alt: 'Imagen Corporativa Applus - Líder de Medición',
      cargo: 'Líder de Medición',
      empresa: 'Applus+',
      cliente: 'Frontera Energy',
      clientImageLight: 'Frontera.W.png',
      clientImageDark: 'Frontera.B.png',
      clientAlt: 'Logo Frontera Energy',
      fecha: 'Febrero 2025 - Actual',
      lugar: 'Bogotá D.C., Colombia',
      actividades: [
        'Liderar el proceso de medición de hidrocarburos en puntos de transferencia de custodia.',
        'Asegurar la calibración y verificación de medidores, tanques y equipos de laboratorio.',
        'Validar balances diarios y mensuales, analizando desviaciones de volumen y calidad.',
        'Garantizar el cumplimiento de normas técnicas (API, ASTM e ISO 17025).',
        'Coordinar auditorías, inspecciones y planes de mejora en sistemas de medición.',
        'Elaborar reportes técnicos y tableros de control para seguimiento gerencial.',
      ],
    },
    {
      image: 'copco.jpg',
      alt: 'Imagen Corporativa Copco - Profesional Semi Senior',
      cargo: 'Profesional Semi Senior',
      empresa: 'Copco',
      cliente: 'Ecopetrol S.A.',
      clientImageLight: 'Ecopetrol.W.png',
      clientImageDark: 'Ecopetrol.B.png',
      clientAlt: 'Logo Ecopetrol',
      fecha: 'Diciembre 2023 - Diciembre 2024',
      lugar: 'Misión Temporal en Ecopetrol S.A. - Bogotá D.C.',
      actividades: actividadesEcopetrolDigital,
    },
    {
      image: 'sinmediatas.png',
      alt: 'Imagen Corporativa Soluciones Inmediatas',
      cargo: 'Programador Integrador',
      empresa: 'Soluciones Inmediatas',
      cliente: 'Ecopetrol S.A.',
      clientImageLight: 'Ecopetrol.W.png',
      clientImageDark: 'Ecopetrol.B.png',
      clientAlt: 'Logo Ecopetrol',
      fecha: 'Agosto 2023 - Noviembre 2023',
      lugar: 'Bogotá D.C., Colombia',
      actividades: actividadesEcopetrolDigital,
    },
    {
      image: 'SGS.png',
      imageLight: 'SGS.W.png',
      imageDark: 'SGS.B.png',
      alt: 'Imagen Corporativa SGS',
      cargo: 'Inspector Profesional',
      fecha: 'Julio 2021 - Julio 2023',
      lugar: 'Estación Apiay Cenit - Villavicencio, Meta',
      actividades: [
        'Certificar la calidad y cantidad de los hidrocarburos y refinados.',
        'Realizar seguimiento a carrotanques recibidos y despachados.',
        'Elaborar los reportes diarios y mensuales.',
        'Implementar y mantener la Norma ISO 17025:2017.',
        'Desarrollar el programa Balance para calcular los balances diarios y mensuales.',
        'Desarrollar el programa LabCal para realizar los cálculos de los análisis.',
      ],
    },
    {
      image: 'Intertek.png',
      imageLight: 'Intertek.W.png',
      imageDark: 'Intertek.B.png',
      alt: 'Imagen Corporativa Intertek',
      cargo: 'Coordinador Administrativo de Contratos',
      fecha: 'Junio 2019 - Junio 2021',
      lugar: 'Bogotá D.C., Colombia',
      actividades: [
        'Coordinar 6 proyectos de inspección de Hidrocarburos.',
        'Liderar un equipo de 50 personas.',
        'Planear y ejecutar las auditorías de sistemas de transporte de Hidrocarburos.',
        'Gestionar el proceso de adquisición de bienes y servicios.',
        'Implementar estrategias para el desarrollo y seguimiento de indicadores corporativos y desempeño laboral.',
        'Desarrollar el programa Nómina para calcular los recargos y horas extras.',
      ],
    },
    {
      image: 'OTI.jpg',
      alt: 'Imagen Corporativa OTI',
      cargo: 'Inspector de Hidrocarburos',
      fecha: 'Febrero 2017 - Junio 2019',
      lugar: 'Rubiales CPF1 y CPF2 - Puerto Gaitán, Meta',
      actividades: [
        'Certificar la calidad y cantidad de los hidrocarburos.',
        'Realizar seguimiento a carrotanques.',
        'Elaborar los reportes diarios y mensuales.',
        'Implementar y mantener la Norma ISO 17025:2017.',
        'Desarrollar el programa Analito para realizar los cálculos de los análisis y balances diarios y mensuales.',
      ],
    },
    {
      image: 'BV.jpg',
      imageLight: 'BV.W.png',
      imageDark: 'BV.B.png',
      alt: 'Imagen Corporativa BV',
      cargo: 'Inspector de Calidad y Cantidad',
      fecha: 'Junio 2008 - Julio 2016',
      lugar: 'Ocensa Coveñas - Coveñas, Sucre',
      actividades: [
        'Certificar la calidad y cantidad de los hidrocarburos.',
        'Elaborar los reportes diarios y mensuales.',
        'Implementar y mantener la Norma ISO 17025:2017.',
        'Realizar las inspecciones de volúmenes en buques tanque.',
      ],
    },
  ],

  // Página de Estudios
  estudiosUI: {
    // Encabezado de pagina. Solo lo lee el lector de pantalla: la pagina ya se
    // presenta con los titulos rotados de cada seccion.
    titulo: 'Formación y Estudios',
    labels: {
      tesis: 'Tesis',
      logros: 'Logros',
    },
  },

  // Página de Herramientas
  herramientasUI: {
    titulo: 'Herramientas y Tecnologías',
    anio: 'año',
    anios: 'años',
  },

  // Página de Proyectos
  proyectosUI: {
    verProyecto: 'Ver proyecto',
    // El enlace abre en otra pestaña; se avisa en el nombre accesible.
    verProyectoAria: 'Ver el proyecto (se abre en otra pestaña)',
    titulo: 'Proyectos',
  },

  estudios: {
    tituloFormales: 'Formación Académica',
    tituloCortos: 'Formación Complementaria',
    tarjetas: [
      {
        institucion: 'Universidad Isabel I',
        fecha: 'Madrid España - 2020',
        estudio: 'Project Management',
        fondo: 'isabel.png',
        grado: 'Maestría',
        tipo: 'formal',
        descripcion: 'Posgrado enfocado en dirección y gestión de proyectos bajo el marco del PMI, con énfasis en liderazgo de equipos, planificación estratégica y control de costos en entornos complejos.',
        tesis: 'Metodología para la Gestión de Riesgos en Proyectos de Infraestructura Oil & Gas en Colombia',
        logros: [
          'Graduado con distinción académica.',
          'Proyecto de grado calificado como sobresaliente.',
        ],
      },
      {
        institucion: 'Universidad del Atlántico',
        fecha: 'Barranquilla - 2007',
        estudio: 'Ingeniería Química',
        fondo: 'ua.png',
        grado: 'Pregrado',
        tipo: 'formal',
        descripcion: 'Carrera orientada al diseño y optimización de procesos industriales, con sólida formación en fisicoquímica, termodinámica, operaciones unitarias y análisis de materiales aplicados al sector de Hidrocarburos.',
        tesis: 'Optimización del Proceso de Transferencia en Custodia de Hidrocarburos en Terminales Marítimos',
        logros: [
          'Mejor promedio de la promoción 2007.',
          'Participación en proyecto de investigación de procesos de refinación.',
        ],
      },
      {
        institucion: 'Servicio Nacional de Aprendizaje - SENA',
        fecha: 'Bogotá - 2018',
        estudio: 'Gestión en Laboratorios de Ensayo y Calibración - Norma ISO/IEC 17025',
        fondo: 'sena.png',
        grado: 'Especialización Técnica',
        tipo: 'formal',
        descripcion: 'Especialización en implementación y gestión de sistemas de calidad para laboratorios de ensayo y calibración bajo los requisitos de la norma NTC ISO/IEC 17025.',
        tesis: null,
      },
      {
        institucion: 'Universidad del Norte',
        fecha: 'Barranquilla - 2021',
        estudio: 'Desarrollo de Software',
        fondo: 'uninorte.jpg',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Programa de formación en desarrollo web frontend con énfasis en las tecnologías fundamentales de la web moderna y control de versiones.',
        habilidades: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        duracion: '120 horas',
      },
      {
        institucion: 'Servicio Nacional de Aprendizaje - SENA',
        fecha: 'Bogotá - 2016',
        estudio: 'Manejo de Herramientas: Microsoft Excel',
        fondo: 'sena.png',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Formación en el uso avanzado de Microsoft Excel, desde gestión de datos y funciones hasta automatización con macros y programación en VBA.',
        habilidades: ['Fórmulas avanzadas', 'Tablas dinámicas', 'Macros', 'VBA', 'Power Query'],
        duracion: '40 horas',
      },
    ],
    herramientas: {
      items: [
        {
          titulo: 'Excel',
          imagen: 'excel.png',
          parrafo: 'Hoja de cálculo para manipular datos numéricos y de texto, con capacidad de automatización mediante macros y VBA.',
          conocimiento: 'Avanzado',
          nivel: 90,
          anios: 15,
          categoria: 'Ofimática',
          usos: [
            'Balances de producción y medición de Hidrocarburos.',
            'Automatización de reportes con macros y VBA.',
            'Análisis de datos con tablas dinámicas y Power Query.',
          ],
        },
        {
          titulo: 'HTML',
          imagen: 'html-5.png',
          parrafo: 'Lenguaje de marcado que define la estructura y el significado del contenido en la web.',
          conocimiento: 'Avanzado',
          nivel: 85,
          anios: 4,
          categoria: 'Desarrollo Web',
          usos: [
            'Maquetación semántica de interfaces web.',
            'Estructura base de aplicaciones React.',
          ],
        },
        {
          titulo: 'CSS',
          imagen: 'css-3.png',
          parrafo: 'Lenguaje de estilos para definir la presentación visual de documentos HTML.',
          conocimiento: 'Intermedio',
          nivel: 65,
          anios: 3,
          categoria: 'Desarrollo Web',
          usos: [
            'Diseño responsive y mobile-first.',
            'Estilos personalizados con Material UI.',
          ],
        },
        {
          titulo: 'JavaScript',
          imagen: 'js.png',
          parrafo: 'Lenguaje de programación que permite implementar lógica e interactividad en aplicaciones web.',
          conocimiento: 'Intermedio',
          nivel: 70,
          anios: 3,
          categoria: 'Desarrollo Web',
          usos: [
            'Lógica de aplicaciones web.',
            'Consumo de APIs REST.',
          ],
        },
        {
          titulo: 'React',
          imagen: 'atom.png',
          parrafo: 'Librería de JavaScript para construir interfaces de usuario basadas en componentes reutilizables.',
          conocimiento: 'Intermedio',
          nivel: 70,
          anios: 2,
          categoria: 'Desarrollo Web',
          usos: [
            'Desarrollo de aplicaciones SPA.',
            'Gestión de estado con Zustand.',
          ],
        },
        {
          titulo: 'Git Hub',
          imagen: 'github.svg',
          parrafo: 'Plataforma de alojamiento de código con control de versiones Git para colaboración y despliegue.',
          conocimiento: 'Intermedio',
          nivel: 65,
          anios: 3,
          categoria: 'Desarrollo Web',
          usos: [
            'Control de versiones de proyectos.',
            'Colaboración en equipo y despliegue continuo.',
          ],
        },
        {
          titulo: 'Word',
          imagen: 'word.svg',
          parrafo: 'Procesador de texto para crear, editar y dar formato a documentos profesionales con herramientas avanzadas de redacción.',
          conocimiento: 'Avanzado',
          nivel: 90,
          anios: 15,
          categoria: 'Ofimática',
          usos: [
            'Redacción de informes técnicos y reportes de inspección.',
            'Elaboración de procedimientos y manuales operativos.',
            'Documentación de contratos y propuestas comerciales.',
          ],
        },
        {
          titulo: 'SQL',
          imagen: 'sql.svg',
          parrafo: 'Lenguaje estándar para consultar, insertar, actualizar y gestionar datos en bases de datos relacionales.',
          conocimiento: 'Intermedio',
          nivel: 75,
          anios: 5,
          categoria: 'Bases de Datos',
          usos: [
            'Consultas y análisis de datos de producción.',
            'Generación de reportes desde bases de datos corporativas.',
            'Integración de datos con herramientas de Business Intelligence.',
          ],
        },
      ],
    },
  },

  // Página de Proyectos
  proyectos: {
    items: [
      {
        nombre: 'Sin Mediatas',
        imagen: 'sinmediatas.png',
        descripcion: 'Plataforma web para la gestión y seguimiento de proyectos de inspección de hidrocarburos, con módulos de reportes automáticos y control de calidad.',
        tecnologias: ['React', 'Node.js', 'SQL'],
        categoria: 'Desarrollo Web',
      },
      {
        nombre: 'Programador Digital Prodigio',
        imagen: 'excel.png',
        descripcion: 'Herramienta en Excel-VBA con 5 módulos para la programación, control y automatización de operaciones de transferencia en custodia de hidrocarburos.',
        tecnologias: ['Excel', 'VBA', 'SQL'],
        categoria: 'Automatización',
      },
      {
        nombre: 'Tablero Escenarios Refinados',
        imagen: 'piton.png',
        descripcion: 'Dashboard para el control y análisis de escenarios proyectados de refinación, con visualización de datos en tiempo real y generación de reportes.',
        tecnologias: ['Python', 'Excel'],
        categoria: 'Automatización',
      },
    ],
  },

  // Página 404
  error404: {
    subtitulo: 'Página no encontrada',
    descripcion:
      'La dirección que buscas no existe o fue movida. Regresa al inicio y sigue explorando.',
    boton: 'Volver al Inicio',
  },

  // Contacto
  contacto: {
    email: 'ing.willy.corzo@gmail.com',
    telefono: '+57 301 789 3883',
    whatsapp: 'https://api.whatsapp.com/send?phone=573017893883&text=Me%20interesa%20Saber%20m%C3%A1s%20sobre%20tu%20Hoja%20de%20Vida',
    linkedin: 'https://www.linkedin.com/in/ing-quimico-willy-corzo/',
    github: 'https://github.com/willyto3',
  },

  // Footer
  footer: {
    aria: {
      telefono: 'Llamar por teléfono',
      email: 'Enviar correo',
      linkedin: 'Abrir perfil de LinkedIn',
      github: 'Abrir perfil de GitHub',
      whatsapp: 'Abrir WhatsApp',
    },
  },
}
