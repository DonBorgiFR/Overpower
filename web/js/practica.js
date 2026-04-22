/* ═══════════════════════════════════════
   OVERPOWER · PRÁCTICA CONTEMPLATIVA JS
═══════════════════════════════════════ */

(function () {
  'use strict';

  // ─── COLLECT ALL QUESTIONS ───
  let questions = [];
  let currentIdx = 0;
  let isSourceRevealed = false;

  // Timer state
  let timerDuration  = 0;
  let timerRemaining = 0;
  let timerInterval  = null;
  const CIRC = 219.91; // 2π × 35

  function buildQuestions() {
    questions = OP.chapters
      .filter(ch => ch.pregunta)
      .map(ch => ({ ch, text: ch.pregunta }));
    // Shuffle
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }

  // ─── DISPLAY CURRENT QUESTION ───
  function showQuestion(idx, direction) {
    if (!questions.length) return;
    currentIdx   = ((idx % questions.length) + questions.length) % questions.length;
    isSourceRevealed = false;

    const q      = questions[currentIdx];
    const textEl = document.getElementById('practiceQuestion');
    const ctrlEl = document.getElementById('practiceControls');
    const srcEl  = document.getElementById('practiceSource');

    // Transition out
    if (textEl) textEl.classList.remove('visible');
    if (srcEl)  srcEl.classList.remove('visible');
    if (ctrlEl) ctrlEl.classList.remove('visible');

    setTimeout(() => {
      // Render question text
      if (textEl) {
        textEl.innerHTML = formatQuestion(q.text);
        textEl.classList.add('visible');
      }

      // Render source area
      if (srcEl) {
        buildSourceEl(srcEl, q);
        srcEl.classList.add('visible');
      }

      if (ctrlEl) ctrlEl.classList.add('visible');

      // Update dots
      updateDots();

      // Update URL hash
      history.replaceState(null, '', `#q${currentIdx}`);
    }, 280);
  }

  function formatQuestion(text) {
    return text.trim()
      .replace(/\n\n/g, '</p><p>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .split('</p><p>').map(p => `<p>${p}</p>`).join('');
  }

  function buildSourceEl(el, q) {
    const ch = q.ch;
    el.innerHTML = `
      <p class="source-label">Fuente del texto</p>
      <button id="revealSourceBtn" class="source-reveal-btn" aria-label="Revelar capítulo fuente">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        Ver fuente
      </button>
      <div class="source-chapter" id="sourceChapter" aria-live="polite">
        <span class="source-chapter-num">${String(ch.id).padStart(2, '0')}</span>
        <span class="source-chapter-title">${ch.title}</span>
        ${ch.subtitle ? `<span style="font-size:0.75rem;color:var(--text-tertiary)">${ch.subtitle}</span>` : ''}
        <a class="source-chapter-link" href="explorar.html?c=${ch.id}">
          Leer capítulo completo →
        </a>
      </div>
    `;

    // Wire reveal button
    const btn = el.querySelector('#revealSourceBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        btn.style.display = 'none';
        const chEl = el.querySelector('#sourceChapter');
        if (chEl) chEl.classList.add('revealed');
        isSourceRevealed = true;
      });
    }
  }

  // ─── DOTS ───
  function buildDots() {
    const container = document.getElementById('practiceDots');
    if (!container) return;
    const max = Math.min(questions.length, 13);
    container.innerHTML = Array.from({ length: max }, (_, i) => `
      <button class="practice-dot${i === currentIdx ? ' active' : ''}"
              data-dot="${i}" aria-label="Ir a pregunta ${i + 1}">
      </button>
    `).join('');
    container.querySelectorAll('.practice-dot').forEach(dot => {
      dot.addEventListener('click', () => showQuestion(parseInt(dot.dataset.dot)));
    });
  }

  function updateDots() {
    const dots = document.querySelectorAll('.practice-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === currentIdx);
      if (i < currentIdx) d.classList.add('done');
    });
  }

  // ─── TIMER ───
  function startTimer(minutes) {
    clearInterval(timerInterval);
    timerDuration  = minutes * 60;
    timerRemaining = timerDuration;

    const display = document.getElementById('timerDisplay');
    if (display) display.classList.add('active');
    const arc = document.getElementById('timerArc');

    renderTimerFace();

    timerInterval = setInterval(() => {
      timerRemaining--;
      renderTimerFace();
      if (timerRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        onTimerDone();
      }
    }, 1000);
  }

  function renderTimerFace() {
    const min = Math.floor(timerRemaining / 60);
    const sec = timerRemaining % 60;
    const el  = document.getElementById('timerCenterText');
    if (el) el.textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

    const arc = document.getElementById('timerArc');
    if (arc) {
      const pct = timerDuration > 0 ? timerRemaining / timerDuration : 1;
      arc.style.strokeDashoffset = CIRC * (1 - pct);
    }
  }

  function onTimerDone() {
    const display = document.getElementById('timerDisplay');
    if (display) display.classList.add('timer-done-glow');
    const el = document.getElementById('timerCenterText');
    if (el) el.textContent = '✓';
    // Auto-dismiss after 2s
    setTimeout(() => stopTimer(), 2500);
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval  = null;
    timerRemaining = 0;
    const display = document.getElementById('timerDisplay');
    if (display) { display.classList.remove('active', 'timer-done-glow'); }
    // Reset active pill
    document.querySelectorAll('.timer-pill').forEach(p => p.classList.remove('active'));
  }

  // ─── NAV SCROLL (minimal nav) ───
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // ─── INIT ───
  function init() {
    buildQuestions();
    if (!questions.length) {
      document.getElementById('practiceQuestion').textContent = 'Sin preguntas disponibles.';
      return;
    }

    // Check if URL has a specific question
    const hashIdx = parseInt((location.hash || '').replace('#q', ''));
    const startIdx = !isNaN(hashIdx) && hashIdx < questions.length ? hashIdx : 0;

    buildDots();
    showQuestion(startIdx);

    // Wire controls
    const prevBtn   = document.getElementById('prevQuestion');
    const nextBtn   = document.getElementById('nextQuestion');
    const shuffleBtn= document.getElementById('shuffleBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => showQuestion(currentIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showQuestion(currentIdx + 1));
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        shuffleBtn.classList.add('spinning');
        setTimeout(() => shuffleBtn.classList.remove('spinning'), 400);
        const next = Math.floor(Math.random() * questions.length);
        showQuestion(next);
      });
    }

    // Timer pills
    document.querySelectorAll('.timer-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const mins = parseInt(pill.dataset.mins);
        document.querySelectorAll('.timer-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        startTimer(mins);
      });
    });

    // Timer stop
    const stopBtn = document.getElementById('timerStop');
    if (stopBtn) stopBtn.addEventListener('click', stopTimer);

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      if (document.getElementById('srchOverlay')?.classList.contains('open')) return;
      if (e.key === 'ArrowRight' || e.key === 'l') showQuestion(currentIdx + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'j') showQuestion(currentIdx - 1);
    });
  }

  if (typeof OP !== 'undefined') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
