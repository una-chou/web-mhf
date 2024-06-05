import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/style.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
