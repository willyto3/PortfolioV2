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
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, lg: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
            <CardMedia
              component='img'
              image='WillyNegro.webp'
              alt={t.home.altFoto}
              loading='eager'
              fetchPriority='high'
              sx={{ maxWidth: { xs: 200, sm: 280, md: 360, lg: 450 }, width: '100%' }}
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Presentacion />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
export default Home
