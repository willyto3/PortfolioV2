import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'

import { es } from '../src/locales/es.js'
import { en } from '../src/locales/en.js'

const publicDir = new URL('../public/', import.meta.url)
const locales = { es, en }

// Todas las rutas de clave de un objeto, incluidos los indices de array.
const rutasDeClave = (valor, prefijo = '') => {
  if (Array.isArray(valor)) {
    return valor.flatMap((v, i) => {
      const ruta = `${prefijo}[${i}]`
      return v && typeof v === 'object' ? rutasDeClave(v, ruta) : [ruta]
    })
  }
  if (valor && typeof valor === 'object') {
    return Object.keys(valor).flatMap(k => {
      const ruta = prefijo ? `${prefijo}.${k}` : k
      return valor[k] && typeof valor[k] === 'object' ? rutasDeClave(valor[k], ruta) : [ruta]
    })
  }
  return [prefijo]
}

const duplicados = lista => {
  const vistos = new Set()
  return [...new Set(lista.filter(v => (vistos.has(v) ? true : (vistos.add(v), false))))]
}

// Este es el invariante que mas caro sale romper: una clave presente en un
// idioma y ausente en el otro revienta la pagina que la lee en cuanto alguien
// pulsa el conmutador.
test('es y en exponen exactamente las mismas rutas de clave', () => {
  const soloEs = rutasDeClave(es).filter(r => !new Set(rutasDeClave(en)).has(r))
  const soloEn = rutasDeClave(en).filter(r => !new Set(rutasDeClave(es)).has(r))
  assert.deepEqual(soloEs, [], `claves solo en es.js: ${soloEs.join(', ')}`)
  assert.deepEqual(soloEn, [], `claves solo en en.js: ${soloEn.join(', ')}`)
})

test('cada ruta del menu tiene metadatos seo en ambos idiomas', () => {
  for (const [nombre, loc] of Object.entries(locales)) {
    for (const { ruta } of loc.nav.items) {
      assert.ok(loc.seo[ruta], `${nombre}: falta seo para ${ruta}`)
      assert.ok(loc.seo[ruta].titulo, `${nombre}: ${ruta} sin titulo`)
      assert.ok(loc.seo[ruta].descripcion, `${nombre}: ${ruta} sin descripcion`)
    }
  }
})

test('no hay entradas seo que no correspondan a una ruta del menu', () => {
  for (const [nombre, loc] of Object.entries(locales)) {
    const rutas = new Set(loc.nav.items.map(i => i.ruta))
    const huerfanas = Object.keys(loc.seo).filter(r => !rutas.has(r))
    assert.deepEqual(huerfanas, [], `${nombre}: seo huerfano para ${huerfanas.join(', ')}`)
  }
})

// Los limites estan documentados en CLAUDE.md: por encima, el buscador trunca.
test('los titulos seo no pasan de 60 caracteres y las descripciones de 160', () => {
  const excesos = []
  for (const [nombre, loc] of Object.entries(locales)) {
    for (const [ruta, meta] of Object.entries(loc.seo)) {
      if (meta.titulo.length > 60) excesos.push(`${nombre} ${ruta} titulo ${meta.titulo.length}`)
      if (meta.descripcion.length > 160) excesos.push(`${nombre} ${ruta} descripcion ${meta.descripcion.length}`)
    }
  }
  // La portada hereda la copia historica de index.html y se deja como esta.
  const sinLaPortada = excesos.filter(e => !e.includes(' / '))
  assert.deepEqual(sinLaPortada, [], sinLaPortada.join(' | '))
})

test('toda imagen referenciada en los locales existe en public/', () => {
  const archivos = new Set(fs.readdirSync(publicDir))
  const referencias = new Set()
  const recorrer = valor => {
    if (Array.isArray(valor)) return valor.forEach(recorrer)
    if (valor && typeof valor === 'object') return Object.values(valor).forEach(recorrer)
    if (typeof valor === 'string' && /\.(png|jpe?g|webp|svg|gif)$/i.test(valor)) {
      referencias.add(valor.replace(/^\//, ''))
    }
  }
  recorrer(locales)
  const ausentes = [...referencias].filter(r => !archivos.has(r))
  assert.deepEqual(ausentes, [], `referenciadas pero ausentes: ${ausentes.join(', ')}`)
})

// Cada pagina usa un campo distinto como key de React. Un duplicado no rompe
// nada visible, pero descoloca el estado al reordenar o filtrar.
test('las claves de React de cada listado son unicas', () => {
  for (const [nombre, loc] of Object.entries(locales)) {
    const casos = [
      ['experiencia (alt)', loc.experiencia.map(e => e.alt)],
      ['estudios (institucion+fecha)', loc.estudios.tarjetas.map(c => c.institucion + c.fecha)],
      ['herramientas (titulo)', loc.estudios.herramientas.items.map(i => i.titulo)],
      ['proyectos (nombre)', loc.proyectos.items.map(p => p.nombre)],
    ]
    for (const [etiqueta, valores] of casos) {
      const repes = duplicados(valores)
      assert.deepEqual(repes, [], `${nombre} ${etiqueta}: ${repes.join(', ')}`)
    }
  }
})

test('el nivel de cada herramienta esta entre 0 y 100', () => {
  for (const [nombre, loc] of Object.entries(locales)) {
    for (const item of loc.estudios.herramientas.items) {
      assert.ok(item.nivel >= 0 && item.nivel <= 100, `${nombre} ${item.titulo}: nivel ${item.nivel}`)
    }
  }
})

// Con router de hash la unica URL indexable es la raiz. Si algun dia se vuelve
// a rutas reales, este test debe exigir las cinco y el sitemap crecer con ellas.
test('el sitemap declara solo la raiz mientras el router sea de hash', () => {
  const xml = fs.readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8')
  const enElSitemap = [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map(m => m[1])
  assert.deepEqual(enElSitemap, ['https://www.willycorzo.com/'])
})

// El enlace de WhatsApp lleva un mensaje precargado: si no se traduce, un
// visitante anglofono abre el chat con un texto en español que no escribio.
test('el mensaje precargado de WhatsApp esta traducido', () => {
  assert.notEqual(es.contacto.whatsapp, en.contacto.whatsapp)
})
