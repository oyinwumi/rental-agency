import React from 'react';
import "./livingcost.css";

export default function LivingCost() {
  return (
    <div className='living-cost'>
       <h2>Minimum Living Cost Takes Care of Everything</h2>
       <div className="living-cost-wrap">
       <img src="../images/livingcost-img3.png" alt="grey house" />
      
        <div className="living-cost-icons">
            <div className="pay one">
            <i class="fa-solid fa-dollar-sign icons"></i>
            <p>Pay As Little As possible!</p>
            </div>
              <div className="pay two">
              <i class="fa-solid fa-house-chimney-crack icons"></i>
            <p>Enjoy Wisdom Of Community!</p>
            </div>
            <div className="pay three">
            <i class="fa-solid fa-layer-group icons"></i>
            <p>Let's Somebody Else Take Care Of Landlord!</p>
            </div>
             <div className="pay four">
             <i class="fa-solid fa-seedling icons"></i>
            <p>Enjoy Peaceful Environment!</p>
            </div>
            <div className="pay five">
            <i class="fa-solid fa-shield-heart icons"></i>
            <p>Stay Safe! Save Money!</p>
            </div>
            <div className="pay six ">
            <i class="fa-solid fa-fire icons"></i>
            <p>Pay For What You Use !</p>
            </div>
        </div>
       </div>
    </div>
  );
}
