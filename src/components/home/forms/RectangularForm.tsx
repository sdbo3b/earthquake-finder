import React from "react";
import { Globe, Search } from "react-feather";
import "../../../styles/forms/form.css";

const RectangularForm: React.FC = () => {
  return (
    <div className="d-flex h-100 pt-5">
      <div className="d-flex flex-column align-items-center w-100">
        <h1 className="fs-2">Rectangle</h1>
        <h2 className="fs-5">This is a subtitle</h2>
        <div className="form-input-icon">
          <i className="icon">
            <Globe />
          </i>
          <input
            type="text"
            placeholder="Min Latitude"
            className="form-input-field"
          />
        </div>

        <div className="form-input-icon">
          <i className="icon">
            <Globe />
          </i>
          <input
            type="text"
            placeholder="Max Latitude"
            className="form-input-field"
          />
        </div>

        <div className="form-input-icon">
          <i className="icon">
            <Globe />
          </i>
          <input
            type="text"
            placeholder="Min Longitude"
            className="form-input-field"
          />
        </div>
        <div className="form-input-icon">
          <i className="icon">
            <Globe />
          </i>
          <input
            type="text"
            placeholder="Max Longitude"
            className="form-input-field"
          />
        </div>
        <div className="form-button-icon">
          <i className="icon">
            <Search />
          </i>
          <button type="submit" className="form-button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default RectangularForm;
