import "./LoginPage.css"
import React from "react"
import { useState, useEffect } from "react"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    fetch("../db_users.json")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  const handleClick = () => {
    if (!userData) {
      console.log("User data not loaded yet");
      return;
    }
  
    const user = userData.find(user => user.username === username && user.password === password);
    if (user) {
      console.log("Button clicked!");
    } else {
      console.log("Invalid username or password");
    }
  };


  return (
    <div className="authorizationContainer">
      <div className="logInContainer">
        <img
          className="logInLogo"
          src="../img/smartkids_logo2.png"
          alt="logo"
        />
        <div className="authorization">
          <input
            type="text"
            className="authorizationInput"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="authorizationInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgotPassword">
          <a href="/signup">Forgot password?</a>
        </div>
        <div className="buttonGoBox">
          <button className="buttonGo" onClick={handleClick}>
            GO!
          </button>
        </div>
        <div className="signUpBox">
          <div className="moveToSignUpLink">Don't registered yet?</div>
          <div className="signUpLink">
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
