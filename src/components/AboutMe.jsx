const languages = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "SQL",
  "C",
  "Bash",
  "HTML/CSS",
];

function AboutMe() {
  return (
    <>
      <h3>About Me:</h3>
      <section className="about-intro">
        <p>
          I'm a Computer Science student and part-time software engineer who enjoys building applications that solve real problems. My interests span full-stack development, machine learning, and finding creative ways to combine technology with self-expression.

        </p>
      </section>
      <section className="about-education">
        <h4 className="about-section-label">Education</h4>
        <div className="education-entry">
          <p className="education-degree">
            Bachelor of Science in Computer Science, Minor in Mathematics
          </p>
          <p className="education-school">Minnesota State University - Mankato</p>
          <p className="education-meta">(Expected December 2026) </p>
        </div>
      </section>
      <section className="about-skills">
        <h4 className="about-section-label">Skills</h4>
        <div className="skill-chips">
          {languages.map((language) => (
            <span key={language} className="skill-chip">
              {language}
            </span>
          ))}
        </div>
      </section>
      <section className="about-hobbies">
        <p>
          In my free time, I love listening to music, drawing, and reading about
          recent tech trends or fiction novels. I am currently exploring decision trees, computer vision and neural networks. I&apos;m always excited to connect with
          like-minded individuals, so feel free to reach out! My email is in the
          contact section, and LinkedIn (the link is in the icon above) is a
          great way to connect professionally.
        </p>
      </section>
    </>
  );
}

export default AboutMe;
