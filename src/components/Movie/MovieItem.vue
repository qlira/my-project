<template>
  <v-main>
    <v-card class="mx-auto my-12" max-width="374" style="background: #3d3d3d">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <router-link :to="movieLink"
        ><v-img height="380" :src="image"></v-img
      ></router-link>

      <v-card-title style="color: whitesmoke; font-family: Poppins">{{
        title
      }}</v-card-title>

      <v-container class="card-text-container">
        <v-card-text align="left">{{ category }}</v-card-text>
      </v-container>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      showD: false,
    };
  },
  props: ["id", "title", "category", "photo"],
  computed: {
    movieLink() {
      return "/Movie/" + this.id;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.card-text-container {
  display: flex;
  font-family: "Lato";
}
.card-text-container .v-card__text {
  width: auto;
  padding-top: 0;
  color: whitesmoke;
}
.v-card {
  border: none !important;
}
</style>
