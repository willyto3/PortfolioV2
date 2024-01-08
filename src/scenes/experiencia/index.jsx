import { Grid, Paper, useTheme } from '@mui/material'

import CardExperiencia from './CardExperiencia'

import { experiencia } from './listado'

const Experiencia = () => {
  // Uso del Tema
  const theme = useTheme()
  // Creamos constantes para los colores
  const neutralLigth = theme.palette.neutral.light

  return (
    <>
      <Paper>
        <Grid
          container
          mt='5rem'
          mb='2rem'
          alignContent='center'
          justifyContent='center'
          gap='1rem'
          sx={{ backgroundColor: neutralLigth }}
        >
          {experiencia.map(card => (
            <Grid item xs={10} md={5.5} key={card.alt}>
              <CardExperiencia
                image={card.image}
                alt={card.alt}
                cargo={card.cargo}
                actividades={card.actividades}
                fecha={card.fecha}
                lugar={card.lugar}
                jefe={card.jefe}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  )
}
export default Experiencia
