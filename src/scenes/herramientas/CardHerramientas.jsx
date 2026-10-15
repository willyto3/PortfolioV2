import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import LinearProgress from '@mui/material/LinearProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { useTheme } from '@mui/material'
import { useT } from '../../locales/useT'

const CardHerramientas = ({ titulo, imagen, imagenOscura, parrafo, conocimiento, nivel, anios, usos }) => {
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
        p: '1rem',
        mb: 0,
        // El canto de la tarjeta no puede depender solo de la sombra
        border: `1px solid ${theme.palette.bordeSuperficie}`,
        borderTop: `4px solid ${primary}`,
      }}
    >
      {/* Igual que en Experiencia: desde sm la cabecera es una fila (icono,
          nombre, nivel y barra) y la descripcion y los usos van debajo a todo
          el ancho. En movil todo se apila. */}
      <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} gap={{ sm: '0.5rem' }}>
        <Box
          width={{ xs: '100%', sm: '7rem', md: '8rem' }}
          height={{ xs: '7rem', sm: 'auto' }}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexShrink={0}
          p={{ xs: '0.5rem', sm: '0.75rem' }}
        >
          {/* Los iconos son transparentes y de color, asi que no llevan placa;
              los de tinta negra (JavaScript, React) traen version blanca. */}
          <CardMedia
            sx={{
              objectFit: 'contain',
              width: '100%',
              height: 'auto',
              maxWidth: { xs: '6rem', sm: '5.5rem' },
              maxHeight: { xs: '6rem', sm: '5.5rem' },
            }}
            image={theme.palette.mode === 'dark' && imagenOscura ? imagenOscura : imagen}
            component='img'
            alt={titulo}
            // sin title: duplicaba el alt en un tooltip nativo que ademas
            // no existe en tactil
            loading='lazy'
          />
        </Box>

        <Box flex={1} minWidth={0} px={{ xs: '1rem', sm: 0 }}>
          <Typography variant='h2' component='h3' fontSize='clamp(1.2rem, 2.5vw, 2rem)' color='primary'>
            {titulo}
          </Typography>

          {/* Nivel + anios */}
          <Box display='flex' alignItems='center' justifyContent='space-between' mt='0.4rem' mb='0.2rem'>
            <Typography variant='h4' component='p' fontSize='clamp(0.85rem, 1.5vw, 1.25rem)'>
              {conocimiento}
            </Typography>
            {anios && (
              <Typography variant='h4' component='p' color='text.secondary' fontSize='clamp(0.75rem, 1.2vw, 1rem)'>
                {anios} {anios === 1 ? t.herramientasUI.anio : t.herramientasUI.anios}
              </Typography>
            )}
          </Box>

          {/* Barra de progreso */}
          {nivel && (
            <LinearProgress
              variant='determinate'
              value={nivel}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: theme.palette.primary.soft,
                border: `1px solid ${theme.palette.primary.softBorder}`,
                '& .MuiLinearProgress-bar': { backgroundColor: primary, borderRadius: 3 },
              }}
            />
          )}
        </Box>
      </Box>

      <CardContent sx={{ flex: 1, pt: '0.75rem', '&:last-child': { pb: '0.5rem' } }}>
        <Typography variant='h4' component='p' fontSize='clamp(0.85rem, 1.5vw, 1.25rem)'>{parrafo}</Typography>

        {usos?.length > 0 && (
          <List dense disablePadding sx={{ mt: '0.5rem' }}>
            {usos.map((uso, i) => (
              <ListItem key={i} disablePadding sx={{ alignItems: 'flex-start' }}>
                <FiberManualRecordIcon sx={{ fontSize: '0.5rem', mt: '0.55rem', mr: '0.5rem', color: primary, flexShrink: 0 }} />
                <ListItemText
                  primary={uso}
                  slotProps={{ primary: { fontSize: 'clamp(0.85rem, 1.5vw, 1.25rem)' } }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  )
}
export default CardHerramientas
