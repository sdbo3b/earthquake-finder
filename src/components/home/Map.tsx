import React, { useEffect } from "react";
import L from "leaflet";
import { useAppDispatch } from "../../state/hooks";
import {
  setCircularFormLatitude,
  setCircularFormLongitude,
} from "../../state/action-creators";

let map: L.Map;
let circle: L.Circle;
let marker: L.Marker;

const Map: React.FC = () => {
  const dispatch = useAppDispatch();

  const onMapClick = (e: any) => {
    const { lat, lng } = e.latlng;
    marker.setLatLng([lat, lng]);
    // radius in meters
    circle.setLatLng([lat, lng]).setRadius(1000 * 1000);
    dispatch(setCircularFormLatitude(lat));
    dispatch(setCircularFormLongitude(lng));
  };

  // Load map a single time after component renders
  useEffect(() => {
    map = L.map(`map_tab`).setView([41, -10], 2);
    circle = L.circle([41, -10], { radius: 1000 * 1000 }).addTo(map);
    marker = L.marker([41, -10]).addTo(map);
    map.on("click", onMapClick);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      }
    ).addTo(map);
  }, []);

  return (
    <div className="map-container">
      <div id="map_tab" className=" map"></div>
    </div>
  );
};

export default Map;
