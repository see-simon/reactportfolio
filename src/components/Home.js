import React from "react";
import Image from "./images/image.jpg";
import { Link } from "react-router-dom";

const Home = () => {
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
              <Link to="/Projects">Projects</Link>
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

      {/* <!-- header section ends --> */}

      <div id="menu" class="fas fa-bars"></div>

      {/* <!-- home section starts  --> */}

      <section class="home" id="home">
        <h3>HI THERE !</h3>
        <h1>
          I'M <span>mpelemane simon</span>
        </h1>
        <p>
          I am a punctual, motivated and enthusiastic information technology
          undergraduate who is able to work in a busy environment and produce
          high standards of work. I am an excellent team worker and am able to
          take instructions from all levels and build up good working
          relationships with all colleagues. I am flexible, reliable and possess
          excellent time keeping skills.
        </p>
        <Link to="/About">
          <button class="btn">
            about me <i class="fas fa-user"></i>
          </button>
        </Link>
      </section>

      {/* <!-- home section ends --> */}

      {/* <!-- education section starts  --> */}

      <section class="education" id="education">
        <h1 class="heading">
          {" "}
          my <span>education</span>{" "}
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
          </div>
        </div>
      </section>

      {/* <!-- education section ends --> */}

      {/* <!-- contact section starts  --> */}

      {/* <section class="contact" id="contact"> */}

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
              <i class="fas fa-map-marker-alt"></i> 27/4677 LUVUYO STREET EXT 21
              1401{" "}
            </h3>
          </div>
        </div>

        {/* <form action="">

                        <input type="text" placeholder="name" class="box">
                            <input type="email" placeholder="email" class="box">
                                <input type="text" placeholder="project" class="box">
                                    <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
                                    <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i> </button>

                                </form> */}
      </div>

      {/* </section> */}

      {/* <!-- contact section ends --> */}
      {/* </section> */}
    </div>
  );
};
export default Home;
