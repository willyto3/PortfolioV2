import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

const Presentacion = () => {
  return (
    <Box>
      <Typography
        gutterBottom
        variant='h2'
        component='div'
        fontSize={{ xs: '1.5rem', sm: '4rem' }}
      >
        Hola, Mi Nombre es
      </Typography>
      <Typography
        gutterBottom
        variant='h1'
        component='div'
        fontSize={{ xs: '2.5rem', sm: '8rem' }}
      >
        Willy Corzo
      </Typography>

      {/* //! TOCA BUSCAR COMO HACER LA ANIMACION */}
      <div className='inicio__caja'>
        <div className='inicio__titulo'>
          <div className='inicio__profesion'>
            Master en Gerencia de Proyectos
          </div>
          <div className='inicio__profesion'>Ingeniero Químico</div>
          <div className='inicio__profesion'>
            Especialista NTC ISO 17025:2017
          </div>
          <div className='inicio__profesion'>Desarrollador Web</div>
          <div className='inicio__profesion'>Experto en Excel - VBA</div>
        </div>
      </div>
      <Typography
        gutterBottom
        variant='body'
        component='div'
        align='justify'
        width='95%'
        fontSize={{ xs: '0.75rem', sm: '1.75rem' }}
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

//   .inicio__titulo {
//     height: 100%;
//     animation: move 10s ease-in-out infinite alternate;
//   }

//   @keyframes move {
//     25% {
//       transform: translateY(-5rem);
//     }
//     50% {
//       transform: translateY(-10rem);
//     }
//     75% {
//       transform: translateY(-15rem);
//     }
//     100% {
//       transform: translateY(-20rem);
//     }
//   }

