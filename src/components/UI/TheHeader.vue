<template>
  <v-main>
    <nav>
      <div>
        <v-toolbar-title>
          <v-img
            src="https://i.ibb.co/VYVVvcM/default-removebg-preview.png"
            height="125"
            width="125"
            class="grey darken-4"
          >
          </v-img>
        </v-toolbar-title>
      </div>
      <div>
        <v-btn text class="m1-2" to="/" style="color: #dcb933 !important"
          >Home</v-btn
        >
        <v-btn
          v-if="user.user.role === true"
          text
          class="m1-2"
          to="/dashboard"
          style="color: #dcb933 !important"
          >Dashboard</v-btn
        >

        <v-btn
          text
          class="m1-2"
          @mouseover="showCategories = true"
          @mouseleave="showCategories = false"
          style="color: #dcb933 !important"
          :to="path != '/' ? '/' : ''"
          >Categories
          <v-container class="category-menu" v-if="showCategories === true">
            <ul>
              <li @click="filterByCategory('ALL')">ALL</li>
              <li
                v-for="category in categories"
                :key="category"
                @click="filterByCategory(category.name)"
              >
                {{ category.name }}
              </li>
            </ul>
          </v-container>
        </v-btn>
        <v-btn
          v-if="isLoggedIn"
          to="/ticketorders"
          text
          class="m1-2"
          style="color: #dcb933 !important"
        >
          Ticket Orders
        </v-btn>
        <v-btn to="/aboutus" text class="m1-2" style="color: #dcb933 !important"
          >About Us</v-btn
        >
        <v-btn
          to="/contactus"
          text
          class="m1-2"
          style="color: #dcb933 !important"
          >Contact Us</v-btn
        >
      </div>
      <div v-if="!isLoggedIn" style="display: flex; aligh-items: center">
        <v-btn text class="m1-2" to="/sign-in" style="color: #dcb933 !important"
          >Sign In</v-btn
        >
      </div>
      <div
        style="display: flex; flex-direction: row; align-items: center"
        v-if="isLoggedIn"
      >
        <li style="list-style: none; text-transform: uppercase">
          <span style="padding-right: 10px">Hello</span>
          {{ this.user.user.firstName }}
        </li>
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
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    path() {
      return this.$route.path;
    },
    categories() {
      return this.$store.getters.categories;
    },
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    filterByCategory(categ) {
      this.$store.dispatch("filterMovies", categ);
    },
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/sign-in");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

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
  color: #dcb933;
}

.category-menu ul li {
  list-style: none;
  display: inline-block;
  flex: 0 0 26%;
  padding: 15px 0px;
}
.category-menu ul li:hover {
}
.v-btn {
  color: whitesmoke !important;
  font-family: "Montserrat";
  padding-left: 15px;
}
/* .v-toolbar__title {
  font-size: 2.25rem;
  font-family: "Montserrat Alternates";
  color: orange !important;
} */
</style>
