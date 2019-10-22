const X = require('browser-es-module-loader')

var loader = new X();

// relative path or URL syntax is necessary as plain resolution throws
loader.import('./index.js')