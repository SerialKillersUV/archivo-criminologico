# Archivo Criminológico

Página de Martí Gadea y Sergio Pastor para la actividad complementaria de Investigación Criminal: Perfil e Informe Criminológico. Revisión del 8 de noviembre de 2026.

## Contenido

Los ocho apartados de cada expediente conservan los 147 párrafos íntegros del material docente aportado, normalizando solo espacios y saltos de línea. Su SHA-256 es c5a949e8195d7b030739ce2cef7337c155384b61497e86ad2b277759eb7c8c1c. Las cabeceras mantienen los datos biográficos y apodos solicitados en la actualización anterior.

Cinco casos: David Berkowitz, Anatoli Onoprienko, Gary Leon Ridgway, Edmund Kemper y Jeffrey Dahmer. Cada perfil contiene presentación / estilo de vida / personalidad; escena del crimen; perfil geográfico; modus operandi; firma criminal; victimología; análisis de vinculación; detención y condena.

## Recursos de estudio

- Comparativa: extractos literales de modus operandi, victimología y firma criminal, con enlaces al apartado correspondiente.
- Conceptos: diez fichas. Modus operandi, firma criminal, victimología, escena del crimen, perfil geográfico, análisis de vinculación, actos de precaución, rasgos psicopáticos, teoría de la identidad fracturada y necrofilia. Cada ejemplo identifica y enlaza su caso. No se equipara automáticamente el asesinato en serie con la psicopatía.
- Preguntas: 25 sobre casos y cinco sobre conceptos; tres opciones por pregunta, con inicio en mayúscula. Las explicaciones de casos son párrafos de sus apartados y las de conceptos coinciden con sus definiciones. Los enunciados se refieren directamente a los casos.
- Bibliografía: dos bloques alfabéticos. La bibliografía general reúne el libro Nuevos perfiles criminales, la referencia de Gary Ridgway y los cuatro artículos añadidos para Berkowitz, Onoprienko, Dahmer y Kemper; el segundo bloque recoge la procedencia de las fotografías.
- PDF: cinco expedientes con los ocho apartados íntegros y texto justificado. Títulos, metadatos y última línea de cada párrafo se alinean a la izquierda para mantener una lectura natural. Los enlaces de descarga llevan versión para evitar servir copias anteriores desde la caché.

## Diseño

Se conservan la estética oscura y carmesí, las tipografías locales, las animaciones y la reducción de movimiento, los retratos con transparencia y los apartados plegados al entrar. La letra se adapta al tamaño de la pantalla. El menú mantiene Inicio, Casos, Conceptos, Preguntas, Comparativa y Bibliografía. No se guardan datos personales.

## Mantenimiento

Sitio estático para GitHub Pages. Mantener juntas las carpetas assets, css y js. Los datos están en js/data.js, las preguntas en js/questions.js y las referencias en js/bibliography.js. js/app.js genera el contenido interactivo.

Ejecutar node scripts/verify-content.mjs comprueba la huella del cuerpo original, los extractos de la comparativa, el respaldo de las explicaciones, los 30 ítems y los diez conceptos. Para regenerar los PDF se necesitan Node.js y Python con reportlab y Pillow: node scripts/build-pdfs.mjs. ARCHIVO_PYTHON_BIN permite indicar el ejecutable de Python. Estas dependencias no se necesitan en la web publicada.

## Revisión de referencias

Se reformulan las preguntas berkowitz-5 y dahmer-5. Rasgos psicopáticos conserva únicamente la definición de sus características. Se añaden las cuatro referencias indicadas por el usuario con autoría y datos de publicación verificados, en orden alfabético. La referencia de Onoprienko especifica pp. 46–47 y enlaza a la página 46. No se modifican los apartados de los expedientes ni sus PDF justificados.
