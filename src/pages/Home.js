import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../App.css"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

function Home() {

  const [user, setUser] = useState({});
  const auth = getAuth();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      <Helmet>
        <title>Home - Arthblox</title>
      </Helmet>

      <h1>Welcome Back, (!Username)</h1>

      <h2>Friends(0)</h2>

      <h3>Play Again</h3>
      <li className="Frindlist_HomePage">
      <div className="FriendBox_HomePage">

      </div>
      <div className="FriendBox_HomePage">

      </div>
      </li>

    </div>
  );
}

export default Home;