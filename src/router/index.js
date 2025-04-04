import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/views/CounterView.vue'),
    },
    {
      path: '/category/:id/list',
      name: 'category_list',
      component: () => import('@/views/CategoryListView.vue'),
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('@/views/CategoryView.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/CheckoutView.vue'),
    }
  ],
})

export default router
