// Importacion de React Router Dom
import { createHashRouter } from 'react-router-dom'

// Importacion de Paginas
import LayoutPublic from '../layout/LayoutPublic'
import Error404 from '../scenes/error404'
import Experiencia from '../scenes/experiencia'
import Home from '../scenes/home'
import Proyectos from '../scenes/proyectos'
import Estudios from '../scenes/estudios'
import Herramientas from '../scenes/herramientas'

// Funcion Router
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
