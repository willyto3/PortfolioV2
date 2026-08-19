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
import { Tab, Tabs, useTheme } from '@mui/material'

import { useState } from 'react'

import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'

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

  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const dark = theme.palette.neutral.dark
  const principal = theme.palette.primary.main
  const isDark = theme.palette.mode === 'dark'

  const routeToIndex = Object.fromEntries(t.nav.items.map((item, i) => [item.ruta, i]))
  // false = ninguna pestaña marcada, para rutas que no estan en el menu (404)
  const value = routeToIndex[location.pathname] ?? false

  const langButton = (
    <IconButton
      aria-label={t.nav.aria.cambiarIdioma}
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      title={t.nav.cambiarIdiomaTitulo}
    >
      <BanderaIcono code={language === 'es' ? 'us' : 'co'} />
    </IconButton>
  )

  const themeButton = (
    <IconButton aria-label={t.nav.aria.cambiarTema} onClick={setMode}>
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

      <List>
        {t.nav.items.map(item => (
          <ListItem key={item.ruta} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => { navigate(item.ruta); setMobileOpen(false) }}
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
      component='nav'
      color='inherit'
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: theme => theme.zIndex.drawer + 1,
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
            display: { xs: 'block', sm: 'none' },
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
          sx={{ display: { xs: 'flex', sm: 'none' }, color: dark }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant='h1'
          component='h1'
          fontWeight='bold'
          fontSize='clamp(1.5rem, 2.5vw, 3.3rem)'
          sx={{
            flexGrow: 1,
            lineHeight: 1.2,
            textAlign: { xs: 'center', sm: 'left' },
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

        {/* //? TABS - solo desktop */}
        <Tabs
          value={value}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {t.nav.items.map(item => (
            <Tab
              label={item.label}
              key={item.ruta}
              onClick={() => navigate(item.ruta)}
              sx={{
                height: 65,
                color: dark,
                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                textTransform: 'capitalize',
                flexGrow: 1,
                '&:hover': { color: principal },
              }}
            />
          ))}
        </Tabs>

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
