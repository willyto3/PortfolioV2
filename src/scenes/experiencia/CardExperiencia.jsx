import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import CheckIcon from '@mui/icons-material/Check'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PlaceIcon from '@mui/icons-material/Place'

import { useTheme } from '@mui/material'
import { useT } from '../../locales/useT'

// Devuelve la imagen del modo actual y si se esta cayendo al recurso del modo
// contrario. Hoy todos los logos de Experiencia tienen las dos variantes; si
// uno nuevo llega solo con la clara, en modo oscuro se sirve esa y ese caso
// necesita la placa clara. Los que si tienen variante (Applus.B y companeros) son tinta
// blanca y sobre una placa clara desapareceran, por eso no se aplica a todos.
const pickByTheme = (mode, light, dark, fallback) => {
  const propia = mode === 'dark' ? dark : light
  return {
    src: propia || light || dark || fallback,
    necesitaPlaca: !propia && mode === 'dark',
  }
}

const InfoRow = ({ icon: Icon, children, color }) => (
  <Box
    display='flex'
    alignItems='flex-start'
    gap='6px'
    sx={{ color: 'text.secondary' }}
  >
    <Icon fontSize='small' sx={{ color, mt: '2px', flexShrink: 0 }} />
    <Typography
      component='span'
      fontSize='clamp(0.85rem, 1.3vw, 1rem)'
      lineHeight={1.5}
    >
      {children}
    </Typography>
  </Box>
)

const CardExperiencia = ({
  image,
  imageLight,
  imageDark,
  clientImage,
  clientImageLight,
  clientImageDark,
  clientAlt,
  alt,
  cargo,
  empresa,
  cliente,
  fecha,
  lugar,
  actividades,
}) => {
  const t = useT()
  const theme = useTheme()
  const primary = theme.palette.primary.main
  const labels = t.experienciaUI.labels

  const logo = pickByTheme(theme.palette.mode, imageLight, imageDark, image)
  const logoCliente = pickByTheme(theme.palette.mode, clientImageLight, clientImageDark, clientImage)
  const placa = theme.palette.placaLogo

  const imgCliente = logoCliente.src && (
    <Box
      component='img'
      src={logoCliente.src}
      alt={clientAlt || cliente || labels.logoCliente}
      loading='lazy'
      onError={event => {
        event.currentTarget.style.display = 'none'
      }}
      sx={{
        height: { xs: '36px', lg: 'auto' },
        width: 'auto',
        maxHeight: { lg: '4.5rem' },
        objectFit: 'contain',
        maxWidth: { xs: '180px', lg: '100%' },
        flexShrink: 0,
        ...(logoCliente.necesitaPlaca && {
          backgroundColor: placa,
          borderRadius: 1,
          p: '2px',
        }),
      }}
    />
  )

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // El canto de la tarjeta no puede depender solo de la sombra
        border: `1px solid ${theme.palette.bordeSuperficie}`,
        borderTop: `4px solid ${primary}`,
        width: '100%',
        height: '100%',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-2px)',
        },
      }}
    >
      {/* En PC la cabecera es una fila: logo, datos del cargo y logo del
          cliente; las actividades van debajo a todo el ancho para que la
          tarjeta no se alargue. En movil todo se apila como antes. */}
      <Box display='flex' flexDirection={{ xs: 'column', lg: 'row' }} alignItems={{ lg: 'center' }}>
        <Box
          width={{ xs: '100%', lg: '10rem', xl: '12rem' }}
          height={{ xs: '9rem', lg: 'auto' }}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexShrink={0}
          p={{ xs: '0.75rem', lg: '1rem' }}
        >
          {/* Caja comun para todos los logos: los anchos (Applus) y los altos
              (BV) ocupan lo mismo a la vista. La placa abraza el logo en vez
              de pintar toda la columna. */}
          <CardMedia
            component='img'
            sx={{
              objectFit: 'contain',
              width: 'auto',
              height: 'auto',
              maxWidth: { xs: '10rem', lg: '100%' },
              maxHeight: { xs: '7rem', lg: '7rem' },
              ...(logo.necesitaPlaca && {
                backgroundColor: placa,
                borderRadius: 1,
                p: '0.5rem',
              }),
            }}
            image={logo.src}
            alt={alt}
            loading='lazy'
          />
        </Box>

        <Box flex={1} minWidth={0} px={{ xs: '1rem', lg: '0.5rem' }} pt={{ xs: 0, lg: '1rem' }}>
          <Typography
            variant='h3'
            component='h2'
            textTransform='uppercase'
            fontWeight='bold'
            fontSize='clamp(1.05rem, 2vw, 1.6rem)'
            lineHeight={1.25}
            mb={{ xs: '8px', sm: '12px' }}
            sx={{ color: primary }}
          >
            {cargo}
          </Typography>

          {(empresa || cliente) && (
            <Box
              mb={{ xs: '8px', sm: '12px' }}
              display='flex'
              alignItems='center'
              justifyContent='flex-start'
              gap={{ xs: 1, md: 5 }}
              flexWrap='wrap'
            >
              <Box flex='1 1 240px' display='flex' flexDirection='column' gap='4px'>
                {empresa && (
                  <InfoRow icon={BusinessOutlinedIcon} color='text.secondary'>
                    {labels.contratante}: {empresa}
                  </InfoRow>
                )}
                {cliente && (
                  <InfoRow icon={BusinessCenterOutlinedIcon} color='text.secondary'>
                    {labels.servicioPara}: {cliente}
                  </InfoRow>
                )}
              </Box>
              {/* En movil el logo del cliente sigue junto a estos datos */}
              {imgCliente && <Box display={{ xs: 'flex', lg: 'none' }}>{imgCliente}</Box>}
            </Box>
          )}

          <Box display='flex' alignItems='center' gap='1rem' flexWrap='wrap'>
            <InfoRow icon={DateRangeIcon} color='text.secondary'>{fecha}</InfoRow>
            <InfoRow icon={PlaceIcon} color='text.secondary'>{lugar}</InfoRow>
          </Box>
        </Box>

        {imgCliente && (
          <Box
            display={{ xs: 'none', lg: 'flex' }}
            width={{ lg: '8rem', xl: '10rem' }}
            flexShrink={0}
            justifyContent='center'
            alignItems='center'
            p='1rem'
          >
            {imgCliente}
          </Box>
        )}
      </Box>

      <CardContent sx={{ flex: '1 0 auto', pt: '0.5rem' }}>
        <Box component='ul' sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {actividades.map(item => (
            <Box component='li' key={item} sx={{ py: '2px' }}>
              <InfoRow icon={CheckIcon} color={primary}>{item}</InfoRow>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
export default CardExperiencia
