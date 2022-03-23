import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    countHome: 0,
    countInfo: 0,
  },
  getters: {},
  mutations: {
    increaseCount(state, path) {
      path === "Home" ? state.countHome++ : state.countInfo++;
    },
  },
  actions: {},
  modules: {},
});
export { store };
