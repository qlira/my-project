import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import { routes } from "./router";
import store from "./store/store";
import babelPolyfill from "babel-polyfill";
import axios from "axios";

Vue.config.productionTip = false;

//load the token from the localStorage
Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
//is there is any token then will simple append default axios auth headers
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  vuetify,
  router,
  store,
  babelPolyfill,
  render: (h) => h(App),
}).$mount("#app");
