# Completados

Trabajo cerrado desde `37c99cd`: **19 commits**, 27 archivos, +591 / −119 líneas.

Cada entrada lleva el commit, qué se midió y con qué resultado. Las cifras son
medidas en el navegador sobre el build de producción, no estimaciones.

Lo que sigue abierto está en [PENDIENTES.md](PENDIENTES.md).

---

## Auditoría inicial

### `c7a1518` · Privacidad: fuera nombres y teléfonos de terceros

Las tarjetas de experiencia publicaban **nombre completo y celular personal de
seis exjefes**, en un sitio rastreable y con `max-snippet:-1`. Se eliminó el
campo `jefe` entero —siete registros por idioma más la etiqueta— en vez de
recortarlo: las referencias van en una entrevista, no en el marcado público.

### `c626e47` · Rutas reales y metadatos por ruta

El router de hash dejaba cuatro de las cinco páginas sin URL indexable, así que
`sitemap.xml` solo podía listar `/` y todo el bloque SEO de `index.html`
aplicaba únicamente a la portada.

Cambiar a `createBrowserRouter` no bastaba: las cinco rutas comparten un mismo
`index.html`, así que sin metadatos por ruta las cinco declararían el canonical
de la home y Google las descartaría como duplicados. La clave `seo` de los
locales alimenta `hooks/useMetadatosRuta.js`, que escribe `title`,
`description`, `canonical`, `og:*` y `robots` al navegar, y mantiene
`<html lang>` sincronizado con el idioma.

Se añadió un script en línea en `index.html` que traduce los enlaces antiguos
`/#/ruta` a la ruta real antes de que arranque la app: siguen vivos en LinkedIn
y en el índice de Google.

**Verificado:** las seis rutas (cinco más 404) con un `h1` cada una, canonical
correcto por ruta, 404 en `noindex` sin canonical, y el canonical reapareciendo
al salir de la 404 —un bug que introduje al escribir el hook y detecté
probando—. `/#/proyectos` aterriza en `/proyectos` con el hash limpio.

> Requiere una regla de rewrite en el host. Ver PENDIENTES.md.

### `394dce2` · Logos legibles en modo oscuro

Medido promediando la luminancia de los píxeles con alfa > 128 sobre la tarjeta
oscura (`#1F2937`):

| Logo | Contraste | Problema |
|---|---|---|
| `js.png`, `atom.png` | **1.43:1** | tinta casi negra, se desvanece |
| `isabel.png` | **2.14:1** | ídem |
| 7 assets (`.jpg` y PNG de paleta) | 11–13.5:1 | fondo blanco horneado, cajas deslumbrantes |

Dos fallos opuestos con una sola causa: los catorce logos están dibujados para
fondo claro. El token `placaLogo` es `#FFFFFF` en ambos temas; como coincide con
`background.paper` en claro, allí es invisible y solo cambia el tema oscuro.

`CardExperiencia` no podía llevar placa incondicional: sus variantes `.B` son
tinta blanca y desaparecerían. `pickByTheme` ahora informa de si está cayendo al
recurso del modo contrario, que es el único caso que la necesita.

### `5221848` · Accesibilidad: encabezados, landmarks y movimiento

El nombre en la barra era el `h1` de las cinco páginas, así que ninguna tenía
encabezado propio y Estudios, Herramientas y Proyectos saltaban de `h1` a `h3`.
Ahora cada página tiene el suyo; las tres de `Secciones` uno oculto a la vista,
porque se presentan con los títulos rotados.

Texto corrido que se emitía como `h3`/`h4` reales en cuatro tarjetas: ahora son
párrafos. Orden final `h1 → h2 → h3` sin saltos, verificado en las seis rutas.

`RotadorRoles` respeta `prefers-reduced-motion`, se pausa al pasar el ratón o
enfocar —confirmado con ratón real: 11 s sin avanzar— y limpia el `setTimeout`
que antes quedaba suelto al desmontar.

### `c9134d8` · i18n: WhatsApp en inglés y claves muertas

Un visitante anglófono abría WhatsApp con un mensaje en español que no había
escrito. Fuera también tres claves que ningún componente leía.

