import HomePage from "./pages/HomePage.vue";
import SignIn from "./pages/SignInPage.vue";
export const routes = [
  { path: "/", component: HomePage, redirect: '/Home' },
  { path: "/Home", component: HomePage },


  { path: "/sign-in", component: SignIn },
];
