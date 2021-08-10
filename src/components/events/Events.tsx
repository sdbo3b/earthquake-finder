import React from "react";
import { useState } from "react";
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
  const getFeatures = () => {
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
    if (numOfPages > 1) pages.push(pageIndex / 8 + 1);
    if (numOfPages > 2) pages.push(pageIndex / 8 + 2);

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
      <nav className="pt-3" aria-label="...">
        <ul className="pagination">
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
              Previous
            </button>
          </li>
          {getPages()}
          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                setPageIndex((prevIndex) => {
                  if (prevIndex + 8 > featureState.length) return prevIndex;
                  return prevIndex + 8;
                })
              }
            >
              Next
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
        {getFeatures()}
      </div>
      {getNav()}
    </div>
  );
};

export default Events;
