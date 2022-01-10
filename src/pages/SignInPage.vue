<template>
  <v-app>
    <v-main>
      <sign-in></sign-in>
    </v-main>
  </v-app>
</template>

<script>
import SignIn from "../components/Forms/SignIn.vue";
export default {
  components: {
    SignIn,
  },
};
</script>
