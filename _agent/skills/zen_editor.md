# Zen Editor Skill (v1)

This skill allows the agent to audit, review, and refine content to ensure it aligns with the editorial standards of the OverPower Zen Compendium.

## Instructions

When this skill is invoked on a text or chapter, follow these steps:

1. **Check Principles (50/50)**:
    - Ensure fidelity to the original doctrine while maintaining Western accessibility.
    - Verify that the text avoids "orientalist mystification" (anti-exotization).
    - Ensure the Zen isn't reduced to mere "productivity" or "well-being" (anti-reductionism).
    - Verify that every technical metaphor includes an explicit "limit of the analogy" section.

2. **Verify Structure (8 Sections)**:
    - Section 1: Apertura (2-4 paragraphs).
    - Section 2: Contexto doctrinal e historico.
    - Section 3: Traduccion occidental guiada (min. 2 analogies + limits).
    - Section 4: Nucleo de practica (zazen + daily life + what to avoid).
    - Section 5: Pregunta contemplativa de cierre (open question, no theory).
    - Section 6: Errores comunes de interpretacion (exactly 3 items).
    - Section 7: Mini-glosario local (3-5 terms, one-line definitions).
    - Section 8: Referencias (primary + at least 1 secondary source).

3. **Verify Format**:
    - H1 does NOT include the file number prefix.
    - Metadata uses plain format (no bold, no decorative headers).
    - Section names match the standard exactly (e.g., "Mini-glosario local", not "del capitulo").
    - Sections are numbered 1–8 without decorative subtitles in the heading.

4. **Verify Terminology**:
    - For every new term (Sanskrit/Chinese/Japanese), check if it follows the format:
        - Term: "[original] ([translation])"
        - Traduccion puente: "[functional meaning]"
        - En practica: "[practical use]"
        - Evitar: "[common misconception]"
    - Cross-reference all terms against the Glosario Puente v1.

5. **Audit Tone**:
    - Ensure the tone is contemporary, sober, and direct.
    - Check for short sentences when introducing complex ideas.
    - Ensure the voice is contemplative, not dogmatic.
    - Metaphors should *serve* the concept, not compete with it.

6. **Final Checklist**:
    - [ ] At least 1 primary citation included.
    - [ ] All technical terms defined.
    - [ ] Western example included without trivializing doctrine.
    - [ ] Each analogy has an explicit "limit" section.
    - [ ] Exactly 3 common interpretation errors documented.
    - [ ] Contemplative closing question present.
    - [ ] No promises of quick results.
    - [ ] Coherence with the project's glossary.
    - [ ] H1 format correct (no file number prefix).
    - [ ] Metadata format correct (plain, no bold).

## Usage

Use this skill to:
- Review draft chapters before finalizing.
- Refine existing content during audit passes.
- Validate new chapters created via the `/new_chapter` workflow.
- Identify chapters that need normalization (Gen 1 → Gen 2 format).
