import users from "../../data/users";

//firebase imports
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const state = {
  users: [],
  user: null,
  isLogin: false,
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_USER(state, payload) {
    state.user = payload;
    console.log("user state changed: " + state.user);
  },
  SET_ISLOGIN(state, payload) {
    state.isLogin = payload;
  },
};

const actions = {
  initUsers: ({ commit }) => {
    commit("SET_USERS", users);
    console.log(state.users);
  },
  async signUp(context, { email, password, firstName }) {
    console.log("signUp action");

    //async code
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      firstName,
    );
    if (response) {
      context.commit("SET_USER", response.user);
      console.log(response.user.email);
    } else {
      throw new Error("could not complete signup");
    }
  },

  //async code

  async login(context, { email, password }) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response) {
      context.commit("SET_USER", response.user);
    } else {
      throw new Error("could not complete login");
    }
  },

  async logout(context) {
    await signOut(auth);
    context.commit("SET_USER", null);
  },
};

const getters = {
  users: (state) => {
    console.log(state.users);
    return state.users;
  },
  isLogin: (state) => {
    return state.isLogin;
  },
  user: (state) => {
    return state.user;
  },
};

const unsub = onAuthStateChanged(auth, (user) => {
  this.$store.commit("SET_ISLOGIN", true);
  this.$store.commit("SET_USER", user);
  unsub();
});

export default {
  state,
  mutations,
  actions,
  getters,
};
