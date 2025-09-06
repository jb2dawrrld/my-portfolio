import React, { useState } from 'react'
import './index.css'
import cropped from './assets/cropped.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import { motion } from "framer-motion";

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className='mainpage'>
      <header className='flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 '>
        <h1 className='inline-block'>
          welcome!
          <motion.span
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          👋
        </motion.span>
        </h1>
      </header>
      <main>
        <div className='homepage-card'>
          <div className='profile flex flex-col md:flex-row items-center md:items-start'>
            <section>
              <img src={cropped} alt="Profile" className='profile-img w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto md:mx-0'/>
            </section>
            <section className='profile-info mt-4 md:mt-0 md:ml-6 text-center md:text-left'>
              <h2 className='text-xl md:text-2xl font-bold'>Jabali Muriithi.</h2>
              <p className='mt-2'>Creating, learning, and falling in love with the process.</p>
              <div className='header-links flex justify-center md:justify-start gap-4 mt-3'>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='icon text-2xl'/>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='icon text-2xl'/>
                </a>
              </div>
            </section>
          </div>

          <section className='buttons flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-6'>
            <button className={`button w-full sm:w-auto ${activeTab === "projects" ? "active" : ""}`} onClick={() => toggleTab("projects")}>Projects</button>
            <button className={`button w-full sm:w-auto ${activeTab === "about" ? "active" : ""}`} onClick={() => toggleTab("about")}>About Me</button>
            <button className={`button w-full sm:w-auto ${activeTab === "contact" ? "active" : ""}`} onClick={() => toggleTab("contact")}>Contact Info</button>
          </section>
          {/* Sliding panel */}
          <div className={`info-panel ${activeTab ? "active" : ""} p-4 sm:p-6 mt-4 w-full sm:max-w-3xl mx-auto`}>
            {activeTab === "projects" && <Projects />}
            {activeTab === "about" && <AboutMe />}
            {activeTab === "contact" && <p>Email: <span className='highlight-me'>jabali.muriithi@mnsu.edu</span></p>}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='footer mt-12 text-center py-6'>
        <p>© Jabali Muriithi 2025</p>
      </footer>
    </div>
  )
}

export default App
