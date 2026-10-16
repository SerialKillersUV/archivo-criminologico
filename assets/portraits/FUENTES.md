# Procedencia de los cinco retratos

Fotografías de archivo con edición del fondo; el original enlazado es la referencia documental. El tratamiento CSS en escala de grises unifica las tarjetas.

| Archivo | Persona | Referencia |
|---|---|---|
| ferrandiz.webp | Joaquín Ferrándiz Ventura | [Informativos Telecinco, 22/07/2023](https://www.telecinco.es/noticias/sociedad/20230722/asesino-mujeres-castellon-sale-carcel-be5ma_18_010107790.html) |
| kemper.png | Edmund Kemper | [Ficha policial de 1973](https://commons.wikimedia.org/wiki/File:Kempermugshot.jpg) |
| dahmer.png | Jeffrey Dahmer | [Ficha policial de Milwaukee, 1991](https://en.wikipedia.org/wiki/File:Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg) |
| onoprienko.png | Anatoli Onoprienko | [Retrato de archivo](https://en.wikipedia.org/wiki/File:Anatoly_Onoprienko_mugshot.jpg) |
| ridgway.png | Gary Ridgway | [Ficha policial de 1982](https://commons.wikimedia.org/wiki/File:Gary_Ridgway_1982_Mugshot.jpg) |

Los cuatro retratos anteriores se conservan del repositorio. La edición asistida puede modificar píxeles: no usar los recortes para análisis biométrico o documental. Las condiciones pertenecen a sus fuentes; no se atribuye una licencia de dominio público uniforme.

## Ferrándiz: edición del 16/10/2026

Herramienta integrada `image_gen`, modo de edición con fotografía real como referencia y fondo transparente. Archivo final: `assets/portraits/ferrandiz.webp`. Después se redujo a un máximo de 680 × 900 píxeles conservando el canal alfa.

Prompt empleado:

> Use case: background-extraction. Edit target: the provided real historical portrait photo of Joaquín Ferrándiz Ventura. For an academic criminology website portrait card. Extract ONLY the existing man (head, hair, neck, suit shoulders, white shirt and tie) from this exact source photograph. Remove the light photo background AND the black side bars; make all background actually transparent. Preserve his exact real identity, original facial proportions, expression, age, dark hair, clothes, pose and natural archived photo quality. Keep the full head and hair within the image with a small transparent margin above. Centered head and shoulders portrait, vertical 3:4 framing. Do not invent, beautify, change the face or add any features. No text, no logos, no border, no props. The only requested edit is background extraction and framing.

