import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Home from "../Component/Home";
import About from "../Component/About";
import Service from "../Component/Service";
import Projects from "../Component/Projects";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import InternshipExperience from "../Component/InternshipExperience";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"; // ✅ fixed import

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  // Save preference whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Only animate once
    });
  }, []);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Navbar
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />
      <Home />
      <About />
      <Service />
      <Projects />
      <InternshipExperience />
      <Contact />
      <Footer />
      <Analytics /> {/* ✅ Vercel Analytics */}
    </div>
  );
}

export default App;
