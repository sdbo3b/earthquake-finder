import earthquakeClient from "../../api/earthquake_client";
import {
  setFeaturesError,
  setFeaturesLoaded,
  setFeaturesLoading,
  setPaginationIndex,
  setPaginationPage,
} from "../action-creators";

export const fetchCircularData =
  (latitude: any, longitude: any, maxRadiusKm: any) => async (dispatch: any, getState: any) => {
    dispatch(setFeaturesLoading());
    dispatch(setPaginationIndex(0));
    dispatch(setPaginationPage(1));
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
        dispatch(setFeaturesError());
        console.log("An error occurred");
      });
  };

export const fetchRectangular =
  (
    minLatitude: string,
    minLongitude: string,
    maxLatitude: string,
    maxLongitude: string
  ) =>
  async (dispatch: any, getState: any) => {
    dispatch(setFeaturesLoading());
    dispatch(setPaginationIndex(0));
    dispatch(setPaginationPage(1));
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
        dispatch(setFeaturesError());
        console.log("An error occurred");
      });
  };
