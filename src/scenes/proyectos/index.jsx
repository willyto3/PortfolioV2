import Secciones, { agruparPorCategoria } from '../../components/Secciones'
import CardProyecto from './CardProyecto'

import { useT } from '../../locales/useT'

const Proyectos = () => {
  const t = useT()

  return (
    <Secciones
      grupos={agruparPorCategoria(t.proyectos.items)}
      Tarjeta={CardProyecto}
      getKey={proyecto => proyecto.nombre}
      anchoTarjeta={{ xs: 12, md: 5.8 }}
    />
  )
}
export default Proyectos
