import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useCVStore = create(
  persist(
    set => ({
      mode: 'dark',
      setMode: () =>
        set(state => ({ mode: state.mode === 'dark' ? 'light' : 'dark' })),
      language: 'es',
      setLanguage: lang => set({ language: lang }),
    }),
    {
      name: 'cv',
      version: 1,
      // Obligatoria en cuanto existe version: sin ella zustand tira lo guardado
      // y todo visitante que ya tuviera preferencias pierde tema e idioma.
      // La forma de la v0 era ya {mode, language}, asi que pasa tal cual; al
      // cambiarla de verdad, traducir aqui segun versionPrevia.
      migrate: estadoPrevio => estadoPrevio,
    }
  )
)