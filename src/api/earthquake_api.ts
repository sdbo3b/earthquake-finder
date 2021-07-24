import axios from "axios";
import qs from "qs";
import { ApiCallback } from "../models/api/index";

const baseUrl: string = "https://earthquake.usgs.gov/fdsnws/event/1/";

type methods =
  | "application.json"
  | "application.wadl"
  | "catalogs"
  | "contributors"
  | "count"
  | "query"
  | "version";

const earthquakeApi = async (
  method: methods,
  params: any,
  callback?: ApiCallback
): Promise<any> => {
  if (!params.format) params.format = "geojson";
  //Optional limit
  //if (!params.limit) params.limit = 10;

  const response = await axios({
    method: "GET",
    baseURL: baseUrl,
    url: method,
    params: params,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "comma" }),
  })
    .then((res) => {
      if (callback) callback(undefined, res.data);
      return res.data;
    })
    .catch((err) => {
      if (callback) callback(err, undefined);
      else throw err;
    });

  return response;
};

export default earthquakeApi;
