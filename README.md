# OverPower — Compendio Zen con Capa Occidental

Proyecto editorial para compilar saber budista zen de alto nivel y traducirlo a lenguaje contemporáneo occidental sin perder precisión doctrinal. Las analogías técnicas (ingeniería de software, ciencia cognitiva, arquitectura de sistemas) sirven como *puentes*, no como sustitutos del contenido doctrinal.

## Estado actual (2026-06-09)

| Nivel | Contenido | Estado |
|---|---|---|
| **Nivel 1** — Sutras Fundacionales | 10 capítulos (Fukanzazengi → Sutra de la Plataforma) | ✅ Completo |
| **Nivel 2** — Patriarcas y Linaje | 4 capítulos (Historiografía, Bodhidharma, Huike/Sengcan, Montaña del Este) | ✅ Completo |
| **Nivel 3** — Obras de Dōgen | 3 capítulos (Bendowa, Genjōkōan, Zazengi) | ✅ Completo |
| **Nivel 4** — Mumonkan (Kōans) | 48 capítulos (Caso 1 → Caso 48) | ✅ Completo |
| **Web** | Multi-página: landing + explorar (lector de capítulos) | ✅ Fase 1 completa |

**Total**: 68 archivos (65 capítulos de contenido + 3 archivos editoriales).

## Estructura del repositorio

```
OverPower/
├── _agent/                         # Configuración del agente AI
│   ├── docs/                       # Documentación técnica (NotebookLM, etc.)
│   ├── skills/                     # Skills reutilizables
│   │   └── zen_editor.md           # Auditoría editorial automática
│   └── workflows/                  # Workflows automatizados
│       └── new_chapter.md          # Creación de nuevos capítulos
│
│
├── web/                            # Plataforma web multi-página
│   ├── index.html                  # Landing page (evolucionada)
│   ├── explorar.html               # Lector de capítulos + navegación
│   ├── css/
│   │   ├── tokens.css              # Design system compartido
│   │   ├── landing.css             # Estilos de la landing
│   │   └── reader.css              # Estilos del lector
│   └── js/
│       ├── data.js                 # Capítulos + glosario (13 embebidos)
│       ├── landing.js              # Interacciones landing
│       └── reader.js               # Motor del lector
│
├── content/                        # Carpeta de contenidos del compendio
│   ├── Guia_Editorial_Zen_Occidental.md     # Principios editoriales del proyecto
│   ├── Glosario_Puente_Zen_Occidental_V1.md  # Vocabulario puente zen-occidental
│   ├── Plantilla_Capitulo_Zen_Occidental.md  # Plantilla estándar de 8 secciones
│   ├── 04–13_*.md                  # NIVEL 1: Sutras Fundacionales
│   ├── 14_Historiografía_*.md      # NIVEL 2: Capa historiográfica
│   ├── 15–20_*.md                  # NIVELES 2–3: Patriarcas + Dōgen
│   └── 21–68_*.md                  # NIVEL 4: Mumonkan (Casos 1–48)
│
├── Base de Escrituras*.md          # Corpus fuente original
├── Historiografía*.docx            # Documento de investigación
├── audit_report.md                 # Última auditoría editorial
├── task.md                         # Tracker de tareas activo
└── README.md                       # Este archivo
```

## Índice de capítulos

### Nivel 1 — Sutras Fundacionales
| # | Archivo | Tema |
|---|---|---|
| 04 | `Capitulo_Piloto_Fukanzazengi` | Instrucciones universales para zazen |
| 05 | `Capitulo_Sutra_del_Corazon` | La vacuidad (Prajñāpāramitā) |
| 06 | `Capitulo_Sutra_del_Diamante` | Cortar el apego a las formas |
| 07 | `Capitulo_Xinxin_Ming` | Fe en la Mente / No-preferencia |
| 08 | `Capitulo_Sandokai` | Armonía de la diferencia y la igualdad |
| 09 | `Capitulo_Hokkyo_Zanmai` | Samadhi del Espejo Precioso |
| 10 | `Capitulo_Lankavatara_Sutra` | Arquitectura de la consciencia |
| 11 | `Capitulo_Vimalakirti_Nirdesa` | El silencio del laico |
| 12 | `Capitulo_Sutra_del_Loto` | Medios hábiles (Upāya) |
| 13 | `Capitulo_Sutra_de_la_Plataforma` | Huineng y la mente original |

