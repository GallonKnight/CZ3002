
/*
import React, { useState } from "react";
import { MapContainer, ZoomControl, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import CurrentLocation from './CurrentLocation';
import Button from 'react-bootstrap/Button';
*/

import React, { useEffect,useState } from "react";
import { MapContainer, TileLayer, useMap, ZoomControl, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";


import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import icon from "./constants";
import CurrentLocation from './CurrentLocation';

const center = [1.331232, 103.814020];

function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params:{
        email: 'blacksaber564@gmail.com',
        countrycode:'SG',
        addressdetails: 1 
      },
    });

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        icon
      }
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

/// actual rendering of map here

class ViewMap2 extends React.Component {
  render() {
    return (
      <div id="mapid">
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          />
          <CurrentLocation/>
          <LeafletgeoSearch />
        </MapContainer>
      </div>
    );
  }
}

export default ViewMap2;