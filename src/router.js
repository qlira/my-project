import HomePage from "./pages/HomePage.vue";
import SignIn from "./pages/SignInPage.vue";
import MovieDetails from "./components/Movie/MovieDetails.vue";
import Dashboard from "./admin/pages/Dashboard.vue";
import Movies from "./admin/pages/Movies.vue";
import Users from "./admin/pages/Users.vue";
import ContactUs from "./pages/ContactUs.vue";
import AboutUs from "./pages/AboutUs.vue";
import Categories from "./admin/pages/Categories.vue";
import Contacts from "./admin/pages/Contacts.vue";
import Tickets from "./admin/pages/Tickets.vue";
import TicketOrders from "./pages/TicketOrders.vue";
export const routes = [
  { path: "/", component: HomePage },
  { path: "/sign-in", component: SignIn },
  { path: "/contactus", component: ContactUs },
  {
    path: "/aboutus",
    component: AboutUs,
  },
  {
    path: "/ticketorders",
    component: TicketOrders,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (token === "" || token == null) {
        next("/sign-in");
      } else {
        next();
      }
    },
  },
  {
    path: "/dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token === "" || token == null || user.user.role == false) {
        next("/sign-in");
      } else {
        next();
      }
    },
    children: [
      { path: "movies", component: Movies },
      { path: "users", component: Users },
      { path: "categories", component: Categories },
      { path: "contacts", component: Contacts },
      { path: "tickets", component: Tickets },
    ],
  },

  {
    path: "/Movie/:id",
    component: MovieDetails,
    props: true,
    // children: [{ path: "details", component: null }],
  },
  { path: "/:notFound(.*)", component: null },
];
