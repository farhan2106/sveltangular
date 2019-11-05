import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
// import persistentParamsPlugin from 'router5-plugin-persistent-params';

const routes = [
  { name: 'home',       path: '/' },
  { name: 'home.about', path: '/about' }
];

const router = createRouter(routes, {
  defaultRoute: 'home'
});
router.usePlugin(
  browserPlugin({
      useHash: false
  })
)

export const navigate = (node: HTMLAnchorElement) => {
  // the node has been mounted in the DOM
  function nav(e: MouseEvent) {
    e.preventDefault()
    const route = (e.target as HTMLAnchorElement).getAttribute('href')
    if (route) {
      router.navigate(route);
    }
  }

  node.addEventListener("click", nav); 

  return {
    destroy() {
      node.removeEventListener("click", nav);
    }
  };
}

export default () => {
  if (!router.isStarted()) {
    router.start();
  }

  return router
}
