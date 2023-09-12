import React from "react";
import Image from "./images/image.jpg";
import firebaseImage from "./images/FB.png";
import javasript from "./images/javascript.webp";
import postgres from "./images/Postgresql_elephant.svg.png";
import typescript from "./images/Typescript_logo_2020.svg.png";

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
            <span>2021 - 2022</span>
            <h3>Languages & Databases</h3>

            <p>
              mobile development using react native and react js <br /> links:{" "}
              <a href="https://github.com/see-simon/hoteluser.git">
                <p>https://github.com/see-simon/hoteluser.git</p>
              </a>
              <div className="languages">

                <img className="firebase" src={typescript} alt="My Image" />
                
                <img className="firebase" src={javasript} alt="My Image" />
               
              </div>
              <p> database: firebase</p>
              <img className="firebase" src={firebaseImage} alt="My Image" />
              <br />
              <img className="firebase" src={postgres} alt="My Image" />
              <span>2023 - 2024</span>
            </p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2021 - 2022</span>
            <h3>Frameworks & Technologies</h3>
            <p>
              mobile development using react native and react js <br />
              <br /> links
              <br />
              <br />
              <a href="https://github.com/Lovers-1/SocietyApp.git">
                <p>https://github.com/Lovers-1/SocietyApp.git</p>
              </a>{" "}
              <br />
              <br />
              <a href="https://github.com/Thapelo-git/e-societyAdmin-master.git">
                <p>https://github.com/Thapelo-git/e-societyAdmin-master.git</p>
              </a>
              <br /> <br />
              <p> database: firebase</p>
              <img className="firebase" src={firebaseImage} alt="My Image" />
            </p>
            <span>2023 - 2024</span>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2021 - 2022</span>
            <h3>Tools & Platforms</h3>
            <p>
              i create products that provide meaningful and relevant experiences
              to users. This involves the design of the entire process of
              acquiring and integrating the product, including aspects of
              branding, design, usability and function.
            </p>
            <br />
            <span>2023 - 2024</span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Education;
