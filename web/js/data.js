/* ═══════════════════════════════════════
   OVERPOWER · DATA
   Chapter + Glossary structured data
═══════════════════════════════════════ */

window.OP = {

  /* ─── GLOSSARY ─────────────────────────────────────────────── */
  glossary: [
    { term: "Sunyata", alt: "Vacuidad", def: "Ningún fenómeno posee existencia inherente independiente.", bridge: "Nada existe aislado; todo es interdependiente.", risk: "Confundir con nihilismo o «nada importa»." },
    { term: "Pratityasamutpada", alt: "Origen dependiente", def: "Todo surge por causas y condiciones.", bridge: "La realidad funciona en red, no en piezas sueltas.", risk: "Usarlo como determinismo total." },
    { term: "Anatta", alt: "No-yo", def: "No hay un yo fijo, permanente y separado.", bridge: "La identidad es proceso, no bloque.", risk: "Negar responsabilidad personal." },
    { term: "Dukkha", alt: "Insatisfacción", def: "Fricción básica de la existencia condicionada.", bridge: "Siempre hay un roce entre expectativa y realidad.", risk: "Traducirlo solo como tristeza." },
    { term: "Nirvana", alt: null, def: "Cese del aferramiento y de la ignorancia.", bridge: "Extinción del incendio del apego.", risk: "Imaginarlo como lugar o premio post-mortem." },
    { term: "Bodhi", alt: "Despertar", def: "Comprensión directa de la realidad tal como es.", bridge: "Ver sin filtros egocentrados.", risk: "Creer que es un estado emocional permanente." },
    { term: "Prajna", alt: "Sabiduría", def: "Conocimiento no-dual que corta la confusión.", bridge: "Claridad que no depende solo de conceptos.", risk: "Reducirla a inteligencia intelectual." },
    { term: "Upaya", alt: "Medios hábiles", def: "Formas de enseñar ajustadas al receptor.", bridge: "Mismo backend, distintas interfaces (UI).", risk: "Adorar la interfaz y olvidar el servidor." },
    { term: "Tathagatagarbha", alt: "Naturaleza búdica", def: "Potencial de despertar presente en todos los seres.", bridge: "Capacidad de ejecución nativa; el núcleo del sistema.", risk: "Tratarla como un «archivo» fijo o alma." },
    { term: "Zazen", alt: null, def: "Práctica de meditación sentada central del Zen.", bridge: "Entrenar presencia despierta en quietud.", risk: "Usarlo solo para relajarse." },
    { term: "Shikantaza", alt: "Solo sentarse", def: "Zazen sin objeto ni meta instrumental.", bridge: "Practicar sin perseguir resultados.", risk: "Pasividad o somnolencia." },
    { term: "Koan", alt: "Kōan", def: "Dispositivo contemplativo que desarma la lógica dual.", bridge: "Pregunta-límite que rompe automatismos mentales.", risk: "Resolverlo como acertijo intelectual." },
    { term: "Mu", alt: null, def: "Negación que corta la pregunta mal planteada.", bridge: "Error de sistema (Null/Undefined) que libera recursos.", risk: "Confundir con apagar el monitor (mente en blanco)." },
    { term: "Samadhi", alt: null, def: "Estabilidad profunda de la atención unificada.", bridge: "Concentración íntegra y no dispersa.", risk: "Confundirlo con trance escapista." },
    { term: "Klesha", alt: "Aflicciones", def: "Fuerzas mentales que distorsionan la percepción.", bridge: "Sesgos emocionales que nublan.", risk: "Moralizar emociones como «malas»." },
    { term: "Karma", alt: null, def: "Causalidad ética de acciones, palabras e intenciones.", bridge: "Deuda técnica y efectos secundarios (side effects).", risk: "Fatalismo o pensar que el código se depura solo." },
    { term: "Bodhisattva", alt: null, def: "Ser dedicado al despertar de todos antes que al propio.", bridge: "Héroe de la compasión lúcida; activista del despertar.", risk: "Verlo como una deidad o figura inalcanzable." },
    { term: "Karuna", alt: "Compasión", def: "Aspiración de que todos los seres estén libres de sufrimiento.", bridge: "Empatía activa y lúcida.", risk: "Confundir con lástima condescendiente." },
    { term: "Upekkha", alt: "Ecuanimidad", def: "Estabilidad mental ante el éxito o el fracaso.", bridge: "Calma ante el oleaje de la vida.", risk: "Indiferencia o apatía afectiva." },
    { term: "Maya", alt: "Ilusión", def: "La naturaleza engañosa y construida de las percepciones.", bridge: "Realidad virtual generada por el cerebro y el ego.", risk: "Creer que el mundo físico es literalmente «nada»." },
    { term: "Mushin", alt: "No-mente", def: "Estado mental libre de bloqueos egocéntricos.", bridge: "Fluidez libre de interferencias narrativas; modo kernel.", risk: "Estado de inconsciencia o zombie." },
    { term: "Hishiryo", alt: "No-pensamiento", def: "Pensar desde el fondo del no-pensamiento.", bridge: "Procesamiento puro sin generación de logs.", risk: "Creer que es suprimir los pensamientos por la fuerza." },
    { term: "Heijoshin", alt: "Mente ordinaria", def: "La mente cotidiana, sin adornos, como el camino mismo.", bridge: "El sistema funcionando en modo estándar, sin overclock.", risk: "Usarla como excusa para no practicar." },
    { term: "Sangha", alt: null, def: "Comunidad de práctica y apoyo en el camino.", bridge: "Aprender en comunidad para no autoengañarse.", risk: "Dependencia grupal acrítica." },
    { term: "Dharma", alt: null, def: "Enseñanza y ley de realidad según el budismo.", bridge: "Marco práctico para comprender y vivir.", risk: "Usarlo como etiqueta de autoridad." },
  ],

  /* ─── CHAPTERS ─────────────────────────────────────────────── */
  chapters: [

    /* ═══ NIVEL 1 — SUTRAS FUNDACIONALES ═══ */
    {
      id: 1, file: "04", level: 1,
      title: "Fukanzazengi",
      subtitle: "Instrucciones universales para la práctica del zazen",
      metaphor: "El sistema no se optimiza; se estabiliza",
      school: "Soto",
      type: "Tratado práctico",
      apertura: `El <em>Fukanzazengi</em> no empieza con una teoría de Dios, del universo o del alma. Empieza con una invitación radicalmente concreta: <strong>siéntate</strong>. Para Dōgen, la Vía no se alcanza al final de un proceso, ni aparece como premio por portarse bien, ni depende de acumular ideas correctas. La Vía se realiza en el acto mismo de practicar.

En lenguaje de hoy: vivimos desbordados de estímulos, opinión y urgencia, y confundimos entender con estar presentes. Podemos leer cien libros sobre calma y seguir atrapados en reactividad. Dōgen invierte esa lógica: primero practica, luego comprensión encarnada.

El <em>Fukanzazengi</em> es una puerta de entrada privilegiada para todo el proyecto: traduce una intuición central del Zen en instrucciones simples y exigentes. Postura, respiración, actitud mental y no-búsqueda. No promete resultados rápidos. Ofrece una disciplina de lucidez.`,
      analogias: [
        {
          title: "La mente como mesa de trabajo",
          text: "Imagina que tu mente es una mesa llena de pestañas abiertas, notificaciones y tareas sin cerrar. El zazen no consiste en terminar todas las pestañas. Consiste en dejar de abrir nuevas compulsivamente, estabilizarte y ver el sistema tal como funciona.",
          limit: "El Zen no busca eficiencia mental ni gestión del estrés. Su fin no es producir más, sino ver con claridad la estructura del aferramiento."
        },
        {
          title: "Como el entrenamiento físico serio",
          text: "Como en una práctica corporal, hay forma, repetición y disciplina. No esperas dominar una postura en dos días. Vuelves, ajustas, sostienes. Con zazen pasa igual: cada sesión refina presencia y honestidad.",
          limit: "No hay una marca final de rendimiento. El punto no es «ser mejor meditador» como identidad."
        }
      ],
      pregunta: `Si no tienes que convertirte en otra persona para empezar la Vía, ¿qué parte de tu esfuerzo espiritual es práctica auténtica y qué parte es autoimagen?`
    },

    {
      id: 2, file: "05", level: 1,
      title: "Sutra del Corazón",
      subtitle: "La vacuidad: nada existe por sí solo",
      metaphor: "Forma es vacío · Interdependencia como red viva",
      school: "Ambas (Soto/Rinzai)",
      type: "Sutra breve",
      apertura: `El Sutra del Corazón es uno de los textos más cortos y, al mismo tiempo, más exigentes del budismo Mahāyāna. Su frase más conocida, <em>«la forma es vacío y el vacío es forma»</em>, parece una paradoja para la mente común porque rompe nuestro modo habitual de pensar en bloques separados: yo y mundo, sujeto y objeto, interior y exterior, éxito y fracaso.

En la práctica Zen, este sutra no se estudia para ganar discusiones filosóficas, sino para debilitar el impulso de aferrarnos a identidades fijas. Es un texto de precisión clínica sobre el sufrimiento: muestra que buena parte de nuestra fricción no viene de los hechos en sí, sino de la manera rígida en que los interpretamos y nos interpretamos.

El Sutra del Corazón sirve como antídoto contra dos extremos muy actuales: la híper-racionalización de todo y la reacción emocional sin examen. No propone anular la razón ni negar la emoción. Propone ver su condicionamiento para actuar con más lucidez.`,
      analogias: [
        {
          title: "Identidad como configuración dinámica",
          text: "Piensa en cómo proyectas versiones distintas de ti según plataforma, contexto o audiencia. Ninguna versión agota quién eres. El Sutra del Corazón diría: tampoco tu «yo interior» es una pieza fija; es una configuración dinámica de procesos.",
          limit: "No se trata de construir una mejor imagen personal ni una identidad más eficiente, sino de soltar el aferramiento a toda identidad rígida."
        },
        {
          title: "El tráfico urbano y el sufrimiento",
          text: "Un atasco parece una cosa compacta: «el tráfico». Pero al mirarlo de cerca es una red de micro-causas: semáforos, decisiones, clima, horarios, obras. Igual con el sufrimiento: parece un bloque sólido, pero está compuesto por condiciones que cambian.",
          limit: "Entender causalidad no significa control total. La práctica no promete dominio absoluto, sino una relación menos ciega con lo que surge."
        }
      ],
      pregunta: `Si aquello que llamas «yo» cambia con cada condición, ¿qué estás defendiendo exactamente cuando te pones a la defensiva?

Si la forma nunca está separada del vacío, ¿puedes mirar tu conflicto más intenso de hoy no como una guerra de identidades, sino como una red de causas en la que también participas?`
    },

    {
      id: 3, file: "06", level: 1,
      title: "Sutra del Diamante",
      subtitle: "No conviertas el camino en otra propiedad del yo",
      metaphor: "No-apego en la acción · Andamio vs. edificio",
      school: "Ambas (Soto/Rinzai)",
      type: "Sutra dialogado",
      apertura: `Si el Sutra del Corazón muestra que nada tiene esencia fija, el Sutra del Diamante enseña que tampoco debemos aferrarnos a las ideas correctas sobre esa vacuidad. Es un texto de poda radical: corta no solo el apego ordinario (placer, imagen, control), sino también el <strong>apego espiritual</strong> («yo comprendo», «yo avanzo», «yo soy practicante»).

El Diamante aborda una trampa frecuente: transformar el camino interior en una nueva identidad de rendimiento. Podemos cambiar de metas materiales a metas espirituales y seguir atrapados en la misma estructura de apropiación. El sutra desenmascara ese mecanismo.

Su tono puede parecer desconcertante: habla, afirma y luego desarma lo afirmado. No es juego verbal gratuito. Es entrenamiento para pensar y actuar sin convertir conceptos en prisiones.`,
      analogias: [
        {
          title: "El currículum espiritual",
          text: "Imagina que conviertes tu práctica en una sección del CV: horas de meditación, cursos, textos leídos, certificaciones. Nada de eso es inútil, pero si te da una identidad fija de «persona despierta», el medio se convierte en obstáculo.",
          limit: "El sutra no desprecia la disciplina ni el estudio; critica la fijación identitaria sobre ellos."
        },
        {
          title: "Andamio y edificio",
          text: "Un arquitecto usa andamios para construir. Cuando la estructura está lista, el andamio se retira. Si alguien se aferra al andamio como si fuera el edificio, confunde medio con fin. En el Diamante, conceptos y fórmulas doctrinales son andamios.",
          limit: "En la práctica real, retiramos un andamio y tomamos otro; no existe un estado final de suficiencia."
        }
      ],
      pregunta: `Cuando ayudas a alguien, ¿estás respondiendo al sufrimiento real o defendiendo una imagen de «persona que ayuda»?

Si hoy hicieras exactamente lo correcto pero nadie lo viera, ¿seguirías dispuesto a hacerlo con la misma claridad?`
    },

    {
      id: 4, file: "07", level: 1,
      title: "Xinxin Ming",
      subtitle: "Fe en la Mente · La paz de la no-preferencia",
      metaphor: "El sistema sin modo de conflicto activo",
      school: "Chan",
      type: "Poema doctrinal",
      apertura: `El <em>Xinxin Ming</em> (信心銘) abre con una de las frases más directas de toda la tradición Chan: <em>«La Gran Vía no tiene dificultad; solo rehúye la preferencia»</em>. No hay que escalar montañas ni alcanzar estados extraordinarios. El obstáculo es más cotidiano y más sutil: la mente que constantemente divide el mundo en lo que quiere y lo que rechaza.

Escrito por el Tercer Patriarca Sengcan —quien aparecerá con más detalle en el capítulo de Huike y Sengcan— el poema es un mapa de la mente que se libera de la guerra constante entre aceptación y rechazo. No propone indiferencia: propone una presencia tan plena que la lucha pierde su terreno.

Para quien vive en el ritmo acelerado de la vida contemporánea, el texto tiene una relevancia inmediata: ¿cuánta energía consume la mente operando en modo de conflicto permanente? ¿Cuánto esfuerzo gastamos en intentar que la realidad sea diferente a lo que es?`,
      analogias: [
        {
          title: "El modo «conflicto activo» de la mente",
          text: "Imagina un sistema operativo con dos procesos paralelos siempre activos: uno que busca lo que quiere y otro que evita lo que teme. Ambos consumen recursos constantemente. El Xinxin Ming propone algo radical: desactivar ese modo dual no apagando el sistema, sino dejando de alimentar la rivalidad entre los dos procesos.",
          limit: "No se trata de eliminar las preferencias prácticas (preferir agua potable a agua contaminada sigue siendo válido). Se trata del aferramiento rígido que convierte cada elección en una guerra de identidad."
        },
        {
          title: "La linterna y la oscuridad",
          text: "Quien busca la luz luchando contra la oscuridad no encuentra nunca el interruptor. La oscuridad no es un enemigo: es ausencia de luz. La práctica del Zen no combate la confusión; simplemente enciende presencia, y la confusión se retira naturalmente.",
          limit: "No implica pasividad ante la injusticia. La ecuanimidad interna no es indiferencia externa."
        }
      ],
      pregunta: `¿En cuántas decisiones de hoy estás respondiendo a la realidad concreta, y en cuántas estás respondiendo al mapa mental de lo que la realidad «debería» ser?`
    },

    {
      id: 5, file: "08", level: 1,
      title: "Sandokai",
      subtitle: "Armonía de la diferencia y la igualdad",
      metaphor: "Cada nodo es único; la red es una · Diversidad sin fragmentación",
      school: "Soto",
      type: "Poema doctrinal",
      apertura: `El <em>Sandokai</em> (參同契), «Armonía del Particular y el Universal», es uno de los textos poéticos más recitados en el Zen Soto. Su nombre ya es una enseñanza: <em>san</em> (diferencia, variedad) y <em>do</em> (igualdad, unidad) se armonizan en <em>kai</em> (acuerdo).

La pregunta que atraviesa el texto es tan antigua como directa: si todo es uno, ¿por qué existe el sufrimiento de la separación? Y si todo es diferente, ¿por qué buscamos conexión? El Sandokai propone que estas dos realidades no se contradicen: coexisten en tensión creativa, como las dos caras de una hoja de papel que nunca puedes ver simultáneamente pero que existen juntas.

Para el lector contemporáneo, el Sandokai tiene resonancias inesperadas. Vivimos en culturas que simultáneamente proclaman la individualidad («sé único») y la conexión («somos todos iguales»). El texto no resuelve esa tensión con una fórmula: la habita.`,
      analogias: [
        {
          title: "Cada nodo es único; la red es una",
          text: "En una red distribuida, cada nodo tiene su dirección IP única, su latencia específica, su capacidad particular. Y al mismo tiempo, todos participan en el mismo protocolo, comparten el mismo flujo de información. Destruir la particularidad del nodo es destruir la red. Pero aislar el nodo de la red es destruir su función.",
          limit: "La red es una metáfora de gestión; el Sandokai apunta a algo anterior a la gestión: la naturaleza misma de la experiencia."
        }
      ],
      pregunta: `¿Hay algún aspecto de tu vida en el que la insistencia en ser completamente único te esté aislando? ¿Y alguno en el que la búsqueda de conexión te esté borrando?`
    },

    /* ═══ NIVEL 2 — PATRIARCAS Y LINAJE ═══ */
    {
      id: 6, file: "17", level: 2,
      title: "Bodhidharma: El Hard Reset del Zen",
      subtitle: "La transmisión especial fuera de las escrituras",
      metaphor: "Hard Reset · Firmware Update · P2P espiritual",
      school: "Chan / Zen (Fundador)",
      type: "Biografía doctrinal",
      apertura: `La llegada de Bodhidharma a China no fue una misión diplomática: fue un <strong>Hard Reset</strong> evolutivo para la espiritualidad de la época. En un entorno saturado de traducciones, templos y rituales externos, Bodhidharma trajo una tecnología de «punto cero»: la mirada hacia el muro. No propuso mejorar el software del yo, sino suspenderlo para que el sistema pudiera reconocer su propio hardware original.

La leyenda sitúa a Bodhidharma frente al Emperador Wu de Liang, un gran mecenas del budismo. El Emperador, orgulloso de sus templos y donaciones, preguntó: «¿Cuánto mérito he acumulado?». La respuesta de Bodhidharma fue una deflagración: <em>«Ningún mérito»</em>.

Doctrinalmente, este es el momento en que el budismo se libera del sistema de «puntos espirituales» para entrar en la vacuidad radical. Bodhidharma no negaba la bondad de las obras, sino la identificación egoica con ellas. Si hay un «yo» acumulando méritos, no hay despertar, hay <strong>Maya</strong> de santidad.`,
      analogias: [
        {
          title: "Pi-Kuan (Mirar el Muro) como Firmware Update",
          text: "Se dice que Bodhidharma pasó nueve años mirando un muro en Shaolin. No es «mirar una pared» — es estabilizar la interfaz. Imagina que tu mente es una pantalla llena de ventanas de chat, notificaciones y procesos en segundo plano. Mirar el muro es cerrar todas las pestañas y quedarse con el monitor en blanco hasta que el Firmware (la naturaleza búdica) se actualice sin interferencias.",
          limit: "El firmware es un código estático; el despertar búdico es una claridad dinámica."
        },
        {
          title: "Transmisión P2P espiritual",
          text: "Bodhidharma definió su enseñanza como: «Una transmisión especial fuera de las escrituras, sin dependencia de palabras o letras». En lugar de pasar por el «servidor central» de la doctrina escrita, la sabiduría se transmite por conexión directa de mente a mente. Es como pasar un archivo por una conexión directa en lugar de subirlo a una nube pública: la transferencia es inmediata y requiere proximidad real.",
          limit: "La transmisión Zen requiere la validación total del maestro; no es solo empatía o carisma."
        }
      ],
      pregunta: `Bodhidharma preguntó al Emperador: «¿Quién es el que está ante mí?». El Emperador dijo: «No lo sé». Bodhidharma respondió: «Exacto».

Si borras tu nombre, tu historia y tus logros, ¿quién está operando tu consciencia en este preciso segundo?`
    },

    {
      id: 7, file: "18", level: 2,
      title: "Huike y Sengcan: La Mente Tranquila",
      subtitle: "Debugging de la dualidad · La paz que ya está aquí",
      metaphor: "Debugging existencial · Clean Pipe",
      school: "Chan",
      type: "Biografía doctrinal",
      apertura: `La conversación entre Bodhidharma y Huike es uno de los intercambios más famosos de toda la tradición Zen. Huike, después de años de práctica intensa, se presentó ante Bodhidharma en medio de una nevada y le dijo: <em>«Mi mente no está en paz. Por favor, apacíguala»</em>.

Bodhidharma respondió: <em>«Tráeme tu mente y la apaciguaré»</em>.

Huike, tras un largo silencio: <em>«He buscado mi mente y no puedo encontrarla»</em>.

Bodhidharma: <em>«Ya he apaciguado tu mente»</em>.

En este intercambio está comprimida toda una epistemología. El error de Huike no era su sufrimiento, sino asumir que había una «mente-objeto» separada de él que necesitaba ser reparada. La búsqueda misma era el problema. Cuando descubre que no puede encontrar una mente sólida para presentar, el problema se disuelve.`,
      analogias: [
        {
          title: "Debugging de un error que no existe",
          text: "Imagina pasar horas buscando un bug crítico en el código, llamando a todo el equipo, revisando logs... y descubrir que el error era un reporte falso. El problema no estaba en el sistema: estaba en los supuestos con los que leíste el reporte. Huike busca su «mente en conflicto» y no puede encontrarla. No porque esté bien escondida, sino porque nunca fue una cosa sólida.",
          limit: "Los bugs reales sí existen y hay que depurarlos. La analogía apunta al supuesto no examinado de que hay un «yo» separado que está sufriendo."
        },
        {
          title: "Clean Pipe",
          text: "En redes, un «clean pipe» es una línea de datos sin el ruido de ataques o interferencias. Sengcan, el Tercer Patriarca, enseña en el Xinxin Ming que la mente en su estado natural ya es una línea limpia. La perturbación no es su naturaleza: es lo que se añade.",
          limit: "Una red limpia requiere mantenimiento activo; el Zen no propone abandonar la práctica, sino no confundir la práctica con la adquisición de algo ajeno."
        }
      ],
      pregunta: `¿Cuánto tiempo y energía has invertido en resolver un problema que, al examinarlo de cerca, resultó ser una historia que te estabas contando?

Antes de buscar la solución, ¿puedes preguntarte: «¿Es real el problema tal como lo he formulado?»`
    },

    /* ═══ NIVEL 3 — OBRAS DE DŌGEN ═══ */
    {
      id: 8, file: "15", level: 3,
      title: "Bendowa: El Samadhi del Disfrute de Sí Mismo",
      subtitle: "Práctica e iluminación son una sola cosa",
      metaphor: "Autorregulación homeostática · Streaming vs. descarga",
      school: "Soto",
      type: "Tratado filosófico",
      apertura: `El <em>Bendōwa</em> (1231) es la pieza de código fundacional del Zen Soto japonés. Al regresar de China, Dōgen no trajo nuevos rituales, sino una visión radical: el despertar no es un destino al que se llega tras años de esfuerzo, sino la <strong>frecuencia natural</strong> de una vida alineada. Sentarse en zazen es el acto de «entrar en red» con la totalidad del universo. No es buscar el satori; es permitir que el satori se ejecute a través de ti.

Su tesis central es el <em>Shushō Ittō</em>: la no-dualidad entre la práctica (el medio) y la realización (el fin). Para Dōgen, la idea de «practicar para iluminarse» es una forma de <strong>Maya</strong>. Si crees que ahora te falta algo y que lo obtendrás después, estás operando en el tiempo lineal del deseo egoico.

Dōgen escribió este texto para responder a 18 preguntas fundamentales sobre la práctica. Cada respuesta desmantela un supuesto diferente. Juntas, forman el mapa más sistemático que el Zen Soto ha producido sobre por qué la práctica es, en sí misma, la realización.`,
      analogias: [
        {
          title: "Autorregulación homeostática",
          text: "En biología, la homeostasis mantiene la estabilidad del sistema frente al caos externo. El «disfrute de sí mismo» de Dōgen no es placer sensorial, es confort operativo máximo. Como un corredor de fondo que encuentra su «ritmo de crucero»: el cuerpo fluye, el esfuerzo desaparece y la acción se vuelve autosustentada.",
          limit: "La homeostasis biológica es para la supervivencia individual; el samadhi zen es para la disolución de la frontera entre el yo y el entorno."
        },
        {
          title: "Streaming vs. descarga",
          text: "Tradicionalmente, el despertar era como descargar un archivo: trabajas mucho (descarga) y al final tienes el archivo (iluminación). Dōgen propone el modelo streaming. El proceso de recibir datos (practicar) es indisoluble de la experiencia del contenido (iluminación). No hay iluminación «almacenada»; si dejas de meditar, el streaming se corta.",
          limit: "El streaming requiere una red externa; el despertar búdico es el descubrimiento de que tú eres la red."
        }
      ],
      pregunta: `Dōgen afirma: <em>«Incluso un solo momento de zazen influye en todos los seres»</em>.

Si este segundo de tu vida no fuera un paso hacia nada, sino la culminación perfecta de toda la historia del universo, ¿cómo cambiaría tu forma de respirar justo ahora?`
    },

    {
      id: 9, file: "16", level: 3,
      title: "Genjōkōan: La Realización del Kōan Manifiesto",
      subtitle: "Cuando el sistema deja de analizar el mundo y simplemente es el mundo",
      metaphor: "Sensor Fusion · UI Transparente",
      school: "Soto",
      type: "Tratado filosófico-contemplativo",
      apertura: `El <em>Genjōkōan</em> es el primer fascículo del <em>Shōbōgenzō</em> y la destilación más pura del pensamiento de Dōgen. Su premisa es que la iluminación no es un evento místico oculto, sino la <strong>actualización espontánea</strong> de la realidad en cada gesto. No resolvemos el kōan con la lógica; lo resolvemos al convertirnos en el kōan.

Escrito en 1233 para un discípulo laico, Dōgen establece el axioma fundamental del Zen Soto: <em>«Estudiar el camino de Buda es estudiarse a uno mismo. Estudiarse a uno mismo es olvidarse de uno mismo. Olvidarse de uno mismo es ser despertado por todas las cosas del universo»</em>.

Dōgen observa que el pájaro no conoce el aire ni el pez el agua hasta que los abandonan. Nosotros estamos inmersos en la iluminación, pero no la vemos porque es nuestro entorno de ejecución total.`,
      analogias: [
        {
          title: "Sensor Fusion: cuando el sensor se vuelve invisible",
          text: "En robótica avanzada, la fusión de sensores integra datos de cámaras, radares y GPS para crear un modelo único del entorno. El ego es un sensor mal calibrado que siempre añade un sesgo de «mí» a la información. El Zen busca la fusión total: cuando tu atención es tan plena y sin esfuerzo, ya no sientes el «sensor», solo sientes el entorno.",
          limit: "Una máquina necesita un procesador central; el despertar de Dōgen es el descubrimiento de que no hay un centro fijo."
        },
        {
          title: "La luna en el agua: UI no intrusiva",
          text: "Dōgen dice: «La iluminación es como la luna reflejada en el agua. La luna no se moja; el agua no se rompe». La iluminación no altera las funciones básicas de tu vida (trabajar, comer, dormir), sino que les otorga una claridad absoluta. Como una pantalla de alta resolución que no cambia la imagen que muestra.",
          limit: "El reflejo es una imagen pasiva; el despertar de Dōgen es una actividad compasiva y dinámica."
        }
      ],
      pregunta: `Mira el objeto más cercano a ti. Trata de percibirlo sin el pensamiento de «yo lo estoy mirando». Deja que la textura, el color y la forma lleguen a tu consciencia sin el filtro de tu opinión.

En ese encuentro directo, ¿dónde terminas tú y dónde empieza el objeto?`
    },

    /* ═══ NIVEL 4 — MUMONKAN ═══ */
    {
      id: 10, file: "21", level: 4,
      title: "Caso 1: El «Mu» de Joshu",
      subtitle: "El error de sistema que libera al usuario",
      metaphor: "Systematic Logic Jammer · Null / Undefined",
      school: "Rinzai",
      type: "Kōan",
      apertura: `Un monje le preguntó a Joshu: <em>«¿Tiene un perro naturaleza búdica?»</em>. Joshu respondió: <em>«¡Mu!»</em>.

En nuestra cultura de datos y algoritmos, el monje está pidiendo un bit de información: sí o no, uno o cero. Joshu, en cambio, le devuelve un <strong>error de sistema</strong>. «Mu» no es un cero (que es una cantidad), es un estado <em>Null</em> o <em>Undefined</em> que indica que la variable «naturaleza búdica» no puede ser cuantificada dentro de un perro.

A diferencia de un error informático que detiene el programa, el «Mu» del Zen es un error que <strong>libera</strong> al usuario. Libera porque fuerza al monje —y al practicante que trabaja con este kōan— a salir del sistema binario de preguntas y respuestas y entrar en un territorio donde la pregunta misma se examina antes de intentar responderla.`,
      analogias: [
        {
          title: "Error Null que libera recursos",
          text: "En programación, cuando una función recibe un argumento Null, puede hacer dos cosas: lanzar una excepción que detenga el programa, o manejarlo gracefully y liberar el hilo de ejecución. El «Mu» de Joshu es la segunda opción: no detiene la búsqueda del monje — la redirige hacia la pregunta de quién está haciendo la pregunta.",
          limit: "Un Null en código es un estado vacío que hay que rellenar. El Mu del Zen no está esperando ser rellenado; es en sí mismo la respuesta completa."
        }
      ],
      pregunta: `Si el perro tiene naturaleza búdica y tú tienes naturaleza búdica, ¿quién es el que está haciendo la pregunta en este momento?`
    },

    {
      id: 11, file: "32", level: 4,
      title: "Caso 12: Zuigan llama a su propio amo",
      subtitle: "El self-referential loop que no colapsa",
      metaphor: "Self-referential Loop · Observer Pattern",
      school: "Rinzai",
      type: "Kōan",
      apertura: `Cada mañana, el maestro Zuigan se sentaba y se llamaba a sí mismo: <em>«¡Amo!»</em>. Y respondía: <em>«¡Sí!»</em>. Luego añadía: <em>«¿Estás despierto?»</em>. Y respondía: <em>«¡Sí, sí!»</em>. Y concluía: <em>«No te dejes engañar por nadie»</em>.

En arquitectura de software existe el <strong>Observer Pattern</strong>: un objeto se suscribe a otro para recibir notificaciones de sus cambios de estado. El problema surge cuando intentas aplicar ese patrón a un sistema que debe observarse a sí mismo. Si el observador y el sujeto son el mismo objeto, ¿quién notifica a quién?

Zuigan resuelve este problema de una forma que ningún compilador puede hacer: <strong>mantiene la tensión del loop sin colapsar</strong>. No hay cortocircuito porque no hay separación real entre quien llama y quien responde. Son la misma presencia vista desde dos funciones distintas.`,
      analogias: [
        {
          title: "El loop que se sostiene sin infinito",
          text: "Un self-referential loop en programación suele terminar en stack overflow: los recursos se agotan porque el sistema no tiene criterio de parada. Zuigan tiene el criterio más sutil posible: la pregunta «¿estás despierto?» no busca una respuesta conceptual sino una verificación de presencia directa. El loop no se detiene; se vuelve el suelo.",
          limit: "El loop de Zuigan no es un bucle lógico: es un ritual de verificación de presencia que usa el lenguaje sin depender de él."
        }
      ],
      pregunta: `Cada mañana, antes de mirar el teléfono, antes del primer pensamiento sobre el día, hay un instante en que simplemente eres. ¿Quién vive en ese instante?`
    },

    {
      id: 12, file: "34", level: 4,
      title: "Caso 14: Nansen corta el gato",
      subtitle: "Deadlock resolution: la sandalia en la cabeza",
      metaphor: "Split-brain · Deadlock Resolution",
      school: "Rinzai",
      type: "Kōan",
      apertura: `Los monjes del ala Este y los del ala Oeste disputaban por un gato. Nansen tomó el gato y declaró: <em>«Si alguno puede decir una palabra, el gato se salva»</em>. Silencio. Nansen cortó el gato.

Más tarde, Joshu regresó. Nansen le contó el suceso. Joshu se quitó la sandalia, la puso en la cabeza y salió. Nansen dijo: <em>«Si hubieras estado ahí, el gato se habría salvado»</em>.

En bases de datos distribuidas, el <strong>split-brain</strong> ocurre cuando una red se divide y los dos segmentos continúan operando como si fueran el sistema completo. Nansen ejecuta la única operación que un algoritmo de resolución tiene cuando el consenso falla: <strong>forzar el cierre del recurso en disputa</strong>.

La sandalia de Joshu no es una respuesta bonita: es la respuesta que existe <strong>fuera del plano donde se define el conflicto</strong>. El conflicto es bidimensional (Este vs. Oeste, tuyo vs. mío); la sandalia en la cabeza opera en una tercera dimensión que ninguno de los dos lados puede anticipar.`,
      analogias: [
        {
          title: "Split-brain y el corte del recurso",
          text: "En un sistema distribuido sin árbitro, dos nodos que creen tener autoridad completa pueden corromperse mutuamente. La única solución es, a veces, aislar el recurso disputado hasta que el conflicto se resuelva desde fuera del plano del conflicto.",
          limit: "En sistemas informáticos, cortar el recurso tiene consecuencias medibles. En el kōan, la «pérdida» del gato es el precio de la claridad que ninguno de los monjes estaba dispuesto a generar."
        }
      ],
      pregunta: `¿Puedes encontrar el gesto que no le pertenece a ninguna de las dos partes en conflicto? ¿La sandalia que se puede poner en la cabeza?`
    },

    {
      id: 13, file: "36", level: 4,
      title: "Caso 16: Yunmen y la campana",
      subtitle: "¿Respondes desde la totalidad o desde un script olvidado?",
      metaphor: "Automated Event Handler · Cron Job sin auditoría",
      school: "Rinzai",
      type: "Kōan",
      apertura: `Yunmen dijo: <em>«El mundo es vasto y amplio. ¿Por qué te pones el kesa de siete paneles al oír la campana?»</em>

En arquitectura event-driven, un <strong>event handler</strong> se ejecuta automáticamente cuando un evento es disparado. El peligro aparece cuando el handler lleva tanto tiempo funcionando que nadie recuerda por qué fue escrito. Es el equivalente espiritual de un cron job al que nadie ha auditado desde hace años: ejecuta, ejecuta, ejecuta, pero ya no sirve al propósito original.

Yunmen no dice que esté mal responder a la campana. El kesa hay que ponérselo para el zazen. Lo que pregunta es desde dónde nace esa respuesta. ¿Desde la presencia en el momento actual, o desde un condicionamiento tan antiguo que ya no eres su autor sino su ejecutor?`,
      analogias: [
        {
          title: "El cron job sin auditoría",
          text: "Un proceso programado que nadie revisa puede volverse parásito: consume recursos, dispara efectos secundarios inesperados, y cuando alguien finalmente lo mira, ya nadie sabe quién lo escribió ni para qué. La práctica sin consciencia es así: ritualismo que ejecuta pero no habita.",
          limit: "No toda rutina es un cron job muerto. La diferencia entre hábito vivo y automatismo muerto no está en la acción, sino en la presencia que la anima."
        }
      ],
      pregunta: `Mañana por la mañana sonará tu primera alarma del día. ¿Qué parte de ti responde a esa alarma? ¿Es la misma parte que puede ver la vastedad del día que comienza?`
    }

  ] /* end chapters */

}; /* end OP */

