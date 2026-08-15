import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import CheckIcon from '@mui/icons-material/Check'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PlaceIcon from '@mui/icons-material/Place'

import { useTheme } from '@mui/material'
import { useT } from '../../locales/useT'

const pickByTheme = (mode, light, dark, fallback) =>
  mode === 'dark' ? (dark || light || fallback) : (light || dark || fallback)

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
  jefe,
}) => {
  const t = useT()
  const theme = useTheme()
  const primary = theme.palette.primary.main
  const labels = t.experienciaUI.labels

  const imageByTheme = pickByTheme(theme.palette.mode, imageLight, imageDark, image)
  const clientImageByTheme = pickByTheme(theme.palette.mode, clientImageLight, clientImageDark, clientImage)

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
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
      <Box
        width={{ xs: '100%', lg: '12rem', xl: '15rem' }}
        height={{ xs: '9rem', lg: 'auto' }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexShrink={0}
      >
        <CardMedia
          component='img'
          sx={{
            padding: { xs: '0.5em', lg: '1em' },
            objectFit: 'contain',
            height: '100%',
            maxWidth: { xs: '9rem', lg: '100%' },
          }}
          image={imageByTheme}
          alt={alt}
          loading='lazy'
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            variant='h3'
            component='h3'
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
                  <InfoRow icon={BusinessOutlinedIcon} color={primary}>
                    {labels.contratante}: {empresa}
                  </InfoRow>
                )}
                {cliente && (
                  <InfoRow icon={BusinessCenterOutlinedIcon} color={primary}>
                    {labels.servicioPara}: {cliente}
                  </InfoRow>
                )}
              </Box>
              {clientImageByTheme && (
                <Box
                  component='img'
                  src={clientImageByTheme}
                  alt={clientAlt || cliente || labels.logoCliente}
                  loading='lazy'
                  onError={event => {
                    event.currentTarget.style.display = 'none'
                  }}
                  sx={{
                    height: '36px',
                    width: 'auto',
                    objectFit: 'contain',
                    maxWidth: '180px',
                    flexShrink: 0,
                  }}
                />
              )}
            </Box>
          )}

          <Box display='flex' alignItems='center' gap='1rem' flexWrap='wrap' mb='4px'>
            <InfoRow icon={DateRangeIcon} color={primary}>{fecha}</InfoRow>
            <InfoRow icon={PlaceIcon} color={primary}>{lugar}</InfoRow>
          </Box>

          <Box component='ul' sx={{ listStyle: 'none', p: 0, m: 0, my: '6px' }}>
            {actividades.map(item => (
              <Box component='li' key={item} sx={{ py: '2px' }}>
                <InfoRow icon={CheckIcon} color={primary}>{item}</InfoRow>
              </Box>
            ))}
          </Box>

          {jefe && (
            <InfoRow icon={PersonOutlineOutlinedIcon} color={primary}>
              {labels.jefe}: {jefe}
            </InfoRow>
          )}
        </CardContent>
      </Box>
    </Card>
  )
}
export default CardExperiencia
