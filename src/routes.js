import AboutUs from "./pages/about-us/AboutUs";
import Home from "./pages/homePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/profile/Profile";

const routes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/About-Us", element: <AboutUs /> },
  { id: 3, path: "/Profile", element: <Profile /> },
  { id: 4, path: "*", element: <NotFound /> },
];

export default routes;
