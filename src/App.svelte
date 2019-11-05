<script lang="typescript">
  import SomeService from './services/SomeService';
  import router from 'page';
  import './router';

  export let name: any;

  let pageProps: any = {};

  router('/', () => {
    pageProps = {
      component: import('./pages/Home.svelte'),
      name
    };
  });

  router('/about', () => {
    pageProps = {
      component: import('./pages/AboutUs.svelte'),
      name: 'John',
      apiService: SomeService()
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
