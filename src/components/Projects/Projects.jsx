import "./Projects.css"

import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa"

import moodifyImg from "../../assets/projects/moodify.png"
import mercadoImg from "../../assets/projects/mercado.png"
import thorImg from "../../assets/projects/thor.png"

const projects = [

  {
    title: "Moodify",

    image: moodifyImg,

    description:
      "An immersive cinematic experience powered by emotions, APIs and storytelling.",

    stack:
      "Node.js • Express • EJS • APIs",

    github:
      "https://github.com/Oumniya17/moodify",

    demo:
      "https://moodify-1-v5t2.onrender.com"
  },

  {
    title: "Mercado de Emociones",

    image: mercadoImg,

    description:
      "Narrative-driven emotional trading platform exploring backend architecture and JWT security.",

    stack:
      "MongoDB • JWT • REST API • CI/CD",

    github:
      "https://github.com/Oumniya17/mercado-emociones",

    demo:
      "https://mercado-emociones.onrender.com"
  },

  {
    title: "Fury of Thor",

    image: thorImg,

    description:
      "Interactive Norse-inspired front-end experience with cinematic gameplay and pixel-art aesthetics.",

    stack:
      "JavaScript • CSS3 • Audio API",

    github:
      "https://github.com/alcmanuel12/fury-of-thor",

    demo:
      "https://fury-rouge.vercel.app/"
  }

]

const Projects = () => {

  return (

    <section className="projects" id="projects">

      <div className="container">

        {/* HEADER */}

        <div className="projects-header">

          <span className="projects-tag">
            FEATURED PROJECTS
          </span>

          <h2 className="projects-title">
            Some things I’ve built...
          </h2>

        </div>

        {/* GRID */}

        <div className="projects-grid">

          {
            projects.map((project, index) => (

              <div
                className="project-card"
                key={index}
              >

                {/* IMAGE */}

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>

                {/* CONTENT */}

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <span className="project-stack">
                    {project.stack}
                  </span>

                  {/* BUTTONS */}

                  <div className="project-links">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >

                      <FaGithub />

                      GitHub

                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >

                      <FaExternalLinkAlt />

                      Live Demo

                    </a>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  )
}

export default Projects