import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)

const  store =new Vuex.Store({
    stata:{

    },
    getters:{},
    mutations,
    actions
});

export default store;

