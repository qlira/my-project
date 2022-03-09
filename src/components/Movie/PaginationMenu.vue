<template>
  <v-main>
    <v-container>
      <v-pagination
        v-model="selectedPage"
        :length="
          moviesLength % 3 == 0 ? moviesLength / 3 : moviesLength / 3 + 1
        "
        @input="handlePageChange"
        dark
        style="font-family: Lato"
      ></v-pagination>
    </v-container>
  </v-main>
</template>

<script>
export default {
  props: ["currentPage"],
  data() {
    return {
      selectedPage: this.currentPage,
    };
  },
  computed: {
    moviesLength() {
      return this.$store.getters.movies.length;
    },
  },
  created() {
    this.$store.dispatch("paginatedMovies", this.selectedPage);
    const mm = this.$store.getters.paginatedMovies;
    console.log(mm);
  },
  methods: {
    handlePageChange(value) {
      this.selectedPage = value;
      this.$store.dispatch("paginatedMovies", this.selectedPage);
      const mmm = this.$store.getters.paginatedMovies;
      console.log("PageMovies2: ", mmm);

      console.log("Page: ", this.selectedPage);
      console.log("MoviesLength: ", this.moviesLength);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
</style>
