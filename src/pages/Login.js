import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../App.css";
import { auth } from "../components/firebase/firebase-config";

function LoginFunction() {
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth.auth,
        LoginEmail,
        LoginPassword
      );
      auth.user = user
      console.log(auth.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendPReset = async () => {
    console.log('Got Password Reset Request!');
    var email = document.getElementById("emailBox").value;
    auth.sendPasswordResetEmail(email).then(() => {
      console.log('email sent!');
    }).catch(function (error) {
      // An error happened.
    });
  }

  return (
    <div align="Center">
      <Helmet>
        <title>Login - Arthblox</title>
      </Helmet>
      <h1 className="Signup_Text">Login</h1>
      <div className="LoginBox">

        <h2 className="Email_Text">Email</h2>
        <input name="emailBox" className="InputBar" type="text" placeholder="Enter Email Here..." maxLength="200"

          onChange={(event) => {
            setLoginEmail(event.target.value)
          }}
        />

        <h2 className="Email_Text">Password</h2>
        <input className="InputBar" type="password" placeholder="Password Here..." maxLength="500"
          onChange={(event) => {
            setLoginPassword(event.target.value)
          }} />
        <button type="button" id='login' name="login" value="login" className="AccountButton" onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default LoginFunction;