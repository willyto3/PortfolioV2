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
        m: 'auto',
        mt: 10,
        maxWidth: 1700,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <CardMedia
            component='img'
            image='WillyNegro.png'
            alt='Foto Willy Corzo'
            sx={{ maxWidth: 450 }}
          />
        </Grid>
        <Grid item xs={12} lg={8} >
          <Presentacion />
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Home
