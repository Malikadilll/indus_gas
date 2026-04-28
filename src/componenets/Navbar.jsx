import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          
          {/* LEFT: LOGO + TEXT WRAPPED IN NAVLINK */}
          <NavLink to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo-section">
              <img
                src="/logo.png"
                alt="Indus Gas"
                className="logo-img"
              />
              {/* This text will hide on extremely small screens */}
              <div className="logo-text">
                <h1>INDUS GAS</h1>
                <p>PRIVATE LIMITED</p>
              </div>
            </div>
          </NavLink>

          {/* MOBILE TOGGLE BUTTON */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          </button>

          {/* RIGHT: NAV LINKS */}
          <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <NavLink to="/" end onClick={closeMenu}>HOME</NavLink>
            <NavLink to="/about" onClick={closeMenu}>ABOUT US</NavLink>
            <NavLink to="/network" onClick={closeMenu}>DISTRIBUTER NETWORK</NavLink>
            <NavLink to="/safety" onClick={closeMenu}>COSTUMER SAFETY</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>CONTACT US</NavLink>
          </nav>
        </div>

        <div className="bottom-line"></div>
      </header>

      <style>{`
        .navbar {
          width: 100%;
          background: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-container {
          max-width: 1200px;
          margin: auto;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-link {
          text-decoration: none;
          display: block;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo-img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          transition: 0.3s ease;
        }

        .logo-text h1 {
          margin: 0;
          font-size: clamp(20px, 4vw, 32px);
          color: #d94b2b;
          letter-spacing: 1px;
          font-weight: bold;
        }

        .logo-text p {
          margin: 0;
          font-size: 10px;
          letter-spacing: 3px;
          color: #444;
        }

        /* DESKTOP NAV */
        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          text-decoration: none;
          color: #222;
          position: relative;
          padding: 5px 0;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: color 0.3s ease; 
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #d94b2b;
          transition: width 0.3s ease; 
        }

        .nav-links a:hover, .nav-links a.active {
          color: #d94b2b;
        }

        .nav-links a:hover::after, .nav-links a.active::after {
          width: 100%;
        }

        /* HAMBURGER MENU BUTTON */
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 5px;
          z-index: 1001;
        }

        .bar {
          width: 25px;
          height: 3px;
          background: #d94b2b;
          transition: 0.3s ease;
        }

        /* HAMBURGER TO X ANIMATION */
        .bar.open:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        .bottom-line {
          width: 100%;
          height: 5px;
          background: #d94b2b;
        }

        /* MOBILE STYLES */
        @media (max-width: 992px) {
          .menu-toggle {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            gap: 0;
            padding: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-in-out;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }

          .nav-links.active {
            max-height: 400px;
            padding-bottom: 20px;
          }

          .nav-links a {
            width: 100%;
            padding: 20px;
            border-bottom: 1px solid #f0f0f0;
            text-align: center;
          }

          .nav-links a::after {
            display: none;
          }
          
          .logo-img {
            width: 50px;
            height: 50px;
          }
        }

        /* NEW: EXTRA SMALL SCREEN LOGO ADJUSTMENT */
        @media (max-width: 450px) {
          .logo-text {
            display: none; /* Removes the name entirely below 450px */
          }
          .logo-section {
            gap: 0;
          }
          .logo-img {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;