### Nivel 2 — Patriarcas y Linaje
| # | Archivo | Tema |
|---|---|---|
| 14 | `Historiografía_Nivel_2_Patriarcas` | Blockchain del linaje |
| 17 | `Capitulo_Bodhidharma_El_Muro` | Hard Reset del Zen |
| 18 | `Capitulo_Huike_Y_Sengcan` | Debugging de la dualidad |
| 19 | `Capitulo_Escuela_Montana_del_Este` | Datacenter espiritual |

### Nivel 3 — Obras de Dōgen
| # | Archivo | Tema |
|---|---|---|
| 15 | `Capitulo_Bendowa` | Samadhi del disfrute de sí mismo |
| 16 | `Capitulo_Genjokoan` | El kōan manifiesto |
| 20 | `Capitulo_Zazengi_Manual_Tecnico` | Manual técnico de zazen |

### Nivel 4 — Mumonkan (48/48 completados)
| # | Caso | Eje temático / Metáfora |
|---|---|---|
| 21 | Caso 1: El "Mu" de Joshu | La Puerta Sin Puerta |
| 22 | Caso 2: El Zorro de Hyakujo | Causa, efecto y responsabilidad |
| 23 | Caso 3: El Dedo de Gutei | Autenticidad y simulacro |
| 24 | Caso 4: El Bárbaro sin Barba | Etiquetas y realidad |
| 25 | Caso 5: El Hombre en el Árbol | Dilemas sin salida |
| 26 | Caso 6: El Buda sostiene una flor | La sonrisa del silencio |
| 27 | Caso 7: Lava tus cuencos | La espiritualidad de lo ordinario |
| 28 | Caso 8: Los carros de Keichu | La esencia y sus partes |
| 29 | Caso 9: El fuego de Daizui | La extinción absoluta |
| 30 | Caso 10: Seizei es pobre y está necesitado | La Fortuna Olvidada |
| 31 | Caso 11: Joshu y los ermitaños | La Resonancia del Barro |
| 32 | Caso 12: Zuigan llama a su propio amo | El Espejo y el Eco |
| 33 | Caso 13: Deshan lleva sus cuencos | La anticipación del corazón |
| 34 | Caso 14: Nansen corta el gato | Resolución de Conflictos Irresolubles |
| 35 | Caso 15: Los sesenta golpes de Dongshan | Respuesta Sintácticamente Correcta, Semánticamente Vacía |
| 36 | Caso 16: Yunmen y la campana | La Presencia frente al Hábito |
| 37 | Caso 17: El Maestro Nacional Llama | La Llamada Viva y el Contestador Automático |
| 38 | Caso 18: Tres Libras de Lino | La Materialidad que Corta la Abstracción |
| 39 | Caso 19: La Mente Ordinaria | El Cielo Abierto |
| 40 | Caso 20: El Hombre de Gran Fuerza | La Fuerza Natural |
| 41 | Caso 21: El Palo de Caca de Yunmen | Lo Descartable y la Naturaleza del Buda |
| 42 | Caso 22: El Mástil de Kashyapa | El Fin de la Dependencia |
| 43 | Caso 23: Ni Bien Ni Mal | Más Allá del Juez Interno |
| 44 | Caso 24: El Habla y el Silencio de Fuketsu | Romper el Bucle |
| 45 | Caso 25: El Sueño de Kyozan | El Engaño del Espejo |
| 46 | Caso 26: Dos Monjes Enrollan las Persianas | La Acción Sin Rastro |
| 47 | Caso 27: No es Mente, No es Buda | El Espejismo de las Etiquetas |
| 48 | Caso 28: Ryutan Apaga la Vela | Apagar el Farol Ajeno |
| 49 | Caso 29: Ni viento ni bandera | La Película y la Pantalla |
| 50 | Caso 30: Esta Misma Mente es Buda | El Tesoro en el Bolsillo |
| 51 | Caso 31: Joshu Investiga a la Anciana | Escuchar desde otra orilla |
| 52 | Caso 32: Un Filósofo Interroga a Buda | El Gesto que Cierra la Boca |
| 53 | Caso 33: Ni Mente, Ni Buda | El Medicamento Cambia, la Cura es la Misma |
| 54 | Caso 34: La Sabiduría No Es El Camino | El Erudito Incapaz de Amar |
| 55 | Caso 35: Dos Almas Separadas | El Cuerpo en la Silla, la Mente en la Fuga |
| 56 | Caso 36: Encuentro en el Camino | El Abrazo Mudo o el Guante a la Mandíbula |
| 57 | Caso 37: El Roble del Jardín | Lo Sublime en el Suelo |
| 58 | Caso 38: El Búfalo y la Ventana | El Gigante Pasa, la Cola se Atasca |
| 59 | Caso 39: Yunmen y el Error al Hablar | El Playback Emocional |
| 60 | Caso 40: Patear el Cántaro | Romper el Juego Semántico |
| 61 | Caso 41: Bodhidharma Pacifica la Mente | La Lupa y el Fantasma |
| 62 | Caso 42: La Chica Sale del Samadhi | El Rescate Mundano |
| 63 | Caso 43: El Bastón de Shuzan | La Trampa de la Etiqueta |
| 64 | Caso 44: El Bastón de Basho | Al que Tiene, Se le Dará |
| 65 | Caso 45: ¿Quién es Aquel Otro? | El Dueño de la Franquicia |
| 66 | Caso 46: Avanzar desde el Poste de Cien Pies | Saltar del Pedestal |
| 67 | Caso 47: Las Tres Barreras de Tosotsu | El Crash-Test Existencial |
| 68 | Caso 48: El Único Camino de Kempo | La Autopista en el Aire |

