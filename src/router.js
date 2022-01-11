import HomePage from "./pages/HomePage.vue";
import SignIn from "./pages/SignInPage.vue";
import MovieDetails from "./components/Movie/MovieDetails.vue";
import Dashboard from "./admin/pages/Dashboard.vue";
import Movies from "./admin/pages/Movies.vue";
import Users from './admin/pages/Users.vue'
import ContactUs from "./pages/ContactUs.vue";
export const routes = [
  { path: "/", component: HomePage },
  { path: "/sign-in", component: SignIn },
  { path: "/contactus", component: ContactUs },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [{ path: "movies", component: Movies }, { path: "users", component: Users }],
  },

  {
    path: "/Movie/:id",
    component: MovieDetails,
    props: true,
    // children: [{ path: "details", component: null }],
  },
  { path: "/:notFound(.*)", component: null },
];
