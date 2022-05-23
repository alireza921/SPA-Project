import ProfileLayout from "./profile Layout/ProfileLayout";
import { Link, Route, Routes } from "react-router-dom";



const Profile = (props) => {
  console.log(props);
  return (
    <main>
      <div> Profile Cmp </div>
      <ProfileLayout />
    </main>
  );
};

export default Profile;
