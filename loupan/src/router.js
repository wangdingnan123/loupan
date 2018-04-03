import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Three from './views/Three.vue'
import Fore from './views/Fore.vue'
import Five from './views/Five.vue'
import Six from './views/Six.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:fenlei',
      name: 'about',
      component: About
    },
      // {
      //     path: '/about/:fenlei',
      //     name: 'about',
      //     component: About
      // },
      // {
      //     path: '/about/:fenlei',
      //     name: 'about',
      //     component: About
      // },
      {
          path: '/five',
          name: 'five',
          component: Five
      },
      {
          path: '/six',
          name: 'six',
          component: Six
      }
  ]
})
