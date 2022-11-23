import React from "react";
import {Helmet} from "react-helmet";
import "../App.css";
import logo from "../_static/images/404Error.png";

function Create() {
  return (
  <div align="Center">
  <Helmet>
    <title>404 - Arthblox</title>
  </Helmet>
    <img className = "ErrorCode404" src={logo}/> 
    <br/>
    <button type="button" className="Button1"><a href="/">Return Home</a></button>
  </div>
  );
}

export default Create;