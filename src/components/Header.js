import React from "react";
import "../styles/Header.css";
import "animate.css";
import logoblack from "../assets/images/iconwhite.png";

export default function Header() {
  return (
    <header className="">
      <nav className="navbar ">
          <a className="navbar-brand m-3 m-auto" href="#portfolio">
            <img
              src={logoblack}
              alt="Logo"
              height="70"
              className="d-inline-block  align-text-top animate__animated animate__fadeInTopLeft"
            />
       =    </a>
          
        <div className="container">
            <ul  className="animate__animated animate__fadeInDown">
                {/* <li className="home "><a href="#home">Home</a></li> */}
                <li className="about"><a href="#about">About</a></li>
                <li className="skills"><a href="#skills">Skills</a></li>
                <li className="portf"><a href="#portfolio">Portfolio</a></li>
                <li className="contact"><a href="#contact">Contact</a></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}
