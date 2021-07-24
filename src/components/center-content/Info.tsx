import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft, ArrowRight } from "react-feather";
import InfoTile from "./InfoTile";
import { State } from "../../state/index";
import { FeaturesStatus } from "../../state/util";
import {
  setPaginationIndex,
  setPaginationPage,
} from "../../state/action-creators/index";

const Info: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.features);

  const featuresPerPage: number = 3;
  const numOfFeatures: number = state.features.length;
  let numOfPages: number =
    numOfFeatures <= 3
      ? 1
      : (numOfFeatures - (numOfFeatures % featuresPerPage)) / featuresPerPage;

  // Create final page for leftover features
  if (numOfFeatures > 3 && numOfFeatures % featuresPerPage > 0) {
    numOfPages += 1;
  }

  const currentPageFeatures = state.features.slice(
    state.pagination.pageIndex,
    state.pagination.pageIndex + 3
  );

  const featureState = () => {
    switch (state.status) {
      case FeaturesStatus.LOADING:
        return <div className="loader"></div>;
      case FeaturesStatus.LOADED:
        return currentPageFeatures.map((feature) => (
          <InfoTile key={feature.id} feature={feature} />
        ));
      case FeaturesStatus.IDLE:
        if (state.features.length === 0) return <div>empty</div>;
        else
          return currentPageFeatures.map((feature) => (
            <InfoTile key={feature.id} feature={feature} />
          ));
      case FeaturesStatus.ERROR:
        return <div>There was an error. Try again.</div>;
      default:
        return <div></div>;
    }
  };

  return (
    <React.Fragment>
      <div className="body-header">
        <div className="pagination-group">
          <button
            className="pagination-button"
            disabled={state.pagination.currentPage === 1}
            onClick={(e) => {
              dispatch(setPaginationIndex(state.pagination.pageIndex - 3));
              dispatch(setPaginationPage(state.pagination.currentPage - 1));
            }}
          >
            <ArrowLeft />
          </button>
          <p className="pagination-text">
            Page {state.pagination.currentPage} of {numOfPages}
          </p>
          <button
            className="pagination-button"
            disabled={state.pagination.currentPage === numOfPages}
            onClick={(e) => {
              dispatch(setPaginationIndex(state.pagination.pageIndex + 3));
              dispatch(setPaginationPage(state.pagination.currentPage + 1));
            }}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="body-info">{featureState()}</div>
    </React.Fragment>
  );
};
export default Info;
