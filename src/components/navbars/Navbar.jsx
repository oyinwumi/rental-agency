import React from 'react';
import "./narbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <div className="logo">
        <img src="../images/rental-logo.png" alt="logo" />
      </div>
      <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">LandLord</Link></li>
            <li><Link to="#">Tenants</Link></li>
            <li><Link to="#">Contact Us</Link></li>
       </ul>
    </div>
  );
}

