import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useCVStore } from '../store/store'
import { useT } from '../locales/useT'

const ORIGEN = 'https://www.willycorzo.com'

const OG_LOCALE = { es: 'es_CO', en: 'en_US' }

// El mismo valor que index.html trae de serie. Se restaura al volver a una
// ruta conocida despues de haber pasado por una 404.
const ROBOTS_INDEXABLE =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

const fijarMeta = (selector, valor) => {
  const nodo = document.head.querySelector(selector)
  if (nodo) nodo.setAttribute('content', valor)
}

// Se recrea si falta: en una 404 el canonical se retira del head, y al volver
// a una ruta indexable hay que poder devolverlo.
const canonicalNode = () => {
  let nodo = document.head.querySelector('link[rel="canonical"]')
  if (!nodo) {
    nodo = document.createElement('link')
    nodo.setAttribute('rel', 'canonical')
    document.head.appendChild(nodo)
  }
  return nodo
}

// index.html solo puede declarar un juego de metadatos, y con rutas reales las
// cinco paginas comparten ese archivo. Sin esto las cinco URLs anunciarian el
// canonical de la home y los buscadores las descartarian como duplicados.
export const useMetadatosRuta = () => {
  const t = useT()
  const language = useCVStore(state => state.language)
  const { pathname } = useLocation()

  useEffect(() => {
    const conocida = Object.prototype.hasOwnProperty.call(t.seo, pathname)

    const meta = conocida
      ? t.seo[pathname]
      : {
          titulo: `${t.error404.subtitulo} | ${t.nav.nombre}`,
          descripcion: t.error404.descripcion,
        }

    // Una ruta inexistente no debe competir por indexacion ni declararse
    // canonica de si misma, pero sus enlaces si merecen seguirse.
    // Con router de hash la unica direccion indexable es la raiz: /#/experiencia
    // no es una URL propia para un rastreador. El canonical apunta siempre ahi,
    // mientras que og:url lleva el enlace real para que al compartir se abra la
    // pagina correcta. Al volver a rutas reales, canonical = ORIGEN + pathname.
    const url = conocida ? `${ORIGEN}/` : null
    const urlParaCompartir = conocida
      ? `${ORIGEN}/${pathname === '/' ? '' : '#' + pathname}`
      : null

    document.documentElement.lang = language
    document.title = meta.titulo

    fijarMeta('meta[name="description"]', meta.descripcion)
    fijarMeta('meta[name="robots"]', conocida ? ROBOTS_INDEXABLE : 'noindex, follow')
    fijarMeta('meta[property="og:title"]', meta.titulo)
    fijarMeta('meta[property="og:description"]', meta.descripcion)
    fijarMeta('meta[property="og:locale"]', OG_LOCALE[language] ?? OG_LOCALE.es)
    fijarMeta('meta[property="og:type"]', pathname === '/' ? 'profile' : 'website')
    fijarMeta('meta[name="twitter:title"]', meta.titulo)
    fijarMeta('meta[name="twitter:description"]', meta.descripcion)

    if (urlParaCompartir) fijarMeta('meta[property="og:url"]', urlParaCompartir)

    if (url) canonicalNode().setAttribute('href', url)
    else document.head.querySelector('link[rel="canonical"]')?.remove()
  }, [t, language, pathname])
}
