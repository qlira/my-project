import axios from "axios";

const state = {
  categories: [],
  loading: false,
};

const mutations = {
  loadCategories(state, categories) {
    state.categories = categories;
  },
  changeLoadingState(state, loading) {
    state.loading = loading;
  },
};

const actions = {
  loadCategories({ commit }) {
    axios.get("http://localhost:5000/category/").then((response) => {
      console.log(response.data);
      const categories = response.data;
      commit("loadCategories", categories);
      commit("changeLoadingState", true);
    });
  },
};

const getters = {
  categories: (state) => state.categories,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
