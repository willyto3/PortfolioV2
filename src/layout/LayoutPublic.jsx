// Importacion de Outlet de React Router
import { Outlet } from 'react-router-dom'
// Importamos useMemo de React
import { useMemo } from 'react'
// Importamos CssBaseLine, Theme Provider y createTheme de mui Material
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
// Importamos themeSettings del arhivo theme
import NavBar from '../components/NavBar'
import { themeSettings } from '../theme'
import Footer from '../components/Footer'
// ? IMPORTACION DE MODULOS
import { useCVStore } from '../store/store'
// Importacion de Componentes

const LayoutPublic = () => {
  // Se hace uso de la Store
  const mode = useCVStore(state => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </main>
  )
}
export default LayoutPublic
