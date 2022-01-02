<template>
  <div class="text-center">
    <v-pagination v-model="page" :length="4" circle dark></v-pagination>
  </div>
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
.text-center {
  padding: 30px 0 80px 0;
}

</style>
