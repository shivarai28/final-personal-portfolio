import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = ({ activeTab, setActiveTab }) => {
  
    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Resume', path: '/resume' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
      ];
    return (
        <nav className="navbar">
            <ul className="navbar-list">
               
            {[...navLinks].map((link) => (
          <li key={link.name} className="navbar-item">
            <NavLink
              to={link.path}
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              onClick={link.onClick}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
            </ul>
        </nav>
    );
};

export default Navbar;
