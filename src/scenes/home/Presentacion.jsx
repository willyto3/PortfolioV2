import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Carrusel } from './Carrusel'

const Presentacion = () => {
  return (
    <Box>
      <Typography
        variant='h2'
        component='div'
        fontSize={{ xs: '1.5rem', sm: '3rem' }}
      >
        Hola, Mi Nombre es
      </Typography>
      <Typography
        variant='h1'
        component='div'
        fontSize={{ xs: '2.5rem', sm: '7rem' }}
      >
        Willy Corzo
      </Typography>

      <Carrusel />

      <Typography
        
        variant='body'
        component='div'
        align='justify'
        width='95%'
        fontSize={{ xs: '0.75rem', sm: '1.5rem' }}
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