### `3f64940` · Rendimiento: rutas diferidas y fuentes con preconnect

La fuente entraba por `@import` en `index.css`, lo que obliga al navegador a
descargar y parsear ese CSS antes de pedirla siquiera.

**La ganancia del code splitting es modesta y conviene decirlo:** 547 kB → 530 kB
en la primera carga (170 → 167 kB gzip). Los chunks por ruta pesan 1–9 kB
porque el contenido vive en el chunk compartido de locales (~129 kB) y el
grueso es MUI.

### `7bf7931` · Favicon, noscript y store versionado

**Aquí introduje un bug y lo cacé probando.** Añadir `version: 1` al `persist`
sin función `migrate` hace que Zustand **descarte el estado guardado**: todo
visitante existente habría perdido tema e idioma al desplegar. Lo vi como error
en consola, añadí el `migrate` y lo verifiqué sembrando un `localStorage` con
el formato v0 de producción.

---

## Portada

### `3682209` · El rotador ya no salta

Por debajo de 390px los roles largos ocupan dos líneas y los cortos una, así que
la caja alternaba entre 36 y **56px cada cinco segundos**, arrastrando la bio y
los chips. Medido con la tipografía y la cadena de paddings reales: a 360px se
parte *«Maestría en Gerencia de Proyectos»*; a 320px, tres de seis en español y
dos en inglés.

Se reservan las dos líneas en `xs`. Ojo: el `py` cuenta dentro del `minHeight`
con `border-box`, de ahí `3.5rem` y no `3rem`.

Se descartó una media query a 390px porque ese umbral depende del rol más largo
y del tamaño de fuente: dejaría de funcionar en silencio al cambiar el texto.

### `83b26d2` · La foto reserva su hueco

Es la candidata a LCP —`eager`, `fetchPriority="high"`— pero no declaraba
`width`, `height` ni `aspect-ratio`, así que su caja medía cero hasta que
llegaba el archivo.

**Verificado con un A/B aislado:** con los atributos el navegador reserva
**593px**; sin ellos, **0px**. El alto final real es 594px. En `xs`–`md` la foto
va apilada sobre el texto, así que ese salto empujaba toda la presentación.

`height: auto` es imprescindible junto a los atributos: sin él, el alto pintado
sería el literal 1260px.

### `640201e` · Minúsculas y unificación del grado

*«Hola, Mi Nombre es»* llevaba mayúsculas que en español van en minúscula, y
*«Hi, My Name is»* igual. Es la primera línea que se lee.

El rotador además nombraba el grado distinto al resto del sitio: decía «Máster»
donde la bio, Estudios, los metadatos y el `schema.org` dicen «Maestría» (7
sitios), y «Master in Project Management» donde el inglés usa «Master's» (3
sitios). Se alineó el rotador, que era el que se desviaba.

### `cf6998c` · Fundido de 800 → 350 ms

El ciclo gasta dos fundidos con el cambio de texto en opacidad cero. A 800 ms el
elemento más visible de la portada estaba en transición 1,6 s de cada 5.
Muestreando la opacidad real cada 50 ms: el rol pasa de ser plenamente legible
un ~68 % del tiempo a un **91 %**.

### `cace581` · Saludo como párrafo y ancho redundante

El saludo era un `div` con tipografía de encabezado. La caja de la bio llevaba
además `width: 95%` sobre `maxWidth: 72ch`: en escritorio no hacía nada y en
móvil solo la dejaba 5 % corta respecto a la fila de chips.

### `97930ff` · Las dos llamadas a la acción que faltaban

Un visitante leía toda la presentación y no tenía nada que pulsar. Un botón
sólido lleva a Experiencia y uno con borde abre WhatsApp.

**Defecto que introduje y detecté midiendo:** MUI dibuja el borde del `outlined`
con 50 % de alfa — **2.19:1 en claro y 2.72:1 en oscuro**, por debajo del 3:1
que WCAG 1.4.11 exige al límite de un control. A opacidad plena: 5.18 y 6.81.

### `05ad421` · Foto más grande en el móvil

