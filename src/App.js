import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            // <Route key={route.id} path={route.path} element={route.element} />
            <Route {...route} key={route.id} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
