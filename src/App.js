import "./App.css";
import GetLocation from "./components/GetLocation";
import RestaurantHandler from "./components/RestaurantHandler";
import React, { useState, useEffect } from "react";
import logo from "./img/globe.png";

function App() {
  const [showGetLocation, setShowGetLocation] = useState(false);
  const [showInfoText, setShowInfoText] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleGetLocationClick = () => {
    setShowGetLocation(true);
    setShowInfoText(false);
  };

  const handleCoords = (coords) => {
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
  };

  useEffect(() => {
    if (latitude && longitude) {
    }
  }, [latitude, longitude]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={handleGetLocationClick}
        />
        {showInfoText &&
          "Click the globe to get your location and retrieve some restaurants"}
        {showGetLocation && <GetLocation onCoords={handleCoords} />}
        {latitude && longitude && (
          <RestaurantHandler latitude={latitude} longitude={longitude} />
        )}
      </header>
    </div>
  );
}

export default App;
