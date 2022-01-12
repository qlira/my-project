<template>
  <v-app>
    <v-main>
      <v-content>
        <div class="staticHero">
          <v-img :src="img" style="max-height: 300px">
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
              <v-col>
                <v-container>
                  <div class="headline">ABOUT US</div>
                </v-container>
              </v-col>
            </v-row>
          </v-img>
        </div>
        <div class="block">
          <v-container>
            <p class="white--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-container>
        </div>
        <div class="block">
          <v-container>
            <h2 class="text-center">Our Team</h2>
            <v-row>
              <v-col cols="3"></v-col>
            </v-row>
          </v-container>
        </div>
      </v-content>
      <!-- <v-card>
      <v-card-title>About Us</v-card-title>
      <v-card-subtitle>What we do</v-card-subtitle>
      <v-card-text>
        MyCinema ..
      </v-card-text>
    </v-card> -->
    </v-main>
  </v-app>
</template>

<script>
import Image from "../assets/images/aboutus-headline.jpg";
export default {
  name: "AboutUs",

  data(){
    return {
      img: Image,
      items: [
      ]
    }
  }
};
</script>

<style></style>
