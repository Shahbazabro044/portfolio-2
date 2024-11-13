// components/Portfolio.js
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>I AM SHAHBAZ ABRO</h1>
        <p>Welcome to my online portfolio. Here you can find a few of my projects, skills, and contact information.</p>
      </header>

      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YRXr9wzGbYUymiQkhDUhzKNTvWVD3Rb-XA&s" 
              alt="Project 1"
              width={300}
              height={200}
            />
            <h3>Project 1</h3>
            <p>A web app built with React and Next.js.</p>
          </div>
          <div className="project-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPLePyMpCZdzRUuU1hVgWq6nEWIUuqbE-pA&s" 
              alt="Project 2"
              width={300}
              height={200}
            />
            <h3>Project 2</h3>
            <p>A responsive portfolio website created with HTML, CSS, and JavaScript.</p>
          </div>
          <div className="project-card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bfsdzB7RjAKLQ5GjtUDV1wY1dzsmFpUaUA&s" 
              alt="Project 3"
              width={300}
              height={200}
            />
            <h3>Project 3</h3>
            <p>An e-commerce site built with React and Firebase.</p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <p>HTML, CSS, JavaScript, React, Next.js</p>
          </div>
          <div className="skill-card">
            <h3>Backend Development</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
          <div className="skill-card">
            <h3>Version Control</h3>
            <p>Git, GitHub</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="linkedin.com/in/shahbaz-abro-2288212ba" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
      </section>
    </div>
  )
}

export default Portfolio
