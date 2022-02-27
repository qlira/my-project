<template>
  <v-main>
    <v-container>
      <v-row v-if="filteredMovies.length === 0">
        <v-col v-for="movie in movies" :key="movie.id">
          <movie-item
            :title="movie.title"
            :photo="movie.photo"
            :category="movie.category.name"
            :id="movie.id"
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
            :id="movie.id"
          >
          </movie-item>
          <movie-detalis
            :id="movie.id"
            v-if="showNever === true"
          ></movie-detalis>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import MovieDetalis from "./MovieDetails.vue";

export default {
  components: {
    MovieItem,
    MovieDetalis,
  },
  data() {
    return {
      title: "qlira",
      rows: 100,
      currentPage: 1,
      showNever: false,
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
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
