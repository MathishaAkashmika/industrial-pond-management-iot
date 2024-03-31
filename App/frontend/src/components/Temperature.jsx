import React, { useState, useEffect } from 'react';
import './Styles/sensorstyles.css';

const Temperature = () => {
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        const fetchTemperature = async () => {
            const data = { temperature: 72 };
            setTemperature(data.temperature);
        };

        fetchTemperature();
    }, []);

    return (
        <div className="sensor-card temperature-card">
                            <h1>Temperature</h1>
            {temperature ? (
                <p className="sensor-card-content">{temperature}°C</p>
            ) : (
                <p className="sensor-card-content">Loading...</p>
            )}
        </div>
    );
};

export default Temperature;
