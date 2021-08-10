import React from "react";
import { Globe, Search } from "react-feather";
import "../../../styles/forms/form.css";

const MapForm: React.FC = () => {
  const isError = () => {
    return "";
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="flex-grow-1 d-flex" onSubmit={onSubmit} autoComplete="off">
      <div className="flex-grow-1 row gy-0 gx-0 align-items-center justify-content-center">
        <h2 className="fs-5 col-12 text-center text-danger align-self-start pt-5">
          {isError()}
        </h2>
        <div className="col-sm-12 row justify-content-center">
          <label htmlFor="radius" className="text-center">
            Radius
          </label>
          <div className="form-input-icon col-sm-6 ">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              name="radius"
              placeholder="Radius"
              className="form-input-field"
            />
          </div>
        </div>
        <div className="col-sm-12 align-self-end pb-5 d-flex justify-content-center">
          <div className="form-button-icon ">
            <i className="icon">
              <Search />
            </i>
            <button type="submit" className="form-button" onClick={onSubmit}>
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MapForm;
