import { Box, Divider, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Carrusel } from './Carrusel'

const Presentacion = () => {
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
      <Typography variant='h2' component='div' color='text.secondary'>
        Hola, Mi Nombre es
      </Typography>

      <Typography
        variant='h1'
        component='div'
        fontWeight='bold'
        sx={{ color: primary, lineHeight: 1.1 }}
      >
        Willy Corzo Lubo
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
        Ingeniero Químico con maestría en Gerencia de Proyectos y más de 14
        años de experiencia en el sector de Hidrocarburos, especializado en
        Transferencia en Custodia, Medición y Análisis. Me apasiona transformar
        procesos complejos en soluciones automatizadas y eficientes. Orientado a
        resultados, trabajo con iniciativa, honestidad y compromiso,
        adaptándome con facilidad a nuevos retos y entornos.
      </Typography>
    </Box>
  )
}
export default Presentacion
