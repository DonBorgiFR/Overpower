---
description: Create a new chapter for the OverPower Zen Compendium.
---

This workflow guides the creation of a new chapter based on the standardized template (v1) and editorial guide (v1).

## Prerequisites

- Read `content/Guia_Editorial_Zen_Occidental.md` for editorial principles.
- Read `content/Glosario_Puente_Zen_Occidental_V1.md` for terminology standards.
- Read `content/Plantilla_Capitulo_Zen_Occidental.md` for the 8-section structure.

## Steps

1. **Determine the Chapter**:
   - For Nivel 4 (Mumonkan): Identify the next case number from `task.md`.
   - For other levels: Select from "Base de Escrituras Budistas Zen de Alto Nivel.md" or ask the user.
   - Determine the file number (next sequential number after existing files).

2. **Research the Source Text**:
   - Extract the core doctrine, historical context, and key figures.
   - Identify the everyday universal metaphor (work, relationships, social dynamics, etc.) that best maps to the koan's teaching. NO IT jargon.
   - The metaphor must illuminate, not replace, the doctrinal content.

3. **Scaffold the Chapter**:
   - Create file: `XX_Capitulo_[Name_Without_Accents].md`
   - H1 format: `# [Title]: [Subtitle with metaphor]` (NO file number prefix)
   - Metadata: plain format, no bold, standard fields.

4. **Write All 8 Sections**:
   - §1 Apertura: 2-4 paragraphs. Why this text matters.
   - §2 Contexto doctrinal e historico: Origin, lineage, key concepts.
   - §3 Traduccion occidental guiada: Min. 2 analogies, each with explicit "El limite de la analogia".
   - §4 Nucleo de practica: Zazen instructions + daily life application + "Que evitar".
   - §5 Pregunta contemplativa de cierre: Open question, speaks directly to reader.
   - §6 Errores comunes de interpretacion: Exactly 3 errors with corrections.
   - §7 Mini-glosario local: 3-5 terms, one-line definitions.
   - §8 Referencias: Primary source + at least 1 secondary source.

5. **Self-Audit**:
   - Run the `zen_editor` skill checklist on the draft.
   - Cross-reference new terms against the Glosario Puente.
   - Verify the "El limite de la analogia" section is present for every metaphor.

6. **Update Tracking**:
   - Add the new chapter to `task.md` with its case number and metaphor.
   - Update the completion percentage.
   - If new glossary terms were introduced, flag them for the next glosario update.

## Quality Gates

- The non-specialist reader understands the central idea in one reading.
- The doctrinal meaning of the source text is preserved.
- Analogies clarify without over-simplifying.
- The chapter passes all items on the zen_editor checklist.
