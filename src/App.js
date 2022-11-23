import React, { useState } from "react";
import './App.css';

// Pages
import Nav from './components/Navigation/Navbar';
import Profile from './pages/Profile';
import Games from './pages/Games';
import Create from './pages/Create';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import LoginFunction from './pages/Login'
import RegisterFunction from './pages/Register'
import Four0Four from './pages/404'
import Settings from './pages/settings'

// Other
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("Provider-specific UID: " + profile.uid);
      console.log("Name: " + profile.displayName);
      console.log("Email: " + profile.email);
      console.log("Photo URL: " + profile.photoURL);
    });
  }

  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Routes>

        {/* Normal Paths */}
        <Route path="/" element={< Home />} />
        <Route path="/Home" element={< Home />} />
        <Route path="/Login" element={< LoginFunction />} />
        <Route path="/Register" element={< RegisterFunction />} />
        <Route path="/Settings" element={< Settings />} />
        <Route path="/Games" element={< Games />} />
        <Route path="/Create" element={< Create />} />
        <Route path="/Catalog" element={< Catalog />} />
        <Route path="/Profile" element={< Profile />} />
        <Route path="/Messages" element={< Profile />} />
        <Route path="/Support" element={< Profile />} />

        {/* Dehub Paths */}
        <Route path="/Devhub/Home" element={< Profile />} />


        {/* 404 Paths */}
        <Route path="*" element={< Four0Four />} />
        <Route path="" element={< Four0Four />} />
        <Route element={< Four0Four />} />
      </Routes>
    </Router>
  );
}

export default App;
