import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user-infomation/:userId',
    name: 'UserInfo',
    component: () => import('../views/UserInfo.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/shopping/:userId',
    name: 'Shopping',
    component: () => import('../views/Shopping.vue')
  },
  {
    path: '/applying/:userId',
    name: 'Applying',
    component: () => import('../views/Applying.vue')
  },
  {
    path: '/item-detail/:itemId',
    name: 'ItemDetail',
    component: () => import('../views/ItemDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
