// Importacion de React Router Dom
import { createBrowserRouter } from 'react-router-dom'

// Importacion de Paginas
import LayoutPublic from '../layout/LayoutPublic'
import Error404 from '../scenes/error404'
import Experiencia from '../scenes/experiencia'
import Home from '../scenes/home'
import Proyectos from '../scenes/proyectos'
import Estudios from '../scenes/estudios'
import Herramientas from '../scenes/herramientas'

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
