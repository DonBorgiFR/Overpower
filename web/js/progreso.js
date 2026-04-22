/* ═══════════════════════════════════════
   OVERPOWER · PROGRESS DASHBOARD JS
═══════════════════════════════════════ */

(function () {
  'use strict';

  // ─── READ STORAGE ───
  const readSet        = new Set(JSON.parse(localStorage.getItem('op_read')  || '[]'));
  const discoveredTerms= new Set(JSON.parse(localStorage.getItem('op_terms') || '[]'));
  const lastReadId     = parseInt(localStorage.getItem('op_last') || '0') || null;

  const LEVELS = [
    { id: 1, name: 'Sutras Fundacionales', accent: 'var(--accent-gold)' },
    { id: 2, name: 'Patriarcas y Linaje',  accent: 'var(--accent-sage)' },
    { id: 3, name: 'Obras de Dōgen',       accent: 'var(--accent-ink)'  },
    { id: 4, name: 'Mumonkan · Kōans',     accent: 'var(--accent-ember)'},
  ];

  // ─── GLOBAL STATS ───
  function renderGlobalStats() {
    const total     = OP.chapters.length;
    const read      = [...readSet].filter(id => OP.chapters.find(c => c.id === id)).length;
    const pctGlobal = Math.round((read / total) * 100);

    setEl('statTotal',  total);
    setEl('statRead',   read);
    setEl('statPct',    pctGlobal + '%');
    setEl('statTerms',  discoveredTerms.size);
  }

  // ─── LEVEL RINGS ───
  function renderRings() {
    const container = document.getElementById('ringsGrid');
    if (!container) return;
    container.innerHTML = '';

    const CIRC = 282.74; // 2π × 45

    LEVELS.forEach(lvl => {
      const chapters = OP.chapters.filter(c => c.level === lvl.id);
      const total    = chapters.length;
      const done     = chapters.filter(c => readSet.has(c.id)).length;
      const pct      = total > 0 ? done / total : 0;
      const pctLabel = Math.round(pct * 100);

      const card = document.createElement('a');
      card.href  = `explorar.html?level=${lvl.id}`;
      card.className = 'ring-card';
      card.dataset.level = lvl.id;

      card.innerHTML = `
        <div class="ring-wrap">
          <svg class="progress-ring" width="110" height="110" viewBox="0 0 110 110" aria-hidden="true">
            <circle class="ring-track" cx="55" cy="55" r="45"/>
            <circle class="ring-fill"  cx="55" cy="55" r="45"
              style="stroke-dashoffset:${CIRC}"
              data-offset="${CIRC * (1 - pct)}"/>
          </svg>
          <div class="ring-center">
            <span class="ring-pct" aria-label="${pctLabel}% completado">${pctLabel}%</span>
            <span class="ring-done">${done}/${total}</span>
          </div>
        </div>
        <p class="ring-level-name">Nivel ${lvl.id}</p>
        <p class="ring-chapters-count">${lvl.name}</p>
      `;

      container.appendChild(card);
    });

    // Animate rings AFTER DOM insert
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        container.querySelectorAll('.ring-fill').forEach(circle => {
          const target = parseFloat(circle.dataset.offset);
          circle.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          circle.style.strokeDashoffset = target;
        });
      });
    });
  }

  // ─── VOCABULARY METER ───
  function renderVocabMeter() {
    const total     = OP.glossary.length;
    const found     = discoveredTerms.size;
    const pct       = total > 0 ? (found / total) * 100 : 0;

    setEl('vocabFound', found);
    setEl('vocabTotal', total);

    const bar = document.getElementById('vocabBar');
    if (bar) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bar.style.width = pct + '%';
        });
      });
    }

    // Show discovered tags
    const tagsEl = document.getElementById('vocabTags');
    if (!tagsEl) return;

    if (discoveredTerms.size === 0) {
      tagsEl.innerHTML = `<p class="vocab-undiscovered">
        Comienza a leer capítulos y los términos que encuentres aparecerán aquí.
      </p>`;
      return;
    }

    // Sort alphabetically and show tags
    const tags = [...discoveredTerms].sort().map(termKey => {
      const g = OP.glossaryEntry(termKey);
      if (!g) return '';
      return `<a href="glosario.html#${termKey.toLowerCase()}" class="vocab-term-tag" title="${g.def}">${termKey}</a>`;
    }).join('');

    const undiscovered = OP.glossary.filter(g => !discoveredTerms.has(g.term));
    const missingText  = undiscovered.length > 0
      ? `<p class="vocab-undiscovered">Quedan ${undiscovered.length} término${undiscovered.length !== 1 ? 's' : ''} por descubrir.</p>`
      : `<p class="vocab-undiscovered" style="color:var(--accent-gold)">¡Glosario completo! Has descubierto todos los términos.</p>`;

    tagsEl.innerHTML = tags + missingText;
  }

  // ─── RECENTLY READ ───
  function renderRecentlyRead() {
    const container = document.getElementById('recentlyGrid');
    if (!container) return;

    // Get max 6 recently read chapters, preserving order from data (not time-based since we don't track timestamps)
    const readChapters = OP.chapters
      .filter(c => readSet.has(c.id))
      .slice(-6)
      .reverse();

    if (readChapters.length === 0) {
      container.innerHTML = `
        <div class="progreso-empty">
          <h3>Nada leído todavía</h3>
          <p>Cuando leas tu primer capítulo, aparecerá aquí.</p>
        </div>`;
      return;
    }

    container.innerHTML = readChapters.map(ch => `
      <a href="explorar.html?c=${ch.id}" class="recently-card" data-level="${ch.level}">
        <span class="recently-num">Capítulo ${String(ch.id).padStart(2,'0')}</span>
        <span class="recently-title">${ch.title}</span>
        ${ch.metaphor ? `<span class="recently-metaphor">${ch.metaphor.split('·')[0].trim()}</span>` : ''}
      </a>
    `).join('');
  }

  // ─── CONTINUE BANNER ───
  function renderContinue() {
    const banner = document.getElementById('continueBanner');
    if (!banner) return;

    if (!lastReadId) {
      banner.innerHTML = `
        <a href="explorar.html" class="continue-card">
          <div>
            <p class="continue-label">Empieza aquí</p>
            <p class="continue-title">Abre el compendio</p>
            <p class="continue-metaphor">Elige tu primer texto</p>
          </div>
          <svg class="continue-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>`;
      return;
    }

    const ch   = OP.chapters.find(c => c.id === lastReadId);
    if (!ch) return;

    const allChaps  = OP.chapters;
    const idx       = allChaps.findIndex(c => c.id === ch.id);
    const nextCh    = allChaps[idx + 1];
    const target    = nextCh && !readSet.has(nextCh.id) ? nextCh : ch;
    const action    = target.id === ch.id ? 'Continúa leyendo' : 'Siguiente capítulo';

    banner.innerHTML = `
      <a href="explorar.html?c=${target.id}" class="continue-card">
        <div>
          <p class="continue-label">${action}</p>
          <p class="continue-title">${target.title}</p>
          ${target.metaphor ? `<p class="continue-metaphor">${target.metaphor.split('·')[0].trim()}</p>` : ''}
        </div>
        <svg class="continue-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>`;
  }

  // ─── UTIL ───
  function setEl(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // ─── INIT ───
  function init() {
    renderGlobalStats();
    renderRings();
    renderVocabMeter();
    renderRecentlyRead();
    renderContinue();
  }

  if (typeof OP !== 'undefined') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
