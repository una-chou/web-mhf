import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routerConfig = {
    mode: 'hash',
    routes: [
        ...(r => {
            return r.keys().map(key => r(key).default);
        })(require.context('./views/', true, /\/route\.js$/))
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
}
const router = new Router(routerConfig)
router.beforeEach(async (to, from, next) => {
    next()
})
export default router;
