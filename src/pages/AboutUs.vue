<template>
  <v-app>
    <v-main>
      <v-content>
        <div class="staticHero">
          <v-img :src="img" style="max-height: 300px">
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
              <v-col>
                <v-container>
                  <h1 class="red--text text--lighten-1 font-weight-bold">
                    ABOUT US
                  </h1>
                </v-container>
              </v-col>
            </v-row>
          </v-img>
        </div>
        <div class="block">
          <v-container>
            <div id="desc" class="white--text" style="padding-top: 40px">
              <b class="orange--text text-xl-h2">MyCinema</b> is more than a
              regular place to see a movie - it is a movie theater for movie
              lovers. Since 2020, our mission has been to create the most
              complete and best possible movie-going experience for our
              customers. At MyCinema, we love cinemas. <br />
              Nestled in the heart of <b class="orange--text">Prishtina</b>,
              each of our cinema theaters are distinct, full of personality and
              run by welcoming and attentive staff. We don't just screen
              excellent films: we provide places to eat, meet and relax, and
              host a busy calendar of events for everyone to explore. We pride
              ourselves in delivering the very best cinema experience,
              cutting-edge technology and the widest choice of experiences.
              We’re at the forefront of cinematic experiences, thanks to iSense,
              Dolby and IMAX extraordinary cinema viewing. If you love opera or
              theater, we screen it live and direct from stages around the
              world. If you're all about superhero films, come to one of our
              state-of-the-art screens and get yourself a large popcorn. While
              we’re known for showing blockbuster films, we also host screenings
              of the world’s best live events. Dance, theatre, music, live
              sports, gaming and cultural events, as well as independent film
              collectives and visionary film festivals are only a few of the
              welcomed guests on the screens of MyCinema. <br />
              <b class="red--text">Our team of passionate programmers</b>
              carefully curate a broad range of films, from quality mainstream
              and family movies to indies, documentaries and foreign language
              releases. We believe cinema can change lives and broaden
              perspectives. We know that our communities make us and we champion
              films made for all ages, backgrounds and walks of life. <br />
              <v-row
                class="mb-6"
                justify="center"
                no-gutters
                style="padding-top: 50px; padding-bottom: 60px"
                ><b
                  ><i id="quote" class="orange--text"
                    >Catering to a diverse and inclusive audience is part of our
                    DNA.</i
                  ></b
                ></v-row
              >
            </div>
          </v-container>
        </div>
        <div class="block">
          <v-container>
            <h2
              id="title"
              class="text-center red--text text--lighten-1"
              style="padding-bottom: 50px"
            >
              OUR TEAM
            </h2>
            <v-row>
              <v-col v-for="item in items" :key="item.id" cols="4">
                <v-card dark class="mx-auto" max-width="250px">
                  <v-img class="white--text align-end" :src="item.src"> </v-img>
                  <v-card-text class="gray-lighten 3">
                    <div class="title">{{ item.name }}</div>
                    <p>{{ item.title }}</p>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn plain text color="red accent-4" to="/contactus">
                      <v-icon left> mdi-email-fast </v-icon>
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

  data() {
    return {
      img: Image1,
      img2: Image2,
      items: [
        {
          id: 1,
          src: require("../assets/images/team.jpg"),
          name: "Çlirim Krasniqi",
          title: "CEO",
        },
        {
          id: 2,
          src: require("../assets/images/team.jpg"),
          name: "Lorik Halili",
          title: "CEO",
        },
        {
          id: 3,
          src: require("../assets/images/team.jpg"),
          name: "Dea Haliti",
          title: "CEO",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-family: "Montserrat";
}

#desc {
  font-size: 17px;
  font-family: "Lato";
}

b {
  font-size: 20px;
  padding-right: 5px;
  padding-left: 2px;
  font-family: "Montserrat Alternates";
}

i {
  padding-top: 5px;
  font-family: "Montserrat Alternates";
  font-size: 23px;
}

#quote {
  text-align: center;
}
</style>
