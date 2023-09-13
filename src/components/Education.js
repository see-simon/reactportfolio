import React from "react";
import Image from "./images/image.jpg";
import firebaseImage from "./images/FB.png";
import javasript from "./images/javascript.webp";
import postgres from "./images/Postgresql_elephant.svg.png";
import typescript from "./images/Typescript_logo_2020.svg.png";
import nodejs from "./images/nodejs-development-services.png"
import reactjs from "./images/React-icon.svg.png"
import angular from "./images/download.png"
import c from "./images/download (1).png"
import docker from "./images/ywjqppks5ffcnbfjuttq.webp"
import git from "./images/git.png"
import figma from "./images/figma.webp"
import trello from "./images/trello.webp"

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

const Education = () => {
  return (
    <div>
      <header>
        <div class="user">
          <img src={Image} alt="My Image" />
          <h3 class="name">mpelemane simon</h3>
          <p class="post">full stack developer</p>
        </div>

        <nav class="navbar">
          <ul>
            <li>
              <Link to="/Home">home</Link>
            </li>
            <li>
              <Link to="/About">about</Link>
            </li>
           
            <li>
              <Link to="/Education">Skills</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contacts">contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section class="education" id="education">
        <h1 class="heading">
          {" "}
          my <span>education</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            {/* <span>2021 - 2022</span> */}
            <h3>Languages & Databases</h3>

           
              <div className="languages">

                <img className="firebase" src={typescript} alt="My Image" />
                
                <img className="firebase" src={javasript} alt="My Image" />
                <img className="firebase" src={c} alt="My Image" />
               
              </div>
              <p> database: firebase</p>
              <img className="firebase" src={firebaseImage} alt="My Image" />
              <br />
              <img className="firebase" src={postgres} alt="My Image" />
              <br/><br/>
              <span>2023 - 2024</span>
           
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            {/* <span>2021 - 2022</span> */}
            <h3>Frameworks & Technologies</h3>
            
              <br /> <br />
              
              <img className="firebase" src={nodejs} alt="My Image" />
              <img className="firebase" src={reactjs} alt="My Image" />
              <img className="firebase" src={angular} alt="My Image" />
              <br/><br/>
            <span>2023 - 2024</span>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            {/* <span>2021 - 2022</span> */}
            <h3>Tools & Platforms</h3>
            <img className="firebase" src={docker} alt="My Image" />
            <img className="firebase" src={git} alt="My Image" />
            <img className="firebase" src={figma} alt="My Image" />
            <img className="firebase" src={trello} alt="My Image" />
            <br />
            <br/>
            <span>2023 - 2024</span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Education;
