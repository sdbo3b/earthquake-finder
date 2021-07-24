import earthquakeApi from "./earthquake_api";
import {
  CircleParams,
  RectangleParams,
  ApiCallback,
  ApiResponse,
  Feature,
} from "../models/index";

const earthquakeClient = {
  circularQuery: async (
    params: CircleParams,
    callback?: ApiCallback
  ): Promise<Feature[] | undefined> => {
    const response: ApiResponse = await earthquakeApi(
      "query",
      params,
      callback
    );
    return response.features;
  },

  rectangularQuery: async (
    params: RectangleParams,
    callback?: ApiCallback
  ): Promise<Feature[] | undefined> => {
    const response: ApiResponse = await earthquakeApi(
      "query",
      params,
      callback
    );

    return response.features;
  },
};

export default earthquakeClient;
