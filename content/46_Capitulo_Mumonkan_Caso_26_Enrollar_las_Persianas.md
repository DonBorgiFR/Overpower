# Caso 26 - Dos Monjes Enrollan las Persianas: Accion Stateful vs Stateless

## Metadatos

- Nivel del corpus: Nivel 4 — Las Grandes Colecciones de Koans
- Texto fuente principal: Mumonkan (La Puerta Sin Puerta), Caso 26
- Escuela predominante: Rinzai y Soto
- Tipo de texto: Koan (Coleccion de casos)
- Publico principal de esta version: Las personas obsesionadas con optimizar acciones externas, perdiendo de vista que la accion fisica impecable oculta a menudo motivaciones nefastas o identidades atascadas esperando reconocimiento oculto.

## 1. Apertura

Juzgar desde un angulo enteramente fisico y visual es catastrofico para medir la verdad de un ser humano. Nos conformamos si el empleado completo la jornada o si la pareja trajo un regalo de aniversario. Mientras el output (la salida lograble o perceptible a los ojos del mundo) encaje en nuestro guion de "comportamiento correcto", no nos importa que infierno invisible de intenciones quemó dicho acto para presentarse delante de nosotros.

Este paradigma queda aniquilado de raiz en el mediodia del Gran Fayan, en la dinastia Tang. El maestro se alza frente a la sala de monjes minutos antes de comer, no emite sonido alguno y simplemente señala con su indice hacia la persiana de bambu que separa y enjaula la habitacion. Entendiendo la obvia necesidad atmosferica o ceremonial de iluminacion, dos monjes se levantan con identica simultaneidad, se dirigen coordinadamente y enrollan la persiana juntos en sincronia matematica. Es un adagio visual impecable, pero al caer un silencio, el rayo laser de Fayan corta la escena en dos al fallar: *"Uno la tiene. El otro, no"*. O expresado literalmente en las traducciones del chino, *"Un hombre gana, un hombre pierde"*.

Esta frase fulminante atestigua algo aterrador. Una actuacion puede ser motriz y superficialmente igual delante de miles de camaras periciales, y simultaneamente, ser ontologicamente irreconciliable y diferente en la sala de maquinas internas de quienen la ejecutan. 

## 2. Contexto doctrinal e histórico

El maestro Fayan (Hogen de Seiryo) fue la cabeza historica de la escuela Fayan, una de las llamadas Cinco Casas Clasicas del Chan chino continental. Los registros del sutra revelan que el solia responder desde "una compasion estricta, midiendo a la gente desde sus huesos, no desde su túnica". 

Las persianas u cortinillas de cana (*misu* o *sudare*) protegian el entorno en reuniones de Dharma. Levantarlas no solo propiciaba el paso de la bruma y visual, sino tambien referia conceptualmente al acto vital budista de "descorrer el velo de la ilusion" entre el estudiante y lo inconmensurable. De estos dos monjes anonimos, uno ejecuto su mandato mecanico (se levanta, enrolla y se vuelve a sentar); pero para uno, la orden se hundió en las profundidades puras del desapego y lo vivencio puramente; el otro monje asistiio al rito motivado por el deseo de aprobacion, compitiendo veladamente ante la tarima en espera a que "el Maestro premiara la obediencia del servidor preclaro".

El comentario de Mumon no le regala solucion masticable al lector novicio: "Amigo mio, dime que monje gano y cual perdio. Si logras la clarividencia en un ojo (el ojo del dharma verdadero), lograras desbaratar el fallo de Fayan, pero ten mucho cuidado de ponerte jamas a debatir sobre ganar y perder".   

## 3. Traducción occidental guiada

¿Como juzgar dos rutinas que arrojan resoluciones binarias copias exactas a escala fenomenologica? En ingenieria de APIs y en Diseno de Arquitecturas de software, la separacion entre dos modos absolutos es la unica manera de operar y mapea con rigor exquisito al veredicto de Fayan.

### La analogia de las Arquitecturas "Stateless" y "Stateful" (Con Efectos Secundarios)

Imagina dos diferentes botones dentro de una base de datos gigante. Al oprimir ambos (La señal digital del maestro indicando la persiana), las dos subrutinas logran matematicamente la meta que en sus tableros aparece como "True / Hecho" (Las persianas estan enrolladas).

El Mono 1 ejecuta basado en el patron **Stateless** (Sin estado guardado). En la web, una API "Stateless", al terminar su tarea exitosamente de servir al usuario, resetea todas las variables que tenia y no almacena informacion de lo ocurrido para favorecer otra orden. Hace lo que se manda, entra e interactua pulcramente sin guardar remanentes de datos y ni siquiera retiene en el disco local registros u organigramas para usar a su favor en rondas de futuro calculo. 

El Monje 2 ejecuta en base al patron **Stateful** (Con retencion de Estado) o con **Side Effects** a nivel computacional. Hace la accion perfecta de subir la persiana; el output fisico brilla, pero *debajo de su linea motriz*, altera una macro variable interna llamada Ego o "Orgullo de Logro Monacal". Oprime el botom y retiene, memoriza e incrementa un flag invisible que reza `Orgullo_Por_Agilidad += 1`. Guarda el hecho en la base de datos de su biografia discursiva. Hubo un remanente letal de la experiencia, un memento a favor de su individualidad. 

A un ojo visual (los demas monjes de la sala), no hay diferencia. Pera para quien hizo ingenieria inversa del log (Fayan), sabe dictaminar: "Aquel tiene paz del vacio sin retencion (Stateless), y aquel acaba de adquirir ganancia sucia de estado a costa mia (Stateful)". 

