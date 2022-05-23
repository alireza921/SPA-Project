import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Downloads from "./Downloads";
import SideBar from "./SidBar";

const ProfileLayout = () => {
  return (
    <main>
      <SideBar />

      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='downloads' element={<Downloads />} />
      </Routes>

    </main>
  );
};

export default ProfileLayout;
