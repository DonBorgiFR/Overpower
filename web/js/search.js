/* ═══════════════════════════════════════
   OVERPOWER · GLOBAL SEARCH JS
   Cmd/Ctrl+K command palette — works on all pages
═══════════════════════════════════════ */

(function () {
  'use strict';

  // ─── INJECT MODAL HTML ───
  const MODAL_HTML = `
<div class="srch-overlay" id="srchOverlay" role="dialog" aria-modal="true" aria-label="Búsqueda global">
  <div class="srch-modal" id="srchModal">
    <div class="srch-input-row">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
      <input class="srch-input" id="srchInput" type="text"
             placeholder="Buscar capítulos, términos…"
             autocomplete="off" spellcheck="false" aria-label="Buscar">
      <kbd class="srch-esc" id="srchEsc" title="Cerrar">Esc</kbd>
    </div>
    <div class="srch-results" id="srchResults">
      <div class="srch-hint-state">
        Escribe para buscar — capítulos, términos, conceptos
      </div>
    </div>
    <div class="srch-footer">
      <div class="srch-footer-hint"><kbd>↑↓</kbd>Navegar</div>
      <div class="srch-footer-hint"><kbd>↵</kbd>Abrir</div>
      <div class="srch-footer-hint"><kbd>Esc</kbd>Cerrar</div>
    </div>
  </div>
</div>`;

  // Inject into body when DOM is ready
  function mountModal() {
    if (document.getElementById('srchOverlay')) return; // Already mounted
    document.body.insertAdjacentHTML('beforeend', MODAL_HTML);
    bindEvents();
  }

  // ─── SEARCH ENGINE ───
  function stripHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || '';
  }

  function getExcerpt(text, query) {
    const plain = stripHTML(text);
    const idx   = plain.toLowerCase().indexOf(query.toLowerCase());
    if (idx < 0) return plain.slice(0, 90) + '…';
    const start = Math.max(0, idx - 35);
    const end   = Math.min(plain.length, idx + query.length + 55);
    const excerpt = (start > 0 ? '…' : '') + plain.slice(start, end) + (end < plain.length ? '…' : '');
    // Highlight the match
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    return excerpt.replace(re, '<mark>$1</mark>');
  }

  function scoreChapter(ch, q) {
    let s = 0;
    const title    = (ch.title    || '').toLowerCase();
    const subtitle = (ch.subtitle || '').toLowerCase();
    const metaphor = (ch.metaphor || '').toLowerCase();
    const apertura = stripHTML(ch.apertura || '').toLowerCase();
    const pregunta = stripHTML(ch.pregunta || '').toLowerCase();
    const analogias= (ch.analogias || []).map(a => a.title + ' ' + a.text).join(' ').toLowerCase();

    if (title.includes(q))    s += 10;
    if (subtitle.includes(q)) s += 6;
    if (metaphor.includes(q)) s += 5;
    if (apertura.includes(q)) s += 3;
    if (pregunta.includes(q)) s += 3;
    if (analogias.includes(q))s += 2;
    return s;
  }

  function getChapterExcerpt(ch, q) {
    const fields = [ch.apertura, ch.pregunta, ...(ch.analogias||[]).map(a=>a.text)];
    for (const f of fields) {
      const plain = stripHTML(f || '');
      if (plain.toLowerCase().includes(q)) return getExcerpt(plain, q);
    }
    return (ch.subtitle || ch.metaphor || '').slice(0, 90) + '…';
  }

  function scoreGlossary(g, q) {
    let s = 0;
    if ((g.term  || '').toLowerCase().includes(q)) s += 10;
    if ((g.alt   || '').toLowerCase().includes(q)) s += 8;
    if ((g.def   || '').toLowerCase().includes(q)) s += 4;
    if ((g.bridge|| '').toLowerCase().includes(q)) s += 3;
    return s;
  }

  function search(rawQuery) {
    if (typeof OP === 'undefined') return [];
    const q = rawQuery.trim().toLowerCase();
    if (!q) return [];

    const results = [];

    // Chapters
    for (const ch of OP.chapters) {
      const score = scoreChapter(ch, q);
      if (score > 0) {
        results.push({ type: 'chapter', ch, score, excerpt: getChapterExcerpt(ch, q) });
      }
    }

    // Glossary
    for (const g of OP.glossary) {
      const score = scoreGlossary(g, q);
      if (score > 0) {
        results.push({ type: 'glossary', g, score });
      }
    }

    return results.sort((a, b) => b.score - a.score).slice(0, 10);
  }

  // ─── RENDER RESULTS ───
  let focusedIdx = -1;
  let currentResults = [];

  function renderResults(rawQuery) {
    const resultsEl = document.getElementById('srchResults');
    if (!resultsEl) return;

    if (!rawQuery.trim()) {
      resultsEl.innerHTML = `<div class="srch-hint-state">Escribe para buscar — capítulos, términos, conceptos</div>`;
      currentResults = [];
      focusedIdx = -1;
      return;
    }

    const results = search(rawQuery);
    currentResults = results;
    focusedIdx = results.length > 0 ? 0 : -1;

    if (results.length === 0) {
      resultsEl.innerHTML = `<div class="srch-empty">Sin resultados para "<strong>${rawQuery}</strong>"</div>`;
      return;
    }

    const chapters  = results.filter(r => r.type === 'chapter');
    const glossary  = results.filter(r => r.type === 'glossary');

    const LEVEL_LABELS = { 1:'Sutras', 2:'Patriarcas', 3:'Dōgen', 4:'Mumonkan' };

    let html = '';

    if (chapters.length) {
      html += `<p class="srch-group-label">Capítulos</p>`;
      html += chapters.map((r, i) => `
        <a class="srch-item${i === 0 ? ' srch-focused' : ''}" href="explorar.html?c=${r.ch.id}"
           data-result-index="${i}" data-level="${r.ch.level}" role="option">
          <div class="srch-item-icon">${String(r.ch.id).padStart(2,'0')}</div>
          <div class="srch-item-body">
            <p class="srch-item-title">${r.ch.title}</p>
            <p class="srch-item-excerpt">${r.excerpt}</p>
          </div>
        </a>
      `).join('');
    }

    if (glossary.length) {
      if (chapters.length) html += `<div class="srch-divider"></div>`;
      html += `<p class="srch-group-label">Glosario</p>`;
      const offset = chapters.length;
      html += glossary.map((r, i) => `
        <a class="srch-item srch-glossary${focusedIdx === offset + i ? ' srch-focused' : ''}"
           href="glosario.html#${r.g.term.toLowerCase()}"
           data-result-index="${offset + i}" role="option">
          <div class="srch-item-icon">語</div>
          <div class="srch-item-body">
            <p class="srch-item-title">${r.g.term}${r.g.alt ? ` · ${r.g.alt}` : ''}</p>
            <p class="srch-item-excerpt">${r.g.def}</p>
          </div>
        </a>
      `).join('');
    }

    resultsEl.innerHTML = html;
    updateFocus();
  }

  function updateFocus() {
    const items = document.querySelectorAll('.srch-item');
    items.forEach((el, i) => el.classList.toggle('srch-focused', i === focusedIdx));
    if (focusedIdx >= 0 && items[focusedIdx]) {
      items[focusedIdx].scrollIntoView({ block: 'nearest' });
    }
  }

  // ─── MODAL OPEN / CLOSE ───
  function openSearch() {
    const overlay = document.getElementById('srchOverlay');
    if (!overlay) return;
    overlay.classList.add('open');
    const input = document.getElementById('srchInput');
    if (input) setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    const overlay = document.getElementById('srchOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    const input = document.getElementById('srchInput');
    if (input) { input.value = ''; renderResults(''); }
    focusedIdx = -1;
    currentResults = [];
  }

  function navigateFocused() {
    const items = document.querySelectorAll('.srch-item');
    if (focusedIdx >= 0 && items[focusedIdx]) {
      items[focusedIdx].click();
    }
  }

  // ─── BIND EVENTS ───
  function bindEvents() {
    const overlay = document.getElementById('srchOverlay');
    const input   = document.getElementById('srchInput');
    const escBtn  = document.getElementById('srchEsc');

    if (!overlay || !input) return;

    // Close on overlay click (outside modal)
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeSearch();
    });
    if (escBtn) escBtn.addEventListener('click', closeSearch);

    // Live search on input
    input.addEventListener('input', () => renderResults(input.value));

    // Keyboard navigation inside input
    input.addEventListener('keydown', e => {
      const items = document.querySelectorAll('.srch-item');
      if (e.key === 'Escape') { closeSearch(); e.preventDefault(); return; }
      if (e.key === 'Enter')  { navigateFocused(); e.preventDefault(); return; }
      if (e.key === 'ArrowDown') {
        focusedIdx = Math.min(focusedIdx + 1, items.length - 1);
        updateFocus(); e.preventDefault();
      }
      if (e.key === 'ArrowUp') {
        focusedIdx = Math.max(focusedIdx - 1, 0);
        updateFocus(); e.preventDefault();
      }
    });
  }

  // ─── GLOBAL KEYBOARD SHORTCUT ───
  document.addEventListener('keydown', e => {
    // Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const overlay = document.getElementById('srchOverlay');
      if (overlay && overlay.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    // Also Escape when overlay is open
    if (e.key === 'Escape') {
      const overlay = document.getElementById('srchOverlay');
      if (overlay && overlay.classList.contains('open')) closeSearch();
    }
  });

  // ─── WIRE NAV TRIGGER BUTTON ───
  function wireNavButton() {
    const btn = document.getElementById('searchTrigger');
    if (btn) btn.addEventListener('click', openSearch);
  }

  // ─── INIT ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { mountModal(); wireNavButton(); });
  } else {
    mountModal();
    wireNavButton();
  }

})();
