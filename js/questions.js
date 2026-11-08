/* 25 preguntas de los casos y 5 sobre conceptos. Tres opciones por pregunta. */
const questions = [
  {
    "id": "berkowitz-1",
    "caseId": "berkowitz",
    "section": "scene",
    "text": "¿Dónde se producían habitualmente los ataques de Berkowitz?",
    "options": [
      "Domicilios particulares",
      "El interior, o cerca, de vehículos",
      "Los Oxford Apartments"
    ],
    "correct": 1,
    "explanation": "Sus escenas del crimen presentan un patrón definido. Sus ataques se producían durante la noche y tenían como escenario el interior, o cerca, de vehículos en los que se encontraban parejas jóvenes."
  },
  {
    "id": "berkowitz-2",
    "caseId": "berkowitz",
    "section": "geography",
    "text": "¿En qué ciudad se desarrolló la actividad criminal de Berkowitz?",
    "options": [
      "Milwaukee",
      "Santa Cruz",
      "Nueva York"
    ],
    "correct": 2,
    "explanation": "Su actividad criminal se desarrolló en Nueva York, donde realizó sus ataques entre 1976 y 1977. Su comportamiento demuestra una movilidad urbana asociada al uso de su coche, que utilizaba para desplazarse por diferentes zonas mientras buscaba posibles víctimas."
  },
  {
    "id": "berkowitz-3",
    "caseId": "berkowitz",
    "section": "mo",
    "text": "¿Qué acción recoge el modus operandi de Berkowitz?",
    "options": [
      "Dispararles a corta distancia utilizando un arma de fuego",
      "Utilizaba sustancias para incapacitar a las víctimas",
      "Robaba objetos de valor"
    ],
    "correct": 0,
    "explanation": "El modus operandi (MO) consistía en localizar parejas jóvenes mientras circulaba en su coche, se aproximaba a ellas y dispararles a corta distancia utilizando un arma de fuego. Esto caracterizado también por una ausencia de contacto físico, ya que no necesitaba mantener una interacción prolongada con las víctimas para ejecutar los ataques."
  },
  {
    "id": "berkowitz-4",
    "caseId": "berkowitz",
    "section": "signature",
    "text": "¿Qué elemento destaca en la firma de Berkowitz?",
    "options": [
      "Conservación de cráneos",
      "Construcción de una identidad demoníaca",
      "Mutilación y decapitación"
    ],
    "correct": 1,
    "explanation": "La firma criminal de Berkowitz se caracterizaba por la construcción de una identidad demoníaca y por la necesidad de provocar, intimidar y obtener notoriedad."
  },
  {
    "id": "berkowitz-5",
    "caseId": "berkowitz",
    "section": "victimology",
    "text": "¿Qué víctimas seleccionaba principalmente Berkowitz?",
    "options": [
      "Familias completas",
      "Hombres jóvenes",
      "Mujeres jóvenes y parejas jóvenes"
    ],
    "correct": 2,
    "explanation": "Las víctimas de Berkowitz eran principalmente mujeres jóvenes y parejas jóvenes. La selección de estas víctimas refleja el componente misógino y obsesivo, ya que existía un odio hacia las mujeres, que constituían el principal foco de sus ataques."
  },
  {
    "id": "onoprienko-1",
    "caseId": "onoprienko",
    "section": "scene",
    "text": "¿Cuál era el escenario más habitual de Onoprienko?",
    "options": [
      "Domicilios particulares",
      "Los Oxford Apartments",
      "El interior, o cerca, de vehículos"
    ],
    "correct": 0,
    "explanation": "Su escenario de actuación más habitual eran los domicilios particulares. Una vez dentro de las viviendas, atacaba a todos los ocupantes, sin limitarse a una víctima concreta, esto incluía tanto a los adultos como a los menores. En cuanto a las armas usadas, podía llegar a utilizar todo tipo, desde armas de fuego hasta cuchillos, hachas y martillos."
  },
  {
    "id": "onoprienko-2",
    "caseId": "onoprienko",
    "section": "mo",
    "text": "¿Qué conjunto de armas figura en el modus operandi de Onoprienko?",
    "options": [
      "Sustancias para incapacitar a las víctimas",
      "Armas de fuego, cuchillos, hachas y martillos",
      "Productos químicos"
    ],
    "correct": 1,
    "explanation": "El modus operandi se caracterizaba por una gran brutalidad y por la utilización de diferentes armas para ejecutar sus asesinatos. Entre las armas que utilizaba se encontraban armas de fuego, cuchillos, hachas y martillos. Según sus propias declaraciones, mostraba interés por experimentar con diferentes métodos de ataque, aunque no manifestaba interés por mantener relaciones sexuales con sus víctimas."
  },
  {
    "id": "onoprienko-3",
    "caseId": "onoprienko",
    "section": "signature",
    "text": "¿Qué refleja la percepción del asesinato como una actividad de caza en Onoprienko?",
    "options": [
      "La construcción de una identidad demoníaca",
      "Una importante deshumanización de las víctimas",
      "La conservación de cráneos"
    ],
    "correct": 1,
    "explanation": "Algunos comportamientos que permiten aproximarse a su posible componente psicológico encontramos principalmente la percepción de los asesinatos como una actividad de caza. Esta expresión refleja una importante deshumanización de las víctimas, que pasaban a ser consideradas objetivos sobre los que ejercer violencia."
  },
  {
    "id": "onoprienko-4",
    "caseId": "onoprienko",
    "section": "victimology",
    "text": "¿Qué patrón recurrente aparece en la victimología de Onoprienko?",
    "options": [
      "Familias completas que se encontraban en sus viviendas",
      "Mujeres jóvenes y parejas jóvenes",
      "Estudiantes universitarias que hacían autostop"
    ],
    "correct": 0,
    "explanation": "Se caracteriza por una selección de víctimas muy amplia, aunque con un patrón recurrente, eran familias completas que se encontraban en sus viviendas, incluidos adultos y menores."
  },
  {
    "id": "onoprienko-5",
    "caseId": "onoprienko",
    "section": "scene",
    "text": "¿Qué función cumplía el incendio de las viviendas en los crímenes de Onoprienko?",
    "options": [
      "Conservar un registro de sus crímenes",
      "Destruir posibles evidencias",
      "Obtener notoriedad mediante cartas"
    ],
    "correct": 1,
    "explanation": "Luego de cometer el crimen, robaba objetos de valor y, en determinados asesinatos, incendiaba las viviendas para destruir posibles evidencias."
  },
  {
    "id": "ridgway-1",
    "caseId": "ridgway",
    "section": "geography",
    "text": "¿En qué condado se concentró la actividad de Ridgway?",
    "options": [
      "Santa Cruz",
      "Nueva York",
      "Condado de King"
    ],
    "correct": 2,
    "explanation": "La actividad criminal de Ridgway se concentró en el estado de Washington, en el condado de King. La distribución de los lugares donde recogía a las víctimas y abandonaba sus cadáveres permite identificar una relación entre su movilidad cotidiana, sus zonas de trabajo y los espacios para cometer los delitos."
  },
  {
    "id": "ridgway-2",
    "caseId": "ridgway",
    "section": "mo",
    "text": "¿Qué utilizaba Ridgway para transmitir una imagen de hombre familiar e inofensivo?",
    "options": [
      "Fotografías de su hijo",
      "Carnet universitario",
      "Posar para fotografías"
    ],
    "correct": 0,
    "explanation": "Para conseguir que las mujeres aceptaran acompañarlo, desarrolló diferentes estrategias de manipulación. En ocasiones les ofrecía convertirse en clientes habituales, prestarles dinero, conseguirles trabajo o darles ayuda. También utilizaba fotografías de su hijo para transmitir una imagen de hombre familiar e inofensivo. Asi conseguía reducir las defensas de las víctimas y facilitar que subieran a su vehículo o acudir a su domicilio."
  },
  {
    "id": "ridgway-3",
    "caseId": "ridgway",
    "section": "signature",
    "text": "¿Dónde dejaba Ridgway algunas joyas de las víctimas?",
    "options": [
      "Oxford Apartments",
      "Baños femeninos de la fábrica Kenworth",
      "Sullivan Correctional Facility"
    ],
    "correct": 1,
    "explanation": "También resulta significativo el tratamiento que daba a las pertenencias de las mujeres. Habitualmente retiraba sus joyas y, en algunos casos, las dejaba posteriormente en los baños femeninos de la fábrica Kenworth donde trabajaba. Según sus declaraciones, le producía satisfacción imaginar que otras mujeres pudieran llevar esos objetos sin conocer su procedencia."
  },
  {
    "id": "ridgway-4",
    "caseId": "ridgway",
    "section": "victimology",
    "text": "¿Qué perfil destaca en las víctimas de Ridgway?",
    "options": [
      "Mujeres jóvenes y parejas jóvenes",
      "Hombres jóvenes",
      "Mujeres jóvenes, muchas de ellas adolescentes"
    ],
    "correct": 2,
    "explanation": "El perfil de las víctimas de Gary Ridgway presenta un patrón definido. Seleccionaba mujeres jóvenes, muchas de ellas adolescentes, que ejercían la prostitución o se encontraban en situaciones de vulnerabilidad. La mayoría de las víctimas eran mujeres que trabajaban en la prostitución callejera y las elegía porque le resultaba más sencillo acercarse a ellas y consideraba que sus desapariciones podían pasar más desapercibidas."
  },
  {
    "id": "ridgway-5",
    "caseId": "ridgway",
    "section": "av",
    "text": "¿Qué ayudó a localizar otras víctimas de Ridgway?",
    "options": [
      "Sus declaraciones y colaboración con los investigadores",
      "Las cartas que enviaba a la prensa",
      "La existencia de una única escena común a todos los homicidios"
    ],
    "correct": 0,
    "explanation": "Posteriormente, sus declaraciones y colaboración con los investigadores permitieron relacionarlo con otros asesinatos y localizar víctimas."
  },
  {
    "id": "kemper-1",
    "caseId": "kemper",
    "section": "geography",
    "text": "¿Qué área destaca en el perfil geográfico de Kemper?",
    "options": [
      "Milwaukee",
      "Santa Cruz",
      "Nueva York"
    ],
    "correct": 1,
    "explanation": "Su actividad criminal se concentró principalmente en California, especialmente en el área de Santa Cruz y sus alrededores. Esta zona contaba con una importante presencia de estudiantes universitarias, lo que facilitaba la selección de mujeres jóvenes que se desplazaban haciendo autostop."
  },
  {
    "id": "kemper-2",
    "caseId": "kemper",
    "section": "mo",
    "text": "¿Para qué había acondicionado Kemper su vehículo?",
    "options": [
      "Destruir posibles evidencias",
      "Conservar restos humanos",
      "Dificultar que las pasajeras pudieran escapar"
    ],
    "correct": 2,
    "explanation": "Conducía un vehículo que había acondicionado para dificultar que las pasajeras pudieran escapar. Una vez conseguía aislarlas, las asesinaba mediante estrangulamiento, aunque también utilizó armas blancas y de fuego."
  },
  {
    "id": "kemper-3",
    "caseId": "kemper",
    "section": "signature",
    "text": "¿Qué conductas destacan en la firma de Kemper?",
    "options": [
      "Mutilación y decapitación",
      "Construcción de una identidad demoníaca",
      "Incendiaba las viviendas"
    ],
    "correct": 0,
    "explanation": "Uno de los elementos más característicos de Kemper era la mutilación y decapitación de sus víctimas. También realizaba comportamientos sexuales con los cadáveres y conservaba determinadas partes de los cuerpos."
  },
  {
    "id": "kemper-4",
    "caseId": "kemper",
    "section": "victimology",
    "text": "¿Qué grupo destaca entre las víctimas de Kemper?",
    "options": [
      "Familias completas",
      "Estudiantes universitarias que hacían autostop",
      "Mujeres jóvenes y parejas jóvenes"
    ],
    "correct": 1,
    "explanation": "Sus víctimas fueron principalmente mujeres jóvenes, muchas de ellas estudiantes universitarias que hacían autostop en los alrededores de Santa Cruz y otras zonas de California. Entre ellas se encontraban Mary Ann Pesce, Anita Luchessa, Aiko Koo y otras estudiantes universitarias."
  },
  {
    "id": "kemper-5",
    "caseId": "kemper",
    "section": "av",
    "text": "¿Qué comportamientos posteriores al homicidio se repetían en los casos de Kemper?",
    "options": [
      "Envío de cartas a la prensa y a la policía",
      "Incendio de viviendas para destruir pruebas",
      "Mutilaciones, decapitaciones y actos sexuales con cadáveres"
    ],
    "correct": 2,
    "explanation": "También se repetían los estrangulamientos, las mutilaciones, las decapitaciones y los comportamientos sexuales con cadáveres. Aunque existían diferencias en la ejecución concreta de cada asesinato, estos patrones conductuales permitían identificar características comunes entre los hechos."
  },
  {
    "id": "dahmer-1",
    "caseId": "dahmer",
    "section": "scene",
    "text": "¿Qué conjunto de hallazgos caracterizaba las escenas de Dahmer?",
    "options": [
      "Restos humanos, fotografías y productos químicos",
      "Cartas a la prensa junto a vehículos atacados",
      "Viviendas incendiadas tras el robo de objetos"
    ],
    "correct": 0,
    "explanation": "La escena presentaba una acumulación de elementos relacionados con la manipulación de los cadáveres como herramientas para desmembrar, productos químicos, recipientes para conservar restos humanos y fotografías de las víctimas en diferentes fases del proceso. Se encontraron cráneos, partes corporales y restos almacenados en frigoríficos, congeladores y otros recipientes. En algunos casos, Dahmer trasladaba o eliminaba los restos fuera de su vivienda, utilizando métodos para dificultar su identificación y la investigación policial."
  },
  {
    "id": "dahmer-2",
    "caseId": "dahmer",
    "section": "mo",
    "text": "¿Qué ofrecía Dahmer para que las víctimas lo acompañaran?",
    "options": [
      "Fotografías de su hijo",
      "Dinero, alcohol o drogas",
      "Carnet universitario"
    ],
    "correct": 1,
    "explanation": "El modus operandi fue evolucionando y adquiriendo mayor organización con el tiempo. Seleccionaba hombres jóvenes que respondían a sus preferencias físicas y sexuales. El contacto se producía habitualmente en bares, establecimientos de ocio o mediante encuentros casuales, aunque también recurrió a recoger autoestopistas. Para conseguir que las víctimas lo acompañaran, les ofrecía dinero, alcohol o drogas, y a veces les proponía posar para fotografías."
  },
  {
    "id": "dahmer-3",
    "caseId": "dahmer",
    "section": "signature",
    "text": "¿Qué conducta figura en la firma de Dahmer?",
    "options": [
      "Construcción de una identidad demoníaca",
      "Incendio de las viviendas",
      "Conservación de cráneos y otras partes corporales"
    ],
    "correct": 2,
    "explanation": "La firma criminal de Dahmer se caracteriza por unos comportamientos posteriores a la muerte que no eran necesarios para consumar el homicidio ni para evitar su identificación. Entre ellos estaban las prácticas sexuales con los cadáveres, el desmembramiento, la conservación de cráneos y otras partes corporales, la realización de fotografías y el canibalismo en determinados casos."
  },
  {
    "id": "dahmer-4",
    "caseId": "dahmer",
    "section": "victimology",
    "text": "¿Qué patrón predominaba en la selección de víctimas de Dahmer?",
    "options": [
      "Hombres jóvenes que respondían a sus preferencias físicas y sexuales",
      "Familias completas atacadas en sus viviendas",
      "Mujeres jóvenes que hacían autostop"
    ],
    "correct": 0,
    "explanation": "Las víctimas fueron hombres jóvenes, con edades entre la adolescencia y la edad adulta. La mayoría eran hombres afroamericanos, aunque también hubo víctimas de origen latino, asiático y blanco. Esta selección estaba relacionada con sus preferencias sexuales y con un patrón físico que buscaba en los hombres con los que contactaba."
  },
  {
    "id": "dahmer-5",
    "caseId": "dahmer",
    "section": "av",
    "text": "¿Qué contradicción permite analizar la teoría de la identidad fracturada en Dahmer?",
    "options": [
      "La separación entre sus homicidios y los de otros autores",
      "El contraste entre su apariencia cotidiana y la actividad criminal oculta",
      "La existencia de dos personalidades independientes"
    ],
    "correct": 1,
    "explanation": "La teoría de la Identidad Fracturada permite interpretar la contradicción que hay entre la imagen cotidiana que Dahmer dejaba ver y la actividad criminal que mantenía oculta. Esta perspectiva ayuda a comprender cómo podía conservar una apariencia social funcional mientras desarrollaba una conducta violenta y destructiva."
  },
  {
    "id": "concept-1",
    "conceptId": "modus-operandi",
    "text": "¿Qué describe el modus operandi?",
    "options": [
      "Las necesidades expresivas que exceden la ejecución del delito.",
      "Los procedimientos para acceder a la víctima, cometer el delito y reducir la identificación.",
      "La distribución espacial de los hechos."
    ],
    "correct": 1,
    "caseId": "concepts",
    "explanation": "Procedimientos que utiliza el autor para acceder a la víctima, ejecutar el delito y reducir el riesgo de identificación. Su función es instrumental y puede cambiar con la experiencia."
  },
  {
    "id": "concept-2",
    "conceptId": "firma-criminal",
    "text": "¿Qué caracteriza a la firma criminal?",
    "options": [
      "Su función expresiva o de satisfacción psicológica, más allá de ejecutar el delito.",
      "El lugar exacto donde vive el autor.",
      "El número de condenas impuestas."
    ],
    "correct": 0,
    "caseId": "concepts",
    "explanation": "Conductas que expresan necesidades o fantasías del autor y van más allá de lo necesario para cometer el delito. Se estudia su función psicológica y su consistencia entre hechos."
  },
  {
    "id": "concept-3",
    "conceptId": "analisis-de-vinculacion",
    "text": "¿Qué exige el análisis de vinculación?",
    "options": [
      "Relacionar todos los hechos que ocurren en una misma ciudad.",
      "Comparar únicamente el método de muerte.",
      "Contrastar similitudes y diferencias junto con el contexto y la evidencia forense."
    ],
    "correct": 2,
    "caseId": "concepts",
    "explanation": "Evaluación de la posible autoría común de distintos hechos. Contrasta similitudes, diferencias, contexto espacial y temporal y evidencia forense."
  },
  {
    "id": "concept-4",
    "conceptId": "perfil-geografico",
    "text": "¿Qué puede aportar un perfil geográfico?",
    "options": [
      "La identificación segura del autor.",
      "Áreas de actividad y posibles puntos de anclaje.",
      "Una evaluación clínica de la personalidad."
    ],
    "correct": 1,
    "caseId": "concepts",
    "explanation": "Análisis de la distribución espacial de los hechos y de los desplazamientos del autor. Permite plantear áreas de actividad y posibles puntos de anclaje."
  },
  {
    "id": "concept-5",
    "conceptId": "victimologia",
    "text": "¿Qué estudia la victimología?",
    "options": [
      "La víctima, sus relaciones, circunstancias y proceso de selección por el agresor.",
      "Exclusivamente las condenas del autor.",
      "Solo el lugar donde se encuentran los restos."
    ],
    "correct": 0,
    "caseId": "concepts",
    "explanation": "Estudio de la víctima, sus relaciones, circunstancias y proceso de selección por el agresor. Analiza la vulnerabilidad y las oportunidades de acceso sin atribuir responsabilidad a la víctima."
  }
];
