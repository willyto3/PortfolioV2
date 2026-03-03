import { Grid, Paper } from '@mui/material'

import CardExperiencia from './CardExperiencia'

import { useT } from '../../locales/useT'

const Experiencia = () => {
  const t = useT()
  return (
    <>
      <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <Grid
          container
          mt='2rem'
          mb='2rem'
          alignContent='center'
          justifyContent='center'
          gap='1rem'
        >
          {t.experiencia.map(card => (
            <Grid size={{ xs: 10, xl: 5.5 }} key={card.alt} sx={{ display: 'flex' }}>
              <CardExperiencia
                image={card.image}
                imageLight={card.imageLight}
                imageDark={card.imageDark}
                clientImage={card.clientImage}
                clientImageLight={card.clientImageLight}
                clientImageDark={card.clientImageDark}
                clientAlt={card.clientAlt}
                alt={card.alt}
                cargo={card.cargo}
                empresa={card.empresa}
                cliente={card.cliente}
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
