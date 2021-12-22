import users from "../../data/users";

const state = {
  users: [],
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  //   FILTER_MOVIES(state, value) {
  //     state.filteredMovies = state.movies.filter((movie) => {
  //       return (
  //         movie.categories[0] === value ||
  //         movie.categories[1] === value ||
  //         movie.categories[2] === value
  //       );
  //     });
  //     console.log(state.movies);
  //     console.log("click");
  //   },
  RND_USERS() {},
};

const actions = {
  //   reserveMovie: ({ commit }) => {
  //     commit();
  //   },
  initUsers: ({ commit }) => {
    commit("SET_USERS", users);
    console.log(state.users);
  },
  randomizeUsers: ({ commit }) => {
    commit("RND_MOVIES");
  },
  //   updateMovies({ state, commit }, value) {
  //     if (state.movies) {
  //       commit("FILTER_MOVIES", value);
  //       console.log(state.movies);
  //     }
  //   },
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
