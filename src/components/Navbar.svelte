<script lang="typescript">
  import { link } from "svelte-routing";link;
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
        <a href="/" use:link class="navbar-item">
          Home
        </a>

        <a href="/about" use:link class="navbar-item">
          About Us
        </a>
      </div>
    </div>
  </nav>
</template>
