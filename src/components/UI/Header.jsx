import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => setShow(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="WorldAtlas home">
          <span className="brand-mark"><FaGlobeAmericas /></span>
          <span>World<span>Atlas</span></span>
        </NavLink>

        <nav className={show ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/country">Countries</NavLink>
          <NavLink className="nav-contact" to="/contact">Contact us</NavLink>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={show ? "Close menu" : "Open menu"}
          aria-expanded={show}
          onClick={() => setShow((current) => !current)}
        >
          {show ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
