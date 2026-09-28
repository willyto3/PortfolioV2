import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { useT } from '../../locales/useT'

const CardProyecto = ({ nombre, imagen, descripcion, tecnologias, url }) => {
  const t = useT()
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // El canto de la tarjeta no puede depender solo de la sombra
        border: `1px solid ${theme.palette.bordeSuperficie}`,
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
          // neutral.light aqui era #333333 en oscuro: no salvaba ni a los
          // logos de tinta oscura ni a los que traen fondo blanco horneado.
          backgroundColor: theme.palette.placaLogo,
        }}
      />

      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Typography variant='h2' component='h3' fontSize='clamp(1.2rem, 2.5vw, 2rem)' color='primary'>
          {nombre}
        </Typography>

        <Typography variant='h4' component='p' fontSize='clamp(0.85rem, 1.5vw, 1.15rem)'>
          {descripcion}
        </Typography>

        {url && (
          <Button
            variant='outlined'
            size='small'
            endIcon={<OpenInNewIcon />}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${t.proyectosUI.verProyectoAria}: ${nombre}`}
            // MUI dibuja el borde del outlined al 50% de alfa, por debajo del
            // 3:1 que WCAG 1.4.11 pide al limite de un control.
            sx={{ mt: '0.5rem', alignSelf: 'flex-start', borderColor: primary }}
          >
            {t.proyectosUI.verProyecto}
          </Button>
        )}

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
