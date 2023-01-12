import React from 'react';
import "./newProperty.css"

export default function NewProperty() {
  return (
    <div className="new-property">
       <h3>Your property with us and be Confident that Your Room will be Filled Out!</h3>
       <div className="form-wrap">
        <h3>Add A New Property</h3>
        <form action="">
           <div className="upper-form-div">
           <div className="name">
                <label htmlFor="name">Name</label><br />
                <input type="text"  placeholder='Enter Name'/>
            </div>
          <div className="address">
                <label htmlFor="address">Address</label><br />
                <input type="text"  placeholder='Enter Address'/>
          </div>
            <div className="unit-number">
                <label htmlFor="unit">Unit Number</label><br />
                <input type="text"  placeholder='Unit Number'/> 
            </div>
           </div>
          <div className="mid-form-div">
          <div className="city">
            <label htmlFor="city">City</label><br />
            <select name="city" id="city" >
                <option value="select city">Select City</option>
            </select>
            </div>
            <div className="state">
            <label htmlFor="city">State</label><br />
            <select name="city" id="city">
              <option value="select city">Select State</option>
            </select>
            </div>
            <div className="room-type">
            <label htmlFor="city">Room Type</label><br />
           <select name="city" id="city">
           <option value="select city">Select Room Type</option>
           </select>
            </div>
          </div>
          <div className="bottom-form-div">
          <div className="price">
            <label htmlFor="city">Price</label><br />
           <select name="city" id="city">
           <option value="select city">Enter Price</option>
           </select>
            </div>
            <div className="room-type">
            <label htmlFor="city">Room Type</label><br />
           <select name="city" id="city">
           <option value="select city">Select Room Type</option>
           </select>
            </div>
          </div>
          <label htmlFor="description" id='description'>Description</label><br />
          <textarea name="" id="" cols="30" rows="10">Enter Description</textarea>
          <label htmlFor="photo" id='upload'>Upload Photos</label>
          <input type="file" id='upload-photos' placeholder='Drag your images here, or browse Supported:  JPG, JPEG, PNG' />
        
         <button id='add-btn'>Add A New Property</button>
         
        </form>
       </div>
    </div>
  );
}
