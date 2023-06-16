import React from "react";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="section">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut bibendum dolor. Fusce vel leo vel neque sollicitudin finibus vitae eget purus. Sed euismod justo lectus, a dictum eros aliquet vel. </p>
      <Link to="/about"><button className="cta-button">Learn More</button></Link>
    </div>
  );
}

export default AboutSection;
