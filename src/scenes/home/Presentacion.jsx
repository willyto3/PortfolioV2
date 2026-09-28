import { Box, Button, Chip, Divider, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Link as RouterLink } from 'react-router-dom'
import { RotadorRoles } from './RotadorRoles'

import { useT } from '../../locales/useT'

const Presentacion = () => {
  const t = useT()
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
      <Typography variant='h2' component='p' color='text.secondary' sx={{ m: 0 }}>
        {t.home.saludo}
      </Typography>

      <Typography
        variant='h1'
        component='h1'
        fontWeight='bold'
        sx={{ color: primary, lineHeight: 1.1, m: 0 }}
      >
        {t.home.nombre}
      </Typography>

      <Divider
        sx={{
          my: '1rem',
          borderColor: primary,
          borderBottomWidth: 3,
          width: { xs: '60%', lg: '40%' },
          mx: { xs: 'auto', lg: 0 },
        }}
      />

      <RotadorRoles />

      <Box
        sx={{
          // El ancho lo fijan ya maxWidth y el padding de los contenedores; el
          // 95% anterior solo restaba un margen derecho asimetrico.
          maxWidth: '72ch',
          mx: { xs: 'auto', lg: 0 },
          mt: '1.5rem',
          // Sin regla lateral: el naranja ya marca el nombre, el divisor, el
          // rol, el boton solido y los chips. Un sexto acento aqui no anadia
          // jerarquia, solo competia. Sin padding la bio alinea su borde
          // izquierdo con el rotador, los botones y los chips.
        }}
      >
        {t.home.bio.map((parrafo, i) => (
          <Typography
            key={i}
            variant='body1'
            component='p'
            sx={{
              color: 'text.secondary',
              mt: i === 0 ? 0 : '0.75rem',
              mb: 0,
            }}
          >
            {parrafo}
          </Typography>
        ))}
      </Box>

      {/* La portada terminaba sin nada que pulsar. El solido marca el camino
          que interesa a un reclutador; el de borde abre el canal de contacto. */}
      <Box
        display='flex'
        flexWrap='wrap'
        gap='0.75rem'
        mt='1.5rem'
        justifyContent={{ xs: 'center', lg: 'flex-start' }}
      >
        <Button
          variant='contained'
          size='large'
          component={RouterLink}
          to='/experiencia'
          endIcon={<ArrowForwardIcon />}
        >
          {t.home.cta.experiencia}
        </Button>

        <Button
          variant='outlined'
          size='large'
          component='a'
          href={t.contacto.whatsapp}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t.home.cta.contactarAria}
          startIcon={<WhatsAppIcon />}
          // MUI pinta el borde del outlined con 50% de alfa: 2.19:1 en claro y
          // 2.72:1 en oscuro, por debajo del 3:1 que WCAG 1.4.11 exige al
          // limite de un control. A opacidad plena sube a 5.18 y 6.81.
          sx={{ borderColor: primary }}
        >
          {t.home.cta.contactar}
        </Button>
      </Box>

      <Box
        display='flex'
        flexWrap='wrap'
        gap='0.5rem'
        mt='1.5rem'
        justifyContent={{ xs: 'center', lg: 'flex-start' }}
      >
        {t.home.habilidades.map(habilidad => (
          <Chip
            key={habilidad}
            label={habilidad}
            size='small'
            sx={{
              border: `1px solid ${primary}`,
              color: primary,
              fontWeight: 'bold',
              fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
            }}
            variant='outlined'
          />
        ))}
      </Box>
    </Box>
  )
}
export default Presentacion
