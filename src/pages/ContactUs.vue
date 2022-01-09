<template>
  <v-app>
    <v-main>
      <v-container class="con-1">
        <v-card color="" width="50%" height="50%" active-class="card">
          <v-card-title>
            <span class="text-h5">Contact Us</span>
          </v-card-title>
          <v-spacer tag="v-card-title"></v-spacer>
          <v-spacer tag="v-card-title"></v-spacer>
          <v-spacer tag="v-card-title"></v-spacer>

          <v-form>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required]"
                    label="Email"
                    type="email"
                  ></v-text-field>
                </v-row>

                <v-row>
                  <v-text-field
                    v-model="fullName"
                    :rules="[rules.required]"
                    label="Full Name"
                    type="text"
                  ></v-text-field>
                </v-row>

                <v-row>
                  <v-textarea
                    v-model="message"
                    :rules="[rules.required, rules.max, rules.min]"
                    prepend-icon="mdi-comment"
                    auto-grow
                    clearable
                    clear-icon="mdi-close-circle"
                    label="Message"
                  ></v-textarea>
                </v-row>
              </v-container>
            </v-card-text>
          </v-form>

          <!-- <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeReserveDialog">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="closeReserveDialog">
                Save
              </v-btn>
            </v-card-actions> -->
        </v-card>
        <v-card color="" width="50%" height="70%">
          <v-img :src="img" height="100%"></v-img>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Image from "../assets/images/contact.jpg";
export default {
  data() {
    return {
      img: Image,
      message: "",
      email: "",
      fullName: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) =>
          value.length >= 10 || "Text should be 10 characters or more",
        max: (value) => value.length <= 200 || "Text should be 200 or less",
      },
    };
  },
};
</script>

<style scoped>
.con-1 {
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
