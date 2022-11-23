import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { LeftSideData, RightsideData } from './TopbarData';
import '../../App.css';
import { auth } from "../firebase/firebase-config";
var URL = "http://localhost:3000/"

function Navbar() {
    const [inputText, setInputText] = useState("");
    const User = auth.user

    // function authChecker(LocalPlayer) {
    //     if (LocalPlayer) {
    //         document.getElementById('Login').style.visibility = 'hidden';
    //         document.getElementById('Register').style.visibility = 'hidden';
    //         document.getElementById('Settings').style.visibility = 'visible';

    //         // document.getElementById("PlayerIcon_ImageBox").src = LocalPlayer.photoURL
    //     }
    //     else if (User == null) {
    //         document.getElementById('Login').style.visibility = 'visible';
    //         document.getElementById('Register').style.visibility = 'visible';
    //         document.getElementById('Settings').style.visibility = 'hidden';

    //         var OnPage = (window.location.href == URL + "login" | window.location.href == URL + "register")
    //         if (OnPage == false) {
    //             console.log(window.location.href == URL + "login")
    //             window.location.assign("/login");
    //         }
    //     }
    // }

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const handleSearchbar = () => {
        return keyDetector()
    }

    function keyDetector() {
        const node = document.getElementById("Searchbar");
        if (node) {
            return node.addEventListener('keyup', function onEvent(event) {
                if (event.key === "Enter") {
                    if (inputText !== 0) {
                        console.log("Searching: " + node.value);
                        // const URL = "https://www.arthblox.com/games/?Keyword=";
                        const URL = "/games/?Keyword=";
                        const NewURL = URL + node.value
                        console.log(NewURL);

                        window.location = NewURL
                    };
                }
            });
        }
        return
    }

    return (

        <>

            <Helmet>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <IconContext.Provider value={{ color: '#fff' }}>

                {/* Navbar */}
                <div className='navbar'>
                    <ul>
                        <li><h2>ARTHBLOX</h2></li>
                        {/* <li><button><AiIcons.AiFillHome/></button></li> 
                        <li><button><FaIcons.FaGamepad/></button></li>
                        <li><button><FaIcons.FaStore/></button></li> */}

                        {LeftSideData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}

                        {/* Searchbar */}
                        <li><input id="Searchbar" type="text" placeholder="Search" className="Searchbar" onChange={inputHandler} onSubmit={handleSearchbar()} /></li>

                        {RightsideData.map((item, index) => {
                            return (
                                <li id={item.Id} key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Banner */}
                <div className='Banner'><h1>Testing Banner!</h1></div>

                {/*  */}
            </IconContext.Provider>
        </>
    )
}

export default Navbar;