import axios from 'axios';

const url = "https://icanhazdadjoke.com"
const headers = { Accept: "application/json" };

const state = {
    myName : "My name is Abhisek",
    yourName: "This is Test"
}

const actions = {
    setNameAction(state, data){
        console.log(state,data);
        state.commit('setNameM', data)
    },
    setYourNameAction(state, data){
        console.log(state, data);
        state.commit('setYourName', data)
    },
    async setJokeFromAPIAction(state) {
        console.log(state);
        axios.get(url, {headers: headers})
          .then(response => {
            state.commit('setCurrentJoke', response?.data?.joke);
            state.commit('setAllJokes', response?.data?.joke);
          })
          .catch(error => {
            console.log(error)
    
          })
    
    }
}

const getters = {
    name: (state) => state.myName,
    yourName: (state) => state.yourName
}

const mutations = {
    setNameM: (state, data) => (state.myName = data),
    setYourName: (state, data) => (state.yourName = data),
    setCurrentJoke: (state, data) => (state.myName = data),
    setAllJokes: (state, data) => (state.allJokes = [...state.allJokes, data])
}

export default{
    state,
    actions,
    getters,
    mutations
}