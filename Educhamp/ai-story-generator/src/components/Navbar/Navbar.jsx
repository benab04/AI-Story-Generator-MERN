import React, { useState } from "react";
import "./Navbar.css"
import {motion} from "framer-motion";
function Navbar(){
  
    const [Nav,switchNav]=useState("navbar");
    const [Icon,switchIcon]=useState("fa-solid fa-bars mobile-nav-toggle");
    const [state,changeState]=useState(false);

    function mobNav(){
      changeState(!state);

      if(state)
      {
      switchNav("navbar-mobile");
      switchIcon("fa-solid fa-xmark mobile-nav-toggle");

    }
    else{
    switchNav("navbar");
    switchIcon("fa-solid fa-bars mobile-nav-toggle");
      }
    }
    function closeNav(){
      if(Nav==="navbar-mobile"){ mobNav()}
    }
   
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <motion.div >
        <header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a className="logo d-flex align-items-center " href="/"><h2>EasyAI</h2>
       </a>
      <nav 
       id="navbar" className={Nav}>
      <div id="scrollspy1">
        <ul >
        <li onClick={closeNav}><a onClick={scrollToTop} className="getstarted" href="/"><h3>My Stories</h3></a></li>
        <li onClick={closeNav}><a onClick={scrollToTop} className="getstarted" href="/"><h3>View Leaderboard</h3></a></li>
        
        </ul>
        </div>
        <button style={{height:"40px",width:"40px",backgroundColor:"transparent",border:"none"}} onClick={mobNav} className={Icon}></button>
      </nav>
    </div>
  </header>
  </motion.div>
    );
}

export default Navbar;