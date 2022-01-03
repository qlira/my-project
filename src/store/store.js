import Vue from "vue";
import Vuex from "vuex";

import movies from "./modules/movies";
import users from "./modules/users";

import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    movies,
    users,
  },
});
