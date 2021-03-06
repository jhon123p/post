import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import { BootstrapVue, BootstrapVueIcons, SpinnerPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import { store } from "./store";

// Vue.use(BootstrapVue);
// Vue.use(BootstrapVueIcons);
// Vue.use(SpinnerPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
