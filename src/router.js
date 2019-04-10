import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Landing from './views/Landing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/notes/:tid?',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:tid?',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./components/Editor.vue')
    },
    {
      path: '/edit/:tid?',
      name: 'edit',
      component: () => import('./components/Editor.vue')
    },
    {
      path: '/recall',
      name: 'recall',
      component: () => import('./components/Recall.vue')
    },
    {
      path: '/',
      name: 'landing',
      component: Landing

    }
  ]
})
