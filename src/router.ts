import { createRouter, createWebHashHistory } from "vue-router";
import ListHeroes from '../views/ListHeroes.vue'
import Hero from '../views/Hero.vue'

const routes = [
    { path: '/', component: ListHeroes },
    { path: '/hero/:id', component: Hero }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;