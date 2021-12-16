<template>
  <v-container>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.id">
        <movie-item
          :title="movie.title"
          :image="movie.image"
          :categories="movie.categories"
          :id="movie.id"
        >
        </movie-item>
        <movie-detalis :id="movie.id" v-if="showNever === true"></movie-detalis>
      </v-col>
    </v-row>
  </v-container>
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
  },
};
</script>
