<script lang="typescript">
  import router from './../router';

  function navigate(e: MouseEvent) {
    const route = (e.target as HTMLAnchorElement).getAttribute('href')
    if (route) {
      router().navigate(route);
    }
  }
</script>

<style>
</style>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <a href="/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a href="home" on:click|preventDefault={navigate} class="navbar-item">
          Home
        </a>

        <a href="home.about" on:click|preventDefault={navigate} class="navbar-item">
          About Us
        </a>
      </div>
    </div>
  </nav>
</template>
