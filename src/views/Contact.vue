<template>
    <div>
        <p>Hello</p>
        <p>{{ meroName }}</p>
        <p>{{ yourName }}</p>
        <button @click="setName('Chaudhary')" >Click Me</button> | 
        <button @click="setYourName('Testing Now')">Test</button>
        <div v-if="yourName === 'Testing Now'">
            <p>Test is under process!</p>
        </div> | 
        <button @click="AddJoke">Add a Joke</button>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: "Contact",
    data: () => ({

    }),
    computed: {
        meroName(){
           return this.$store.getters.name
        },
        yourName(){
            return this.$store.getters.yourName
        }
    },
    methods:{
        ...mapActions(['setNameAction', 'setYourNameAction', 'setJokeFromAPIAction']),
        setName(data){
            this.setNameAction(data)
        },
        setYourName(data){
            this.setYourNameAction(data)
        },
        AddJoke(){
            this.setJokeFromAPIAction()
        }
    }
}
</script>