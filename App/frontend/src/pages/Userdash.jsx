// App/frontend/src/pages/userdash.jsx

import React from 'react';
import Ammonia from '../components/Ammonia';
import PHsensor from '../components/PHsensor';
import Temperature from '../components/Temperature';
import Turbidity from '../components/Turbidity';
import Waterflow from '../components/Waterflow';
import Waterlevel from '../components/Waterlevel';
import Waterpressure from '../components/waterpressure';
import './pages.css'; // Importing the global CSS file

const UserDash = () => {
  return (
    <div className="dashboard">
      <div className='dash-heading-text-box'><h1>Pond Management System</h1></div>
      <Ammonia />
      <PHsensor />
      <Temperature />
      <Turbidity />
      <Waterflow />
      <Waterlevel />
      <Waterpressure />
    </div>
  );
};

export default UserDash;
