import React from 'react'
import ReactDOM from 'react-dom/client'
// Importacion del Router
import { router } from './router'
// Importacion del Router Provider
import { RouterProvider } from 'react-router-dom'
// Importamos el reducer del State
import globalReducer from './state'
// Importamos la configuración del store de Toolkit
import { configureStore } from '@reduxjs/toolkit'
// Importamos el Provider de React Redux
import { Provider } from 'react-redux'

import { setupListeners } from '@reduxjs/toolkit/dist/query'



// Creamos la constante Store
const store = configureStore({
  reducer: { global: globalReducer },
})

setupListeners(store.dispatch)
// importacion del tema de la aplicacion

// importacion del estilo global

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
