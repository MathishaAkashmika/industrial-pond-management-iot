import React, { useState, useEffect } from 'react';
import './Styles/sensorstyles.css'; // Ensure this CSS file includes your desired styling

const AmmoniumDisplay = () => {
  const [ammoniumLevel, setAmmoniumLevel] = useState(0); // Initial ammonium level in mg/L

  useEffect(() => {
    // Simulate fetching ammonium level data with a delay
    const timer = setTimeout(() => {
      // Simulate an example where the ammonium level is updated
      setAmmoniumLevel(0.75); // Set a new dummy ammonium level value
    }, 2000); // 2 seconds delay to mimic data fetching

    return () => clearTimeout(timer);
  }, []);

  // Determine the ammonium level status
  const ammoniumStatus = ammoniumLevel < 0.5 ? "Low" :
                         ammoniumLevel <= 1.0 ? "Good" : "High";

  return (
    <div className="sensor-card ammonia-sensor-card">
      <h1>Ammonium</h1>
      <div className="ammonia-sensor-card-content">
        <p>{ammoniumLevel} mg/L</p>
        <p>{ammoniumStatus}</p>
      </div>
    </div>
  );
};

export default AmmoniumDisplay;
