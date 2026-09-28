# Pendientes

Registro de lo que queda abierto tras la auditoría del proyecto y las
revisiones de Inicio, colores, NavBar y Footer.

Cada punto indica si está **verificado** (medido en el navegador sobre el build
de producción) o si es una **observación** sin comprobar, y si necesita una
decisión tuya antes de tocarlo.

---

## Para recuperar las URLs indexables

El sitio volvió al router de hash en `d9dc4b8` porque las rutas reales servían
404 en producción. Recuperarlas exige estos cuatro pasos **en orden**:

- [ ] **1. Crear la regla en Render.** Redirects/Rewrites → Source `/*`,
      Destination `/index.html`, Action **Rewrite**. Un `render.yaml` no sirve:
      su clave `routes:` solo aplica a servicios vinculados a un Blueprint, y
      este sitio se creó a mano.
- [ ] **2. Comprobar que la regla funciona** pidiendo `/experiencia` en
      producción: debe devolver 200, no 404.
- [ ] **3. Volver a `createBrowserRouter`**, devolver las cuatro rutas al
      `sitemap.xml` con su test, y restaurar el canonical por ruta en
      `useMetadatosRuta`.
- [ ] **4. Reponer en `index.html`** el puente que traduce `/#/ruta` a `/ruta`,
      para los enlaces antiguos que sigan circulando.

> Cuidado al verificar: `vite preview` tiene fallback SPA y Render no. La misma
> URL da 200 en local y 404 en producción, así que el paso 2 **tiene que**
> hacerse contra el sitio real.

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

---

## Herramientas

### Faltan Python y Power BI en la lista · verificado · **decisión pendiente**

La página lista ocho herramientas: Excel, HTML, CSS, JavaScript, React, Git Hub,
Word y SQL. **Python y Power BI no están**, pese a que los declaras en tres
sitios: el rol «Desarrollador en Power BI» de la portada, las actividades de
Ecopetrol («usando Python, SQL, Power BI y Power Automate») y el proyecto
Tablero Escenarios Refinados.

Desde que los chips de la portada los muestran, el hueco se nota más: alguien
que los vea ahí y pulse «Herramientas» no los encuentra. O se añaden con su
nivel y sus años, o se quitan de los chips.

### Los niveles no explican su escala · verificado · **decisión pendiente**

Las barras muestran 90, 85, 75, 70, 70, 65, 65. Son autoevaluaciones sin
leyenda: nada dice respecto a qué. Word y Excel comparten el 90 y el rótulo
«Avanzado», lo que iguala una herramienta que dominas tras quince años con un
procesador de textos.

---

## Proyectos

### El botón «Ver proyecto» está publicado pero dormido · **esperando tus URLs**

`CardProyecto` ya acepta un campo `url` opcional y pinta el botón cuando existe
(commit `16b9bd9`, verificado con una URL de prueba). **Ningún registro tiene
`url` todavía**, así que hoy no se pinta en ninguna tarjeta: es la misma forma
que la rama de certificados que se retiró en `978df5a`.

Hace falta una URL pública por proyecto —repositorio, demo o incluso un
artículo—: Sin Mediatas, Programador Digital Prodigio, Tablero Escenarios
Refinados. Los que sean internos y no tengan nada público se quedan sin botón,
que para eso el campo es opcional. **Si ninguno llega a tener URL, lo honesto
es revertir `16b9bd9`.**

### Las imágenes de los proyectos no son capturas · verificado · **decisión pendiente**

Las tres son logos genéricos reutilizados de otras páginas: `sinmediatas.png`
sale también en Experiencia y `excel.png` en Herramientas. Una página de
proyectos sin capturas del trabajo pide confianza sin dar nada que mirar.

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

