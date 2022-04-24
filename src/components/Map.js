import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
//Don't forget to import the css
import 'leaflet/dist/leaflet.css';

function Map() {
  //Some random co-ordinate
  const position = [51.505, -0.09];
  const ironhackLogo = new L.Icon({
    iconUrl:
      'https://res.cloudinary.com/dlccskpp5/image/upload/v1638873527/lq8jaqtynk9khzurlpgz.jpg',
    iconSize: [68, 65],
  });

  //Do not forget to set a width and height style to your map. Else it won't show up
  return (
    <div>
      <MapContainer
        style={{ width: '100%', height: '100%' }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={ironhackLogo}>
          <Popup>
            A Mono
            <br /> Just the best.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
