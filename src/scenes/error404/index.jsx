import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      flexGrow={1}
      px='2rem'
      py='4rem'
    >
      <Typography
        variant='h1'
        color='primary'
        sx={{ fontWeight: 'bold', lineHeight: 1 }}
      >
        404
      </Typography>

      <Typography variant='h2' mt='1rem'>
        Página no encontrada
      </Typography>

      <Typography variant='h4' color='text.secondary' mt='1rem' maxWidth='480px'>
        La dirección que buscas no existe o fue movida. Regresa al inicio y
        sigue explorando.
      </Typography>

      <Button
        variant='contained'
        size='large'
        onClick={() => navigate('/')}
        sx={{ mt: '2rem', px: '2rem', py: '0.75rem', fontSize: '1rem' }}
      >
        Volver al Inicio
      </Button>
    </Box>
  )
}
export default Error404
