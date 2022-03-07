<template>
  <v-main>
    <v-container>
      <v-pagination
        v-model="selectedPage"
        :length="moviesLength%2==0? moviesLength/2 : moviesLength/2+1"
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
  methods: {
    handlePageChange(value) {
      this.selectedPage = value;
      console.log("Page: ", this.selectedPage);
      console.log("MoviesLength: ", this.moviesLength);

    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
</style>
