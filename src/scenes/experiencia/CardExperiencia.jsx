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

const CardExperiencia = ({
  image,
  alt,
  cargo,
  fecha,
  lugar,
  actividades,
  jefe,
}) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
      <Box
        width={{ xs: '100%', sm: '12rem', md: '15rem' }}
        maxHeight={{ xs: '10rem', sm: 'none' }}
        display='flex'
        justifyContent='center'
        flexShrink={0}
      >
        <CardMedia
          component='img'
          sx={{
            ml: { xs: 0, sm: '10px' },
            padding: { xs: '0.5em', sm: '1em' },
            objectFit: 'contain',
            alignSelf: 'center',
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
          >
            {cargo}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
            display='flex'
            alignItems='center'
            gap='4px'
          >
            <DateRangeIcon fontSize='small' /> {fecha}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
            display='flex'
            alignItems='center'
            gap='4px'
          >
            <PlaceIcon fontSize='small' /> {lugar}
          </Typography>

          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              height: { xs: 160, sm: 190, md: 220 },
              '& ul': { padding: 0 },
            }}
          >
            {actividades.map(item => (
              <li key={`section-${item}`}>
                <ul>
                  <ListItem key={`item-${item}`} sx={{ p: '0' }}>
                    <ListItemText>
                      <Typography
                        display='flex'
                        alignItems='center'
                        gap='4px'
                        fontSize='clamp(0.8rem, 1.5vw, 1rem)'
                      >
                        <CheckIcon fontSize='small' /> {item}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </ul>
              </li>
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
            <BusinessCenterOutlinedIcon fontSize='small' /> {jefe}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
export default CardExperiencia
