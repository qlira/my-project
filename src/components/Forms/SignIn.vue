<template>
  <v-app>
    <v-main>
      <v-container dark class="con">
        <v-container class="form-con-1" v-if="show === false">
          <v-container
            style="
              background-color: white;
              width: 60%;
              height: 70%;
              border-radius: 15px 0 0 15px;
            "
          >
            <v-card class="cardColor-1">
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>

              <v-content class="tl" style="font-size: 40px; padding: 0"
                >Sign In
              </v-content>
              <v-content class="subtl" style="padding: 0; font-size: 20px"
                >Use your account
              </v-content>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-form ref="formLogin">
                <v-alert v-if="error">{{ error }}</v-alert>
                <v-text-field
                  single-line
                  outlined
                  clearable
                  filled
                  rounded
                  prepend-inner-icon="mdi-at"
                  label="Email"
                  type="email"
                  v-model="loginEmail"
                  :rules="[loginRules.required]"
                >
                </v-text-field>
                <v-text-field
                  single-line
                  outlined
                  clearable
                  filled
                  rounded
                  prepend-inner-icon="mdi-lock"
                  label="Password"
                  v-model="loginPassword"
                  :rules="[loginRules.required]"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                >
                </v-text-field>
                <v-btn
                  rounded
                  x-large
                  color="#3d3d3d"
                  style="color: white"
                  @click="submitLogInForm"
                  >Log In</v-btn
                >
              </v-form>
            </v-card>
          </v-container>
          <v-container
            style="
              background: #dcb933;
              width: 40%;
              height: 70%;
              border-radius: 0 15px 15px 0;
            "
          >
            <v-card class="cardColor-1">
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>

              <v-content class="tl" style="font-size: 40px; padding: 0"
                >Welcome Back, Friend
              </v-content>
              <v-spacer tag="v-card-title"></v-spacer>

              <v-spacer tag="v-card-title"></v-spacer>
              <v-content class="subtl" style="padding: 0; font-size: 20px"
                >Enter your login details
              </v-content>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-btn
                x-large
                color="#3d3d3d"
                style="color: #dcb933"
                @click="showSignIn"
                >Sign up</v-btn
              >
            </v-card>
          </v-container>
        </v-container>
        <!-- FORM 2222 -->

        <v-container class="form-con-1" v-if="show === true">
          <v-container
            style="
              background-color: whitesmoke;
              width: 60%;
              height: 75%;
              border-radius: 15px 0 0 15px;
            "
          >
            <v-card class="cardColor-1">
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>

              <v-content class="tl" style="font-size: 40px; padding: 0"
                >Sign Up
              </v-content>
              <v-content class="subtl" style="padding: 0; font-size: 20px"
                >Register your account
              </v-content>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-form ref="formSignup">
                <v-alert v-if="error">{{ error }}</v-alert>
                <v-text-field
                  single-line
                  outlined
                  clearable
                  filled
                  rounded
                  label="First Name"
                  type="text"
                  v-model="firstNameInput"
                  :rules="[loginRules.required]"
                >
                </v-text-field>
                <v-text-field
                  single-line
                  outlined
                  clearable
                  filled
                  rounded
                  label="Email"
                  type="email"
                  v-model="emailInput"
                  :rules="[loginRules.email, loginRules.required]"
                >
                </v-text-field>
                <v-text-field
                  single-line
                  outlined
                  clearable
                  filled
                  rounded
                  label="Password"
                  type="password"
                  v-model="passwordInput"
                  :rules="[loginRules.password, loginRules.required]"
                >
                </v-text-field>
                <v-btn
                  rounded
                  x-large
                  color="#3d3d3d"
                  style="color: white"
                  @click="submitRegisterForm"
                  >Sign Up</v-btn
                >
              </v-form>
            </v-card>
          </v-container>
          <v-container
            style="
              background: #dcb933;
              width: 40%;
              height: 75%;
              border-radius: 0 15px 15px 0;
              border-width: 5px;
            "
          >
            <v-card class="cardColor-2">
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>

              <v-content class="tl" style="font-size: 40px; padding: 0"
                >Hello Friend
              </v-content>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-content class="subtl" style="padding: 0; font-size: 20px"
                >Enter your register details
              </v-content>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-spacer tag="v-card-title"></v-spacer>
              <v-btn
                x-large
                color="#3d3d3d"
                style="color: ##3d3d3d"
                @click="showSignIn"
                >Sign In</v-btn
              >
            </v-card>
          </v-container>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      loginEmail: "",
      loginPassword: "",
      emailInput: "",
      passwordInput: "",
      firstNameInput: "",
      error: null,
      loginRules: {
        required: (value) => !!value || "Required.",
        email: (value) =>
          value.endsWith("@gmail.com") ||
          value.endsWith("@hotmail.com") ||
          (value.endsWith("@live.com") && !value.startsWith("@")) ||
          "Email is invalid!",
        password: (value) =>
          value.length >= 8 ||
          "Password should be at least 8 charachters or more",
      },
    };
  },
  methods: {
    showSignIn() {
      this.show = !this.show;
    },
    async submitLogInForm() {
      if (this.$refs.formLogin.validate()) {
        try {
          await this.$store.dispatch("login", {
            email: this.loginEmail,
            password: this.loginPassword,
          });
          this.$router.push("/");
        } catch (err) {
          this.error = err.message;
        }
      }
    },
    async submitRegisterForm() {
      if (this.$refs.formSignup.validate()) {
        try {
          await this.$store.dispatch("signUp", {
            email: this.emailInput,
            password: this.passwordInput,
            firstName: this.firstNameInput,
          });
          this.emailInput = "";
          this.passwordInput = "";
          this.firstNameInput = "";
          this.$router.push("/");
        } catch (err) {
          this.error = err.message;
        }
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.con {
  height: 100%;
}
.form-con-1 {
  display: flex;
  height: 100%;
  width: 80%;
  align-items: center;
}
.cardColor-1 {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
  text-align: center;
  color: #3d3d3d !important;
}
.cardColor-2 {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
  text-align: center;
  color: #3d3d3d !important;
}
.tl {
  font-family: "Montserrat";
  font-weight: 600;
}
.subtl {
  font-family: "Lato";
}
</style>
