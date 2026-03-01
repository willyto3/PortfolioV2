import { locales } from './index'
import { useCVStore } from '../store/store'

export const useT = () => {
  const language = useCVStore(state => state.language)
  return locales[language] ?? locales.es
}
