import React, { useContext } from "react";
import "./FormLogin.css";
import { Navigate } from "react-router-dom";
import UseContext from "../../Context/UseContext";

export default function FormLogin() {
  const contextData = useContext(UseContext);

  const loginUserHandler = (event) => {
    event.preventDefault();
    const user = contextData.users.find(
      (user) =>
        user.name === contextData.userName &&
        user.password === contextData.userPassword
    );
    if (user) {
      contextData.setInLogin(true);
    } else {
      alert("User not found. Please register to login.");
      contextData.setUserName("")
      contextData.setUserPassword("")
    }
  };

  return (
    <>
      <form class="form" onSubmit={loginUserHandler}>
        <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input
            placeholder="Enter your Name"
            type="text"
            value={contextData.userName}
            onChange={(e)=>contextData.setUserName(e.target.value)}
          />
        </div>
        <div class="input-container">
          <input
            placeholder="Enter password"
            type="password"
            value={contextData.userPassword}
            onChange={(e)=>contextData.setUserPassword(e.target.value)}
          />
        </div>
        <button class="submit" type="submit">
          Sign in
        </button>

        <p class="signup-link">
          No account?
          <a href="">Sign up</a>
        </p>
      </form>

      {contextData.inLogin && <Navigate to="/todo" />}
    </>
  );
}
