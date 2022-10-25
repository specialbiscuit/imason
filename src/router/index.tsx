import { createRouter, createWebHistory,  RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [  
    { path: '/', name: 'test', component: () => import('../components/Test') },
    { path: '/Login', name: 'Login', component: () => import('../components/Login.vue') },
    { path: '/Plan', name: 'Plan', component: () => import('../components/Plan.vue') },
    { path: '/T', name: 'T', component: () => import('../components/T.vue') },
    { path: '/Layout', name: 'Layout', component: () => import('../components/Layout.vue') },
    { path: '/PullRefresh', name: 'PullRefresh', component: () => import('../components/C-PullRefresh.vue') },
    { path: '/Animate', name: 'Animate', component: () => import('../components/C-Animate.vue'), meta: { icon: 'HomeFilled'} },
]

const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router