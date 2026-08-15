import Box from '@mui/material/Box'

// Estrella de 5 puntas centrada en el origen, radio exterior 1
const ESTRELLA =
  'M0,-1L.2245,-.309L.951,-.309L.3634,.1181L.5878,.809L0,.382L-.5878,.809L-.3634,.1181L-.951,-.309L-.2245,-.309Z'

// A este tamaño las 50 estrellas reales no se distinguen: basta una retícula 3x3
const ESTRELLAS = [3.2, 8, 12.8].flatMap(x => [4.04, 8.08, 12.12].map(y => [x, y]))

const ALTO_FRANJA = 30 / 13

const banderas = {
  us: (
    <>
      <rect width='40' height='30' fill='#FFFFFF' />
      {[0, 2, 4, 6, 8, 10, 12].map(i => (
        <rect key={i} y={i * ALTO_FRANJA} width='40' height={ALTO_FRANJA} fill='#B22234' />
      ))}
      <rect width='16' height={7 * ALTO_FRANJA} fill='#3C3B6E' />
      {ESTRELLAS.map(([x, y]) => (
        <path
          key={`${x}-${y}`}
          d={ESTRELLA}
          fill='#FFFFFF'
          transform={`translate(${x} ${y}) scale(1.5)`}
        />
      ))}
    </>
  ),
  co: (
    <>
      <rect width='40' height='15' fill='#FCD116' />
      <rect y='15' width='40' height='7.5' fill='#003893' />
      <rect y='22.5' width='40' height='7.5' fill='#CE1126' />
    </>
  ),
}

// Decorativa: el boton que la contiene ya lleva su propio aria-label
const BanderaIcono = ({ code, height = '1.4rem' }) => (
  <Box
    component='svg'
    viewBox='0 0 40 30'
    aria-hidden='true'
    focusable='false'
    sx={{
      display: 'block',
      height,
      width: 'auto',
      borderRadius: '3px',
      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.18)',
    }}
  >
    {banderas[code]}
  </Box>
)

export default BanderaIcono
