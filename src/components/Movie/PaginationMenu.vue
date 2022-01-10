<template>
  <v-main>
    <v-container>
      <v-pagination v-model="page" :length="4" circle dark></v-pagination>
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

</style>
