import Box from '@mui/material/Box'
import { Grid, Paper, Typography, useTheme } from '@mui/material'

import CardEstudio from './CardEstudio'

import { useT } from '../../locales/useT'

const SeccionEstudios = ({ titulo, tarjetas }) => {
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Grid size={{ xs: 10 }}>
      <Box display='flex' flexDirection={{ xs: 'column', lg: 'row' }} alignItems={{ xs: 'flex-start', lg: 'stretch' }} gap='1rem'>

        {/* Título + línea */}
        <Box display='flex' alignItems='center' gap='0.75rem' flexShrink={0}
          flexDirection={{ xs: 'column', lg: 'row' }}
          width={{ xs: '100%', lg: 'auto' }}
        >
          <Typography
            variant='h3'
            color='primary'
            sx={{
              writingMode: { xs: 'horizontal-tb', lg: 'vertical-rl' },
              transform: { xs: 'none', lg: 'rotate(180deg)' },
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
            }}
          >
            {titulo}
          </Typography>
          <Box sx={{
            borderLeft: { xs: 'none', lg: `3px solid ${primary}` },
            borderBottom: { xs: `3px solid ${primary}`, lg: 'none' },
            alignSelf: 'stretch',
            width: { xs: '100%', lg: 'auto' },
          }} />
        </Box>

        {/* Cards */}
        <Grid container gap='1rem' flex={1}>
          {tarjetas.map(card => (
            <Grid size={{ xs: 12, lg: 5.8 }} key={card.institucion + card.fecha} sx={{ display: 'flex' }}>
              <CardEstudio
                institucion={card.institucion}
                fecha={card.fecha}
                estudio={card.estudio}
                fondo={card.fondo}
                grado={card.grado}
                descripcion={card.descripcion}
                tesis={card.tesis}
                logros={card.logros}
                habilidades={card.habilidades}
                duracion={card.duracion}
                certificado={card.certificado}
              />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Grid>
  )
}

const Estudios = () => {
  const t = useT()
  const formales = t.estudios.tarjetas.filter(c => c.tipo === 'formal')
  const cortos   = t.estudios.tarjetas.filter(c => c.tipo === 'corto')

  return (
    <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Grid
        container
        mt='2rem'
        mb='2rem'
        alignContent='center'
        justifyContent='center'
        gap='2rem'
      >
        <SeccionEstudios titulo={t.estudios.tituloFormales} tarjetas={formales} />
        <SeccionEstudios titulo={t.estudios.tituloCortos}   tarjetas={cortos} />
      </Grid>
    </Paper>
  )
}
export default Estudios
