import axios from "axios";

const state = {
  user: {},
  token: localStorage.getItem("token") || "",
  status: "",
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
};

const actions = {
  initUsers: ({ commit }) => {
    commit("SET_USERS", users);
    console.log(state.users);
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
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
