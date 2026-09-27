// Importacion de Outlet de React Router
import { Outlet } from 'react-router-dom'
// Importamos useMemo de React
import { Suspense, useMemo } from 'react'
// Importamos CssBaseLine, Theme Provider y createTheme de mui Material
import { Box, CircularProgress, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
// Importamos themeSettings del arhivo theme
import NavBar from '../components/NavBar'
import { themeSettings } from '../theme'
import Footer, { ALTURA_FOOTER } from '../components/Footer'
// ? IMPORTACION DE MODULOS
import { useCVStore } from '../store/store'
import { useMetadatosRuta } from '../hooks/useMetadatosRuta'
import { useT } from '../locales/useT'
// Importacion de Componentes

const LayoutPublic = () => {
  const t = useT()
  // Se hace uso de la Store
  const mode = useCVStore(state => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  // title, description, canonical, og:* y <html lang> segun la ruta y el idioma
  useMetadatosRuta()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Oculto hasta recibir foco por tabulacion: evita recorrer el menu
            entero en cada pagina antes de llegar al contenido */}
        <Box
          component='a'
          href='#contenido'
          sx={{
            position: 'absolute',
            left: '-9999px',
            zIndex: theme => theme.zIndex.tooltip,
            p: '0.75rem 1rem',
            backgroundColor: 'background.paper',
            color: 'primary.main',
            fontWeight: 'bold',
            textDecoration: 'none',
            '&:focus': { left: '0.5rem', top: '0.5rem' },
          }}
        >
          {t.nav.aria.saltarContenido}
        </Box>

        <NavBar />
        {/* pb reserva la altura del footer fijo, que ya no ocupa sitio en el flujo */}
        <Box
          component='main'
          id='contenido'
          sx={{ flex: 1, display: 'flex', flexDirection: 'column', pb: ALTURA_FOOTER }}
        >
          <Suspense
            fallback={
              <Box sx={{ flex: 1, display: 'grid', placeItems: 'center', p: '4rem' }}>
                <CircularProgress color='primary' aria-label={t.nav.aria.cargando} />
              </Box>
            }
          >
            <Outlet />
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
export default LayoutPublic
