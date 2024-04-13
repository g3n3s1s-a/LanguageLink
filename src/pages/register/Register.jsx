import "./register.css";
import logoImage from "./language_logo.png";

export default function Register() {
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
            <input placeholder="Name" className="loginInput" />
            <input placeholder="Age" className="loginInput" />
            <input
              placeholder="Language you want to learn"
              className="loginInput"
            />
            <input placeholder="Language you speak" className="loginInput" />
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
