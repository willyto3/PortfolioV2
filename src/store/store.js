import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useCVStore = create(
  persist(
    set => ({
      mode: 'dark',
      setMode: () =>
        set(state => ({ mode: state.mode === 'dark' ? 'light' : 'dark' })),
    }),
    { name: 'cv' }
  )
)