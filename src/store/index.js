import Vue from 'vue'
import Vuex from 'vuex'
import avi from './modules/avi'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        avi,
    }
})

export default store