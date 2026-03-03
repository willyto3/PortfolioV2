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

import { useState, useEffect } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

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

  const routeToIndex = Object.fromEntries(t.nav.items.map((item, i) => [item.ruta, i]))
  const [value, setValue] = useState(routeToIndex[location.pathname] ?? 0)

  useEffect(() => {
    setValue(routeToIndex[location.pathname] ?? 0)
  }, [location.pathname])

  const langButtons = (
    <IconButton
      aria-label='cambiar idioma'
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {language === 'es' ? (
        <span className='fi fi-us' style={{ fontSize: '1.4rem', borderRadius: '3px' }} />
      ) : (
        <span className='fi fi-co' style={{ fontSize: '1.4rem', borderRadius: '3px' }} />
      )}
    </IconButton>
  )

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box display='flex' justifyContent='space-between' alignItems='center' px={1}>
        <Typography
          fontWeight='bold'
          fontSize='1.5rem'
          sx={{
            my: 2,
            ml: 1,
            '&:hover': { color: principal, cursor: 'pointer' },
          }}
          onClick={() => { navigate('/'); setMobileOpen(false) }}
        >
          {t.nav.nombre}
        </Typography>
        <IconButton aria-label='cerrar menú' onClick={handleDrawerToggle}>
          <Close />
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
        <IconButton aria-label='cambiar tema' onClick={() => setMode()}>
          {theme.palette.mode === 'dark' ? (
            <LightMode sx={{ color: dark, fontSize: '1.5rem' }} />
          ) : (
            <DarkMode sx={{ fontSize: '1.5rem' }} />
          )}
        </IconButton>
        {langButtons}
      </Box>
    </Box>
  )

  return (
    <AppBar
      component='nav'
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
          color='inherit'
          aria-label='abrir menú'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          fontWeight='bold'
          fontSize='clamp(1.5rem, 2.5vw, 3.3rem)'
          lineHeight='1'
          component='div'
          color={dark}
          sx={{
            flexGrow: 1,
            textAlign: { xs: 'center', sm: 'left' },
            '&:hover': { color: principal, cursor: 'pointer' },
          }}
          onClick={() => navigate('/')}
        >
          {t.nav.nombre}
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
                fontSize: '1rem',
                textTransform: 'capitalize',
                flexGrow: 1,
                '&:hover': { color: principal },
              }}
            />
          ))}
        </Tabs>

        {/* //? SELECTOR DE IDIOMA + BOTON TEMA */}
        <Box display='flex' alignItems='center'>
          {langButtons}
          <IconButton aria-label='cambiar tema' onClick={() => setMode()}>
            {theme.palette.mode === 'dark' ? (
              <LightMode
                sx={{
                  color: dark,
                  fontSize: '1.5rem',
                  '&:hover': { color: '#f39f18', cursor: 'pointer' },
                }}
              />
            ) : (
              <DarkMode
                sx={{
                  fontSize: '1.5rem',
                  '&:hover': { color: '#3c688e', cursor: 'pointer' },
                }}
              />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
