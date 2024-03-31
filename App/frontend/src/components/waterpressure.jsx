import React, { useState, useEffect } from 'react';
import './Styles/sensorstyles.css'; // Ensure this CSS file includes card styling

const WaterPressureDisplay = () => {
  const [pressure, setPressure] = useState(0); // Initial pressure value

  useEffect(() => {
    // Simulate fetching water pressure data with a delay
    const timer = setTimeout(() => {
      // Example: Update the pressure value after fetching it
      setPressure(1.2); // Set a new dummy pressure value in bar (or any other unit)
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // Optional: Define a range for acceptable pressure values
  const isPressureAcceptable = pressure >= 1.0 && pressure <= 2.0;

  return (
    <div className="sensor-card waterp-pressure-card"> {/* Corrected class names for consistency */}
      <div className="sensor-card-content"> {/* Use generic content class for styling */}
      <h1>Water Pressure</h1>
        <p>{pressure} bar</p>
        <p>Status: {isPressureAcceptable ? 'Good' : 'Check'}</p>
      </div>
    </div>
  );
};

export default WaterPressureDisplay;
