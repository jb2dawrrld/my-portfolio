import React from "react";
import { motion as Motion } from "framer-motion";

const projects = [
  {
    title: "Me-Good Fitness Tracker App",
    image: "./megooddashboard.png",
    alt: "Me-Good dashboard screenshot",
    chips: ["React", "AWS", "Web App", "Real-time Metrics"],
    githubUrl: "https://github.com/jb2dawrrld/MeGood",
    highlights: [
      "Tracked calorie balance, steps, and live heart rate in real time.",
      "Built cloud auth and scalable data storage with serverless services.",
      "Designed a patient-facing dashboard focused on daily usability."
    ]
  },

  {
    title: "The Hidden Village Online",
    image: "./hiddenvillage.png",
    alt: "The Hidden Village Online screenshot",
    chips: ["JavaScript", "Educational", "Web App", "MediaPipe"],
    githubUrl: "https://github.com/jb2dawrrld/MeGood",
    highlights: [
      "Engineered a scalable MCQ assessment module from scratch",
      "Developed a real-time pose matching system using MediaPipe (sub-200ms inference latency)",
      "Optimized computer vision performance and improved frame rate by 24%.",
    ]
  },
 
  {
    title: '"Get Out The Way!" VR Game',
    image: "./getouttheway.png",
    alt: "Get Out The Way VR game screenshot",
    chips: ["VR", "Accessibility", "Client Sponsored"],
    githubUrl: "http://github.com/Kaleab84/ExperimentApp",
    highlights: [
      "Co-led game mechanics for an assistive virtual environment prototype.",
      "Integrated concepts using bone conduction for spatial audio cues.",
      "Delivered as an upper-division, real-client sponsored project."
    ]
  },
  {
    title: "Flight Delays Prediction Model",
    image: "./flightdelayscreenshot.png",
    alt: "Flight delays model screenshot",
    chips: ["Machine Learning", "Python", "Kaggle Dataset"],
    githubUrl: "https://github.com/jb2dawrrld/FlightDelays",
    highlights: [
      "Modeled delay and cancellation likelihood from 2015 flight data.",
      "Processed high-volume rows from a public Kaggle aviation dataset.",
      "Produced a practical baseline for schedule-risk estimation."
    ]
  }
];

function Projects() {
  return (
    <section className="projects">
      <h3>Featured Projects</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <Motion.article
            key={project.title}
            className="project-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="project-image-shell">
              <Motion.img
                src={project.image}
                alt={project.alt}
                className="project-img"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </div>

            <div className="project-body">
              <h4>{project.title}</h4>
              <div className="project-chips">
                {project.chips.map((chip) => (
                  <span key={chip} className="project-chip">
                    {chip}
                  </span>
                ))}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-chip project-chip-link"
                >
                  View on GitHub
                </a>
              </div>

              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;