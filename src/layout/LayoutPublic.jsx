// Importacion de Outlet de React Router
import { Outlet } from 'react-router-dom'
// Importamos useMemo de React
import { useMemo } from 'react'
// Importamos CssBaseLine, Theme Provider y createTheme de mui Material
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
// Importamos themeSettings del arhivo theme
import NavBar from '../components/NavBar'
import { themeSettings } from '../theme'
import Footer, { ALTURA_FOOTER } from '../components/Footer'
// ? IMPORTACION DE MODULOS
import { useCVStore } from '../store/store'
// Importacion de Componentes

const LayoutPublic = () => {
  // Se hace uso de la Store
  const mode = useCVStore(state => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        {/* pb reserva la altura del footer fijo, que ya no ocupa sitio en el flujo */}
        <Box
          component='main'
          sx={{ flex: 1, display: 'flex', flexDirection: 'column', pb: ALTURA_FOOTER }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
export default LayoutPublic
