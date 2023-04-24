import { Close, DarkMode, LightMode } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { setMode } from '../state'

import { useNavigate } from 'react-router-dom'

const drawerWidth = 425
const navItems = ['inicio', 'experiencia', 'estudios', 'proyectos', 'contacto']

const NavBar = () => {
  // Usamos useState para poder asignar si el menu se encuetra visible
  const [mobileOpen, setMobileOpen] = useState(false)
  // Creamos una funcion para cambiar el estado del menu
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }
  // Usamos el Dispatch
  const dispatch = useDispatch()
  // Usamos la navegacion
  const navigate = useNavigate()
  // Uso del Tema
  const theme = useTheme()
  // Creamos constantes para los colores
  const neutralLigth = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const principal = theme.palette.primary.main

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box display='flex' justifyContent='space-evenly'>
        <Typography
          fontWeight='bold'
          fontSize='max(2rem, 1.2vw)'
          sx={{
            my: 2,
            '&:hover': {
              color: principal,
              cursor: 'pointer',
            },
          }}
        >
          Willy Corzo
        </Typography>
        {/* //? ICONO PARA CERRAR */}
        <IconButton>
          <Close />
        </IconButton>
      </Box>

      <Divider />

      {/* //? NAVEGACION POR ITEMS*/}
      <List>
        {navItems.map(item => (
          
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                item === 'inicio' ? navigate('/') : navigate(`/${item}`)
              }}
            >
              <ListItemText>
                <Typography
                  fontSize='max(0.9rem, 1.2vw)'
                  sx={{
                    flexGrow: 1,
                    '&:hover': {
                      color: principal,
                      cursor: 'pointer',
                    },
                  }}
                >
                  {item}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* //? BOTON PARA CAMBIAR EL TEMA */}
      <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === 'dark' ? (
          <LightMode
            sx={{
              color: dark,
              fontSize: '20px',
              '&:hover': {
                color: '#f39f18',
                cursor: 'pointer',
              },
            }}
          />
        ) : (
          <DarkMode
            sx={{
              fontSize: '20px',
              '&:hover': {
                color: '#3c688e',
                cursor: 'pointer',
              },
            }}
          />
        )}
      </IconButton>
    </Box>
  )

  return (
    <AppBar sx={{ backgroundColor: neutralLigth }}>
      <Toolbar>
        {/* //? MENU DESPLEGABLE */}
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
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

        <Typography
          fontWeight='bold'
          fontSize='clamp(2rem, 2rem, 3.3rem)'
          lineHeight='1'
          component='div'
          color={dark}
          sx={{
            flexGrow: 1,
            '&:hover': {
              color: principal,
              cursor: 'pointer',
            },
          }}
          onClick={() => navigate('/')}
        >
          Willy Corzo
        </Typography>

        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* //? NAVEGACION POR ITEMS*/}
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {navItems.map(item => (
            <Tab
              label={item}
              key={item}
              onClick={() => {
                item === 'inicio' ? navigate('/') : navigate(`/${item}`)
              }}
              sx={{
                height: 65,
                color: dark,
                fontSize: 25,
                flexGrow: 1,
                '&:hover': {
                  color: principal,
                },
              }}
            ></Tab>
          ))}
        </Tabs>

        {/* //? BOTON PARA CAMBIAR EL TEMA */}
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === 'dark' ? (
            <LightMode
              sx={{
                color: dark,
                fontSize: '25px',
                '&:hover': {
                  color: '#f39f18',
                  cursor: 'pointer',
                },
              }}
            />
          ) : (
            <DarkMode
              sx={{
                fontSize: '25px',
                '&:hover': {
                  color: '#3c688e',
                  cursor: 'pointer',
                },
              }}
            />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
