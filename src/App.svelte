<script>
  import { Router, Route } from 'svelte-routing';
  import Loadable from 'svelte-loadable'
  import SomeService from './services/SomeService'
  import HomePage from './pages/Home.svelte'

  export let name;
  export let url = "";
</script>

<style>
</style>

<Router url="{url}">
  <Route path="about"><Loadable apiService={SomeService()} loader={() => import('./pages/AboutUs.svelte')} /></Route>
  <Route path="/"><HomePage apiService={SomeService()} /></Route>
</Router>
