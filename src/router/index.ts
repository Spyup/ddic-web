import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes : RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: () => import('@/pages/Home.vue')  },
    { path: '/Order', name: 'Order', component: () => import('@/pages/Order.vue')  },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})