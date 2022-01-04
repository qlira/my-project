<template>
  <div id="app">
    <the-header
      v-if="path != '/dashboard' && path != '/dashboard/users'"
    ></the-header>
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
    this.$store.dispatch("initUsers");
    console.log(this.path);
  },
};
</script>

<style>
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
