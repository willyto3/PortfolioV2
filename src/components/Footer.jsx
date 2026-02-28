import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { t } from '../locales'

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
          mt='0'
          pt='1rem'
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
              {t.nav.nombre}
            </Typography>
          </Grid>

          {/* Columna 2 / Fila 2: Descripción */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ order: { xs: 3, md: 2 } }}
          >
            <Typography variant='h4' component='div' mt={{ xs: 0, md: '1rem' }}>
              {t.footer.descripcion}
            </Typography>
          </Grid>

          {/* Columna 3 / Fila 1 der: Contacto + Redes */}
          <Grid
            size={{ xs: 6, md: 3 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'flex-end', md: 'center' },
              justifyContent: 'center',
              order: { xs: 2, md: 3 },
            }}
          >
            {/* Iconos de redes sociales */}
            <Box display='flex' gap='0.25rem'>
              <IconButton
                aria-label='LinkedIn'
                onClick={() => window.open(t.contacto.linkedin, '_blank')}
                sx={{ '&:hover': { color: '#0e76a8' } }}
              >
                <LinkedInIcon sx={{ fontSize: { xs: 36, sm: 40 } }} />
              </IconButton>

              <IconButton
                aria-label='GitHub'
                onClick={() => window.open(t.contacto.github, '_blank')}
                sx={{ '&:hover': { color: principal } }}
              >
                <GitHubIcon sx={{ fontSize: { xs: 36, sm: 40 } }} />
              </IconButton>

              <IconButton
                aria-label='WhatsApp'
                onClick={() => window.open(t.contacto.whatsapp, '_blank')}
                sx={{ '&:hover': { color: '#00bb2d' } }}
              >
                <WhatsAppIcon sx={{ fontSize: { xs: 36, sm: 40 } }} />
              </IconButton>
            </Box>

            {/* Teléfono y Email */}
            <Box display='flex' flexDirection='column' alignItems={{ xs: 'flex-end', md: 'center' }} gap='0.2rem' mt='0.4rem'>
              <Box display='flex' alignItems='center' gap='0.3rem'>
                <PhoneIcon sx={{ fontSize: '1rem', color: principal }} />
                <Typography component='a' href={`tel:${t.contacto.telefono}`}
                  fontSize='clamp(0.7rem, 1.2vw, 0.85rem)'
                  sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: principal } }}
                >
                  {t.contacto.telefono}
                </Typography>
              </Box>
              <Box display='flex' alignItems='center' gap='0.3rem'>
                <EmailIcon sx={{ fontSize: '1rem', color: principal }} />
                <Typography component='a' href={`mailto:${t.contacto.email}`}
                  fontSize='clamp(0.7rem, 1.2vw, 0.85rem)'
                  sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: principal } }}
                >
                  {t.contacto.email}
                </Typography>
              </Box>
            </Box>

            <Typography
              component='div'
              fontSize={{ xs: '0.6rem', sm: '0.75rem' }}
              textAlign={{ xs: 'right', md: 'center' }}
              mt='0.5rem'
            >
              {`${t.footer.hechoCon} @ ${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
export default Footer
