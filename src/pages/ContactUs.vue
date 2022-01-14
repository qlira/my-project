<template>
  <v-app>
    <v-main>
      <v-container class="staticHero" fluid>
        <v-img :src="img" style="max-height: 350px">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <v-container class="headline">
                <v-toolbar-title class="text--lighten-1 font-weight-bold">
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
      <v-spacer tag="v-container"></v-spacer>

      <v-container class="content" fluid>
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
              style="background-color: #dcb933 !important; color: #1e1e1e"
              class="mr-4"
              @click="validate"
              >Submit</v-btn
            >
            <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
          </v-form>
        </v-container>
        <v-container class="info-block">
          <ul>
            <li><v-icon color="white" x-large style="padding-right: 10px">mdi-map-marker</v-icon> Bill Clinton</li>
            <li><v-icon color="white" x-large style="padding-right: 10px">mdi-email</v-icon>   mycinema@gmail.com</li>
            <li><v-icon color="white" x-large style="padding-right: 10px">mdi-phone</v-icon>   +383 44 111 232</li>
            <li><v-icon color="white" x-large style="padding-right: 10px">mdi-clock</v-icon>   Mon-Fri 10:00 AM-23:00 PM</li>
          </ul>
        </v-container>
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
<style>
.headline {
  text-align: center;
}
.v-toolbar__title {
  font-size: 35px !important;
  color: #dcb933;
}

.contact-block {
  padding: 40px;

  max-width: 50%;
  margin: 0;
  display: flex;

  justify-content: right;
}
.name {
  color: white;
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
  background: grey!important;
    padding: 20px;
    border-radius: 15px;
    width: 80%;
    box-shadow: 8px 5px 20px blanchedalmond;
}
</style>
