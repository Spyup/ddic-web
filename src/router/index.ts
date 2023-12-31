import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes : RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: () => import('@/pages/Home.vue')  },
    { path: '/Order', name: 'Order', component: () => import('@/pages/Order.vue')  },
    { path: '/Live', name: 'Live', component: () => import('@/pages/Live.vue')},
    { path: '/Backend', name: 'Backend', component: () => import('@/pages/Backend.vue')}
]

export const router = createRouter({
    history: createWebHistory('./'),
    routes: routes
})