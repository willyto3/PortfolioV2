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
  primary: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',
    600: '#FB8C00',
    700: '#F57C00',
    800: '#E65100',
    900: '#BF360C',
  },
}

// El naranja de marca (#FF9800) solo alcanza 2.06:1 sobre el fondo claro,
// muy por debajo del 4.5:1 que exige WCAG AA. Sobre fondo oscuro da 8.23:1,
// asi que el acento se define por modo en vez de compartir un unico valor.
const NARANJA_SOBRE_CLARO = '#C2410C' // 5.18:1 sobre #FFFFFF

// MUI usa primary.dark para el hover de los botones contained. Con el acento
// en #C2410C, el antiguo primary[700] (#F57C00) era mas CLARO que main: el
// boton se aclaraba al pasar el raton y caia a 2.70:1.
const NARANJA_HOVER_CLARO = '#9A3412' // 7.31:1 sobre #FFFFFF

// Fondo tenue para chips y pistas de progreso en modo oscuro: 15% de
// #FF9800 mezclado sobre background.paper. Sustituye a primary[800], que
// dejaba el texto del chip en 1.76:1.
const NARANJA_TENUE_OSCURO = '#413A2F'

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
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
              soft: NARANJA_TENUE_OSCURO,
              onSoft: colorTokens.primary[300],
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
              dark: NARANJA_HOVER_CLARO,
              main: NARANJA_SOBRE_CLARO,
              light: colorTokens.primary[50],
              soft: colorTokens.primary[50],
              onSoft: NARANJA_SOBRE_CLARO,
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
