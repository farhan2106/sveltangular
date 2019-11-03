<script lang="typescript">
  import Navbar from './../components/Navbar.svelte';

  export let apiService: any;
  export let name: string;
</script>

<template>
  <Navbar />
  <section class="section">
    <div class="container is-fluid">
      <div class="columns">
        <h3>Home: Hello {name}</h3>
      </div>
    </div>
  </section>
</template>
