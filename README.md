# Archivo Criminológico

Página web creada por Martí Gadea y Sergio Pastor.

Material de apoyo para que estudiantes de criminología puedan estudiar fácilmente los casos analizados en clase. Rework del repositorio SerialKillersUV/archivo-criminologico, preparado el 3 de octubre de 2026.

## Abrir y publicar

Descomprime el paquete y abre `index.html` en un navegador. Mantén juntas las carpetas `css`, `js` y `assets`. La interfaz, fotografías y tipografías funcionan sin servicios externos; los enlaces documentales requieren internet.

Para GitHub Pages, sustituye los archivos del proyecto por el contenido de esta carpeta, conservando la estructura. No hacen falta instalación, compilación ni claves. Este paquete no se ha publicado: la conexión disponible al repositorio solo permite lectura.

## Qué incluye

- Portada, catálogo de nueve expedientes, fichas, comparación seleccionable y doce conceptos.
- Kemper, Dahmer, Holmes, DeSalvo, Onoprienko, Ridgway, Gacy, Bianchi y Buono, y Little.
- Antecedentes, trayectoria, victimología, modus operandi, conducta expresiva, investigación y propuestas de análisis en cada expediente.
- Cronologías, claves para estudiar, preguntas de repaso y fuentes numeradas.
- Diez retratos PNG con transparencia; Bianchi y Buono aparecen separados en su expediente compartido.
- Estética oscura y carmesí, animaciones suaves, menú móvil, búsqueda, filtros, impresión y respeto al movimiento reducido.

## Criterio documental

Se describen delitos sexuales, homicidios y conductas posteriores con lenguaje directo y finalidad académica. Se distingue entre condenas, confesiones, atribuciones e hipótesis. El contenido ampliado procede de fuentes externas enlazadas y se identifica como complemento documental; no se presenta como transcripción del material del profesorado. Las propuestas teóricas son orientaciones para el debate y no diagnósticos clínicos.

Los datos históricos mantienen su fecha: los casos verificados que comunicó el FBI sobre Little en 2019 no se presentan como una cifra actualizada de 2026. Las fuentes y matices están dentro de cada ficha. Los enlaces documentales pueden cambiar.

## Retratos

Los PNG se prepararon a partir de fotografías de archivo de cada persona, con edición asistida para eliminar el fondo y encuadrar el rostro. Son derivados editados; la fotografía original enlazada es la referencia documental. No son nuevas fotografías históricas. Consulta `assets/portraits/FUENTES.md` para la procedencia y el proceso. No se atribuye una licencia libre uniforme a las fotografías: las condiciones pertenecen a sus fuentes.

Inter y Oswald se incluyen localmente junto a sus licencias en `assets/fonts`.

## Comprobaciones

Se verificaron mediante ejecución del JavaScript en DOM: cinco páginas, nueve expedientes, sus siete secciones, cronologías y repaso, imágenes locales, búsqueda, filtros, estados vacíos, comparación, menú móvil y enlaces internos. Se comprobó la sintaxis del JavaScript y la transparencia real de los diez PNG.

Los retratos se inspeccionaron en una hoja de contacto. Queda pendiente revisar visualmente las páginas completas en navegador, especialmente a distintos anchos: el navegador remoto del entorno bloqueó los archivos locales. Las comprobaciones DOM no sustituyen esa revisión de diseño.

## Editar

- `js/data.js`: fichas, fuentes, cronologías, conceptos y metadatos.
- `js/app.js`: navegación, filtros, comparación y generación de fichas.
- `css/style.css`: diseño, adaptación a pantallas e impresión.
- `assets/portraits`: fotografías utilizadas por la interfaz.

Los créditos y la finalidad académica están en las cinco páginas.
