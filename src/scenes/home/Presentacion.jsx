import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Carrusel } from './Carrusel'

const Presentacion = () => {
  return (
    <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
      <Typography variant='h2' component='div'>
        Hola, Mi Nombre es
      </Typography>
      <Typography variant='h1' component='div'>
        Willy Corzo
      </Typography>

      <Carrusel />

      <Typography
        variant='body1'
        component='div'
        align='inherit'
        width='95%'
        sx={{ mx: { xs: 'auto', lg: 0 } }}
      >
        Soy un Ingeniero Químico con una maestría en Gerencia de proyectos con
        amplia experiencia en el sector de Hidrocarburos. Genero soluciones
        creativas a los problemas; con iniciativa, honestidad y puntualidad.
        Asumiendo con agrado los retos y metas que su organización pudiera
        plantear. Facilidad para trabajar en equipo, con buen manejo de
        relaciones interpersonales, autodidacta, facilidad y disposición para
        aprender y para adaptarme a los cambios.
      </Typography>
    </Box>
  )
}
export default Presentacion
