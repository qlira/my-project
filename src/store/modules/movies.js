import movies from "../../data/movies";
import axios from "axios";

const state = {
  movies: [],
  movie: {},
  filteredMovies: [],
  status: "",
};

const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies;
  },
  FILTER_MOVIES(state, value) {
    state.filteredMovies = state.movies.filter((movie) => {
      return movie.category === value;
    });
  },
  movie_request(state) {
    state.status = "loading";
  },
  movie_success(state, movie) {
    state.movie = movie;
    state.status = "success";
  },
};

const actions = {
  initMovies: ({ commit }) => {
    commit("SET_MOVIES", movies);
  },
  async addMovie({ commit }, movie) {
    commit("movie_request");
    const token = localStorage.getItem("token");
    let res = await axios.post("http://localhost:5000/movies/create", movie, {
      header: {
        Accept: "application/json",
        "x-auth-token": token,
      },
    });
    console.log(res);
    if (res.status == 200) {
      const movie = res.data.movie;
      commit("movie_success", movie);
    }
    return res;
  },
  updateMovies({ state, commit }, value) {
    if (state.movies) {
      commit("FILTER_MOVIES", value);
    }
  },
};

const getters = {
  movies: (state) => {
    return state.movies;
  },
  filteredMovies: (state) => {
    return state.filteredMovies;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
