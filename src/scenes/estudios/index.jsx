// Importacion de Componentes
import Herramientas from './Herramientas'
import CardEstudio from './CardEstudio'
import CardHerramientas from './CardHerramientas'

const Estudios = () => {
  return (
    <div className='container'>
      <CardHerramientas/>
      <div className='grid grid-2-columnas columna-amplia'>
        <div>
          <h2 style={{ marginBottom: '2rem' }}>Mis Estudios</h2>
          <div className='grid grid-2-columnas centrado'>
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
          </div>
        </div>
        <Herramientas />
      </div>
    </div>
  )
}
export default Estudios

