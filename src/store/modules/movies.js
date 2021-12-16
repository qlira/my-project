import movies from "../../data/movies";

const state = {
  movies: [],
};

const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies;
  },
  RND_MOVIES() {},
};

const actions = {
  reserveMovie: ({ commit }) => {
    commit();
  },
  initMovies: ({ commit }) => {
    commit("SET_MOVIES", movies);
  },
  randomizeMovies: ({ commit }) => {
    commit("RND_MOVIES");
  },
};

const getters = {
  movies: (state) => {
    console.log(state.movies);
    return state.movies;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
