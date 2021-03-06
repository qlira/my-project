import axios from "axios";

const state = {
  movies: [],
  paginatedMovies: [],
  movie: {},
  filteredMovies: [],
  status: "",
};

const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies;
  },
  FILTER_MOVIES(state, value) {
    state.filteredMovies = state.paginatedMovies.filter((movie) => {
      return movie.category.name === value;
    });
  },
  movie_request(state) {
    state.status = "loading";
  },
  SET_PAGINATEDMOVIES(state, paginatedMovies) {
    state.paginatedMovies = paginatedMovies;
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
  async addMovie({ commit, dispatch }, movie) {
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
      dispatch("initMovies");
    }
    return res;
  },
  async updateMovie({ commit, dispatch }, movie) {
    commit("movie_request");
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
    dispatch("initMovies");
    return res;
  },
  async deleteMovie({ commit, dispatch }, movie) {
    let res = await axios.delete(
      "http://localhost:5000/movies/" + movie._id,
      movie
    );
    console.log(res);
    if (res.satus == 200) {
      const movie = res.data.movie;
      commit("movie_success", movie);
    }
    dispatch("initMovies");
    return res;
  },
  paginatedMovies({ commit, dispatch }, page) {
    console.log("Paginated hini1:", page);
    axios
      .get("http://localhost:5000/movies/moviePagination?page=" + page)
      .then((response) => {
        console.log(response.data);
        const paginatedMovies = response.data;
        commit("SET_PAGINATEDMOVIES", paginatedMovies);
        console.log("PaginatedMovies: ", paginatedMovies);
      });
      dispatch('filterMovies', 'ALL')
  },
  filterMovies({ state, commit }, value) {
    if (state.movies) {
      commit("FILTER_MOVIES", value);
      console.log("name " + value);
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
  paginatedMovies: (state) => {
    return state.paginatedMovies;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
