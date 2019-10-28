<script>
  import { Router, Link, Route } from "svelte-routing";
  import Loadable from 'svelte-loadable'

  export let name;
  export let url = "";
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
  </nav>
  <div>
    <!-- <svelte:component this={Home} foo={'a'}/> -->
    <!-- <Route path="blog/:id" component="{BlogPost}" />
    <Route path="blog" component="{Blog}" />
    <Route path="entah"><Home apiService={asdasd} /></Route>
    -->
    <!-- <Route path="about"><Loadable loader={() => import('./pages/AboutUs.svelte')} /></Route>
    <Route path="/"><Loadable apiService={'asd'} loader={() => import('./pages/Home.svelte')} /></Route> -->
  </div>
</Router>

