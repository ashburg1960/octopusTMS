/* ============================================================
   SIDEBAR.JS — Inject sidebar + mobile toggle + active state
   ============================================================ */

var SIDEBAR_HTML = `
<div class="sidebar-brand">
  <span class="brand-tag">SDK Documentation</span>
  <a href="index.html" style="text-decoration:none;color:inherit;">
    <span class="brand-name">OctopusTMS</span>
  </a>
  <span class="brand-version">POS SDK v1.0 · UNISWITCH</span>
</div>

<div class="sidebar-search">
  <span class="search-icon">&#128269;</span>
  <input type="text" id="search-input" placeholder="Search docs…" autocomplete="off" aria-label="Search documentation" />
  <div id="search-results"></div>
</div>

<nav class="sidebar-nav" aria-label="Documentation sections">
  <div class="sidebar-section-label">Navigation</div>
  <a href="index.html" class="sidebar-link" data-page="index">
    <span class="link-num">&#8962;</span> Home
  </a>

  <div class="sidebar-section-label">API Reference</div>
  <a href="overview.html" class="sidebar-link" data-page="overview">
    <span class="link-num">1</span> Overview
  </a>
  <a href="setup.html" class="sidebar-link" data-page="setup">
    <span class="link-num">2</span> Requirements &amp; Setup
  </a>
  <a href="initialization.html" class="sidebar-link" data-page="initialization">
    <span class="link-num">3</span> Initialisation
  </a>
  <a href="key-exchange.html" class="sidebar-link" data-page="key-exchange">
    <span class="link-num">4</span> Key Exchange
  </a>
  <a href="payment-flow.html" class="sidebar-link" data-page="payment-flow">
    <span class="link-num">5</span> Payment Flow
  </a>
  <a href="printing.html" class="sidebar-link" data-page="printing">
    <span class="link-num">6</span> Printing
  </a>
  <a href="utility-methods.html" class="sidebar-link" data-page="utility-methods">
    <span class="link-num">7</span> Status &amp; Utility
  </a>
  <a href="sdk-lifecycle.html" class="sidebar-link" data-page="sdk-lifecycle">
    <span class="link-num">8</span> SDK Lifecycle
  </a>
  <a href="errors.html" class="sidebar-link" data-page="errors">
    <span class="link-num">9</span> Error Reference
  </a>
  <a href="integration-example.html" class="sidebar-link" data-page="integration-example">
    <span class="link-num">10</span> Integration Example
  </a>
</nav>

<div class="sidebar-footer">
  <strong>OctopusTMS POS SDK v1.0</strong><br>
  &copy; UNISWITCH &middot; Confidential
</div>
`;

(function () {
  // Inject sidebar HTML
  var sidebarEl = document.getElementById('sidebar');
  if (sidebarEl) {
    sidebarEl.innerHTML = SIDEBAR_HTML;
  }

  // Determine current page and set active link
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var page = path.replace('.html', '');
  if (!page) page = 'index';

  document.querySelectorAll('.sidebar-link').forEach(function (link) {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
    }
  });

  // Mobile menu toggle
  var btn     = document.getElementById('mobile-menu-btn');
  var overlay = document.getElementById('sidebar-overlay');
  var sidebar = document.getElementById('sidebar');

  if (btn) {
    btn.addEventListener('click', function () {
      var isOpen = sidebar.classList.toggle('open');
      overlay.classList.toggle('open', isOpen);
      btn.textContent = isOpen ? '✕' : '☰';
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      if (btn) btn.textContent = '☰';
    });
  }

  // Close sidebar on link click (mobile)
  document.querySelectorAll('.sidebar-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        if (btn) btn.textContent = '☰';
      }
    });
  });
})();
