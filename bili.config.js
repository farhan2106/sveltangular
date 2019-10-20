import { preprocess } from "svelte-ts-preprocess";

module.exports = {
  input: 'src/index.ts',

  bundleNodeModules: true,

  output: {
    format: ['es', 'system'],
    target: 'browser',
    dir: 'public'
  },

  plugins: {
    copy: {
      targets: [
        { src: 'src/index.html', dest: 'public' }
      ]
    },
    svelte: {
      // enable run-time checks when not in production
      dev: true,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('public/bundle.css');
      },
      preprocess: preprocess()
    },
    'node-resolve': {},
    commonjs: {}
  }
}

