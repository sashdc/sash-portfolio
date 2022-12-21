import React from "react";
import "../styles/Header.css";
import "animate.css";
import logoblack from "../assets/images/iconwhite.png";

export default function Header() {
  return (
    <header >
      <nav className="navbar ">
        
        <a className="navbar-brand  m-auto px-2 " href="#portfolio">
          <img
            src={logoblack}
            alt="Logo"
            height="70"
            className="d-inline-block   animate__animated animate__fadeInDown"
          />
         </a>

        <div className="container justify-content-around ">
          <ul className="animate__animated animate__fadeInDown">
            <li className="about nav-item">
              <a href="#about">About</a>
            </li>
            <li className="skills nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li className="portf nav-item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="contact nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
