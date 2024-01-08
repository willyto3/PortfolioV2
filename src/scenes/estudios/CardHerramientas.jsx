// ? IMPORTACION DE COMPONENTES DE DISEÑO
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const CardHerramientas = ({ titulo, imagen, parrafo, conocimiento }) => {
  return (
    <Card sx={{ maxWidth: 900, display: 'flex', p: '1.5rem 2rem' }}>
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
