// Importacion de React Router Dom
import { createBrowserRouter } from 'react-router-dom'
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
// Router de rutas reales (no hash): cada pagina es una URL propia e indexable.
// Exige que el host reescriba cualquier ruta a /index.html; en Render es una
// regla de tipo Rewrite con Source /* y Destination /index.html. Sin esa regla
// todo lo que no sea / devuelve 404 al recargar o al entrar por enlace directo.
export const router = createBrowserRouter([
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
