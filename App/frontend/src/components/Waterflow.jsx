import React, { useState, useEffect } from 'react';
import './Styles/sensorstyles.css';

const WaterFlowDisplay = () => {
  const [flowRate, setFlowRate] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlowRate(10);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sensor-card water-flow-card">
      <div className="sensor-card-content">
        <h1>Water Flow Rate</h1>
        <p>{flowRate} L/min</p>
      </div>
    </div>
  );
};

export default WaterFlowDisplay;
