import Vue from 'vue'
import App from './App.vue'
import { gsap } from "gsap";
import { router } from './router/index.js';
import { store } from './store/index';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  gsap,
}).$mount('#app')

