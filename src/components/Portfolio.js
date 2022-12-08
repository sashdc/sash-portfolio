import React from "react";
import "animate.css";
import Project from "./Project";
const {projectData} = require('./projectdata/projectdata')

export default function Header() {
  return (
    <div class="    w-100 m-auto animate__animated animate__fadeIn">
      <div class=' '>
        <div class="portfolio mb-5">
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