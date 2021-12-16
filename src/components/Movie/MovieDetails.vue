<template>
  <div class="container">
    <img :src="image" alt="" height="739" width="890" />
    <div class="desc-container">
      <div style="text-align: center">
        <h1>{{ selectedMovie.title }}</h1>
      </div>
      <div>
        <p>{{ description }}</p>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding-top: 40px;
          "
        >
          <ul>
            <li
              v-for="(category, index) in selectedMovie.categories"
              :key="index"
            >
              {{ category }}
            </li>
          </ul>
          <h3>{{ rating }} IMDB</h3>
        </div>
      </div>
      <button id="reserve-btn">Reserve Ticket</button>
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

<style scoped>
.container {
  display: flex;
  padding: 140px 0px 60px 0px;
  width: 100%;
}
.desc-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 50%;
  background-color: #3d3d3d;
  color: whitesmoke;
}
h1 {
  font-size: 40px;
}

ul li {
  display: inline-block;
  list-style: none;
  padding-right: 10px;
  font-size: 22px;
}

p {
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 40px;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
}
#reserve-btn {
  border: 1px solid black;
  text-align: center;
  width: 200px;
  padding: 15px 20px;
  border-radius: 10px;
  background: whitesmoke;
  color: #3d3d3d;
  font-weight: 600;
  font-size: 20px;
}
</style>
