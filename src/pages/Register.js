import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import "../App.css";

import { auth } from "../components/firebase/firebase-config";
const storage = getStorage()

function RegisterFunction() {
  const [RegisterEmail, setRegisterEmail] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [DisplayNameString, setDisplayName] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth.auth,
        RegisterEmail,
        RegisterPassword
      );
      auth.user = user
      updateProfile(auth.currentUser, {displayName: DisplayNameString, photoURL: "https://firebasestorage.googleapis.com/v0/b/dds2-f11de.appspot.com/o/ProfileTemplateIcon.png?alt=media&token=586764fe-82e4-4756-a1d5-455b2561f88c"})
      
      const storageRef = ref(storage);
      storageRef.name = auth.currentUser.uid

      console.log(auth.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  sendEmailVerification(auth.auth.currentUser)

  return (
    <div align="Center">
      <Helmet>
        <title>Register - Arthblox</title>
      </Helmet>
      <h1 className="AccountHeaderText">Sign Up</h1>
      <div className="RegisterBox">

      <h2 className="Email_Text">Email</h2>
      <input className="InputBar" type="text" placeholder="Enter Email Here..." maxLength="40" 
      onChange={(event) => {
        setRegisterEmail(event.target.value)
      }}/>

      <h2 className="Email_Text">Password</h2>
      <input className="InputBar" type="password" placeholder="Password Here..." maxLength="500"
        onChange={(event) => {
        setRegisterPassword(event.target.value)
      }}
      />

      <h2 className="Email_Text">Display Name</h2>
      <input className="InputBar" type="text" placeholder="Display Name Here..." maxLength="20"
      onChange={(event) => {
        setDisplayName(event.target.value)
      }}/>
      <button type="button" id='Signup' name="Signup" value="Signup" className="AccountButton" onClick={register}>Sign Up</button>
      {/* <h1 className="ClickHere_Info"><a className="ClickHere" href="/Login" target="_blank">Click here</a> if you already have an account.</h1> */}
      </div>
    </div>
  );
}

export default RegisterFunction;