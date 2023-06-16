import React from "react";
import { Link } from "react-router-dom";

function Grid() {
  const jobDomains = [
    {
      id: 1,
      domain: "Software Development",
      description: "Create innovative software solutions and bring ideas to life.",
    },
    {
      id: 2,
      domain: "Marketing",
      description: "Spread the word about your brand and connect with your target audience.",
    },
    {
      id: 3,
      domain: "Design",
      description: "Create beautiful and functional designs that leave a lasting impression.",
    },
    {
      id: 4,
      domain: "Finance",
      description: "Help businesses make smart financial decisions and achieve their goals.",
    },
    {
      id: 5,
      domain: "Human Resources",
      description: "Find and retain top talent to drive your organization forward.",
    },
    {
      id: 6,
      domain: "Customer Service",
      description: "Provide top-notch support and exceed customer expectations.",
    },
  ];

  return (
    
    <div> 
        <h1>Job Domains</h1>
        <div className="grid-container">
      {jobDomains.map((jobDomain) => (
        <div key={jobDomain.id} className="card">
          <h2>{jobDomain.domain}</h2>
          <p>{jobDomain.description}</p>
          <Link to="/post-job">
            <button className="cta-button-grid">Post Job</button>
          </Link>
        </div>  
      ))}
    </div>
    </div>
  );
}

export default Grid;
