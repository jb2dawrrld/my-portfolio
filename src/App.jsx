import { lazy, Suspense, useRef, useState } from "react";
import "./index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AboutMe from "./components/AboutMe";
import ThemeToggle from "./components/ThemeToggle";
import { assetUrl } from "./utils/assets";
import { getStoredTheme, setStoredTheme } from "./utils/theme";

const PROJECTS_HINT_KEY = "portfolio-projects-hint-seen";
const Projects = lazy(() => import("./components/Projects"));

function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [theme, setTheme] = useState(getStoredTheme);
  const [showProjectsHint, setShowProjectsHint] = useState(
    () => sessionStorage.getItem(PROJECTS_HINT_KEY) !== "true"
  );
  const homepageCardRef = useRef(null);
  const infoPanelRef = useRef(null);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setStoredTheme(next);
  };

  const dismissProjectsHint = () => {
    sessionStorage.setItem(PROJECTS_HINT_KEY, "true");
    setShowProjectsHint(false);
  };

  const toggleTab = (tab) => {
    if (tab === "projects") {
      dismissProjectsHint();
    }

    const previousTabState = activeTab;
    const newTabState = activeTab === tab ? null : tab;
    setActiveTab(newTabState);

    requestAnimationFrame(() => {
      if (previousTabState === null && newTabState !== null) {
        const infoPanel = infoPanelRef.current;
        if (infoPanel) {
          const panelTop = infoPanel.getBoundingClientRect().top;
          const viewportBuffer = 110;
          if (panelTop > window.innerHeight - viewportBuffer) {
            infoPanel.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      } else if (newTabState === null) {
        const mainCard = homepageCardRef.current;
        if (mainCard) {
          const top =
            mainCard.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  };

  return (
    <div className="mainpage">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="mainpage-content">
        <header className="site-header">
          <h1>
            welcome!
            <span className="welcome-emoji" aria-hidden>
              💻
            </span>
          </h1>
        </header>
        <main>
          <div className="homepage-card" ref={homepageCardRef}>
            <div className="profile">
              <section>
                <img
                  src={assetUrl("headshot2.jpg")}
                  alt="Jabali Muriithi"
                  className="profile-img"
                  width={300}
                  height={300}
                  fetchPriority="high"
                  decoding="async"
                />
              </section>
              <section className="profile-info">
                <h2>Jabali Muriithi.</h2>
                <p>Creating, learning, and falling in love with the process.</p>
                <div className="header-links">
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
              </section>
            </div>

            <section className="buttons">
              <button
                type="button"
                className={`button ${activeTab === "projects" ? "active" : ""} ${showProjectsHint ? "button--projects-hint" : ""}`}
                onClick={() => toggleTab("projects")}
              >
                Projects
              </button>
              <button
                type="button"
                className={`button ${activeTab === "about" ? "active" : ""}`}
                onClick={() => toggleTab("about")}
              >
                About Me
              </button>
              <button
                type="button"
                className={`button ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => toggleTab("contact")}
              >
                Contact Info
              </button>
            </section>
            <div
              ref={infoPanelRef}
              className={`info-panel ${activeTab ? "active" : ""}`}
            >
              {activeTab === "projects" && (
                <Suspense fallback={<p className="panel-loading">Loading projects…</p>}>
                  <Projects />
                </Suspense>
              )}
              {activeTab === "about" && <AboutMe />}
              {activeTab === "contact" && (
                <p className="contact-copy">
                  Email:{" "}
                  <span className="highlight-me">jabali.muriithi@mnsu.edu</span>
                </p>
              )}
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>© Jabali Muriithi 2026</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
