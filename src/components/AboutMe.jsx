import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <h3>About Me:</h3>
      <section className="about-intro">
      <p>
        Hi, my name is Jabali Muriithi. I am a Computer Science student with a
        passion for web development, machine learning, and exploring creative
        ways to merge art and technology. I enjoy tackling new challenges,
        building projects that solve real problems, and learning new skills
        along the way.
      </p>
      </section>
      <section className="about-facts">
      <p className="facts-intro">
        Some quick facts about me:
      </p>
      <p>
        <ul>
          <li>Currently a Junior pursuing a Bsc in Computer Science.</li>
          <li>Proficient in JavaScript, Python, and Java.</li>
          <li>Experience with React, Node.js, and Flask for web development.</li>
          <li>Familiar with machine learning libraries like TensorFlow and scikit-learn.</li>
          <li>Starting to collaborate on open-source projects and contributing to the developer community.</li>
        </ul>
      </p>
      </section>
      <section className="about-hobbies">
      <p>
        In my free time, I love listening to music, drawing, and reading about recent
        tech trends or fiction novels. I am currently exploring machine learning and
        focusing on understanding how algorithms like decision trees and neural networks work. I'm always excited to connect with like-minded individuals, so feel free to reach out! My email is in the contact section, and LinkedIn (the link is in the icon above) is a great way to connect professionally.
      </p>
      </section>
    </div>
  );
}

export default AboutMe;