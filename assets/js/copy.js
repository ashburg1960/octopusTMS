/* ============================================================
   COPY.JS — Copy button for code blocks
   ============================================================ */
(function () {
  function initCopy() {
    document.querySelectorAll('.copy-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var pre = btn.closest('pre') || btn.parentElement.querySelector('pre');
        var code = pre ? pre.querySelector('code') : null;
        var text = code ? code.innerText : (pre ? pre.innerText.replace('Copy', '').trim() : '');

        if (!text) return;

        navigator.clipboard.writeText(text).then(function () {
          btn.innerText = '✓ Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.innerText = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        }).catch(function () {
          // Fallback for older browsers
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          btn.innerText = '✓ Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.innerText = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopy);
  } else {
    initCopy();
  }
})();
