/* Texto de los casos conservado íntegramente; conceptos seleccionados para el estudio. */
const sourceDocument = {
  "title": "CASOS PARA LA WEB.pdf",
  "pages": 18,
  "date": "2026-11-07",
  "bodySha256": "c5a949e8195d7b030739ce2cef7337c155384b61497e86ad2b277759eb7c8c1c"
};

const sections = [
  [
    "presentation",
    "Presentación / estilo de vida / personalidad"
  ],
  [
    "scene",
    "Escena del crimen"
  ],
  [
    "geography",
    "Perfil geográfico"
  ],
  [
    "mo",
    "Modus operandi"
  ],
  [
    "signature",
    "Firma criminal"
  ],
  [
    "victimology",
    "Victimología"
  ],
  [
    "av",
    "Análisis de vinculación"
  ],
  [
    "justice",
    "Detención y condena"
  ]
];

const cases = [
  {
    "id": "berkowitz",
    "name": "David Berkowitz",
    "alias": "El Hijo de Sam",
    "place": "Nueva York",
    "period": "1976 y 1977",
    "image": "assets/portraits/berkowitz.png",
    "sourcePages": "1–4"
  },
  {
    "id": "onoprienko",
    "name": "Anatoli Onoprienko",
    "alias": "",
    "place": "Ucrania",
    "period": "",
    "image": "assets/portraits/onoprienko.png",
    "sourcePages": "4–7"
  },
  {
    "id": "ridgway",
    "name": "Gary Leon Ridgway",
    "alias": "El asesino de Green River",
    "place": "Washington · condado de King",
    "period": "",
    "image": "assets/portraits/ridgway.png",
    "sourcePages": "8–11"
  },
  {
    "id": "kemper",
    "name": "Edmund Kemper",
    "alias": "",
    "place": "California · Santa Cruz",
    "period": "",
    "image": "assets/portraits/kemper.png",
    "sourcePages": "12–15"
  },
  {
    "id": "dahmer",
    "name": "Jeffrey Dahmer",
    "alias": "",
    "place": "Wisconsin · Milwaukee",
    "period": "",
    "image": "assets/portraits/dahmer.png",
    "sourcePages": "15–18"
  }
];

const portraitSources = {
  "kemper": {
    "label": "Ficha policial de 1973",
    "url": "https://commons.wikimedia.org/wiki/File:Kempermugshot.jpg"
  },
  "dahmer": {
    "label": "Ficha policial de Milwaukee de 1991",
    "url": "https://en.wikipedia.org/wiki/File:Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg"
  },
  "onoprienko": {
    "label": "Retrato de archivo",
    "url": "https://en.wikipedia.org/wiki/File:Anatoly_Onoprienko_mugshot.jpg"
  },
  "ridgway": {
    "label": "Ficha policial de 1982",
    "url": "https://commons.wikimedia.org/wiki/File:Gary_Ridgway_1982_Mugshot.jpg"
  },
  "berkowitz": {
    "label": "Mount Vernon Argus · David Berkowitz (1977), archivo de Wikimedia Commons",
    "url": "https://commons.wikimedia.org/wiki/File:David_Berkowitz_Arrested_August_10_1977_Mount_Vernon_Argus.jpg"
  }
};

