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
      idioma: 'Idioma',
      navegacion: 'Navegación principal',
      saltarContenido: 'Saltar al contenido',
      cargando: 'Cargando',
    },
    // Cada idioma se nombra en su propia lengua, igual en es.js y en.js
    idiomas: [
      { codigo: 'es', corto: 'ES', nombre: 'Español' },
      { codigo: 'en', corto: 'EN', nombre: 'English' },
    ],
  },

  // Metadatos por ruta. Un SPA sirve el mismo index.html en las cinco rutas,
  // asi que sin esto las cinco declararian el canonical de la home y Google
  // las trataria como duplicados. Las claves son las rutas de nav.items.
  seo: {
    '/': {
      titulo: 'Willy Corzo | Ingeniero Químico & Desarrollador Web | Colombia',
      descripcion:
        'Willy Corzo, Ingeniero Químico y Máster en Gerencia de Proyectos: más de 18 años en medición, fiscalización y transferencia de custodia de hidrocarburos.',
    },
    '/experiencia': {
      titulo: 'Experiencia Profesional | Willy Corzo',
      descripcion:
        'Más de 18 años en el sector de Hidrocarburos: liderazgo de medición y transferencia en custodia en Applus+, Ecopetrol, SGS, Intertek, OTI y Bureau Veritas.',
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
      'Líder de Medición y Fiscalización',
      'Ingeniero Químico',
      'Máster en Gerencia de Proyectos',
      'Especialista ISO/IEC 17025',
      'Automatización e Inteligencia de Datos',
      'Desarrollador Python y Power BI',
    ],
    bio: [
      'Ingeniero Químico con Maestría en Gerencia de Proyectos y más de 18 años en el sector de hidrocarburos, especializado en medición, fiscalización y transferencia de custodia bajo API MPMS, ASTM, ISO/IEC 17025 y la Resolución 40236 de la ANH.',
      'He desarrollado las herramientas que mi propio trabajo necesitaba: programas de cálculo y balance para laboratorio e inspección, y tableros de control para seguimiento operativo y gerencial. Automatizo desde el problema, no desde la tecnología.',
    ],
    cta: {
      experiencia: 'Ver experiencia',
      contactar: 'Contactar',
      // El boton de contacto abre WhatsApp en otra pestaña; se anuncia en el
      // nombre accesible para que no sorprenda a quien usa lector de pantalla.
      contactarAria: 'Contactar por WhatsApp (se abre en otra pestaña)',
    },
    // Cuatro tecnicas y cuatro blandas. Las blandas que faltan -Trabajo en
    // equipo, Orientado a resultados, Iniciativa, Honestidad- se cayeron
    // porque el parrafo de arriba ya las decia con esas mismas palabras.
    habilidades: [
      'Python',
      'SQL',
      'Power BI',
      'Excel-VBA',
      'Liderazgo',
      'Comunicación efectiva',
      'Pensamiento crítico',
      'Adaptabilidad',
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
        'Fiscalizar volúmenes y calidad de hidrocarburos (crudos livianos, profundos y pesados) despachados a terceros, asegurando la trazabilidad metrológica en los puntos de transferencia de custodia.',
        'Asegurar la calibración y verificación de medidores, tanques y equipos de laboratorio.',
        'Participar en auditorías metrológicas a los sistemas de medición, verificando el cumplimiento de API MPMS y de la Resolución 40236 de 2022 de la ANH.',
        'Coordinar inspecciones y planes de mejora en los sistemas de medición.',
        'Analizar las propiedades fisicoquímicas de los fluidos de producción y validar la incertidumbre asociada al proceso de medición.',
        'Validar balances diarios y mensuales, analizando desviaciones de volumen y calidad.',
        'Gestionar la relación con terceros para garantizar el correcto despacho y certificación de los fluidos producidos.',
        'Elaborar reportes técnicos y tableros de control para el seguimiento gerencial de la medición.',
      ],
    },
    {
      imageLight: 'Copco.W.png',
      imageDark: 'Copco.B.png',
      alt: 'Imagen Corporativa Copco - Profesional Semi Senior',
      cargo: 'Profesional Semi Senior – Automatización e Inteligencia de Datos',
      empresa: 'Copco',
      cliente: 'Ecopetrol S.A.',
      clientImageLight: 'Ecopetrol.W.png',
      clientImageDark: 'Ecopetrol.B.png',
      clientAlt: 'Logo Ecopetrol',
      fecha: 'Diciembre 2023 - Diciembre 2024',
      lugar: 'Bogotá D.C., Colombia',
      actividades: [
        'Construir el Tablero Centro de Información de Energía y Gas para monitorear producción y autoconsumos en refinerías.',
        'Diseñar e implementar los robots RPA Robot JAVI y Robot CIEG y dashboards en Power BI integrados con SQL Server y Power Automate para el monitoreo en tiempo real de transporte de combustible y energía.',
        'Automatizar el Módulo de Abastecimiento de Combustible para el seguimiento de la operación.',
        'Modelar y analizar datos de transporte de combustible y energía para la proyección de demanda y escenarios operativos.',
        'Administrar y optimizar la base de datos SQL del Centro de Cadena, asegurando la trazabilidad y disponibilidad de la información operativa.',
        'Brindar soporte transversal a la herramienta Programador Digital Prodigio en sus 5 módulos funcionales.',
      ],
    },
    {
      imageLight: 'SInmediatas.W.png',
      imageDark: 'SInmediatas.B.png',
      alt: 'Imagen Corporativa Soluciones Inmediatas',
      cargo: 'Programador – Integrador de Sistemas',
      empresa: 'Soluciones Inmediatas',
      cliente: 'Ecopetrol S.A.',
      clientImageLight: 'Ecopetrol.W.png',
      clientImageDark: 'Ecopetrol.B.png',
      clientAlt: 'Logo Ecopetrol',
      fecha: 'Agosto 2023 - Noviembre 2023',
      lugar: 'Bogotá D.C., Colombia',
      actividades: [
        'Desarrollar módulos de automatización para la optimización de abastecimiento y la gestión de bases de datos corporativas.',
        'Implementar el Tablero Escenarios Refinados para control y proyección de escenarios operativos.',
        'Desarrollar el Tablero Gestión GIP para el seguimiento de hitos e indicadores de la gerencia.',
      ],
    },
    {
      imageLight: 'SGS.W.png',
      imageDark: 'SGS.B.png',
      alt: 'Imagen Corporativa SGS',
      cargo: 'Inspector Profesional',
      empresa: 'SGS Colombia',
      cliente: 'Cenit',
      fecha: 'Julio 2021 - Julio 2023',
      lugar: 'Estación Apiay - Villavicencio, Meta',
      actividades: [
        'Fiscalizar crudo y refinados en una estación de alto volumen, con control de calidad y cantidad sobre recibos y despachos y conciliación de balances volumétricos.',
        'Realizar análisis fisicoquímicos bajo ASTM y API MPMS para determinar las propiedades que inciden en el volumen neto (densidad, temperatura, agua y sedimento).',
        'Implementar y mantener el sistema de gestión ISO/IEC 17025:2017 con trazabilidad metrológica completa, control de patrones y calibraciones.',
        'Desarrollar los sistemas Balance y LabCal en Excel VBA para automatizar balances de masa y análisis fisicoquímicos, reduciendo el error manual en la liquidación volumétrica.',
      ],
    },
    {
      imageLight: 'Intertek.W.png',
      imageDark: 'Intertek.B.png',
      alt: 'Imagen Corporativa Intertek',
      cargo: 'Coordinador Administrativo de Contratos',
      empresa: 'Intertek Colombia',
      fecha: 'Junio 2019 - Junio 2021',
      lugar: 'Bogotá D.C., Colombia',
      actividades: [
        'Coordinar 6 contratos de inspección de hidrocarburos en simultáneo, liderando un equipo de hasta 50 personas.',
        'Gestionar la adquisición de bienes y servicios con la mejor relación calidad/costo dentro del presupuesto, con manejo de responsabilidad fiscal.',
        'Gestionar el proceso presupuestal y el control de costos operativos de los contratos.',
        'Elaborar términos de referencia y documentación contractual para la contratación de bienes y servicios.',
        'Evaluar técnicamente y negociar con proveedores, con seguimiento de indicadores corporativos de desempeño.',
        'Planear y ejecutar auditorías de sistemas de transporte de hidrocarburos.',
        'Desarrollar el programa Nómina en Excel VBA para el control de nómina y el cálculo de recargos.',
      ],
    },
    {
      imageLight: 'OTI.W.png',
      imageDark: 'OTI.B.png',
      alt: 'Imagen Corporativa OTI',
      cargo: 'Inspector de Hidrocarburos',
      empresa: 'OTI Colombia',
      fecha: 'Febrero 2017 - Junio 2019',
      lugar: 'Rubiales CPF1 y CPF2 - Puerto Gaitán, Meta',
      actividades: [
        'Certificar, analizar y controlar la calidad y cantidad de crudos en facilidades de producción de alto volumen, en uno de los campos de mayor producción del país.',
        'Implementar desde cero la norma ISO/IEC 17025:2017 en el laboratorio de medición de campo: procedimientos, registros y trazabilidad metrológica.',
        'Desarrollar el software Analito para cálculos de análisis fisicoquímicos y balances de producción.',
      ],
    },
    {
      imageLight: 'BV.W.png',
      imageDark: 'BV.B.png',
      alt: 'Imagen Corporativa BV',
      cargo: 'Inspector de Cantidad y Calidad',
      empresa: 'Bureau Veritas',
      cliente: 'Ocensa',
      fecha: 'Junio 2008 - Julio 2016',
      lugar: 'Terminal Coveñas - Coveñas, Sucre',
      actividades: [
        'Fiscalizar hidrocarburos en terminal de exportación: medición estática en tanques, aforos, cálculo de volúmenes brutos y netos y certificación de cargamentos en transferencia de custodia.',
        'Inspeccionar volúmenes en buque-tanques bajo API MPMS e ISO, manejando discrepancias entre volumen embarcado y recibido.',
        'Elaborar certificados de carga y documentos soporte de las exportaciones, gestionando la relación con clientes, comercializadores y terceros.',
        'Elaborar reportes operativos diarios y mensuales de recibos, almacenamiento y despachos del terminal.',
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
        fondo: 'isabel.W.png',
        fondoOscuro: 'isabel.B.png',
        grado: 'Maestría',
        tipo: 'formal',
        descripcion: 'Posgrado enfocado en dirección y gestión de proyectos bajo el marco del PMI, con énfasis en liderazgo de equipos, planificación estratégica y control de costos en entornos complejos.',
        tesis: null,
      },
      {
        institucion: 'Universidad del Atlántico',
        fecha: 'Barranquilla - 2007',
        estudio: 'Ingeniería Química',
        fondo: 'ua.W.png',
        fondoOscuro: 'ua.B.png',
        grado: 'Pregrado',
        tipo: 'formal',
        descripcion: 'Carrera orientada al diseño y optimización de procesos industriales, con sólida formación en fisicoquímica, termodinámica, operaciones unitarias y análisis de materiales aplicados al sector de Hidrocarburos.',
        tesis: 'HEDA - Heat Exchanger Design Assistant: hoja de cálculo en Excel-VBA para el diseño de intercambiadores de calor',
        logros: [
          'Trabajo de grado calificado como Meritorio, con Mención Honorífica.',
          'Cuarto puesto a nivel Costa Caribe en las Pruebas ECAES (2005).',
        ],
      },
      {
        institucion: 'Servicio Nacional de Aprendizaje - SENA',
        fecha: 'Bogotá - 2018',
        estudio: 'Gestión en Laboratorios de Ensayo y Calibración - Norma ISO/IEC 17025',
        fondo: 'sena.W.png',
        fondoOscuro: 'sena.B.png',
        grado: 'Especialización Técnica',
        tipo: 'formal',
        descripcion: 'Especialización en implementación y gestión de sistemas de calidad para laboratorios de ensayo y calibración bajo los requisitos de la norma NTC ISO/IEC 17025.',
        tesis: null,
      },
      {
        institucion: 'Udemy',
        fecha: 'En línea - 2025',
        estudio: 'Python de Cero a Experto',
        fondo: 'udemy.W.png',
        fondoOscuro: 'udemy.B.png',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Curso de programación en Python desde los fundamentos hasta temas avanzados.',
        habilidades: ['Python'],
        duracion: '86,5 horas',
      },
      {
        institucion: 'Udemy',
        fecha: 'En línea - 2023',
        estudio: 'Power BI: BI y Dashboards Financieros',
        fondo: 'udemy.W.png',
        fondoOscuro: 'udemy.B.png',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Curso de inteligencia de negocios y construcción de tableros financieros en Power BI.',
        habilidades: ['Power BI'],
        duracion: '27 horas',
      },
      {
        institucion: 'Udemy',
        fecha: 'En línea - 2023',
        estudio: 'Frontend Web Developer',
        fondo: 'udemy.W.png',
        fondoOscuro: 'udemy.B.png',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Curso de desarrollo web frontend.',
        habilidades: ['HTML', 'CSS', 'JavaScript'],
        duracion: '30,5 horas',
      },
      {
        institucion: 'Universidad del Norte - MinTIC',
        fecha: 'Barranquilla - 2021',
        estudio: 'Desarrollo de Software',
        fondo: 'uninorte.W.png',
        fondoOscuro: 'uninorte.B.png',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Programa de formación en desarrollo web frontend con énfasis en las tecnologías fundamentales de la web moderna y control de versiones.',
        habilidades: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        duracion: '360 horas',
      },
      {
        institucion: 'Servicio Nacional de Aprendizaje - SENA',
        fecha: '2017',
        estudio: 'Manejo de Productos Químicos',
        fondo: 'sena.W.png',
        fondoOscuro: 'sena.B.png',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Curso sobre el manejo seguro de productos químicos.',
        habilidades: ['Productos químicos'],
        duracion: '40 horas',
      },
      {
        institucion: 'Servicio Nacional de Aprendizaje - SENA',
        fecha: '2016',
        estudio: 'English Dot Works 1 y 2',
        fondo: 'sena.W.png',
        fondoOscuro: 'sena.B.png',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Formación en inglés en dos niveles.',
        habilidades: ['Inglés'],
        duracion: '120 horas',
      },
      {
        institucion: 'Servicio Nacional de Aprendizaje - SENA',
        fecha: '2016',
        estudio: 'ISO 9001 - Fundamentación de un Sistema de Gestión de la Calidad',
        fondo: 'sena.W.png',
        fondoOscuro: 'sena.B.png',
        grado: 'Curso',
        tipo: 'corto',
        descripcion: 'Fundamentos de los sistemas de gestión de la calidad bajo la norma ISO 9001.',
        habilidades: ['ISO 9001'],
        duracion: '40 horas',
      },
      {
        institucion: 'Servicio Nacional de Aprendizaje - SENA',
        fecha: 'Bogotá - 2016',
        estudio: 'Manejo de Herramientas: Microsoft Excel',
        fondo: 'sena.W.png',
        fondoOscuro: 'sena.B.png',
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
        {
          titulo: 'Python',
          imagen: 'piton.png',
          parrafo: 'Lenguaje de programación usado para automatizar procesos operativos y construir herramientas de cálculo y análisis.',
          conocimiento: 'Intermedio',
          nivel: 70,
          anios: 3,
          categoria: 'Automatización y Datos',
          usos: [
            'Automatización de procesos con Robot JAVI y Robot CIEG.',
            'Tablero de escenarios proyectados de refinación.',
            'Herramientas informáticas para la operación del Centro de Cadena.',
          ],
        },
        {
          titulo: 'Power BI',
          imagen: 'powerbi.svg',
          parrafo: 'Herramienta de Business Intelligence para construir tableros de control y reportes a partir de datos operativos.',
          conocimiento: 'Avanzado',
          nivel: 80,
          anios: 3,
          categoria: 'Automatización y Datos',
          usos: [
            'Tableros de Escenarios Refinados y Gestión GIP.',
            'Centro de Información de Energía y Gas.',
            'Reportes técnicos para seguimiento gerencial.',
          ],
        },
      ],
    },
  },

  // Página de Proyectos
  proyectos: {
    items: [
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
