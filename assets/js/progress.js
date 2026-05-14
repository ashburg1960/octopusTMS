/* ============================================================
   PROGRESS.JS — Scroll progress indicator
   ============================================================ */
(function () {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  function update() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
