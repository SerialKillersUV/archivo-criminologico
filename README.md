# Archivo Criminológico

Página creada por Martí Gadea y Sergio Pastor. Rework del 7 de noviembre de 2026.

## Contenido documental

El contenido de los casos es una transcripción íntegra de CASOS PARA LA WEB.pdf (18 páginas), aportado por el usuario. Se normalizan espacios y saltos de línea para adaptarlo a HTML; no se añaden, corrigen ni completan datos o interpretaciones sobre los casos.

Orden del documento: David Berkowitz (El Hijo de Sam), Anatoli Onoprienko, Gary Leon Ridgway (El asesino de Green River), Edmund Kemper y Jeffrey Dahmer. Joaquín Ferrándiz deja de formar parte del archivo.

Cada ficha contiene los ocho apartados del PDF: presentación / estilo de vida / personalidad; escena del crimen; perfil geográfico; modus operandi; firma criminal; victimología; análisis de vinculación; detención y condena. Se han retirado las propuestas de perfil, cronologías, resúmenes, cifras y alias añadidos en versiones anteriores que no están en este documento.

Los 147 párrafos del cuerpo de los casos coinciden con el original tras normalizar espacios. Su SHA-256 es c5a949e8195d7b030739ce2cef7337c155384b61497e86ad2b277759eb7c8c1c.

## Recursos de estudio

- Comparativa: extractos literales de los apartados de modus operandi, victimología y personalidad.
- Preguntas: 25, cinco por caso, con tres opciones. Sus explicaciones son párrafos del documento; las opciones proceden también de su texto.
- Conceptos: 13 definiciones generales con ejemplos tomados literalmente del material, sin ampliar los perfiles.
- Bibliografía: material docente como única fuente del contenido de los casos; referencia incluida en su página 8 y procedencia de los cinco retratos.
- PDF: cinco expedientes descargables de tres páginas, con los ocho apartados y todo su texto. No contienen las ampliaciones de la versión anterior.

El documento original completo no se incorpora como archivo público. Las fotografías identifican los expedientes y se documentan en assets/portraits/FUENTES.md; no se usan como fuentes de contenido. Los cuatro recortes anteriores se conservan y el retrato de Berkowitz se incorpora sin editar.

## Diseño y uso

Se conservan la estética oscura y carmesí, tipografías locales, animaciones, cinco retratos individuales, menú adaptable, apartados plegados al entrar y descarga directa de PDF. Se respeta prefers-reduced-motion. El catálogo no incluye buscador ni contador. No se guardan datos personales.

Sitio estático: abrir index.html o servir la carpeta con HTTP. En GitHub Pages se publica el contenido de la raíz. Mantener juntas las carpetas assets, css y js.

## Comprobación y mantenimiento

Se han comprobado las siete páginas, cinco fichas, 40 apartados, 333 enlaces o recursos locales, 25 preguntas, 75 opciones y los controles interactivos. Se ha verificado la igualdad del texto con el documento y la integridad de todos los párrafos en los PDF. Las 15 páginas generadas se han revisado mediante renderizado.

Ejecutar node scripts/verify-content.mjs comprueba la huella del cuerpo transcrito y que la comparativa y las explicaciones del test proceden de sus apartados.

Editar js/data.js para el texto, js/questions.js para el test y js/bibliography.js para las referencias. Los perfiles se generan desde js/app.js. Para regenerar los PDF se necesita Node.js y Python con reportlab y Pillow: node scripts/build-pdfs.mjs. Puede indicarse el ejecutable de Python en ARCHIVO_PYTHON_BIN. La web publicada no necesita estas dependencias.
