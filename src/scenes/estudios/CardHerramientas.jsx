// ? IMPORTACION DE COMPONENTES DE DISEÑO
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const CardHerramientas = ({ titulo, imagen, parrafo, conocimiento }) => {
  return (
    <Card sx={{ maxWidth: 700, display: 'flex', p: '1rem 1rem', mb:'1rem' }}>
      <Box width='12rem' display='flex'>
        <CardMedia
          sx={{
            ml: '10px',
            padding: '1em 1em 1em 1em',
            objectFit: 'contain',
            alignSelf: 'center',
          }}
          image={`${imagen}`}
          component='img'
          title='green iguana'
        />
      </Box>

      <CardContent>
        <Typography variant='h2' component='div'>
          {titulo}
        </Typography>
        <Typography variant='h3'>{conocimiento}</Typography>

        <Typography variant='h4'>{parrafo}</Typography>
      </CardContent>
    </Card>
  )
}
export default CardHerramientas
