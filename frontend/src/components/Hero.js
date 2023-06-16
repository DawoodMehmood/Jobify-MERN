import React from "react";
import backgroundImg from "../images/background.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1>Let's Digitalize Hiring Process</h1>
      <p>Post a job today and find the best match for your company through our platform.</p>
      <Link to="/post-job">
        <button className="cta-button-hero">Get Started</button>
      </Link>
    </div>
  );
}

export default Hero;
