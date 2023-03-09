import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        redirect: 'pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/*webpackChunkName: "PokemonLayout*/'@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/*webpackChunkName: "ListPage*/'../modules/pokemon/pages/ListPage.vue') 
            },
            { 
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/*webpackChunkName: "AboutPage*/'../modules/pokemon/pages/AboutPage.vue') 
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/*webpackChunkName: "PokemonPage*/'../modules/pokemon/pages/PokemonPage.vue') ,
                props: (route) => {
                    const id = Number(route.params.id)
                    console.log(route);
                    return isNaN( id ) ? { id : 1} : { id : id}
                }
            },  
        ]
    },
    
    {
        path: '', 
        redirect: {name : 'pokemon-about'}
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import('../modules/dbz/layouts/DragonBallLayout.vue'),
        children: [
            { 
                path: 'characters', 
                name: 'dbz-characters',
                component: () => import(/*webpackChunkName: "ListPage*/'../modules/dbz/pages/Characters.vue') 
            },
            { 
                path: 'about', 
                name: 'dbz-about',
                component: () => import(/*webpackChunkName: "ListPage*/'../modules/dbz/pages/About.vue') 
            },
            {
                path: '', 
                redirect: {name : 'dbz-characters'}
            },
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Guard Global - Síncrono

router.beforeEach((to, from, next) => {
    console.log({to, from , next });

    const random = Math.round(Math.random() * 100) ;

    if( random > 50){
        console.log('autenticado, sape');
        next()
    }else{
        console.log(random, 'No autenticado');
    }
})
export default router;