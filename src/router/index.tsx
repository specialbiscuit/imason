import { createRouter, createWebHistory,  RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [  
    { path: '/', name: 'test', component: () => import('@/views/Three-Pure.vue') },
    { path: '/Login', name: 'Login', component: () => import('@/views/Login.vue') },
    { path: '/Plan', name: 'Plan', component: () => import('@/views/Plan.vue') },
    { path: '/T', name: 'T', component: () => import('@/views/T.vue') },
    { path: '/Layout', name: 'Layout', component: () => import('@/views/Layout.vue') },
    { path: '/PullRefresh', name: 'PullRefresh', component: () => import('@/views/C-PullRefresh.vue') },
    { path: '/Animate', name: 'Animate', component: () => import('@/views/C-Animate.vue'), meta: { icon: 'HomeFilled'} },
    { path: '/Pure', name: 'Pure', component: () => import('@/views/Three-Pure.vue')},
]

const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router