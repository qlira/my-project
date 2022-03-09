<template>
  <div id="app">
    <the-header v-if="!path.includes('/dashboard')"></the-header>
    <the-navbar v-else></the-navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import TheNavbar from "./admin/components/UI/TheNavbar.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    TheNavbar,
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
  created() {
    this.$store.dispatch("initMovies");
    console.log("movies: " ,this.$store.getters.movies);
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadContacts");

  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;0,900;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  background-color: #28282c;
  margin: 0;
  padding: 0;
}
</style>
