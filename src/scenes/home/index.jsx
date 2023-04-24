import { CardMedia } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Presentacion from './Presentacion'

const Home = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        display:'flex',
        height:900,
        alignItems:'center',
        p: 2,
        margin: 'auto',
        maxWidth: 1700,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <CardMedia
            component='img'
            image='WillyNegro.png'
            alt='Foto Willy Corzo'
            sx={{maxWidth:550}}
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
