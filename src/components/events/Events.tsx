import React from "react";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "react-feather";
import { useAppSelector } from "../../state/hooks";
import EventCard from "./EventCard";

const featuresPerPage = 8;

const Events: React.FC = () => {
  const featureState = useAppSelector((state) => state.featureState.features);
  const [pageIndex, setPageIndex] = useState(0);

  const numOfFeatures: number = featureState.length;
  let numOfPages: number =
    numOfFeatures <= 8
      ? 1
      : (numOfFeatures - (numOfFeatures % featuresPerPage)) / featuresPerPage;

  // Calculates the appropriate amount of features per page
  const getPageFeatures = () => {
    let features;

    if (featureState.length <= featuresPerPage) features = [...featureState];
    else if (pageIndex + featuresPerPage > featureState.length)
      features = featureState.slice(pageIndex, featureState.length - 1);
    else features = featureState.slice(pageIndex, pageIndex + featuresPerPage);

    return features.map((feature) => (
      <EventCard key={feature.id} feature={feature} />
    ));
  };

  // Calculates the appropriate nav page numbers
  const getPages = () => {
    let pages = [pageIndex / 8];
    if (!(pageIndex + 8 >= featureState.length - 1)) {
      if (numOfPages > 1) pages.push(pageIndex / 8 + 1);
      if (!(pageIndex + 16 >= featureState.length - 1))
        if (numOfPages > 2) pages.push(pageIndex / 8 + 2);
    }

    return pages.map((page) => {
      return (
        <li
          className={`page-item ${pageIndex / 8 === page && "active"} `}
          aria-current="page"
        >
          <button className="page-link" onClick={(e) => setPageIndex(page * 8)}>
            {page + 1}
          </button>
        </li>
      );
    });
  };

  const getNav = () => {
    return (
      <nav className="pt-3 row " aria-label="...">
        <p className="col-sm-6 text-light d-flex justify-content-center align-items-center">
          <span>
            {" "}
            Page {pageIndex / 8 + 1} of {numOfPages}
          </span>
        </p>
        <ul className="col-sm-6 pagination d-flex justify-content-center align-items-center">
          <li className={`page-item ${pageIndex - 8 < 0 && "disabled"}`}>
            <button
              className="page-link"
              tabIndex={-1}
              aria-disabled="true"
              onClick={() => setPageIndex(0)}
            >
              <ChevronsLeft size={18} />
            </button>
          </li>
          <li className={`page-item ${pageIndex - 8 < 0 && "disabled"}`}>
            <button
              className="page-link"
              tabIndex={-1}
              aria-disabled="true"
              onClick={() =>
                setPageIndex((prevIndex) => {
                  if (prevIndex - 8 < 0) return 0;
                  return prevIndex - 8;
                })
              }
            >
              <ChevronLeft size={18} />
            </button>
          </li>
          {getPages()}
          <li
            className={`page-item ${
              pageIndex + 8 >= featureState.length - 1 && "disabled"
            }`}
          >
            <button
              className="page-link"
              onClick={() =>
                setPageIndex((prevIndex) => {
                  if (prevIndex + 8 >= featureState.length - 1)
                    return prevIndex;
                  return prevIndex + 8;
                })
              }
            >
              <ChevronRight size={18} />
            </button>
          </li>
          <li
            className={`page-item ${
              pageIndex + 8 >= featureState.length - 1 && "disabled"
            }`}
          >
            <button
              className="page-link"
              tabIndex={-1}
              aria-disabled="true"
              onClick={() => setPageIndex(numOfPages * 8)}
            >
              <ChevronsRight size={18} />
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className="flex-grow-1 d-flex flex-column primary-color justify-content-center align-items-center">
      {getNav()}
      <div className="flex-grow-1 primary-color text-light row gy-0 gx-0 justify-content-center">
        {getPageFeatures()}
      </div>
      {getNav()}
    </div>
  );
};

export default Events;
