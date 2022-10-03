// App.js
import React from 'react';
import './index.css';
import MyGoogleMap from './components/MyGoogleMap';


function ViewMap() {

  return (
    <div className="main-wrapper">
      <MyGoogleMap />
    </div>
  );
}

export default ViewMap;