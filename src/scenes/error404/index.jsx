import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

import { useT } from '../../locales/useT'

const Error404 = () => {
  const t = useT()
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
        {t.error404.subtitulo}
      </Typography>

      <Typography variant='h4' color='text.secondary' mt='1rem' maxWidth='480px'>
        {t.error404.descripcion}
      </Typography>

      <Button
        variant='contained'
        size='large'
        onClick={() => navigate('/')}
        sx={{ mt: '2rem', px: '2rem', py: '0.75rem', fontSize: '1rem' }}
      >
        {t.error404.boton}
      </Button>
    </Box>
  )
}
export default Error404
