const fs = require('fs')
const glob = require('glob')

module.exports = function () {
  return new Promise(function (resolve, reject) {
    glob("src/**/*.compiled.svelte", undefined, async (err, files) => {
      if (err) return reject(err)
      files.forEach(f => {
        if (fs.existsSync(f)) {
          fs.unlinkSync(f)
        }
      })
      return resolve()
    })
  })
} 