A `maxWidth: 200` el retrato ocupaba el 51 % de una pantalla de 390px. A 270:
75 % a 360px, 69 % a 390px, 65 % a 414px. Por debajo de ~340px manda el
contenedor, así que ahí no cambia nada. Escritorio intacto.

---

## Color, NavBar y Footer

### `9490f2a` · Las superficies tienen canto propio

Medido en ambos temas: página y tarjeta distan **1.05:1 en claro** y **1.21:1 en
oscuro**. Nada las separaba salvo la sombra de elevación, así que con sombras
suprimidas o contraste forzado la estructura desaparecía.

El token `bordeSuperficie` lo hace explícito sin tocar los fondos: 1.78:1 sobre
la tarjeta clara, 2.56:1 sobre la oscura. Deliberadamente **por debajo de 3:1**:
una tarjeta es estructura, no un control, y un gris más fuerte la convertiría en
un marco pesado.

### `e6fc9ab` · El cajón por encima de la barra

La barra usaba `zIndex: drawer + 1`, que es el patrón de un cajón **permanente**
bajo una barra completa. Este es temporal y con backdrop, así que ese valor
colocaba la barra sobre sus 65px superiores y enterraba el título y el aspa del
propio cajón.

Verificado con `elementFromPoint`: en las coordenadas del botón de cerrar
respondía **la cabecera**; ahora responde el cajón. Sin regresión: con 600px de
scroll y siete tarjetas debajo, la barra sigue fijada y recibiendo clics.

### `8d43fc8` · Los botones anuncian su estado

Llevaban etiqueta fija —«Cambiar tema», «Cambiar idioma»—, así que quien usa
lector de pantalla no sabía en qué tema ni en qué idioma estaba. Ahora nombran
la acción concreta, lo que revela el estado de paso: «Cambiar a modo claro» solo
aparece con el tema oscuro activo. Se sustituyeron las claves genéricas en vez
de añadir nuevas, para no dejar nada muerto detrás.

### `9aca4c2` · `tel:` sin espacios

El `href` era `tel:+57 301 789 3883`. RFC 3966 no admite espacios. El texto
visible y el nombre accesible los conservan.

### `aa8a051` · El cajón llega hasta `lg`

Las pestañas sustituían al cajón en `sm`, pero las cinco suman **533px** y
`MuiTabs` recorta en silencio lo que no cabe, sin flechas ni aviso:

| Ancho | Visibles | Recortadas |
|---|---|---|
| ≥1000px | 5/5 | — |
| 900px | 4/5 | Proyectos |
| 700px | 3/5 | Herramientas, Proyectos |

En una tablet en vertical, dos de las cinco rutas eran inalcanzables con ratón o
dedo. Ahora las pestañas solo entran a partir de `lg`, donde caben las cinco.

> Sin verificar por debajo de 1200px. Ver PENDIENTES.md.

---

## Lo que se midió y salió limpio

- **Contraste de texto:** 476 nodos en 5 páginas × 2 temas, **cero fallos**.
  Mínimo 4.54:1 en claro y 5.86:1 en oscuro.
- **Contraste no textual (WCAG 1.4.11):** 38 elementos, cero fallos.
- **Foco de teclado:** visible mediante el *ripple* pulsante de MUI, 4.61:1.
- **Cajón móvil:** cierra con Escape, bloquea el scroll del `body`, pone
  `aria-hidden` al fondo y devuelve el foco.
- **Enlaces externos:** los cinco con `rel="noopener noreferrer"`.
- **Reserva del pie:** `padding-bottom` del `main` = 48px = altura real. Exacto.
- **Paridad de locales:** 324 rutas de clave en cada archivo, cero huérfanas.

### Tres falsos positivos descartados

Vale la pena dejarlos escritos para no volver a «arreglarlos»:

1. **Pista de la barra de nivel a 1.1:1.** Su extensión la marca el *borde*
   (4.54 claro / 3.04 oscuro), no el relleno. Cumple.
2. **Foco invisible.** `focus()` por JS no activa la lógica de MUI. Con
   tabulación real el indicador está.
3. **Escape no cerraba el cajón.** Los `KeyboardEvent` fabricados no llegan al
   nodo del modal. Con tecla real sí cierra.
