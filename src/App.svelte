<script lang="typescript">
  import SomeService from './services/SomeService';
  import router from 'page';

  export let name: any;

  let pageProps: any = {
    component: import('./pages/Home.svelte')
  };

  router('/', () => {
    pageProps = {
      component: import('./pages/Home.svelte'),
      name: 'Frank' // overwrites name prop in main.js
    };
  });

  router('/about', () => {
    pageProps = {
      component: import('./pages/AboutUs.svelte'),
    };
  });

  router.start();
</script>

<style>
</style>

<template>
  {#await pageProps.component}
    <p>loading...</p>
  {:then x}
    <svelte:component this={x.default} {...pageProps} />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</template>
