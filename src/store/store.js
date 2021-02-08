import Vue from 'vue'
import Vuex from 'vuex'
import demoStore from './demoStore'
import testStore from './testStore'
Vue.use(Vuex);



export const store = new Vuex.Store({
    modules : {
        demoStore,
        testStore
    }
});