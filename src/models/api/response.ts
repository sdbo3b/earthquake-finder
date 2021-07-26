export type Feature = {
  geometry?: any;
  id?: string;
  properties?: {
    alert: any;
    cdi: any;
    code: string;
    detail: string;
    dmin: any;
    felt: any;
    gap: any;
    ids: string;
    mag: number;
    magType: string;
    mmi: any;
    net: string;
    nst: any;
    place: string;
    rms: number;
    sig: number;
    sources: string;
    status: string;
    time: number;
    title: string;
    tsunami: number;
    type: string;
    types: string;
    tz: any;
    updated: number;
    url: string;
  };
  type?: string;
};

export type ApiResponse = {
  bbox?: any[];
  features?: Feature[];
  metadata?: object;
  type?: string;
};
