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
        title: 'Inicio',
        element: <Home />,
      },
      {
        path: '/experiencia',
        title: 'Experiencia',
        element: <Experiencia />,
      },
      {
        path: '/estudios',
        title: 'Estudios',
        element: <Estudios />,
      },
      {
        path: '/herramientas',
        title: 'Herramientas',
        element: <Herramientas />,
      },
      {
        path: '/proyectos',
        title: 'Proyectos',
        element: <Proyectos />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
])
