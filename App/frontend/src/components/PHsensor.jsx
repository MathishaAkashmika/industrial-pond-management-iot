import React, { useState, useEffect } from 'react';
import './Styles/sensorstyles.css';

const PHDisplay = () => {
  const [phValue, setPhValue] = useState(7.4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhValue(6.8);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const waterQuality = (phValue >= 6.5 && phValue <= 8.5) ? "Good" : "Bad";

  return (
    <div className="sensor-card ph-card">
      <div className="sensor-card-content">
        <h1>PH Level</h1>
        <p> {phValue}</p>
        <p>Staus: {waterQuality}</p>
      </div>
    </div>
  );
};

export default PHDisplay;
