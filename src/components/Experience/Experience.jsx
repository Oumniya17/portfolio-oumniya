import "./Experience.css"

import {
  FaPaintBrush,
  FaLightbulb,
  FaBookOpen,
  FaGlobe
} from "react-icons/fa"

import creativeSpace from "../../assets/experience/creative-space.png"

const Experience = () => {

  return (

    <section
      className="experience"
      id="experience"
    >

      <div className="container experience-container">

        {/* LEFT */}

        <div className="experience-left">

          <span className="experience-tag">
            EXPERIENCE & EDUCATION
          </span>

          {/* TIMELINE */}

          <div className="timeline">

            {/* ITEM */}

            <div className="timeline-item">

              <span className="timeline-dot"></span>

              <div className="timeline-content">

                <h4>2026</h4>

                <h3>
                  Front-End Intern at Scorizer
                </h3>

                <p>
                  Building and improving modern
                  web interfaces.
                </p>

              </div>

            </div>

            {/* ITEM */}

            <div className="timeline-item">

              <span className="timeline-dot"></span>

              <div className="timeline-content">

                <h4>2024 — Present</h4>

                <h3>
                  Web Application Development (DAW)
                </h3>

                <p>
                  Focused on fullstack development
                  and modern web technologies.
                </p>

              </div>

            </div>

            {/* ITEM */}

            <div className="timeline-item">

              <span className="timeline-dot"></span>

              <div className="timeline-content">

                <h4>2022 — 2023</h4>

                <h3>
                  Personal Projects
                </h3>

                <p>
                  Creating web applications to learn,
                  experiment and grow as a developer.
                </p>

              </div>

            </div>

          </div>

          {/* BUTTON */}

<a
  href="/cv.pdf"
  download
>

  <button className="experience-btn">
    Download CV ↓
  </button>

</a>

        </div>

        {/* CENTER */}

        <div className="experience-center">

          <div className="polaroid-card">

            <img
              src={creativeSpace}
              alt="creative workspace"
            />

            <p>
              Discipline today,
              freedom tomorrow...
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="experience-right">

          <span className="experience-right-tag">
            WHAT DRIVES ME
          </span>

          {/* CARD */}

          <div className="drive-card">

            <FaPaintBrush />

            <div>

              <h3>Creativity</h3>

              <p>
                I love turning ideas into
                beautiful interfaces.
              </p>

            </div>

          </div>

          {/* CARD */}

          <div className="drive-card">

            <FaLightbulb />

            <div>

              <h3>Problem Solving</h3>

              <p>
                I enjoy challenges and
                finding smart solutions.
              </p>

            </div>

          </div>

          {/* CARD */}

          <div className="drive-card">

            <FaBookOpen />

            <div>

              <h3>Continuous Learning</h3>

              <p>
                Always exploring new technologies
                and improving my skills.
              </p>

            </div>

          </div>

          {/* CARD */}

          <div className="drive-card">

            <FaGlobe />

            <div>

              <h3>Making an Impact</h3>

              <p>
                I want to build digital products
                that make a difference.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Experience