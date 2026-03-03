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

const CardHerramientas = ({ titulo, imagen, parrafo, conocimiento, nivel, anios, usos }) => {
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        p: '1rem',
        mb: 0,
        borderTop: `4px solid ${primary}`,
      }}
    >
      <Box
        width={{ xs: '100%', sm: '8rem', md: '12rem' }}
        height={{ xs: '8rem', sm: 'auto' }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexShrink={0}
      >
        <CardMedia
          sx={{
            ml: { xs: 0, sm: '10px' },
            padding: { xs: '0.5em', sm: '1em' },
            objectFit: 'contain',
            height: '100%',
            maxWidth: { xs: '8rem', sm: '100%' },
          }}
          image={imagen}
          component='img'
          alt={titulo}
          title={titulo}
          loading='lazy'
        />
      </Box>

      <CardContent sx={{ flex: 1 }}>
        <Typography variant='h2' component='div' fontSize='clamp(1.2rem, 2.5vw, 2rem)' color='primary'>
          {titulo}
        </Typography>

        {/* Nivel + anios */}
        <Box display='flex' alignItems='center' justifyContent='space-between' mt='0.4rem' mb='0.2rem'>
          <Typography variant='h4' fontSize='clamp(0.85rem, 1.5vw, 1.25rem)'>
            {conocimiento}
          </Typography>
          {anios && (
            <Typography variant='h4' color='text.secondary' fontSize='clamp(0.75rem, 1.2vw, 1rem)'>
              {anios} {anios === 1 ? 'a\u00f1o' : 'a\u00f1os'}
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
              mb: '0.5rem',
              backgroundColor: theme.palette.primary.light,
              '& .MuiLinearProgress-bar': { backgroundColor: primary, borderRadius: 3 },
            }}
          />
        )}

        <Typography variant='h4' fontSize='clamp(0.85rem, 1.5vw, 1.25rem)'>{parrafo}</Typography>

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
