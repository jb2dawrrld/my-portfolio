import { useRef } from "react";
import { motion as Motion } from "framer-motion";
import { assetUrl } from "../utils/assets";



const projects = [
  {
    title: "Jabajournal",
    image: "journalss.png",
    alt: "Jabajournal screenshot",
    chips: ["React", "10+ Users", "Supabase", "Vercel", "Web App"],
    githubUrl: "https://github.com/jb2dawrrld/jabajournal",
    highlights: [
      "Built and deployed a full-stack journaling web app with 10+ active users",
      "Designed and implemented secure multi-user data architecture using Supabase, leveraging Row-Level Security (RLS) and storage policies to enforce strict per-user data isolation.",
      "Engineered a system linking structured database records with cloud storage, supporting audio uploads, entry retrieval, and entry deletion.",

    ],

  },

  {

    title: "Shipcheck AI",
    image: "shipcheckss.png",
    alt: "Shipcheck AI screenshot",
    chips: ["Cloudflare", "Wrangler", "AI", "Typescript", "LLM"],
    githubUrl: "https://github.com/jb2dawrrld/cf_ai_shipcheck-ai",
    highlights: [

      "Built and deployed a Cloudflare-native AI deployment review agent using TypeScript, leveraging Workers, Durable Objects, and Workflows to analyze GitHub repositories for security, reliability, and ship-readiness risks",

      "Designed a deterministic ingestion pipeline that selects high-signal files from large repositories, enabling scalable analysis under token and API constraints while maintaining consistent results",

      "Implemented structured LLM outputs and a fix-plan generator that produces ordered, actionable remediation steps, with stateful chat for iterative debugging grounded in repository context",

    ],

  },

  {

    title: "MeGood - Health Dashboard",

    video: "meGoodDemo.mp4",

    alt: "MeGood Demo Video",

    chips: ["AWS", "APIs", "React", "Educational"],

    githubUrl: "https://github.com/jb2dawrrld/MeGood",

    highlights: [

      "Built a patient-facing fitness tracker app using React and AWS serverless architecture (AWS Lambda, DynamoDB, and API Gateway)",

      "Real-time calorie balance tracking,  daily steps and live heart rate monitoring.",

      "Reduced average API response latency from ~450ms to ~220ms through optimization of database queries.",

      "Integrated cloud-based authentication flows (sign-up, sign-in, email verification) using Cognito and Amplify UI.",

    ],

  },

  {

    title: "Google Dino Game Clone(with Backend)",

    video: "dinoDemo.mp4",

    alt: "Google Dino Game Clone Demo Video",

    chips: ["Node.js", "Express", "SQLite", "REST API"],

    githubUrl: "https://github.com/jb2dawrrld/dino-game",

    highlights: [

      "Built a Node.js/Express backend for a browser game, exposing REST endpoints for score submission and leaderboard retrieval.",

      "Designed a SQLite leaderboard with input validation, indexed score queries, and deterministic ranking to safely store and retrieve player scores.",

      "Improved API reliability with centralized error handling and a custom sliding-window rate limiter, then integrated the backend with the game client for end-to-end score tracking.",

    ],

  },

];



function ProjectMedia({ project }) {
  const videoRef = useRef(null);



  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});

  };



  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;

  };



  if (project.video) {
    return (

      <div
        className="project-image-shell"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

      >

        <Motion.video
          ref={videoRef}
          src={assetUrl(project.video)}
          className="project-video"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={project.alt}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

      </div>

    );

  }



  return (

    <div className="project-image-shell">

      <Motion.img

        src={assetUrl(project.image)}

        alt={project.alt}

        className="project-img"

        loading="lazy"

        decoding="async"

        whileHover={{ scale: 1.015 }}

        transition={{ duration: 0.25, ease: "easeOut" }}

      />

    </div>

  );

}



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

            <ProjectMedia project={project} />



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

                {project.highlights.map((highlight, index) => (

                  <li key={`${project.title}-${index}`}>{highlight}</li>

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


