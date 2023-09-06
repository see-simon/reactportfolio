import React from "react";
import Image from './images/image.jpg'

const Home =()=>{
    return(
        

        
        
        <header>

        <div class="user">
            {/* <Image /> */}
            <img src={Image} alt="My Image" />
            <h3 class="name">mpelemane simon</h3>
            <p class="post">full stack developer</p>
        </div>
    
        <nav class="navbar">
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#education">education</a></li>
               
                <li><a href="#Contacts">contact</a></li>
            </ul>
        </nav>
    
    </header>
        
        
    )
}
export default Home