import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        message: "",
        isLogin: false
    },
    getters:{
        currentLoginState(state) {
            return state.isLogin;
        }
    },
    mutations: {
        LoginChanged(state, isLogin) {
            state.isLogin = isLogin
        }
    },
    actions: {
        setLogin(context, isLogin) {
            if( isLogin ) {
                context.commit("LoginChanged", isLogin)
            }
        }
    },
    modules: {}
})

export default store