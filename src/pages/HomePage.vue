<template>
  <div>
    <carousel></carousel>
    <movies-list></movies-list>
    <pagination-menu></pagination-menu>
  </div>
</template>

<script>
import Carousel from "../components/Carousel/Carousel.vue";
import MoviesList from "../components/Movie/MoviesList.vue";
import PaginationMenu from '../components/Movie/PaginationMenu.vue';
export default {
  components: {
    Carousel,
    MoviesList,
    PaginationMenu,
  },
};
</script>

<style scoped>
div {
  padding-top: 38px;
}
</style>
