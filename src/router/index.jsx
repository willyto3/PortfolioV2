// Importacion de React Router Dom
import { createBrowserRouter } from 'react-router-dom'

// Importacion de Paginas
import LayoutPublic from '../layout/LayoutPublic'
import Error404 from '../scenes/error404'
import Home from '../scenes/home'

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
    ],
  },
])
