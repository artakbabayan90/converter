import { createRouter, createWebHistory } from 'vue-router'
import CurrencyList from '@/views/Home'
import Converter from '@/views/Converter'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CurrencyList
  },
  {
    path: '/converter',
    name: 'Converter',
    component: Converter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
