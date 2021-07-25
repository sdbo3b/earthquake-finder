import React from "react";
import { Globe, Search } from "react-feather";
import "../../../styles/forms/form.css";

const RectangularForm: React.FC = () => {
  return (
    <div className="flex-grow-1">
      <div className="row gy-0 gx-0 align-items-center justify-content-center">
        <h2 className="fs-5 col-12 text-center">Error</h2>
        <div className="col-sm-12 row justify-content-center">
          <div className="form-input-icon col-sm-6 ">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              placeholder="Min Latitude"
              className="form-input-field"
            />
          </div>
          <div className="w-100"></div>
          <div className="form-input-icon col-sm-6">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              placeholder="Max Latitude"
              className="form-input-field"
            />
          </div>
        </div>

        <div className="col-12 row justify-content-center">
          <div className="form-input-icon col-sm-6">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              placeholder="Min Longitude"
              className="form-input-field"
            />
          </div>
          <div className="w-100"></div>

          <div className="form-input-icon col-sm-6">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              placeholder="Max Longitude"
              className="form-input-field"
            />
          </div>
        </div>
        <div className="form-button-icon col-sm-12">
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
