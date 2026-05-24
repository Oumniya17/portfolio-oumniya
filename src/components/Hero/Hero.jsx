import "./Hero.css"

import {
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa"

import { HiOutlineMail } from "react-icons/hi"

const Hero = () => {

  return (

    <section className="hero" id="home">

      <div className="container hero-container">

        {/* LEFT */}

        <div className="hero-content">

          <span className="hero-tag">
            FULL STACK DEVELOPER...
          </span>

          <h1 className="hero-title">

            I build digital
            <br />
            experiences

            <span>
              people love.
            </span>

          </h1>

          <p className="hero-description">

            Full Stack Developer passionate about creating
            modern, user-friendly and visually engaging
            web experiences.

          </p>

          <div className="hero-buttons">

          <a href="#projects">

          <button className="primary-btn">
          View my work →
          </button>

          </a>

            <a
            href="/cv.pdf"
            download
            >

            <button className="secondary-btn">
             Download CV ↓
            </button>

</a>

          </div>

          <div className="hero-socials">

            <a
            href="https://github.com/Oumniya17"
            target="_blank"
            rel="noreferrer"
            >
           <FaGithub />
           </a>
            <a
            href="https://www.linkedin.com/in/oumniya-chahidi"
            target="_blank"
            rel="noreferrer"
            >
            <FaLinkedinIn />
            </a>
            <a href="mailto:oumniya.chah@gmail.com">
            <HiOutlineMail />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-image-wrapper">

          <div className="purple-shape"></div>

          <div className="purple-star">
            ✧
          </div>

          {/* IMAGE */}

          <div className="hero-image">

            <img
              src="/oumniya.jpeg"
              alt="Oumniya"
            />

          </div>

          {/* AVAILABILITY CARD */}

          <div className="availability-card">

            <span className="dot"></span>

            <div>

              <p>Currently</p>

              <small>
                Frontend Intern
                <br />
                at Scorizer
              </small>

            </div>

          </div>

          {/* CODE CARD */}

          <div className="code-card">

            <div className="code-top">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <code>

              1 const developer = {"{"}
              <br />

              2 &nbsp; name: "Oumniya",
              <br />

              3 &nbsp; passion: "Building things
              <br />
              &nbsp;&nbsp;for the web",
              <br />

              4 &nbsp; skills: ["HTML", "CSS", "JS",
              <br />
              &nbsp;&nbsp;"React", "Node"],
              <br />

              5 &nbsp; goals: ["Keep learning",
              <br />
              &nbsp;&nbsp;"Create impact",
              <br />
              &nbsp;&nbsp;"Make it beautiful"]
              <br />

              6 {"}"}

            </code>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero