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

export default () => {
  if (!router.isStarted()) {
    router.start();
  }

  return router
}
