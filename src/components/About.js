import React from "react";
import Image from "./images/image.jpg";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

const About = () => {
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
              <Link href="/Contacts">contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          <span>about</span> me{" "}
        </h1>

        <div class="row">
          <div class="info">
            <h3>
              {" "}
              <span> name : </span>thobejane mpelemane simon
            </h3>
            <h3>
              {" "}
              <span> age : </span> 27{" "}
            </h3>
            <h3>
              {" "}
              <span> qualification : </span> information technology{" "}
            </h3>
            <h3>
              {" "}
              <span> post : </span> front end developer{" "}
            </h3>
            <h3>
              {" "}
              <span> language : </span> pedi{" "}
            </h3>
            <a href="#">
              <button class="btn">
                {" "}
                download CV <i class="fas fa-download"></i>{" "}
              </button>
            </a>
          </div>

          <div class="counter">
            <div class="box">
              <span>1-2</span>
              <h3>years of experience</h3>
            </div>

            <div class="box">
              <span>1</span>
              <h3>porject completed</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