## Principios editoriales (resumen)

1. **Balance 50/50**: Fidelidad doctrinal + accesibilidad occidental.
2. **Anti-exotización**: Sin misticismo orientalista vacío.
3. **Anti-reduccionismo**: El Zen no es productividad ni bienestar como fin.
4. **Metáforas con límite**: Cada analogía técnica incluye una sección explícita de «El límite de la analogía».
5. **Estructura de 8 secciones**: Apertura → Contexto → Traducción → Práctica → Pregunta → Errores → Glosario → Referencias.

## Próximos pasos

- [x] Completar Mumonkan: Casos 17–48 (32 capítulos restantes).
- [ ] Auditoría de normalización: Capítulos Nivel 1 (04–13) pendientes de estandarizar al formato Generación 2.
- [x] Actualizar glosario: Incorporar términos nuevos del Nivel 4 (Shuinjinkou, Manas, Heijoshin, Angya).
- [x] Evolucionar la web: Navegación por capítulos, modo lectura, glosario interactivo.
- [ ] Guía interactiva: NotebookLM para audio/infographic del compendio.

---

<p align="center">
  Construido combinando los últimos avances en IA Generativa. <br>
  <strong>© 2026 Borja Félix Rojas.</strong> Todos los derechos reservados.
</p>

<p align="center">
  <a href="https://ko-fi.com/borjafelixrojas" target="_blank">
    <img src="https://cdn.ko-fi.com/cdn/kofi1.png?v=3" height="36" alt="Buy Me a Coffee at ko-fi.com" />
  </a>
</p>
