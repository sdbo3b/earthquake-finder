import { Feature } from "..";

export type ApiResponse = {
  bbox?: any[];
  features?: Feature[];
  metadata?: object;
  type?: string;
};
