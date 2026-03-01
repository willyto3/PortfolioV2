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
      interval={5000}
      duration={800}
      indicators={false}
      navButtonsAlwaysInvisible
      sx={{ py: '0.25rem' }}
    >
      {items.map((item, i) => (
        <Typography
          variant='h2'
          component='div'
          fontSize={{ xs: 'clamp(1.1rem, 3.5vw, 1.4rem)', md: 'clamp(1.5rem, 4.5vw, 3.5rem)' }}
          fontWeight='bold'
          key={i}
          sx={{
            color: primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', lg: 'flex-start' },
          }}
        >
          {item}
        </Typography>
      ))}
    </Carousel>
  )
}
