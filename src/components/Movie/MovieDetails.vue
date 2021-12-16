<template>
  <div>
    <img :src="image" alt="" />
    <div>
      <div>
        <h3>{{ rating }} IMDB</h3>
        <p>{{ description }}</p>
      </div>
      <button>Reserve Ticket</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedMovie: null,
    };
  },
  computed: {
    image() {
      return this.selectedMovie.image;
    },
    rating() {
      return this.selectedMovie.rating;
    },
    description() {
      return this.selectedMovie.description;
    },
  },
  created() {
    console.log(this.$store.getters.movies);
    console.log("id:" + this.id);
    this.selectedMovie = this.$store.getters.movies.find(
      (movie) => movie.id === this.id
    );
  },
};
</script>

<style scoped></style>
