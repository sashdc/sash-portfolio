import React from "react";
import headshotpx from "../assets/images/headshot.jpg";
import headshot from "../assets/images/headshotpx.jpg";
import "animate.css";

export default function Contact() {
  return (
    <div className=" text-right" >
      <div
        className="d-flex profile contact  w-50 m-auto animate__animated animate__fadeInUp "
        id="contact">
        <div >
          <h2 >
            Get in touch, ask me something, tell me something...
          </h2>
          <ul className="contact list-unstyled  ">
            <li>
              <a href="mailto:saharshdc@gmail.com" className="nav-link pl-0">
                <i className="fa fa-envelope"></i> Email
              </a>
            </li>
            <li>
              <a href="tel:6472261239" className="nav-link pl-0">
                <i className="fa fa-phone"></i> Phone
              </a>
            </li>
          </ul>
        </div>
        <div className="headshots mt-2">
        <a href="#about">
        <img
            src={headshot}
            className="rounded headshot mx-4 shadow "
            alt="headshot"
            height="200px"
          />
        <img
          src={headshotpx}
          className="rounded headshotpx mx-4 shadow "
          alt="headshot"
          height="200px"
        /></a>
        </div>
      </div>
    </div>
  );
}
