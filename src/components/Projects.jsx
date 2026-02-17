import React from "react";
function Projects() {
  return (
    <div className="projects">
      <h3>My Projects:</h3>
      <div className="project-card">
        <h4>Me-Good Health App</h4>
        <section className="project-content">
          <img src='./megooddashboard.png' alt="Project 1" className="project-img"/>
          <p>A patient-facing wellness platform built using React and AWS serverless architecture, with real-time calorie balance tracking, daily steps and live heart rate monitoring. Exposed me to cloud-based authentification flows, distributed systems, and scalable data storage. You can read more about it <a href="https://github.com/jb2dawrrld/MeGood"> here. </a></p>
        </section>
      </div>
      <div className="project-card">
        <h4>Flight Delays Prediction Model</h4>
        <section className="project-content">
          <img src='./flightdelayscreenshot.png' alt="Flight Delay Screenshot" className="project-img"/>
          <p>A machine learning model that predicts flight delays and cancellations using a 2015 flight dataset from Kaggle. You can read more about it <a href="https://github.com/jb2dawrrld/FlightDelays"> here. </a> </p>
        </section>
      </div>
      <div className="project-card">
        <h4>"Get Out The Way!" VR Game (Game mechanics Lead)</h4>
        <section className="project-content">
          <img src='./getouttheway.png' alt="Project 3" className="project-img"/>
          <p>Experimental virtual environment designed for the visually impaired by integrating bone conduction technology. This was a client-sponsored project under the Computer Science Upper Division Program. You can find the repository <a href="http://github.com/Kaleab84/ExperimentApp"> here. </a></p>
        </section>
      </div>
    </div>
  );
}

export default Projects;