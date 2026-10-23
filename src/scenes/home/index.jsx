import { Box, CardMedia } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Presentacion from './Presentacion'
import { useT } from '../../locales/useT'

const Home = () => {
  const t = useT()
  return (
    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          mx: 'auto',
          maxWidth: 1400,
          width: '100%',
          // Igual que las tarjetas: el canto no puede depender solo de la sombra
          border: theme => `1px solid ${theme.palette.bordeSuperficie}`,
        }}
      >
        <Grid container spacing={2}>
          {/* Foto y texto lado a lado desde md: en una tablet horizontal (1024 px)
              apilados obligaban a bajar para leer la presentacion. */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <CardMedia
              component='img'
              image='WillyNegro.webp'
              alt={t.home.altFoto}
              loading='eager'
              fetchPriority='high'
              // Dimensiones nativas del archivo. No fijan el tamano pintado: el
              // navegador las usa para deducir la proporcion y reservar el hueco
              // antes de que la imagen llegue. Sin ellas el alto inicial es cero
              // y, en xs-sm (donde la foto va apilada sobre el texto), al cargar
              // empuja hacia abajo toda la presentacion.
              width={945}
              height={1260}
              // Imprescindible junto a los atributos: sin esto el alto pintado
              // seria el literal 1260px del atributo en vez de la proporcion.
              sx={{ maxWidth: { xs: 270, sm: 280, md: 360, lg: 450 }, width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Presentacion />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
export default Home
