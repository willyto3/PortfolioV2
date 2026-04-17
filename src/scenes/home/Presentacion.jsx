import { Box, Chip, Divider, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { RotadorRoles } from './RotadorRoles'

import { useT } from '../../locales/useT'

const Presentacion = () => {
  const t = useT()
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

      <RotadorRoles />

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

      <Box
        display='flex'
        flexWrap='wrap'
        gap='0.5rem'
        mt='1rem'
        justifyContent={{ xs: 'center', lg: 'flex-start' }}
      >
        {t.home.habilidadesBlandas.map(habilidad => (
          <Chip
            key={habilidad}
            label={habilidad}
            size='small'
            sx={{
              border: `1px solid ${primary}`,
              color: primary,
              fontWeight: 'bold',
              fontSize: 'clamp(0.7rem, 1.1vw, 0.85rem)',
            }}
            variant='outlined'
          />
        ))}
      </Box>
    </Box>
  )
}
export default Presentacion
