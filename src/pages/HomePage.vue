<template>
  <div>
    <carousel-banner></carousel-banner>
    <movies-list></movies-list>
  </div>
</template>

<script>
import CarouselBanner from "../components/Carousel/CarouselBanner.vue";
import MoviesList from "../components/Movie/MoviesList.vue";
export default {
  components: {
    CarouselBanner,
    MoviesList,
  },
};
</script>

<style scoped>
div {
  padding-top: 38px;
}
</style>
