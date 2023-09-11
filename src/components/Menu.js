import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import React from 'react'
import Home from "../components/Home";
import Contacts from "./Contacts";
import About from "./About";
import Education from "./Education";

const Menu =()=>{
    return(
        <Router>
        
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path="/Home" Component={Home} />
          <Route path="/About" Component={About}/>

          <Route path="/Contacts" Component={Contacts} />
          <Route path="/Education" Component={Education}/>
        </Routes>
      </Router>
    )
}
export default Menu