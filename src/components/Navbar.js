import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Cear-logo.png";
import contacti from "../assets/arrow-right-solid.svg";
import "../style/navbar.css";
import "../style/App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className={`navbar ${isHomepage ? "absolute" : "fixed"}`}>
      <div className="logo">
        <img src={logo} alt="club logo" />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#events" onClick={() => setIsOpen(false)}>
            Events
          </Link>
        </li>
        <li>
          <Link to="#Milestones" onClick={() => setIsOpen(false)}>
            Milestone
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <button className="contact-btn">
        Contact us <img className="arrow" src={contacti} alt="arrow icon" />
      </button>

      {/* Mobile Menu Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Mobile Sidebar Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <span className="close-btn" onClick={() => setIsOpen(false)}>
            &times;
          </span>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="#events" onClick={() => setIsOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link to="#Milestones" onClick={() => setIsOpen(false)}>
                Milestones
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
