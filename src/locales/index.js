import { es } from './es'

// Para agregar un idioma:
// 1. Crear el archivo src/locales/en.js con la misma estructura
// 2. Importarlo aquí: import { en } from './en'
// 3. Agregarlo al objeto locales: locales = { es, en }
// 4. Cambiar defaultLocale al idioma deseado

export const locales = { es }

export const defaultLocale = 'es'

// t = textos del idioma activo
export const t = locales[defaultLocale]
