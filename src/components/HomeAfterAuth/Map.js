import React, {useState} from "react";

import { MapContainer, TileLayer, useMapEvents,Marker,Popup } from 'react-leaflet'
import L, { map, marker } from "leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import GeocoderLeaflet from "./Geocoder";

export default function Map(props){
    const [position, setPosition] = useState(null);
    props.setPos(position);
    function LocationMarker() {
        const map = useMapEvents({
          click(e) {
              setPosition(e.latlng);
              map.flyTo(e.latlng, map.getZoom());


          }
        })
        return position === null ? null : (
          <Marker position={position}>
            <Popup>Vous etes ici</Popup>
          </Marker>
        )
        
      }

      const positions=[36.7762, 3.05997];
        
        let DefaultIcon = L.icon({
          iconUrl: require("../../assets/marker.svg").default,
          iconSize: [25, 41],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40],
        });
        L.Marker.prototype.options.icon = DefaultIcon;
      
      return(
        <div >

        <div className=" w-full flex justify-center items-center overflow-x-hidden overflow-y-auto mt-[50px] fixed inset-0 z-50 outline-none focus:outline-none">
        <div className=" w-fit h-fit flex flex-col  gap-y-[10px]  items-center"
>
        <MapContainer id="map"  center={positions} zoom={13} whenCreated={(map) => this.setState({ map })} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker/>
       <GeocoderLeaflet/>
      </MapContainer>
      <button onClick={()=>{props.set(false);
      console.log(props.data);
          props.dataSet("localisation",`${position.lat},${position.lng}`);
    }} className=" z-50 w-[200px] h-[50px] bg-akkar-orange text-center text-xl text-white">Confirm</button>

        </div>
   </div>
   <div   className=" cursor-pointer opacity-25 fixed inset-0 z-40 bg-black"></div>

</div>
      
          
      );
      
      
}

