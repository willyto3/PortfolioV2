// Importacion de React Router Dom
import { createBrowserRouter } from 'react-router-dom'
import LayoutPublic from '../layout/LayoutPublic'
// Importacion de Paginas
import Home from '../scenes/home'
import Error404 from '../scenes/error404'

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
