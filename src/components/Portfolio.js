import React from "react";
import "animate.css";
import Project from "./Project";
const {projectData} = require('./projectdata/projectdata')

export default function Portfolio() {
  return (
    <div className="  my-5  w-100 text-center m-auto animate__animated animate__fadeIn" id="portfolio">
      <div>
      <h1 className="mb-3">WHAT HAVE I MADE? </h1>

        <div className="portfolio ">
          {projectData.map((project) => (
            <Project
            name={project.name}
            description={project.description}
            img={project.img}
            github={project.github}
            deployment={project.deployment}
            skills={project.skills}
          />
          ))}
                
        </div>
      </div>
    </div>
  );
}