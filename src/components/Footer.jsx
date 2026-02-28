import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const neutralLigth = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const principal = theme.palette.primary.main

  return (
    <>
      <Paper>
        <Grid
          container
          mt='1rem'
          pb='1rem'
          spacing={2}
          alignItems='stretch'
          justifyContent='center'
          sx={{ backgroundColor: neutralLigth, px: { xs: '1rem', sm: '2rem' } }}
        >
          {/* Columna 1 / Fila 1 izq: Nombre */}
          <Grid
            size={{ xs: 6, md: 3 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'flex-start', md: 'center' },
              order: { xs: 1, md: 1 },
            }}
          >
            <Typography
              fontWeight='bold'
              fontSize='clamp(1.8rem, 3vw, 2.8rem)'
              lineHeight='1.1'
              component='div'
              color={dark}
              textAlign={{ xs: 'left', md: 'center' }}
              sx={{
                '&:hover': { color: principal, cursor: 'pointer' },
              }}
              onClick={() => navigate('/')}
            >
              Willy Corzo
            </Typography>
          </Grid>

          {/* Columna 2 / Fila 2: Descripción */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ order: { xs: 3, md: 2 } }}
          >
            <Typography variant='h4' component='div' mt={{ xs: 0, md: '1rem' }}>
              Ingeniero Químico con 14 años de experiencia en Transferencia en
              Custodia, Medición y Análisis de Hidrocarburos. Orientado a
              resultados y a crear soluciones automatizadas.
            </Typography>
          </Grid>

          {/* Columna 3 / Fila 1 der: Redes Sociales */}
          <Grid
            size={{ xs: 6, md: 3 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'flex-end', md: 'center' },
              order: { xs: 2, md: 3 },
            }}
          >
            <Box display='flex' gap='0.25rem'>
              <IconButton
                aria-label='LinkedIn'
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/ing-quimico-willy-corzo/',
                    '_blank'
                  )
                }
                sx={{ '&:hover': { color: '#0e76a8' } }}
              >
                <LinkedInIcon sx={{ fontSize: { xs: 36, sm: 40 } }} />
              </IconButton>

              <IconButton
                aria-label='GitHub'
                onClick={() =>
                  window.open('https://github.com/willyto3', '_blank')
                }
                sx={{ '&:hover': { color: principal } }}
              >
                <GitHubIcon sx={{ fontSize: { xs: 36, sm: 40 } }} />
              </IconButton>

              <IconButton
                aria-label='WhatsApp'
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send?phone=573017893883&text=Me%20interesa%20Saber%20m%C3%A1s%20sobre%20tu%20Hoja%20de%20Vida',
                    '_blank'
                  )
                }
                sx={{ '&:hover': { color: '#00bb2d' } }}
              >
                <WhatsAppIcon sx={{ fontSize: { xs: 36, sm: 40 } }} />
              </IconButton>
            </Box>
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
          fontSize={{ xs: '0.6rem', sm: '0.75rem' }}
          textAlign='center'
        >
          Made With 💖 by Black Dog Solutions -{' '}
          {`Todos los derechos reservados. @ ${new Date().getFullYear()}`}
        </Typography>
      </Box>
    </>
  )
}
export default Footer
