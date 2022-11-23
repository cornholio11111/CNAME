import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";

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

function App() {
  return (
    <HashRouter>
      {/* <div className="App">
        <Nav />
      </div> */}
      <Nav />
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

        {/* 404 Paths */}
        <Route path="*" element={< Four0Four />} />
        <Route path="" element={< Four0Four />} />
        <Route element={< Four0Four />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
