import Typography from '@mui/material/Typography'
import Carousel from 'react-material-ui-carousel'
import { useTheme } from '@mui/material'

import { t } from '../../locales'

export function Carrusel() {
  const theme = useTheme()
  const primary = theme.palette.primary.main

  const items = t.home.roles

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
