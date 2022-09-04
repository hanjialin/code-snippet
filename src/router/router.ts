import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/home/home.vue')
  },
  {
    path: '/magicMenu-01',
    name: 'MagicMenu01',
    component: () => import('@/view/MagicMenu/MagicMenu-01.vue'),
    meta: { title: '魔术菜单 | 01' }
  },
  {
    path: '/magicMenu-02',
    name: 'MagicMenu02',
    component: () => import('@/view/MagicMenu/MagicMenu-02.vue'),
    meta: { title: '魔术菜单 | 02' }
  },
  {
    path: '/dynamicMenu-01',
    name: 'DynamicMenu01',
    component: () => import('@/view/DynamicMenu/DynamicMenu-01.vue'),
    meta: { title: '动感菜单 | 01' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
