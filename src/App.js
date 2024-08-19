import React from "react";
import Navbar from "./components/Navbar";
import AppointmentSection from "./components/AppointmentSection";
import SearchBar from "./components/SearchBar";
import HowItWorks from "./components/HowItWorks";
import "./App.scss"; // or combine with App.css as needed
import "./App.css"; // or combine with App.css as needed

import image5 from './Screenshot 2024-08-18 104314 (2).png';
import image from './Screenshot 2024-08-18 201410.png';
import image3 from './Screenshot 2024-08-18 201511.png';
import image4 from './Screenshot 2024-08-18 201501.png';
import image6 from './Screenshot 2024-08-18 201418.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={image} alt="Screenshot" className="image" />
      <img src={image3} alt="Screenshot"  className="image3"/>
      <img src={image4} alt="Screenshot"className="image4"/>
      <img src={image6} alt="Screenshot"className="image6"/>
      <AppointmentSection />
      <SearchBar />
      <img src={image5} alt="Screenshot" style={{ width: '100%', height: 'auto' ,marginTop:'-6vw'}} />
      <HowItWorks />
    
    </div>
  );
}

export default App;
