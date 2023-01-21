import React, { useState } from 'react';
import "./property.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { nanoid } from 'nanoid';

export default function Properties() {
const id = nanoid()
  const [count , setCount] = useState(0);
  const [count2 , setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const increaseCount =(id) =>{
    setCount(count +1);
    console.log(setCount)
  }

  const increaseCount2 =() =>{
    setCount2(count2 +1);
    console.log(setCount)
  }

    const increaseCount3 =() =>{
    setCount3(count3 +1);
    console.log(setCount)
  }

 const responsive = {
  0: {items: 1},
  568:{items: 2},
  1024:{items:3,
  itemsFit: "contain"
},
 };
  const items = [
   
    <div className='item' >
        <img  className="item-img" src="../images/property1.png" alt="" />
        <div className="property-details">
             <p>2578 Folsom street, san francisco, CA, 94110</p>
             <small>Private Room</small>
             <p className="price">$1200/month</p>
        </div>
        <div className="property-details-bottom">
            <div className="path">
          <img  onClick={() => increaseCount(count.id)} src="../images/path.svg" alt="path" />
            <span>{count}</span>
            </div>
            <div className="shape">
                <img  onClick={increaseCount2} src="../images/shape.svg" alt="shape" />
                <span>{count2}</span>
            </div>
            <div className="size">
            <img  onClick={increaseCount3} src="../images/size.svg" alt="shape" />
                <span>{count3}</span>
            </div>
        </div>
    </div>,
    <div className='item' >

        <img className="item-img" src="../images/property2.png" alt="" />
        <div className="property-details">
             <p>2578 Folsom street, san francisco, CA, 94110</p>
             <small>Private Room</small>
             <p className="price">$1200/month</p>
        </div>
        <div className="property-details-bottom">
            <div className="path">
            <img onClick={(id) => increaseCount(count.id)} src="../images/path.svg" alt="path" />
            <span>{count}</span>
            </div>
            <div className="shape">
                <img src="../images/shape.svg" alt="shape" />
                <span>4</span>
            </div>
            <div className="size">
            <img src="../images/size.svg" alt="shape" />
                <span>2</span>
            </div>
        </div>
     
    </div>,
    <div className='item' >
   
        <img className="item-img" src="../images/property3.png" alt="" />
        <div className="property-details">
             <p>2578 Folsom street, san francisco, CA, 94110</p>
             <small>Private Room</small>
             <p className="price">$1200/month</p>
        </div>
        <div className="property-details-bottom">
            <div className="path">
            <img src="../images/path.svg" alt="path" />
            <span>3</span>
            </div>
            <div className="shape">
                <img src="../images/shape.svg" alt="shape" />
                <span>4</span>
            </div>
            <div className="size">
            <img src="../images/size.svg" alt="shape" />
                <span>2</span>
            </div>
        </div>
     
    </div>,
    <div className='item' >
  
        <img className="item-img" src="../images/property3.png" alt="" />
        <div className="property-details">
             <p>2578 Folsom street, san francisco, CA, 94110</p>
             <small>Private Room</small>
             <p className="price">$1200/month</p>
        </div>
        <div className="property-details-bottom">
            <div className="path">
            <img src="../images/path.svg" alt="path" />
            <span>3</span>
            </div>
            <div className="shape">
                <img src="../images/shape.svg" alt="shape" />
                <span>4</span>
            </div>
            <div className="size">
            <img src="../images/size.svg" alt="shape" />
                <span>2</span>
            </div>
        </div>
     
    </div>,
     <div className='item' >
    
        <img  className="item-img"src="../images/property4.png" alt="" />
        <div className="property-details">
             <p>2578 Folsom street, san francisco, CA, 94110</p>
             <small>Private Room</small>
             <p className="price">$1200/month</p>
        </div>
        <div className="property-details-bottom">
            <div className="path">
            <img src="../images/path.svg" alt="path" />
            <span>3</span>
            </div>
            <div className="shape">
                <img src="../images/shape.svg" alt="shape" />
                <span>4</span>
            </div>
            <div className="size">
            <img src="../images/size.svg" alt="shape" />
                <span>2</span>
            </div>
        </div>
    
     </div>,
      <div className='item' >
    
        <img className="item-img" src="../images/property5.png" alt="" />
        <div className="property-details">
             <p>2578 Folsom street, san francisco, CA, 94110</p>
             <small>Private Room</small>
             <p className="price">$1200/month</p>
        </div>
        <div className="property-details-bottom">
            <div className="path">
            <img src="../images/path.svg" alt="path" />
            <span>3</span>
            </div>
            <div className="shape">
                <img src="../images/shape.svg" alt="shape" />
                <span>4</span>
            </div>
            <div className="size">
            <img src="../images/size.svg" alt="shape" />
                <span>2</span>
            </div>
        </div>
    
      </div>,
   
  ];

  return (
    <div className="property">
      <div className="property-top">
        <h2>List Of Properties</h2>
        <button>View All Property</button>
      </div>
      <div className="property-list">
      <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      />
      </div>
      {/* <div className="bottom-btns">
        <span className='first'>First</span>
        <span className='one'>1</span>
        <span className='two'>2</span>
        <span className='three'>3</span>
        <span className='next'>Next</span>
      </div> */}
    </div>
  );
}
