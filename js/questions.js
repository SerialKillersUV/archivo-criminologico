/* 25 preguntas basadas exclusivamente en el documento. Explicaciones literales. */
const questions = [
  {
    "id": "berkowitz-1",
    "caseId": "berkowitz",
    "section": "scene",
    "text": "¿Qué escenario describe el documento para los ataques de Berkowitz?",
    "options": [
      "domicilios particulares",
      "el interior, o cerca, de vehículos",
      "los Oxford Apartments"
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
      "dispararles a corta distancia utilizando un arma de fuego",
      "utilizaba sustancias para incapacitar a las víctimas",
      "robaba objetos de valor"
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
      "conservación de cráneos",
      "construcción de una identidad demoníaca",
      "mutilación y decapitación"
    ],
    "correct": 1,
    "explanation": "La firma criminal de Berkowitz se caracterizaba por la construcción de una identidad demoníaca y por la necesidad de provocar, intimidar y obtener notoriedad."
  },
  {
    "id": "berkowitz-5",
    "caseId": "berkowitz",
    "section": "victimology",
    "text": "¿Qué víctimas describe principalmente el apartado de Berkowitz?",
    "options": [
      "familias completas",
      "hombres jóvenes",
      "mujeres jóvenes y parejas jóvenes"
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
      "domicilios particulares",
      "los Oxford Apartments",
      "el interior, o cerca, de vehículos"
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
      "sustancias para incapacitar a las víctimas",
      "armas de fuego, cuchillos, hachas y martillos",
      "productos químicos"
    ],
    "correct": 1,
    "explanation": "El modus operandi se caracterizaba por una gran brutalidad y por la utilización de diferentes armas para ejecutar sus asesinatos. Entre las armas que utilizaba se encontraban armas de fuego, cuchillos, hachas y martillos. Según sus propias declaraciones, mostraba interés por experimentar con diferentes métodos de ataque, aunque no manifestaba interés por mantener relaciones sexuales con sus víctimas."
  },
  {
    "id": "onoprienko-3",
    "caseId": "onoprienko",
    "section": "signature",
    "text": "¿Cómo presenta el texto la percepción de los asesinatos en la firma de Onoprienko?",
    "options": [
      "construcción de una identidad demoníaca",
      "conservación de cráneos",
      "una actividad de caza"
    ],
    "correct": 2,
    "explanation": "Algunos comportamientos que permiten aproximarse a su posible componente psicológico encontramos principalmente la percepción de los asesinatos como una actividad de caza. Esta expresión refleja una importante deshumanización de las víctimas, que pasaban a ser consideradas objetivos sobre los que ejercer violencia."
  },
  {
    "id": "onoprienko-4",
    "caseId": "onoprienko",
    "section": "victimology",
    "text": "¿Qué patrón recurrente aparece en la victimología de Onoprienko?",
    "options": [
      "familias completas que se encontraban en sus viviendas",
      "mujeres jóvenes y parejas jóvenes",
      "estudiantes universitarias que hacían autostop"
    ],
    "correct": 0,
    "explanation": "Se caracteriza por una selección de víctimas muy amplia, aunque con un patrón recurrente, eran familias completas que se encontraban en sus viviendas, incluidos adultos y menores."
  },
  {
    "id": "onoprienko-5",
    "caseId": "onoprienko",
    "section": "justice",
    "text": "¿Qué fecha de fallecimiento recoge el documento para Onoprienko?",
    "options": [
      "10 de agosto de 1977",
      "27 de agosto de 2013",
      "30 de noviembre de 2001"
    ],
    "correct": 1,
    "explanation": "Falleció en prisión el 27 de agosto de 2013 debido a un fallo cardíaco, a la edad de 54 años."
  },
  {
    "id": "ridgway-1",
    "caseId": "ridgway",
    "section": "geography",
    "text": "¿En qué condado se concentró la actividad de Ridgway?",
    "options": [
      "Santa Cruz",
      "Nueva York",
      "condado de King"
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
      "fotografías de su hijo",
      "carnet universitario",
      "posar para fotografías"
    ],
    "correct": 0,
    "explanation": "Para conseguir que las mujeres aceptaran acompañarlo, desarrolló diferentes estrategias de manipulación. En ocasiones les ofrecía convertirse en clientes habituales, prestarles dinero, conseguirles trabajo o darles ayuda. También utilizaba fotografías de su hijo para transmitir una imagen de hombre familiar e inofensivo. Asi conseguía reducir las defensas de las víctimas y facilitar que subieran a su vehículo o acudir a su domicilio."
  },
  {
    "id": "ridgway-3",
    "caseId": "ridgway",
    "section": "signature",
    "text": "¿Dónde dejaba Ridgway algunas joyas de las víctimas, según el documento?",
    "options": [
      "Oxford Apartments",
      "baños femeninos de la fábrica Kenworth",
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
      "mujeres jóvenes y parejas jóvenes",
      "hombres jóvenes",
      "mujeres jóvenes, muchas de ellas adolescentes"
    ],
    "correct": 2,
    "explanation": "El perfil de las víctimas de Gary Ridgway presenta un patrón definido. Seleccionaba mujeres jóvenes, muchas de ellas adolescentes, que ejercían la prostitución o se encontraban en situaciones de vulnerabilidad. La mayoría de las víctimas eran mujeres que trabajaban en la prostitución callejera y las elegía porque le resultaba más sencillo acercarse a ellas y consideraba que sus desapariciones podían pasar más desapercibidas."
  },
  {
    "id": "ridgway-5",
    "caseId": "ridgway",
    "section": "av",
    "text": "¿Qué prueba califica el documento como decisiva en la vinculación de Ridgway?",
    "options": [
      "el ADN",
      "las cartas",
      "la teoría de la homología"
    ],
    "correct": 0,
    "explanation": "Sin embargo, la prueba decisiva fue el ADN. Una muestra de saliva obtenida a Ridgway en 1984 pudo compararse años después con restos biológicos de una víctima, Wendy Lee Coffield. La coincidencia permitió vincularlo con el caso y condujo a su detención en 2001."
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
      "destruir posibles evidencias",
      "conservar restos humanos",
      "dificultar que las pasajeras pudieran escapar"
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
      "mutilación y decapitación",
      "construcción de una identidad demoníaca",
      "incendiaba las viviendas"
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
      "familias completas",
      "estudiantes universitarias que hacían autostop",
      "mujeres jóvenes y parejas jóvenes"
    ],
    "correct": 1,
    "explanation": "Sus víctimas fueron principalmente mujeres jóvenes, muchas de ellas estudiantes universitarias que hacían autostop en los alrededores de Santa Cruz y otras zonas de California. Entre ellas se encontraban Mary Ann Pesce, Anita Luchessa, Aiko Koo y otras estudiantes universitarias."
  },
  {
    "id": "kemper-5",
    "caseId": "kemper",
    "section": "av",
    "text": "¿Qué teoría relaciona el documento con sus comportamientos infantiles y posteriores?",
    "options": [
      "la llamada teoría de la «Entidad»",
      "la construcción de una identidad demoníaca",
      "la teoría de la homología"
    ],
    "correct": 2,
    "explanation": "La teoría de la homología permite relacionar sus comportamientos infantiles, como la decapitación de animales y la mutilación de muñecas, con las prácticas que realizó con sus víctimas. Esto permite observar una continuidad en determinadas expresiones de violencia a lo largo de su desarrollo."
  },
  {
    "id": "dahmer-1",
    "caseId": "dahmer",
    "section": "scene",
    "text": "¿Qué apartamento aparece como principal escenario de Dahmer durante sus últimos años?",
    "options": [
      "Oxford Apartments",
      "Sullivan Correctional Facility",
      "la fábrica Kenworth"
    ],
    "correct": 0,
    "explanation": "Las escenas del crimen se concentraban principalmente en los domicilios donde Dahmer vivió, en su apartamento de los Oxford Apartments, en Milwaukee. Este lugar se convirtió en el principal escenario de su actividad criminal durante los últimos años, ya que ahí asesinaba a sus víctimas y realizaba posteriormente las mutilaciones y la conservación de los restos."
  },
  {
    "id": "dahmer-2",
    "caseId": "dahmer",
    "section": "mo",
    "text": "¿Qué ofrecía Dahmer para que las víctimas lo acompañaran?",
    "options": [
      "fotografías de su hijo",
      "dinero, alcohol o drogas",
      "carnet universitario"
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
      "construcción de una identidad demoníaca",
      "incendio de las viviendas",
      "conservación de cráneos y otras partes corporales"
    ],
    "correct": 2,
    "explanation": "La firma criminal de Dahmer se caracteriza por unos comportamientos posteriores a la muerte que no eran necesarios para consumar el homicidio ni para evitar su identificación. Entre ellos estaban las prácticas sexuales con los cadáveres, el desmembramiento, la conservación de cráneos y otras partes corporales, la realización de fotografías y el canibalismo en determinados casos."
  },
  {
    "id": "dahmer-4",
    "caseId": "dahmer",
    "section": "victimology",
    "text": "¿Qué víctima de 14 años menciona el documento en el caso de Dahmer?",
    "options": [
      "Konerak Sinthasomphone",
      "Donna Lauria",
      "Mary Ann Pesce"
    ],
    "correct": 0,
    "explanation": "Entre las víctimas había personas que conocía en bares, espacios de ocio o mediante encuentros casuales. Algunas eran vulnerables por sus circunstancias personales y sociales, lo que facilitaba que aceptaran sus propuestas de dinero, fotografías o compañía. También había menores de edad, como Konerak Sinthasomphone, de 14 años."
  },
  {
    "id": "dahmer-5",
    "caseId": "dahmer",
    "section": "justice",
    "text": "¿Quién consiguió escapar del apartamento y alertó a la policía?",
    "options": [
      "Jimmy Breslin",
      "Tracy Edwards",
      "Serhiy Rogozin"
    ],
    "correct": 1,
    "explanation": "La investigación dio un giro en julio de 1991, cuando Tracy Edwards consiguió escapar del apartamento de Dahmer y alertó a la policía. Los agentes encontraron pruebas materiales que permitieron descubrir restos humanos y reconstruir parte de la actividad criminal. Dahmer colaboró posteriormente con los investigadores y confesó haber asesinado a 17 hombres."
  }
];
