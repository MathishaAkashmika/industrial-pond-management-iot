import React, { useState } from 'react';
import './Styles/sensorstyles.css';

const WaterLevelControl = () => {
  const [waterLevel, setWaterLevel] = useState('Low');

  const handleMotorTrigger = () => {
    console.log("Motor triggered");
  };

  const toggleWaterLevel = () => {
    setWaterLevel(waterLevel === 'Low' ? 'Good' : 'Low');
  };

  return (
    <div className="sensor-card waterlvl-card">
      <div className="sensor-card-content">
        <h2>Water Level <br/> {waterLevel}</h2>
        <button className="button-remove-water" onClick={handleMotorTrigger}>Start Pump</button>
      </div>
    </div>
  );
};

export default WaterLevelControl;
