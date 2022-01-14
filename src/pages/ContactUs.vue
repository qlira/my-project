<template>
  <v-app>
    <v-main style="padding-bottom: 0">
      <v-container class="staticHero" fluid>
        <v-img :src="img" style="max-height: 300px">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <v-container class="headline">
                <v-toolbar-title
                  class="red--text text--lighten-1 font-weight-bold"
                >
                  CONTACT US
                </v-toolbar-title>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </v-container>
      <v-spacer tag="v-container"></v-spacer>
      <v-spacer tag="v-container"></v-spacer>
      <v-spacer tag="v-container"></v-spacer>
      <v-spacer tag="v-container"></v-spacer>

      <v-container class="content" fluid>
        <v-container class="contact-block">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              @focus="methodToChangeColor"
              class="name"
              v-model="name"
              placeholder="placeholder text"
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
              style="
                background-color: #dcb933 !important;
                color: #1e1e1e;
                border-radius: 0px;
              "
              class="mr-4"
              @click="validate"
              >Submit</v-btn
            >
            <v-btn
              style="border-radius: 0px"
              color="error"
              class="mr-4"
              @click="reset"
              >Reset</v-btn
            >
          </v-form>
        </v-container>
        <v-container class="info-block">
          <ul>
            <li>
              <v-icon color="white" x-large style="padding-right: 10px"
                >mdi-map-marker</v-icon
              >
              Boulevard Bill Clinton
            </li>
            <li>
              <v-icon color="white" x-large style="padding-right: 10px"
                >mdi-email</v-icon
              >
              mycinema@gmail.com
            </li>
            <li>
              <v-icon color="white" x-large style="padding-right: 10px"
                >mdi-phone</v-icon
              >
              +383 44 111 232
            </li>
            <li>
              <v-icon color="white" x-large style="padding-right: 10px"
                >mdi-clock</v-icon
              >
              Mon-Fri 10:00 AM-23:00 PM
            </li>
          </ul>
        </v-container>
      </v-container>
      <v-spacer tag="v-container"></v-spacer>
      <v-spacer tag="v-container"></v-spacer>
      <v-spacer tag="v-container"></v-spacer>
      <v-container style="padding: 0" fluid>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.3466705580945!2d21.151025915754936!3d42.65400852447946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ef1e2266879%3A0x9f9ca7c7ab182591!2sStatue%20of%20Bill%20Clinton!5e0!3m2!1sen!2s!4v1642203706273!5m2!1sen!2s"
          width="100%"
          height="450"
        ></iframe>
      </v-container>
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
<style scoped>
.headline {
  text-align: left;
  font-family: "Montserrat";
}
.v-toolbar__title {
  font-size: 32px;
  font-family: "Montserrat";
}

.contact-block {
  padding: 40px;
  max-width: 50%;
  margin: 0;
  display: flex;
  justify-content: right;
}
.info-block {
  color: white;
  max-width: 50%;
  line-height: 95px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li {
  list-style-type: none;
}
.staticHero {
  padding: 0;
}
.content {
  display: flex;
}
.v-form {
  background: #1e1e1e;
  padding: 20px;
  width: 80%;
  opacity: 90%;
}
</style>
