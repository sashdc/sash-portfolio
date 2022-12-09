import React from "react";
import "../styles/Project.css";
import "animate.css";


export default function Project(props) {
  return (
    <div className="container  w-10 d-flex flex-column justify-content-between align-items-center animate__animated animate__slideInUp">
      <img src={props.img} alt={props.name} className="  image p-3  " />
      <div className="middle">
        <h1 className="overlaytext">{props.name}</h1>
        <a
          className="m-1"
          href={props.deployment}
          target="_blank"
          rel="noreferrer">
          <i className="fa fa-2x fa-laptop project-icon"></i>
        </a>
        <a
          className="m-1"
          href={props.github}
          target="_blank"
          rel="noreferrer">
          <i className="fa fa-2x fa-github project-icon" aria-hidden="true"></i>
        </a>
        <h5 className="overlaytext">{props.description}</h5>
        <p className="overlaytext">{props.skills}</p>
      </div>
    </div>
  );
}
