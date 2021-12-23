<template>
  <div>
    <carousel-banner></carousel-banner>
    <movies-list></movies-list>
    <pagination-menu></pagination-menu>
  </div>
</template>

<script>
import CarouselBanner from "../components/Carousel/CarouselBanner.vue";
import MoviesList from "../components/Movie/MoviesList.vue";
import PaginationMenu from '../components/Movie/PaginationMenu.vue';
export default {
  components: {
    CarouselBanner,
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
