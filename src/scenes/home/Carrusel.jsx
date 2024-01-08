import Typography from '@mui/material/Typography'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

export function Carrusel(props) {
  var items = [
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
          gutterBottom
          variant='h2'
          component='div'
          fontSize={{ xs: '1.5rem', sm: '3.5rem' }}
          key={i}
          item={item}
        >
          {item}
        </Typography>
      ))}
    </Carousel>
  )
}
