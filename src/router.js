import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Africa from './views/Africa.vue'
import About from './views/About.vue'
import Asia from './views/Asia.vue'
import Europe from './views/Europe.vue'
import NorthAmerica from './views/NorthAmerica.vue'
import SouthAmerica from './views/SouthAmerica.vue'
import Oceania from './views/Oceania.vue'
import Mixed from './views/Mixed.vue'
import Natural from './views/Natural.vue'
import Cultural from './views/Cultural.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/africa',
      name: 'africa',
      component: Africa
    },
    {
      path: '/asia',
      name: 'asia',
      component: Asia
    },
    {
      path: '/europe',
      name: 'europe',
      component: Europe
    },
    {
      path: '/north-america',
      name: 'north-america',
      component: NorthAmerica
    },
    {
      path: '/south-america',
      name: 'south-america',
      component: SouthAmerica
    },
    {
      path: '/australia-oceania',
      name: 'australia-oceania',
      component: Oceania
    },
    {
      path: '/mixed',
      name: 'mixed',
      component: Mixed
    },
    {
      path: '/cultural',
      name: 'cultural',
      component: Cultural
    },
    {
      path: '/natural',
      name: 'natural',
      component: Natural
    }
  ]
})
