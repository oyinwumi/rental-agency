import React from 'react';


import "./footer.css";

export default function Footer() {
  return (
    <div className='footer-wrap'>
      <div className="footer-top">
        <img className="footer-logo" src="../images/rental-logo.png" alt="logo" />
        <div className="contact-div">
            <div className="location">
            <i class="fa-solid fa-location-dot footer-icon"></i>
                <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
            </div>
            <div className="contact-details">
                <div className="phone-number">
                <i class="fa-solid fa-phone footer-icon"></i>
                    <p>(123) 456-7890</p>
                </div>
                <div className="fax">
                <i class="fa-solid fa-fax footer-icon"></i>
                    <p>(123) 456-7890</p>
                </div>
            </div>
            <div className="social-handle">
                <p>Social Media</p>
                  <div className="social">
                    <img src="../images/facebook2.svg" alt="" />
                    <img src="../images/twitterr.svg" alt="" />
                    <img src="../images/linkdinn.svg" alt="" />
                     <img src="../images/twitterr.svg" alt="" />
                     <img src="../images/youtubee.svg" alt="" />
                     <img src="../images/instagramm.svg" alt="" />
                     <img src="../images/googleplus.svg" alt="" />
                     <img src="../images/pinterest.svg" alt="" />
                     <img src="../images/rss.svg" alt="" />
                  </div>
            </div>
        </div>
      </div>
    < div className="footer-bottom">  
    <ul>
        <li>Home</li>
        <li>LandLord</li>
        <li>Tenants</li>
        <li>Contact Us</li>
   </ul>
   <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
      </div>
    </div>
  
  );
}
