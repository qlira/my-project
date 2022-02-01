import axios from "axios";

const state = {
  categories: [],
  category: {},
  loading: false,
};

const mutations = {
  loadCategories(state, categories) {
    state.categories = categories;
  },
  changeLoadingState(state, loading) {
    state.loading = loading;
  },
  category_success(state, category) {
    state.category = category;
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
  async addCategory({ commit }, category) {
    let res = await axios.post(
      "http://localhost:5000/category/create",
      category
    );
    console.log(res);
    if (res.status == 200) {
      const category = res.data.category;
      commit("category_success", category);
    }
    return res;
  },
  async updateCategory({ commit }, category) {
    let res = await axios.put(
      "http://localhost:5000/category/" + category._id,
      category
    );
    console.log(res);
    if (res.satus == 200) {
      const category = res.data.category;
      commit("category_success", category);
    }
    return res;
  },
  async deleteCategory({ commit }, category) {
    let res = await axios.delete("http://localhost:5000/category/"+ category._id, category);
    console.log(res);
    if (res.satus == 200) {
      const category = res.data.category;
      commit("category_success", category);
    }
    return res;
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
