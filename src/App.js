import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  const [page, setPage] = useState(null); // Initialize setPage with null

  return <>{page ? page : <Login setPage={setPage} />}</>; // Render Login only if page is null
}

export default App;
