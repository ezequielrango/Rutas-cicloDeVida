<template>
    <h1>About Page</h1>
    <h2>{{ name }}</h2>
    <button @click="onChangeName()">Cambiar</button>
</template>

<script>
    export default {

        data(){
            return{
                name: 'Ezequiel'
            }
        },

        methods: {
            onChangeName(){
                this.name = 'Juan'
            }
        },

        // created(){
        //     console.log(created);
        // },
        // beforeMount(){
        //     console.log(beforeMount);
        // },
        // mounted(){
        //     console.log(mounted);
        // },
        // beforeUpdate(){
        //     console.log(beforeUpdate);
        // },
        // updated(){
        //     console.log(updated);
        // },
        // deactivated(){
        //     console.log(deactivated);
        // },
        // beforeUnmount(){
        //     console.log(beforeUnmount);
        // },
        // unmounted(){
        //     console.log(unmounted);
        // },
        // errorCaptured(){
        //     console.log(errorCaptured);
        // },
        // renderTracked(){
        //     console.log(renderTracked);
        // },
        // renderTriggered(){
        //     console.log(renderTriggered);
        // },
    }
</script>