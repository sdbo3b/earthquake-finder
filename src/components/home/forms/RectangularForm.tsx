import React from "react";
import { Globe, Search } from "react-feather";
import {
  setRectangularFormMaxLatitude,
  setRectangularFormMaxLongitude,
  setRectangularFormMinLatitude,
  setRectangularFormMinLongitude,
} from "../../../state/action-creators";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { fetchRectangular } from "../../../state/thunks";
import { FeaturesStatus, FormName } from "../../../state/util";
import "../../../styles/forms/form.css";

const RectangularForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const rectangularFormState = useAppSelector(
    (state) => state.formsState.rectangularForm
  );

  const errorState = useAppSelector((state) => state.featureState.error);
  const featureStatus = useAppSelector((state) => state.featureState.status);

  const isError = () => {
    if (
      errorState.form === FormName.RECTANGULAR &&
      featureStatus === FeaturesStatus.ERROR
    ) {
      return errorState.msg;
    }
  };

  const onSubmit = (e: any) => {
    dispatch(
      fetchRectangular(
        rectangularFormState.minLatitude,
        rectangularFormState.minLongitude,
        rectangularFormState.maxLatitude,
        rectangularFormState.maxLongitude
      )
    );
  };

  return (
    <div className="flex-grow-1">
      <div className="row gy-0 gx-0 align-items-center justify-content-center">
        <h2 className="fs-5 col-12 text-center text-danger">{isError()}</h2>
        <div className="col-sm-12 row justify-content-center">
          <label htmlFor="min-latitude" className="text-center">
            Minimum Latitude (Decimal [-90,90] degrees)
          </label>
          <div className="form-input-icon col-sm-6 ">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              name="min-latitude"
              placeholder="Min Latitude"
              className="form-input-field"
              value={rectangularFormState.minLatitude}
              onChange={(e) =>
                dispatch(setRectangularFormMinLatitude(e.target.value))
              }
            />
          </div>
          <div className="w-100"></div>
          <label htmlFor="max-latitude" className="text-center">
            Maximum Latitude (Decimal [-90,90] degrees)
          </label>
          <div className="form-input-icon col-sm-6">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              name="max-latitude"
              placeholder="Max Latitude"
              className="form-input-field"
              value={rectangularFormState.maxLatitude}
              onChange={(e) =>
                dispatch(setRectangularFormMaxLatitude(e.target.value))
              }
            />
          </div>
        </div>

        <div className="col-12 row justify-content-center">
          <label htmlFor="min-longitude" className="text-center">
            Minimum Longitude (Decimal [-360,360] degrees)
          </label>
          <div className="form-input-icon col-sm-6">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              name="min-longitude"
              placeholder="Min Longitude"
              className="form-input-field"
              value={rectangularFormState.minLongitude}
              onChange={(e) =>
                dispatch(setRectangularFormMinLongitude(e.target.value))
              }
            />
          </div>
          <div className="w-100"></div>

          <label htmlFor="max-longitude" className="text-center">
            Maximum Longitude (Decimal [-360,360] degrees)
          </label>
          <div className="form-input-icon col-sm-6">
            <i className="icon">
              <Globe />
            </i>
            <input
              type="text"
              name="max-longitude"
              placeholder="Max Longitude"
              className="form-input-field"
              value={rectangularFormState.maxLongitude}
              onChange={(e) =>
                dispatch(setRectangularFormMaxLongitude(e.target.value))
              }
            />
          </div>
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

export default RectangularForm;
