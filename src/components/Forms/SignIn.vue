<template>
  <div class="sa">
    <div class="container" v-if="show === false">
      <div class="signIn-container">
        <div style="width: 60%; height: 100%">
          <form>
            <div class="sign-in-use">
              <h2>Sign In</h2>
              <p>Use your account</p>
            </div>
            <div style="display: flex; flex-direction: column">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <button class="sign">Sign In</button>
          </form>
        </div>
        <div class="signIn-text-con">
          <h2>Welcome Back, Friend</h2>
          <p>Enter your login details</p>
          <button @click="showSignIn" class="invert-btn">Sign up</button>
        </div>
      </div>
    </div>
    <div class="container" v-if="show === true">
      <div class="signIn-container">
        <div style="width: 60%; height: 100%">
          <form @submit.prevent="submitRegisterForm">
            <div class="sign-up-register">
              <h2>Sign Up</h2>
              <p>Register your account</p>
            </div>
            <div style="display: flex; flex-direction: column">
              <input
                type="text"
                placeholder="Name"
                v-model.trim="nameInput"
                :class="{
                  invalid: nameIsValid === 'invalid',
                  valid: nameIsValid === 'valid',
                }"
                @blur="name"
              />
              <p v-if="nameIsValid === 'invalid'" style="color: red; margin: 0">
                Please enter a name!
              </p>

              <input
                type="email"
                placeholder="Email"
                v-model="emailInput"
                :class="{
                  invalid: emailIsValid === 'invalid',
                  valid: emailIsValid === 'valid',
                }"
                @blur="email"
              />
              <p
                v-if="emailIsValid === 'invalid'"
                style="color: red; margin: 0"
              >
                Email Invalid! Please enter a valid email
              </p>
              <input
                type="password"
                placeholder="Password"
                v-model.trim="passwordInput"
                :class="{
                  invalid: passwordIsValid === 'invalid',
                  valid: passwordIsValid === 'valid',
                }"
                @blur="password"
                :input="passwordInput"
              />
              <p
                v-if="passwordIsValid === 'invalid'"
                style="color: red; margin: 0"
              >
                Password Invalid!
                <span>Please enter 8 charachters!</span>
              </p>
            </div>
            <button class="sign">Sign Up</button>
            <p v-if="!formFilled" style="margin: 0">Form is not filled!</p>
            
          </form>
        </div>
        <div class="signIn-text-con">
          <h2>Hello Friend</h2>
          <p>Enter your register details</p>
          <button @click="showSignIn" class="invert-btn">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      signUp: false,
      formFilled: true,
      nameInput: "",
      emailInput: "",
      passwordInput: "",
      nameIsValid: "pending",
      emailIsValid: "pending",
      passwordIsValid: "pending",
    };
  },
  methods: {
    showSignIn() {
      this.show = !this.show;
    },
    name() {
      this.nameInput.length > 0 && this.nameInput.length <= 12
        ? (this.nameIsValid = "valid")
        : (this.nameIsValid = "invalid");
      // console.log(this.nameInput);
    },
    email() {
      this.emailInput.endsWith("@gmail.com" || "@hotmail.com" || "@live.com") &&
      !this.emailInput.startsWith("@")
        ? (this.emailIsValid = "valid")
        : (this.emailIsValid = "invalid");
    },
    password() {
      this.passwordInput.length >= 8
        ? (this.passwordIsValid = "valid")
        : (this.passwordIsValid = "invalid");
    },
    submitRegisterForm() {
      if (
        this.nameIsValid === "valid" &&
        this.emailIsValid === "valid" &&
        this.passwordIsValid === "valid"
      ) {
        console.log("po bon");
        
        this.nameInput = "";
        this.emailInput = "";
        this.passwordInput = "";
        this.nameIsValid = "pending";
        this.emailIsValid = "pending";
        this.passwordIsValid = "pending";
        this.formFilled = true;
        this.logInRegister();
      } else {
        console.log("spo bon");
        this.formFilled = false;
        return;
      }
    },
  },
};
</script>

<style scoped>
.sa {
  height: 939px;
}

.container {
  position: relative;
  background: white;
  height: 500px;
  width: 50%;
  top: 25%;
  border-radius: 10px;
}
.signIn-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
input {
  border: none;
  border-radius: 30px;
  padding: 10px 10px;
  margin: 10px 0px;
  width: 400px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
}
input:focus {
  outline: none;
  background-color: #fff;
}
.invalid {
  border-color: red;
}
.valid {
  border-color: green;
}
.signIn-text-con {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(to bottom right, black, #436252);
  color: whitesmoke;
  border-radius: 10px;
}
.sign {
  width: 160px;
  height: 40px;
  margin-top: 15px;
  border-radius: 20px;
  border: 1px solid #436252;
  background-color: #436252;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}
.sign-in-use {
  padding: 15px;
  text-align: center;
}
.sign-in-use h2 {
  padding: 10px;
}
.sign-up-register {
  padding: 15px;
  text-align: center;
}
.sign-up-register h2 {
  padding: 10px;
}
.invert-btn {
  width: 160px;
  height: 40px;
  margin-top: 15px;
  border-radius: 20px;
  border: 1px solid #436252;
  background-color: #436252;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
