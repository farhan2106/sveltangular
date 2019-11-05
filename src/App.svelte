<script lang="typescript">
  import SomeService from './services/SomeService';
  import router from './router';

  export let name: any;

  let pageProps: any = {
    component: import('./pages/Home.svelte'),
    name
  };

  // router('/', () => {
  //   pageProps = {
  //     component: import('./pages/Home.svelte'),
  //     name
  //   };
  // });

  // router('/about', () => {
  //   pageProps = {
  //     component: import('./pages/AboutUs.svelte'),
  //     name: 'John',
  //     apiService: SomeService()
  //   };
  // });

  // router.start();

  router().subscribe((x: any) => console.log(x))
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
