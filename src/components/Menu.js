import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import React from 'react'
import Home from "../components/Home";

const Menu =()=>{
    return(
        <Router>
        {/* <nav>
          <Link to="/">Getstarted</Link>
  
          <Link to="/Login">Login</Link>
  
          <Link to="/Register">Register</Link>
        </nav> */}
        <Routes>
          <Route path ="/" element={<Home/>}/>
          {/* <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ManageAdmin" element={<ManageAdmin/>} />
          <Route path="/CreateRoom" element={<CreateRoom/>} />
          <Route path ="/AddHotel" element={<AddHotel/>}/>
          <Route path = '/ListOfUsers' element={<ListOfUsers/>}/>
          <Route path = '/Getstarted' element ={<Getstarted/>}/> */}
          
          
        
        </Routes>
      </Router>
    )
}
export default Menu