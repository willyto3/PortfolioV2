import Box from '@mui/material/Box'
import { Grid, Paper, Typography, useTheme } from '@mui/material'

// Agrupa por categoria manteniendo el orden de aparicion
export const agruparPorCategoria = items => {
  const mapa = new Map()
  items.forEach(item => {
    if (!mapa.has(item.categoria)) mapa.set(item.categoria, [])
    mapa.get(item.categoria).push(item)
  })
  return [...mapa].map(([titulo, items]) => ({ titulo, items }))
}

const Seccion = ({ titulo, items, Tarjeta, getKey, anchoTarjeta }) => {
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
            <Grid size={anchoTarjeta} key={getKey(item)} sx={{ display: 'flex' }}>
              <Tarjeta {...item} />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Grid>
  )
}

// Layout compartido por Estudios, Herramientas y Proyectos: una lista de
// secciones, cada una con su titulo lateral y su rejilla de tarjetas.
const Secciones = ({ grupos, Tarjeta, getKey, anchoTarjeta = { xs: 12, lg: 5.8 } }) => (
  <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
    <Grid
      container
      mt='2rem'
      mb='2rem'
      alignContent='center'
      justifyContent='center'
      gap='2rem'
    >
      {grupos.map(({ titulo, items }) => (
        <Seccion
          key={titulo}
          titulo={titulo}
          items={items}
          Tarjeta={Tarjeta}
          getKey={getKey}
          anchoTarjeta={anchoTarjeta}
        />
      ))}
    </Grid>
  </Paper>
)
export default Secciones
