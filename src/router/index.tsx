import { createRouter, createWebHistory,  RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [  
    { path: '/', name: 'test', component: () => import('../components/Test') },
    { path: '/Login', name: 'Login', component: () => import('../components/Login.vue') },
    { path: '/Plan', name: 'Plan', component: () => import('../components/Plan.vue') },
    { path: '/T', name: 'T', component: () => import('../components/T.vue') },
]

const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router