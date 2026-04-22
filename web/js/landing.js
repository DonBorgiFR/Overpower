/* ═══════════════════════════════════════
   OVERPOWER · LANDING PAGE JS
═══════════════════════════════════════ */

(function () {
  'use strict';

  // ─── NAV: show after scrolling past hero ───
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.75) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
      }
    }, { passive: true });
  }

  // ─── KOAN TABS ───
  const tabs     = document.querySelectorAll('.koan-tab');
  const contents = document.querySelectorAll('.koan-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const koanId = tab.dataset.koan;
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.querySelector(`.koan-content[data-koan="${koanId}"]`);
      if (target) target.classList.add('active');
    });
  });

  // ─── INTERSECTION OBSERVER (reveal) ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ─── SMOOTH SCROLL ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── ROTATING QUOTE in footer ───
  const quotes = [
    "No trates de ser uno con la mente. Sé la mente.",
    "La Vía no tiene dificultad; solo rehúye la preferencia.",
    "Estudiar el camino de Buda es olvidarse de uno mismo.",
    "La luna no se moja; el agua no se rompe.",
    "El mundo es vasto y amplio."
  ];
  const quoteEl = document.querySelector('.footer-quote');
  if (quoteEl) {
    let qi = 0;
    quoteEl.textContent = quotes[qi];
    setInterval(() => {
      quoteEl.style.opacity = '0';
      setTimeout(() => {
        qi = (qi + 1) % quotes.length;
        quoteEl.textContent = quotes[qi];
        quoteEl.style.opacity = '1';
      }, 600);
    }, 6000);
    quoteEl.style.transition = 'opacity 0.6s ease';
  }

})();
