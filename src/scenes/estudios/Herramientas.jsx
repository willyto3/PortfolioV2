// ? IMPORTACION DE COMPONENTES DE DISEÑO
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardHerramientas from './CardHerramientas'

const Herramientas = () => {
  return (
    <Box>
      <Typography variant='h2'>Herramientas</Typography>
      <Box>
        <CardHerramientas
          titulo='Excel'
          imagen='excel.png'
          parrafo='Es una hoja de cálculo que nos permite manipular datos numéricos y de texto en tablas formadas por la unión de filas y columnas.'
          conocimiento='Avanzado'
        />
        <CardHerramientas
          titulo='HTML'
          imagen='html-5.png'
          parrafo='Es el componente más básico de la Web. Define el significado y la estructura del contenido web.'
          conocimiento='Avanzado'
        />
        <CardHerramientas
          titulo='CSS'
          imagen='css-3.png'
          parrafo='Es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.'
          conocimiento='Intermedio'
        />
        <CardHerramientas
          titulo='JavaScript'
          imagen='js.png'
          parrafo='Es un lenguaje de programación que te permite implementar funciones complejas en páginas web'
          conocimiento='Intermedio'
        />
        <CardHerramientas
          titulo='React'
          imagen='atom.png'
          parrafo='Es una librería open source de JavaScript para desarrollar interfaces de usuario'
          conocimiento='Intermedio'
        />
        <CardHerramientas
          titulo='Git Hub'
          imagen='github.png'
          parrafo='Es un servicio en la nube que ayuda a los desarrolladores a almacenar y administrar su código, al igual que llevar un registro y control de cualquier cambio sobre este código'
          conocimiento='Intermedio'
        />
      </Box>
    </Box>
  )
}
export default Herramientas


