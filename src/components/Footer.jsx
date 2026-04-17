import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'

import { useLocation, useNavigate } from 'react-router-dom'

import { useT } from '../locales/useT'

const SOCIAL_COLORS = {
  linkedin: '#0e76a8',
  whatsapp: '#25D366',
}

const openExternal = url => window.open(url, '_blank', 'noopener,noreferrer')

const Footer = () => {
  const t = useT()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const theme = useTheme()
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const principal = theme.palette.primary.main

  const isHome = pathname === '/'

  const contactos = [
    {
      key: 'tel',
      icon: PhoneIcon,
      href: `tel:${t.contacto.telefono}`,
      label: t.contacto.telefono,
      aria: t.footer.aria.telefono,
    },
    {
      key: 'mail',
      icon: EmailIcon,
      href: `mailto:${t.contacto.email}`,
      label: t.contacto.email,
      aria: t.footer.aria.email,
    },
  ]

  const redes = [
    {
      key: 'linkedin',
      icon: LinkedInIcon,
      url: t.contacto.linkedin,
      hover: SOCIAL_COLORS.linkedin,
      aria: t.footer.aria.linkedin,
    },
    {
      key: 'github',
      icon: GitHubIcon,
      url: t.contacto.github,
      hover: principal,
      aria: t.footer.aria.github,
    },
    {
      key: 'whatsapp',
      icon: WhatsAppIcon,
      url: t.contacto.whatsapp,
      hover: SOCIAL_COLORS.whatsapp,
      aria: t.footer.aria.whatsapp,
    },
  ]

  return (
    <Paper>
      <Grid
        container
        mt={0}
        pt='1rem'
        pb='1rem'
        spacing={2}
        alignItems='stretch'
        justifyContent='center'
        sx={{ backgroundColor: neutralLight, px: { xs: '1rem', sm: '2rem' } }}
      >
        {/* Columna 1 / Fila 1 izq: Nombre + Contacto */}
        <Grid
          size={{ xs: 6, md: isHome ? 6 : 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'center',
            order: { xs: 1, md: 1 },
          }}
        >
          <Typography
            component='p'
            fontWeight='bold'
            fontSize='clamp(1.8rem, 3vw, 2.8rem)'
            lineHeight={1.15}
            color={dark}
            textAlign={{ xs: 'left', md: 'center' }}
            sx={{
              m: 0,
              '&:hover': { color: principal, cursor: 'pointer' },
            }}
            onClick={() => navigate('/')}
          >
            {t.nav.nombre}
          </Typography>

          {/* Teléfono y Email */}
          <Box
            display='flex'
            flexDirection='column'
            alignItems={{ xs: 'flex-start', md: 'center' }}
            gap='0.3rem'
            mt='0.4rem'
          >
            {contactos.map(({ key, icon: Icon, href, label, aria }) => (
              <Box key={key} display='flex' alignItems='center' gap='0.4rem'>
                <Icon sx={{ fontSize: '1rem', color: principal }} />
                <Typography
                  component='a'
                  href={href}
                  aria-label={aria}
                  fontSize='clamp(0.8rem, 1.2vw, 0.95rem)'
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover': { color: principal, textDecoration: 'underline' },
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Columna 2 / Fila 2: Descripción */}
        {!isHome && (
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 3, md: 2 } }}>
            <Typography
              variant='h4'
              component='p'
              mt={{ xs: 0, md: '1rem' }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              {t.footer.descripcion}
            </Typography>
          </Grid>
        )}

        {/* Columna 3 / Fila 1 der: Redes + Copyright */}
        <Grid
          size={{ xs: 6, md: isHome ? 6 : 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-end', md: 'center' },
            justifyContent: 'center',
            order: { xs: 2, md: 3 },
          }}
        >
          <Box display='flex' gap='0.25rem'>
            {redes.map(({ key, icon: Icon, url, hover, aria }) => (
              <IconButton
                key={key}
                aria-label={aria}
                onClick={() => openExternal(url)}
                sx={{ color: dark, '&:hover': { color: hover } }}
              >
                <Icon sx={{ fontSize: { xs: 36, sm: 40 } }} />
              </IconButton>
            ))}
          </Box>

          <Typography
            component='p'
            fontSize={{ xs: '0.75rem', sm: '0.8rem' }}
            textAlign={{ xs: 'right', md: 'center' }}
            mt='0.5rem'
            mb={0}
          >
            {`${t.footer.hechoCon} @ ${new Date().getFullYear()}`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Footer
