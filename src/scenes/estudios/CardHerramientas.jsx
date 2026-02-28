// ? IMPORTACION DE COMPONENTES DE DISEÑO
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const CardHerramientas = ({ titulo, imagen, parrafo, conocimiento }) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: '100%', md: 700 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        p: '1rem',
        mb: '1rem',
      }}
    >
      <Box
        width={{ xs: '100%', sm: '8rem', md: '12rem' }}
        maxHeight={{ xs: '8rem', sm: 'none' }}
        display='flex'
        justifyContent='center'
        flexShrink={0}
      >
        <CardMedia
          sx={{
            ml: { xs: 0, sm: '10px' },
            padding: { xs: '0.5em', sm: '1em' },
            objectFit: 'contain',
            alignSelf: 'center',
          }}
          image={imagen}
          component='img'
          alt={titulo}
          title={titulo}
        />
      </Box>

      <CardContent>
        <Typography variant='h2' component='div' fontSize='clamp(1.2rem, 2.5vw, 2rem)'>
          {titulo}
        </Typography>
        <Typography variant='h3' fontSize='clamp(1rem, 2vw, 1.5rem)'>{conocimiento}</Typography>
        <Typography variant='h4' fontSize='clamp(0.85rem, 1.5vw, 1.25rem)'>{parrafo}</Typography>
      </CardContent>
    </Card>
  )
}
export default CardHerramientas
