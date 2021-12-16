import HomePage from "./pages/HomePage.vue";
import SignIn from "./pages/SignInPage.vue";
import MovieDetailsPage from "./pages/MovieDetailsPage.vue";
export const routes = [
  { path: "/", component: HomePage },
  { path: "/sign-in", component: SignIn },

  {
    path: "/Movie/:id",
    component: MovieDetailsPage,
    props: true,
    // children: [{ path: "details", component: null }],
  },
  { path: "/:notFound(.*)", component: null },
];
