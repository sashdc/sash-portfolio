import React from "react";
import headshot from "../assets/images/headshotpx.jpg";
import "animate.css";

export default function Contact() {
  return (
    <div className=" " >
      <div
        className="d-flex profile text-right w-50 m-auto animate__animated animate__fadeInUp "
        id="contact">
        <div className="text-right">
          <h2 className=" text-right">
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
        <img
          src={headshot}
          className="rounded headshot mb-4 shadow "
          alt="headshot"
          height="200px"
        />
      </div>
    </div>
  );
}
