<template>
  <v-main>
    <v-container>
      <v-row v-if="filteredMovies.length === 0">
        <v-col v-for="movie in pageMovies" :key="movie.id">
          <movie-item
            :title="movie.title"
            :photo="movie.photo"
            :category="movie.category.name"
            :id="movie._id"
          >
          </movie-item>
          <movie-detalis
            :id="movie.id"
            v-if="showNever === true"
          ></movie-detalis>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="movie in filteredMovies" :key="movie.id">
          <movie-item
            :title="movie.title"
            :photo="movie.photo"
            :category="movie.category.name"
            :id="movie._id"
          >
          </movie-item>
          <movie-detalis
            :id="movie._id"
            v-if="showNever === true"
          ></movie-detalis>
        </v-col>
      </v-row>
    </v-container>
    <pagination-menu :currentPage="page"></pagination-menu>
  </v-main>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import MovieDetalis from "./MovieDetails.vue";
import PaginationMenu from './PaginationMenu.vue';

export default {
  components: {
    MovieItem,
    MovieDetalis,
    PaginationMenu,
  },
  data() {
    return {
      title: "qlira",
      rows: 100,
      page: 1,
      showNever: false,
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    pageMovies(){
      return this.$store.getters.paginatedMovies;
    },
    filteredMovies() {
      return this.$store.getters.filteredMovies;
    },
  },
};
</script>

<style scoped>
.col {
  max-width: 25%;
}
</style>
