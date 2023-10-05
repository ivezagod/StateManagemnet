import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createStore, useStore} from 'vuex'




const store = createStore({
    state(){
        return {
            count: 0
        }
    },
   mutations: {
        increment(state) {
            state.count++
        }
   },
    actions: {
        increment(context){
            setTimeout(()=>{
                context.commit('increment')
            },500)
        }
    },
    getters:{

        squareCount(state)  {
            return state.count ** 2
        }
    }

})

createApp(App).use(store).mount('#app')
