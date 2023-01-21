import React, { useRef } from 'react';
import "./narbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navRef = useRef();
  
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  // const hideNavBar = () =>{
  //   navRef.current.classList.remove("responsive_nav");
  // }
  
  return (
    <div className='nav-bar'>
      <div className="logo">
        <img src="../images/rental-logo.png" alt="logo" />
      </div>
      <nav ref={navRef}>
           <Link to="#">Home</Link>
           <Link to="#">LandLord</Link>
           <Link to="#">Tenants</Link>
          <Link to="#">Contact Us</Link>
          {/* <button className='nav-btn nav-close-btn' onClick={hideNavBar}><i class="fa-solid fa-xmark"></i></button> */}
       </nav>
       <button className='nav-btn bar' onClick={showNavbar}><i class="fa-solid fa-bars bars"></i></button>
    </div>
  );
}

