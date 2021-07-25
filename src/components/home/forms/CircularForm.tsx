import React from "react";
import { Globe, Search } from "react-feather";
import {
  setCircularFormLatitude,
  setCircularFormLongitude,
  setCircularFormRadius,
} from "../../../state/action-creators";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { fetchCircularData } from "../../../state/thunks";
import "../../../styles/forms/form.css";

const CircularForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const circularFormState = useAppSelector(
    (state) => state.formsState.circularForm
  );

  const onSubmit = (e: any) => {
    dispatch(
      fetchCircularData(
        circularFormState.latitude,
        circularFormState.longitude,
        circularFormState.radius
      )
    );
  };

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
            placeholder="Latitude"
            className="form-input-field"
            value={circularFormState.latitude}
            onChange={(e) => dispatch(setCircularFormLatitude(e.target.value))}
          />
        </div>

        <div className="form-input-icon">
          <i className="icon">
            <Globe />
          </i>
          <input
            type="text"
            placeholder="Longitude"
            className="form-input-field"
            value={circularFormState.longitude}
            onChange={(e) => dispatch(setCircularFormLongitude(e.target.value))}
          />
        </div>

        <div className="form-input-icon">
          <i className="icon">
            <Globe />
          </i>
          <input
            type="text"
            placeholder="Max Radius"
            className="form-input-field"
            value={circularFormState.radius}
            onChange={(e) => dispatch(setCircularFormRadius(e.target.value))}
          />
        </div>
        <div className="form-button-icon">
          <i className="icon">
            <Search />
          </i>
          <button type="submit" className="form-button" onClick={onSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CircularForm;
