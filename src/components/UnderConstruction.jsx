import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function UnderConstruction({ theme, onToggle }) {
  return (
    <div className="mainpage">
      <ThemeToggle theme={theme} onToggle={onToggle} />
      <div className="construction">
        <main className="construction-card">
          <h1>Under construction</h1>
          <p>I'm updating the site. Please check back soon.</p>
          <div className="construction-links">
            <a
              href="https://github.com/jb2dawrrld"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub className="icon" aria-hidden />
            </a>
            <a
              href="https://linkedin.com/in/jabali-muriithi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="icon" aria-hidden />
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UnderConstruction;
