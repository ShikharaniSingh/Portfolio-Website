import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import heroImage from "./assets/hero-image.webp"; // Updated to .webp
import backgroundImage from "./assets/background.webp"; // Import background image

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme === "enabled") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">Shikha's Portfolio</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 Shikha Singh. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

// Home Page Component
const Home = () => (
  <header className="hero"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="hero-text">
      <h2>Hi, I'm Shikha</h2>
      <p>A Passionate Full Stack Developer</p>
    </div>
    <img src={heroImage} alt="Shikha" className="hero-image" />
  </header>
);

export default App;
