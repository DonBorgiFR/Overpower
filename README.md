# OverPower — Compendio Zen con Capa Occidental

Proyecto editorial para compilar saber budista zen de alto nivel y traducirlo a lenguaje contemporáneo occidental sin perder precisión doctrinal. Las analogías técnicas (ingeniería de software, ciencia cognitiva, arquitectura de sistemas) sirven como *puentes*, no como sustitutos del contenido doctrinal.

## Estado actual (2026-04-18)

| Nivel | Contenido | Estado |
|---|---|---|
| **Nivel 1** — Sutras Fundacionales | 10 capítulos (Fukanzazengi → Sutra de la Plataforma) | ✅ Completo |
| **Nivel 2** — Patriarcas y Linaje | 4 capítulos (Historiografía, Bodhidharma, Huike/Sengcan, Montaña del Este) | ✅ Completo |
| **Nivel 3** — Obras de Dōgen | 3 capítulos (Bendowa, Genjōkōan, Zazengi) | ✅ Completo |
| **Nivel 4** — Mumonkan (Kōans) | Refactorizando a metáforas humanas (Casos 2-9, 13) | 🔄 En progreso |
| **Web** | Multi-página: landing + explorar (lector de capítulos) | ✅ Fase 1 completa |

**Total**: 36 archivos (32 capítulos de contenido + 4 archivos editoriales).

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
├── 01_Guia_Editorial.md            # Principios editoriales del proyecto
├── 02_Glosario_Puente_V0.md        # Vocabulario puente zen-occidental
├── 03_Plantilla_Capitulo.md        # Plantilla estándar de 8 secciones
│
├── 04–13_*.md                      # NIVEL 1: Sutras Fundacionales
├── 14_Historiografía_*.md          # NIVEL 2: Capa historiográfica
├── 15–20_*.md                      # NIVELES 2–3: Patriarcas + Dōgen
├── 21–36_*.md                      # NIVEL 4: Mumonkan (Casos 1–16)
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

### Nivel 4 — Mumonkan (16/48 completados)
| # | Caso | Metáfora técnica |
|---|---|---|
| 21 | Caso 1: El Mu de Joshu | Systematic Logic Jammer / Null |
| 22 | Caso 2: El Zorro de Hyakujo | El Arquitecto y la Gravedad (Causalidad) |
| 23 | Caso 3: El Dedo de Gutei | El Loro y la Palabra (Imitación vs Realidad) |
| 24 | Caso 4: El Bárbaro sin Barba | El Espejo y el Prejuicio (Etiquetas) |
| 25 | Caso 5: El Hombre en el Árbol | El Dilema de la Integridad (Sin salida) |
| 26 | Caso 6: La Flor de Buda | La Sonrisa del Silencio (Complicidad) |
| 27 | Caso 7: Lava tus Cuencos | La Espiritualidad de lo Ordinario |
| 28 | Caso 8: Los Carros de Keichū | El Violín y la Música (Esencia y Partes) |
| 29 | Caso 9: El Fuego de Daizui | El Incendio de la Biblioteca (Extinción) |
| 30 | Caso 10: Seizei es Pobre | Native Features |
| 31 | Caso 11: Joshu y los Ermitaños | Deep Packet Inspection |
| 32 | Caso 12: Zuigan llama a su Amo | Self-referential Loop |
| 33 | Caso 13: Deshan y los Cuencos | La Impaciencia y la Mesa (Cierre de Ciclos) |
| 34 | Caso 14: Nansen corta el Gato | Split-brain / Deadlock |
| 35 | Caso 15: Dongshan, 60 Golpes | Semántica vs. Sintaxis |
| 36 | Caso 16: Yunmen y la Campana | Event Handler Automatizado |

## Principios editoriales (resumen)

1. **Balance 50/50**: Fidelidad doctrinal + accesibilidad occidental.
2. **Anti-exotización**: Sin misticismo orientalista vacío.
3. **Anti-reduccionismo**: El Zen no es productividad ni bienestar como fin.
4. **Metáforas con límite**: Cada analogía técnica incluye una sección explícita de «El límite de la analogía».
5. **Estructura de 8 secciones**: Apertura → Contexto → Traducción → Práctica → Pregunta → Errores → Glosario → Referencias.

## Próximos pasos

- [ ] Completar Mumonkan: Casos 17–48 (32 capítulos restantes).
- [ ] Auditoría de normalización: Capítulos Nivel 1 (04–13) pendientes de estandarizar al formato Generación 2.
- [ ] Actualizar glosario: Incorporar términos nuevos del Nivel 4 (Shuinjinkou, Manas, Heijoshin, Angya).
- [ ] Evolucionar la web: Navegación por capítulos, modo lectura, glosario interactivo.
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
