/* ============================================================
   SEARCH.JS — Live documentation search
   ============================================================ */

var SEARCH_INDEX = [
  { title: 'Overview', page: 'overview.html', keywords: 'overview octopustms pos sdk android library partner applications card payments uniswitch pem terminals hardware emv processing key management printer' },
  { title: 'Multi-device Support', page: 'overview.html#multi-device', keywords: 'horizonpay topwise oem device support emv contactless pin pad thermal printer' },
  { title: 'Key Capabilities', page: 'overview.html#capabilities', keywords: 'startpayment automatic oem detection key provisioning tms bitmap bitmapbuilder receipt' },
  { title: 'Requirements & Setup', page: 'setup.html', keywords: 'requirements setup gradle dependency aar libs okhttp gson bouncycastle timber' },
  { title: 'Gradle Dependency', page: 'setup.html#gradle', keywords: 'build.gradle gradle kts dependencies implementation aar libs module okhttp gson bouncycastle' },
  { title: 'ViewBinding', page: 'setup.html#viewbinding', keywords: 'viewbinding view binding mandatory build features android' },
  { title: 'ConstraintLayout', page: 'setup.html#constraintlayout', keywords: 'constraintlayout constraint layout inflateexception crash mandatory' },
  { title: 'AndroidManifest Permissions', page: 'setup.html#permissions', keywords: 'androidmanifest uses-permission internet network state location fine coarse' },
  { title: 'Initialisation', page: 'initialization.html', keywords: 'initialisation initialize getInstance singleton thread safe context applicationcontext config' },
  { title: 'getInstance()', page: 'initialization.html#getinstance', keywords: 'getinstance appname enablelogs buildconfig debug config' },
  { title: 'initialize()', page: 'initialization.html#initialize', keywords: 'initialize initresult success failed unsupporteddevice detectedoem reason callback' },
  { title: 'Key Exchange', page: 'key-exchange.html', keywords: 'key exchange downloadandinjectkeys terminal master keys hardware serial number pin pad security module uniswitch tms' },
  { title: 'downloadAndInjectKeys()', page: 'key-exchange.html#download', keywords: 'downloadandinjectkeys success terminalid errormessage callback startup once per day' },
  { title: 'Payment Flow', page: 'payment-flow.html', keywords: 'payment flow startpayment activity amount amountincents merchantname listener dialogfragment' },
  { title: 'startPayment()', page: 'payment-flow.html#startpayment', keywords: 'startpayment activity amountincents merchantname paymentresultlistener main thread' },
  { title: 'PaymentResultListener', page: 'payment-flow.html#listener', keywords: 'paymentresultlistener onapproved ondeclined oncancelled onerror interface callback' },
  { title: 'TransactionResult', page: 'payment-flow.html#result', keywords: 'transactionresult transactionref terminalid maskedpan cardtype responsecode responsemessage rrn' },
  { title: 'Printing', page: 'printing.html', keywords: 'printing print bitmap thermal receipt printer' },
  { title: 'print()', page: 'printing.html#print', keywords: 'print bitmap success message callback toast' },
  { title: 'BitmapBuilder', page: 'printing.html#bitmapbuilder', keywords: 'bitmapbuilder paperwidth addlogo addcentered addleft addrow addseparator addgap addstatusbanner build' },
  { title: 'buildReceiptBitmap()', page: 'printing.html#autobuild', keywords: 'buildreceiptbitmap auto generated receipt sdk automatic' },
  { title: 'Status & Utility Methods', page: 'utility-methods.html', keywords: 'utility methods status isservicealive getdetectedoem isprinterready canceltransaction' },
  { title: 'isServiceAlive()', page: 'utility-methods.html#alive', keywords: 'isservicealive boolean hardware service connected' },
  { title: 'getDetectedOEM()', page: 'utility-methods.html#oem', keywords: 'getdetectedoem oem detected enum value' },
  { title: 'isPrinterReady()', page: 'utility-methods.html#printer', keywords: 'isprinterready boolean printer ready' },
  { title: 'cancelTransaction()', page: 'utility-methods.html#cancel', keywords: 'canceltransaction unit requests cancellation current transaction' },
  { title: 'SDK Lifecycle', page: 'sdk-lifecycle.html', keywords: 'lifecycle destroy singleton null activity ondestroy memory management' },
  { title: 'destroy()', page: 'sdk-lifecycle.html#destroy', keywords: 'destroy ondestroy super singleton null pos' },
  { title: 'Error Reference', page: 'errors.html', keywords: 'error reference illegalstateexception inflateexception unsupporteddevice print failed overheat paper' },
  { title: 'IllegalStateException', page: 'errors.html#illegal-state', keywords: 'illegalstateexception sdk not initialized getinstance context config' },
  { title: 'InflateException', page: 'errors.html#inflate', keywords: 'inflateexception constraintlayout missing dependency' },
  { title: 'UnsupportedDevice', page: 'errors.html#unsupported', keywords: 'unsupporteddevice oem not recognised supported device' },
  { title: 'Integration Example', page: 'integration-example.html', keywords: 'complete integration example mainactivity fragmentactivity full end-to-end kotlin java' },
];

(function () {
  function initSearch() {
    var input   = document.getElementById('search-input');
    var results = document.getElementById('search-results');
    if (!input || !results) return;

    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      results.innerHTML = '';

      if (q.length < 2) {
        results.classList.remove('open');
        return;
      }

      var matches = SEARCH_INDEX.filter(function (item) {
        return item.title.toLowerCase().includes(q) || item.keywords.includes(q);
      }).slice(0, 8);

      if (matches.length === 0) {
        results.innerHTML = '<div class="search-result-item"><span class="result-title">No results for "' + q + '"</span></div>';
        results.classList.add('open');
        return;
      }

      matches.forEach(function (item) {
        var a = document.createElement('a');
        a.href = item.page;
        a.className = 'search-result-item';
        a.innerHTML = '<span class="result-title">' + item.title + '</span>' +
                      '<span class="result-page">' + item.page.split('#')[0] + '</span>';
        results.appendChild(a);
      });

      results.classList.add('open');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!input.contains(e.target) && !results.contains(e.target)) {
        results.classList.remove('open');
      }
    });

    // Keyboard nav
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        results.classList.remove('open');
        input.blur();
      }
    });
  }

  // Re-run after sidebar.js injects the DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(initSearch, 50);
    });
  } else {
    setTimeout(initSearch, 50);
  }
})();
