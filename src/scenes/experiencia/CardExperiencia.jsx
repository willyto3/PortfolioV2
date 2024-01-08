import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

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
  const theme = useTheme()

  return (
    <Card sx={{ display: 'flex'}}>
      <Box width='15rem' display='flex'>
        <CardMedia
          component='img'
          sx={{
            ml: '10px',
            padding: '1em 1em 1em 1em',
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
            fontSize='max(1.6rem, 1.2vw)'
            mb='15px'
          >
            {cargo}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
            display='flex'
            alignContent='center'
          >
            <DateRangeIcon /> {fecha}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
            display='flex'
            alignContent='center'
          >
            <PlaceIcon /> {lugar}
          </Typography>

          <List
            sx={{
              width: '100%',
              maxWidth: 700,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              height: 210,
              '& ul': { padding: 0 },
            }}
          >
            {actividades.map(item => (
              <li key={`section-${item}`}>
                <ul p='0'>
                  <ListItem key={`item-${item}`} sx={{ p: '0' }}>
                    <ListItemText>
                      <Typography display='flex' alignContent='center'>
                        <CheckIcon /> {item}
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
            alignContent='center'
          >
            <BusinessCenterOutlinedIcon /> {jefe}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  )
}
export default CardExperiencia
