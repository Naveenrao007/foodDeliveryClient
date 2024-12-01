import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icon issues
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LeafletMap = () => {
  // Example restaurant data
  const restaurant = {
    name: "Awesome Restaurant",
    address: "123 Food Street, Tasty City",
    coordinates: [28.6139, 77.2090],   };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={restaurant.coordinates}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      
        <Marker position={restaurant.coordinates}>
          <Popup>
            <b>{restaurant.name}</b>
            <br />
            {restaurant.address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
