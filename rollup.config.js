import copy from 'rollup-plugin-copy-glob';
import babel from "rollup-plugin-babel";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import scssModules from 'rollup-plugin-scss';
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import autoPreprocess from 'svelte-preprocess';
import alias from 'rollup-plugin-alias';
import fs from 'fs';
import postcss from 'postcss'
const babelConfig = require('./babel.config');

const production = process.env.NODE_ENV === 'production' || process.env.ROLLUP_WATCH === undefined;

const postCssTransformer = async (input) => {
  const postCssOpts = {
    from: input.filename,
    to: input.filename
  }
  const result = await postcss(require('./postcss.config')).process(input.content, postCssOpts)
  return {
    code: result.css.toString()
  }
}

const getPlugins = (withCopy = false) => [
  withCopy && copy([
    { files: 'src/*.html', dest: 'public' },
    { files: 'src/loader.js', dest: 'public' }
  ], { verbose: !production, watch: !production }),

  scssModules({
    output: async (styles, styleNodes) => {
      const filename = 'public/main.css'
      const { code } = await postCssTransformer({ filename, content: styles } )
      withCopy && fs.writeFileSync(filename, code)
    },
    include: ['**/*.scss', '**/*.sass'],
    exclude: [],
    includePaths: [ 'node_modules/' ]
  }),

  typescript(),

  svelte({
    legacy: production,
    dev: !production,
    preprocess: {
      style: postCssTransformer
    },
    css: css => {
      css.write('public/components.css');
    },
    preprocess: autoPreprocess()
  }),

  babel({
    babelrc: false,
    ...babelConfig.default,
    extensions: ['.js', '.mjs', '.html', '.svelte', '.ts'],
    exclude: [
      'node_modules/core-js/**',
      'node_modules/regenerator-runtime/**',
      // 'node_modules/page/**', // Fix: https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
    ]
  }),

  // Fix: https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
  // Use this just in case namedExports in rollup-plugin-commonjs is not working
  alias({
    resolve: ['.jsx', '.js'],
    entries:[
      { find:'search-params', replacement: 'node_modules/search-params/dist/es/index.js' }
    ]
  }),

  resolve({
    browser: true,
    mainFields: ['module', 'main', 'jsnext:main'],
    dedupe: importee =>
      importee === "svelte" ||
      importee.startsWith("svelte/") ||
      importee === "core-js" ||
      importee.startsWith("core-js/")
  }),

  commonjs({
    include: 'node_modules/**',
    extensions: ['.js', '.ts', '.svelte'],
    namedExports: {} // Fix: https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
  }),

  production && terser(),

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
      format: 'esm',
    },
    plugins: getPlugins(true),
    watch: {
      clearScreen: false
    }
  }
]

if (production) {
  outputs.push({
    input: 'src/index.ts',
    output: {
      sourcemap: true,
      dir: 'public/system',
      format: 'system',
      strict: false
    },
    plugins: getPlugins(),
    watch: {
      clearScreen: false
    },
  })
}

export default outputs;
