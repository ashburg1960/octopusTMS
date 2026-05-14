/* ============================================================
   APP.JS — Main initialisation & scroll-spy
   ============================================================ */
(function () {
  // ── Smooth scroll for internal anchor links ──────────────────
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', link.getAttribute('href'));
    }
  });

  // ── Scroll-spy: highlight sidebar link for current section ───
  function scrollSpy() {
    var sections = document.querySelectorAll('[data-section]');
    if (sections.length === 0) return;

    var current = '';
    sections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= 120) {
        current = sec.getAttribute('data-section');
      }
    });

    document.querySelectorAll('.sidebar-link[data-section]').forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-section') === current);
    });
  }

  window.addEventListener('scroll', scrollSpy, { passive: true });
})();
