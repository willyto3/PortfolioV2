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
        height: 700,
        alignItems: 'center',
        p:5,
        m: '1rem auto',
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
            sx={{ padding: "1em 1em 1em 1em", objectFit:'contain' }}
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
