// Importacion de React Router Dom
import { createHashRouter } from 'react-router-dom'
import { lazy } from 'react'

// Importacion de Paginas
import LayoutPublic from '../layout/LayoutPublic'
import Error404 from '../scenes/error404'
import Home from '../scenes/home'

// Home y el layout van en el bundle inicial porque son lo primero que se pinta.
// El resto se parte en chunks: quien entra por la portada no descarga las
// tarjetas de las otras cuatro paginas. LayoutPublic envuelve el Outlet en un
// Suspense, asi que la barra y el pie siguen visibles mientras llega el trozo.
const Experiencia = lazy(() => import('../scenes/experiencia'))
const Estudios = lazy(() => import('../scenes/estudios'))
const Herramientas = lazy(() => import('../scenes/herramientas'))
const Proyectos = lazy(() => import('../scenes/proyectos'))

// Funcion Router
//
// Router de hash. Se volvio a el porque Render servia 404 en /experiencia y las
// otras tres al recargar o al entrar por enlace directo: las rutas reales
// exigen una regla de rewrite en el host que no estaba puesta.
//
// Para recuperar las URLs indexables hay que, EN ESTE ORDEN:
//   1. crear en Render la regla Rewrite: Source /* -> Destination /index.html
//   2. volver al router de navegador
//   3. devolver al sitemap las cuatro rutas y el canonical por ruta
//   4. reponer en index.html el puente de enlaces /#/ruta -> /ruta
export const router = createHashRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/experiencia',
        element: <Experiencia />,
      },
      {
        path: '/estudios',
        element: <Estudios />,
      },
      {
        path: '/herramientas',
        element: <Herramientas />,
      },
      {
        path: '/proyectos',
        element: <Proyectos />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
])
