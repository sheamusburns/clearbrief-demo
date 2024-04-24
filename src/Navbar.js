import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#product">Product</a></li>
        <li className="nav-item"><a href="#pricing">Pricing</a></li>
        <li className="nav-item"><a href="#team">Our Team</a></li>
        <li className="nav-item"><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;