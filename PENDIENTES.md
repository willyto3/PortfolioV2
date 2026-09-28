# Pendientes

Registro de lo que queda abierto tras la auditoría del proyecto y las
revisiones de Inicio, colores, NavBar y Footer.

Cada punto indica si está **verificado** (medido en el navegador sobre el build
de producción) o si es una **observación** sin comprobar, y si necesita una
decisión tuya antes de tocarlo.

---

## Antes de desplegar

- [ ] **Regla de rewrite en Render.** Redirects/Rewrites → Source `/*`,
      Destination `/index.html`, Action **Rewrite**. Sin ella, las cuatro rutas
      que no son `/` devuelven 404 al recargar o al entrar por enlace directo.
      Un `render.yaml` **no** sirve: su clave `routes:` solo aplica a servicios
      vinculados a un Blueprint, y este sitio se creó a mano.

- [ ] **Probar la barra por debajo de 1200px en un dispositivo real.** El
      cambio del punto de corte a `lg` (commit `aa8a051`) se publicó sin poder
      ejercitarlo: el entorno no permite redimensionar la ventana y el zoom no
      mueve las media queries. Verificado el código, el valor de `lg` y el
      comportamiento por encima del corte; **no** verificado por debajo.
      Si falla, es revertir un único commit.

---

## NavBar

### Idioma y tema duplicados en móvil · verificado · **decisión pendiente**

Ambos botones aparecen en la barra **y** dentro del cajón: dos formas de hacer
lo mismo a treinta píxeles de distancia. Hay que elegir de dónde se quitan.

### Zonas táctiles de 40×40 · verificado · **decisión pendiente**

Los botones de la barra miden 40×40 (el de idioma, 46×38). Cumplen
WCAG 2.5.8 AA, que pide 24×24, pero quedan por debajo de los 44×44 que
recomiendan Apple y el nivel AAA. Subirlos cambia la altura de la barra.

---

## Footer

### Zonas táctiles de 40×40 · verificado · **decisión pendiente**

Los cinco iconos sociales. Mismo caso que la barra.

### Cabecera y pie fijos comen 113px permanentes · verificado · **decisión pendiente**

65px de cabecera *sticky* más 48px de pie fijo. En un móvil en horizontal
(≈375px de alto) es casi un tercio de la pantalla. Es una decisión de diseño
documentada en el código, no un fallo.

---

## Portada

### El segundo párrafo de la bio no te distingue · **decisión tuya, es contenido**

> «Me apasiona transformar procesos complejos en soluciones automatizadas y
> eficientes. Orientado a resultados, trabajo con iniciativa, honestidad y
> compromiso…»

Lo firma cualquiera. El primer párrafo sí es específico y bueno. Un dato
concreto rendiría mucho más: *«automaticé el balance diario de N estaciones y
reduje el cierre mensual de X a Y»*.

### Las 8 habilidades blandas repiten la bio · **decisión tuya, es contenido**

«Iniciativa», «Honestidad» y «Orientado a resultados» aparecen literalmente en
el párrafo que tienen encima.

### Esquinas de la foto · verificado · descartado por ti

Se probó `border-radius: 12px` y la diferencia es imperceptible: el fondo
blanco de la foto contrasta tanto con la tarjeta que el ojo va al rectángulo,
no a las esquinas. Para que se notara habría que subir a 16–20px y empieza a
parecer un avatar. El arreglo de fondo sería recortar la foto con fondo
transparente, que es trabajo de imagen, no de CSS.

---

## Experiencia

### Ninguna tarjeta enlaza a nada · verificado · **decisión pendiente**

Medido: **0 enlaces** dentro de `<main>`. Siete empresas y cuatro clientes
citados, ninguno enlazado a su sitio. No es un fallo, pero un reclutador que
quiera verificar Applus+ o Frontera Energy tiene que salir a buscarlo.

---

## Estudios

### El botón «Ver certificado» nunca aparece · verificado · **decisión pendiente**

El campo `certificado` es `undefined` en tres tarjetas y `null` en las otras
dos, así que la rama `{certificado && …}` de `CardEstudio` **no se ejecuta
jamás** y la clave `estudiosUI.labels.verCertificado` está viva solo en el
código. O se añaden los enlaces a los certificados, o se retira el bloque.

---

## Herramientas

### Los niveles no explican su escala · verificado · **decisión pendiente**

Las barras muestran 90, 85, 75, 70, 70, 65, 65. Son autoevaluaciones sin
leyenda: nada dice respecto a qué. Word y Excel comparten el 90 y el rótulo
«Avanzado», lo que iguala una herramienta que dominas tras quince años con un
procesador de textos.

---

## Proyectos

### Los proyectos no tienen enlace ni captura · verificado · **decisión pendiente**

Es la carencia más seria de esta página. Los tres registros solo tienen
`nombre`, `imagen`, `descripcion`, `tecnologias` y `categoria`: **ningún campo
de URL**. «Sin Mediatas» se describe como plataforma web y no hay dónde verla.

Y las tres «imágenes» son logos genéricos reutilizados de otras páginas
—`sinmediatas.png` sale también en Experiencia, `excel.png` en Herramientas—,
no capturas del trabajo. Una página de proyectos sin capturas ni enlaces pide
confianza sin dar nada que mirar.

### Solo tres proyectos, y el tercero queda suelto · verificado · observación

Con `anchoTarjeta={{ xs: 12, md: 5.8 }}` van dos por fila, así que el tercero
ocupa una fila él solo.

---

## Las tres páginas de `Secciones`

### 16,7 % de ancho muerto en todas ellas · verificado · **decisión pendiente**

`Secciones.jsx` fija `size={{ xs: 10 }}`, es decir 10 de 12 columnas: medido,
las secciones ocupan el **83,3 %** del `<main>`. En escritorio son 159px
perdidos a cada lado; **a 390px de viewport serían unos 32px por lado**, que en
móvil es mucho. Afecta a Estudios, Herramientas y Proyectos.

---

## Lo que se comprobó en estas cuatro páginas y salió limpio

- **Jerarquía de encabezados correcta** en las cuatro: un `h1` por página y
  después `h2`/`h3` sin saltos.
- **Las 26 imágenes tienen `alt`** y todas cargan con `loading="lazy"`.
- **Ningún desplazamiento de diseño.** Las 26 imágenes carecen de `width` y
  `height`, pero —a diferencia de la foto de Inicio— aquí **no** provocan CLS:
  cada contenedor tiene altura propia, sea por el flex de la tarjeta o por un
  `height` explícito. Comprobado con clones que nunca cargan: la caja mide lo
  mismo con imagen y sin ella. *No hace falta arreglarlo.*
- **Listas semánticas** donde toca: 7 en Experiencia, 8 en Herramientas.
- **Contraste**: cero fallos, ya cubierto en la revisión de color.

---

## Transversales

### El inglés no tiene URL propia · **decisión pendiente**

El idioma es estado de cliente, así que `es` y `en` comparten URL y no se puede
declarar `hreflang`. Para que Google indexe la versión en inglés harían falta
rutas propias (`/en/...`), que es rediseñar la i18n, no un ajuste.

### El chunk de locales trae los dos idiomas · **decisión pendiente**

129 kB compartidos que se cargan siempre, con `es` y `en` completos aunque solo
se use uno. Cargar solo el idioma activo ahorraría unos 64 kB, pero obliga a
volver `useT` asíncrono: es un refactor, no un ajuste.

---

