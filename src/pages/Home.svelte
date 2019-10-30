<script lang="typescript">
  import { getContext } from 'svelte';
  import Navbar from './../components/Navbar.svelte';

  export let apiService: any;

  let foo;
  const { getMap } = getContext('ioc');
  console.log(apiService, getMap)
</script>

<template>
  <Navbar />
  <section class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-1">
          First column
        </div>
        <div class="column">
          Second column
        </div>
        <div class="column">
          Third column
        </div>
      </div>
    </div>
  </section>
</template>