const details = {
  "berkowitz": {
    "presentation": [
      "David Berkowitz, conocido como el Hijo de Sam, fue un asesino en serie que sembró terror en Nueva York durante 1976 y 1977. Su actividad criminal estuvo marcada por tiroteos dirigidos principalmente contra parejas jóvenes que se encontraban en el interior de sus vehículos, normalmente durante la noche.",
      "Su adolescencia estuvo marcada por conductas antisociales, incendios y agresiones, además de una obsesión con los perros y la violencia que cada vez iba a más. Al estudiar su caso, destaca su condición de hijo adoptivo, aunque más tarde entró en contacto con su familia biológica, pero nunca llegó a tener una relación familiar cercana y manifestó sentirse marginado por ella.",
      "En 1975 experimentó un aislamiento social cada vez mayor. Durante esta etapa afirmó que escuchaba voces demoníacas que le ordenaban cometer asesinatos. Según él, estas entidades se comunicaban a través de los aullidos de los perros y le exigían matar a mujeres como si de una ofrenda se tratase.",
      "Esta explicación fue desmentida por el propio Berkowitz, que reconoció en 1979 que había inventado toda la historia demoníaca para justificar sus crímenes y aliviar su sentimiento de culpa.",
      "En cuanto a su comportamiento podemos destacar diferentes rasgos como la conducta antisocial y agresiva desde su adolescencia, misoginia, necesidad de notoriedad (utilizaba cartas dirigidas a la policía y a la prensa), manipulación y búsqueda de poder y control (en prisión pudo utilizar la religión para conseguir prestigio, influencia y autoridad)."
    ],
    "scene": [
      "Sus escenas del crimen presentan un patrón definido. Sus ataques se producían durante la noche y tenían como escenario el interior, o cerca, de vehículos en los que se encontraban parejas jóvenes.",
      "El agresor daba vueltas por las calles de Nueva York en su coche hasta localizar posibles víctimas. Una vez identificadas, se aproximaba y efectuaba disparos a quemarropa, sin necesidad de establecer contacto físico previo.",
      "Un elemento que resulta importante es que una de las cartas que escribio a la policía fue encontrada el 16 de abril de 1977 en la escena del asesinato de Valentina Suriani y Alexander Esau. Esto demuestra que Berkowitz no solo se dedicaba a ejecutar los ataques, sino que también usaba las escenas del crimen como espacios para comunicarse y provocar a la policía."
    ],
    "geography": [
      "Su actividad criminal se desarrolló en Nueva York, donde realizó sus ataques entre 1976 y 1977. Su comportamiento demuestra una movilidad urbana asociada al uso de su coche, que utilizaba para desplazarse por diferentes zonas mientras buscaba posibles víctimas.",
      "No parecía depender de un único escenario concreto, él se dedicaba a merodear por las calles hasta encontrar parejas que se encontraran en circunstancias que facilitaran el ataque, sobretodo dentro de sus automóviles y durante la noche.",
      "El uso del coche le permitía desplazarse y buscar oportunidades criminales sin depender de un único lugar de actuación. Además esta movilidad dificulta que las autoridades pudieran anticipar dónde se produciría el siguiente ataque."
    ],
    "mo": [
      "El modus operandi (MO) consistía en localizar parejas jóvenes mientras circulaba en su coche, se aproximaba a ellas y dispararles a corta distancia utilizando un arma de fuego. Esto caracterizado también por una ausencia de contacto físico, ya que no necesitaba mantener una interacción prolongada con las víctimas para ejecutar los ataques.",
      "La repetición de este modus operandi demuestra consistencia en su forma de actuar.",
      "Además, sus asesinatos parecían estar relacionados con una motivación obsesiva y sobretodo misógina, aunque sus objetivos eran normalmente parejas, las mujeres eran el principal foco de su odio."
    ],
    "signature": [
      "La firma criminal de Berkowitz se caracterizaba por la construcción de una identidad demoníaca y por la necesidad de provocar, intimidar y obtener notoriedad.",
      "A diferencia del modus operandi, que está relacionado con la búsqueda y el ataque a las víctimas mediante disparos, su firma se manifestaba a través de las comunicaciones que mantenía con la policía y los medios de comunicación.",
      "Entre sus principales manifestaciones destaca sobretodo la identidad que el mismo se creó, la identidad de El Hijo de Sam. Él se presentaba como una persona controlada por fuerzas demoníacas, describiéndose en sus cartas como un monstruo programado para matar y obedecer las órdenes de una figura a la que llamaba «el padre Sam».",
      "Esta identidad ayudaba a construir un personaje que generaba miedo e incertidumbre",
      "Además, se dedicaba a dejar cartas dirigidas a autoridades y prensa, por ejemplo, el 16 de abril de 1977 dejó una carta en la escena del crimen de Valentina Suriani y Alexander Esau, dirigida al capitán Joseph Borrelli. En ella se presentaba como un cazador sediento de sangre, justificando sus asesinatos con órdenes demoníacas y amenazando con continuar matando.",
      "También el 31 de mayo de 1977, envió otra carta a Jimmy Breslin, del periódico Daily News. Aquí utilizó un lenguaje más poético y macabro, describiéndose como una presencia que acechaba en las cloacas de Nueva York.",
      "De esta forma mantenía una presencia psicológica sobre la sociedad y las autoridades, incluso cuando no estaba ejecutando directamente los ataques."
    ],
    "victimology": [
      "Las víctimas de Berkowitz eran principalmente mujeres jóvenes y parejas jóvenes. La selección de estas víctimas refleja el componente misógino y obsesivo, ya que existía un odio hacia las mujeres, que constituían el principal foco de sus ataques.",
      "Puede apreciarse una selección de víctimas basada en características situacionales y demográficas, y no en una relación personal previa entre agresor y víctima.",
      "Las parejas jóvenes que permanecían dentro de sus vehículos constituían objetivos accesibles para su forma de actuar. Entre sus víctimas se encuentran, Donna Lauria, Valentina Suriani, Alexander Esau, Christine Freund, Virginia Voskerichian y Stacy Moskowitz.",
      "Berkowitz se refería a Donna Lauria en una de sus cartas, pidiendo que no fuera olvidada, aunque lo hacía mezclando una aparente empatía con una actitud cínica."
    ],
    "av": [
      "Los ataques presentan una serie de características comunes que permiten establecer una relación entre los distintos acontecimientos criminales. La repetición de estas características permite observar una continuidad en el comportamiento delictivo. Son muy importantes la selección de víctimas, el escenario de los ataques, la utilización de armas de fuego y la forma de aproximación.",
      "Otro elemento significativo es la existencia de las cartas. A través de ellas, establecía una conexión entre diferentes acontecimientos criminales, reforzando su identidad como autor y atribuyéndose la responsabilidad de los asesinatos.",
      "Además, tras su detención, reconoció que las ocho muertes eran responsabilidad suya, lo que constituye un elemento de atribución directa."
    ],
    "justice": [
      "El 10 de agosto de 1977, David Berkowitz fue detenido. Permaneció durante ocho meses en un hospital psiquiátrico, donde fue sometido a diferentes evaluaciones para determinar su estado mental. Tras la existencia de opiniones contradictorias entre los especialistas. finalmente, prevaleció la postura que lo consideraba imputable.",
      "En mayo de 1978, Berkowitz se declaró culpable de todos los cargos y ell 13 de junio de 1978 fue condenado a 365 años de prisión, sin posibilidad de apelación, por los delitos que se le imputaban.",
      "Fue trasladado inicialmente a la prisión de Attica. Su comportamiento durante los primeros años estuvo marcado por episodios de agresividad, ira y problemas disciplinarios y sufrió incluso un intento de asesinato por parte de otro interno. Fue trasladado a Sullivan Correctional Facility y comenzó una transformación religiosa que, según su propio relato, cambió radicalmente su manera de entender la vida.",
      "Sobre esta transformación y su finalidad hay muchas hipótesis y teorías, pero la que más fuerza tiene es que había encontrado en la religión una nueva forma de conseguir atención y control sobre otras personas.",
      "David Berkowitz continúa cumpliendo su condena en prisión."
    ],
    "comparison": {
      "mo": "El modus operandi (MO) consistía en localizar parejas jóvenes mientras circulaba en su coche, se aproximaba a ellas y dispararles a corta distancia utilizando un arma de fuego. Esto caracterizado también por una ausencia de contacto físico, ya que no necesitaba mantener una interacción prolongada con las víctimas para ejecutar los ataques.",
      "victimology": "Las víctimas de Berkowitz eran principalmente mujeres jóvenes y parejas jóvenes. La selección de estas víctimas refleja el componente misógino y obsesivo, ya que existía un odio hacia las mujeres, que constituían el principal foco de sus ataques.",
      "profile": "En cuanto a su comportamiento podemos destacar diferentes rasgos como la conducta antisocial y agresiva desde su adolescencia, misoginia, necesidad de notoriedad (utilizaba cartas dirigidas a la policía y a la prensa), manipulación y búsqueda de poder y control (en prisión pudo utilizar la religión para conseguir prestigio, influencia y autoridad)."
    }
  },
  "onoprienko": {
    "presentation": [
      "Anatoli Onoprienko sufrió una serie de acontecimientos y vivió en unas circunstancias que marcaron su infancia. Su desarrollo estuvo condicionado por el abandono familiar, pérdida de figuras afectivas y diferentes experiencias de maltrato.",
      "Su padre abandonó el hogar cuando él tenía aproximadamente un año y a los tres años, sufrió la muerte de su madre. Como consecuencia de esto, fue internado en un orfanato, donde no encontró un entorno adecuado para su desarrollo.",
      "Su padre sufría alcoholismo y maltrataba frecuentemente a los niños. Durante su estancia en el orfanato, Onoprienko sufrió burlas por parte de otros compañeros, lo que provocó enfrentamientos y peleas constantes, hasta llegar a fugarse.",
      "Estas experiencias contribuyeron a desarrollar una percepción del entorno como un espacio hostil y desprotegido, favoreciendo la aparición de mecanismos de defensa agresivos y antisociales.",
      "Un aspecto importante es la posible relación simbólica entre su historia familiar y la selección de determinadas víctimas. Onoprienko terminó trabajando como conductor, la misma profesión que desempeñaba su padre. Muchos de los conductores asesinados podían representar simbólicamente la figura paterna, de manera que matar a estas personas era una forma de proyectar su odio hacia su padre .",
      "También justificaba los asesinatos de menores afirmando que los mataba para evitarles una vida en el orfanato, reproduciendo una interpretación distorsionada de sus experiencias infantiles.",
      "En cuanto a su personalidad podemos destacar la agresividad y antisocialidad, falta de empatía en sus asesinatos indiscriminados, incluyendo familias enteras, deshumanización ya que describía algunos de sus ataques como si estuviera «cazando personas», egocentrismo y sentimiento de superioridad y ausencia de remordimientos."
    ],
    "scene": [
      "Las escenas del crimen de Anatoli se caracterizaban principalmente por la violencia extrema ejercida contra familias enteras, especialmente en viviendas en zonas periféricas o relativamente aisladas.",
      "Su escenario de actuación más habitual eran los domicilios particulares. Una vez dentro de las viviendas, atacaba a todos los ocupantes, sin limitarse a una víctima concreta, esto incluía tanto a los adultos como a los menores. En cuanto a las armas usadas, podía llegar a utilizar todo tipo, desde armas de fuego hasta cuchillos, hachas y martillos.",
      "Luego de cometer el crimen, robaba objetos de valor y, en determinados asesinatos, incendiaba las viviendas para destruir posibles evidencias.",
      "Además de los ataques en domicilios, se le atribuyó un episodio en el que interceptaba vehículos en una autopista y asesinaba a sus conductores. Esto demuestra que sus escenarios no se limitaban solo a viviendas familiares, aunque estas últimas fueran las más comunes.",
      "Onoprienko comenzó a incendiar las viviendas a finales de 1995, conducta que repetiría en otros episodios. Esta práctica tenía una finalidad instrumental, ya que buscaba destruir evidencias que pudieran relacionarlo con los crímenes."
    ],
    "geography": [
      "La actividad criminal se desarrolló principalmente en Ucrania, donde llevó a cabo los asesinatos. Su comportamiento geográfico presenta dos características destacables, que son la elección de viviendas periféricas y el uso de diferentes espacios para localizar y atacar a sus víctimas.",
      "Durante sus primeros episodios, actuó en viviendas particulares, y luego amplió sus escenarios de actuación, incluyendo los ataques contra conductores en una autopista.",
      "Entre 1990 y 1995 atravesó un periodo durante el cual no se le atribuyeron homicidios y durante estos años realizó múltiples viajes por Europa, antes de retomar su actividad criminal a finales de 1995."
    ],
    "mo": [
      "El modus operandi se caracterizaba por una gran brutalidad y por la utilización de diferentes armas para ejecutar sus asesinatos. Entre las armas que utilizaba se encontraban armas de fuego, cuchillos, hachas y martillos. Según sus propias declaraciones, mostraba interés por experimentar con diferentes métodos de ataque, aunque no manifestaba interés por mantener relaciones sexuales con sus víctimas.",
      "En los ataques contra conductores, su procedimiento era diferente, él interceptaba vehículos en una autopista y asesinaba a las personas que los conducían. Él mismo describió esta conducta como una forma de «cazar personas».",
      "Tras un primer periodo de actividad en 1989 y 1990, interrumpió sus asesinatos durante varios años. Cuando retomó su actividad a finales de 1995, sus ataques se caracterizaron por una mayor brutalidad, llegando a asesinar familias completas y posibles testigos que pudieran interferir en sus acciones.",
      "Su modus operandi combinaba la selección de escenarios aislados, la utilización de diferentes instrumentos homicidas, el robo y la destrucción posterior de evidencias. Además, la ausencia de motivación sexual diferenciaba sus ataques de aquellos en los que existe una finalidad de carácter sexual."
    ],
    "signature": [
      "Algunos comportamientos que permiten aproximarse a su posible componente psicológico encontramos principalmente la percepción de los asesinatos como una actividad de caza. Esta expresión refleja una importante deshumanización de las víctimas, que pasaban a ser consideradas objetivos sobre los que ejercer violencia.",
      "Se puede pensar que su firma criminal es el robo e incendio de viviendas después de cometer el brutal crimen, pero esto está más relacionado con la destrucción de evidencias, es decir, una finalidad principalmente instrumental que se acerca más al modus operandi que a la firma criminal."
    ],
    "victimology": [
      "Se caracteriza por una selección de víctimas muy amplia, aunque con un patrón recurrente, eran familias completas que se encontraban en sus viviendas, incluidos adultos y menores.",
      "A diferencia de otros asesinos en serie que seleccionan a individuos con características muy concretas, Onoprienko no parecía limitarse a un único perfil de víctima. Sus ataques podían afectar a todos los miembros de una familia, así como a personas que se interpusieran en su camino.",
      "Uno de los aspectos más significativos de su victimología es la posible existencia de víctimas simbólicas. Algunos de los conductores asesinados podían representar simbólicamente a su padre, con quien mantenía una relación de abandono y malos tratos.",
      "También es importante su explicación sobre los asesinatos de menores ya que Onoprienko afirmaba que los mataba para evitarles una vida en el orfanato, reproduciendo de manera distorsionada las experiencias que había sufrido en su infancia."
    ],
    "av": [
      "En el caso de Anatoli Onoprienko, los asesinatos presentan una serie de características comunes relacionadas con la selección de escenarios, las características de las víctimas, los métodos de ataque y determinados comportamientos posteriores a los homicidios.",
      "Uno de los elementos más importantes es la repetición de ataques contra familias. La utilización de escenarios aislados y la eliminación de los ocupantes son características conductuales que permiten identificar similitudes entre los episodios.",
      "También es importante la combinación de asesinatos y robos. La sustracción de objetos de valor aparece como un comportamiento habitual, mientras que el incendio de las viviendas se incorpora a partir de finales de 1995.",
      "También existen diferencias entre sus etapas criminales. En 1989 comenzó actuando junto a Serhiy Rogozin, mientras que posteriormente pasó a cometer los asesinatos de manera independiente. Además, en su segunda etapa se observa una mayor brutalidad y una ampliación de los escenarios, incluyendo los ataques contra conductores."
    ],
    "justice": [
      "La actividad criminal de Anatoli Onoprienko terminó en 1996, cuando fue detenido y finalmente, se le atribuyeron 52 asesinatos. Por los crímenes cometidos, Onoprienko fue condenado inicialmente a pena de muerte. Sin embargo, esta condena fue posteriormente conmutada por cadena perpetua.",
      "Falleció en prisión el 27 de agosto de 2013 debido a un fallo cardíaco, a la edad de 54 años."
    ],
    "comparison": {
      "mo": "El modus operandi se caracterizaba por una gran brutalidad y por la utilización de diferentes armas para ejecutar sus asesinatos. Entre las armas que utilizaba se encontraban armas de fuego, cuchillos, hachas y martillos. Según sus propias declaraciones, mostraba interés por experimentar con diferentes métodos de ataque, aunque no manifestaba interés por mantener relaciones sexuales con sus víctimas.",
      "victimology": "Se caracteriza por una selección de víctimas muy amplia, aunque con un patrón recurrente, eran familias completas que se encontraban en sus viviendas, incluidos adultos y menores.",
      "profile": "En cuanto a su personalidad podemos destacar la agresividad y antisocialidad, falta de empatía en sus asesinatos indiscriminados, incluyendo familias enteras, deshumanización ya que describía algunos de sus ataques como si estuviera «cazando personas», egocentrismo y sentimiento de superioridad y ausencia de remordimientos."
    }
  },
  "ridgway": {
    "presentation": [
      "La infancia de Gary Leon Ridgway estuvo marcada por una relación conflictiva con su madre, quien ejercía un control estricto y recurría a castigos físicos y humillaciones. Durante su etapa escolar presentó dificultades académicas, era extremadamente tímido y tenía problemas para orientarse. También se han descrito comportamientos violentos durante su adolescencia, entre ellos la tortura de animales y el ataque con un cuchillo a un niño de seis años. Según las declaraciones que se le atribuyen, habría manifestado interés por experimentar qué se sentía al matar",
      "Tras incorporarse a la Marina, regresó a Washington, donde trabajó como pintor y contrajo matrimonio en varias ocasiones. Mantenía una apariencia social aparentemente normal, como trabajador, marido y padre, mientras desarrollaba una actividad criminal clandestina en la sombra.",
      "También resulta relevante su relación con la prostitución y la sexualidad. Ridgway frecuentaba prostitutas y seleccionaba principalmente a mujeres que ejercían la prostitución o que se encontraban en situaciones de vulnerabilidad. Su elección respondía, entre otros motivos, a la facilidad de acceso y a la percepción de que sus desapariciones podrían recibir menos atención policial. Además, reconoció haber mantenido relaciones sexuales con cadáveres, lo que permite analizar la presencia de comportamientos sexuales vinculados al dominio y a la objetualización de las víctimas",
      "Presentaba rasgos compatibles con la psicopatía, como falta de empatía, frialdad emocional, ausencia de remordimiento y objetualización de las víctimas. Pero no existe una puntuación PCL-R publicada que permita confirmar este diagnóstico. También destaca la separación entre su identidad pública y su comportamiento criminal, que puede analizarse con la teoría de la Identidad Fracturada estudiada en clase."
    ],
    "scene": [
      "Las escenas relacionadas con los crímenes de Ridgway presentaban dos espacios: los lugares donde se producían los asesinatos y aquellos en los que abandonaba los cadáveres.",
      "Los homicidios se cometían en el interior de su vivienda o en su vehículo, aunque también reconoció haber asesinado a algunas mujeres en espacios exteriores. Él prefería llevar a las víctimas a su domicilio, donde podía controlar mejor la situación y reducir la posibilidad de ser observado. En otros casos, los asesinatos se producían dentro de su camioneta, poco después de recoger a las mujeres en las zonas donde ejercían la prostitución.",
      "Una vez cometido el homicidio, trasladaba los cuerpos a lugares aislados, como zonas boscosas, terrenos escarpados, barrancos y áreas próximas a carreteras. Algunos cadáveres fueron abandonados en el río Green o en sus inmediaciones, circunstancia que le otorgó este nombre. Los cuerpos aparecían desnudos y a veces cubiertos con ramas o vegetación.",
      "Ridgway no elegía los lugares de abandono de manera aleatoria. Prefería zonas apartadas, con poca circulación de personas, y utilizaba referencias físicas como árboles grandes o troncos para recordar dónde había dejado los cuerpos. También procuraba no usar repetidamente un mismo punto, con el objetivo de reducir las posibilidades de que los investigadores relacionaran los hallazgos"
    ],
    "geography": [
      "La actividad criminal de Ridgway se concentró en el estado de Washington, en el condado de King. La distribución de los lugares donde recogía a las víctimas y abandonaba sus cadáveres permite identificar una relación entre su movilidad cotidiana, sus zonas de trabajo y los espacios para cometer los delitos.",
      "Uno de los principales puntos de captación era la carretera Pacific Highway South, en las áreas de Tukwila, SeaTac y Kent. Recorría estas zonas durante horas antes y después de su jornada laboral, buscando mujeres que ejercían la prostitución. Él denominaba a esta actividad patrolling, es decir, patrullar o recorrer zonas en busca de posibles víctimas. También frecuentaba Rainier Valley, el distrito internacional de Seattle, el centro de la ciudad y Aurora Avenue, en el norte de Seattle.",
      "Los lugares de abandono de los cadáveres eran por diferentes áreas del condado de King. Entre los puntos se encontraban las inmediaciones del río Green, zonas boscosas, el área de Star Lake, zonas próximas al aeropuerto y determinados puntos de carreteras.. Algunos cuerpos fueron trasladados a zonas de Oregón, para dificultar la investigación y desviar la atención policial."
    ],
    "mo": [
      "El modus operandi de Gary Ridgway se caracterizaba por la selección de mujeres vulnerables, el engaño para conseguir su confianza, el estrangulamiento y el abandono de los cadáveres en lugares aislados.",
      "Buscaba a sus víctimas principalmente en zonas de prostitución. Recorría estas áreas con su vehículo y observaba a las mujeres hasta encontrar una oportunidad para acercarse a ellas. Se presentaba como un cliente, aparentando normalidad y evitando comportamientos que pudieran generar desconfianza.",
      "Para conseguir que las mujeres aceptaran acompañarlo, desarrolló diferentes estrategias de manipulación. En ocasiones les ofrecía convertirse en clientes habituales, prestarles dinero, conseguirles trabajo o darles ayuda. También utilizaba fotografías de su hijo para transmitir una imagen de hombre familiar e inofensivo. Asi conseguía reducir las defensas de las víctimas y facilitar que subieran a su vehículo o acudir a su domicilio.",
      "Una vez conseguía aislarlas, las asesinaba mediante estrangulamiento, utilizando sus brazos o algún elemento. En muchos casos, el homicidio se producía después de mantener relaciones sexuales con ellas. Tras el asesinato, retiraba la ropa y las joyas de las mujeres, desnudarlas le permitía eliminar posibles pruebas que pudieran permanecer en sus prendas.",
      "Posteriormente trasladaba los cadáveres en su camioneta y los abandonaba en lugares apartados, normalmente durante la noche. En ocasiones cubría los cuerpos con vegetación, ramas u otros elementos para dificultar su localización."
    ],
    "signature": [
      "Uno de los elementos más relevantes es la relación de posesión y control que mantenía respecto a los cadáveres. Sentía que los cuerpos le pertenecían y que cuando eran descubiertos y retirados por la policía, experimentaba la sensación de que le estaban quitando algo que era suyo.",
      "Un elemento destacable es el comportamiento sexual posterior a los asesinatos. Ridgway reconoció haber mantenido relaciones sexuales con algunos cadáveres y explicó que determinadas posiciones en las que fueron encontrados respondían a estas conductas. Este comportamiento identifica una conducta sexual que iba más allá del acto homicida y que estaba relacionada con el dominio sobre las víctimas.",
      "También resulta significativo el tratamiento que daba a las pertenencias de las mujeres. Habitualmente retiraba sus joyas y, en algunos casos, las dejaba posteriormente en los baños femeninos de la fábrica Kenworth donde trabajaba. Según sus declaraciones, le producía satisfacción imaginar que otras mujeres pudieran llevar esos objetos sin conocer su procedencia."
    ],
    "victimology": [
      "El perfil de las víctimas de Gary Ridgway presenta un patrón definido. Seleccionaba mujeres jóvenes, muchas de ellas adolescentes, que ejercían la prostitución o se encontraban en situaciones de vulnerabilidad. La mayoría de las víctimas eran mujeres que trabajaban en la prostitución callejera y las elegía porque le resultaba más sencillo acercarse a ellas y consideraba que sus desapariciones podían pasar más desapercibidas.",
      "Entre ellas se encontraba Wendy Lee Coffield, que tenía 16 años cuando fue asesinada. También se documentaron víctimas de 17, 18 y 19 años. Aunque la mayoría eran jóvenes, el patrón no se limitaba exclusivamente a menores de edad. Respecto a la procedencia étnica, la mayoría de las víctimas identificadas eran mujeres blancas, aunque también asesinó a mujeres afroamericanas y asiáticas.",
      "Ridgway afirmó que no asesinaba hombres porque no obtenía satisfacción sexual de ello.",
      "El número de víctimas no quedó completamente resuelto con las condenas. A día de hoy, la página del condado de King continúa recogiendo casos de mujeres desaparecidas que podrían estar relacionados con la investigación, aunque no todos han sido atribuidos judicialmente a Ridgway"
    ],
    "av": [
      "La relación entre los distintos homicidios pudo establecerse mediante la repetición de patrones como víctimas con características similares, captación en zonas de prostitución, estrangulamiento y abandono de cadáveres en lugares aislados.",
      "También fue importante la concentración geográfica de los hallazgos en distintas zonas del condado y repetición de comportamientos posteriores a los asesinatos.",
      "Sin embargo, la prueba decisiva fue el ADN. Una muestra de saliva obtenida a Ridgway en 1984 pudo compararse años después con restos biológicos de una víctima, Wendy Lee Coffield. La coincidencia permitió vincularlo con el caso y condujo a su detención en 2001.",
      "Posteriormente, sus declaraciones y colaboración con los investigadores permitieron relacionarlo con otros asesinatos y localizar víctimas."
    ],
    "justice": [
      "Ridgway fue detenido el 30 de noviembre de 2001 al salir de su trabajo en la fábrica Kenworth. En 2003 colaboró con la investigación y se declaró culpable de 48 asesinatos agravados en primer grado, a cambio de evitar la pena de muerte.",
      "Fue condenado a 48 cadenas perpetuas consecutivas sin posibilidad de libertad condicional. En 2011 se declaró culpable de un asesinato adicional, el de Rebecca Marrero, por lo que el total de condenas por asesinato ascendió a 49.",
      "Actualmente continúa cumpliendo condena en prisión."
    ],
    "comparison": {
      "mo": "El modus operandi de Gary Ridgway se caracterizaba por la selección de mujeres vulnerables, el engaño para conseguir su confianza, el estrangulamiento y el abandono de los cadáveres en lugares aislados.",
      "victimology": "El perfil de las víctimas de Gary Ridgway presenta un patrón definido. Seleccionaba mujeres jóvenes, muchas de ellas adolescentes, que ejercían la prostitución o se encontraban en situaciones de vulnerabilidad. La mayoría de las víctimas eran mujeres que trabajaban en la prostitución callejera y las elegía porque le resultaba más sencillo acercarse a ellas y consideraba que sus desapariciones podían pasar más desapercibidas.",
      "profile": "Presentaba rasgos compatibles con la psicopatía, como falta de empatía, frialdad emocional, ausencia de remordimiento y objetualización de las víctimas. Pero no existe una puntuación PCL-R publicada que permita confirmar este diagnóstico. También destaca la separación entre su identidad pública y su comportamiento criminal, que puede analizarse con la teoría de la Identidad Fracturada estudiada en clase."
    }
  },
  "kemper": {
    "presentation": [
      "La infancia de Edmund Emil Kemper estuvo marcada por una relación muy conflictiva con su madre, Clarnell, a quien describía como dominante, crítica y emocionalmente distante. Durante su niñez manifestó comportamientos violentos, como matar y decapitar a la gata familiar y mutilar muñecas, además de desarrollar juegos relacionados con la muerte.",
      "El origen de estos comportamientos estuvo ligado al maltrato emocional y desprecios continuos por parte de su madre quien le inculcó que el sexo era pecado y, por temor a que violara a sus hermanas, lo obligaba a dormir en el sótano. Esta crianza generó en Kemper un profundo odio hacia la figura femenina y en especial hacia su madre. Tras vivir un tiempo en Los Ángeles con su padre fue enviado a vivir con sus abuelos paternos en una granja en North Fork.",
      "Estando en la granja, su abuela comenzó a maltratarlo emocionalmente de forma reiterada. Siendo tan solo un adolescente, Kemper tomó la decisión de asesinar a tiros a sus abuelos paternos, por lo que fue ingresado en un hospital psiquiátrico, donde recibió un diagnóstico de esquizofrenia paranoide. Durante su estancia mostró una conducta aparentemente ejemplar y colaboró con el personal, hasta que fue puesto en libertad a los 21 años.",
      "Destacaba por su elevada inteligencia, capacidad de manipulación y aparente tranquilidad al describir sus crímenes. También presentaba una profunda hostilidad hacia las mujeres, especialmente hacia su madre.",
      "Su caso puede relacionarse con la teoría de la identidad fracturada, al igual que pasa con muchos asesinos en serie, debido a sus experiencias familiares negativas y dificultades de socialización. Además, la teoría de la homología permite observar similitudes entre sus comportamientos violentos infantiles y las mutilaciones que posteriormente realizó con sus víctimas."
    ],
    "scene": [
      "Las escenas de sus crímenes presentaban signos de violencia y mutilación. Kemper solía asesinar a sus víctimas dentro de su vehículo y posteriormente trasladaba los cuerpos a su domicilio, donde realizaba actos de mutilación y comportamientos de carácter sexual.",
      "En algunos casos decapitaba a las víctimas, separaba distintas partes del cuerpo y las fotografiaba. Posteriormente ocultaba los restos mediante enterramientos o abandonándolos en vertederos y zonas aisladas, como ocurrió con algunas partes de los cuerpos de sus primeras víctimas.",
      "La escena del asesinato de su madre y de Sally Hallett también resulta significativa por la brutalidad de los hechos y por el significado personal que Kemper atribuía a la muerte de su progenitora.",
      "Entre 1970 y 1971 recogió a más de 150 autoestopistas para perfeccionar su técnica y ganarse su confianza (por ejemplo, usando su carnet universitario o fingiendo prisa como hombre de negocios). Utilizaba un coche descapotable de 3 puertas provisto de pistolas, navajas, mantas y bolsas. El vehículo tenía un truco en la manilla de seguridad, que al cerrar la puerta se bajaba un pestillo que impedía abrirla desde el interior.",
      "En ocasiones se hacía pasar por un hombre con intenciones suicidas para despertar la compasión de las jóvenes. El detonante fue que la mayoría de sus cacerías ocurrían inmediatamente después de tener discusiones violentas con su madre"
    ],
    "geography": [
      "Su actividad criminal se concentró principalmente en California, especialmente en el área de Santa Cruz y sus alrededores. Esta zona contaba con una importante presencia de estudiantes universitarias, lo que facilitaba la selección de mujeres jóvenes que se desplazaban haciendo autostop.",
      "Kemper recogía a sus víctimas en las proximidades de los campus universitarios y las trasladaba en su vehículo a otros lugares. Utilizaba tanto su domicilio como zonas apartadas para cometer los asesinatos y ocultar posteriormente los cadáveres.",
      "La elección de estas zonas estaba relacionada con su conocimiento del entorno y con la facilidad para encontrar posibles víctimas. Además, sus desplazamientos en coche le permitían recorrer diferentes áreas sin levantar sospechas."
    ],
    "mo": [
      "Kemper seleccionaba mujeres jóvenes, especialmente estudiantes universitarias que hacían autostop. Se acercaba a ellas con apariencia de normalidad y utilizaba diferentes engaños para conseguir que confiaran en él. En ocasiones fingía ser estudiante o un hombre de negocios, e incluso llegó a simular que tenía intenciones suicidas para despertar la compasión de las jóvenes.",
      "Conducía un vehículo que había acondicionado para dificultar que las pasajeras pudieran escapar. Una vez conseguía aislarlas, las asesinaba mediante estrangulamiento, aunque también utilizó armas blancas y de fuego.",
      "Después trasladaba los cadáveres a su domicilio, donde realizaba mutilaciones, decapitaciones y diferentes actos de carácter sexual. Finalmente, ocultaba los restos mediante enterramientos o abandonándolos en lugares apartados.",
      "Un aspecto especialmente relevante es que muchas de sus acciones homicidas se producían después de discusiones con su madre. Esto permite observar una posible relación entre sus conflictos familiares y la aparición de sus episodios violentos.",
      "El asesinato más importante para Kemper fue el de Clarnell (su madre), con su muerte ejecutó lo que consideraba su \"obra maestra\". La decapitó con un cuchillo afilado, violó la cabeza cortada, la colocó sobre una mesa y le gritó durante más de una hora lanzándole dardos. Le arrancó las cuerdas vocales, las trituró y se las comió. Los asesinatos de Kemper se caracterizaban por una brutal violencia."
    ],
    "signature": [
      "Uno de los elementos más característicos de Kemper era la mutilación y decapitación de sus víctimas. También realizaba comportamientos sexuales con los cadáveres y conservaba determinadas partes de los cuerpos.",
      "Estas conductas reflejan una necesidad de control y dominio sobre las víctimas, incluso después de su muerte. Además, la decapitación y mutilaciones presentan similitudes con algunos comportamientos violentos que ya había mostrado durante su infancia, como la mutilación de muñecas y la decapitación de animales.",
      "La violencia contra su madre también tuvo un significado especial, ya que él mismo llegó a describir su asesinato como su «obra maestra». Por tanto, su firma permite observar una combinación de violencia extrema, componentes sexuales y un simbolismo relacionado con sus conflictos personales."
    ],
    "victimology": [
      "Sus víctimas fueron principalmente mujeres jóvenes, muchas de ellas estudiantes universitarias que hacían autostop en los alrededores de Santa Cruz y otras zonas de California. Entre ellas se encontraban Mary Ann Pesce, Anita Luchessa, Aiko Koo y otras estudiantes universitarias.",
      "Pero, su actividad criminal también incluyó a personas de su entorno familiar. Durante la adolescencia asesinó a sus abuelos paternos y, en su etapa adulta, acabó con la vida de su madre, Clarnell, y de Sally Hallett, amiga de su madre.",
      "Se destaca la selección de mujeres jóvenes y la especial hostilidad hacia la figura femenina. Su relación conflictiva con su madre desempeñó un papel importante en sus motivaciones, aunque no permite explicar por sí sola todos sus asesinatos.",
      "La elección de estudiantes que hacían autostop también respondía a cuestiones de oportunidad y accesibilidad, ya que se encontraban en una situación en la que podían aceptar fácilmente la ayuda de un desconocido."
    ],
    "av": [
      "Los diferentes crímenes presentaban similitudes en cuanto al perfil de las víctimas, el procedimiento de captación y las conductas posteriores a los asesinatos. Kemper seleccionaba principalmente mujeres jóvenes, las recogía haciendo autostop y utilizaba su vehículo para aislarlas. Esta repetición en la elección de víctimas y en la forma de aproximarse a ellas constituye un elemento importante para relacionar los distintos homicidios.",
      "También se repetían los estrangulamientos, las mutilaciones, las decapitaciones y los comportamientos sexuales con cadáveres. Aunque existían diferencias en la ejecución concreta de cada asesinato, estos patrones conductuales permitían identificar características comunes entre los hechos.",
      "La teoría de la homología permite relacionar sus comportamientos infantiles, como la decapitación de animales y la mutilación de muñecas, con las prácticas que realizó con sus víctimas. Esto permite observar una continuidad en determinadas expresiones de violencia a lo largo de su desarrollo."
    ],
    "justice": [
      "Tras matar a su madre y a su amiga en su propia casa. Dejó una nota confesando los hechos y huyó en coche hacia Colorado llevando el cadáver de Sally en el maletero. Llamó por teléfono a la policía para confesar sus crímenes. Al ser atrapado, renunció a tener abogados y confesó cada asesinato, su modus operandi, las torturas ejercidas y la ubicación exacta de los restos enterrados.",
      "En cuanto a su condena y el tiempo que permaneció en prisión: En 1973, en California, Edmund Kemper fue condenado a cadena perpetua sin posibilidad de libertad condicional."
    ],
    "comparison": {
      "mo": "Kemper seleccionaba mujeres jóvenes, especialmente estudiantes universitarias que hacían autostop. Se acercaba a ellas con apariencia de normalidad y utilizaba diferentes engaños para conseguir que confiaran en él. En ocasiones fingía ser estudiante o un hombre de negocios, e incluso llegó a simular que tenía intenciones suicidas para despertar la compasión de las jóvenes.",
      "victimology": "Sus víctimas fueron principalmente mujeres jóvenes, muchas de ellas estudiantes universitarias que hacían autostop en los alrededores de Santa Cruz y otras zonas de California. Entre ellas se encontraban Mary Ann Pesce, Anita Luchessa, Aiko Koo y otras estudiantes universitarias.",
      "profile": "Destacaba por su elevada inteligencia, capacidad de manipulación y aparente tranquilidad al describir sus crímenes. También presentaba una profunda hostilidad hacia las mujeres, especialmente hacia su madre."
    }
  },
  "dahmer": {
    "presentation": [
      "Durante la infancia de Jeffrey Dahmer mostró un interés particular por los animales, especialmente por su disección y por el estudio de sus órganos internos, una afición que se desarrolló por la influencia y oficio de su padre. La separación de sus madre y su padre tuvo un impacto importante en su vida, y durante la adolescencia mostró un mayor aislamiento social, dificultades para relacionarse y problemas con el consumo de alcohol. También reconoció su atracción hacia los hombres, aunque no se observaron conductas violentas dirigidas hacia otras personas.",
      "Su vida adulta estuvo marcada por la inestabilidad personal, el consumo abusivo de alcohol y las dificultades para establecer relaciones afectivas. A pesar de ello, podía mantener una apariencia relativamente normal, trabajar y relacionarse socialmente, mientras ocultaba sus fantasías y comportamientos criminales. En el ámbito psicológico se le identificaron diferentes alteraciones, entre ellas trastornos de personalidad y parafilias. Pero es más preciso hablar de rasgos y alteraciones en las evaluaciones psiquiátricas que calificarlo directamente como psicópata."
    ],
    "scene": [
      "Las escenas del crimen se concentraban principalmente en los domicilios donde Dahmer vivió, en su apartamento de los Oxford Apartments, en Milwaukee. Este lugar se convirtió en el principal escenario de su actividad criminal durante los últimos años, ya que ahí asesinaba a sus víctimas y realizaba posteriormente las mutilaciones y la conservación de los restos.",
      "La escena presentaba una acumulación de elementos relacionados con la manipulación de los cadáveres como herramientas para desmembrar, productos químicos, recipientes para conservar restos humanos y fotografías de las víctimas en diferentes fases del proceso. Se encontraron cráneos, partes corporales y restos almacenados en frigoríficos, congeladores y otros recipientes. En algunos casos, Dahmer trasladaba o eliminaba los restos fuera de su vivienda, utilizando métodos para dificultar su identificación y la investigación policial."
    ],
    "geography": [
      "La actividad criminal se desarrolló principalmente en el estado de Wisconsin. Su primer asesinato tuvo lugar en 1978 en, Ohio, donde vivía con sus padres. Tras varios años sin cometer homicidios conocidos, retomó su actividad criminal en 1987 y la desarrolló en Milwaukee.",
      "En esta ciudad, los lugares de contacto con las víctimas eran bares y zonas de ocio frecuentadas por hombres homosexuales. Luego, Dahmer trasladaba a las víctimas a su domicilio, que funcionaba como principal espacio de ejecución y manipulación de los cuerpos. El apartamento de los Oxford Apartments tuvo relevancia porque allí se produjeron muchos asesinatos y se concentró una gran cantidad de pruebas.",
      "Se destaca la proximidad entre los espacios de captación y su residencia y el aprovechamiento de lugares privados y conocidos para cometer los delitos. Su patrón no se caracterizaba tanto por desplazarse a zonas aisladas para abandonar los cuerpos como por utilizar su propia vivienda como centro de su actividad criminal."
    ],
    "mo": [
      "El modus operandi fue evolucionando y adquiriendo mayor organización con el tiempo. Seleccionaba hombres jóvenes que respondían a sus preferencias físicas y sexuales. El contacto se producía habitualmente en bares, establecimientos de ocio o mediante encuentros casuales, aunque también recurrió a recoger autoestopistas. Para conseguir que las víctimas lo acompañaran, les ofrecía dinero, alcohol o drogas, y a veces les proponía posar para fotografías.",
      "Una vez en un espacio privado, su domicilio, Dahmer utilizaba sustancias para incapacitar a las víctimas y luego las estrangulaba. Después mantenía comportamientos sexuales con los cadáveres, los desmembraba y trataba de eliminar los restos mediante diferentes procedimientos. En algunos casos empleó productos químicos para disolver tejidos y conservar determinadas partes corporales. También fotografiaba distintas fases del proceso, lo que le permitía conservar un registro de sus crímenes.",
      "Aunque el primer asesinato, el de Steven Hicks, tuvo un desarrollo menos planificado, los siguientes muestran mayor repetición de los procedimientos de captación, estrangulamiento y manipulación de los cuerpos."
    ],
    "signature": [
      "La firma criminal de Dahmer se caracteriza por unos comportamientos posteriores a la muerte que no eran necesarios para consumar el homicidio ni para evitar su identificación. Entre ellos estaban las prácticas sexuales con los cadáveres, el desmembramiento, la conservación de cráneos y otras partes corporales, la realización de fotografías y el canibalismo en determinados casos.",
      "Esto permite observar una necesidad de mantener el control sobre las víctimas incluso después de su muerte. La conservación de restos y fotografías funcionaba como una forma de mantener una conexión con ellas y prolongar las fantasías que habían motivado sus actos. La necrofilia y el canibalismo son elementos relevantes para comprender la dimensión sexual y simbólica de su comportamiento.",
      "Aquí encontramos la llamada teoría de la «Entidad», estudiada en clase, que aparece en algunas interpretaciones de su caso. Esta plantea que Dahmer percibía deseos y fantasías como una fuerza interna que poco a poco tenía mayor intensidad. No debe entenderse como una segunda personalidad ni como un diagnóstico, sino como una forma de interpretar cómo sus fantasías fueron ganando presencia hasta dominar su comportamiento.",
      "Más allá de la atracción sexual, manifestaba un deseo de compañía y una necesidad de controlar por completo a sus víctimas. Sus fantasías estaban relacionadas con la posibilidad de mantener a otra persona en un estado de pasividad permanente, evitando que pudiera rechazarlo o abandonarlo. Por ello, el asesinato y las conductas posteriores respondían tanto a motivaciones sexuales como a una búsqueda extrema de dominio."
    ],
    "victimology": [
      "Las víctimas fueron hombres jóvenes, con edades entre la adolescencia y la edad adulta. La mayoría eran hombres afroamericanos, aunque también hubo víctimas de origen latino, asiático y blanco. Esta selección estaba relacionada con sus preferencias sexuales y con un patrón físico que buscaba en los hombres con los que contactaba.",
      "Entre las víctimas había personas que conocía en bares, espacios de ocio o mediante encuentros casuales. Algunas eran vulnerables por sus circunstancias personales y sociales, lo que facilitaba que aceptaran sus propuestas de dinero, fotografías o compañía. También había menores de edad, como Konerak Sinthasomphone, de 14 años."
    ],
    "av": [
      "La vinculación de los homicidios se apoyó en las similitudes en la selección de las víctimas, los métodos de captación y conductas posteriores a los asesinatos. Dahmer elegía hombres jóvenes que respondían a sus preferencias físicas, establecía contacto con ellos y los trasladaba a espacios privados.",
      "Se repetían determinados procedimientos, como la incapacitación con sustancias, estrangulamiento y la manipulación de los cadáveres. La conservación de restos corporales y la realización de fotografías eran otros elementos comunes que permitían identificar un patrón. Aunque existían diferencias entre los casos, estas coincidencias eran importantes para relacionar los distintos hechos.",
      "El análisis de las pruebas físicas, las fotografías, los restos humanos y los testimonios permitió identificar a las víctimas y relacionar los distintos homicidios. El FBI también prestó apoyo mediante análisis de ADN, estudios químicos y biológicos y otras técnicas forenses.",
      "La teoría de la Identidad Fracturada permite interpretar la contradicción que hay entre la imagen cotidiana que Dahmer dejaba ver y la actividad criminal que mantenía oculta. Esta perspectiva ayuda a comprender cómo podía conservar una apariencia social funcional mientras desarrollaba una conducta violenta y destructiva."
    ],
    "justice": [
      "La investigación dio un giro en julio de 1991, cuando Tracy Edwards consiguió escapar del apartamento de Dahmer y alertó a la policía. Los agentes encontraron pruebas materiales que permitieron descubrir restos humanos y reconstruir parte de la actividad criminal. Dahmer colaboró posteriormente con los investigadores y confesó haber asesinado a 17 hombres.",
      "El jurado lo consideró responsable de sus actos y determinó que era legalmente cuerdo en el momento de cometer los asesinatos. En febrero de 1992 fue condenado por 15 homicidios cometidos en Wisconsin a 15 cadenas perpetuas consecutivas. Posteriormente, en mayo de ese mismo año, recibió una decimosexta cadena perpetua por el asesinato de Steven Hicks.Dahmer no llegó a cumplir íntegramente su condena.",
      "En 1994, mientras se encontraba en prisión fue atacado por otro interno quien lo golpeó mortalmente con una barra metálica. Falleció a los 34 años."
    ],
    "comparison": {
      "mo": "El modus operandi fue evolucionando y adquiriendo mayor organización con el tiempo. Seleccionaba hombres jóvenes que respondían a sus preferencias físicas y sexuales. El contacto se producía habitualmente en bares, establecimientos de ocio o mediante encuentros casuales, aunque también recurrió a recoger autoestopistas. Para conseguir que las víctimas lo acompañaran, les ofrecía dinero, alcohol o drogas, y a veces les proponía posar para fotografías.",
      "victimology": "Las víctimas fueron hombres jóvenes, con edades entre la adolescencia y la edad adulta. La mayoría eran hombres afroamericanos, aunque también hubo víctimas de origen latino, asiático y blanco. Esta selección estaba relacionada con sus preferencias sexuales y con un patrón físico que buscaba en los hombres con los que contactaba.",
      "profile": "Su vida adulta estuvo marcada por la inestabilidad personal, el consumo abusivo de alcohol y las dificultades para establecer relaciones afectivas. A pesar de ello, podía mantener una apariencia relativamente normal, trabajar y relacionarse socialmente, mientras ocultaba sus fantasías y comportamientos criminales. En el ámbito psicológico se le identificaron diferentes alteraciones, entre ellas trastornos de personalidad y parafilias. Pero es más preciso hablar de rasgos y alteraciones en las evaluaciones psiquiátricas que calificarlo directamente como psicópata."
    }
  }
};

