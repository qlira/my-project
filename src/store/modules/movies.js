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
    axios.get("http://localhost:5000/movies/").then((response) => {
      console.log(response.data);
      const movies = response.data;
      commit("SET_MOVIES", movies);
    });
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
  async updateMovie({ commit }, movie) {
    const token = localStorage.getItem("token");
    let res = await axios.put(
      "http://localhost:5000/movies/" + movie.get("_id"),
      movie,
      {
        header: {
          Accept: "application/json",
          "x-auth-token": token,
        },
      }
    );
    console.log("updatedMovie: " + res);
    if (res.satus == 200) {
      const movie = res.data.movie;
      commit("movie_success", movie);
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
  async deleteMovie({ commit }, movie) {
    let res = await axios.delete(
      "http://localhost:5000/movies/" + movie._id,
      movie
    );
    console.log(res);
    if (res.satus == 200) {
      const movie = res.data.movie;
      commit("movie_success", movie);
    }
    return res;
  },
  filterMovies({ state, commit }, value) {
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
