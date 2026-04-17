import { Box, Grid, Typography, useTheme } from '@mui/material'

import CardExperiencia from './CardExperiencia'

import { useT } from '../../locales/useT'

const Experiencia = () => {
  const t = useT()
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Box sx={{ px: { xs: 1, sm: 2 }, py: { xs: '1.5rem', md: '2rem' } }}>
      <Typography
        variant='h2'
        component='h2'
        fontWeight='bold'
        textAlign='center'
        sx={{ color: primary, mb: { xs: '1rem', md: '1.5rem' } }}
      >
        {t.experienciaUI.titulo}
      </Typography>

      <Grid
        container
        spacing={2}
        alignContent='center'
        justifyContent='center'
      >
        {t.experiencia.map(card => (
          <Grid
            size={{ xs: 12, lg: 6 }}
            key={card.alt}
            sx={{ display: 'flex' }}
          >
            <CardExperiencia {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default Experiencia
