import { Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export const thepath = () => {
    return(
        
        <Routes>
            <Route path = "/login" exact>
                <Login />
            </Route>
            <Route path = "/register" exact>
                <Register />
            </Route>
         </Routes>
    ) 


}