// Importacion de Outlet de React Router
import { Outlet } from 'react-router-dom'
// Importamos useMemo de React
import { useMemo } from 'react'
// Importamos useSelector de React Redux
import { useSelector } from 'react-redux'
// Importamos CssBaseLine, Theme Provider y createTheme de mui Material
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
// Importamos themeSettings del arhivo theme
import NavBar from '../components/NavBar'
import { themeSettings } from '../theme'
// Importacion de Componentes

const LayoutPublic = () => {
  const mode = useSelector(state => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </main>
  )
}
export default LayoutPublic
