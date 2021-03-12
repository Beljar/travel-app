import React from 'react'
import 'leaflet/dist/leaflet.css';
import map from './map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapLeaflet({latLong}) {
  console.log(latLong)
  return (
    <MapContainer center={latLong} zoom={8} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLong}></Marker>
    </MapContainer>
  )
}