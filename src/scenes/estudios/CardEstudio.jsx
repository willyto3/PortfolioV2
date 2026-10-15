import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { useTheme } from '@mui/material'
import { useT } from '../../locales/useT'

const CardEstudio = ({
  institucion, estudio, fecha, fondo, fondoOscuro, grado,
  descripcion, tesis, logros,
  habilidades, duracion,
}) => {
  const t = useT()
  const theme = useTheme()
  const primary = theme.palette.primary.main
  const labels = t.estudiosUI.labels

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
      {/* Igual que en Experiencia: desde sm la cabecera es una fila (logo y
          datos del estudio) y el resto va debajo a todo el ancho, para que la
          tarjeta no se alargue. En movil todo se apila. */}
      <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} gap={{ sm: '0.5rem' }}>
        <Box
          width={{ xs: '100%', sm: '9rem' }}
          height={{ xs: '8rem', sm: 'auto' }}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexShrink={0}
          p={{ xs: '0.5rem', sm: '0.75rem' }}
        >
          {/* Cada logo trae version clara (.W) y oscura (.B, tinta blanca),
              asi que no hace falta placa. Caja comun para que los anchos
              (SENA) y los altos (U. del Atlantico) pesen parecido. */}
          <CardMedia
            sx={{
              objectFit: 'contain',
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: { xs: '7rem', sm: '6.5rem' },
            }}
            image={theme.palette.mode === 'dark' && fondoOscuro ? fondoOscuro : fondo}
            component='img'
            alt={institucion}
            // sin title: duplicaba el alt en un tooltip nativo que ademas
            // no existe en tactil
            loading='lazy'
          />
        </Box>

        <Box flex={1} minWidth={0} px={{ xs: '1rem', sm: 0 }}>
          <Typography variant='h2' component='h3' fontSize='clamp(1.2rem, 2.5vw, 2rem)' color='primary'>
            {estudio}
          </Typography>
          <Typography variant='h3' component='p' fontSize='clamp(1rem, 2vw, 1.5rem)'>{grado}</Typography>
          <Typography variant='h3' component='p' fontSize='clamp(1rem, 2vw, 1.5rem)'>{institucion}</Typography>

          <Box display='flex' alignItems='center' gap='1rem' flexWrap='wrap' mt='0.25rem'>
            <Typography variant='h4' component='p' color='text.secondary' fontSize='clamp(0.85rem, 1.5vw, 1.25rem)'>
              {fecha}
            </Typography>
            {duracion && (
              <Box display='flex' alignItems='center' gap='0.25rem'>
                <AccessTimeIcon sx={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', color: 'text.secondary' }} />
                <Typography variant='h4' component='p' color='text.secondary' fontSize='clamp(0.85rem, 1.5vw, 1.25rem)'>
                  {duracion}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <CardContent sx={{ flex: 1, pt: '0.5rem', '&:last-child': { pb: '0.5rem' } }}>
        {descripcion && (
          <Typography variant='h4' component='p' fontSize='clamp(0.85rem, 1.5vw, 1.25rem)' mt='0.5rem'>
            {descripcion}
          </Typography>
        )}

        {tesis && (
          <Typography variant='h4' component='p' fontSize='clamp(0.8rem, 1.3vw, 1.1rem)' mt='0.5rem' color='text.secondary' fontStyle='italic'>
            <Box component='span' fontWeight='bold' fontStyle='normal'>{labels.tesis}: </Box>
            {tesis}
          </Typography>
        )}

        {logros?.length > 0 && (
          <>
            <Typography variant='h4' component='p' color='text.secondary' mt='0.5rem' fontSize='clamp(0.8rem, 1.3vw, 1.1rem)' fontWeight='bold'>
              {labels.logros}
            </Typography>
            <List dense disablePadding>
              {logros.map((logro, i) => (
                <ListItem key={i} disablePadding sx={{ alignItems: 'flex-start' }}>
                  <FiberManualRecordIcon sx={{ fontSize: '0.5rem', mt: '0.55rem', mr: '0.5rem', color: primary, flexShrink: 0 }} />
                  <ListItemText
                    primary={logro}
                    slotProps={{ primary: { fontSize: 'clamp(0.8rem, 1.3vw, 1.1rem)', color: 'text.secondary' } }}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}

        {habilidades?.length > 0 && (
          <Box display='flex' flexWrap='wrap' gap='0.4rem' mt='0.75rem'>
            {habilidades.map(h => (
              <Chip
                key={h}
                label={h}
                size='small'
                sx={{
                  backgroundColor: theme.palette.primary.soft,
                  border: `1px solid ${theme.palette.primary.softBorder}`,
                  color: theme.palette.primary.onSoft,
                  fontWeight: 'bold',
                  fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
                }}
              />
            ))}
          </Box>
        )}

      </CardContent>
    </Card>
  )
}
export default CardEstudio
