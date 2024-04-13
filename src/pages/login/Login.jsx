
import React, { useState } from 'react';
import logoImage from "./language_logo.png";
import Register from "../register/Register";
import getUsersFromBack4App from './loginfunctions';
import Home from '../home/Home';


export default function Login({ setPage }) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // New state for error handling

  const handleLogin = async () => {
    console.log('Login button clicked');
    console.log('Username:', username);
    console.log('Password:', password);

    try {
      const users = await getUsersFromBack4App(username);
      console.log(users)
      if (users.length === 0) {
        setError('User not found. Please register'); // Set error state
      } else {
        console.log("shit works my boyyyyyy")
        setPage(<Home />);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      
    }
  };

  const handleRegister = () => {
    console.log('Register button clicked');
    setPage(<Register />);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            <img src={logoImage} alt="Logo" />
          </h3>
          <span className="loginDesc">
            Connect with other like minded individuals here on LanguageLink!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            <input
              placeholder="Password"
              className="loginInput"
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
            {error && <div className="error">{error}</div>} {/* Render error message */}
              <button className="loginButton" onClick={handleLogin}>
                Log In
              </button> 
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={handleRegister}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