const concepts = [
  [
    "Modus operandi",
    "Procedimientos que utiliza el autor para acceder a la víctima, ejecutar el delito y reducir el riesgo de identificación. Su función es instrumental y puede cambiar con la experiencia.",
    "El modus operandi de Gary Ridgway se caracterizaba por la selección de mujeres vulnerables, el engaño para conseguir su confianza, el estrangulamiento y el abandono de los cadáveres en lugares aislados.",
    "modus-operandi"
  ],
  [
    "Firma criminal",
    "Conductas que expresan necesidades o fantasías del autor y van más allá de lo necesario para cometer el delito. Se estudia su función psicológica y su consistencia entre hechos.",
    "La firma criminal de Berkowitz se caracterizaba por la construcción de una identidad demoníaca y por la necesidad de provocar, intimidar y obtener notoriedad.",
    "firma-criminal"
  ],
  [
    "Victimología",
    "Estudio de la víctima, sus relaciones, circunstancias y proceso de selección por el agresor. Analiza la vulnerabilidad y las oportunidades de acceso sin atribuir responsabilidad a la víctima.",
    "Se caracteriza por una selección de víctimas muy amplia, aunque con un patrón recurrente, eran familias completas que se encontraban en sus viviendas, incluidos adultos y menores.",
    "victimologia"
  ],
  [
    "Escena del crimen",
    "Espacio relacionado con la preparación, ejecución o consecuencias del delito. El lugar de la agresión y el lugar donde aparece el cuerpo pueden ser distintos.",
    "Las escenas relacionadas con los crímenes de Ridgway presentaban dos espacios: los lugares donde se producían los asesinatos y aquellos en los que abandonaba los cadáveres.",
    "escena-del-crimen"
  ],
  [
    "Perfil geográfico",
    "Análisis de la distribución espacial de los hechos y de los desplazamientos del autor. Permite plantear áreas de actividad y posibles puntos de anclaje; no localiza con certeza una vivienda.",
    "Su actividad criminal se concentró principalmente en California, especialmente en el área de Santa Cruz y sus alrededores. ",
    "perfil-geografico"
  ],
  [
    "AV · Análisis de vinculación",
    "Evaluación de la posible autoría común de distintos hechos. Contrasta similitudes, diferencias, contexto espacial y temporal y evidencia forense; una coincidencia aislada no basta.",
    "La vinculación de los homicidios se apoyó en las similitudes en la selección de las víctimas, los métodos de captación y conductas posteriores a los asesinatos. ",
    "analisis-de-vinculacion"
  ],
  [
    "Perfil criminológico",
    "Conjunto de hipótesis sobre las características y rutinas de un posible autor, elaborado a partir de la evidencia. Orienta la investigación y se revisa con nuevos datos; no identifica por sí solo a una persona.",
    "Destacaba por su elevada inteligencia, capacidad de manipulación y aparente tranquilidad al describir sus crímenes. ",
    "perfil-criminologico"
  ],
  [
    "Rasgos psicopáticos",
    "Características como manipulación, frialdad emocional, falta de empatía o ausencia de remordimiento. La descripción de algunos rasgos no equivale a una evaluación clínica completa ni permite asignar una puntuación PCL-R.",
    "Presentaba rasgos compatibles con la psicopatía, como falta de empatía, frialdad emocional, ausencia de remordimiento y objetualización de las víctimas. ",
    "rasgos-psicopaticos"
  ],
  [
    "Identidad fracturada",
    "Marco de interpretación de la coexistencia de una imagen social aparentemente funcional y una actividad criminal oculta. No equivale a una segunda personalidad ni a un trastorno de identidad disociativo.",
    "La teoría de la Identidad Fracturada permite interpretar la contradicción que hay entre la imagen cotidiana que Dahmer dejaba ver y la actividad criminal que mantenía oculta. ",
    "identidad-fracturada"
  ],
  [
    "Homología",
    "En el material de estudio, se emplea para relacionar las semejanzas entre comportamientos violentos infantiles y conductas posteriores del autor. Permite examinar la continuidad de determinadas expresiones de violencia.",
    "La teoría de la homología permite relacionar sus comportamientos infantiles, como la decapitación de animales y la mutilación de muñecas, con las prácticas que realizó con sus víctimas. ",
    "homologia"
  ]
];
