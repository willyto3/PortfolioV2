import Secciones, { agruparPorCategoria } from '../../components/Secciones'
import CardHerramientas from './CardHerramientas'

import { useT } from '../../locales/useT'

const Herramientas = () => {
  const t = useT()

  return (
    <Secciones
      grupos={agruparPorCategoria(t.estudios.herramientas.items)}
      Tarjeta={CardHerramientas}
      getKey={item => item.titulo}
    />
  )
}
export default Herramientas
