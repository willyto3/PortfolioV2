// ? IMPORTACION DE COMPONENTES DE DISEÑO
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const CardEstudio = ({ institucion, estudio, fecha, fondo, grado }) => {
  return (
    <Card  sx={{ maxWidth: 900, display: 'flex',p:'1rem 2rem' }}>
      <CardMedia
        sx={{ maxWidth: 150}}
        image={`${fondo}`}
        component='img'
        title='green iguana'
      />
      <CardContent>
        <Typography variant='h2' component='div'>
          {estudio}
        </Typography>
        <Typography variant='h3' >
          {grado}
        </Typography>
        <Typography variant='h3' >
          {institucion}
        </Typography>
        <Typography variant='h4' color='text.secondary'>
          {fecha}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default CardEstudio
