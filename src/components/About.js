import React from "react";
import headshot from '../assets/images/headshot.jpg'
import "animate.css";

export default function Header() {
  return (
 
    <div class="section aboutme" data-anchor="aboutme">
     
      <div class='d-flex h-100 w-75 m-auto mt-5 animate__animated animate__fadeIn'>
      
      <div className='aboutme'>
      <h1 className='greeting text-start'>Hi! I'm Saharsh! (but you can call me sash)</h1>
      <p>
        I'm a full stack developer with experience in photography, advertising, and graphic design. I aim to leverage my years in the visual arts to create webapps that are bold and pleasing to the eye, and a joy to use. 
      </p>
      <p>
        With over 12 years of work in client facing fields all over the world, I am well versed in making things that look good, feel good, and making my customers happy. 
      </p>
      <p>
        For the 5 minutes a day that I'm not writing code or editing photos, I'm probably incurring the wrath of my 2 kids, Zoe & Ozzy.
      </p>
      <p>
      Have a look around, see what I've done, and get in touch if you want to learn more or work together.
      </p>
      <p>Ta!</p>
      </div>
      <img src={headshot} class = 'rounded headshot m-4 shadow ' alt="headshot" height="240px"/>
    </div>
      {/* <i id="moveDown" class="fa fa-chevron-down fa-3x bounce"></i> */}
    </div>
  );
}