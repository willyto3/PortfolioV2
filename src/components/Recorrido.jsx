import { Link as RouterLink, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { useTheme } from '@mui/material'
import { useT } from '../locales/useT'

// Botones al pie de cada pagina para recorrer el portafolio en el orden del
// menu. Inicio ya trae su propio boton hacia Experiencia, asi que aqui se
// omite; la ultima pagina cierra el recorrido con el boton de contacto.
const Recorrido = () => {
  const t = useT()
  const theme = useTheme()
  const { pathname } = useLocation()
  const paginas = t.nav.items
  const i = paginas.findIndex(p => p.ruta === pathname)
  if (i <= 0) return null

  const anterior = paginas[i - 1]
  const siguiente = paginas[i + 1]
  const textos = t.nav.recorrido

  return (
    <Box
      component='nav'
      aria-label={textos.aria}
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
      gap='0.75rem'
      px='1rem'
      pb='2rem'
    >
      <Button
        variant='outlined'
        size='large'
        component={RouterLink}
        to={anterior.ruta}
        startIcon={<ArrowBackIcon />}
        // Borde a opacidad plena: el 50% de MUI no llega al 3:1 de WCAG 1.4.11
        sx={{ borderColor: theme.palette.primary.main }}
      >
        {textos.anterior}: {anterior.label}
      </Button>

      {siguiente ? (
        <Button
          variant='contained'
          size='large'
          component={RouterLink}
          to={siguiente.ruta}
          endIcon={<ArrowForwardIcon />}
        >
          {textos.siguiente}: {siguiente.label}
        </Button>
      ) : (
        <Button
          variant='contained'
          size='large'
          component='a'
          href={t.contacto.whatsapp}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t.home.cta.contactarAria}
          startIcon={<WhatsAppIcon />}
        >
          {t.home.cta.contactar}
        </Button>
      )}
    </Box>
  )
}
export default Recorrido
