<template>
  <div>
    <nav>
      <v-app-bar color="lightgrey" dark app>
        <v-app-bar-nav-icon @click="toogleMenu">
        </v-app-bar-nav-icon>
        <v-toolbar-title class="rext-uppercase">
          <span>MyCinema</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">
          <span>Exit</span>
          <v-icon right> exit_to_app</v-icon>
        </v-btn>
      </v-app-bar>
    </nav>
    <v-navigation-drawer
    v-if="drawer === true"
      dark
      app
      class="lightgrey darken-4"
    >
    <v-layout column align-center>
        <v-avatar size="100">
            <v-img :src="img"></v-img>
        </v-avatar>
        <p class="white--text subheading mt-1 text-center">Username</p>
    </v-layout>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import profile from '../../assets/images/profile.png'
export default {
  data() {
    return {
      img: profile,
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "folder", text: "My Project", route: "/projects" },
        { icon: "person", text: "Users", route: "/dashboard/users" },
      ],
    };
  },
  methods: {
    toogleMenu() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.border {
  /* border-left: 4px solid #0ba518; */
}
</style>
