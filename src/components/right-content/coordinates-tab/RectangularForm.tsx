import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRectangular } from "../../../state/thunks/index";

const RectangularForm: React.FC = () => {
  const [minLatitude, setMinLatitude] = useState("");
  const [minLongitude, setMinLongitude] = useState("");
  const [maxLatitude, setMaxLatitude] = useState("");
  const [maxLongitude, setMaxLongitude] = useState("");

  const dispatch = useDispatch();

  const submitQuery = (e: any) => {
    e.preventDefault();

    dispatch(
      fetchRectangular(minLatitude, minLongitude, maxLatitude, maxLongitude)
    );
  };

  return (
    <div className="form">
      <label htmlFor="min-latitude">
        Minimum Latitude <br /> (Decimal [-90,90] degrees)
      </label>
      <input
        className="form-text-input-item"
        type="text"
        name="min-latitude"
        onChange={(e) => {
          setMinLatitude(e.target.value);
        }}
      />
      <label htmlFor="min-longitude">
        Minimum Longitude <br /> (Decimal [-360,360] degrees)
      </label>
      <input
        className="form-text-input-item"
        type="text"
        name="min-longitude"
        onChange={(e) => {
          setMinLongitude(e.target.value);
        }}
      />
      <label htmlFor="max-latitude">
        Max Latitude <br /> (Decimal [-90,90] degrees)
      </label>
      <input
        className="form-text-input-item"
        type="text"
        name="max-latitude"
        onChange={(e) => {
          setMaxLatitude(e.target.value);
        }}
      />
      <label htmlFor="max-longitude">
        Max Longitude <br /> (Decimal [-360,360] degrees)
      </label>
      <input
        className="form-text-input-item"
        type="text"
        name="max-longitude"
        onChange={(e) => {
          setMaxLongitude(e.target.value);
        }}
      />
      <button onClick={submitQuery}>submit</button>
    </div>
  );
};

export default RectangularForm;
