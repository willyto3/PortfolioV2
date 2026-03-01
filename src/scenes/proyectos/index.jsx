import Box from '@mui/material/Box'
import { Grid, Paper, Typography, useTheme } from '@mui/material'
import CardProyecto from './CardProyecto'

import { t } from '../../locales'

const agrupar = items => {
  const mapa = new Map()
  items.forEach(item => {
    if (!mapa.has(item.categoria)) mapa.set(item.categoria, [])
    mapa.get(item.categoria).push(item)
  })
  return mapa
}

const SeccionProyectos = ({ titulo, items }) => {
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
          {items.map(proyecto => (
            <Grid size={{ xs: 12, md: 5.8 }} key={proyecto.nombre} sx={{ display: 'flex' }}>
              <CardProyecto
                nombre={proyecto.nombre}
                imagen={proyecto.imagen}
                descripcion={proyecto.descripcion}
                tecnologias={proyecto.tecnologias}
              />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Grid>
  )
}

const Proyectos = () => {
  const grupos = agrupar(t.proyectos.items)

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
        {[...grupos.entries()].map(([categoria, items]) => (
          <SeccionProyectos key={categoria} titulo={categoria} items={items} />
        ))}
      </Grid>
    </Paper>
  )
}
export default Proyectos
