import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbars/Navbar"
import LivingCost from './components/livingcost/LivingCost';
import './App.css';
import Properties from './components/properties/Properties';
import Flexibility from './components/flexibility/Flexibility';
import NewProperty from './components/newProperty/NewProperty';
import PropertyOwner from './components/propertyOwner/PropertyOwner';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <div className="hero-page">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}/>  
        </Routes>
      </Router>
      <div className='map'>
      <h1>The most affortable place to stay in the san franciso bay area</h1>
       <div className='map-wrap'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555044748!2d-122.50764049693078!3d37.75781499700341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1673198792635!5m2!1sen!2sng" width="320" height="250" style={{ border: "0", borderRadius:"8px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='select-group'>
            <div className='all-grp'>
               <label>All group</label> <select className='select-all'>All group</select>
            </div>
            <div className="neighorhood">
               <label>Neighborhood</label> <select className='select-all'>Neighborhood</select>
            </div>
        <i class="fa-solid fa-magnifying-glass search"></i>
       </div>
       </div>
        </div>
      </div>
      <div className='hero-bottom'>
        <LivingCost/>
      </div>
      <div className="property-div">
        <Properties/>
      </div>
       <Flexibility/>
       <NewProperty/>
       <PropertyOwner/>
       <Footer/>
    </div>
  );
}

export default App;
