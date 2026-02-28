import { CardMedia } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Presentacion from './Presentacion'

const Home = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        mx: 'auto',
        mt: '2rem',
        maxWidth: 1700,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
          <CardMedia
            component='img'
            image='WillyNegro.png'
            alt='Foto Willy Corzo'
            sx={{ maxWidth: { xs: 200, sm: 280, md: 360, lg: 450 }, width: '100%' }}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Presentacion />
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Home
