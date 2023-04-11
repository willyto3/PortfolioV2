import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { CardMedia } from '@mui/material'
import Presentacion from './Presentacion'


const Home = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1700,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item >
          <CardMedia
            component='img'
            width='800'
            height='600'
            image='WillyNegro.png'
            alt='Paella dish'
          />
          
        </Grid>
        <Grid item xs={12} lg container alignContent='center'>
          <Presentacion />
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Home
