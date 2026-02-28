import Typography from '@mui/material/Typography'
import Carousel from 'react-material-ui-carousel'
import { useTheme } from '@mui/material'

export function Carrusel() {
  const theme = useTheme()
  const primary = theme.palette.primary.main

  const items = [
    'Master en Gerencia de Proyectos',
    'Ingeniero Químico',
    'Especialista NTC ISO 17025:2017',
    'Desarrollador Web Full Stack',
    'Desarrollador en PowerBi',
    'Experto en Excel - VBA',
  ]

  return (
    <Carousel
      animation='fade'
      interval={3000}
      duration={800}
      indicators={false}
      navButtonsAlwaysInvisible
    >
      {items.map((item, i) => (
        <Typography
          variant='h2'
          component='div'
          fontSize='clamp(1.5rem, 4.5vw, 3.5rem)'
          fontWeight='bold'
          key={i}
          sx={{ color: primary }}
        >
          {item}
        </Typography>
      ))}
    </Carousel>
  )
}
