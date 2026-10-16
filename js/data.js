/* Base: material de clase. Las ampliaciones se citan; el análisis retrospectivo se identifica. */
const sharedSources = [
 {label:'FBI · Serial Murder: Multi-Disciplinary Perspectives for Investigators (2008)',url:'https://www.fbi.gov/file-repository/reports-and-publications/stats-services-publications-serial-murder-serial-murder-july-2008-pdf/view'},
 {label:'Canter y Larkin (1993) · The environmental range of serial rapists',url:'https://www.davidcanter.com/resources/selected-journal-articles/'},
 {label:'Holmes, Tewksbury y Holmes (1999) · Fractured Identity Syndrome',url:'https://www.researchgate.net/publication/249713496_Fractured_Identity_Syndrome_A_New_Theory_of_Serial_Murder'}
];
const sections = [
 ['presentation','Presentación / estilo de vida / personalidad','Biografía y conducta'],
 ['scene','Escena del crimen','Hallazgos y espacios'],
 ['geography','Perfil geográfico','Distribución espacial'],
 ['mo','Modus operandi','Conducta instrumental'],
 ['signature','Firma criminal','Dimensión expresiva · interpretación'],
 ['victimology','Victimología','Características de las víctimas'],
 ['av','AV · Análisis de vinculación','Conducta y evidencia'],
 ['proposal','Propuesta de perfil','Cómo se plantearía con autor desconocido']
];
const cases = [
 {id:'ferrandiz',name:'Joaquín Ferrándiz Ventura',alias:'El Asesino del Círculo',place:'Castellón · España',period:'1995–1996',victims:'5 mujeres asesinadas',sentence:'69 años de prisión; excarcelado en julio de 2023 tras cumplir 25',image:'assets/portraits/ferrandiz.webp'},
 {id:'kemper',name:'Edmund Kemper',alias:'El Asesino de las Colegialas',place:'California · Estados Unidos',period:'1964 / 1972–1973',victims:'10 víctimas: 2 abuelos y 8 en la serie adulta',sentence:'Ocho condenas a prisión perpetua por los homicidios de 1972–1973',image:'assets/portraits/kemper.png'},
 {id:'dahmer',name:'Jeffrey Dahmer',alias:'El Carnicero de Milwaukee',place:'Ohio y Wisconsin · Estados Unidos',period:'1978–1991',victims:'17 adolescentes y hombres jóvenes',sentence:'15 perpetuas en Wisconsin y otra en Ohio; murió en prisión en 1994',image:'assets/portraits/dahmer.png'},
 {id:'onoprienko',name:'Anatoli Onoprienko',alias:'El Terminator de Ucrania',place:'Ucrania',period:'1989 / 1995–1996',victims:'52 homicidios con condena',sentence:'Pena de muerte conmutada por perpetua; murió en prisión en 2013',image:'assets/portraits/onoprienko.png'},
 {id:'ridgway',name:'Gary Leon Ridgway',alias:'El Asesino del Río Verde',place:'Washington · Estados Unidos',period:'1982–1998 · homicidios conocidos',victims:'49 homicidios con condena; confesó otros',sentence:'Prisión perpetua sin libertad condicional',image:'assets/portraits/ridgway.png'}
];
const portraitSources = {
 ferrandiz:{label:'Retrato de archivo publicado por Informativos Telecinco (22/07/2023)',url:'https://www.telecinco.es/noticias/sociedad/20230722/asesino-mujeres-castellon-sale-carcel-be5ma_18_010107790.html'},
 kemper:{label:'Ficha policial de 1973',url:'https://commons.wikimedia.org/wiki/File:Kempermugshot.jpg'},
 dahmer:{label:'Ficha policial de Milwaukee de 1991',url:'https://en.wikipedia.org/wiki/File:Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg'},
 onoprienko:{label:'Retrato de archivo',url:'https://en.wikipedia.org/wiki/File:Anatoly_Onoprienko_mugshot.jpg'},
 ridgway:{label:'Ficha policial de 1982',url:'https://commons.wikimedia.org/wiki/File:Gary_Ridgway_1982_Mugshot.jpg'}
};
const details = {
 ferrandiz:{
 summary:'Cinco asesinatos de mujeres en Castellón. La aproximación mediante una apariencia fiable, el uso del vehículo y la estrangulación articulan una serie en la que victimología y geografía resultan centrales.',
 presentation:[
  'Trabajaba en el sector de los seguros y mantenía una imagen de hombre educado, sociable y laboralmente integrado. En 1989 cometió una agresión sexual por la que fue condenado; después obtuvo la libertad condicional. La integración aparente coexistió con la planificación de ataques a mujeres. [1]',
  'El material describe frialdad afectiva, manipulación, egocentrismo y rasgos compatibles con psicopatía. Son descriptores interpersonales, no una puntuación clínica acreditada. Generar confianza fue un recurso de aproximación, más útil para el análisis que el apodo «psicópata educado». [1]'
 ],
 scene:[
  'Hay que separar contacto, agresión y hallazgo. Sonia Rubio apareció en un paraje de Oropesa; tres víctimas, junto al río Mijares en Vila-real; Amelia Sandra, en una balsa de Onda. El lugar del cadáver no prueba por sí solo dónde ocurrió el homicidio. [2]',
  'Estrangulación, ataduras y cobertura de la cabeza permiten comparar escenas. La manipulación para dificultar la identificación debe examinarse por su función de ocultación, sin atribuirle automáticamente un significado ritual. [1, 2]'
 ],
 geography:[
  'La concentración en Castellón conecta zonas de ocio y prostitución con lugares apartados de depósito. El coche separaba captación, agresión y abandono. Los accesos utilizados son compatibles con familiaridad territorial. [1]',
  'Los apuntes relacionan el caso con la hipótesis del círculo de Canter: la distribución de los delitos puede orientar hacia un área habitual. Es probabilística, no localiza con certeza una vivienda. No se dibuja un círculo real sin coordenadas verificadas de cada escenario. [1]'
 ],
 mo:[
  'Localizaba mujeres en contextos nocturnos y empleaba trato amistoso u ofertas de transporte. El traslado a lugares aislados facilitaba el control; la estrangulación era el mecanismo homicida recurrente. Ataduras y abandono del cuerpo completaban la secuencia instrumental. [1]',
  'En julio de 1998 los agentes que lo vigilaban observaron un intento de ataque después de desinflar la rueda del coche de una joven y ofrecer ayuda. Ese episodio permitió detenerlo; no se asigna ese mismo procedimiento a los cinco homicidios. [2]'
 ],
 signature:[
  'No se acredita una postura ritual única. El control, la exposición del cuerpo y la ocultación del rostro permiten explorar dominación o despersonalización como hipótesis expresiva. [1]',
  'Estrangular mata; atar inmoviliza; dificultar la identificación reduce la detección. Repetir esas acciones no basta para llamarlas firma. Hay que comparar presencia, variaciones y función para sostener un significado psicológico adicional.'
 ],
 victimology:[
  'Las víctimas fueron Sonia Rubio Arrufat, Amelia Sandra García Costa, Natalia Archelós Olaria, Francisca Salas León y Mercedes Vélez Ayala. Tres ejercían prostitución; las otras dos fueron abordadas en contextos distintos. Una ocupación única no define la serie. [1]',
  'Nocturnidad, aislamiento situacional y acceso mediante el coche son variables compartidas. Los contactos previos deben comprobarse individualmente; no se presupone que todas fueran desconocidas para él. [1, 2]'
 ],
 av:[
  'Como ejercicio retrospectivo, se compararían estrangulación, ataduras, cobertura de la cabeza, cronología, acceso y lugares de depósito. La combinación de variables aporta más que un solo método de muerte. [1]',
  'La diversidad entre víctimas no excluye una autoría común. Tampoco permite atribuirle cualquier cadáver de la zona: confesión y evidencia de cada episodio deben contrastar las semejanzas. Se explica un razonamiento de AV, no se reproduce un informe policial. [2]'
 ],
 proposal:['El autor está identificado y existe el apartado 1. Si faltara esa información, se formularía una propuesta provisional sobre acceso a víctimas, movilidad, control y familiaridad territorial. Orientaría a comprobar rutinas y disponibilidad de vehículo; no permitiría deducir nombre, empleo o diagnóstico. Se revisaría con nuevas evidencias.'],
 comparison:{mo:'Confianza, transporte, aislamiento, estrangulación y abandono.',victimology:'Mujeres con contextos distintos; tres ejercían prostitución.',profile:'Integración social aparente, manipulación y planificación; serie concentrada en Castellón.'},
 keys:['Cinco víctimas con contextos distintos.','Separar captación, agresión y depósito.','Estrangulación: M.O.; la firma necesita justificación expresiva.'],
 timeline:[['1989','Agresión sexual previa y condena.'],['1995–1996','Cinco asesinatos en Castellón.'],['1998','Vigilancia, detención y confesión.'],['2000 / 2023','Condena; excarcelación tras 25 años.']],
 sources:[{label:'Material de clase aportado · CASOS PARA WEB.pdf, pp. 1–3'},{label:'EFE · Reconstrucción con investigadores de la Guardia Civil (2023)',url:'https://efe.com/comunidad-valenciana/2023-09-10/las-apariencias-enganan-cronica-de-un-asesino-en-serie/'}],
 caveat:'Firma y AV se presentan como análisis académico. El modelo geográfico orienta una búsqueda, no acredita una identidad.'
 },
 kemper:{
 summary:'Diez víctimas conocidas: sus abuelos en 1964 y ocho personas en 1972–1973. La captación en coche y los actos sexuales post mortem exigen separar procedimiento, ocultación y conducta expresiva.',
 presentation:[
  'La biografía recoge conflictos familiares, aislamiento y violencia temprana. Mató a sus abuelos a los quince años y fue internado en Atascadero. Al salir mantuvo trabajos y contacto social con policías; el trato aparentemente afable coexistió con los homicidios. [1]',
  'Sus relatos muestran fantasías de dominio y hostilidad hacia su madre. Convertir esa relación en causa única reproduce su explicación. La identidad fracturada permite discutir facetas sociales coexistentes, no una doble personalidad ni un diagnóstico demostrado. [1, 2]'
 ],
 scene:[
  'La serie adulta combina captación en carretera, agresión en vehículo o lugares apartados, manipulación en espacios privados y dispersión de restos. Un cuerpo recuperado puede proceder de una agresión en otro lugar. [1]',
  'Decapitación, desmembramiento y actos sexuales con cadáveres deben situarse en su secuencia temporal. El homicidio de su madre y el de Sally Hallett ocurrieron en el entorno doméstico, una variación respecto de las autoestopistas. [1]'
 ],
 geography:[
  'La fase adulta se sitúa en California, en torno a Santa Cruz y rutas utilizadas por jóvenes autoestopistas. El coche conectaba contacto, muerte y depósito. North Fork, donde mató a sus abuelos, pertenece a un episodio anterior que se estudia aparte. [1]',
  'Se compararían rutas habituales, residencias y accesos a los depósitos. La dispersión indica movilidad, pero no calcula una residencia sin ubicaciones, fechas y recorridos contrastados.'
 ],
 mo:[
  'Ofrecía transporte y una apariencia fiable para facilitar la entrada en su coche. Después sometía y mataba a las jóvenes; utilizó armas de fuego, armas blancas y asfixia en diferentes episodios. Cambiar el mecanismo no excluye continuidad de autoría. [1]',
  'Trasladar y fraccionar cuerpos podía facilitar su manejo u ocultación. Esa función práctica debe separarse de la actividad sexual y de la manipulación de partes corporales. [1, 2]'
 ],
 signature:[
  'Los actos sexuales post mortem y la manipulación de cabezas permiten explorar posesión y control sobre una víctima incapaz de resistirse. Al exceder lo necesario para matar, son relevantes para una hipótesis de firma. [1, 2]',
  'Decapitar y desmembrar puede combinar ocultación y expresión. No se presupone un ritual idéntico en todos los hechos: se contrastan cada escena y las declaraciones del autor.'
 ],
 victimology:[
  'La serie adulta comprende seis jóvenes: Mary Ann Pesce, Anita Luchessa, Aiko Koo, Cindy Schall, Rosalind Thorpe y Alice Liu; además de Clarnell, su madre, y Sally Hallett. Aiko era menor. Las captadas durante desplazamientos forman un grupo relacional distinto de las víctimas del entorno familiar. [1]',
  'Sus abuelos, asesinados en 1964, constituyen otro contexto. El acceso a autoestopistas es una oportunidad aprovechada por el agresor, no una responsabilidad de las víctimas. «Co-ed Killer» no describe a las diez personas asesinadas. [1]'
 ],
 av:[
  'Se contrastarían transporte, rutas estudiantiles, movilidad, mutilaciones y actos sexuales post mortem. El mecanismo de muerte debe registrarse como variable cambiante, sin excluir conexiones solo por el arma. [1]',
  'La confesión y la localización de restos vinculan episodios cuando aportan datos verificables. La relación con su madre no acredita un único motivo para todos los delitos. Este AV es una lectura retrospectiva para el estudio. [1, 2]'
 ],
 proposal:['Si no hubiera apartado 1, se propondrían comprobaciones sobre movilidad en coche, aproximación a autoestopistas y acceso a espacios privados donde manipular cuerpos. El perfil priorizaría rutas y lugares. No permitiría inferir una historia familiar concreta, profesión o cociente intelectual a partir de las mutilaciones.'],
 comparison:{mo:'Oferta de transporte, sometimiento, métodos de muerte variables y dispersión de restos.',victimology:'Seis jóvenes en la serie adulta, su madre y una amiga; dos abuelos en 1964.',profile:'Aproximación social y fantasías de posesión; actividad sexual post mortem y distintos grupos de víctimas.'},
 keys:['10 víctimas en total; 8 en la serie adulta.','Captación y actividad post mortem tienen funciones diferentes.','No equiparar autoestopistas y víctimas familiares.'],
 timeline:[['1964','Homicidio de sus abuelos e internamiento.'],['1969','Salida de Atascadero.'],['1972–1973','Seis jóvenes y dos mujeres de su entorno.'],['1973','Confesión y ocho condenas perpetuas.']],
 sources:[{label:'Material de clase aportado · CASOS PARA WEB.pdf, pp. 4–7'},{label:'Meloy (1989) · Serial Murder: A Forensic Psychiatric Perspective',url:'https://drreidmeloy.com/wp-content/uploads/2015/12/1989_SerialMurderAFo.pdf'}],
 caveat:'No se incorpora el canibalismo como hecho acreditado ni se infiere una causa genética a partir de comportamientos infantiles.'
 },
 dahmer:{
 summary:'Diecisiete adolescentes y hombres jóvenes asesinados entre 1978 y 1991. Captación hacia espacios privados, sometimiento y conservación de restos permiten estudiar control instrumental y posesión.',
 presentation:[
  'Los apuntes describen aislamiento, consumo problemático de alcohol, dificultades relacionales e interés por conservar restos animales. Ocultó los homicidios mientras mantenía parte de su vida cotidiana. En sus declaraciones vinculó la violencia a conservar compañía y controlar a las víctimas. [1]',
  'La «teoría de la entidad» del material se puede discutir como lectura de fantasías que adquieren protagonismo; no acredita otra personalidad. La orientación sexual o los conflictos familiares tampoco explican por sí solos la imposición violenta de pasividad a otras personas. [1]'
 ],
 scene:[
  'El apartamento de Milwaukee concentró agresión, muerte, desmembramiento y conservación. Los investigadores encontraron restos humanos y fotografías de cuerpos: no era únicamente un depósito. [1, 2]',
  'Había que individualizar restos, cronologías y fotografías de víctimas distintas. Necrofilia, desmembramiento y canibalismo se describen por su relevancia conductual, sin presumir que cada práctica estuviera presente en todos los hechos. [1]'
 ],
 geography:[
  'El homicidio de Steven Hicks en 1978 ocurrió en Ohio; la serie posterior se concentró en Wisconsin. El eje espacial conecta bares y calle con espacios privados controlados por el agresor. [1]',
  'Concentrar varios delitos en una vivienda contrasta con la dispersión de cuerpos de otros casos. Debe separarse esa concentración de los lugares de captación y los desplazamientos de las víctimas.'
 ],
 mo:[
  'Ofrecía dinero, alcohol o compañía a adolescentes y hombres jóvenes para llevarlos a un lugar privado. En la serie posterior utilizó sedación y estrangulación. La muerte de Hicks tuvo una secuencia distinta y no debe reconstruirse trasladando el patrón consolidado. [1]',
  'Después desmembraba y eliminaba parte de los cuerpos, en ocasiones con productos químicos. Conservar partes, fotografiar y cometer actos sexuales con cadáveres excedía la eliminación de evidencia y requiere estudiar también la función expresiva. [1]'
 ],
 signature:[
  'La conservación de restos, las fotografías y la necrofilia permiten interpretar posesión y control persistentes. El canibalismo aparece en algunos hechos, no como requisito uniforme de la serie. [1]',
  'Desmembrar puede facilitar ocultación e integrarse en una fantasía. La distinción entre M.O. y firma depende de la función de cada acción, no solo de que ocurra después de la muerte.'
 ],
 victimology:[
  'Las víctimas fueron adolescentes y hombres jóvenes, muchos de ellos negros; hubo menores. Preferencias y oportunidades de contacto en ocio y calle intervinieron en la selección. Las ofertas de dinero o compañía facilitaban el acceso. [1]',
  'Se deben reconstruir identidades, desplazamientos, apoyo y respuesta a desapariciones. Explicar el caso por la homosexualidad del autor confunde orientación sexual con una causa de violencia y omite las decisiones coercitivas. [1]'
 ],
 av:[
  'Restos, fotografías, desapariciones y declaraciones conectan hechos que convergen en el apartamento. El FBI colaboró con ADN y análisis biológicos, químicos y de marcas de herramientas. La vinculación no descansa solo en semejanzas de conducta. [2]',
  'Tracy Edwards escapó y condujo a la intervención policial en julio de 1991. La confesión amplió la reconstrucción; cada atribución requiere contraste independiente. Una escena común no elimina la necesidad de identificar a cada víctima. [2]'
 ],
 proposal:['Sin presentación biográfica, se comprobarían acceso a zonas de captación y disponibilidad de un lugar privado donde conservar restos sin detección inmediata. La propuesta orientaría búsquedas materiales. No permitiría deducir aislamiento, orientación sexual o diagnóstico como explicación suficiente de la autoría.'],
 comparison:{mo:'Captación a espacio privado, sedación y estrangulación; eliminación parcial de restos.',victimology:'Adolescentes y hombres jóvenes, muchos negros; contacto en bares y calle.',profile:'Aislamiento biográfico y búsqueda de posesión: conservación de restos, fotografías y necrofilia.'},
 keys:['17 víctimas: distinguir cifra de homicidios y condenas.','El apartamento reunió evidencia de varios hechos.','Conservación y fotografías permiten estudiar posesión.'],
 timeline:[['1978','Muerte de Steven Hicks en Ohio.'],['1987–1991','Serie posterior en Wisconsin.'],['1991','Escape de Edwards y hallazgo del apartamento.'],['1992 / 1994','Condenas; muerte en prisión.']],
 sources:[{label:'Material de clase aportado · CASOS PARA WEB.pdf, pp. 8–9'},{label:'FBI · Investigación e identificación forense (2014)',url:'https://www.fbi.gov/news/stories/serial-killers-part-7-jeffrey-dahmer'}],
 caveat:'El primer homicidio se sitúa en Ohio, no en la vivienda de la abuela. Las etiquetas del material no se convierten en un diagnóstico nuevo.'
 },
 onoprienko:{
 summary:'Cincuenta y dos homicidios con condena. Robos, ataques a familias completas y destrucción de pruebas permiten estudiar violencia instrumental y múltiples víctimas dentro de una trayectoria serial.',
 presentation:[
  'El material recoge pérdida materna temprana, institucionalización y un entorno familiar inestable. Hubo trabajos y desplazamientos por Europa entre fases homicidas. Pasar por un orfanato no explica por sí solo la violencia posterior. [1]',
  'Sus declaraciones muestran deshumanización, superioridad y desplazamiento de responsabilidad hacia supuestas fuerzas o voces. Las técnicas de neutralización analizan esas justificaciones. Afirmar una «misión» no demuestra psicosis ni incapacidad para comprender los actos. [1]'
 ],
 scene:[
  'Atacó viviendas, incluidas casas apartadas, y personas en vehículos o lugares de paso. En varios domicilios mató a ocupantes, incluidos niños, sustrajo bienes y provocó incendios. Se comparan lesiones, accesos, distribución de víctimas y huellas de fuego. [1]',
  'El incendio altera la escena y puede destruir rastros: ausencia posterior de una evidencia no prueba que nunca existiera. Se registra cada episodio y su número de víctimas, sin confundir ambos recuentos.'
 ],
 geography:[
  'Las fases conocidas de 1989 y 1995–1996 se distribuyen por distintas zonas de Ucrania. Movilidad y elección de espacios apartados son más útiles que suponer un único barrio de actuación. [1]',
  'Se compararían rutas, residencias temporales y accesibilidad. No cabe aplicar mecánicamente un círculo residencial a una trayectoria móvil. Viajar por Europa no prueba que cometiera homicidios en esos destinos.'
 ],
 mo:[
  'Combinó armas de fuego, armas blancas y objetos contundentes. En ataques domiciliarios ejercía violencia sobre ocupantes y testigos, robaba e incendiaba en algunos episodios. La secuencia incluye ataque y reducción de riesgos de identificación. [1]',
  'No se describe una motivación sexual común. Armas y lugares cambian, pero se comparan acceso, robo y eliminación de testigos. La participación de un cómplice en la primera fase no se extiende a toda la serie. [1]'
 ],
 signature:[
  'No se establece una firma ritual inequívoca. Matar testigos e incendiar puede tener función instrumental; la brutalidad no demuestra por sí sola una necesidad psicológica diferenciada.',
  'El discurso de «misión» y las explicaciones sobre familias o niños se examinan como racionalizaciones. Atribuir valor simbólico a las víctimas requiere contrastar selección, declaraciones y conducta de cada episodio. [1]'
 ],
 victimology:[
  'Hubo hombres, mujeres y menores, familias completas y posibles testigos. Estar en una vivienda elegida o cerca del agresor podía definir la exposición. No hay un grupo de sexo y edad tan delimitado como en Dahmer. [1]',
  'Se distinguen víctimas de robos y personas eliminadas para evitar identificación. Decir que mataba niños para «salvarlos» de un orfanato es una justificación del autor, no una finalidad protectora ni un interés de las víctimas. [1]'
 ],
 av:[
  'Se compararían intrusión, armas, sustracción de bienes, muerte de ocupantes y testigos e incendios. La combinación orienta conexiones entre episodios; no incorpora a la serie todo incendio con homicidio. [1]',
  'Armas recuperadas, objetos sustraídos y confesiones contrastan la hipótesis. La condena de 1999 fue por 52 asesinatos. Este AV propone variables de estudio sin atribuir a la policía un modelo no documentado. [1, 2]'
 ],
 proposal:['Si faltara el apartado 1, se propondrían comprobaciones sobre movilidad, acceso a armas y elección de lugares con pocos observadores. La mezcla de robo y eliminación de testigos obliga a estudiar la función de la violencia. No se deducen una infancia institucionalizada ni un trastorno por incendios o número de víctimas.'],
 comparison:{mo:'Intrusión o interceptación, armas diversas, robo y eliminación de testigos; incendios en algunos ataques.',victimology:'Hombres, mujeres y niños; familias y testigos. Importa la situación en el lugar.',profile:'Movilidad y violencia instrumental; superioridad y misión como justificaciones, sin ritual inequívoco acreditado.'},
 keys:['52 homicidios con condena.','Serie entre episodios; varias víctimas en algunos ataques.','Incendios y eliminación de testigos pueden ser precaución.'],
 timeline:[['1989','Primera fase de homicidios.'],['1995–1996','Segunda fase de ataques.'],['1996 / 1999','Detención; juicio y condena.'],['2013','Muerte en prisión tras conmutación a perpetua.']],
 sources:[{label:'Material de clase aportado · CASOS PARA WEB.pdf, pp. 10–12'},{label:'RTÉ · Información contemporánea de la condena (1999)',url:'https://www.rte.ie/news/1999/0401/1134-ukraine/'},{label:'UPI · Método y muerte en prisión (2013)',url:'https://www.upi.com/Top_News/World-News/2013/08/29/Ukrainian-serial-killer-dies-of-heart-attack-in-jail/33991377777798/'}],
 caveat:'Se mantiene la cifra judicial global de 52 homicidios. La secuencia pormenorizada del primer ataque no se considera verificada con las fuentes disponibles.'
 },
 ridgway:{
 summary:'Green River se centró en mujeres y adolescentes vulnerables. El acceso mediante el coche, la estrangulación y el abandono en lugares apartados coexistieron con una vida laboral y familiar convencional.',
 presentation:[
  'Trabajó establemente como pintor y mantuvo parejas y vida familiar. Los apuntes recogen dificultades escolares y conflictos domésticos. La apariencia de trabajador integrado pudo reducir sospechas; no es un diagnóstico ni una explicación suficiente. [1]',
  'Frialdad, engaño y cosificación son rasgos descritos. No se aporta una puntuación PCL-R publicada y no se inventa: se habla de rasgos compatibles con psicopatía. La identidad fracturada analiza vida social convencional y actividad criminal oculta, no personalidad múltiple. [1]'
 ],
 scene:[
  'Los primeros hallazgos junto al Green River dieron nombre a la serie. Hubo cuerpos en bosques, riberas y otros lugares poco transitados, no solo en el río. Captación, muerte y hallazgo podían ocurrir en sitios diferentes. [1]',
  'Se comparan desnudez, estrangulación, traslados y reutilización de depósitos. Volver para realizar actos sexuales requiere una lectura distinta de mover restos para ocultarlos. La escena de hallazgo no equivale automáticamente a la primaria. [1]'
 ],
 geography:[
  'El eje territorial se sitúa al sur del área de Seattle, en Washington. Rutas conocidas conectaban captación y depósito. Reutilizar lugares puede indicar familiaridad y facilidad de acceso, no necesariamente firma. [1]',
  'Se estudiarían agrupaciones, cambios de ubicación y separación entre captación y abandono. Inferir un área habitual exige datos de cada víctima; no adjudica todos los cuerpos de una región a un único agresor.'
 ],
 mo:[
  'Se presentaba como cliente o persona amistosa, trasladaba a las víctimas en coche y las mataba principalmente por estrangulación. Después abandonaba cuerpos en lugares aislados y podía mover restos. Son conductas de acceso, control y ocultación. [1]',
  'En algunos hechos regresó para cometer actos sexuales con los cadáveres. Esa acción no era necesaria para matar ni trasladar a la víctima y exige analizar una función sexual post mortem. [1]'
 ],
 signature:[
  'La actividad sexual con cadáveres permite explorar posesión y disponibilidad de la víctima. Un cuerpo desnudo no demuestra necrofilia en cada episodio: hacen falta evidencias o declaraciones corroboradas. [1]',
  'Agrupar depósitos puede gestionar lugares conocidos o reducir esfuerzo y exposición. La regularidad espacial no se convierte por sí sola en ritual: la firma se justifica por función expresiva.'
 ],
 victimology:[
  'Seleccionó principalmente mujeres jóvenes y adolescentes; muchas ejercían prostitución, habían huido de casa o atravesaban precariedad. Accesibilidad y dificultades para detectar desapariciones son centrales. No todas compartían la misma biografía. [1]',
  'La vulnerabilidad sitúa oportunidades aprovechadas por el agresor, no responsabilidad de las víctimas. Se reconstruyen también redes de apoyo, demoras de identificación y efecto de la estigmatización sobre la respuesta institucional. [1]'
 ],
 av:[
  'Victimología, estrangulación y depósitos generaban hipótesis; la comparación genética fue decisiva para detenerlo en 2001. La evidencia material puede respaldar o descartar semejanzas conductuales. [2]',
  'Hubo 48 declaraciones de culpabilidad en 2003 y una condena adicional en 2011 por Rebecca Marrero: 49 en total. La cooperación debe contrastarse con restos y datos de cada hecho; otras confesiones no equivalen a otras condenas. [3, 4]'
 ],
 proposal:['Si no hubiera biografía, se comprobarían acceso habitual a lugares de captación, vehículo y familiaridad con depósitos. El perfil priorizaría áreas de actividad. No permitiría deducir oficio de pintor, relaciones familiares o puntuación de psicopatía; seguiría siendo una hipótesis sometida a verificación.'],
 comparison:{mo:'Apariencia de cliente o trato amistoso, coche, estrangulación y abandono apartado.',victimology:'Mujeres y adolescentes; muchas en prostitución, fugas o precariedad.',profile:'Vida laboral y familiar convencional, engaño, cosificación y actividad sexual post mortem.'},
 keys:['49 condenas: 48 en 2003 y una en 2011.','Depósito y muerte pueden ocurrir en lugares distintos.','El ADN refuerza la vinculación más allá de la conducta.'],
 timeline:[['1982','Primeros hallazgos de Green River.'],['2001','Detención tras comparación genética.'],['2003','Culpabilidad por 48 homicidios.'],['2011','Condena por Rebecca Marrero.']],
 sources:[{label:'Material de clase aportado · CASOS PARA WEB.pdf, pp. 13–15'},{label:'FBI · Seattle: investigación y prueba genética',url:'https://www.fbi.gov/history/field-office-histories/seattle'},{label:'King County · Registro oficial de las 48 declaraciones de culpabilidad (2003)',url:'https://mkcclegisearch.kingcounty.gov/LegislationDetail.aspx?ID=551669&GUID=2B726EF6-F54B-42C9-816F-8870492C5188&FullText=1'},{label:'SeattlePI · Condena por el homicidio 49 (2011)',url:'https://www.seattlepi.com/local/article/Ridgway-pleads-guilty-in-49th-slaying-sentenced-1020351.php'}],
 caveat:'Se distingue la declaración de culpabilidad de noviembre de 2003 de la sentencia de diciembre. Las 49 condenas no equivalen a todas sus confesiones.'
 }
};
const concepts = [
 ['Modus operandi','Procedimientos para acceder a la víctima, cometer el delito y evitar la identificación. Pueden aprenderse y cambiar.','Ejemplo: ofrecer transporte, inmovilizar y ocultar un cadáver.'],
 ['Firma criminal','Conductas expresivas o de satisfacción psicológica que exceden lo necesario para ejecutar el delito. La repetición orienta una hipótesis, no prueba identidad.','Ejemplo: estudiar la conservación de restos en Dahmer, separándola de su eliminación.'],
 ['Victimología','Estudio de la víctima, sus relaciones, selección y contexto del hecho. Reconstruye vulnerabilidad sin responsabilizar a quien sufrió la violencia.','Pregunta: ¿cómo accedió el agresor a esa persona?'],
 ['Escena del crimen','Espacio relacionado con preparación, ejecución o consecuencias del delito. Escena primaria y depósito pueden estar separados.','En Green River, hallazgo no equivale necesariamente a lugar de muerte.'],
 ['Perfil geográfico','Análisis espacial de hechos y desplazamientos para proponer áreas de actividad o puntos de anclaje. Es probabilístico.','Distingue captación, agresión, muerte y depósito.'],
 ['AV · Análisis de vinculación','Evaluación de posible autoría común entre hechos mediante conducta, espacio, tiempo y evidencia forense. Contrasta similitudes, diferencias y alternativas.','Compartir método de muerte no basta para compartir autor.'],
 ['Perfil criminológico','Hipótesis sobre características y rutinas de un posible autor a partir de la evidencia. Orienta comprobaciones y se revisa con nuevos datos.','No identifica de forma infalible ni prueba culpabilidad.'],
 ['Hipótesis del círculo','Modelo de Canter y Larkin que relaciona distribución de delitos y posible zona habitual del autor. Su utilidad depende del patrón espacial.','Un autor que se desplaza desde otra zona puede no ajustarse.'],
 ['Actos de precaución','Acciones dirigidas a reducir detección, conservar anonimato o destruir evidencia. Se interpretan en contexto.','Ejemplo: incendios después de algunos ataques de Onoprienko.'],
 ['Asesinato serial','Homicidio de dos o más víctimas por el mismo autor o autores en episodios separados, según la definición operativa del FBI.','Un episodio con varias víctimas puede pertenecer a una serie.'],
 ['Necrofilia','Interés o actividad sexual dirigida a cadáveres. Describir la conducta no sustituye una evaluación clínica.','Se distingue de matar y de ocultar el cuerpo.'],
 ['Trofeo','Objeto o parte corporal conservada en relación con el delito que puede servir para recordar o revivir la experiencia. Esa función debe acreditarse.','Conservar y destruir restos son conductas distintas que pueden coexistir.'],
 ['Rasgos psicopáticos','Características como manipulación, frialdad o falta de remordimiento. Observar algunos rasgos no equivale a una evaluación completa.','No se inventan puntuaciones PCL-R desde una biografía.'],
 ['Técnicas de neutralización','Justificaciones que desplazan responsabilidad, minimizan daño o apelan a valores supuestamente superiores.','La misión alegada por Onoprienko se analiza como discurso del autor.'],
 ['Identidad fracturada','Marco teórico sobre coexistencia de una identidad social convencional y una actividad homicida oculta. No equivale a identidad disociativa.','Aplicación de estudio: vida laboral y familiar de Ridgway frente a sus homicidios.'],
 ['Confesión, corroboración y condena','Declarar un hecho, respaldarlo con evidencia independiente y resolver judicialmente cargos son procesos distintos. Sus cifras pueden diferir.','Ejemplo: distinguir confesiones y 49 condenas de Ridgway.']
];

