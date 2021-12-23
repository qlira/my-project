import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import { routes } from "./router";
import store from "./store/store";
import babelPolyfill from "babel-polyfill";

Vue.config.productionTip = false;

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
