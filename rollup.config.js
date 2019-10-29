import copy from 'rollup-plugin-copy-glob';
import babel from "rollup-plugin-babel";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import sassModules from 'rollup-plugin-sass-modules';
import typescript from "rollup-plugin-typescript2";
import autoPreprocess from 'svelte-preprocess'
const babelConfig = require('./babel.config');

const production = process.env.NODE_ENV === 'production' || process.env.ROLLUP_WATCH === undefined;

const getPlugins = (withCopy = false) => [
  withCopy && copy([
    { files: 'src/*.html', dest: 'public' }
  ], { verbose: !production, watch: !production }),

  babel({
    babelrc: false,
    ...babelConfig.default,
    "exclude": [ 'node_modules/**' ],
    "include": [ 'node_modules/svelte/**' ],
  }),

  sassModules({
    insert: true,
    include: ['**/*.scss', '**/*.sass'],
    exclude: [],
    options: {
      includePaths: [ 'node_modules/' ]
    }
  }),

  svelte({
    legacy: production,
    // enable run-time checks when not in production
    dev: !production,
    // we'll extract any component CSS out into
    // a separate file — better for performance
    css: css => {
      css.write("public/bundle.css");
    },
    preprocess: autoPreprocess()
  }),

  // If you have external dependencies installed from
  // npm, you'll most likely need these plugins. In
  // some cases you'll need additional configuration —
  // consult the documentation for details:
  // https://github.com/rollup/rollup-plugin-commonjs
  resolve({
    browser: true,
    dedupe: importee =>
      importee === "svelte" || importee.startsWith("svelte/") || importee.startsWith("core-js") || importee.startsWith("core-js/")
  }),
  commonjs({ extensions: ['.js', '.ts'] }),
  typescript(),

  // Watch the `public` directory and refresh the
  // browser on changes when not in production
  !production && withCopy && livereload("public")
]

const outputs = [
  {
    input: 'src/index.ts',
    output: {
      sourcemap: true,
      dir: 'public/esm',
      format: 'esm', // 'esm' is for browser that support import()
    },
    plugins: getPlugins(true),
    watch: {
      clearScreen: false
    }
  }
]

production && outputs.push({
  input: 'src/index.ts',
  output: {
    sourcemap: true,
    dir: 'public/system',
    format: 'system'
  },
  plugins: getPlugins(),
  watch: {
    clearScreen: false
  }
})

export default outputs;
