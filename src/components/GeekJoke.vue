<template>
    <div>
        <h1>Tell me a joke !</h1>
        <h2> Joke : {{jokeText}}</h2>
        <h3> Joke : {{ jokeText}}</h3>
        <h3> Joke : {{snakeJoke}}</h3>
        
        <button @click="getJoke">Loud Joke</button>
        <button @click="getJoke">Normal Joke</button>
        <button @click="getJoke" >Snake Joke</button>
    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import {mapState} from 'pinia'


    export default {
        name : 'GeekJoke',
        computed: {
            ...mapState(useMainStore, ['getJoke']),

            ...mapState(useMainStore, ['jokeText', 'snakeJoke'])
        },
        methods: {
            
        }
    }
</script>

<style scoped>
h2{
    text-transform: uppercase;
}
</style>