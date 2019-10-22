import { DEFAULT_EXTENSIONS } from '@babel/core';
import copy from 'rollup-plugin-copy-glob';
import babel from "rollup-plugin-babel";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import autoPreprocess from 'svelte-preprocess'

const production = true //!process.env.ROLLUP_WATCH;

export default {
  input: "src/loader.ts",
  output: {
    dir: 'public',
    sourcemap: true,
    format: 'esm',
    name: "app",
  },
  plugins: [
    copy([
      { files: 'src/*.html', dest: 'public' }
    ]),

    // babel({
    //   // babelrc: false,
    //   // exclude: 'node_modules/**',
    //   extensions: [
    //     ...DEFAULT_EXTENSIONS,
    //     // '.ts',
    //     // '.tsx'
    //   ],
    //   runtimeHelpers: true,
    //   "presets": [
    //     [
    //       "@babel/preset-env",
    //       {
    //         "targets": {
    //           "ie": "11"
    //         },
    //         "useBuiltIns": "usage",
    //         "corejs": 3
    //       }
    //     ]
    //   ],
    //   "plugins": [
    //     // "@babel/transform-async-to-generator",
    //     "@babel/transform-arrow-functions",
    //     // "@babel/transform-modules-commonjs"
    //   ],
    // }),

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
        importee === "svelte" || importee.startsWith("svelte/")
    }),
    commonjs(),
    typescript(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    // production && terser()
  ],
  watch: {
    clearScreen: false
  }
};