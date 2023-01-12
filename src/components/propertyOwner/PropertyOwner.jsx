import React from 'react';
import "./propertyOwner.css"
export default function PropertyOwner() {

  return (
    <div className="property-owner">
      <div className="owner-message">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
          <div className="owner-profile">
            <img src="../images/profile-image.png" alt="" />
            <div className="owner-details">
                <header>Harry Wilson</header>
                <p id="owner">Property Owner</p>
            </div>
          </div>
      </div>
      <div className="owner-video">
        <iframe width="560" height="400" src="https://www.youtube.com/embed/y881t8ilMyc" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  );
}
