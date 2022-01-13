<template>
  <v-main>
    <div>
      <v-carousel
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        interval="6000"
        cycle
      >
        <div class="cms">
          <h2>Coming Soon</h2>
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
    </div>
  </v-main>
</template>
<script>

export default {
  data() {
    return {
      items: [
        {
          src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1589692007437-94571bd0a274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;0,900;1,900&display=swap');

.v-icon {
  background: #3d3d3d;
  border-radius: 20px;
}
.cms {
  padding: 10px 0px;
  font-family: "Montserrat";  
  color: whitesmoke;
  text-align: center;
}
</style>
