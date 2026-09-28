import { Close, DarkMode, LightMode } from '@mui/icons-material'

// ? IMPORTACION DE ELEMENTOS DE DISEÑO
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'

import { useState } from 'react'

import { Link as RouterLink, useLocation } from 'react-router-dom'

import BanderaIcono from './BanderaIcono'
import { useCVStore } from '../store/store'
import { useT } from '../locales/useT'

const drawerWidth = 280

const NavBar = () => {
  const t = useT()
  const setMode = useCVStore(state => state.setMode)
  const language = useCVStore(state => state.language)
  const setLanguage = useCVStore(state => state.setLanguage)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const location = useLocation()
  const theme = useTheme()
  const dark = theme.palette.neutral.dark
  const principal = theme.palette.primary.main
  const isDark = theme.palette.mode === 'dark'

  const langButton = (
    <IconButton
      aria-label={t.nav.aria.cambiarIdiomaA}
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      title={t.nav.cambiarIdiomaTitulo}
    >
      <BanderaIcono code={language === 'es' ? 'us' : 'co'} />
    </IconButton>
  )

  const themeButton = (
    <IconButton
      aria-label={isDark ? t.nav.aria.temaAClaro : t.nav.aria.temaAOscuro}
      onClick={setMode}
    >
      {isDark ? (
        <LightMode
          sx={{
            color: dark,
            fontSize: '1.5rem',
            '&:hover': { color: principal, cursor: 'pointer' },
          }}
        />
      ) : (
        <DarkMode
          sx={{
            color: dark,
            fontSize: '1.5rem',
            '&:hover': { color: principal, cursor: 'pointer' },
          }}
        />
      )}
    </IconButton>
  )

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box display='flex' justifyContent='space-between' alignItems='center' px={1}>
        <Typography
          component={RouterLink}
          to='/'
          fontWeight='bold'
          fontSize='1.5rem'
          sx={{
            my: 2,
            ml: 1,
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': { color: principal },
          }}
          onClick={() => setMobileOpen(false)}
        >
          {t.nav.nombre}
        </Typography>
        <IconButton aria-label={t.nav.aria.cerrarMenu} onClick={handleDrawerToggle}>
          <Close sx={{ color: dark }} />
        </IconButton>
      </Box>

      <Divider />

      <List component='nav' aria-label={t.nav.aria.navegacion}>
        {t.nav.items.map(item => (
          <ListItem key={item.ruta} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.ruta}
              aria-current={location.pathname === item.ruta ? 'page' : undefined}
              sx={{ textAlign: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText>
                <Typography
                  fontSize='1rem'
                  sx={{
                    textTransform: 'capitalize',
                    '&:hover': { color: principal, cursor: 'pointer' },
                  }}
                >
                  {item.label}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box display='flex' justifyContent='center' alignItems='center' gap='0.5rem' mb={1}>
        {themeButton}
        {langButton}
      </Box>
    </Box>
  )

  return (
    <AppBar
      component='header'
      color='inherit'
      sx={{
        position: 'sticky',
        top: 0,
        // drawer + 1 es el patron de un cajon PERMANENTE bajo una barra
        // completa. Aqui el cajon es temporal y con backdrop, asi que con ese
        // valor la barra se colocaba sobre sus 65px superiores y ocultaba el
        // titulo y el aspa de cerrar del propio cajon. El cajon va encima.
        zIndex: theme => theme.zIndex.appBar,
        backgroundColor: 'background.paper',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* //? MENU DESPLEGABLE MOBILE */}
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* //? BOTON HAMBURGUESA - solo mobile */}
        <IconButton
          aria-label={t.nav.aria.abrirMenu}
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'flex', lg: 'none' }, color: dark }}
        >
          <MenuIcon />
        </IconButton>

        {/* El nombre no es el h1: cada pagina aporta el suyo. Si lo fuera, las
            cinco paginas compartirian encabezado y ninguna tendria el propio. */}
        <Typography
          variant='h1'
          component='div'
          fontWeight='bold'
          fontSize='clamp(1.5rem, 2.5vw, 3.3rem)'
          sx={{
            flexGrow: 1,
            lineHeight: 1.2,
            textAlign: { xs: 'center', lg: 'left' },
            m: 0,
          }}
        >
          <Box
            component={RouterLink}
            to='/'
            sx={{
              color: dark,
              textDecoration: 'none',
              '&:hover': { color: principal },
            }}
          >
            {t.nav.nombre}
          </Box>
        </Typography>

        {/* //? NAVEGACION - solo desktop */}
        {/* Enlaces reales, no Tabs. role=tab anuncia un panel que aqui no
            existe, y su roving tabindex dejaba solo la pestaña activa
            alcanzable con el tabulador. Ademas un <button> sin href no se
            puede abrir en otra pestaña ni lo ve un rastreador.
            Las cinco suman 533px, asi que solo entran a partir de lg; por
            debajo manda el cajon, que las lista todas. */}
        <Box
          component='nav'
          aria-label={t.nav.aria.navegacion}
          sx={{ display: { xs: 'none', lg: 'flex' }, alignSelf: 'stretch' }}
        >
          {t.nav.items.map(item => {
            const activo = location.pathname === item.ruta
            return (
              <Box
                key={item.ruta}
                component={RouterLink}
                to={item.ruta}
                aria-current={activo ? 'page' : undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  color: activo ? principal : dark,
                  fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                  textTransform: 'capitalize',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  // el subrayado marca la ruta actual; transparente para que
                  // el alto no cambie al pasar de una a otra
                  borderBottom: '2px solid',
                  borderBottomColor: activo ? principal : 'transparent',
                  '&:hover': { color: principal },
                }}
              >
                {item.label}
              </Box>
            )
          })}
        </Box>

        {/* //? SELECTOR DE IDIOMA + BOTON TEMA */}
        <Box display='flex' alignItems='center'>
          {langButton}
          {themeButton}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
