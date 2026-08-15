import Secciones from '../../components/Secciones'
import CardEstudio from './CardEstudio'

import { useT } from '../../locales/useT'

const Estudios = () => {
  const t = useT()
  const porTipo = tipo => t.estudios.tarjetas.filter(card => card.tipo === tipo)

  return (
    <Secciones
      grupos={[
        { titulo: t.estudios.tituloFormales, items: porTipo('formal') },
        { titulo: t.estudios.tituloCortos, items: porTipo('corto') },
      ]}
      Tarjeta={CardEstudio}
      getKey={card => card.institucion + card.fecha}
    />
  )
}
export default Estudios
