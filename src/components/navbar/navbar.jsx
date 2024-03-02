import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

import logoSvg from '../../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img loading="lazy" src={logoSvg} alt="Logo" />
        <Link to="/" className="navbar-name">Le pavillon gourmand</Link>
      </div>
      <div className="navbar-links">
        <Link to="/Un-lieu" className="navbar-link">Un lieu</Link>
        <Link to="/Un-moment" className="navbar-link">Un moment</Link>
        <Link to="/Nous-trouver" className="navbar-link">Nous trouver</Link>
      </div>
    </nav>
  )
}

export default Navbar