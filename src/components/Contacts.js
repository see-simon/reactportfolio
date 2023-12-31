import React from "react";
import Image from "./images/image.jpg";
import linkedIn from "./images/linkedIn.webp";
import twitter from "./images/twitter.png";
import facebook from './images/facebook.png'

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

const Contacts = () => {
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
            {/* <li>
              <Link to="/Contacts">contact</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <section class="contact" id="contact">
        <h1 class="heading">
          {" "}
          <span>contact</span> me{" "}
        </h1>

        <div class="row">
          <div class="content">
            <h3 class="title">contact info</h3>

            <div class="info">
              <h3>
                {" "}
                <i class="fas fa-envelope"></i> sea6580@gmail.com{" "}
              </h3>
              <h3>
                {" "}
                <i class="fas fa-phone"></i> 0769982537{" "}
              </h3>
              <h3>
                {" "}
                <i class="fas fa-phone"></i> 0720206580{" "}
              </h3>
              <h3>
                {" "}
                <i class="fas fa-map-marker-alt"></i> 27/4677 LUVUYO STREET EXT
                21 1401{" "}
              </h3>
            </div>
          </div>
          <div className="contactsnnnnn">
          <a href="https://www.linkedin.com/feed/">
            <img className="firebase" src={linkedIn} alt="My Image" />
            </a>
            <br/>
            <a href="https://www.facebook.com/login/">
            <img className="firebase" src={twitter} alt="My Image" />
            </a>
            <br/>
            <a href="https://www.facebook.com/login/">
            <img className="firebase" src={facebook} alt="My Image" />
            </a>
          </div>
        </div>
       
      </section>
    </div>
  );
};
export default Contacts;
