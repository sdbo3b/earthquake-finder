import React, { useEffect } from "react";
import L from "leaflet";
import "../../styles/App.css";
import { Feature } from "../../models";

interface EventCardProps {
  feature: Feature;
}

const EventCard: React.FC<EventCardProps> = ({ feature }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card mx-2 my-2" style={{ width: "24rem" }}>
      <div id={`mapid${feature.id}`} className="card-img-top card-map"></div>
      <div className="card-body text-dark">
        <h5 className="card-title">{feature.properties?.place}</h5>
        <p className="card-text">Magnitude: {feature.properties?.mag}</p>
        <p className="card-text">
          Date: {new Date(feature.properties?.time!).toUTCString()}
        </p>
        <p className="card-text">
          Latitude: {feature.geometry["coordinates"][1]}
        </p>
        <p className="card-text">
          Longitude: {feature.geometry["coordinates"][0]}
        </p>
        <a href={feature.properties?.url} className="btn btn-primary">
          Click here for more details
        </a>
      </div>
    </div>
  );
};

export default EventCard;
