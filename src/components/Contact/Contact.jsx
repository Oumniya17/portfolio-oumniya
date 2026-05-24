import "./Contact.css"

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUp
} from "react-icons/fa"

import {
  HiOutlineMail
} from "react-icons/hi"

import {
  IoLocationOutline
} from "react-icons/io5"

const Contact = () => {

  return (

    <section
      className="contact"
      id="contact"
    >

      <div className="container">

        <div className="contact-card">

          {/* LEFT */}

          <div className="contact-left">

            <h2>
              Let’s work
              <br />
              together!
            </h2>

            <p>
              I’m currently open to new opportunities
              and exciting projects. Feel free to reach
              out, I’d love to hear from you.
            </p>

            <span>
              Let’s create magic...
            </span>

          </div>

          {/* CENTER */}

          <form className="contact-form">

            <div className="form-row">

              <input
                type="text"
                placeholder="Your name"
              />

              <input
                type="email"
                placeholder="Your email"
              />

            </div>

            <textarea
              placeholder="Your message"
            ></textarea>

            <button type="submit">

              Send message ✈

            </button>

          </form>

          {/* RIGHT */}

          <div className="contact-info">

            <h4>Get in touch</h4>

            <a href="mailto:oumniya.chah@gmail.com">

              <HiOutlineMail />

              oumniya.chah@gmail.com

            </a>

            <div>

              <IoLocationOutline />

              Seville, Spain

            </div>

            <a
              href="https://www.linkedin.com/in/oumniya-chahidi"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedinIn />

              linkedin.com/in/oumniya-chahidi

            </a>

            <a
              href="https://github.com/Oumniya17"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub />

              github.com/Oumniya17

            </a>

          </div>

          {/* BACKGROUND GLOW */}

          <div className="contact-glow"></div>

        </div>

        {/* FOOTER */}

        <div className="footer-bottom">

          <p>
            © 2026 Oumniya Chahidi.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="scroll-top"
          >

            <FaArrowUp />

          </a>

        </div>

      </div>

    </section>

  )
}

export default Contact