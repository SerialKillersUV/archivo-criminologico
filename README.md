# ARCHIVO CRIMINOLÓGICO

Web académica para el proyecto de Investigación Criminal: Perfil e Informe Criminológico.

## Estructura
- index.html — inicio
- casos.html — listado y buscador
- caso.html?id=... — plantilla dinámica para cada caso
- comparativa.html — tabla comparativa
- conceptos.html — glosario
- css/style.css — diseño
- js/data.js — datos y textos de los casos
- js/app.js — funcionamiento de la web

## Casos incluidos
Edmund Kemper; Jeffrey Dahmer; Henry Howard Holmes; Albert DeSalvo; Anatoli Onoprienko; Gary Leon Ridgway; John Wayne Gacy; Ken Bianchi y Angelo Buono; Samuel Little.

## Publicar gratis con GitHub Pages
1. Crear un repositorio público en GitHub.
2. Subir todos estos archivos conservando las carpetas.
3. Ir a Settings > Pages.
4. En Source seleccionar GitHub Actions o Deploy from a branch según la opción disponible.
5. Publicar la rama principal.
6. La web quedará accesible desde la URL de GitHub Pages.

## Editar contenido
Los datos principales están en `js/data.js`. Puedes cambiar nombres, textos, etiquetas y añadir casos sin tocar el diseño.


## Fotografías
La web integra fotografías en las tarjetas y expedientes. La mayoría proceden de Wikimedia Commons. La fotografía de Anatoli Onoprienko enlazada procede de UNIAN y sus derechos de uso no están verificados; para una publicación pública definitiva conviene sustituirla por una imagen con licencia abierta o comprobar sus condiciones de uso.


## Actualización v2
La ficha individual de cada caso utiliza ahora un formato de "case file": fotografía grande, identificación, víctimas, condena/estado, etiquetas y bloques de análisis criminológico.
