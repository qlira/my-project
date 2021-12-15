<template>
    <v-card class="mx-auto my-12" max-width="374" style="background: #3d3d3d">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="380"
            :src="image"
          ></v-img>

          <v-card-title style="color: whitesmoke">{{title}}</v-card-title>
          <div class="card-text-container">
          <v-card-text align="left" v-for="category in categories" :key="category">{{ category }}</v-card-text>
          </div>
        </v-card>
</template>

<script>
export default {
  props: ["title", "categories", "image"],
};
</script>


<style scoped>
    .card-text-container {
        display: flex;

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