/* ─── CHAPTER ↔ TERM CROSS-REFERENCE ─── */
OP.chapterTerms = {
  1:  ['Zazen', 'Shikantaza', 'Prajna', 'Sunyata'],
  2:  ['Sunyata', 'Prajna', 'Pratityasamutpada', 'Bodhisattva', 'Karuna'],
  3:  ['Bodhisattva', 'Karuna', 'Upaya', 'Maya', 'Dharma'],
  4:  ['Upekkha', 'Heijoshin', 'Dukkha'],
  5:  ['Anatta', 'Pratityasamutpada', 'Sangha'],
  6:  ['Maya', 'Tathagatagarbha', 'Mushin'],
  7:  ['Mushin', 'Mu', 'Samadhi'],
  8:  ['Maya', 'Mushin', 'Karuna', 'Samadhi', 'Bodhisattva'],
  9:  ['Maya', 'Mushin', 'Karuna', 'Upekkha', 'Bodhisattva'],
  10: ['Mu', 'Tathagatagarbha', 'Koan'],
  11: ['Mushin', 'Koan', 'Samadhi'],
  12: ['Koan', 'Dukkha'],
  13: ['Karma', 'Heijoshin', 'Koan', 'Zazen'],
};

/* ─── HELPERS ─── */
OP.chaptersForTerm = function(termKey) {
  return OP.chapters.filter(ch => (OP.chapterTerms[ch.id] || []).includes(termKey));
};
OP.glossaryEntry = function(key) {
  return OP.glossary.find(g => g.term.toLowerCase() === key.toLowerCase());
};
