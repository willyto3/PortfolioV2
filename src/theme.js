// color design tokens export
export const colorTokens = {
  grey: {
    0: '#FFFFFF',
    10: '#F6F6F6',
    50: '#F0F0F0',
    100: '#E0E0E0',
    200: '#C2C2C2',
    300: '#A3A3A3',
    400: '#858585',
    500: '#666666',
    600: '#4D4D4D',
    700: '#333333',
    800: '#1A1A1A',
    900: '#0A0A0A',
    1000: '#000000',
  },
  // Azul del CV maestro (#1F4E79), para que portafolio y hoja de vida se
  // lean como una sola marca.
  primary: {
    50: '#E8F0F8',
    100: '#BFD9F2',
    200: '#8AB8E6',
    300: '#5E95CC',
    400: '#3A73AA',
    500: '#1F4E79',
    600: '#163A5A',
  },
}

// El azul del CV (#1F4E79) da 8.66:1 sobre blanco pero se hunde sobre la
// tarjeta oscura, asi que el acento se define por modo: en oscuro se usa un
// azul claro de la misma familia (#8AB8E6, 7.05:1 sobre #1F2937).
const AZUL_SOBRE_CLARO = '#1F4E79' // 8.66:1 sobre #FFFFFF
const AZUL_SOBRE_OSCURO = '#8AB8E6' // 7.05:1 sobre #1F2937

// MUI usa primary.dark para el hover de los botones contained: tiene que
// alejarse del fondo, no acercarse. En claro oscurece, en oscuro aclara.
const AZUL_HOVER_CLARO = '#163A5A' // 11.75:1 sobre #FFFFFF
const AZUL_HOVER_OSCURO = '#BFD9F2' // 10.08:1 sobre #1F2937

// Fondo tenue para chips y pistas de progreso en modo oscuro: 15% de
// #8AB8E6 mezclado sobre background.paper. El texto del chip (primary[100])
// queda a 7.48:1 sobre el.
const AZUL_TENUE_OSCURO = '#2F3E51'

// La tarjeta y la barra rellena solo distan 6.81:1, asi que ninguna pista de
// color plano puede estar a 3:1 de ambas a la vez. Se prioriza que la barra
// destaque (5.21:1) y la extension de la pista se marca con este borde.
const BORDE_TENUE_OSCURO = '#6B7280' // 3.04:1 sobre #1F2937
const BORDE_TENUE_CLARO = '#767676' // 4.54:1 sobre #FFFFFF

// mui theme settings
export const themeSettings = mode => {
  return {
    palette: {
      mode,
      // Los logos de instituciones, herramientas y proyectos estan disenados
      // para fondo claro. Unos son tinta casi negra con alfa (React y
      // JavaScript quedan en 1.43:1 sobre la tarjeta oscura, Isabel I en
      // 2.14:1) y otros traen un fondo blanco opaco horneado, que en oscuro
      // se ve como una caja deslumbrante a 13:1. Ambos casos se resuelven
      // pintandolos siempre sobre esta placa. En modo claro coincide con
      // background.paper, asi que alli no se nota nada.
      placaLogo: '#FFFFFF',
      // La pagina y la tarjeta solo distan 1.05:1 en claro y 1.21:1 en oscuro,
      // asi que hoy el canto de las tarjetas existe unicamente por la sombra de
      // elevacion: con sombras desactivadas o contraste forzado, la estructura
      // de la pagina desaparece. Este borde lo hace explicito sin tocar los
      // fondos: 1.78:1 sobre la tarjeta clara y 2.56:1 sobre la oscura.
      bordeSuperficie: mode === 'dark' ? colorTokens.grey[500] : colorTokens.grey[200],
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              dark: AZUL_HOVER_OSCURO,
              main: AZUL_SOBRE_OSCURO,
              light: colorTokens.primary[500],
              soft: AZUL_TENUE_OSCURO,
              onSoft: colorTokens.primary[100],
              softBorder: BORDE_TENUE_OSCURO,
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: '#111827',
              alt: '#1F2937',
              // Sin esto MUI usa su #121212, que contra el #111827 de la
              // pagina da 1.06:1 y deja la barra de navegacion invisible.
              paper: '#1F2937',
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: AZUL_HOVER_CLARO,
              main: AZUL_SOBRE_CLARO,
              light: colorTokens.primary[50],
              soft: colorTokens.primary[50],
              onSoft: AZUL_SOBRE_CLARO,
              softBorder: BORDE_TENUE_CLARO,
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: '#F9FAFB',
              alt: '#FFFFFF',
              paper: '#FFFFFF',
            },
          }),
    },
    typography: {
      fontFamily: ['Fira Sans', 'sans-serif'].join(','),
      fontSize: 14,
      h1: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 'clamp(2.25rem, 5vw, 5rem)',
        lineHeight: 1.15,
      },
      h2: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 'clamp(1.375rem, 2.75vw, 2.25rem)',
        lineHeight: 1.2,
      },
      h3: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
        lineHeight: 1.3,
      },
      h4: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)',
        lineHeight: 1.35,
      },
      h5: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 14,
      },
      body1: {
        fontSize: 'clamp(0.95rem, 1vw, 1.125rem)',
        lineHeight: 1.6,
      },
    },
  }
}
