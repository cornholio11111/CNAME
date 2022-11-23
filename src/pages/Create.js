import React from "react";
import { Helmet } from "react-helmet";
import "../App.css"
import image from "../pages/TestImageA.png"

function Create() {
  return (
    <>
      <Helmet>
        <title>Create - Arthblox</title>
      </Helmet>

      <div className="CreateBox">
        <ul>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        <li><img src={image} /><h1>| Pet Simulator X</h1> <button>Edit</button></li>
        </ul>
      </div>

    </>
  );
}

export default Create;