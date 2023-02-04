import React from "react";

import { MapContainer, TileLayer,Marker } from 'react-leaflet'
import L from "leaflet"

export default function Map(props){ 
   
      const position=props.position;
        
        let DefaultIcon = L.icon({
          iconUrl: require("../../../assets/marker.svg").default,
          iconSize: [25, 41],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40],
        });
        L.Marker.prototype.options.icon = DefaultIcon;
      
      return(
      <MapContainer  center={position} zoom={13} whenCreated={(map) => this.setState({ map })} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.position}>

        </Marker>
      </MapContainer>
          
      );
      
      
}

