import {createRouter, createWebHashHistory} from 'vue-router'
import ListPage from '../modules/pokemon/pages/ListPage.vue'
import PokemonPage from '../modules/pokemon/pages/PokemonPage.vue'
import NoPageFound from '../modules/shared/pages/NoPageFound.vue'


const routes = [
    { 
        path: '/', 
        redirect: 'home'
    },
    { 
        path: '/home', 
        name: 'home',
        component: () => import(/*webpackChunkName: "ListPage*/'../modules/pokemon/pages/ListPage.vue') 
    },
    { 
        path: '/about', 
        name: 'about',
        component: () => import(/*webpackChunkName: "AboutPage*/'../modules/pokemon/pages/AboutPage.vue') 
    },
    { 
        path: '/pokemonid/:id', 
        name: 'pokemon-id',
        component: () => import(/*webpackChunkName: "PokemonPage*/'../modules/pokemon/pages/PokemonPage.vue') ,
        props: (route) => {
            const id = Number(route.params.id)
            console.log(route);
            return isNaN( id ) ? { id : 1} : { id : id}
        }
    },  
    {
        path: '/:pathMatch(.*)*', 
        component: () => import(/*webpackChunkName: "NoPageFound*/'../modules/shared/pages/NoPageFound.vue') ,
        redirect: '/home'
    },  

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;