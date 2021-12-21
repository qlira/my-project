import movies from "../../data/movies";

const state = {
  movies: [],
  filteredMovies: [],
};

const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies;
  },
  FILTER_MOVIES(state, value) {
    state.filteredMovies = state.movies.filter((movie) => {
      return (
        movie.categories[0] === value ||
        movie.categories[1] === value ||
        movie.categories[2] === value
      );
    });
    console.log(state.movies);
    console.log("click");
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
  updateMovies({ state, commit }, value) {
    if (state.movies) {
      commit("FILTER_MOVIES", value);
      console.log(state.movies);
    }
  },
};

const getters = {
  movies: (state) => {
    console.log(state.movies);
    return state.movies;
  },
  filteredMovies: (state) => {
    console.log(state.filteredMovies);
    return state.filteredMovies;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
