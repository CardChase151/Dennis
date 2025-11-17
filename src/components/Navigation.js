import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setShowServicesDropdown(false);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const isActive = (path) => location.pathname === path;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/powerclean.png" alt="Power Clean" className="logo-image" />
          <span className="logo-text">POWER CLEAN</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={toggleServicesDropdown}
            >
              Services <ChevronDown size={16} />
            </button>
            {showServicesDropdown && (
              <div className="dropdown-menu">
                <Link
                  to="/services/upholstery"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Upholstery Cleaning
                </Link>
                <Link
                  to="/services/steam-cleaning"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Steam Cleaning
                </Link>
                <Link
                  to="/services/tile-grout"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Tile & Grout
                </Link>
                <Link
                  to="/services/other"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Other Services
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>

          <Link
            to="/social"
            className={`nav-link ${isActive('/social') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Social
          </Link>

          <Link
            to="/login"
            className="nav-link login-btn"
            onClick={closeMenu}
          >
            Log In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
