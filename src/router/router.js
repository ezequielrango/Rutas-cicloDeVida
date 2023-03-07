import {createRouter, createWebHashHistory} from 'vue-router'
import ListPage from '../modules/pokemon/pages/ListPage.vue'
import PokemonPage from '../modules/pokemon/pages/PokemonPage.vue'
import NoPageFound from '../modules/shared/pages/NoPageFound.vue'


const routes = [
    { 
        path: '/', 
        component: () => import(/*webpackChunkName: "ListPage*/'../modules/pokemon/pages/ListPage.vue') 
    },
    { 
        path: '/about', 
        component: () => import(/*webpackChunkName: "AboutPage*/'../modules/pokemon/pages/AboutPage.vue') 
    },
    { 
        path: '/id', 
        component: () => import(/*webpackChunkName: "PokemonPage*/'../modules/pokemon/pages/PokemonPage.vue') 

    },  
    {
        path: '/:pathMatch(.*)*', 
        component: () => import(/*webpackChunkName: "NoPageFound*/'../modules/shared/pages/NoPageFound.vue') 
    },  

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;