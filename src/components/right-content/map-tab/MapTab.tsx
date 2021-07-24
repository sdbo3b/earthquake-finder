import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useDispatch } from "react-redux";
import { fetchCircularData } from "../../../state/thunks";
// TODO: Fix Radius on click

const decimalNumRegex = /^\d{0,5}(\.\d*)?$/;
let map: L.Map;
let circle: L.Circle;
let marker: L.Marker;
const MapTab: React.FC = () => {
  const [maxRadiusKm, setMaxRadiusKm] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: any) => {
    // validate
    if (maxRadiusKm === "") {
      return;
    }
    const { lat, lng } = marker.getLatLng();
    dispatch(fetchCircularData(lat, lng, maxRadiusKm));
  };

  const onMapClick = (e: any) => {
    const { lat, lng } = e.latlng;
    marker.setLatLng([lat, lng]);
    // radius in meters
    circle.setLatLng([lat, lng]).setRadius(1000 * 1000);
  };

  // Load map a single time after component renders
  useEffect(() => {
    // map = L.map(`map_tab`).setView([41, -10], 2);
    // circle = L.circle([41, -10], { radius: 1000 * 1000 }).addTo(map);
    // marker = L.marker([41, -10]).addTo(map);
    // map.on("click", onMapClick);

    // L.tileLayer(
    //   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    //   {
    //     attribution:
    //       'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: "mapbox/streets-v11",
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken:
    //       "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    //   }
    // ).addTo(map);
  }, []);

  return (
    <React.Fragment>
      <div className="right-content-header"></div>
      <div className="right-content-body">
        <div className="map-form">
          <div id="map_tab" className="map-form-map "></div>

          <div className="map-form-input">
            {" "}
            <label htmlFor="max-radius-km">
              Max Radius (km)
              <br />
              (Decimal [0, 20001.6] km)
            </label>
            <input
              className="form-text-input-item"
              type="text"
              name="max-radius-km"
              value={maxRadiusKm}
              onChange={(e) => {
                if (e.target.value.match(decimalNumRegex)) {
                  setMaxRadiusKm(e.target.value);
                  if (e.target.value !== "") {
                    circle
                      .setLatLng(circle.getLatLng())
                      .setRadius(Number.parseInt(e.target.value) * 1000);
                  }
                }
              }}
            />
          </div>
          <div className="map-form-submit">
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <div className="right-content-footer"></div>
    </React.Fragment>
  );
};

export default MapTab;
