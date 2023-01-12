import React from 'react';
import "./flexibility.css"

export default function flexibility() {
  return (
    <div className='flexbility'>
      <div className="right-flexibility">
        <div className="leases">
            <img src="../images/leases.png" alt="" />
            <p>Flexible Leases</p>
        </div>
        <div className="days">
            <img src="../images/days.png" alt="" />
            <p>7-Day Happiness Guaranteed</p>
        </div>
        <div className="monthly">
            <img src="../images/monthly.png" alt="" />
            <p>Monthly House Cleaning</p>
        </div>
        <div className="choose-room">
            <img src="../images/choose-room.png" alt="" />
            <p>Choose Your Own Roommate</p>
        </div>
      </div>
      <div className="left-flexibility">
        <h3>Flexibility and options to suit your lifestyle.</h3>
        <p>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
        <button>Search Rooms</button>
      </div>
    </div>
  );
}
