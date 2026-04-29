import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
          setIsMenuOpen(false); 
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${!isVisible ? "nav-hidden" : ""}`}>
        <div className="navbar-container">
          
          <NavLink to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo-section">
              <img
                src="/logo.png"
                alt="Indus Gas"
                className="logo-img"
              />
              <div className="logo-text">
                <h1>INDUS GAS</h1>
                <p>PRIVATE LIMITED</p>
              </div>
            </div>
          </NavLink>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          </button>

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
          position: fixed;
          top: 0;
          z-index: 1000;
          transition: transform 0.4s ease-in-out;
        }

        .nav-hidden {
          transform: translateY(-100%);
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
          flex-shrink: 0;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          white-space: nowrap; /* Prevents text from wrapping to a new line */
        }

        .logo-text h1 {
          margin: 0;
          font-size: clamp(20px, 4vw, 32px);
          color: #d94b2b;
          letter-spacing: 1px;
          font-weight: bold;
          line-height: 1;
        }

        .logo-text p {
          margin: 0;
          font-size: 10px;
          letter-spacing: 3px;
          color: #444;
        }

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

        .bar.open:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        .bottom-line {
          width: 100%;
          height: 5px;
          background: #d94b2b;
        }

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
        }

        /* Updated mobile logo logic */
        @media (max-width: 450px) {
          .logo-section {
            gap: 8px;
          }
          .logo-img {
            width: 45px;
            height: 45px;
          }
          .logo-text h1 {
            font-size: 18px; /* Fixed small size for narrow screens */
            letter-spacing: 0.5px;
          }
          .logo-text p {
            font-size: 7px;
            letter-spacing: 1.5px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;