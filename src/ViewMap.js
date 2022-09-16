
import { MapContainer, ZoomControl, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import CurrentLocation from './CurrentLocation';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

 const ViewMap = () => {
    
    const [text, setText] = 
    useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      setText(event.target[0].value);
    };
    

    return (
      <div>
        
        <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <h1>{text}</h1>

        <MapContainer   
          center={[1.331232, 103.814020]} 
          zoom={11.5} 
          zoomControl={false} 
          style={{ height: '100vh', width: '100%' }}>
  
        <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Basic Map">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
        
            <LayersControl.BaseLayer name="Topo Map">
              <TileLayer
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
        </LayersControl>
        
        <ZoomControl position='topright'/>
  
        </MapContainer>
      </div>
    )
  }
  
  export default ViewMap