/* ============================================================
   TABS.JS — Kotlin / Java language switcher
   ============================================================ */
(function () {
  function initTabs() {
    document.querySelectorAll('.code-tabs').forEach(function (container) {
      container.querySelectorAll('.tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          // Deactivate all in this container
          container.querySelectorAll('.tab-btn').forEach(function (b) {
            b.classList.remove('active');
          });
          container.querySelectorAll('.tab-content').forEach(function (c) {
            c.classList.remove('active');
          });

          // Activate clicked tab
          btn.classList.add('active');
          var targetId = btn.getAttribute('data-tab');
          var target = container.querySelector('#' + targetId);
          if (target) target.classList.add('active');
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }
})();
