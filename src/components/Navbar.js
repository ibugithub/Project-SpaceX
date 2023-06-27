import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import saturn from '../images/saturn.png';

const Navbar = () => (

  <nav className="dFlx">
    <div className="logo_title_container">
      <img className="logo" src={saturn} alt="" />
      <h3 className="fontW400">Space Travelers&apos; Hub</h3>
    </div>
    <ul className="NavBar_ul">
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : ' ')} to="/"> Rockets</NavLink>
      </li>

      <li><NavLink to="/Missions">Missions</NavLink></li>

      <li className="profileLi">
        <div className="spearator" />
        <NavLink className={({ isActive }) => (isActive ? 'active' : ' ')} to="/Profile"> Profile </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
