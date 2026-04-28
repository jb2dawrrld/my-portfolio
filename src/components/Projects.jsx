import React from "react";
import { motion as Motion } from "framer-motion";

const projects = [
  {
    title: "Jabajournal",
    image: "./journalss.png",
    alt: "Jabajournal screenshot",
    chips: ["React", "10+ Users", "Supabase", "Vercel", "Web App"],
    githubUrl: "https://github.com/jb2dawrrld/jabajournal",
    highlights: [
      "Built and deployed a full-stack journaling web app with 10+ active users",
      "Designed and implemented secure multi-user data architecture using Supabase, leveraging Row-Level Security (RLS) and storage policies to enforce strict per-user data isolation.",
      "Engineered a system linking structured database records with cloud storage, supporting audio uploads, entry retrieval, and entry deletion.",
    ]
  },

  {
    title: "Shipcheck AI",
    image: "./shipcheckss.png",
    alt: "Shipcheck AI screenshot",
    chips: ["Cloudflare", "Wrangler", "AI", "Typescript", "LLM"],
    githubUrl: "https://github.com/jb2dawrrld/cf_ai_shipcheck-ai",
    highlights: [
      "Built and deployed a Cloudflare-native AI deployment review agent using TypeScript, leveraging Workers, Durable Objects, and Workflows to analyze GitHub repositories for security, reliability, and ship-readiness risks",
      "Designed a deterministic ingestion pipeline that selects high-signal files from large repositories, enabling scalable analysis under token and API constraints while maintaining consistent results",
      "Implemented structured LLM outputs and a fix-plan generator that produces ordered, actionable remediation steps, with stateful chat for iterative debugging grounded in repository context",
    ]
  },
 
  {
    title: "Get Out The Way! VR Game",
    image: "./getouttheway.png",
    alt: "Get Out The Way VR game screenshot",
    chips: ["VR", "Accessibility", "Educational", ],
    githubUrl: "http://github.com/jb2dawrrld/ExperimentApp",
    highlights: [
      "Co-led game mechanics for an assistive virtual environment prototype",
      "Integrated concepts using bone conduction for spatial audio cues",
      "Delivered as an upper-division, real-client sponsored project",
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
      "Optimized computer vision performance and improved frame rate by 24%",
    ]
  },
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