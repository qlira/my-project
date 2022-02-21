import axios from "axios";

const state = {
  users: [],
  user: {},
  token: localStorage.getItem("token") || "",
  status: "",
  loading: false,
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    state.token = token;
    state.user = user;
    state.status = "success";
  },
  loadUsers(state, users) {
    state.users = users;
  },
  changeLoadingState(state, loading) {
    state.loading = loading;
  },
  user_success(state, user) {
    state.user = user;
  }
};

const actions = {
  //listusers
  loadUsers({ commit }) {
    axios.get("http://localhost:5000/users/").then((response) => {
      console.log(response.data);
      const users = response.data;
      commit("loadUsers", users);
      commit("changeLoadingState", true);
    });
  },
  //login
  async login({ commit }, user) {
    commit("auth_request");
    let res = await axios.post("http://localhost:5000/users/login", user);
    console.log(res);
    if (res.status == 200) {
      const token = res.data.token;
      const user = res.data.user;
      console.log("tokeni" + token);
      localStorage.setItem("token", token);

      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token, user);
    }
    return res;
  },
  async signup({ commit }, user) {
    commit("auth_request");
    let res = await axios.post("http://localhost:5000/users/register", user);
    console.log(res);
    if (res.status == 200) {
      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem("token", token);

      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token, user);
    }
    return res;
  },
  logout({ commit }) {
    commit("auth_success", "", "");
    localStorage.setItem("token", "");
  },
  //updateRole
  async updateRole({ commit }, user) {
    let res = await axios.put(
      "http://localhost:5000/users/user/" + user._id,
      user
    );
    console.log(res);
    if (res.satus == 200) {
      const user = res.data.user;
      commit("user_success", user);
    }
    return res;
  },
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
  users: (state) => state.users,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
