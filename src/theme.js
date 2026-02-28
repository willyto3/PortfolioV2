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
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
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
            },
          }),
    },
    typography: {
      fontFamily: ['Fira Sans', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 'clamp(2.5rem, 8vw, 7rem)',
      },
      h2: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
      },
      h3: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      },
      h4: {
        fontFamily: ['Fira Sans', 'sans-serif'].join(','),
        fontSize: 'clamp(0.85rem, 1.7vw, 1.25rem)',
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
        fontSize: 'clamp(0.75rem, 1.5vw, 1.5rem)',
      },
    },
  }
}
