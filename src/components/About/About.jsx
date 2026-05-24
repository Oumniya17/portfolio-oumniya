import "./About.css"

import {
  FaCode,
  FaMobileAlt,
  FaHeart,
  FaBrain
} from "react-icons/fa"

const About = () => {

  return (

    <section className="about" id="about">

      <div className="container about-container">

        {/* LEFT */}

        <div className="about-image-wrapper">

          <div className="flower">
            ✿
          </div>

          <div className="about-image">

            <img
              src="/src/assets/about-cartoon.png"
              alt="Oumniya"
            />

          </div>

        </div>

        {/* CENTER */}

        <div className="about-content">

          <span className="about-tag">
            ABOUT ME
          </span>

          <h2 className="about-title">
            More about me
            <span> ♡</span>
          </h2>

          <p>
            I'm studying Web Application Development (DAW)
            and I love turning ideas into digital solutions.
          </p>

          <p>
            I enjoy creating clean, functional and aesthetically
            pleasing interfaces.
          </p>

          <p>
            I'm currently doing my frontend internship at Scorizer,
            where I'm growing, learning and contributing to real projects.
          </p>

          <span className="about-highlight">
            Let's create something amazing together!
          </span>

          <a href="#experience">

            <button className="about-btn">
              Read more about me
            </button>

          </a>

        </div>

        {/* RIGHT */}

        <div className="about-cards">

          <div className="about-card">
            <FaCode />
            <p>
              Clean Code and scalable solutions
            </p>
          </div>

          <div className="about-card">
            <FaMobileAlt />
            <p>
              Responsive design for all devices
            </p>
          </div>

          <div className="about-card">
            <FaHeart />
            <p>
              User experience is a priority
            </p>
          </div>

          <div className="about-card">
            <FaBrain />
            <p>
              Always learning and improving
            </p>
          </div>

        </div>

      </div>

    </section>

  )
}

export default About