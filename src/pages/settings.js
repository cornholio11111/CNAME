import React from "react";
import "../App.css";

import { auth } from "../components/firebase/firebase-config";
import { Helmet } from 'react-helmet';

async function logout() {
  console.log(auth.auth.currentUser)
  if (auth.auth.currentUser != null) {
    auth.auth.signOut().then(() => {
      console.log("User has signed out!")
      auth.isSignedOut = true
    })
  }
  else {
    console.log("No User!")
  }
}

function Main() {
  return (
    <div align="Center">
      <Helmet>
        <title>Settings - Arthblox</title>
      </Helmet>

      <button id="LogoutButton_ID" className="LogoutButton" type="button" onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Main;