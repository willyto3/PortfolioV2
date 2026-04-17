import { useEffect, useState } from 'react'
import { Box, Fade, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'

import { useT } from '../../locales/useT'

const INTERVAL_MS = 5000
const FADE_MS = 800

export function RotadorRoles() {
  const t = useT()
  const theme = useTheme()
  const primary = theme.palette.primary.main

  const items = t.home.roles
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (items.length <= 1) return
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % items.length)
        setVisible(true)
      }, FADE_MS)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [items.length])

  return (
    <Box sx={{ py: '0.25rem', minHeight: { xs: '2.25rem', md: '3.25rem' } }}>
      <Fade in={visible} timeout={FADE_MS}>
        <Typography
          variant='h2'
          component='div'
          fontSize='clamp(1.25rem, 3.5vw, 2.5rem)'
          fontWeight='bold'
          sx={{
            color: primary,
            lineHeight: 1.2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', lg: 'flex-start' },
          }}
        >
          {items[index]}
        </Typography>
      </Fade>
    </Box>
  )
}
