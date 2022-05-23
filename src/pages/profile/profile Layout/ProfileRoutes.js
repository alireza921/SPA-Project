
import Downloads from "./Downloads";
import Dashboard from "./Dashboard";

const ProfileRoutes = [
    { id : 1 , path:"dashboard" , name: "Dashboard" , element : <Dashboard /> } , 
    {id : 2 , path : "downloads" , name:"Download" , element : <Downloads /> } ,
]

export default ProfileRoutes ;
