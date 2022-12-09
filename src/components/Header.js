import React from "react";
import "../styles/Header.css";
import "animate.css";
import logoblack from "../assets/images/iconblack.png";

export default function Header() {
  return (
    <header class="heading">
      <nav class="navbar ">
          <a className="navbar-brand" href="#">
            <img
              src={logoblack}
              alt="Logo"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
            Sash Dc
          </a>
          
        <div class="container">
            <ul>
                <li class="home active"><a href="#home">Home</a></li>
                <li class="about"><a href="#about">About</a></li>
                <li class="contact"><a href="#contact">Contact</a></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}
