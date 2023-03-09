const isAuthenticatedGuard = (to, from, next) =>{

    console.log(to, from, next);
    return new Promise( () => {
        const random = Math.random() * 100

        if (random > 100) {
            console.log('autenticado');
            next()
        }else{
            console.log('Sin acceso', random);
            next({name: 'pokemon-home'})
        }
    })
}

export default isAuthenticatedGuard