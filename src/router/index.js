import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      diretion: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: () => import('../views//recommend/recommend.vue')
    },
    {
      path: '/singer',
      name: 'Singer',
      component: () => import('../views/singer/singer.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/search/search.vue')
    },
    {
      path: '/rank',
      name: 'Rank',
      component: () => import('../views/rank/rank.vue')
    }
  ]
})
