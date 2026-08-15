import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'

import { useT } from '../locales/useT'

const SOCIAL_COLORS = {
  linkedin: '#0e76a8',
  whatsapp: '#25D366',
}

// El footer es fijo, asi que sale del flujo del documento. LayoutPublic reserva
// esta misma altura como padding inferior del <main> para que nunca tape nada.
export const ALTURA_FOOTER = { xs: '44px', sm: '48px' }

const Footer = () => {
  const t = useT()
  const theme = useTheme()
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const principal = theme.palette.primary.main

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
    <Paper
      component='footer'
      square
      elevation={0}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar,
        height: ALTURA_FOOTER,
        backgroundColor: neutralLight,
        borderTop: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        px: { xs: 0.5, sm: 2 },
      }}
    >
      {/* Contacto: en movil solo el icono, el texto entra a partir de sm */}
      <Box display='flex' alignItems='center' alignSelf='stretch' gap={{ xs: 0, sm: 2 }} minWidth={0}>
        {contactos.map(({ key, icon: Icon, href, label, aria }) => (
          <Box
            key={key}
            component='a'
            href={href}
            aria-label={`${aria}: ${label}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // Ocupa todo el alto del footer para dar area de pulsacion en movil
              alignSelf: 'stretch',
              gap: '0.35rem',
              minWidth: 0,
              px: { xs: 1.25, sm: 0 },
              color: dark,
              textDecoration: 'none',
              '&:hover': { color: principal },
            }}
          >
            <Icon sx={{ fontSize: { xs: 20, sm: 18 }, color: principal, flexShrink: 0 }} />
            <Typography
              component='span'
              noWrap
              fontSize='0.85rem'
              sx={{ display: { xs: 'none', sm: 'inline' } }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box display='flex' alignItems='center' flexShrink={0}>
        {redes.map(({ key, icon: Icon, url, hover, aria }) => (
          <IconButton
            key={key}
            component='a'
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={aria}
            sx={{ color: dark, p: { xs: '9px', sm: '8px' }, '&:hover': { color: hover } }}
          >
            <Icon sx={{ fontSize: { xs: 22, sm: 24 } }} />
          </IconButton>
        ))}
      </Box>
    </Paper>
  )
}
export default Footer
