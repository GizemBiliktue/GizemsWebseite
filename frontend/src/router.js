import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from "./pages/Register.vue"
import AppLayout from './components/AppLayout.vue'
import About from './pages/About.vue'
import Projects from './pages/projects.vue'

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
        {
            path:'',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
