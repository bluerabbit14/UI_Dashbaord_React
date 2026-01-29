import React from 'react';
import './Navbar.css';
import webicon from '../assets/webicon.png';
import searchicon from '../assets/search.png';
import bagicon from '../assets/bag.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={webicon} alt="FloraVision" className="logo-icon" />
          <span className="logo-text">FloraVision.</span>
        </div>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li className="dropdown">
            <a href="/plants" className="dropbtn">
              Plants Type <span className="arrow-down">▼</span>
            </a>
            <div className="dropdown-content">
              <a href="/indoor">Indoor Plants</a>
              <a href="/outdoor">Outdoor Plants</a>
              <a href="/succulents">Succulents</a>
            </div>
          </li>
          <li><a href="/more">More</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="nav-icons">
          <button className="icon-btn search-icon">
            <img src={searchicon} alt="search" className="search-icon" />
          </button>
          <button className="icon-btn bag-icon">
            <img src={bagicon} alt="bag" className="bag-icon" />
          </button>
          <button className="hamburger">
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
