import "./Skills.css"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiSass,
  SiMysql
} from "react-icons/si"

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <div className="container">

        {/* HEADER */}

        <div className="skills-header">

          <span className="skills-tag">
            TECHNOLOGIES & TOOLS
          </span>

        </div>

        {/* GRID */}

        <div className="skills-grid">

          <div className="skill-card">
            <FaHtml5 />
            <span>HTML5</span>
          </div>

          <div className="skill-card">
            <FaCss3Alt />
            <span>CSS3</span>
          </div>

          <div className="skill-card">
            <FaJs />
            <span>JavaScript</span>
          </div>

          <div className="skill-card">
            <FaReact />
            <span>React</span>
          </div>

          <div className="skill-card">
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </div>

          <div className="skill-card">
            <SiSass />
            <span>Sass</span>
          </div>

          <div className="skill-card">
            <FaGitAlt />
            <span>Git</span>
          </div>

          <div className="skill-card">
            <FaGithub />
            <span>GitHub</span>
          </div>

          <div className="skill-card">
            <SiMysql />
            <span>MySQL</span>
          </div>

          <div className="skill-card">
            <FaFigma />
            <span>Figma</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Skills