import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
  capitalize,
  useTheme,
} from '@mui/material'

import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { setMode } from '../state'

import { Link, useNavigate } from 'react-router-dom'

const navItems = ['inicio', 'experiencia', 'estudios', 'proyectos', 'contacto']

const Footer = () => {
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

  return (
    <>
      <Paper
        sx={{
          backgroundImage:
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='250' preserveAspectRatio='none' viewBox='0 0 1920 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1032%26quot%3b)' fill='none'%3e%3cpath d='M58 250L308 0L582.5 0L332.5 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M378.8 250L628.8 0L1081.8 0L831.8 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M681.6 250L931.6 0L985.6 0L735.6 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M956.4000000000001 250L1206.4 0L1297.9 0L1047.9 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M1866 250L1616 0L1515.5 0L1765.5 250z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3cpath d='M1542.2 250L1292.2 0L921.7 0L1171.7 250z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3cpath d='M1265.4 250L1015.4000000000001 0L718.4000000000001 0L968.4000000000001 250z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3cpath d='M910.5999999999999 250L660.5999999999999 0L293.0999999999999 0L543.0999999999999 250z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3cpath d='M1749.9186966054617 250L1920 79.91869660546172L1920 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M0 250L170.08130339453828 250L 0 79.91869660546172z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1032'%3e%3crect width='1920' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1033'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1034'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
        }}
      >
        <Grid
          container
          mt='1rem'
          spacing={1}
          alignContent='center'
          justifyContent='center'
          gap='2rem'
          sx={{ backgroundColor: neutralLigth }}
        >
          <Grid item xs={10} sm={3}>
            <Typography
              fontWeight='bold'
              fontSize='clamp(1.5rem, 1.5rem, 2rem)'
              lineHeight='1'
              component='div'
              color={dark}
              mb='1rem'
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
            <Typography
              variant='h4'
              component='div'
              align='justify'
              fontSize={{ xs: '1rem', sm: '1.5rem' }}
            >
              Ingeniero Químico con 14 años de experiencia en Transferencia en
              Custodia, Medición y Analisis de Hidrocarburos. Orientado a
              resultados y a crear soluciones automatizadas.
            </Typography>
          </Grid>

          <Grid item xs={10} sm={2}>
            <Typography
              fontWeight='bold'
              fontSize='clamp(1.5rem, 1.5rem, 2rem)'
              lineHeight='1'
              component='div'
              color={dark}
              mb='1rem'
              sx={{
                flexGrow: 1,
              }}
            >
              Redes Sociales
            </Typography>
            <Grid container>
              <Grid item xs={4}>
                <LinkedInIcon
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/ing-quimico-willy-corzo/',
                      '_blank'
                    )
                  }
                  sx={{
                    fontSize: 60,
                    flexGrow: 1,
                    '&:hover': {
                      color: '#0e76a8',
                      cursor: 'pointer',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <GitHubIcon
                  onClick={() =>
                    window.open('https://github.com/willyto3', '_blank')
                  }
                  sx={{
                    fontSize: 60,
                    flexGrow: 1,
                    '&:hover': {
                      color: principal,
                      cursor: 'pointer',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <WhatsAppIcon
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send?phone=573017893883&text=Me%20interesa%20Saber%20m%C3%A1s%20sobre%20tu%20Hoja%20de%20Vida',
                      '_blank'
                    )
                  }
                  sx={{
                    fontSize: 60,
                    flexGrow: 1,
                    '&:hover': {
                      color: '#00bb2d',
                      cursor: 'pointer',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10} sm={3}>
            <Typography
              fontWeight='bold'
              fontSize='clamp(1.5rem, 1.5rem, 2rem)'
              lineHeight='1'
              component='div'
              color={dark}
              mb='1rem'
              sx={{
                flexGrow: 1,
              }}
            >
              Mapa
            </Typography>
            <Grid container>
              {/* //? NAVEGACION POR ITEMS*/}

              {navItems.map(item => (
                <Grid item xs={4} key={item}>
                  <ListItem disablePadding>
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
                          {capitalize(item)}
                        </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Divider />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        mt='1rem'
        pb='1rem'
      >
        <Typography
          variant='h4'
          component='div'
          fontSize={{ xs: '0.7rem', sm: '1.1rem' }}
        >
          Made With 💖 by Black Dog Solutions
        </Typography>
        <Typography
          variant='h4'
          component='div'
          fontSize={{ xs: '0.7rem', sm: '1.1rem' }}
        >
          {`Todos los derechos reservados. @ ${new Date().getFullYear()}`}
        </Typography>
      </Box>
    </>
  )
}
export default Footer
