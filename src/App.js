import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Aboutus from "./pages/aboutus/Aboutus";
import User1 from "./pages/users/user1/user";
import User2 from "./pages/users/user2/user";
import User3 from "./pages/users/user3/user";
import User4 from "./pages/users/user4/user";
import User5 from "./pages/users/user5/user";
import User6 from "./pages/users/user6/user";
import User7 from "./pages/users/user7/user";
import User8 from "./pages/users/user8/user";
import User9 from "./pages/users/user9/user";
import User10 from "./pages/users/user10/user"; 
import Groups from "./pages/Groups/Groups";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/user1" element={<User1 />} />
      <Route path="/user2" element={<User2 />} />
      <Route path="/user3" element={<User3 />} />
      <Route path="/user4" element={<User4 />} />
      <Route path="/user5" element={<User5 />} />
      <Route path="/user6" element={<User6 />} />
      <Route path="/user7" element={<User7 />} />
      <Route path="/user8" element={<User8 />} />
      <Route path="/user9" element={<User9 />} />
      <Route path="/user10" element={<User10 />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
  );
}

export default App;
