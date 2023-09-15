import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Image from "./images/image.jpg";


const Projects = () => {
  return (
    <di>
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
      <section class="education" id="education">
        <h1 class="heading">
          {" "}
          my <span>Projects</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2021 - 2022</span>
            <h3>full stack individual development</h3>
            <p>
              mobile development using react native and react js <br /> links:{" "}
              <a href="https://github.com/see-simon/hoteluser.git">
                <p>https://github.com/see-simon/hoteluser.git</p>
              </a>
              <br />
              <p> database: firebase</p>
              
              <br />
              <span>2023 - 2024</span>
            </p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2021 - 2022</span>
            <h3>full stack group development</h3>
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
              
              
            </p>
            <span>2023 - 2024</span>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap"></i>
            <span>2021 - 2022</span>
            <h3>ux disign</h3>
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
    </di>
  );
};

export default Projects