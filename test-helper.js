const svelte = require('svelte/compiler');
const fs = require('fs')

const styleRegex = /<style[^>]*>[\S\s]*?<\/style>/g;

const process = (options = {}) => async (filename) => {
  const { preprocess, debug, compilerOptions, noStyles } = options;
  const source = fs.readFileSync(filename).toString()

  // strip out <style> tags to prevent errors with node-sass.
  const normalized = noStyles !== false ? source.replace(styleRegex, '') : source;
  
  let preprocessed;

  if (preprocess) {
    try {
      const { code, dependencies } = await svelte
        .preprocess(normalized, preprocess || {}, {
          filename
        })
      preprocessed = code
    } catch (e) {
      console.error(e)
    }
  } else {
    preprocessed = source;
  }

  const compiled = svelte.compile(preprocessed, {
    filename,
    css: false,
    // Allow tests to set component props.
    accessors: true,
    // Debugging and runtime checks
    dev: true,
    // Emit CommonJS that Jest can understand.
    format: 'cjs',
    ...compilerOptions
  });

  // Fixes the '_Sample.default is not a constructor' error when importing in Jest.
  const esInterop =
    'Object.defineProperty(exports, "__esModule", { value: true });';

  const code = compiled.js.code + esInterop;

  if (debug) {
    console.log(code);
  }

  return {
    code,
    map: compiled.js.map
  };
};



export default function (filename) {
  return new Promise(function (resolve, reject) {
    process({
      preprocess: require('svelte-preprocess')({
        typescript: {
          transpileOnly: true
        }
      })
    })(filename)
      .then(x => {
        const component = eval(x.code)
        return resolve(component.default)
      })
      .catch(e => reject(e))
  })
}