**El limite de la analogia**:
Sistemicamente se necesitan arquitecturas Stateful en nuestra red moderna (para almacenar cookies y variables legitimas). En el plano de la iluminacion monastica budista "Amasar logros u estados de medallas para la bio" no tiene uso util frente al despertar verdadero.

### La analogia del Black-box vs White-box Testing

Cuando validamos que algo funcione podemos someter un objeto a la "Caja Negra" (Black-Box), que observa el proceso simplemente validando que su interaccion con el mundo este entregando el resultado dictado a prioristica (El bambú enrollando es igual de bueno para AMBOS candidatos en caja negra). 

Fayan examino con el "White-Box testing" (o de caja transparente): este no confia superficialmente de resultado, sino que audita rigurosamente y expone los conductos y mecanismos intermedios a un rigor de escrutinio insensato. La luz del medio dia evidencio que de las tuberias resbalaban metodos adulterados de ambicion por obtener una mirada.

**El limite de la analogia**:
Hacer ingenieria no implica capacidad moral intrínseca, sin embargo Fayan "vio" los conductos transparentemente sin siquiera una herramienta. Vio sin mirar; escaneo con su espiritu la emision invisible de ondas de ambición codiciosa resudando de una falange sobre la caña.

## 4. Núcleo de práctica

- Como se encarna en zazen: Cuando al fin concluyes una jornada severa y de largas horas de zazen doloroso y tu campana timbra su marca horaria. ¿Como reaccionas cuando vas a guardar los almohadones y zafús y ordenar tu entorno? Puedes ser el monje uno y estirarte lavando tus ropas operando el sistema *Stateless*, disuelto y fluido... o puedes ser el dos; doblar la vestimenta mirando orgulloso a ver si pasaba algun senior y asintia viendo cuanta virtud en tu "disciplina resarcitoria" se vislumbra por la rendija.
- Como se observa en vida diaria: Aplica esto cuando decidas "hacer lo correcto en el plano publico" o cuando en la oficina salven y desenreden en un documento excel de manera proactiva al equipo general. Haz el favor sin dejar secuelas. Que de la accion heroica a nivel corporativo no genere ninguna variable acumulada dentro en ti para reclamarla desdichada el proximo mes, exigiendo de tributo lealtad ciega o ascenso monetario a su devoto lider martir. Subiste la caña... ahora desaparece puramente junto al gesto.  
- Que evitar durante la practica: Creer que para evitar caer en trampa *Stateful* jamas tendrias que actuar al mismo tiempo ni de frente que otro, "Ocultandote detras como el ser humano humilde mas grande y encubierto de la era." La respuesta de ambos monjes fue veloz. Lo asombroso del primer monje victorioso no fue dudar ni ceder; fue operar agudamente valiente el dictamen de urgencia desprotegido desde su autenticidad medular sin recolectar premio. El zen demanda una accion punzante.

## 5. Pregunta contemplativa de cierre

La proxima vez que ejecutes un favor monumental a quien tu dictamen juzga debil, al instante de recibir la alabanza ¿vas a archivar sigilosamente con estridencias su aplauso entre el contador oculto dentro de tu carne?

## 6. Errores comunes de interpretación

- **Error 1: Caer en la dicotomia y ponerse a buscar "La falla técnica".** Ah, uno lo enrollo asimetricamente seguro, y yo deduzco que la persiana estaria colgada por su impaciensia. Correccion: Las acciones superficiales y cinematicas pueden poseer perfeccion fisica gemela; intentar solventar un acertijo basando se en algun derrape visual obvia totalmente la direccion abismal del Maestro Fayan.
- **Error 2: Romantizar al Maestro y asustare frente al Zen en paralisis persecutoria.** Si actuo y soy auditado telepaticamente, mejor me mantengo agachado y quieto de por vida. Correccion: Fayan expone una ley irremediable pero Mumon corta a Fayan al decir "Miren a este maestro dualista emitiendo perder o ganar". No debemos asustarno hasta fosilizarnos, en la via inmaculada tambien el maestro es auditable; ¡Mumon acusa de que es aun y todo una falla categorizar ganadores frente a la brisa inmensa colandose en la primavera! 
- **Error 3: Desligarte en "No-Dualidad Artificial".** Rehusarse y argumentar filosoficamente el comentario de Mumon ("oh miren gano, pierdo como tontos misticos, aqui no hay error"). Correccion: No puedes emitir esa defensa si aun eres un esclavo egoico por debajo de radar *Stateful*: No uses escudo superior dialectico a favor de tu codicia sin superar su eslabon interior asestado visceral.

## 7. Mini-glosario local

- Arquitectura Stateless vs Stateful: (Sin estado / con registro memoristico). Paradigma ingenieril para comprender la ejecucion transaccional en blanco reluciente, libre frente a las acciones de retencion identitaria narcisista en cada experiencia zen experimentada.
- Makyo (Avaricia Espiritual o Side Effects): La obtencion paralela encubierta del estudiante de logros a favor del adefesio artificial que busca erigir un nombre u estatua publica (monje 2).  
- Enrollar persianas (misu):  Elemento y utileria monacal fisica usada conceptualmente referenciando la eliminacion de obstrucciones sensoriales interponiendose con la claridad vital total o verdad no oculta de toda la naturaleza organica. 

## 8. Referencias

- Fuente primaria: *Mumonkan* (La Puerta Sin Puerta), Caso 26: «Dos Monjes Enrollan las Persianas».
- Fuente secundaria: *The Gateless Gate*, traduccion y comentario de Koun Yamada (Center Publications, 1979), pp. 167–172.
