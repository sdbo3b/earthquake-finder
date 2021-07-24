import React, { useState } from "react";
import { fetchCircularData } from "../../../state/thunks/index";
import { useDispatch } from "react-redux";

const latRegex = /^(-)?([0-9]{0,2})(\.\d*)?$/;
const lonRegex = /^(-)?([0-9]{0,3})(\.\d*)?$/;
const decimalNumRegex = /^\d{0,5}(\.\d*)?$/;

const CircularForm = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [maxRadiusKm, setMaxRadiusKm] = useState("");
  const dispatch = useDispatch();

  const submitQuery = (e: any) => {
    e.preventDefault();

    dispatch(fetchCircularData(latitude, longitude, maxRadiusKm));
  };

  return (
    <div className="form">
      <label htmlFor="latitude">
        Latitude <br />
        (Decimal [-90,90] degrees)
      </label>
      <input
        className="form-text-input-item"
        type="text"
        name="latitude"
        value={latitude}
        onChange={(e) => {
          if (e.target.value.match(latRegex)) setLatitude(e.target.value);
        }}
      />
      <label htmlFor="longitude">
        Longitude <br />
        (Decimal [-180,180] degrees)
      </label>
      <input
        className="form-text-input-item"
        type="text"
        name="longitude"
        value={longitude}
        onChange={(e) => {
          if (e.target.value.match(lonRegex)) setLongitude(e.target.value);
        }}
      />
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
          if (e.target.value.match(decimalNumRegex))
            setMaxRadiusKm(e.target.value);
        }}
      />
      <button onClick={submitQuery}>submit</button>
    </div>
  );
};

export default CircularForm;
