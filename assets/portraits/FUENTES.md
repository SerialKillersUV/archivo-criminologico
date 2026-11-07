# Procedencia de los cinco retratos

Las imágenes se utilizan para identificar los expedientes. No se emplean como fuentes del contenido de los casos.

- assets/portraits/berkowitz.png: David Berkowitz — https://commons.wikimedia.org/wiki/File:David_Berkowitz_Arrested_August_10_1977_Mount_Vernon_Argus.jpg
- assets/portraits/onoprienko.png: Anatoli Onoprienko — https://en.wikipedia.org/wiki/File:Anatoly_Onoprienko_mugshot.jpg
- assets/portraits/ridgway.png: Gary Leon Ridgway — https://commons.wikimedia.org/wiki/File:Gary_Ridgway_1982_Mugshot.jpg
- assets/portraits/kemper.png: Edmund Kemper — https://commons.wikimedia.org/wiki/File:Kempermugshot.jpg
- assets/portraits/dahmer.png: Jeffrey Dahmer — https://en.wikipedia.org/wiki/File:Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg

El retrato de Berkowitz se ha recortado con la herramienta integrada image_gen, usando la fotografía real como referencia y solicitando fondo transparente. Se optimizó el PNG para la web conservando su transparencia. Los otros cuatro recortes se conservan de la versión anterior. Sus condiciones de uso se consultan en las páginas enlazadas.

## Edición de Berkowitz

Archivo utilizado por la web: assets/portraits/berkowitz.png. La fotografía original enlazada es la referencia documental. La edición asistida no debe emplearse para análisis biométricos.

Prompt final (herramienta integrada):

> Use case: background-extraction. Asset type: transparent PNG portrait for an existing academic criminology website. Edit target: the provided original archive photograph of David Berkowitz. Remove ONLY the background, including every other person, arm, face, clothing and surroundings behind the central man. Keep ONLY David Berkowitz: his entire existing hair and head, ears, neck, white open-collar shirt and the existing shoulders. Preserve his exact identity, facial proportions, expression, eye direction, hair texture, original monochrome newspaper-photo grain and the original shirt. Do not invent details, improve or beautify the face, redraw, recolor, change pose, add body parts, or add clothing. Keep the complete existing subject within frame, with a small transparent margin around his hair and shoulders. Actual transparent alpha background, no fake checkerboard, no gray or white backdrop, no shadows, no outline, no border, no text. This is faithful background removal of the existing photo, not a newly generated portrait.
