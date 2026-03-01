import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'

const CardProyecto = ({ nombre, imagen, descripcion, tecnologias }) => {
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderTop: `4px solid ${primary}`,
      }}
    >
      <CardMedia
        component='img'
        image={imagen}
        alt={nombre}
        loading='lazy'
        sx={{
          height: '180px',
          objectFit: 'contain',
          p: '1rem',
          backgroundColor: theme.palette.neutral.light,
        }}
      />

      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Typography variant='h2' component='div' fontSize='clamp(1.2rem, 2.5vw, 2rem)' color='primary'>
          {nombre}
        </Typography>

        <Typography variant='h4' fontSize='clamp(0.85rem, 1.5vw, 1.15rem)'>
          {descripcion}
        </Typography>

        {tecnologias?.length > 0 && (
          <Box display='flex' flexWrap='wrap' gap='0.4rem' mt='auto' pt='0.5rem'>
            {tecnologias.map(tec => (
              <Chip
                key={tec}
                label={tec}
                size='small'
                sx={{
                  backgroundColor: theme.palette.neutral.light,
                  color: primary,
                  fontWeight: 'bold',
                  border: `1px solid ${primary}`,
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  )
}
export default CardProyecto
