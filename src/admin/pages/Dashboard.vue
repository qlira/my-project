<template>
  <v-app>
    <navbar></navbar>
    <!-- <v-content class="ma-4"> -->
      <router-view></router-view>
    <!-- </v-content> -->
    <!-- <footer></footer> -->
  </v-app>
</template>

<script>
import Navbar from "../components/UI/TheNavbar.vue";
// import Footer from "../components/UI/TheFooter.vue";
export default {
  components: {
    Navbar,
    // Footer,
  },
};
</script>
