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
    path: '/magicMenu-03',
    name: 'MagicMenu03',
    component: () => import('@/view/MagicMenu/MagicMenu-03.vue'),
    meta: { title: '魔术菜单 | 03' }
  },
  {
    path: '/dynamicMenu-01',
    name: 'DynamicMenu01',
    component: () => import('@/view/DynamicMenu/DynamicMenu-01.vue'),
    meta: { title: '动感菜单 | 01' }
  },
  {
    path: '/magicIcon-01',
    name: 'MagicIcon01',
    component: () => import('@/view/MagicIcon/MagicIcon-01.vue'),
    meta: { title: '魔术图标 | 01' }
  },
  {
    path: '/colorfulButton-01',
    name: 'ColorfulButton01',
    component: () => import('@/view/ColorfulButton/ColorfulButton-01.vue'),
    meta: { title: '炫彩按钮 | 01' }
  },
  {
    path: '/magicCard-01',
    name: 'MagicCard01',
    component: () => import('@/view/MagicCard/MagicCard-01.vue'),
    meta: { title: '魔术卡片 | 01' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
