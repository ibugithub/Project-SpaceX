import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="NavBarContainer">
    <ul className="Navbar">
      <h1>Space Travelers Hub</h1>
      <li><NavLink to="/">Rockets</NavLink></li>
      <li><NavLink to="/Missions">Missions</NavLink></li>
      <li><NavLink to="/Profile">Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
