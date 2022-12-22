import React from "react";
import "../styles/Header.css";
import "animate.css";
import logoblack from "../assets/images/iconwhite.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <a className="navbar-brand  m-auto  " href="#portfolio">
          <img
            src={logoblack}
            alt="Logo"
            height="70"
            className="d-inline-block animate__animated animate__fadeInDown"
          />
        </a>

<div className="sticky animate__animated animate__fadeInLeft">
            
              <div className="d-flex"><a href="#about"><i className="fa fa-regular fa-user" title="About Me"></i></a><p className="sticky-info">About</p>
              </div>
            
              <div className="d-flex"> <a href="#skills"><i class="fa fa-solid fa-list" title="Skills and Things I Know"></i></a>
              <p className="sticky-info">Skills</p>
            </div>
            
            <div className="d-flex">
             <a href="#portfolio"><i className="fa fa-solid fa-briefcase" title="Portfolio of Work"></i></a>
              <p className="sticky-info">Portfolio</p>
            </div>

            <div className="d-flex">
              <a href="#contact"><i className="fa fa-solid fa-envelope" title="Contact Me"></i></a>
              <p className="sticky-info">Contact</p>
              </div>
</div>

        <div className="container navlinks justify-content-around ">
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
