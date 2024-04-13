import React, { useState } from 'react';
import "./register.css";

export default function Register() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [languageToLearn, setLanguageToLearn] = useState('');
  const [languageSpoken, setLanguageSpoken] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleSignUp = () => {
    // Perform validation or submit the form data
    if (password !== passwordAgain)
    {
      console.log('Passwords do not match');
      return; 
    }


    const formData = {
      name: name,
      age: age,
      language_learn: languageToLearn,
      language_teach: languageSpoken,
      username: username,
      email: email,
      password: password,
      passwordAgain: passwordAgain
    };

    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Language to Learn:', languageToLearn);
    console.log('Language Spoken:', languageSpoken);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Password Again:', passwordAgain);
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LanguageLink</h3>
          <span className="loginDesc">
            Connect with other like-minded indivials here on LanguageLink!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Name" className="loginInput" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Age" className="loginInput" value={age} onChange={(e) => setAge(e.target.value)} />
            <input placeholder="Language you want to learn" className="loginInput" value={languageToLearn} onChange={(e) => setLanguageToLearn(e.target.value)} />
            <input placeholder="Language you speak" className="loginInput" value={languageSpoken} onChange={(e) => setLanguageSpoken(e.target.value)} />
            <input placeholder="Username" className="loginInput" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Email" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" className="loginInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input placeholder="Password Again" className="loginInput" type="password" value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} />
            <button className="loginButton" onClick={handleSignUp}>Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}







