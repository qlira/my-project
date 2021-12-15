<template>
  <v-container>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.id">
        <movie-item
          :title="movie.title"
          :image="movie.image"
          :categories="movie.categories"
        >

        </movie-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Image from "../../assets/images/eternals.jpg";
import MovieItem from "./MovieItem.vue";

export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      title: "qlira",
      rows: 100,
      currentPage: 1,
      movies: [
        {
          id: 1,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
        {
          id: 2,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
        {
          id: 3,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
        {
          id: 4,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
        {
          id: 5,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
        {
          id: 6,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
        {
          id: 7,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
        {
          id: 8,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
        {
          id: 9,
          image: Image,
          title: "Eternals",
          categories: ["Aksion", "Fantashkence", "Komedi"],
        },
      ],
    };
  },
};
</script>
