<template>
  <v-main>
    <nav>
      <div>
        <v-toolbar-title>MyCinema</v-toolbar-title>
      </div>
      <div>
        <v-btn text class="m1-2" to="/">Home</v-btn>
        <v-btn
          text
          class="m1-2"
          @mouseover="showCategories = true"
          @mouseleave="showCategories = false"
          :to="path != '/' ? '/' : ''"
          >Categories
          <div class="category-menu" v-if="showCategories === true">
            <ul>
              <li
                v-for="(category, index) in staticCategoriesName"
                :key="index"
                @click="filterByCategory(category)"
              >
                {{ category }}
              </li>
            </ul>
          </div>
        </v-btn>
        <v-btn to="/aboutus" text class="m1-2">About Us</v-btn>
        <v-btn to="/contactus" text class="m1-2">Contact Us</v-btn>
      </div>
      <div v-if="!user" style="display: flex; aligh-items: center">
        <v-btn text class="m1-2" to="/sign-in">Sign In</v-btn>
      </div>
      <div v-if="user">
        <h4>{{ user.email }} {{ user.firstName }}</h4>
        <v-btn text class="m1-2" @click="handleLogout">Logout</v-btn>
      </div>
    </nav>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      showCategories: false,
      filteredMovies: [],
      staticCategoriesName: [
        "Aksion",
        "Anime",
        "Adventure",
        "Drama",
        "Fantashkence",
        "Shkence",
        "Histori",
        "Horror",
        "Komedi",
        "Krim",
        "Romance",
        "Thriller",
      ],
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    user() {
      return this.$store.getters.user;
    },
    path() {
      return this.$route.path;
    },
  },
  methods: {
    filterByCategory(categ) {
      this.$store.dispatch("updateMovies", categ);
    },
    handleLogout() {
      this.$store.dispatch("logout");
      console.log(this.$store.getters.isLogin);
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #28282c;
  color: whitesmoke;
  padding: 0 20px;
  position: fixed;
  z-index: 10;
}
.category-menu {
  position: absolute;
  z-index: 20;
  background-color: #3d3d3d;
  width: 500px;
  top: 26px;
  left: -15px;
  border-radius: 10px;
}
.category-menu ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  width: 120%;
}
.category-menu ul li {
  list-style: none;
  display: inline-block;
  flex: 0 0 26%;
  padding: 15px 0px;
}
.v-btn {
  color: whitesmoke !important;
  font-family: Montserrat;
}
.v-toolbar__title {
  font-size: 2.25rem;
  font-family: Poppins;
}
</style>
