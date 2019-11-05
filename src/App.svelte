<script lang="typescript">
  import SomeService from './services/SomeService';
  import router from './router';

  export let name: any;

  let pageProps: any = {
    component: import('./pages/Home.svelte'),
    name
  };

  router().subscribe((x: any) => {
    switch (x.route.name) {
      default:
      case 'home':
        pageProps = {
          component: import('./pages/Home.svelte'),
          name
        };
        break;
      case 'home.about':
        pageProps = {
          component: import('./pages/AboutUs.svelte'),
          name: 'John',
          apiService: SomeService()
        };
        break;
    }
  })
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
