import React from "react";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "react-feather";
import { useAppSelector } from "../../state/hooks";
import { FeaturesStatus } from "../../state/util";
import EventCard from "./EventCard";

const RenderSpinner: React.FC = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-info"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

const featuresPerPage = 10;

const Events: React.FC = () => {
  const { features, status } = useAppSelector((state) => state.featureState);
  const [pageIndex, setPageIndex] = useState(0);

  const numOfFeatures: number = features.length;
  let numOfPages: number =
    numOfFeatures <= featuresPerPage
      ? 1
      : (numOfFeatures - (numOfFeatures % featuresPerPage)) / featuresPerPage;

  // Calculates the appropriate amount of features per page
  const getPageFeatures = () => {
    let _features;

    if (features.length <= featuresPerPage) _features = [...features];
    else if (pageIndex + featuresPerPage > features.length)
      _features = features.slice(pageIndex, features.length - 1);
    else _features = features.slice(pageIndex, pageIndex + featuresPerPage);

    return _features.map((feature) => (
      <EventCard key={feature.id} feature={feature} />
    ));
  };

  // Calculates the appropriate nav page numbers
  const getPages = () => {
    let pages = [pageIndex / featuresPerPage];
    if (!(pageIndex + featuresPerPage >= features.length - 1)) {
      if (numOfPages > 1) pages.push(pageIndex / featuresPerPage + 1);
      if (!(pageIndex + featuresPerPage * 2 >= features.length - 1))
        if (numOfPages > 2) pages.push(pageIndex / featuresPerPage + 2);
    }

    return pages.map((page, index) => {
      return (
        <li
          key={index}
          className={`page-item ${
            pageIndex / featuresPerPage === page && "active"
          } `}
          aria-current="page"
        >
          <button
            className="page-link"
            onClick={(e) => setPageIndex(page * featuresPerPage)}
          >
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
            Page {pageIndex / featuresPerPage + 1} of {numOfPages}
          </span>
        </p>
        <ul className="col-sm-6 pagination d-flex justify-content-center align-items-center">
          <li
            className={`page-item ${
              pageIndex - featuresPerPage < 0 && "disabled"
            }`}
          >
            <button
              className="page-link"
              tabIndex={-1}
              aria-disabled="true"
              onClick={() => setPageIndex(0)}
            >
              <ChevronsLeft size={18} />
            </button>
          </li>
          <li
            className={`page-item ${
              pageIndex - featuresPerPage < 0 && "disabled"
            }`}
          >
            <button
              className="page-link"
              tabIndex={-1}
              aria-disabled="true"
              onClick={() =>
                setPageIndex((prevIndex) => {
                  if (prevIndex - featuresPerPage < 0) return 0;
                  return prevIndex - featuresPerPage;
                })
              }
            >
              <ChevronLeft size={18} />
            </button>
          </li>
          {getPages()}
          <li
            className={`page-item ${
              pageIndex + featuresPerPage >= features.length - 1 && "disabled"
            }`}
          >
            <button
              className="page-link"
              onClick={() =>
                setPageIndex((prevIndex) => {
                  if (prevIndex + featuresPerPage >= features.length - 1)
                    return prevIndex;
                  return prevIndex + featuresPerPage;
                })
              }
            >
              <ChevronRight size={18} />
            </button>
          </li>
          <li
            className={`page-item ${
              pageIndex + featuresPerPage >= features.length - 1 && "disabled"
            }`}
          >
            <button
              className="page-link"
              tabIndex={-1}
              aria-disabled="true"
              onClick={() => setPageIndex(numOfPages * featuresPerPage)}
            >
              <ChevronsRight size={18} />
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  const renderContent = () => {
    switch (status) {
      case FeaturesStatus.LOADING:
        return <RenderSpinner />;
      case FeaturesStatus.LOADED:
        return (
          <React.Fragment>
            {getNav()}
            <div className="flex-grow-1 primary-color text-light row gy-0 gx-0 justify-content-center">
              {getPageFeatures()}
            </div>
            {getNav()}
          </React.Fragment>
        );
      case FeaturesStatus.ERROR:
        return (
          <div>
            <p className="text-danger">Error loading data</p>
          </div>
        );
      default:
        return (
          <React.Fragment>
            {getNav()}
            <div className="flex-grow-1 primary-color text-light row gy-0 gx-0 justify-content-center">
              {getPageFeatures()}
            </div>
            {getNav()}
          </React.Fragment>
        );
    }
  };

  return (
    <div className="flex-grow-1 d-flex flex-column primary-color justify-content-center align-items-center">
      {renderContent()}
    </div>
  );
};

export default Events;
