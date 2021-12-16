import HomePage from "./pages/HomePage.vue";
import SignIn from "./pages/SignInPage.vue";
import MovieDetails from "./components/Movie/MovieDetails.vue";
export const routes = [
  { path: "/", component: HomePage },
  { path: "/sign-in", component: SignIn },

  {
    path: "/Movie/:id",
    component: MovieDetails,
    props: true,
    // children: [{ path: "details", component: null }],
  },
  { path: "/:notFound(.*)", component: null },
];
