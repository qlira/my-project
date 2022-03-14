import Vue from "vue";
import Vuex from "vuex";

import movies from "./modules/movies";
import users from "./modules/users";
import categories from "./modules/categories";
import contacts from "./modules/contacts";
import tickets from "./modules/tickets";
import createPersistedState from "vuex-persistedstate";
// import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movies,
    users,
    categories,
    contacts,
    tickets,
  },
});
