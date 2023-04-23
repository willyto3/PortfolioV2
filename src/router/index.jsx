// Importacion de React Router Dom
import { createBrowserRouter } from 'react-router-dom'

// Importacion de Paginas
import LayoutPublic from '../layout/LayoutPublic'
import Contacto from '../scenes/contacto'
import Error404 from '../scenes/error404'
import Experiencia from '../scenes/experiencia'
import Home from '../scenes/home'
import Proyectos from '../scenes/proyectos'
import Estudios from '../scenes/estudios'

// Funcion Router
export const router = createBrowserRouter([
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
        path: '/proyectos',
        title: 'Proyectos',
        element: <Proyectos />,
      },
      {
        path: '/contacto',
        title: 'Contacto',
        element: <Contacto />,
      },
    ],
  },
])
