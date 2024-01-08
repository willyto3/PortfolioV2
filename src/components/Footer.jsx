import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  Divider,
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  capitalize,
  useTheme,
} from '@mui/material'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const navItems = ['inicio', 'experiencia', 'estudios', 'proyectos', 'contacto']

const Footer = () => {
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
      <Paper>
        <Grid
          container
          mt='1rem'
          pb='1rem'
          spacing={1}
          alignContent='center'
          justifyContent='center'
          gap='2rem'
          sx={{ backgroundColor: neutralLigth }}
        >
          <Grid item xs={10} sm={3}>
            <Typography
              fontWeight='bold'
              fontSize='clamp(1rem, 1.25rem, 1.5rem)'
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
              fontSize={{ xs: '0.75rem', sm: '1rem' }}
            >
              Ingeniero Químico con 14 años de experiencia en Transferencia en
              Custodia, Medición y Analisis de Hidrocarburos. Orientado a
              resultados y a crear soluciones automatizadas.
            </Typography>
          </Grid>

          <Grid item xs={10} sm={2}>
            <Typography
              fontWeight='bold'
              fontSize='clamp(1rem, 1.25rem, 1.5rem)'
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
                    fontSize: 50,
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
                    fontSize: 50,
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
                    fontSize: 50,
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
        </Grid>
      </Paper>

      <Divider />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        mt='0.5rem'
        pb='1rem'
      >
        <Typography
          variant='h4'
          component='div'
          fontSize={{ xs: '0.5rem', sm: '1rem' }}
        >
          Made With 💖 by Black Dog Solutions -{' '}
          {`Todos los derechos reservados. @ ${new Date().getFullYear()}`}
        </Typography>
      </Box>
    </>
  )
}
export default Footer
