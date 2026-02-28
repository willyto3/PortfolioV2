import Typography from '@mui/material/Typography'
import Carousel from 'react-material-ui-carousel'

export function Carrusel() {
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
      indicatorIconButtonProps={{
        style: {
          color: 'transparent',
        },
      }}
    >
      {items.map((item, i) => (
        <Typography
          variant='h2'
          component='div'
          fontSize='clamp(1.5rem, 4.5vw, 3.5rem)'
          key={i}
        >
          {item}
        </Typography>
      ))}
    </Carousel>
  )
}
