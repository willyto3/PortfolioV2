import React from 'react'
import ReactDOM from 'react-dom/client'
// Importacion del Router
import { router } from './router'
// Importacion del Router Provider
import { RouterProvider } from 'react-router-dom'

// importacion del estilo global
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // Proveemos las Rutas */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
