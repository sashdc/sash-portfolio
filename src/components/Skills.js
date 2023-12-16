import React, { useState, useEffect } from 'react';
import "animate.css";
import Skill from "./Skill";
const {skillData} = require('./skilldata/skilldata')


export default function Skills() {

  const [hovered, setHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const fonts = ['Rubik Broken Fax', 'Rubik Bubbles', 'Rubik Doodle Triangles', 'Rubik Iso','Rubik Maps', 'Rubik Moonrocks','Rubik Pixels','Rubik Wet Paint','Rubik Doodle Shadow','Rubik Beastly' ]; 
  // Add more fonts as needed

  useEffect(() => {
    let intervalId;

    const startCycling = () => {
      intervalId = setInterval(() => {
        setHoverIndex((prevIndex) => (prevIndex + 1) % fonts.length);
      }, 180); 
      // Adjust the interval (in milliseconds) based on your preference
    };

    const stopCycling = () => {
      clearInterval(intervalId);
    };

    if (hovered) {
      startCycling();
    } else {
      setHoverIndex(0); // Reset to the default font when not hovering
      stopCycling();
    }

    return () => stopCycling(); // Cleanup the interval on component unmount
  }, [hovered, fonts]);

  const handleMouseEnter = () => {
    // Start the cycling when the mouse enters the element
    setHovered(true);
    console.log("fonts length is" + fonts.length)

  };

  const handleMouseLeave = () => {
    // Stop the cycling when the mouse leaves the element
    setHovered(false);
  };

  const fontClass = ` ${hovered ? `hover-${hoverIndex}` : ''}`;

  return (
    <div
      class="text-center section m-auto animate__animated animate__fadeIn"
      id="skills">
      <div className="parallax parallax1 animate__animated animate__fadeIn ">
        {" "}
        <h1 className={`title p-3 m-auto ${fontClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>WHAT DO I KNOW? </h1>{" "}
      </div>
      {/* <h1 className="mb-3">WHAT DO I KNOW? </h1> */}
      <div className="h3">LANGUAGES & LIBRARIES </div>
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
      <div className="h3 mt-2">INDUSTRY PRACTICES AND APPLICATIONS</div>
      <p className="h5">
        Agile Methodology • TDD • Github • Heroku • Insomnia • MongoDBCompass
      </p>
    </div>
  );
}
