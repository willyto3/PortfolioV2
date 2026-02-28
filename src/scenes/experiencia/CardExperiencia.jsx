import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import CheckIcon from '@mui/icons-material/Check'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PlaceIcon from '@mui/icons-material/Place'

import { useTheme } from '@mui/material'

const CardExperiencia = ({
  image,
  alt,
  cargo,
  fecha,
  lugar,
  actividades,
  jefe,
}) => {
  const theme = useTheme()
  const primary = theme.palette.primary.main

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        borderTop: `4px solid ${primary}`,
        width: '100%',
        height: '100%',
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
          image={image}
          alt={alt}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            textTransform='uppercase'
            component='div'
            variant='h2'
            fontWeight='bold'
            fontSize='clamp(1rem, 2vw, 1.6rem)'
            mb={{ xs: '8px', sm: '15px' }}
            sx={{ color: primary }}
          >
            {cargo}
          </Typography>

          <Box display='flex' alignItems='center' gap='1rem' flexWrap='wrap'>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
              display='flex'
              alignItems='center'
              gap='4px'
              fontSize='clamp(0.8rem, 1.5vw, 1rem)'
            >
              <DateRangeIcon fontSize='small' sx={{ color: primary }} /> {fecha}
            </Typography>

            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
              display='flex'
              alignItems='center'
              gap='4px'
              fontSize='clamp(0.8rem, 1.5vw, 1rem)'
            >
              <PlaceIcon fontSize='small' sx={{ color: primary }} /> {lugar}
            </Typography>
          </Box>

          <List
            sx={{
              width: '100%',
              p: 0,
            }}
          >
            {actividades.map(item => (
              <ListItem key={item} sx={{ p: '2px 0' }}>
                <ListItemText>
                  <Typography
                    display='flex'
                    alignItems='center'
                    gap='4px'
                    fontSize='clamp(0.8rem, 1.5vw, 1rem)'
                  >
                    <CheckIcon fontSize='small' sx={{ color: primary, flexShrink: 0 }} />
                    {item}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>

          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
            display='flex'
            alignItems='center'
            gap='4px'
            fontSize='clamp(0.8rem, 1.5vw, 1rem)'
          >
            <BusinessCenterOutlinedIcon fontSize='small' sx={{ color: primary }} /> {jefe}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
export default CardExperiencia
