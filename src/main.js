import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data: () => ({
    isPopUpOpen: false,
}),
  render: h => h(App)
}).$mount('#app')
