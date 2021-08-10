import React from "react";
import { useState } from "react";
import { useAppSelector } from "../../state/hooks";
import EventCard from "./EventCard";

const featuresPerPage = 8;

const Events: React.FC = () => {
  const featureState = useAppSelector((state) => state.featureState.features);
  const [pageIndex, setPageIndex] = useState(0);

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
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <div>
        <button
          onClick={() =>
            setPageIndex((prevIndex) => {
              if (prevIndex - 8 < 0) return 0;
              return prevIndex - 8;
            })
          }
        >
          Back
        </button>
        <button
          onClick={() =>
            setPageIndex((prevIndex) => {
              if (prevIndex + 8 > featureState.length) return prevIndex;
              return prevIndex + 8;
            })
          }
        >
          Forward
        </button>
      </div>
      <div className="flex-grow-1 primary-color text-light row gy-0 gx-0 justify-content-center">
        {getFeatures()}
      </div>
    </div>
  );
};

export default Events;
