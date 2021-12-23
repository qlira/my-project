import users from "../../data/users";

//firebase imports
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const state = {
  users: [],
  user: null,
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_USER(state, payload) {
    state.user = payload;
    console.log("user state changed: " + state.user);
  },
};

const actions = {
  initUsers: ({ commit }) => {
    commit("SET_USERS", users);
    console.log(state.users);
  },
  async signUp(context, { email, password }) {
    console.log("signUp action");

    //async code
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    if(response) {
      context.commit('SET_USER', response.user)
    }else {

      throw new Error('could not complete signup')
    }
  },
};

const getters = {
  users: (state) => {
    console.log(state.users);
    return state.users;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
