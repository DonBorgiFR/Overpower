/* ═══════════════════════════════════════
   OVERPOWER · GLOSSARY PAGE JS
═══════════════════════════════════════ */

(function () {
  'use strict';

  const LEVELS = {
    1: { name: 'Sutras Fundacionales', accent: 'var(--accent-gold)',  color: '1' },
    2: { name: 'Patriarcas y Linaje',  accent: 'var(--accent-sage)',  color: '2' },
    3: { name: 'Obras de Dōgen',       accent: 'var(--accent-ink)',   color: '3' },
    4: { name: 'Mumonkan · Kōans',     accent: 'var(--accent-ember)', color: '4' },
  };

  // ─── STATE ───
  let searchQuery   = '';
  let activeFilter  = 'all'; // 'all' | '1' | '2' | '3' | '4'

  // ─── DOM REFS ───
  const searchInput    = document.getElementById('glosarioSearch');
  const filterContainer= document.getElementById('filterPills');
  const grid           = document.getElementById('glosarioGrid');
  const countEl        = document.getElementById('glosarioCount');

  // ─── BUILD FILTER PILLS ───
  function buildFilters() {
    if (!filterContainer) return;
    filterContainer.innerHTML = '';

    // "Todos" pill
    const allPill = createPill('all', 'Todos', null);
    allPill.classList.add('active');
    filterContainer.appendChild(allPill);

    Object.entries(LEVELS).forEach(([id, cfg]) => {
      filterContainer.appendChild(createPill(id, `Nivel ${id}`, cfg.accent));
    });
  }

  function createPill(value, label, accentColor) {
    const btn = document.createElement('button');
    btn.className = 'filter-pill';
    btn.dataset.filter = value;
    if (accentColor) {
      btn.innerHTML = `<span class="pill-dot" style="background:${accentColor}"></span>${label}`;
    } else {
      btn.textContent = label;
    }
    btn.addEventListener('click', () => {
      activeFilter = value;
      filterContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      renderGrid();
    });
    return btn;
  }

  // ─── RENDER GRID ───
  function renderGrid() {
    if (!grid) return;

    const query = searchQuery.toLowerCase();

    // Filter glossary terms
    const filtered = OP.glossary.filter(g => {
      // Level filter
      if (activeFilter !== 'all') {
        const lvl = parseInt(activeFilter);
        const relatedChapters = OP.chaptersForTerm(g.term);
        const matchesLevel = relatedChapters.some(ch => ch.level === lvl);
        if (!matchesLevel) return false;
      }

      // Search filter
      if (query) {
        const haystack = [g.term, g.alt || '', g.def, g.bridge, g.risk || ''].join(' ').toLowerCase();
        return haystack.includes(query);
      }

      return true;
    });

    // Update count
    if (countEl) countEl.textContent = `${filtered.length} término${filtered.length !== 1 ? 's' : ''}`;

    // Clear and rebuild
    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="glosario-empty">
          <p>Ningún término coincide con tu búsqueda.</p>
        </div>`;
      return;
    }

    filtered.forEach((g, i) => {
      const card = buildTermCard(g, i);
      grid.appendChild(card);
    });
  }

  // ─── BUILD TERM CARD ───
  function buildTermCard(g, i) {
    const card = document.createElement('article');
    card.className = 'gterm-card';
    card.id = g.term.toLowerCase().replace(/\s+/g, '-');

    // Animation delay (stagger)
    card.style.animationDelay = `${i * 0.04}s`;
    card.style.opacity = '0';

    // Build related chapters chips
    const relatedChapters = OP.chaptersForTerm(g.term);
    const chipsHTML = relatedChapters.length > 0 ? `
      <div class="gterm-divider"></div>
      <div class="gterm-chapters">
        <span class="gterm-chapters-label">Aparece en</span>
        ${relatedChapters.map(ch => `
          <a href="explorar.html?c=${ch.id}"
             class="chapter-pill"
             data-level="${ch.level}"
             title="Capítulo ${ch.id}: ${ch.title}">
            ${String(ch.id).padStart(2,'0')} · ${ch.title.split(':')[0].trim()}
          </a>
        `).join('')}
      </div>
    ` : '';

    card.innerHTML = `
      <div class="gterm-header">
        <div>
          <div class="gterm-name">${g.term}</div>
          ${g.alt ? `<span class="gterm-alt">${g.alt}</span>` : ''}
        </div>
      </div>

      <div class="gterm-section">
        <p class="gterm-section-label">Definición</p>
        <p class="gterm-section-text">${g.def}</p>
      </div>

      <div class="gterm-bridge">${g.bridge}</div>

      ${g.risk ? `
        <div class="gterm-risk">
          <span class="gterm-risk-icon">⚠</span>
          <span>${g.risk}</span>
        </div>
      ` : ''}

      ${chipsHTML}
    `;

    // Animate in
    requestAnimationFrame(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.transform = 'translateY(8px)';
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });

    return card;
  }

  // ─── SEARCH ───
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.trim();
      renderGrid();
    });
  }

  // ─── HANDLE URL HASH (deep link to term) ───
  function handleHash() {
    const hash = location.hash.slice(1);
    if (!hash) return;
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.boxShadow = '0 0 0 2px var(--accent-gold)';
        setTimeout(() => { el.style.boxShadow = ''; }, 2500);
      }
    }, 300);
  }

  // ─── STATS BAR ───
  function buildStats() {
    const totalTerms    = OP.glossary.length;
    const totalChapters = OP.chapters.length;
    const statsEl = document.getElementById('glosarioStats');
    if (!statsEl) return;
    statsEl.innerHTML = `
      <span>${totalTerms} términos</span>
      <span class="stat-sep">·</span>
      <span>${totalChapters} capítulos</span>
    `;
  }

  // ─── INIT ───
  function init() {
    buildFilters();
    buildStats();
    renderGrid();
    handleHash();
    window.addEventListener('hashchange', handleHash);
  }

  if (typeof OP !== 'undefined') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
