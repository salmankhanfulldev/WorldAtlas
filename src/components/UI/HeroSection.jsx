import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <span className="eyebrow">Discover our planet</span>
          <h1>Explore the world,<br /><span>one country at a time.</span></h1>
          <p>
            Discover countries, cultures and remarkable facts. Search the
            globe and explore detailed information from every region.
          </p>
          <NavLink className="primary-button" to="/country">
            Explore countries <FaArrowRight />
          </NavLink>
        </div>
        <div className="hero-visual">
          <div className="glow"></div>
          <img src="/images/world.png" alt="Illustrated globe" />
        </div>
      </div>
    </main>
  )
}

export default HeroSection
