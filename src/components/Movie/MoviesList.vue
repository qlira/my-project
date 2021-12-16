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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      title: "qlira",
      rows: 100,
      currentPage: 1,
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
};
</script>
