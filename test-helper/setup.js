const svelte = require('svelte/compiler');
const fs = require('fs')
const glob = require('glob')

// Update your preprocess config
const preprocess = require('svelte-preprocess')({
  typescript: {
    transpileOnly: true
  }
})

const styleRegex = /<style[^>]*>[\S\s]*?<\/style>/g;

const process = (options = {}) => async (filename) => {
  const { preprocess, noStyles } = options;
  const source = fs.readFileSync(filename).toString()

  // strip out <style> tags to prevent errors with node-sass.
  const normalized = noStyles !== false ? source.replace(styleRegex, '') : source;
  
  let preprocessed;

  if (preprocess) {
    try {
      const { code } = await svelte
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

  return {
    code: preprocessed
  };
};

module.exports = function () {
  return new Promise(function (resolveMain, rejectMain) {
    glob("src/**/*.svelte", undefined, async (err, files) => {
      if (err) {
        return rejectMain()
      }

      try {
        const promises = files.map(f => new Promise((resolve, reject) => {
          process({
            preprocess
          })(f)
          .then(x => resolve({ ...x, filename: f}))
          .catch(e => reject(e))
        }))

        const codes = await Promise.all(promises)
        codes.forEach(({ code, filename }) => {
          fs.writeFileSync(filename.replace('.svelte', '.compiled.svelte'), code)
        });
        resolveMain()
      } catch (e) {
        console.error(e)
        rejectMain()
      }
    })
  })
} 
