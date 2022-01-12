<template>
  <v-main>
    <v-container>
      <v-pagination v-model="page" :length="4" circle dark style="font-family: Lato"></v-pagination>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>
