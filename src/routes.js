import Blog from "./components/Blog/Blog";
import AboutUs from "./pages/about-us/AboutUs";
import BlogPage from "./pages/blogpage/BlogPage";
import Home from "./pages/homePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import PostPage from "./pages/PostPage/PostPage";
import Profile from "./pages/profile/Profile";

const routes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/About-Us", element: <AboutUs /> },
  { id: 3, path: "/Profile", element: <Profile /> },
  { id: 4, path: "*", element: <NotFound /> },
  { id: 5, path: "/blogs", element: <BlogPage /> },
  { id: 6, path: "/blogs/:id", element: <Blog /> },
  { id: 7, path: "/post/:id", element: <PostPage /> },
];

export default routes;
