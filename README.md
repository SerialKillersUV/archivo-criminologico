# Archivo Criminológico

Página creada por Martí Gadea y Sergio Pastor para la actividad complementaria de Investigación Criminal: Perfil e Informe Criminológico. Rework visual del 7 de noviembre de 2026.

## Contenido documental

El contenido de los casos es una transcripción íntegra de CASOS PARA LA WEB.pdf (18 páginas), aportado por el usuario. Se normalizan espacios y saltos de línea para adaptarlo a HTML; no se añaden, corrigen ni completan datos o interpretaciones sobre los casos.

Orden del documento: David Berkowitz (El Hijo de Sam), Anatoli Onoprienko, Gary Leon Ridgway (El asesino de Green River), Edmund Kemper y Jeffrey Dahmer. Joaquín Ferrándiz deja de formar parte del archivo.

Cada ficha contiene los ocho apartados del PDF: presentación / estilo de vida / personalidad; escena del crimen; perfil geográfico; modus operandi; firma criminal; victimología; análisis de vinculación; detención y condena. Se han retirado las propuestas de perfil, cronologías, resúmenes, cifras y alias añadidos en versiones anteriores que no están en este documento.

Los 147 párrafos del cuerpo de los casos coinciden con el original tras normalizar espacios. Su SHA-256 es c5a949e8195d7b030739ce2cef7337c155384b61497e86ad2b277759eb7c8c1c.

## Recursos de estudio

- Comparativa: extractos literales de los apartados de modus operandi, victimología y personalidad.
- Preguntas: 30, con tres opciones. Se conservan las 25 de casos y se añaden cinco de conceptos con filtro, explicación y enlace al concepto correspondiente.
- Conceptos: diez fichas de M.O., firma, victimología, escena, perfil geográfico, AV, perfil criminológico, rasgos psicopáticos, identidad fracturada y homología.
- Bibliografía: tres bloques separados para el libro Nuevos perfiles criminales, la documentación de Gary Ridgway y las fotografías. Se enlaza el catálogo Trobès de la UV y se ordena cada bloque alfabéticamente.
- PDF: cinco expedientes descargables de tres páginas, con los ocho apartados y todo su texto. No contienen las ampliaciones de la versión anterior.

El documento original completo no se incorpora como archivo público. Las fotografías identifican los expedientes y se documentan en assets/portraits/FUENTES.md; no se usan como fuentes de contenido. Los cuatro recortes anteriores se conservan. El retrato de Berkowitz utiliza ahora un PNG con transparencia real, también en su PDF, obtenido con la herramienta integrada de edición de imágenes. El prompt se conserva en el archivo de procedencia.

## Diseño y uso

Se conservan la estética oscura y carmesí, las tipografías locales, los cinco retratos individuales, los apartados plegados al entrar y la descarga directa de PDF. Se han renovado jerarquía, espaciado, tarjetas, controles, tabla y bibliografía. La portada explica la actividad complementaria y el repaso del examen, presenta Conceptos y Preguntas y elimina su antiguo bloque de Comparativa. El menú sigue Inicio, Casos, Conceptos, Preguntas, Comparativa y Bibliografía.

La letra principal usa una escala fluida: 16 px en móvil, aproximadamente 17,6 px a 1280 px y 19,5 px a 2043 px. Se han ajustado medidas de lectura, interlineado, controles y etiquetas para cada tamaño. Se comprobaron las siete páginas a 320, 390, 768, 1280 y 2043 px, sin desbordamientos horizontales del documento.

Las animaciones incluyen entradas escalonadas, galería con fundidos, retratos con movimiento suave, iluminación de tarjetas al pasar el puntero, inclinación leve de la galería, transiciones de botones y menú, apertura de apartados, progreso del test, correcciones y navegación de páginas cuando el navegador lo admite. Se respeta prefers-reduced-motion y el movimiento del puntero se aplica solo con un dispositivo preciso. El catálogo no incluye buscador ni contador. No se guardan datos personales.

Sitio estático: abrir index.html o servir la carpeta con HTTP. En GitHub Pages se publica el contenido de la raíz. Mantener juntas las carpetas assets, css y js.

## Comprobación y mantenimiento

Se han comprobado las siete páginas, cinco fichas, 40 apartados, 359 enlaces o recursos locales, 30 preguntas, 90 opciones y los controles interactivos, incluido el bloque de Conceptos con aciertos y errores. Se ha verificado la igualdad de los 147 párrafos de casos con el documento y la integridad de todos los párrafos en los PDF. Se ha regenerado y revisado por renderizado el expediente de Berkowitz con su retrato nuevo; los otros cuatro PDF conservan el contenido publicado.

Ejecutar node scripts/verify-content.mjs comprueba la huella del cuerpo transcrito y que la comparativa y las explicaciones del test proceden de sus apartados.

Editar js/data.js para el texto, js/questions.js para el test y js/bibliography.js para las referencias. Los perfiles se generan desde js/app.js. css/refinement.css contiene la actualización visual y js/experience.js sus interacciones decorativas. Para regenerar los PDF se necesita Node.js y Python con reportlab y Pillow: node scripts/build-pdfs.mjs. Puede regenerarse solo uno con --case berkowitz y se puede indicar el ejecutable de Python en ARCHIVO_PYTHON_BIN. La web publicada no necesita estas dependencias.

## Últimas anotaciones

Se actualizan los títulos de Conceptos y Comparativa, las introducciones de Casos y Bibliografía y la expresión «para estudiar de cara al examen». Los dos párrafos de presentación se justifican sin afectar a su cierre. El cuadro de retratos añade flotación, iluminación del borde y un arco orbital animado, con reducción de movimiento y pausas al interactuar.
