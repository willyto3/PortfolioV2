// Importamos createSlice de ReduxJS/Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Creamos las constantes iniciales
const initialState = {
  mode: 'light',
}

// Creamos los reducers
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

// Exportamos las Acciones
export const { setMode } = globalSlice.actions

// Exportamos el Reducer
export default globalSlice.reducer
