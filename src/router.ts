import { createRouter, createWebHashHistory } from "vue-router";
import ListHeroes from '../views/ListHeroes.vue'
import Hero from '../views/Hero.vue'
import Comic from '../views/Comic.vue'

const routes = [
    { path: '/', component: ListHeroes },
    { path: '/hero', component: Hero },
    { path: '/comic', component: Comic}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;