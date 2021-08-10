import { AppDispatch, RootState } from "..";
import earthquakeClient from "../../api/earthquake_client";
import {
  setFeaturesError,
  setFeaturesLoaded,
  setFeaturesLoading,
} from "../action-creators";
import { FormName } from "../util";

export const fetchCircularData =
  (latitude: any, longitude: any, maxRadiusKm: any): any =>
  async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(setFeaturesLoading());

    earthquakeClient
      .circularQuery({
        latitude: latitude,
        longitude: longitude,
        maxradiuskm: maxRadiusKm,
      })
      .then((features) => {
        if (features === undefined) throw new Error("Error retrieving data");
        dispatch(setFeaturesLoaded(features));
      })
      .catch((err) => {
        dispatch(
          setFeaturesError({
            form: FormName.CIRCULAR,
            msg: `Error retrieving data.`,
          })
        );
      });
  };

export const fetchRectangular =
  (
    minLatitude: string,
    minLongitude: string,
    maxLatitude: string,
    maxLongitude: string
  ): any =>
  async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(setFeaturesLoading());
    earthquakeClient
      .rectangularQuery({
        minlatitude: minLatitude,
        minlongitude: minLongitude,
        maxlatitude: maxLatitude,
        maxlongitude: maxLongitude,
      })
      .then((features) => {
        if (features === undefined) throw new Error("Error retrieving data");

        dispatch(setFeaturesLoaded(features));
      })
      .catch((err) => {
        dispatch(
          setFeaturesError({
            form: FormName.RECTANGULAR,
            msg: `Error retrieving data.`,
          })
        );
      });
  };
