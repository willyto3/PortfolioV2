import { Box, Divider, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Carrusel } from './Carrusel'

import { t } from '../../locales'

const Presentacion = () => {
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
      <Typography variant='h2' component='div' color='text.secondary'>
        {t.home.saludo}
      </Typography>

      <Typography
        variant='h1'
        component='div'
        fontWeight='bold'
        sx={{ color: primary, lineHeight: 1.1 }}
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

      <Carrusel />

      <Typography
        variant='body1'
        component='div'
        width='95%'
        sx={{
          mx: { xs: 'auto', lg: 0 },
          mt: '1.5rem',
          borderLeft: { xs: 'none', lg: `4px solid ${primary}` },
          pl: { xs: 0, lg: '1rem' },
          color: 'text.secondary',
        }}
      >
        {t.home.bio}
      </Typography>
    </Box>
  )
}
export default Presentacion
