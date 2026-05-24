import "./Navbar.css"

import { useState } from "react"

import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlinePaperAirplane
} from "react-icons/hi"

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("dark-theme")
  }

  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* LOGO */}

        <div className="logo">
          &lt;Oum.dev/&gt;
        </div>

        {/* LINKS */}

        <nav className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#skills">Skills</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* RIGHT */}

        <div className="nav-right">

          <button className="talk-btn">

            Let’s talk

            <HiOutlinePaperAirplane className="talk-icon" />

          </button>

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >

            {
              darkMode
                ? <HiOutlineSun />
                : <HiOutlineMoon />
            }

          </button>

        </div>

      </div>

    </header>
  )
}

export default Navbar