import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Homeview.vue'
import AboutView from '@/views/Aboutview.vue'
import UVView from '@/views/UVview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/uv',
    name: 'UV',
    component: UVView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
