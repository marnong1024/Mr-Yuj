import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Details from '@/components/Details'
import Home from '@/Home'
import Cart from '@/Cart'
import Me from '@/Me'
import Explorer from '@/Explorer'
Vue.config.productionTip = false
Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    name: 'main',
    path: '/',
    component: Main,
    redirect: {name: 'home'},
    children: [{
      name: 'home',
      path: 'home',
      component: Home
    }, {
      name: 'cart',
      path: 'cart',
      component: Cart
    }, {
      name: 'me',
      path: 'me',
      component: Me
    }, {
      name: 'explorer',
      path: 'explorer',
      component: Explorer
    }]
  }, {
    name: 'details',
    path: '/explorer/:id',
    component: Details
  }]
})
export default router
