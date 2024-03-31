import React, { useState, useEffect } from 'react';
import './Styles/sensorstyles.css';

const TurbidityDisplay = () => {
  const [turbidity, setTurbidity] = useState(1.5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTurbidity(2.8);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const waterQuality = turbidity <= 1 ? "Good" : "Bad";

  const removeWater = () => {
    setTurbidity(prevTurbidity => Math.max(prevTurbidity - 1, 0));
  };

  return (
    <div className="sensor-card turbi-card">
      <div className="sensor-card-content">
        <h1>Turbidity</h1>
        <p>{turbidity.toFixed(2)} NTU</p>
        <p>Status: {waterQuality}</p>
        <button className="button-remove-water" onClick={removeWater}>Remove Water</button>
      </div>
    </div>
  );
};

export default TurbidityDisplay;
