/* ═══════════════════════════════════════
   OVERPOWER · READER PAGE JS
   Chapter browser + reader logic + tooltips
═══════════════════════════════════════ */

(function () {
  'use strict';

  // ─── STATE ───
  const STORAGE_KEY  = 'op_read';
  const TERMS_KEY    = 'op_terms';
  const LAST_KEY     = 'op_last';
  let readSet     = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  let discoveredTerms = new Set(JSON.parse(localStorage.getItem(TERMS_KEY) || '[]'));
  let currentId   = null;
  let searchQuery = '';;

  // ─── DOM REFS ───
  const sidebarEl      = document.getElementById('sidebar');
  const overlayEl      = document.getElementById('sidebarOverlay');
  const menuBtn        = document.getElementById('menuBtn');
  const searchInput    = document.getElementById('searchInput');
  const levelsContainer= document.getElementById('levelsContainer');
  const readerPanel    = document.getElementById('readerPanel');
  const progressBar    = document.getElementById('progressBar');

  // ─── LEVEL CONFIG ───
  const LEVELS = [
    { id: 1, name: 'Sutras Fundacionales', accent: 'var(--accent-gold)' },
    { id: 2, name: 'Patriarcas y Linaje',  accent: 'var(--accent-sage)' },
    { id: 3, name: 'Obras de Dōgen',       accent: 'var(--accent-ink)'  },
    { id: 4, name: 'Mumonkan · Kōans',     accent: 'var(--accent-ember)'},
  ];

  // ─── BUILD SIDEBAR ───
  function buildSidebar(filter) {
    levelsContainer.innerHTML = '';

    LEVELS.forEach(levelCfg => {
      const chapters = OP.chapters.filter(c => {
        if (c.level !== levelCfg.id) return false;
        if (!filter) return true;
        const q = filter.toLowerCase();
        return c.title.toLowerCase().includes(q) ||
               (c.metaphor || '').toLowerCase().includes(q) ||
               (c.subtitle || '').toLowerCase().includes(q);
      });
      if (chapters.length === 0) return;

      const isOpen = filter ? true : (levelCfg.id === 1);
      const levelDiv = document.createElement('div');
      levelDiv.className = 'sidebar-level' + (isOpen ? ' open' : '');
      levelDiv.dataset.level = levelCfg.id;

      levelDiv.innerHTML = `
        <div class="sidebar-level-header" data-toggle="level">
          <span class="sidebar-level-dot"></span>
          <span class="sidebar-level-name">${levelCfg.name}</span>
          <svg class="sidebar-level-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="sidebar-chapters" id="level${levelCfg.id}Chapters"></div>
      `;
      levelsContainer.appendChild(levelDiv);

      const chapList = levelDiv.querySelector('.sidebar-chapters');
      chapters.forEach(ch => {
        const btn = document.createElement('button');
        btn.className = 'sidebar-chapter-btn' +
          (ch.id === currentId ? ' active' : '') +
          (readSet.has(ch.id) ? ' read' : '');
        btn.dataset.id = ch.id;
        btn.innerHTML = `
          <span class="chapter-btn-num">${String(ch.id).padStart(2,'0')}</span>
          <span class="chapter-btn-content">
            <span class="chapter-btn-title">${ch.title}</span>
            ${ch.metaphor ? `<span class="chapter-btn-metaphor">${ch.metaphor.split('·')[0].trim()}</span>` : ''}
          </span>
          <span class="chapter-read-dot" title="Leído"></span>
        `;
        btn.addEventListener('click', () => openChapter(ch.id));
        chapList.appendChild(btn);
      });

      // Toggle collapse
      levelDiv.querySelector('.sidebar-level-header').addEventListener('click', () => {
        levelDiv.classList.toggle('open');
      });
    });
  }

  // ─── OPEN CHAPTER ───
  function openChapter(id, pushState = true) {
    const ch = OP.chapters.find(c => c.id === id);
    if (!ch) return;
    currentId = id;

    // Mark as read + track terms + last read
    readSet.add(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...readSet]));
    localStorage.setItem(LAST_KEY, id);

    // Discover glossary terms for this chapter
    const chTerms = OP.chapterTerms[id] || [];
    chTerms.forEach(t => discoveredTerms.add(t));
    localStorage.setItem(TERMS_KEY, JSON.stringify([...discoveredTerms]));

    // Update sidebar active state and ensure level is open
    document.querySelectorAll('.sidebar-chapter-btn').forEach(btn => {
      const bid = parseInt(btn.dataset.id);
      if (bid === id) {
        btn.classList.add('active');
        // Find parent level and open it
        const levelDiv = btn.closest('.sidebar-level');
        if (levelDiv) levelDiv.classList.add('open');
      } else {
        btn.classList.remove('active');
      }
      btn.classList.toggle('read', readSet.has(bid));
    });

    // Close mobile sidebar
    if (window.innerWidth <= 900) {
      sidebarEl.classList.remove('open');
      overlayEl.classList.remove('visible');
    }

    // Render
    renderChapter(ch);

    // Update URL without reload
    if (pushState) {
      history.pushState({ chapterId: id }, '', `?c=${id}`);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ─── RENDER CHAPTER ───
  function renderChapter(ch) {
    const levelCfg = LEVELS.find(l => l.id === ch.level);
    const allChaps  = OP.chapters;
    const idx       = allChaps.findIndex(c => c.id === ch.id);
    const prev      = allChaps[idx - 1] || null;
    const next      = allChaps[idx + 1] || null;

    // Level accent color for badge
    const accentMap = {
      1: 'var(--accent-gold)',
      2: 'var(--accent-sage)',
      3: 'var(--accent-ink)',
      4: 'var(--accent-ember)'
    };
    const accent = accentMap[ch.level];

    // Build analogias HTML
    const analogiasHTML = (ch.analogias || []).map(a => `
      <div class="analogy-card">
        <div class="analogy-title">${a.title}</div>
        <div class="analogy-text">${a.text}</div>
        ${a.limit ? `<div class="analogy-limit">${a.limit}</div>` : ''}
      </div>
    `).join('');

    // Prev/Next buttons
    const prevBtn = prev ? `
      <button class="reader-nav-btn prev" data-id="${prev.id}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span>
          <span class="nav-btn-title">Anterior</span>
          <span class="nav-btn-chapter">${prev.title}</span>
        </span>
      </button>` : '<span></span>';

    const nextBtn = next ? `
      <button class="reader-nav-btn next" data-id="${next.id}">
        <span>
          <span class="nav-btn-title">Siguiente</span>
          <span class="nav-btn-chapter">${next.title}</span>
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>` : '<span></span>';

    readerPanel.innerHTML = `
      <div class="reader-chapter" id="chapterContent">

        <div class="reader-breadcrumb" id="readerBreadcrumb">
          <button class="reader-crumb-home" style="background:none;border:none;cursor:pointer;padding:0;color:inherit;font:inherit;font-size:0.72rem;letter-spacing:0.10em;text-transform:uppercase;">Compendio</button>
          <span class="sep">/</span>
          <span>${levelCfg ? levelCfg.name : `Nivel ${ch.level}`}</span>
          <span class="sep">/</span>
          <span>${ch.title}</span>
        </div>

        <div class="reader-chapter-num">
          ${String(ch.id).padStart(2,'0')}
        </div>

        <h1 class="reader-title">${ch.title}</h1>
        ${ch.subtitle ? `<p class="reader-metaphor">${ch.subtitle}</p>` : ''}

        <div class="reader-level-badge">
          <span class="dot" style="background:${accent}"></span>
          Nivel ${ch.level} · ${levelCfg ? levelCfg.name : ''}
          <span style="margin-left:0.4rem">·</span>
          ${ch.school || ''}
        </div>

        <div class="reader-divider"></div>

        <p class="reader-section-label">Apertura</p>
        <div class="reader-body">${formatBody(ch.apertura)}</div>

        ${analogiasHTML ? `
          <div class="reader-divider"></div>
          <p class="reader-section-label">Traducción occidental guiada</p>
          ${analogiasHTML}
        ` : ''}

        ${ch.pregunta ? `
          <div class="reader-question">${formatBody(ch.pregunta)}</div>
        ` : ''}

        <div class="reader-nav-bottom">
          ${prevBtn}
          ${nextBtn}
        </div>

        ${buildRelatedHTML(ch.id)}

      </div>
    `;

    // Wire prev/next buttons
    readerPanel.querySelectorAll('.reader-nav-btn[data-id]').forEach(btn => {
      btn.addEventListener('click', () => openChapter(parseInt(btn.dataset.id)));
    });

    // Wire related chapter cards
    readerPanel.querySelectorAll('.related-card[data-id]').forEach(btn => {
      btn.addEventListener('click', () => openChapter(parseInt(btn.dataset.id)));
    });

    // Wire breadcrumb home button
    const crumbHome = readerPanel.querySelector('.reader-crumb-home');
    if (crumbHome) crumbHome.addEventListener('click', () => showMosaic());

    // Inject glossary tooltips
    const chapterContent = readerPanel.querySelector('.reader-chapter');
    if (chapterContent) injectTooltips(chapterContent);

    // Reading progress bar
    initProgressBar();
  }

  // ─── RELATED CHAPTERS HTML ───
  function buildRelatedHTML(currentId) {
    const currentTerms = new Set(OP.chapterTerms[currentId] || []);
    if (!currentTerms.size) return '';

    const related = OP.chapters
      .filter(ch => ch.id !== currentId)
      .map(ch => {
        const shared = (OP.chapterTerms[ch.id] || []).filter(t => currentTerms.has(t));
        return { ch, shared };
      })
      .filter(r => r.shared.length > 0)
      .sort((a, b) => b.shared.length - a.shared.length)
      .slice(0, 3);

    if (!related.length) return '';

    const cards = related.map(({ ch, shared }) => `
      <div class="related-card" data-id="${ch.id}" tabindex="0" role="button" aria-label="Ir a ${ch.title}">
        <span class="related-card-num">${String(ch.id).padStart(2,'0')}</span>
        <span class="related-card-title">${ch.title}</span>
        <div class="related-shared-terms">
          ${shared.map(t => `<span class="related-term-chip">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');

    return `
      <section class="related-section" aria-label="Capítulos relacionados">
        <p class="related-section-label">También en este camino</p>
        <div class="related-grid">${cards}</div>
      </section>
    `;
  }

  // ─── EMPTY STATE ───
  function renderEmpty() {
    readerPanel.innerHTML = `
      <div class="reader-empty">
        <div class="reader-empty-glyph">禅</div>
        <h2>Elige un capítulo</h2>
        <p>Selecciona cualquier texto del compendio en el panel de la izquierda para comenzar a leer.</p>
      </div>
    `;
  }

  // ─── MOSAIC HOME STATE ───
  function showMosaic(pushState = true) {
    currentId = null;

    // Clear sidebar active
    document.querySelectorAll('.sidebar-chapter-btn').forEach(btn => btn.classList.remove('active'));

    // Build mosaic HTML
    const LEVELS_CFG = [
      { id: 1, name: 'Sutras Fundacionales' },
      { id: 2, name: 'Patriarcas y Linaje' },
      { id: 3, name: 'Obras de Dōgen' },
      { id: 4, name: 'Mumonkan · Kōans' },
    ];

    const groupsHTML = LEVELS_CFG.map(lvl => {
      const chaps = OP.chapters.filter(c => c.level === lvl.id);
      const cards = chaps.map(ch => `
        <button class="mosaic-card ${readSet.has(ch.id) ? 'is-read' : ''}" data-id="${ch.id}" data-level="${ch.level}">
          <span class="mosaic-card-read-dot" ></span>
          <span class="mosaic-card-num">${String(ch.id).padStart(2,'0')}</span>
          <span class="mosaic-card-title">${ch.title}</span>
          ${ch.metaphor ? `<span class="mosaic-card-metaphor">${ch.metaphor.split('·')[0].trim()}</span>` : ''}
        </button>
      `).join('');

      return `
        <div class="mosaic-level-group" data-level="${lvl.id}">
          <div class="mosaic-level-header">
            <span class="mosaic-level-dot"></span>
            <span class="mosaic-level-name">${lvl.name}</span>
            <span class="mosaic-level-count">${chaps.length} texto${chaps.length !== 1 ? 's' : ''}</span>
          </div>
          <div class="mosaic-grid">${cards}</div>
        </div>
      `;
    }).join('');

    readerPanel.innerHTML = `
      <div class="mosaic-home">
        <div class="mosaic-home-header">
          <p class="mosaic-home-eyebrow">Zen Compendio · Visión general</p>
          <h2 class="mosaic-home-title">Todos los textos</h2>
        </div>
        ${groupsHTML}
      </div>
    `;

    // Wire mosaic cards
    readerPanel.querySelectorAll('.mosaic-card[data-id]').forEach(card => {
      card.addEventListener('click', () => openChapter(parseInt(card.dataset.id)));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openChapter(parseInt(card.dataset.id)); });
    });

    if (pushState) history.pushState({ mosaic: true }, '', '?');

    window.scrollTo({ top: 0 });
  }

  // ─── TOOLTIP INJECTION ───
  /**
   * Wraps first occurrence of each glossary term in the rendered chapter
   * with an interactive tooltip span. Processes each element's innerHTML
   * using regex substitution (safe for this controlled content).
   */
  function injectTooltips(container) {
    if (!OP || !OP.glossary) return;

    // Sort terms longest-first to avoid partial matches
    const terms = [...OP.glossary]
      .filter(g => g.term.length > 2) // Skip very short terms like "Mu" for now
      .sort((a, b) => b.term.length - a.term.length);

    // Terms that are safe for short matching (distinctive enough)
    const shortTerms = OP.glossary.filter(g => g.term.length <= 2);

    const targets = container.querySelectorAll('.reader-body p, .analogy-text');
    const injectedTerms = new Set(); // First occurrence only per chapter

    targets.forEach(el => {
      let html = el.innerHTML;

      [...terms, ...shortTerms].forEach(g => {
        if (injectedTerms.has(g.term)) return;
        // Escape regex special chars
        const esc = g.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Match the term as a whole word, not inside HTML tags
        const re = new RegExp(
          `(?<![<\\w])(${esc})(?![\\w>])`,
          'i'
        );
        const newHtml = html.replace(re, (match) => {
          injectedTerms.add(g.term);
          return buildTooltipHTML(g, match);
        });
        if (newHtml !== html) html = newHtml;
      });

      el.innerHTML = html;
    });

    // After injection, fix tooltip positioning for terms near page top
    container.querySelectorAll('.gloss-term').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const rect = el.getBoundingClientRect();
        if (rect.top < 180) {
          el.classList.add('tooltip-below');
        } else {
          el.classList.remove('tooltip-below');
        }
      });
    });
  }

  function buildTooltipHTML(g, matchText) {
    const termSlug = g.term.toLowerCase().replace(/\s+/g, '-');
    return [
      `<span class="gloss-term" tabindex="0" data-gloss="${g.term}">`,
      matchText,
      `<span class="gloss-tooltip" role="tooltip">`,
      `<strong class="gt-name">${g.term}</strong>`,
      g.alt ? `<em class="gt-alt">${g.alt}</em>` : '',
      `<p class="gt-def">${g.def}</p>`,
      `<span class="gt-bridge">${g.bridge}</span>`,
      `<a class="gt-link" href="glosario.html#${termSlug}">Ver en glosario →</a>`,
      `</span>`,
      `</span>`
    ].join('');
  }

  // ─── UTILS ───
  function formatBody(text) {
    // Convert newlines to paragraph breaks
    return text.trim().split(/\n\n+/).map(p => {
      p = p.trim();
      if (!p) return '';
      // If already starts with HTML tag, wrap lightly
      return p.startsWith('<') ? p : `<p>${p}</p>`;
    }).join('');
  }

  // ─── PROGRESS BAR ───
  function initProgressBar() {
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function onScroll() {
    if (!progressBar) return;
    const doc  = document.documentElement;
    const scrollTop  = doc.scrollTop  || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    if (scrollHeight <= 0) { progressBar.style.width = '100%'; return; }
    const pct = Math.min(100, (scrollTop / scrollHeight) * 100);
    progressBar.style.width = pct + '%';
  }

  // ─── MOBILE MENU ───
  if (menuBtn && sidebarEl && overlayEl) {
    menuBtn.addEventListener('click', () => {
      sidebarEl.classList.toggle('open');
      overlayEl.classList.toggle('visible');
    });
    overlayEl.addEventListener('click', () => {
      sidebarEl.classList.remove('open');
      overlayEl.classList.remove('visible');
    });
  }

  // ─── SEARCH ───
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.trim();
      buildSidebar(searchQuery);
    });
  }

  // ─── BROWSER BACK/FORWARD ───
  window.addEventListener('popstate', e => {
    if (e.state && e.state.chapterId) {
      openChapter(e.state.chapterId, false);
    } else {
      showMosaic(false);
    }
  });

  // ─── INIT ───
  function init() {
    buildSidebar('');
    showMosaic(false); // Show mosaic as home instead of empty state

    // Check URL param
    const params = new URLSearchParams(location.search);
    const cParam = parseInt(params.get('c'));
    if (cParam && OP.chapters.find(c => c.id === cParam)) {
      openChapter(cParam, false);
    }
  }

  // Wait for data
  if (typeof OP !== 'undefined') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
