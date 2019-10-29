"use strict";

function supportsStaticImport() {
  const script = document.createElement('script');
  return 'noModule' in script; 
}

function supportsDynamicImport() {
  try {
    new Function('import("")');
    return true;
  }
  catch (err) {
    return false;
  }
}

if (supportsStaticImport()) {
  document.write('<link rel="preload" href="esm/index.es.js" as="script">');
  document.write('<script type="module" src="esm/index.es.js"><\/script>');
} else {
  document.write('<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=default"><\/script>');
  if (typeof Promise === 'undefined') {
    document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.7.0/bluebird.min.js"><\/script>');
  }
  if (typeof fetch === 'undefined') {
    document.write('<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0.0/dist/fetch.umd.min.js"><\/script>');
  }
  document.write('<script src="https://unpkg.com/systemjs@6.0.0/dist/s.min.js"><\/script>');
  document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.1.2/extras/named-register.min.js"><\/script>');
  document.write('<link rel="preload" href="system/index.js" as="script">');
  window.onload = function (e) {
    System.import("/system/index.js");
  };
}
