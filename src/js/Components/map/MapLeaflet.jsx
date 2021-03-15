import React from 'react'
import 'leaflet/dist/leaflet.css';
import map from './map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './marker-shadow.png';

export default function MapLeaflet({latLong, city}) {
  return ( latLong ? 
      <MapContainer center={latLong} zoom={8} scrollWheelZoom={true} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latLong}>
          <Popup>
            {city}
          </Popup>
        </Marker>
        
      </MapContainer>
     : ''
  )
}