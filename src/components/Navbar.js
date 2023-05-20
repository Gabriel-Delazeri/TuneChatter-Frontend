import AlbunsPage from './AlbunsPage';
import React, { useState } from 'react';
import '../styles/Navbar.css';
import HomeText from './Homepage';
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from 'react-router-dom';
import AlbumPage from './AlbumPage';

const Navbar = ({ albums }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
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
                <NavLink className="nav-link nav-link-small" to="/albums" activeClassName="active-link" onClick={toggleMenu}>ALBUMS</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact render={() => <HomeText albums={albums} />} />
        <Route path="/albums" render={() => <AlbunsPage albums={albums} />} />
        <Route path="/album/:slug" render={() => <AlbumPage />}/>
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
};

export default Navbar;

