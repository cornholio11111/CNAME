import React, { StrictMode, Fragment } from 'react';
import { Helmet } from "react-helmet";
import "../App.css"
import { getFirestore, collection, getDocs, addDoc} from "firebase/firestore"

const e = React.createElement;
const Database = getFirestore()
const GamesCollection = collection(Database, 'Games')

function showContent() {
  const games = []
  getDocs(GamesCollection).then((snapshot) => { snapshot.forEach(doc => games.push(doc.data())) });
  return games
}

async function ToMap() {
  var Array = showContent()
  console.log(Array)
  Array.map(function (Objects, _Index) {
    console.log(Objects)
    const _li = document.createElement("li");
    _li.innerHTML = "Objects.Name";
    document.getElementById('gameslist').appendChild(_li);
  })
}


function Games() {
  return (
    <>
      <Helmet>
        <title>Games - Arthblox</title>
      </Helmet>
      
      <ul id="gameslist" className="GamesList"></ul>
      
      <script src={ToMap()}/>
    </>
  );
}

export default Games;