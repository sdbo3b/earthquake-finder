import React from "react";
import { Globe, Search } from "react-feather";
import { useHistory } from "react-router-dom";
import {
  setRectangularFormError,
  setRectangularFormMaxLatitude,
  setRectangularFormMaxLongitude,
  setRectangularFormMinLatitude,
  setRectangularFormMinLongitude,
} from "../../../state/action-creators";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { fetchRectangular } from "../../../state/thunks";
import "../../../styles/forms/form.css";

const RectangularForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { minLatitude, maxLatitude, minLongitude, maxLongitude, error } =
    useAppSelector((state) => state.formsState.rectangularForm);

  const isError = () => error;
  const validateForm = (): string => {
    if (!(maxLatitude && minLatitude && minLongitude && maxLongitude))
      return "Please fill out all fields";
    else if (minLatitude > maxLatitude)
      return "min latitude must be <= max latitude";
    else if (minLongitude > maxLongitude)
      return "min longitude must be <= max longitude";
    else return "";
  };
  const setFormError = (error: string) =>
    dispatch(setRectangularFormError(error));

  const onSubmit = (e: any) => {
    e.preventDefault();
    const message: string = validateForm();

    if (!message) {
      dispatch(
        fetchRectangular(minLatitude, minLongitude, maxLatitude, maxLongitude)
      );
      history.push("/Events");
      setFormError("");
    } else {
      setFormError(message);
    }
  };

  return (
    <form className="flex-grow-1 d-flex" onSubmit={onSubmit} autoComplete="off">
      <div className="flex-grow-1 row gy-0 gx-0 align-items-center justify-content-center">
        <h2 className="fs-5 col-12 text-center text-danger align-self-start pt-5">
          {isError()}
        </h2>
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
              value={minLatitude}
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
              value={maxLatitude}
              onChange={(e) =>
                dispatch(setRectangularFormMaxLatitude(e.target.value))
              }
            />
          </div>

          <div className="w-100"></div>

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
              value={minLongitude}
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
              value={maxLongitude}
              onChange={(e) =>
                dispatch(setRectangularFormMaxLongitude(e.target.value))
              }
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

export default RectangularForm;
