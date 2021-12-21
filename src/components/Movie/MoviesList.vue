<template>
  <v-container>
    <button @click="filterMovies('Drama')">Filter</button>

    <v-row v-if="ta.length === 0">
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
    <v-row v-else>
      <v-col v-for="movie in ta" :key="movie.id">
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
      ta: [],
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
  methods: {
    filterMovies(categ) {
      this.ta = this.movies.filter((movie) => {
        return (
          movie.categories[0] === categ ||
          movie.categories[1] === categ ||
          movie.categories[2] === categ
        );
      });
      console.log(this.ta);
    },
  },
};
</script>
