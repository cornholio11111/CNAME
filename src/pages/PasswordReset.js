import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../App.css"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { async } from "@firebase/util";
import { auth } from "../components/firebase/firebase-config";

function PasswordReset() {

  const [user, setUser] = useState({});
  const auth = getAuth();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  return (
    <div>
      <Helmet>
        <title>PasswordReset - Arthblox</title>
      </Helmet>

      <h1 style={"Width:50px;"}>PasswordReset</h1>

    </div>
  );
}

export default PasswordReset;