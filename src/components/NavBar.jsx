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
  Typography,
  useTheme,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { setMode } from '../state'

import { useNavigate } from 'react-router-dom'

import FlexBetween from './FlexBetween'

const drawerWidth = 425
const navItems = ['Inicio', 'Experiencia', 'Estudios', 'Proyectos', 'Contactos']

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box display='flex' justifyContent='space-evenly'>
        <Typography
          fontWeight='bold'
          fontSize='max(2rem, 1.2vw)'
          sx={{
            my: 2,
            '&:hover': {
              color: theme.palette.primary.main,
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
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
                <Typography
                  fontSize='max(0.9rem, 1.2vw)'
                  sx={{
                    flexGrow: 1,
                    '&:hover': {
                      color: theme.palette.primary.main,
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
    <Box component='nav'>
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

      <FlexBetween padding='1rem 6%' backgroundColor={neutralLigth}>
        <Typography
          fontWeight='bold'
          fontSize='clamp(2rem, 2rem, 3.3rem)'
          lineHeight='1'
          component='div'
          color={dark}
          sx={{
            flexGrow: 1,
            '&:hover': {
              color: theme.palette.primary.main,
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
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {navItems.map(item => (
            <Button key={item} sx={{ color: dark }}>
              <Typography
                fontSize='max(0.9rem, 1.2vw)'
                sx={{
                  flexGrow: 1,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    cursor: 'pointer',
                  },
                }}
              >
                {item}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* //? BOTON PARA CAMBIAR EL TEMA */}
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === 'dark' ? (
            <LightMode
              sx={{
                color: dark,
                fontSize: '25px',
                display: { xs: 'none', sm: 'flex' },
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
                display: { xs: 'none', sm: 'flex' },
                '&:hover': {
                  color: '#3c688e',
                  cursor: 'pointer',
                },
              }}
            />
          )}
        </IconButton>
      </FlexBetween>
    </Box>
  )
}
export default NavBar
