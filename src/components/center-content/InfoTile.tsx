import React, { useEffect } from "react";
import { ExternalLink } from "react-feather";
import { Feature } from "../../models/index";

import L from "leaflet";

interface Props {
  feature: Feature;
}

const InfoTile: React.FC<Props> = ({ feature }) => {
  // Load map after component renders
  useEffect(() => {
    var map = L.map(`mapid${feature.id}`).setView(
      [feature.geometry["coordinates"][1], feature.geometry["coordinates"][0]],
      6
    );
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

    // temp. TODO: update model
    type adapter = typeof feature | any;
    const feat: adapter = feature;
    L.geoJSON(feat).addTo(map);
  });

  return (
    <div className="info-list-tile-container">
      <div className="info-list-tile-leading">
        <div id={`mapid${feature.id}`} className="map-container"></div>
      </div>
      <div className="info-list-tile-center">
        <div className="detail-group">
          <p className="detail-item">Location: {feature.properties?.place}</p>
          <p className="detail-item">Magnitude: {feature.properties?.mag}</p>
          <p className="detail-item">
            Date: {new Date(feature.properties?.time!).toUTCString()}
          </p>
          <p className="detail-item">
            Latitude: {feature.geometry["coordinates"][1]}
          </p>
          <p className="detail-item">
            Longitude: {feature.geometry["coordinates"][0]}
          </p>
        </div>
      </div>
      <a href={feature.properties?.url} className="info-list-tile-trailing">
        <ExternalLink />
        <p>Click here for more info</p>
      </a>
    </div>
  );
};

export default InfoTile;
