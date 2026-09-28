import {create} from 'zustand'
import { persist } from 'zustand/middleware'

// Solo cuenta en la primera visita: en cuanto hay algo en localStorage, manda
// lo guardado. Antes se forzaba 'dark' a todo el mundo, ignorando que el
// sistema operativo ya expresa esta preferencia.
const temaDelSistema = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export const useCVStore = create(
  persist(
    set => ({
      mode: temaDelSistema(),
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