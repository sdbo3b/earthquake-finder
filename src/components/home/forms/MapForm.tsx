import React from "react";
import { Globe, Search } from "react-feather";
import "../../../styles/forms/form.css";

const MapForm: React.FC = () => {
  return (
    <div className="d-flex h-100">
      <div className="d-flex flex-column align-items-center w-100">
        <h2 className="fs-5">Error</h2>
        <div className="form-input-icon">
          <i className="icon">
            <Globe />
          </i>
          <input
            type="text"
            placeholder="Radius"
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

export default MapForm;
