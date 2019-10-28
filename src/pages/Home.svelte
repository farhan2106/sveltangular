<script>
  import Navbar from './../components/Navbar.svelte';

  let foo;

  export let apiService;

  console.log(apiService)
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


