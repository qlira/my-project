<template>
  <v-app>
    <v-main>
      <v-content>
        <div class="staticHero">
          <v-img :src="img" style="max-height: 300px">
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
              <v-col>
                <v-container>
                  <h1 class=" red--text text--lighten-1 font-weight-bold">ABOUT US</h1>
                </v-container>
              </v-col>
            </v-row>
          </v-img>
        </div>
        <div class="block">
          <v-container>
            <p class="white--text" style="padding-top: 20px">
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
            <h2 id="title" class="text-center red--text text--lighten-1" style="padding-bottom: 50px">OUR TEAM</h2>
            <v-row>
              <v-col v-for="item in items" :key="item.id" cols="4">
                <v-card dark class="mx-auto" max-width="250px">
                  <v-img 
                  class="white--text align-end" 
                  :src="item.src">
                  </v-img>
                    <v-card-text class="gray-lighten 3">
                      <div class="title">{{ item.name }}</div>
                      <p>{{ item.title }}</p>
                    </v-card-text>
                    <v-divider></v-divider>
                      <v-card-actions>
                        <v-btn
                        plain
                        text
                        color="red accent-4"
                        to="/contactus"
                        >
                        <v-icon left>
                          mdi-email-fast
                        </v-icon>     
                          Contact
                        </v-btn>
                      </v-card-actions>
                </v-card>
              </v-col>
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
import Image1 from "../assets/images/aboutus-headline1.jpg";
import Image2 from "../assets/images/team.jpg";
export default {
  name: "AboutUs",

  data(){
    return {
      img: Image1,
      img2: Image2,
      items: [
        {
          id: 1,
          src: require("../assets/images/team.jpg"),
          name: 'Çlirim Krasniqi',
          title: 'CEO'
        },
        {
          id: 2,
          src: require("../assets/images/team.jpg"),
          name: 'Lorik Halili',
          title: 'CEO'
        },
        {
          id: 3,
          src: require("../assets/images/team.jpg"),
          name: 'Dea Haliti',
          title: 'CEO'
        },
      ]
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;0,900;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

h1, h2{
  font-family: "Montserrat";
}

</style>
