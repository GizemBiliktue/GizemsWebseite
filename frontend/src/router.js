import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from "./pages/Register.vue"
import AppLayout from './components/AppLayout.vue'
import About from './pages/About.vue'
import Projects from './pages/projects.vue'
import { useAuthStore } from './store/auth'
import AuthLayout from './components/AuthLayout.vue'

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
    }, {
        path: '/',
        component: AuthLayout,
        children: [
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
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async(to, from, next) => {
    const authStore = useAuthStore();

    if(!authStore.isAuthenticated) {
        await authStore.fetchUser();
    }

    if(to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({name: 'login'});
    } else {
        next();
    }
})

export default router
