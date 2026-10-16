# Archivo Criminológico

Página web creada por Martí Gadea y Sergio Pastor. Revisión del 16 de octubre de 2026.

Cuaderno de estudio para estudiantes de criminología. Conserva la estética oscura y carmesí, las tipografías locales, los retratos de archivo y la composición del proyecto.

## Contenido

- Cinco casos: Joaquín Ferrándiz Ventura, Edmund Kemper, Jeffrey Dahmer, Anatoli Onoprienko y Gary Leon Ridgway.
- Ocho apartados, por este orden: presentación / estilo de vida / personalidad; escena del crimen; perfil geográfico; modus operandi; firma criminal; victimología; AV; propuesta de perfil.
- Claves de repaso, cronología, fuentes por apartado, impresión y navegación entre los cinco expedientes.
- Comparativa seleccionable de M.O., victimología y perfil, con enlaces a los apartados completos.
- Dieciséis conceptos con definición y aplicación visibles, sin desplegables.
- Veinticinco preguntas, cinco por caso, con tres opciones y una respuesta correcta. Corrección individual, explicación, enlace al tema, progreso, resultado y reinicio.

Las respuestas se conservan al cambiar de bloque durante la visita a Preguntas. Se borran al recargar o abandonar esa página; no se guardan datos personales ni se requiere una cuenta.

## Abrir y publicar

Sitio estático sin instalación ni compilación. Abre `index.html` o sirve esta carpeta con un servidor HTTP. Para GitHub Pages, el contenido se encuentra en la raíz de la rama publicada. Mantén juntas las carpetas `assets`, `css` y `js`.

## Criterio documental

La base es el documento de clase `CASOS PARA WEB.pdf`, pp. 1–15. Las ampliaciones externas se citan dentro de cada expediente. El PDF completo no se incorpora a los archivos públicos. Se usan términos directos —agresión sexual, estrangulación, decapitación, desmembramiento, necrofilia y canibalismo— cuando la información del caso lo requiere.

Firma, AV y propuesta de perfil se identifican como interpretación o ejercicio retrospectivo. Los cinco autores están identificados: el último apartado explica cómo se plantearía una propuesta si faltara la biografía. No se presenta un perfil retrospectivo como una predicción policial histórica ni se inventan coordenadas, puntuaciones PCL-R o diagnósticos.

Se han ajustado afirmaciones problemáticas del material: no se afirma que Kemper comiera las cuerdas vocales de su madre, no se sitúa el primer homicidio de Dahmer en la vivienda de la abuela, no se presenta como verificada una familia de diez víctimas en el primer episodio de Onoprienko y se distinguen las 48 condenas iniciales de Ridgway de la adicional de 2011. Confesión, evidencia y condena no se equiparan.

Las fotografías son derivados editados de imágenes reales. Procedencia, condiciones y edición en `assets/portraits/FUENTES.md`. No se declara una licencia libre uniforme sobre las fotografías. Inter y Oswald se incluyen con sus licencias.

## Interacción y accesibilidad

Menú adaptable, navegación con teclado, enlaces de salto, etiquetas de formulario, estados anunciados, alternativas textuales y contenido imprimible. Las animaciones incluyen entrada de secciones, transiciones de tarjetas y tablas, progreso del test, correcciones y rotación de retratos con pausa. Se respeta `prefers-reduced-motion`, también si cambia durante la visita.

## Verificación

Sintaxis de los tres archivos JavaScript; ejecución DOM de las seis páginas y los cinco perfiles; 40 apartados en orden; 25 preguntas, 75 opciones y una solución por pregunta; 16 definiciones; 379 enlaces o recursos locales revisados. Se comprobaron búsqueda con y sin resultados, selección comparativa, galería sin grupos vacíos, corrección de aciertos y errores, filtros y reinicio del test, menú y URLs de casos retirados.

La revisión visual se realizó en navegador de escritorio y en un marco de 390 píxeles de ancho para verificar la adaptación móvil. No equivale a una prueba en un teléfono físico.

## Edición

- `js/data.js`: cinco casos, ocho apartados, fuentes, comparativa y conceptos.
- `js/questions.js`: preguntas, opciones, soluciones y explicaciones.
- `js/app.js`: generación de contenido e interacciones.
- `css/style.css` y `css/motion.css`: diseño original y animaciones existentes.
- `css/study.css`: extensiones del rework, formularios y adaptación.

Las referencias documentales externas necesitan conexión. El contenido de estudio, imágenes y tipografías se sirven localmente.

