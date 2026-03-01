import { es } from './es'
import { en } from './en'

export const locales = { es, en }

export const defaultLocale = 'es'

// t estático — solo para compatibilidad, usar useT() en componentes
export const t = locales[defaultLocale]
