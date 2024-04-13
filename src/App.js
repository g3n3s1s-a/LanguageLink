import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import "./global.css";
import { Routes, Route } from 'react-router-dom'

function App() {
  const [page, setPage] = useState(null); // Initialize setPage with null

  return <>{page ? page : <Login setPage={setPage} />}</>; // Render Login only if page is null
  return (
    <Routes>
      <Route path="/" element={<Login />} index />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
