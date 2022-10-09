import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Cars from '@/pages/Cars.vue'
import CurrentCar from '@/pages/CurrentCar.vue'
import NotFound from '@/pages/404.vue'

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/cars', name: 'cars', component: Cars },
        { path: '/cars/:id', name: 'CUrrentCar', component: CurrentCar },
        { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
    ]
})

export default routers