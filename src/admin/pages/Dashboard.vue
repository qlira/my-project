<template>
  <v-app>
    <navbar></navbar>
    <router-view></router-view>
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
