import React from "react";
import "animate.css";
import Skill from "./Skill";
const {skillData} = require('./skilldata/skilldata')


export default function Skills() {
  return (
    <div
      class="text-center section   m-auto animate__animated animate__fadeIn"
      id="skills">
      <div className="parallax parallax1 animate__animated animate__fadeIn ">
        {" "}
        <h1 className="title p-3 m-auto">WHAT DO I KNOW? </h1>{" "}
      </div>
      {/* <h1 className="mb-3">WHAT DO I KNOW? </h1> */}
      <div className="h5">LANGUAGES & LIBRARIES </div>
      {/* <p>
              JavaScript • MySQL • NoSQL • MongoDB • GraphQL • REST API • Express • ReactJS • NodeJS •
              jQuery  • HTML • CSS3 • Handlebars • Bootstrap • Bulma • Semantic UI
            </p> */}
      <div className=" d-flex  m-auto mt-2  skillbar">
      {skillData.map((skill) => (
            <Skill
            name={skill.name}
            img={skill.img}        
          />
          ))}
      </div>
      <div className="h5 mt-2">INDUSTRY PRACTICES AND APPLICATIONS</div>
      <p>
        Agile Methodology • TDD • Github • Heroku • Insomnia • MongoDBCompass
      </p>
    </div>
  );
}
