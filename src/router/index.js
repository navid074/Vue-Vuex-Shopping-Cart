import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: ()=> import('../views/TeamView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: ()=> import('../views/FaqView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import('../views/ContactView.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: ()=> import('../views/DownloadView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=> import('../views/CartView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
