import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import AppLayout from './components/AppLayout.vue'
import About from './pages/About.vue'
import Projects from './pages/projects.vue'

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/',
        component: AppLayout,
        children: [
        {
            path:'home',
            name: 'home',
            component: Home,
            meta: { requiresAuth: true }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: { requiresAuth: true }
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            meta: { requiresAuth: true }
        },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
