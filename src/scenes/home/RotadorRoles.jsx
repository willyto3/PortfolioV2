import { useEffect, useRef, useState } from 'react'
import { Box, Fade, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'

import { useT } from '../../locales/useT'

const INTERVAL_MS = 5000
// El ciclo gasta dos fundidos: uno para salir y otro para entrar, con el cambio
// de texto en el punto de opacidad cero. A 800ms eso dejaba el rol en
// transicion 1,6s de cada 5 -un tercio del tiempo- y con un instante en blanco
// en el elemento mas visible de la portada. A 350ms baja a 0,7s.
const FADE_MS = 350

// Quien pide menos movimiento ve el primer rol fijo: la rotacion automatica es
// justo el tipo de cambio que provoca mareo o distrae en lectura con dificultad.
const usaMenosMovimiento = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function RotadorRoles() {
  const t = useT()
  const theme = useTheme()
  const primary = theme.palette.primary.main

  const items = t.home.roles
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [pausado, setPausado] = useState(false)
  const [menosMovimiento, setMenosMovimiento] = useState(usaMenosMovimiento)

  // La preferencia puede cambiar en caliente desde el sistema operativo
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const alCambiar = evento => setMenosMovimiento(evento.matches)
    mq.addEventListener('change', alCambiar)
    return () => mq.removeEventListener('change', alCambiar)
  }, [])

  // El idioma puede traer una lista mas corta. Se acota al leer en vez de
  // corregirlo con un efecto, que provocaria un render en cascada.
  const indiceSeguro = index < items.length ? index : 0

  const fadeRef = useRef(null)

  useEffect(() => {
    if (items.length <= 1 || pausado || menosMovimiento) return

    const id = setInterval(() => {
      setVisible(false)
      // Se guarda en una ref para poder cancelarlo: sin esto, desmontar o
      // pausar durante los 800 ms del fundido dejaba un temporizador suelto.
      fadeRef.current = setTimeout(() => {
        setIndex(i => (i + 1) % items.length)
        setVisible(true)
      }, FADE_MS)
    }, INTERVAL_MS)

    return () => {
      clearInterval(id)
      clearTimeout(fadeRef.current)
    }
  }, [items.length, pausado, menosMovimiento])

  // Al pausar en mitad de un fundido el texto debe reaparecer. Es estado
  // derivado, no un efecto: pausado y menosMovimiento mandan sobre visible.
  const mostrar = visible || pausado || menosMovimiento

  return (
    <Box
      // A 320-360px los roles mas largos ocupan dos lineas y los cortos una,
      // asi que la caja pasaba de 36 a 56px cada cinco segundos y arrastraba
      // la bio y los chips. Se reservan las dos lineas: 48px de texto mas los
      // 8px de py, que con box-sizing: border-box cuentan dentro del minimo.
      sx={{ py: '0.25rem', minHeight: { xs: '3.5rem', md: '3.25rem' } }}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <Fade in={mostrar} timeout={menosMovimiento ? 0 : FADE_MS}>
        <Typography
          variant='h2'
          component='p'
          fontSize='clamp(1.25rem, 3.5vw, 2.5rem)'
          fontWeight='bold'
          sx={{
            color: primary,
            lineHeight: 1.2,
            m: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', lg: 'flex-start' },
          }}
        >
          {items[indiceSeguro]}
        </Typography>
      </Fade>
    </Box>
  )
}
