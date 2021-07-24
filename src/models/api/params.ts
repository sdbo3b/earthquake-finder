import { ApiResponse } from "./response";

export type ApiCallback = (err?: any, data?: ApiResponse) => any;

export type CircleParams = {
  latitude: string;
  longitude: string;
  maxradiuskm: string;
};

export type RectangleParams = {
  minlatitude: string;
  minlongitude: string;
  maxlatitude: string;
  maxlongitude: string;
};
