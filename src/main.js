// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import rem from './assets/js/rem.js'
import App from './App'
import router from './router'
import '../static/css/common.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
rem(document, window)
export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

