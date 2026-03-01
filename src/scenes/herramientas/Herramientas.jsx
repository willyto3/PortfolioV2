import Box from '@mui/material/Box'
import { Grid, Paper, Typography, useTheme } from '@mui/material'
import CardHerramientas from './CardHerramientas'

import { useT } from '../../locales/useT'

// Agrupa items por categoria manteniendo el orden de aparición
const agrupar = items => {
  const mapa = new Map()
  items.forEach(item => {
    if (!mapa.has(item.categoria)) mapa.set(item.categoria, [])
    mapa.get(item.categoria).push(item)
  })
  return mapa
}

const SeccionHerramientas = ({ titulo, items }) => {
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
          {items.map(item => (
            <Grid size={{ xs: 12, lg: 5.8 }} key={item.titulo} sx={{ display: 'flex' }}>
              <CardHerramientas
                titulo={item.titulo}
                imagen={item.imagen}
                parrafo={item.parrafo}
                conocimiento={item.conocimiento}
                nivel={item.nivel}
                años={item.años}
                usos={item.usos}
              />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Grid>
  )
}

const Herramientas = () => {
  const t = useT()
  const grupos = agrupar(t.estudios.herramientas.items)

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
          <SeccionHerramientas key={categoria} titulo={categoria} items={items} />
        ))}
      </Grid>
    </Paper>
  )
}
export default Herramientas
