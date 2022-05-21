import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/about-us/AboutUs";
import Home from "./pages/homePage/HomePage";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} exact={true} />
          <Route path='/About-Us' element={<AboutUs />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
