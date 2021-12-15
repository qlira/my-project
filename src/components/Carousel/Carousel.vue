<template>
  <v-carousel
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
  >
    <div class="cms">
      <h1>Cooming Soon</h1>
    </div>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-icon {
  background: #3d3d3d;
  border-radius: 20px;
}
.cms {
  padding: 10px 0px;
  font-family: monospace;
  color: whitesmoke;
  text-align: center;
}
</style>
