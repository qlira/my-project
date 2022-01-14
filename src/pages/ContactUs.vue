<template>
  <v-app>
    <v-main>
      <v-content>
        <v-container class="staticHero">
          <v-img :src="img" style="max-height: 350px">
            <v-row align="end" class="lightbox white--text pa-2 fill-height">
              <v-col>
                <v-container class="headline">
                  <h1 class="orange--text text--lighten-1 font-weight-bold">
                    CONTACT US
                  </h1>
                </v-container>
              </v-col>
            </v-row>
          </v-img>
        </v-container>
        <v-container
          class="MOTHER-ROW"
          style="
            max-width: 1500px;
            margin: 0 auto;
            padding: 100px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
          "
        >
          <v-container class="info-block">
            <ul>
              <li>Str. Bill Clinton</li>
              <li>mycinema@gmail.com</li>
              <li>+383 44 111 232</li>
              <li>Mon-Fri 10:00 AM-23:00 PM</li>
            </ul>
          </v-container>
          <v-container class="contact-block">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                class="name"
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                class="email"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-textarea
                class="messagebox"
                v-model="message"
                :rules="messageRules"
                label="Message"
                required
              ></v-textarea>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >Submit</v-btn
              >
              <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
            </v-form>
          </v-container>
        </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import Image from "../assets/images/contactpage-img.jpg";
export default {
  name: "ContactUs",
  data: () => ({
    img: Image,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 10) || "Message must be more than 10 characters",
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style>
.headline {
  text-align: center;
}

.contact-block {
  background-color: #1e1e1e;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 10%;
}
.name {
  color: white;
}
.info-block {
  color: white;
  max-width: 500px;
  line-height: 95px;
  font-size: 20px;
}

ul li {
  list-style-type: none;
}
.staticHero {
  width: 100%;
}
</style>
