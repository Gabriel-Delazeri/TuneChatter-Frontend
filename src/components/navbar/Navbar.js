import React, { useState } from 'react';
import './navbar.css';
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="brand-tune">TUNE</span>
            <span className="brand-chatter">CHATTER</span>
          </Link>
          <button
            className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link nav-link-small" to="/albuns" activeClassName="active-link" onClick={toggleMenu}>ALBUMS</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

