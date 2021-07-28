import React from "react";
import { Globe, Search } from "react-feather";
import {
  setCircularFormLatitude,
  setCircularFormLongitude,
  setCircularFormRadius,
} from "../../../state/action-creators";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { fetchCircularData } from "../../../state/thunks";
import { FeaturesStatus, FormName } from "../../../state/util";
import "../../../styles/forms/form.css";

const latRegex = /^(-)?([0-9]{0,2})(\.\d*)?$/;
const lonRegex = /^(-)?([0-9]{0,3})(\.\d*)?$/;
const decimalNumRegex = /^\d{0,5}(\.\d*)?$/;

const CircularForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const circularFormState = useAppSelector(
    (state) => state.formsState.circularForm
  );

  const errorState = useAppSelector((state) => state.featureState.error);
  const featureStatus = useAppSelector((state) => state.featureState.status);

  const isError = () => {
    if (
      errorState.form === FormName.CIRCULAR &&
      featureStatus === FeaturesStatus.ERROR
    ) {
      return errorState.msg;
    }
  };

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
    <div className="flex-grow-1">
      <div className="row gy-0 gx-0 align-items-center justify-content-center">
        <h2 className="fs-5 col-12 text-center text-danger">{isError()}</h2>
        <div className="col-sm-12 row justify-content-center">
          <label htmlFor="latitude" className="text-center">
            Latitude
          </label>
          <div className="form-input-icon col-sm-6 ">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              name="latitude"
              placeholder="Latitude"
              className="form-input-field"
              value={circularFormState.latitude}
              onChange={(e) =>
                dispatch(setCircularFormLatitude(e.target.value))
              }
            />
          </div>
          <div className="w-100"></div>
          <label htmlFor="longitude" className="text-center">
            Longitude
          </label>
          <div className="form-input-icon col-sm-6">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              className="form-input-field"
              value={circularFormState.longitude}
              onChange={(e) =>
                dispatch(setCircularFormLongitude(e.target.value))
              }
            />
          </div>
        </div>

        <div className="col-12 row justify-content-center">
          <label htmlFor="max-radius" className="text-center">
            Max Radius (km)
          </label>
          <div className="form-input-icon col-sm-6">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              name="max-radius"
              placeholder="Max Radius"
              className="form-input-field"
              value={circularFormState.radius}
              onChange={(e) => dispatch(setCircularFormRadius(e.target.value))}
            />
          </div>
          <div className="w-100"></div>
        </div>
        <div className="form-button-icon col-sm-12">
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
