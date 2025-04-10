import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Passionate about creating web applications and learning new technologies.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;