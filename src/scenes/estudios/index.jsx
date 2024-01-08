// ? IMPORTACION DE COMPONENTES DE DISEÑO
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Importacion de Componentes
import Herramientas from './Herramientas'
import CardEstudio from './CardEstudio'

const Estudios = () => {
  return (
    <Box mt='1rem'>
      <Grid container>
        <Grid item xs={7}>
          <Typography variant='h2'>Mis Estudios</Typography>

          <CardEstudio
            institucion='Universidad Isabel I'
            fecha='Madrid España - 2020'
            estudio='Project Management'
            fondo='isabel.png'
            grado='Maestria'
          />
          <CardEstudio
            institucion='Universidad del Atlantico'
            fecha='Barranquilla - 2007'
            estudio='Ingeniería Química'
            fondo='ua.png'
            grado='Pregrado'
          />
          <CardEstudio
            institucion='Servicio Nacional de Aprendizaje - SENA'
            fecha='Bogota - 2018'
            estudio='Gestión en Laboratorios de Ensayo y Calibración - Norma ISO/IEC 17025'
            fondo='sena.png'
            grado='Especialización Técnica'
          />
          <CardEstudio
            institucion='Universidad del Norte'
            fecha='Barranquilla - 2021'
            estudio='Desarrollo de Software'
            fondo='uninorte.jpg'
            grado='Curso'
          />
          <CardEstudio
            institucion='Servicio Nacional de Aprendizaje - SENA'
            fecha='Bogota - 2016'
            estudio='Manejo de Herramientas : Microsoft Excel'
            fondo='sena.png'
            grado='Curso'
          />
        </Grid>
        <Grid item xs={5}>
          <Herramientas />
        </Grid>
      </Grid>
    </Box>
  )
}
export default Estudios
